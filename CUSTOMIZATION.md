# Customization Checklist

Use this checklist to personalize your portfolio website.

## 🔴 Critical Updates (Required)

- [ ] **Hero Section** (`src/components/Hero.jsx`)
  - [ ] Replace "Your Name" with your actual name
  - [ ] Update typing effect roles (lines 48-52)
  - [ ] Update tagline/description (line 55)
  - [ ] Add your resume PDF to `public/resume.pdf` and update link (line 66)
  - [ ] Update social media links (GitHub, LinkedIn, Email) - lines 75-79

- [ ] **About Section** (`src/components/About.jsx`)
  - [ ] Update bio paragraphs (lines 50-65)
  - [ ] Replace profile image placeholder (line 75) - add your image to `public/` folder
  - [ ] Update Education details (line 88)
  - [ ] Update Career Goals (line 93)
  - [ ] Update Interests (line 98)

- [ ] **Contact Section** (`src/components/Contact.jsx`)
  - [ ] Update email address (line 142)
  - [ ] Update phone number (line 147)
  - [ ] Update location (line 152)
  - [ ] Configure EmailJS credentials in `.env` file

- [ ] **Projects** (`src/components/Projects.jsx`)
  - [ ] Replace all 6 placeholder projects with your actual projects
  - [ ] Update project images (add to `public/` or use external URLs)
  - [ ] Update project descriptions, tech stacks, and links
  - [ ] Update filter categories if needed

- [ ] **Certifications** (`src/components/Certifications.jsx`)
  - [ ] Replace all 6 placeholder certifications with your actual ones
  - [ ] Update organization logos or remove logo placeholders
  - [ ] Update credential IDs and verification links

- [ ] **GitHub Activity** (`src/components/GitHubActivity.jsx`)
  - [ ] Replace `yourusername` with your GitHub username (line 45)
  - [ ] Update pinned repositories (lines 12-32)
  - [ ] Update GitHub profile link (line 44)

- [ ] **Footer** (`src/components/Footer.jsx`)
  - [ ] Update copyright name (line 80)
  - [ ] Update social media links (lines 25-29)
  - [ ] Update contact information (lines 48-50)

- [ ] **Navbar** (`src/components/Navbar.jsx`)
  - [ ] Update portfolio brand name if desired (line 30)

- [ ] **SEO & Meta Tags** (`index.html`)
  - [ ] Update meta description (line 6)
  - [ ] Update meta keywords (line 7)
  - [ ] Update author name (line 8)
  - [ ] Update Open Graph tags (lines 9-11)
  - [ ] Update page title (line 14)

## 🟡 Optional Enhancements

- [ ] Add your actual profile image to `public/profile.jpg` or similar
- [ ] Add project screenshots to `public/projects/` folder
- [ ] Add certification logos to `public/certifications/` folder
- [ ] Customize color scheme in `tailwind.config.js` if desired
- [ ] Add more projects or certifications
- [ ] Add blog section (if applicable)
- [ ] Add testimonials section
- [ ] Integrate Google Analytics
- [ ] Add sitemap.xml for SEO
- [ ] Add robots.txt file

## 🔧 Configuration

- [ ] **EmailJS Setup:**
  1. Create account at https://www.emailjs.com/
  2. Create email service
  3. Create email template
  4. Add credentials to `.env` file

- [ ] **Environment Variables:**
  - Copy `.env.example` to `.env`
  - Fill in EmailJS credentials

## 📝 Content Guidelines

- **Projects:** Include 3-6 of your best projects
- **Certifications:** Include relevant professional certifications
- **Skills:** Update skill levels to match your expertise
- **About:** Write 2-3 paragraphs about yourself
- **Contact:** Ensure all contact methods are current

## 🎨 Design Customization

- Colors are defined in `tailwind.config.js`
- Font is Inter (can be changed in `index.html` and `tailwind.config.js`)
- Animations can be adjusted in component files
- Dark mode is default, light mode toggle is available

## ✅ Testing Checklist

Before deploying:
- [ ] Test all links (social media, projects, certifications)
- [ ] Test contact form with EmailJS
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test dark/light mode toggle
- [ ] Verify all images load correctly
- [ ] Check for console errors
- [ ] Test smooth scrolling navigation
- [ ] Verify resume download works

## 🚀 Deployment

- [ ] Push code to GitHub
- [ ] Connect to Vercel (or your hosting platform)
- [ ] Add environment variables in hosting platform
- [ ] Test live site
- [ ] Update domain name if using custom domain

