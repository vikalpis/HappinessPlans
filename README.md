# Happiness Plans 😊

**Live Demo:** [happiness-plans-eight.vercel.app](https://happiness-plans-eight.vercel.app/)  
**GitHub Repo:** [vikalpis/HappinessPlans](https://github.com/vikalpis/HappinessPlans)

Happiness Plans is a modern, responsive, and animated web interface built with **React**, **Tailwind CSS**. The website is designed to promote wellness plans through a visually engaging layout and smooth UI/UX.

---

## 🛠️ Tech Stack

- **React.js** — JavaScript library for building the user interface
- **Vite** — Lightning-fast frontend tooling and dev server
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Lucide React** — Beautifully simple, consistent icons
- **React Router DOM** — SPA routing support

---

## 📁 Folder Structure

```
HappinessPlans/
├── public/
│   └── assets/            # Images and static assets
├── src/
│   ├── components/        # Reusable UI components (Hero, Navbar, Footer, Cards, etc.)
│   ├── pages/             # Page components (Home.jsx, etc.)
│   ├── App.jsx            # Main app entry point with routes
│   ├── main.jsx           # Renders the app with ReactDOM
│   └── index.css          # Tailwind CSS and global styles
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Features

- ⚡ Fast and responsive design with Vite & Tailwind CSS
- 🎞️ Smooth animations (few)
- 📱 Mobile-friendly layout
- 🧩 Component-based architecture (Hero, Plans, Footer, etc.)
- 🔁 SPA Navigation via React Router DOM
- 🌐 Deployed on **Vercel**

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vikalpis/HappinessPlans.git
cd HappinessPlans
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Components Overview

| Component     | Description |
|---------------|-------------|
| `Navbar.jsx`  | Navigation bar with links and site branding |
| `Hero.jsx`    | Landing section with title, description, call-to-action |
| `Cards.jsx`   | Displays various "plans" or service cards |
| `About.jsx`   | Info section explaining purpose of site |
| `Footer.jsx`  | Footer with social/contact info |
| `ContactForm.jsx` | Contact section (optional enhancement) |


---

## 🎨 Styling & Animations

- Tailwind classes (`bg-gradient-to-r`, `hover:scale-105`, `text-4xl`, etc.) handle all visual styles.
- Responsive layouts with Tailwind breakpoints (`md:`, `lg:`).

---

## 🌍 Deployment

This project is deployed on [**Vercel**](https://vercel.com/):

### Steps to deploy

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com/)
3. Import the project
4. Set build command: `npm run build`
5. Set output directory: `dist`

---

## 🧠 Ideas for Future Enhancements

- Add a backend (e.g., Node.js or Firebase) to store contact queries
- Add login/authentication using Firebase/Auth0
- Add CMS support for dynamic plan updates
- Animate scroll-based transitions with `react-scroll` or GSAP
- For handling emails, we can integrate relevant libraries
- Additionally, the design can be improved for better user experience.

---


## 🙌 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

## 👨‍💻 Author

Made with ❤️ by [@vikalpis](https://github.com/vikalpis)