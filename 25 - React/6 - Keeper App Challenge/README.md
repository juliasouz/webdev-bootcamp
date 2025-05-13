# Keeper App

A simple and modern note-taking web application inspired by Google Keep. Users can quickly add, view, and delete notes in a clean, responsive interface. Built with React and Material UI, the Keeper App focuses on usability and a visually appealing design.

## 🚀 Features

- Add and delete notes instantly
- Responsive, modern interface
- Material UI icons and components
- Animated add button with smooth transitions
- Persistent header and footer
- Adaptive design for all screen sizes

## 🛠️ Tech Stack

- **Frontend:**
  - React
  - Material UI (MUI)
  - CSS (Flexbox, Responsive Design)
  - Google Fonts (Inter)

- **Tooling:**
  - Vite (development/build)
  - ESLint (linting)

## 🔧 Project Structure
```
keeper-app/ 
├── public/ 
│   └── styles.css 
├── src/ 
│   ├── components/ 
│   │   ├── App.jsx 
│   │   ├── Header.jsx
│   │   ├── Footer.jsx 
│   │   ├── Note.jsx 
│   │   └── CreateArea.jsx 
│   ├── notes.js
│   └── index.jsx 
├── index.html 
└── package.json
```

## 🎨 Design Highlights

- **Header:** Features a white Material UI icon and bold app title on a yellow background.
- **Add Note:** Floating action button (FAB) in yellow, animated with Material UI's Zoom.
- **Delete Note:** Each note has a yellow circular delete button with a trash icon.
- **Notes Layout:** Notes are displayed in a responsive grid, adapting to any screen size.
- **Footer:** Simple, always visible, with the current year.

## 🔍 User Guide

1. **Add a Note:**  
   - Click on the "Take a note..." area.
   - Enter a title and content.
   - Click the yellow "+" button to add your note.

2. **View Notes:**  
   - All notes appear below the add form in a grid layout.

3. **Delete a Note:**  
   - Click the yellow trash icon on any note to remove it instantly.

4. **Responsive Design:**  
   - The layout adapts for mobile, tablet, and desktop screens.

## 📱 Responsive Design

- Notes and forms scale smoothly for all device sizes.
- The add button and delete buttons remain accessible and visually consistent.
- Layout uses CSS Flexbox and media queries for adaptability.

## 🙏 Acknowledgments

- [Material UI](https://mui.com/) for icons and components
- [Google Fonts](https://fonts.google.com/) for typography inspiration