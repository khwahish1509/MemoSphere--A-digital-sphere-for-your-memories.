import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for ReactDOM in React 18
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root container
root.render(<React.StrictMode><App /></React.StrictMode>); // Render the application
