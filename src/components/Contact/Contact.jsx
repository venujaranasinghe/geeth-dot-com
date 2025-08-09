"use client"

import { useState } from "react"
import styled from "styled-components"
import { Mail, Phone, MapPin } from "lucide-react"

// Additional background elements for enhanced visual effect
const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -5%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(102, 178, 178, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: float1 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 15%;
    right: -5%;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(102, 178, 178, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    animation: float2 25s ease-in-out infinite reverse;
  }

  @keyframes float1 {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(0px) translateX(20px);
    }
    75% {
      transform: translateY(20px) translateX(10px);
    }
  }

  @keyframes float2 {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    33% {
      transform: translateY(15px) translateX(-15px);
    }
    66% {
      transform: translateY(-10px) translateX(-25px);
    }
  }

  /* Disable animations on mobile and for reduced motion */
  @media (max-width: 768px) {
    &::before,
    &::after {
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`

// Geometric shapes for additional visual elements
const GeometricShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;

  .shape1 {
    position: absolute;
    top: 20%;
    right: 10%;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(102, 178, 178, 0.2);
    transform: rotate(45deg);
    animation: rotate 30s linear infinite;
  }

  .shape2 {
    position: absolute;
    bottom: 30%;
    left: 5%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid rgba(102, 178, 178, 0.15);
    animation: pulse 4s ease-in-out infinite;
  }

  .shape3 {
    position: absolute;
    top: 60%;
    right: 20%;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 26px solid rgba(102, 178, 178, 0.1);
    animation: bounce 6s ease-in-out infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(405deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.15;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.3;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Hide shapes on small screens to avoid clutter */
  @media (max-width: 768px) {
    .shape1,
    .shape2,
    .shape3 {
      display: none;
    }
  }

  /* Disable animations for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .shape1,
    .shape2,
    .shape3 {
      animation: none;
    }
  }
`

const ContactContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  padding: 48px 0;
  overflow-x: hidden;
  color: #333;
  box-sizing: border-box;
  margin: 0 4px;

  @media (min-width: 375px) {
    margin: 0 6px;
  }

  @media (min-width: 480px) {
    margin: 0 8px;
  }

  @media (min-width: 768px) {
    padding: 80px 0;
    margin: 0 10px;
  }

  @media (min-width: 1024px) {
    padding: 96px 0;
    margin: 0;
  }
`

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-image: linear-gradient(0deg, transparent 24%, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.03) 26%, transparent 27%),
                    linear-gradient(90deg, transparent 24%, rgba(0, 0, 0, 0.03) 25%, rgba(0, 0, 0, 0.03) 26%, transparent 27%);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
  animation: backgroundPan 60s linear infinite;

  /* Reduce pattern size on mobile for better performance */
  @media (max-width: 768px) {
    background-size: 30px 30px;
    animation: none; /* Disable animation on mobile for better performance */
  }

  /* Respect user's motion preferences */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @keyframes backgroundPan {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 50px 50px;
    }
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 320px) {
    padding: 0 16px;
  }

  @media (min-width: 375px) {
    padding: 0 20px;
  }

  @media (min-width: 480px) {
    padding: 0 24px;
  }

  @media (min-width: 640px) {
    padding: 0 30px;
  }

  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 10px;
  box-sizing: border-box;

  @media (min-width: 480px) {
    margin-bottom: 48px;
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    margin-bottom: 64px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    margin-bottom: 80px;
  }
`

const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #66b2b2;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1280px) {
    font-size: 5rem;
  }
`

const Underline = styled.div`
  width: 96px;
  height: 4px;
  background-color: #a0a0a0;
  border-radius: 9999px;
  margin: 0 auto;

  @media (min-width: 640px) {
    width: 128px;
  }

  @media (min-width: 768px) {
    width: 160px;
  }
`

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 0 8px;
  box-sizing: border-box;

  @media (min-width: 480px) {
    gap: 32px;
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0 8px;
  box-sizing: border-box;

  @media (min-width: 480px) {
    gap: 24px;
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    gap: 32px;
    padding: 0;
  }
`

const LeftTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: #66b2b2;
  margin-bottom: 16px;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 24px;
  }
`

const Description = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.75;
  max-width: 512px;
  padding: 0 5px;
  box-sizing: border-box;

  @media (max-width: 320px) {
    font-size: 0.9rem;
    line-height: 1.6;
    padding: 0 3px;
  }

  @media (min-width: 480px) {
    padding: 0 8px;
  }

  @media (min-width: 640px) {
    font-size: 1.125rem;
    padding: 0;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 5px;
  box-sizing: border-box;

  @media (max-width: 320px) {
    gap: 16px;
    padding: 0 3px;
  }

  @media (min-width: 480px) {
    padding: 0 8px;
  }

  @media (min-width: 640px) {
    padding: 0;
  }

  @media (min-width: 768px) {
    gap: 24px;
  }
`

const ContactDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  color: #6b7280;
`

const ContactIcon = styled.div`
  color: #66b2b2;
  flex-shrink: 0;
  margin-top: 4px;

  svg {
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`

const ContactText = styled.p`
  font-size: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`

const FormContainer = styled.div`
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;

  @media (max-width: 320px) {
    padding: 0 5px;
  }

  @media (min-width: 480px) {
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  margin-right: 5px;

  @media (max-width: 320px) {
    padding: 18px;
    gap: 18px;
    margin-right: 3px;
  }

  @media (min-width: 480px) {
    padding: 24px;
    gap: 24px;
  }

  @media (min-width: 640px) {
    padding: 32px;
  }

  @media (min-width: 768px) {
    padding: 40px;
    margin-right: 0;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  color: #1f2937;
  font-size: 1rem;
  font-weight: 500;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  color: #6b7280;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  margin-right: 3px;

  @media (max-width: 320px) {
    padding: 10px 14px;
    font-size: 0.9rem;
    margin-right: 2px;
  }

  @media (min-width: 640px) {
    padding: 16px 20px;
    font-size: 1.125rem;
    margin-right: 0;
  }

  &:focus {
    outline: none;
    border-color: #66b2b2;
    box-shadow: 0 0 0 3px rgba(102, 178, 178, 0.3);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  color: #6b7280;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;
  box-sizing: border-box;
  margin-right: 3px;

  @media (max-width: 320px) {
    padding: 10px 14px;
    font-size: 0.9rem;
    min-height: 100px;
    margin-right: 2px;
  }

  @media (min-width: 640px) {
    padding: 16px 20px;
    font-size: 1.125rem;
    min-height: 150px;
    margin-right: 0;
  }

  &:focus {
    outline: none;
    border-color: #66b2b2;
    box-shadow: 0 0 0 3px rgba(102, 178, 178, 0.3);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  @media (max-width: 320px) {
    padding-top: 16px;
  }

  @media (min-width: 640px) {
    justify-content: flex-end;
    padding-top: 16px;
  }
`

const SubmitButton = styled.button`
  background-color: #66b2b2;
  color: white;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 9999px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 48px;
  touch-action: manipulation;

  @media (max-width: 320px) {
    padding: 12px 28px;
    font-size: 0.9rem;
    min-height: 44px;
  }

  @media (min-width: 640px) {
    padding: 16px 40px;
    font-size: 1.125rem;
  }

  &:hover:not(:disabled) {
    background-color: #509a9a;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 178, 178, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Disable hover effects on touch devices */
  @media (hover: none) and (pointer: coarse) {
    &:hover:not(:disabled) {
      transform: none;
      box-shadow: none;
      background-color: #66b2b2;
    }
    
    &:active:not(:disabled) {
      background-color: #509a9a;
      transform: scale(0.98);
    }
  }
`

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target)
    formData.append("access_key", "614269f7-b3d6-44de-8d1a-2e0da19c4448")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json())

      if (res.success) {
        alert(res.message)
        event.target.reset()
      } else {
        alert("Failed to send message. Please try again later.")
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ContactContainer id="contact">
      <BackgroundPattern />
      <BackgroundElements />
      <GeometricShapes>
        <div className="shape1"></div>
        <div className="shape2"></div>
        <div className="shape3"></div>
      </GeometricShapes>

      <ContentWrapper>
        <TitleSection>
          <MainTitle>Get in touch</MainTitle>
          <Underline />
        </TitleSection>

        <MainContent>
          <LeftColumn>
            <div>
              <LeftTitle>Let's talk</LeftTitle>
              <Description>
                I'm currently available to take on new projects, so feel free to send me a message about anything that
                you want me to work on. You can contact anytime.
              </Description>
            </div>

            <ContactDetails>
              <ContactDetail>
                <ContactIcon>
                  <Mail />
                </ContactIcon>
                <ContactText>geeths2001@gmail.com</ContactText>
              </ContactDetail>

              <ContactDetail>
                <ContactIcon>
                  <Phone />
                </ContactIcon>
                <ContactText>+94 70 663 3356</ContactText>
              </ContactDetail>

              <ContactDetail>
                <ContactIcon>
                  <MapPin />
                </ContactIcon>
                <ContactText>75/1, Anagarika Dharmapala Mawatha, Kandy</ContactText>
              </ContactDetail>
            </ContactDetails>
          </LeftColumn>

          <FormContainer>
            <ContactForm onSubmit={onSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" name="name" placeholder="Enter Your Name" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Your E-mail</Label>
                <Input type="email" id="email" name="email" placeholder="Enter Your E-mail" required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Write your message here</Label>
                <TextArea name="message" id="message" rows={6} placeholder="Enter your message" required />
              </FormGroup>

              <ButtonContainer>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit now"}
                </SubmitButton>
              </ButtonContainer>
            </ContactForm>
          </FormContainer>
        </MainContent>
      </ContentWrapper>
    </ContactContainer>
  )
}
