# 🎬 Movie App

A modern, responsive movie discovery application built with React, TypeScript, and Vite. Browse movies, search for your favorites, and save them to your personal favorites list.

## ✨ Features

- **Movie Discovery**: Browse and explore a vast collection of movies
- **Search Functionality**: Quickly find movies by title
- **Favorites Management**: Save your favorite movies for later viewing
- **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for optimized development and production builds
- **Type Safety**: Full TypeScript support for robust code quality

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Routing**: React Router v7
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Styling**: CSS3
- **Code Quality**: ESLint with TypeScript support
- **Hosting**: Netlify (with serverless functions)

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Moviecard.tsx   # Individual movie card component
│   └── Navbar.tsx      # Navigation bar
├── context/            # React Context for state management
│   └── MovieContext.tsx
├── pages/              # Page components
│   ├── Home.tsx        # Main movie discovery page
│   └── Favorites.tsx   # Favorites list page
├── services/           # API and external service calls
│   └── api.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Root application component
├── main.tsx            # Entry point
└── index.css           # Global styles

netlify/
└── functions/          # Serverless functions
    └── movie.js

public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Movie\ App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with your API credentials:
   ```
   VITE_API_KEY=your_api_key_here
   VITE_API_BASE_URL=https://api.example.com
   ```

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-optimized application
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 💻 Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` directory.

## 🔍 Code Quality

Run ESLint to maintain code standards:

```bash
npm run lint
```

## 📱 Features Breakdown

### Home Page
- Display popular and trending movies
- Search movies by title
- Filter and sort options
- View movie details (rating, genre, synopsis)
- Add movies to favorites

### Favorites Page
- View all saved favorite movies
- Remove movies from favorites
- Persistent storage across sessions

### Movie Card
- Display movie poster, title, and rating
- Quick add/remove from favorites functionality
- Click to view detailed information

## 🌐 Deployment

This project is configured for Netlify deployment with serverless functions support.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the Vite configuration
4. Your app will be live after the build completes

### Environment Variables on Netlify

Add your environment variables in Netlify's dashboard under Site Settings → Environment.

## 📦 Dependencies

### Production
- `react@^19.2.0` - UI library
- `react-dom@^19.2.0` - DOM rendering
- `react-router-dom@^7.10.1` - Client-side routing
- `@reduxjs/toolkit@^2.11.1` - State management
- `react-redux@^9.2.0` - Redux React bindings
- `axios@^1.13.2` - HTTP client
- `react-icons@^5.5.0` - Icon library
- `dotenv@^17.2.3` - Environment variables

### Development
- `typescript@~5.9.3` - Type checking
- `vite@^7.2.4` - Build tool
- `@vitejs/plugin-react@^5.1.1` - React plugin for Vite
- `eslint@^9.39.1` - Code linting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For support, questions, or feedback, please open an issue on the GitHub repository.

---

Built with ❤️ using React & TypeScript
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
