import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "@components/app"

// Application to Render
const app = (
    <App />
);

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
