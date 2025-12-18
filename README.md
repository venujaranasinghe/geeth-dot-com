# 🌐 Geeth Seneviratne - Personal Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.19-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, responsive personal portfolio website showcasing my skills, projects, certifications, and services as a Computer Science undergraduate.

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Technologies](#-technologies-used)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Available Scripts](#-available-scripts)
- [Customization](#-customization)
- [Contributing](#-contributing)
- [Contact](#-contact)
- [License](#-license)

---

## 👤 About

This portfolio website is designed and developed by **Geeth Seneviratne**, a second-year Computer Science undergraduate at Sri Lanka Institute of Information Technology (SLIIT). The website showcases my technical skills, projects, certifications, and services while providing a seamless user experience with modern animations and responsive design.

---

## ✨ Features

### 🏠 **Hero Section**
- Eye-catching introduction with animated text
- Profile image display
- Quick access to social media links (LinkedIn, GitHub, Facebook, Instagram, Twitter)
- Call-to-action buttons for connecting and viewing resume

### 📖 **About Section**
- Detailed personal introduction
- Animated skill progress bars
- Technical proficiency visualization
- Skills include: HTML/CSS, React JS, Java, Python, and more

### 💼 **Services Section**
- Showcases offered services with beautiful card designs
- Horizontally scrollable service cards
- Services include:
  - Web Design
  - Web App Design
  - Machine Learning
  - Arduino Projects

### 🚀 **Projects/My Work Section**
- Portfolio gallery displaying completed projects
- Interactive project cards
- Categories include web design, mobile apps, data analysis, e-commerce, and IoT

### 📜 **Certificates Section**
- Display of professional certifications
- Organized certificate gallery
- Includes certifications from AWS, Google Cloud, Microsoft, Meta, and more

### 📬 **Contact Section**
- Interactive contact form
- Contact information display (email, phone, location)
- Beautiful floating background animations
- Form validation

### 🎨 **Design Features**
- Modern glassmorphism design elements
- Smooth scroll navigation
- Responsive layout for all devices
- Animated transitions and hover effects
- Consistent teal color theme (#66b2b2)
- Subtle grid pattern backgrounds

---

## 🖼️ Screenshots

<details>
<summary>Click to view screenshots</summary>

### Hero Section
![Hero Section](./screenshots/hero.png)

### About Section
![About Section](./screenshots/about.png)

### Services Section
![Services Section](./screenshots/services.png)

### Projects Section
![Projects Section](./screenshots/projects.png)

### Contact Section
![Contact Section](./screenshots/contact.png)

</details>

---

## 🛠️ Technologies Used

### Frontend Framework
| Technology | Version | Description |
|------------|---------|-------------|
| React | 18.3.1 | UI component library |
| Vite | 6.0.5 | Next-generation frontend build tool |

### Styling
| Technology | Version | Description |
|------------|---------|-------------|
| Styled Components | 6.1.19 | CSS-in-JS styling solution |
| CSS3 | - | Custom animations and responsive design |

### Libraries & Dependencies
| Library | Version | Purpose |
|---------|---------|---------|
| react-scroll | 1.9.3 | Smooth scrolling navigation |
| react-anchor-link-smooth-scroll | 1.0.12 | Anchor link smooth scrolling |
| lucide-react | 0.539.0 | Modern icon library |
| react-icons | 5.5.0 | Popular icon packs |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 9.17.0 | Code linting and formatting |
| @vitejs/plugin-react | 4.3.4 | Vite React plugin |

---

## 📁 Project Structure

```
geeth-dot-com/
├── public/                     # Static assets
│   ├── profile3.png           # Hero profile image
│   ├── profile_img.jpg        # About section image
│   └── ...                    # Other public assets
├── src/
│   ├── assets/                # Data files
│   │   ├── certificates_data.js
│   │   ├── mywork_data.js
│   │   └── services_data.js
│   ├── components/            # React components
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Certificates/
│   │   │   └── Certificates.jsx
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero1/
│   │   │   ├── Hero1.jsx
│   │   │   └── Hero1.css
│   │   ├── MyWork/
│   │   │   ├── MyWork.jsx
│   │   │   └── MyWork.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   └── Service/
│   │       ├── Service.jsx
│   │       └── Service.css
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global styles
│   ├── main.jsx               # Application entry point
│   └── index.css              # Root styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

---

## 🚀 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/venujaranasinghe/geeth-dot-com.git
   cd geeth-dot-com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio.

---

## 📖 Usage

### Development Mode
```bash
npm run dev
```
Starts the development server with hot module replacement (HMR).

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Locally preview the production build.

### Linting
```bash
npm run lint
```
Run ESLint to check for code quality issues.

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server |
| `build` | `npm run build` | Build for production |
| `lint` | `npm run lint` | Run ESLint |
| `preview` | `npm run preview` | Preview production build |

---

## 🎨 Customization

### Updating Personal Information

1. **Profile Images**: Replace images in the `public/` folder
   - `profile3.png` - Hero section image
   - `profile_img.jpg` - About section image

2. **Social Links**: Edit `src/components/Hero1/Hero1.jsx`
   ```jsx
   <a href="https://www.linkedin.com/in/your-linkedin/" ...>
   <a href="https://github.com/your-github" ...>
   ```

3. **Services**: Modify `src/assets/services_data.js`
   ```javascript
   const services_data = [
     {
       s_no: "01",
       s_name: "Your Service",
       s_desc: "Description of your service"
     },
     // Add more services...
   ];
   ```

4. **Projects**: Update `src/assets/mywork_data.js`
   ```javascript
   const mywork_data = [
     { w_no: 1, w_name: "Project Name", w_img: "/project-image.png" },
     // Add more projects...
   ];
   ```

5. **Certificates**: Edit `src/assets/certificates_data.js`
   ```javascript
   const certificates_data = [
     { 
       c_no: 1, 
       c_name: "Certificate Name", 
       c_issuer: "Issuing Organization",
       c_date: "2024",
       c_img: "/certificate-image.png"
     },
     // Add more certificates...
   ];
   ```

### Changing Theme Colors

The primary color theme uses teal (#66b2b2). To customize:

1. Search for `#66b2b2` across component files
2. Replace with your preferred color
3. Update related hover states and gradients

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📞 Contact

**Geeth Seneviratne**

- 🌐 GitHub: [@geethsenaviratne](https://github.com/geethsenaviratne)
- 💼 LinkedIn: [Geeth Seneviratne](https://www.linkedin.com/in/geethseneviratne/)
- 📘 Facebook: [Geeth Seneviratne](https://www.facebook.com/share/1YfSjfV2Tu/)
- 📸 Instagram: [@geethseneviratne](https://www.instagram.com/invites/contact/?igsh=1vbja1sbj1gxj&utm_content=1ub3bq1)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

Made with ❤️ by [Geeth Seneviratne](https://github.com/geethsenaviratne)

</div>