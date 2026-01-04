# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- 🎨 Modern UI/UX with dark/light mode toggle
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form with EmailJS integration
- 🔍 SEO optimized with meta tags
- ♿ Accessible design (ARIA labels, keyboard navigation)
- 🎯 Project filtering and modal popups
- 📊 Animated skill progress bars
- 🏆 Certifications showcase
- 💻 GitHub activity section

## 🛠️ Tech Stack

- **Frontend:** React.js 18, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, AOS
- **Icons:** Lucide React, React Icons
- **Forms:** EmailJS
- **Deployment:** Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- EmailJS account (for contact form)

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)
   - Add them to `.env`:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Customize your content:**
   - Update personal information in components (Hero, About, Contact, etc.)
   - Replace placeholder project data in `src/components/Projects.jsx`
   - Update certifications in `src/components/Certifications.jsx`
   - Add your resume PDF to `public/resume.pdf`
   - Update GitHub username in `src/components/GitHubActivity.jsx`
   - Update social media links throughout components

5. **Start the development server:**
```bash
npm run dev
```

6. **Build for production:**
```bash
npm run build
```

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change name, roles, and tagline
   - Update social media links
   - Add your resume PDF

2. **About Section** (`src/components/About.jsx`):
   - Update bio and career information
   - Replace profile image placeholder
   - Update education, goals, and interests

3. **Projects** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your actual projects
   - Update images, descriptions, and links
   - Add your tech stack

4. **Certifications** (`src/components/Certifications.jsx`):
   - Add your certifications
   - Update credential IDs and verification links

5. **Contact** (`src/components/Contact.jsx`):
   - Update contact information
   - Ensure EmailJS is configured

6. **GitHub Activity** (`src/components/GitHubActivity.jsx`):
   - Replace `yourusername` with your GitHub username
   - Update pinned repositories

### Color Scheme

The design uses:
- **Background:** Black (#000000)
- **Primary Teal:** #14b8a6
- **Primary Yellow:** #eab308

You can customize colors in `tailwind.config.js`.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` file is already configured.

### Other Platforms

The site can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting

## 📁 Project Structure

```
Portfolio/
├── public/          # Static assets
├── src/
│   ├── components/ # React components
│   ├── context/    # React context
│   ├── App.jsx     # Main app component
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

## 🎨 Design Features

- **Color Scheme:** Black background with Teal and Yellow accents
- **Typography:** Inter font family
- **Animations:** Smooth scroll effects, hover animations, page transitions
- **Responsive:** Mobile-first design approach
- **Dark Mode:** Default dark theme with light mode toggle

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Animations powered by Framer Motion
- Icons from Lucide React

