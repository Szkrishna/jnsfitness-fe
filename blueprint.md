# Project Blueprint

## Purpose and Capabilities

This project is a web application built with React. The goal is to create a modern and visually appealing user interface for a basic accommodation and fitness website. The AI assistant will iteratively develop the application based on user requests, following modern React and web development best practices.

## Project Outline

### Initial Version (v0.1)

*   **Framework:** React (Vite)
*   **Styling:** CSS with a default dark theme.
*   **Fonts:** System default fonts.
*   **Components:** Default `App.jsx` component.

### Version (v0.6)

*   **Framework:** React (Vite) with `react-router-dom` for routing.
*   **Styling:**
    *   **Enhanced Dark Theme:** A modern, visually rich dark theme has been implemented with a fullscreen background.
    *   **Fonts:** 'Montserrat' imported from Google Fonts for a clean and modern look.
    *   **Title Styling:** The main title "JNS" has been styled with a vibrant color gradient.
    *   **Component-Specific Styles:** Components have their own dedicated CSS files for better organization.
*   **Components:**
    *   The UI has been refactored into pages (`Home`, `About`, `SportsAcademy`, `FitnessClub`, `Coliving`).
    *   A `Header` component has been added with a logo and navigation links.
*   **Routing:** Basic routing is set up for all pages.

## Current Change: Add Header and Navigation

### Plan

1.  **Update `blueprint.md` to document the new header and routing.**
2.  **Install `react-router-dom` for handling navigation.**
3.  **Create a `Header` component (`src/components/Header.jsx`) with a logo and navigation links.**
4.  **Create a CSS file for the header (`src/components/Header.css`).**
5.  **Restructure the project to use a `pages` directory.**
    *   Move `src/components/home.jsx` to `src/pages/Home.jsx`.
    *   Move `src/components/home.css` to `src/pages/Home.css`.
    *   Update import paths in `Home.jsx`.
6.  **Create placeholder components for the new pages:**
    *   `src/pages/About.jsx`
    *   `src/pages/SportsAcademy.jsx`
    *   `src/pages/FitnessClub.jsx`
    *   `src/pages/Coliving.jsx`
7.  **Update `App.jsx` to set up routing using `react-router-dom` and include the `Header` component.**
