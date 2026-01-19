# Movie Discovery App

## Overview

This is a modern movie discovery application built with React and Tailwind CSS. It allows users to search for movies using The Movie Database (TMDB) API and displays a list of trending search terms powered by an Appwrite backend. The application features a responsive design and real-time search capabilities.

## Features

- **Movie Search**: Users can search for movies by title. Results are fetched instantly from the TMDB API.
- **Trending Movies**: Displays the top 5 most searched movies based on user interaction, tracked via Appwrite.
- **Responsive Design**: The interface is fully responsive, optimized for both desktop and mobile devices.
- **Debounced Search**: Implements search debouncing to optimize API calls and improve performance.
- **Loading States**: Visual feedback provided during data fetching.

## Technology Stack

- **Frontend Framework**: React (Vite)
- **Styling**: Tailwind CSS
- **Backend / Database**: Appwrite (for tracking search trends)
- **Movie Data**: The Movie Database (TMDB) API

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory.
3.  Install the dependencies:

    ```bash
    npm install
    ```

## Configuration

This project requires several environment variables to function correctly. Create a `.env.local` file in the root directory and add the following keys:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_API_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_API_TABLE_ID=your_appwrite_collection_id
```

**Note**: You will need to obtain an API key from TMDB and set up a project in Appwrite with a database and collection to get these values.

## Usage

### Development Server

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Production Build

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run the linter and check for code style issues:

```bash
npm run lint
```

## Project Structure

- `src/App.jsx`: Main application component containing the logic for state management, data fetching, and rendering.
- `src/appwrite.js`: Configuration and helper functions for interacting with the Appwrite backend.
- `src/components/`: Directory containing reusable UI components (Search, Spinner, MovieCard).
- `src/assets/`: Directory for static assets like images and icons.

## License

This project is open source and available under the MIT License.
