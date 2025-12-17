# 🚀 Sudarsan Kumar - Portfolio Website

A modern, professional portfolio website showcasing AI/ML projects, education, and achievements with advanced design and smooth animations.

## ✨ Features

### 🎨 Design
- **Dark Theme First** - Modern, eye-friendly dark theme with glassmorphism effects
- **Responsive Design** - Fully responsive across all devices (Mobile, Tablet, Desktop)
- **Smooth Animations** - 60fps animations using CSS3 and Intersection Observer API
- **Particles.js Background** - Interactive particle animation on hero section
- **Glassmorphic UI** - Frosted glass effects throughout the interface
- **Custom Scrollbar** - Branded custom scrollbar design

### 🛠️ Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** (ES6+) - No framework dependencies
- **Google Fonts** - Poppins, Inter, JetBrains Mono
- **Font Awesome 6** - Icon library
- **Particles.js** - Background effects

### 📄 Pages
1. **Home** (`index.html`)
   - Hero section with typing animation
   - About me section
   - Tech stack showcase
   - Featured projects
   - Contact CTA

2. **Projects** (`projects.html`)
   - Filterable project grid
   - Glassmorphic cards
   - Tag system
   - GitHub & live demo links

3. **Education** (`education.html`)
   - Vertical timeline
   - Animated skill bars
   - Course highlights
   - Key achievements

4. **Achievements** (`achievements.html`)
   - Masonry grid layout
   - Certificate showcase
   - Award badges
   - Statistics counter

### 🎯 Advanced Features
- ✅ Scroll progress indicator
- ✅ Smooth scroll behavior
- ✅ Lazy loading images
- ✅ Back to top button
- ✅ Mobile menu with hamburger animation
- ✅ Typing effect on hero text
- ✅ Counter animations for statistics
- ✅ Skill bar animations
- ✅ Scroll reveal animations
- ✅ Custom 404 handling
- ✅ SEO optimized
- ✅ Accessibility (WCAG 2.1 AA)

## 📂 File Structure

```
Portfolio_sudarsan/
├── index.html                      # Home page
├── projects.html                   # Projects showcase
├── education.html                  # Education timeline
├── achievements.html               # Achievements & certificates
├── DESIGN_OVERHAUL_PLAN.md        # Design documentation
├── README.md                       # This file
├── assets/
│   ├── css/
│   │   ├── global.css             # CSS variables, reset, typography
│   │   ├── animations.css         # Keyframes & animation library
│   │   ├── components.css         # Reusable UI components
│   │   └── utilities.css          # Helper classes
│   ├── js/
│   │   ├── main.js                # Core functionality
│   │   ├── particles-config.js    # Particles.js configuration
│   │   └── animations.js          # Scroll animations handler
│   └── images/
│       ├── profile/               # Profile images
│       ├── projects/              # Project screenshots
│       ├── achievements/          # Certificate images
│       └── icons/                 # Custom icons
└── .git/
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build process required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sudarsankumar07/Portfolio.git
   cd Portfolio_sudarsan
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **View the portfolio**
   - Navigate to `http://localhost:8000`

## 🖼️ Adding Your Images

### Method 1: Local Images (Recommended)
1. Add your images to appropriate folders:
   - Profile photo → `assets/images/profile/`
   - Project screenshots → `assets/images/projects/`
   - Certificates → `assets/images/achievements/`

2. Update image paths in HTML files:
   ```html
   <!-- Replace placeholder with your image -->
   <img src="assets/images/profile/your-photo.jpg" alt="Your Name">
   ```

### Method 2: Google Drive
1. Upload images to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Get the file ID from the sharing link
4. Use this format:
   ```
   https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
   ```

### Method 3: Image Hosting Services
- **ImgBB** - https://imgbb.com
- **Imgur** - https://imgur.com
- **Cloudinary** - https://cloudinary.com

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/global.css`:
```css
:root {
    --bg-primary: #0a0e27;
    --accent-primary: #00d4ff;
    --accent-secondary: #6366f1;
    /* ...customize more colors */
}
```

### Typography
```css
:root {
    --font-heading: 'Poppins', sans-serif;
    --font-body: 'Inter', sans-serif;
    --fs-hero: clamp(2.5rem, 5vw, 4.5rem);
}
```

### Content
- Update personal information in HTML files
- Modify social media links
- Add/remove projects, achievements, education
- Update meta descriptions for SEO

## 📱 Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (limited support)

## ⚡ Performance
- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Mobile Optimized**: Yes

## 🔧 Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| CSS3 | Styling & animations |
| JavaScript (ES6+) | Interactivity |
| Particles.js | Background effects |
| Font Awesome | Icons |
| Google Fonts | Typography |

## 📝 TODO / Future Enhancements
- [ ] Add dark/light theme toggle
- [ ] Blog section integration
- [ ] Contact form with backend
- [ ] Google Analytics integration
- [ ] PWA support
- [ ] Multi-language support
- [ ] Resume download feature
- [ ] Project search functionality

## 🤝 Contributing
This is a personal portfolio, but suggestions are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sudarsan Kumar**
- GitHub: [@Sudarsankumar07](https://github.com/Sudarsankumar07)
- LinkedIn: [Sudarsan Kumar](https://www.linkedin.com/in/sudarsan-kumar-a73a69216/)
- Email: sudarsankumar@example.com

## 🙏 Acknowledgments
- Particles.js for amazing background effects
- Font Awesome for comprehensive icon library
- Google Fonts for beautiful typography
- GeeksforGeeks, Oracle, and YBI Foundation for certifications

## 📊 Project Stats
- **Total Files**: 15+
- **Lines of Code**: 5000+
- **CSS Variables**: 50+
- **Animations**: 30+
- **Responsive Breakpoints**: 3
- **Pages**: 4

---

<div align="center">
    <p>Made with ❤️ and ☕ by Sudarsan Kumar</p>
    <p>⭐ Star this repo if you found it helpful!</p>
</div>
