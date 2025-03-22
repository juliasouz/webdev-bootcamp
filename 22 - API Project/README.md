# Book Recommender

A website that allows users to search for books using the Open Library API. Built with a focus on user experience, the project features a responsive interface with light/dark theme support.

## 🚀 Features

- Book search by genre, author, or type
- Modern, responsive interface
- Light/dark theme support
- Detailed book information display
- Interactive modal for additional details
- Adaptive design for all screen sizes

## 🛠️ Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - EJS (Template Engine)
  - Open Library API Integration

- **Frontend:**
  - CSS (Grid, Flexbox, CSS Variables)
  - Font Awesome Icons
  - Responsive Design
  - Interactive UI Components

## 🔧 Project Structure

```
book-recommender/
├── public/
│   └── css/
│       └── styles.css
│   
├── views/
│   ├── index.ejs
│   └── results.ejs
├── app.js
└── package.json
```

## 🎨 Theme System

Here it's implemented a comprehensive theme system:

### Light Theme
- Background: #ffffff
- Text: #333333
- Accent: #4e00c2
- Borders: #e0e0e0
- Card Background: #ffffff
- Shadow: rgba(0, 0, 0, 0.1)

### Dark Theme
- Background: #1a1a1a
- Text: #ffffff
- Accent: #4e00c2
- Borders: #27272a
- Card Background: #2d2d2d
- Shadow: rgba(0, 0, 0, 0.3)

## 🔍 User Guide

1. On the home page, select one or more search types to combine:
   - Genre (e.g., Fiction, Mystery, Science Fiction)
   - Author (e.g., Stephen King, J.K. Rowling)
   - Type (e.g., Novel, Short Story, Poetry)
   You can combine these filters (e.g., search for Science Fiction novels by a specific author)
2. Enter your search query
3. Click "Search" to find books
4. On the results page, you can:
   - View basic book information, like book synopsis
   - Click "More Info" for additional details
   - Toggle between light and dark themes
   - Return to the home page

## 📱 Responsive Design

The application features a responsive layout that automatically adjusts to different screen sizes:

- The book grid automatically adjusts the number of columns based on available space
- Each book card maintains a minimum width of 250px for optimal readability
- The modal view adapts to a single column layout on mobile devices
- All UI elements scale appropriately across different screen sizes

## 👥 Authors

- Julia Souza

## 🙏 Acknowledgments

- Open Library API for providing book data
- Font Awesome for the icon set