# 💎 Lumina Jewels - Jewelry Website

A modern, elegant jewelry website built with React and Tailwind CSS, featuring beautiful components and responsive design.

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, elegant design with premium feel
- **Component-Based** - Reusable React components
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Premium Animations** - Smooth transitions and hover effects
- **Accessible** - Built with accessibility best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Amit-Dev03/jewellary-app.git
   cd jewellery-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Tailwind CSS** (if not already configured)

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Install Lucide React** (for icons)

   ```bash
   npm install lucide-react
   ```

5. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
jewellery-app/
├── src/
│   ├── components/
│   │   ├── Footer.jsx          # Footer component
│   │   └── ...                 # Other components
│   ├── styles/
│   │   └── index.css           # Global styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx               # Entry point
├── public/
├── package.json
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md
```

## 🎨 Components

### Footer Component

The footer component includes:

- **Brand Section** - Logo, description, and social media links
- **Collections** - Quick navigation to jewelry categories
- **Customer Care** - Support and service links
- **Contact Information** - Phone, email, and address
- **Legal Links** - Privacy policy, terms of service, etc.

#### Usage

```jsx
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Your other components */}
      <Footer />
    </div>
  );
}
```

#### Customization

To customize the footer for your brand:

1. **Update Brand Information**

   ```jsx
   // In Footer.jsx, change:
   <h3 className="...">Your Brand Name</h3>
   <p className="...">Your brand description</p>
   ```

2. **Modify Contact Details**

   ```jsx
   // Update phone, email, and address
   <span className="...">+1 (your-phone)</span>
   <span className="...">your-email@domain.com</span>
   ```

3. **Customize Colors**
   ```jsx
   // Change the color scheme by updating Tailwind classes
   // Current: yellow-400, amber-500, slate-900
   // Example: blue-400, indigo-500, gray-900
   ```

## 🎯 Tailwind Configuration

Make sure your `tailwind.config.js` includes:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind directives to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting

### Adding New Components

1. Create component file in `src/components/`
2. Use Tailwind classes for styling
3. Follow the same design patterns as the footer
4. Import and use in your app

### Design System

**Colors:**

- Primary: `yellow-400`, `amber-500` (Gold/Jewelry theme)
- Background: `slate-900`, `slate-800` (Dark premium feel)
- Text: `white`, `slate-300`, `slate-400`

**Typography:**

- Headers: `text-lg`, `text-xl`, `text-2xl`
- Body: `text-sm`, `text-base`
- Font weight: `font-semibold`, `font-bold`

**Spacing:**

- Containers: `max-w-7xl`, `px-6`, `py-16`
- Grid gaps: `gap-8`
- Element spacing: `space-y-4`, `space-x-3`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

## 🎨 Customization Guide

### Changing the Color Scheme

1. **Update Primary Colors**

   ```jsx
   // Replace yellow-400/amber-500 with your colors
   from-yellow-400 to-amber-500 → from-blue-400 to-blue-500
   text-yellow-400 → text-blue-400
   hover:text-yellow-400 → hover:text-blue-400
   ```

2. **Background Colors**
   ```jsx
   // Update dark theme colors
   from-slate-900 via-slate-800 to-slate-900
   // To lighter theme:
   from-gray-50 via-white to-gray-50
   ```

### Adding New Sections

```jsx
// Add after existing sections in the grid
<div className="space-y-4">
  <h4 className="text-lg font-semibold text-yellow-400">Your Section</h4>
  <ul className="space-y-2">{/* Your content */}</ul>
</div>
```

## 📱 Responsive Design

The footer is fully responsive:

- **Mobile**: Single column layout
- **Tablet**: 2-column layout (`md:grid-cols-2`)
- **Desktop**: 4-column layout (`lg:grid-cols-4`)

## ♿ Accessibility

- Proper color contrast ratios
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - For the amazing utility-first CSS framework
- [Lucide React](https://lucide.dev/) - For beautiful icons
- [Vite](https://vitejs.dev/) - For fast development experience
- [React](https://reactjs.org/) - For the component-based architecture
- Redux Tooklit - for effective state management

## 📞 Support

If you have any questions or need help:

- 📧 Email: pandeyamit2426@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/Amit-Dev03/jewellary-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Amit-Dev03/jewellery-app/discussions)

---

**Happy Coding! ✨**

_Built with ❤️ for jewelry lovers_
