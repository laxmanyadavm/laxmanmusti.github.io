# Laxman Musti - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional UI with dark/light theme support
- **Responsive**: Optimized for all device sizes
- **Interactive**: Smooth animations and transitions
- **Resume Download**: Direct download functionality for resume
- **Recruiter Mode**: Special mode for recruiters with focused content
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with automated CI/CD
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/laxmanmusti/laxmanmusti.github.io.git
cd laxmanmusti.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. Every push to the main branch triggers a new deployment.

### Manual Deployment

To deploy manually using gh-pages:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   └── ui/                 # Reusable UI components
├── contexts/               # React contexts
├── hooks/                  # Custom hooks
├── pages/                  # Page components
├── lib/                    # Utility functions
└── assets/                 # Images and static files
```

## 🎨 Customization

### Adding New Sections

1. Create a new component in `src/components/portfolio/`
2. Import and add it to `src/pages/Index.tsx`
3. Update the navigation in `src/components/portfolio/Header.tsx`

### Updating Content

- **Personal Info**: Update components in `src/components/portfolio/`
- **Resume**: Replace `public/resume.pdf` with your resume
- **Images**: Add images to `src/assets/` and update imports

### Styling

- **Colors**: Modify `tailwind.config.ts`
- **Components**: Update individual component styles
- **Global Styles**: Edit `src/index.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: laxmanyadavmusti@gmail.com
- **LinkedIn**: [linkedin.com/in/laxman-musti](https://linkedin.com/in/laxman-musti/)
- **GitHub**: [github.com/laxmanyadavm](https://github.com/laxmanyadavm)
- **Website**: [laxmanmusti.com](https://laxmanmusti.com)

---

Built with ❤️ by Laxman Musti