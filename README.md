# Aakash Group — Corporate Website

Official corporate website for **Aakash Group**, showcasing the group's diverse portfolio of businesses across Food & Beverages, Information & Technology, Banking, Insurance, and Real Estate sectors.

🌐 **Live Site:** [aakash.group](https://aakash.group)

---

## 📌 Overview

This is the official website of Aakash Group — a multi-sector conglomerate headquartered in Nepal. The site provides an overview of the group's companies, industries, careers, and contact information.

**Subsidiary Companies:**
- 🍜 [Angan Sweets](https://angansweets.com/) — Food & Beverages
- 💻 [Aakash Labs](https://aakashlabs.com) — Information & Technology
- 🌐 [RelayN](https://relayn.ai) — Information & Technology
- 🏦 [Aakash Capital](https://aakashcapital.com.np/) — Banking
- 🛡️ [Siddhartha Premier Insurance](https://siddharthapremier.com.np/) — General Insurance
- 🏥 [Sanima Reliance Life](https://www.sanimareliancelife.com/) — Life Insurance
- 🏠 [BnB KTM](https://bnbktm.com/) — Real Estate

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM v7 |
| Backend/Auth | Firebase |
| Animations | GSAP |
| Icons | Lucide React, Heroicons |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher (or yarn/pnpm)

### Installation

```bash
# 1. Clone the repository
git clone git@gitlab.com:aakashlabs/aakash-Group.git

# 2. Navigate to the project directory
cd aakash-Group

# 3. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory. See `.env.example` for the required variables (Firebase config, etc.):

```bash
cp .env.example .env
```

Then fill in your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## ⚙️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the codebase with ESLint |

### Run Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** by default.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## 📁 Project Structure

```
aakash-Group/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── Components/       # Reusable UI components
│   │   └── Layout/       # Header, Footer, etc.
│   ├── Pages/            # Route-level page components
│   └── main.jsx          # App entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Merge Request on GitLab

---

## 📄 License

Private — All rights reserved © 2026 **Aakash Group**