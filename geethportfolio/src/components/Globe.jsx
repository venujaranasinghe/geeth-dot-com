import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function Globe() {
  const mountRef = useRef(null)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    if (!mountRef.current) return

    // Create scene, camera, and renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // Create a starfield
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 10000
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.7,
      sizeAttenuation: true,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Create an atmospheric glow using a custom shader
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `
    const atmosphereFragmentShader = `
     uniform vec3 glowColor;
     varying vec3 vNormal;
     void main() {
       float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
       gl_FragColor = vec4(glowColor, 1.0) * intensity;
     }
   `
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 32, 32)
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      uniforms: {
        glowColor: { value: new THREE.Color(0x3a86ff) },
      },
    })
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphereMesh)

    // Create wireframe globe
    const wireframeGeometry = new THREE.SphereGeometry(5, 32, 32)
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3a86ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    })
    const wireframeGlobe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    scene.add(wireframeGlobe)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 10

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.enableZoom = false

    const colors = [
      new THREE.Color(0x3a86ff), // Blue
      new THREE.Color(0x8338ec), // Purple
      new THREE.Color(0xff006e), // Pink
      new THREE.Color(0xfb5607), // Orange
      new THREE.Color(0xffbe0b), // Yellow
    ]
    let colorIndex = 0
    let nextColorIndex = 1
    let colorT = 0
    const colorTransitionSpeed = 0.005

    const lerpColor = (a, b, t) => {
      const color = new THREE.Color()
      color.r = a.r + (b.r - a.r) * t
      color.g = a.g + (b.g - a.g) * t
      color.b = a.b + (b.b - a.b) * t
      return color
    }

    let animationId

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Color transition logic
      colorT += colorTransitionSpeed
      if (colorT >= 1) {
        colorT = 0
        colorIndex = nextColorIndex
        nextColorIndex = (nextColorIndex + 1) % colors.length
      }

      const currentColor = lerpColor(colors[colorIndex], colors[nextColorIndex], colorT)

      // Update materials with new color
      wireframeGlobe.material.color = currentColor
      atmosphereMesh.material.uniforms.glowColor.value = currentColor

      // Rotate the globes, atmosphere, and starfield for dynamic effect
      wireframeGlobe.rotation.y += 0.001
      atmosphereMesh.rotation.y += 0.0005
      stars.rotation.y += 0.0001
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    const hintTimer = setTimeout(() => {
      setShowHint(false)
    }, 3000) // Hide hint after 3 seconds

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      controls.dispose()
      clearTimeout(hintTimer)
    }
  }, [])

  return (
    <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10">
      {showHint && (
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-30 text-white text-sm px-3 py-1 rounded-full transition-opacity duration-1000 opacity-80 hover:opacity-100">
          Drag to explore
        </div>
      )}
    </div>
  )
}
