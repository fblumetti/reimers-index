import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './reimers-bone.jsx';

// HOPE study edition (Hip Outcomes after Proximal femoral Epiphysiodesis),
// served at /hope/. Same app, plus subject ID, NSA/HSA and CSV export.
createRoot(document.getElementById('root')).render(
  <StrictMode><App variant="hope" /></StrictMode>
);
