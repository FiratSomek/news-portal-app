# News Portal App

## Overview

The **News Portal App** is a modern and dynamic news website built with **Next.js** and **Tailwind CSS**. This application provides users with categorized news content, search functionality, and an intuitive user interface.

## Features

- **Home Page**: Displays trending and latest news articles.
- **Categories**: Organized news content by category.
- **Search Functionality**: Users can search for specific news articles.
- **Responsive Design**: Fully optimized for desktop and mobile.
- **Navigation Bar**: Easy access to different categories.
- **Authentication**: Sign-up and sign-in functionality (to be improved).
- **Dynamic Routing**: Each article and category has its own dynamic route.
- **Dark Mode Support** _(if implemented in future updates)_.

## Technologies Used

- **Next.js** – For server-side rendering and static site generation.
- **React** – For building reusable UI components.
- **Tailwind CSS** – For styling and responsive design.
- **Framer Motion** – For smooth animations.
- **React Icons** – For enhanced UI experience.
- **Git & GitHub** – Version control and collaboration.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/FiratSomek/news-portal-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd news-portal-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`

## Folder Structure

```
news-portal-app/
│-- public/            # Static assets (images, icons, etc.)
│-- src/
│   ├── components/    # Reusable UI components (Navbar, SearchBar, etc.)
│   ├── pages/         # Next.js pages (index.tsx, categoryDetail.tsx, etc.)
│   ├── styles/        # Global and component-specific styles
│   ├── utils/         # Utility functions and helper files
│-- .gitignore         # Files and folders to be ignored by Git
│-- package.json       # Project dependencies and scripts
│-- README.md          # Project documentation
```

## How to Contribute

1. **Fork the repository**
2. **Create a new branch**
   ```sh
   git checkout -b feature-new-feature
   ```
3. **Make your changes** and commit them
   ```sh
   git commit -m "Added new feature"
   ```
4. **Push to your branch**
   ```sh
   git push origin feature-new-feature
   ```
5. **Create a Pull Request** on GitHub

## Future Improvements

- **API Integration**: Fetch news from an external API instead of using static data.
- **User Authentication**: Implement Firebase or NextAuth for authentication.
- **Comment System**: Allow users to comment on articles.
- **Bookmark Feature**: Users can save articles to read later.

## License

This project is licensed under the **MIT License**.

---

### Contact

For any questions or suggestions, feel free to reach out via GitHub: [FiratSomek](https://github.com/FiratSomek)
