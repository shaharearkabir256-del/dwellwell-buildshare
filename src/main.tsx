import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// WelcomeModal import করো
import WelcomeModal from './WelcomeModal.tsx'

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <WelcomeModal />
  </>
);
