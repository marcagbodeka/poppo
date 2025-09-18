import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Configuration
const WHATSAPP_NUMBER = "2250584849917"; // Remplacez par votre numéro
const WHATSAPP_MESSAGE = "Salut ! Je suis intéressé(e) par votre méthode pour stabiliser mes revenus à 200 000 FCFA/mois. Pouvez-vous m'en dire plus ?";

// Fonction utilitaire WhatsApp
const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

// Composant principal
function App() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth < 768; // Mobile uniquement (< md)
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0D1A13 0%, #111E16 100%)', color: '#fff', padding: 24 }}
      >
        <div className="container" style={{ maxWidth: 720 }}>
          <h1 className="fw-bold mb-3">Site disponible uniquement sur téléphone</h1>
          <p style={{ color: '#95C6A9' }}>
            Veuillez ouvrir ce site sur un smartphone pour bénéficier de la meilleure expérience.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="position-relative d-flex h-auto min-vh-100 w-100 flex-column justify-content-between overflow-x-hidden text-white"
      style={{
        backgroundImage: 'linear-gradient(180deg, #0D1A13 0%, #111E16 100%)',
        '--background-dark': '#0D1A13',
        '--text-primary': '#FFFFFF',
        '--text-secondary': '#95C6A9',
        '--accent-green': '#20DF6C',
        '--card-background': '#1A2D21',
      }}
    >
      {/* Pattern overlay */}
      <div
        className="position-absolute top-0 start-0 end-0 bottom-0"
        style={{
          opacity: 0.2,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0), radial-gradient(circle at 10px 10px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="position-relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <header className="d-flex align-items-center justify-content-between p-4">
          <div style={{ width: 48, height: 48 }} />
          <div className="fs-5 fw-bold">Agence Varek</div>
          <button className="d-flex align-items-center justify-content-center rounded-circle bg-transparent text-white border-0" style={{ width: 48, height: 48 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </header>

        <main className="px-4 px-md-5">
          {/* Hero Section */}
          <section className="d-flex min-vh-100 flex-column align-items-center justify-content-center text-center py-4">
            <h1 className="fw-bold mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2 }}>
              Stabilisez vos revenus à{' '}
              <span style={{ color: 'var(--accent-green)' }}>200 000 FCFA/mois minimum</span>
            </h1>

            <h2 className="mb-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: 520, fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              Sans capital de départ • Méthode simple et accessible à tous
            </h2>

            <button
              onClick={openWhatsApp}
              className="btn fw-bold rounded-pill d-inline-flex align-items-center justify-content-center gap-3 shadow"
              style={{ backgroundColor: 'var(--accent-green)', color: 'var(--background-dark)', borderColor: 'var(--accent-green)', height: 56, paddingInline: 32, fontSize: '0.95rem' }}
            >
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28">
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm40,120.37a28.27,28.27,0,0,1-15,14.88,44.38,44.38,0,0,1-19.34,3.75,23.74,23.74,0,0,1-11.49-3.44,52.44,52.44,0,0,1-14.88-10.23,53.33,53.33,0,0,1-10.23-14.88A23.74,23.74,0,0,1,93.63,123,44.38,44.38,0,0,1,97.38,103.7a28.27,28.27,0,0,1,14.88-15c4.71-2.31,9.8-3.41,14.88-3.44h.84a43.83,43.83,0,0,1,28.18,14.31,27.87,27.87,0,0,1,6.84,18.32A28.8,28.8,0,0,1,168,144.37Z"></path>
              </svg>
              Discuter avec mon agent 
            </button>
          </section>

          {/* Features Section */}
          <section className="py-5">
            <div className="d-grid gap-4">
              {/* Feature 1 */}
              <div className="text-center rounded-4 border shadow p-4" style={{ backgroundColor: 'var(--card-background)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="rounded-circle d-inline-block mb-3 p-3" style={{ backgroundColor: 'rgba(32,223,108,0.1)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: 'var(--accent-green)' }} strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16,8 20,8 23,11 23,16 16,16 16,8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <h3 className="h5 fw-bold mb-2">Aucun capital requis</h3>
                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                  Commencez à générer des revenus dès le premier jour sans aucun investissement initial.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center rounded-4 border shadow p-4" style={{ backgroundColor: 'var(--card-background)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="rounded-circle d-inline-block mb-3 p-3" style={{ backgroundColor: 'rgba(32,223,108,0.1)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: 'var(--accent-green)' }} strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="m5,3 a17,17 0 0,0 14,0" />
                    <path d="m5,21 a17,17 0 0,1 14,0" />
                  </svg>
                </div>
                <h3 className="h5 fw-bold mb-2">100% en ligne</h3>
                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                  Travaillez d'où vous voulez, quand vous voulez. Gérez vos revenus à distance.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center rounded-4 border shadow p-4" style={{ backgroundColor: 'var(--card-background)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="rounded-circle d-inline-block mb-3 p-3" style={{ backgroundColor: 'rgba(32,223,108,0.1)' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: 'var(--accent-green)' }} strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="h5 fw-bold mb-2">Accompagnement complet</h3>
                <p className="mb-0" style={{ color: 'var(--text-secondary)' }}>
                  Bénéficiez d'un suivi personnalisé pour vous aider à réussir à chaque étape.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-5 text-center">
            <h2 className="fw-bold mb-4" style={{ fontSize: '1.75rem', lineHeight: 1.2 }}>
              Prêt à stabiliser vos revenus ?
            </h2>
            <button
              onClick={openWhatsApp}
              className="btn btn-lg fw-bold rounded-pill d-inline-flex align-items-center justify-content-center gap-3 shadow"
              style={{ backgroundColor: 'var(--accent-green)', color: 'var(--background-dark)', borderColor: 'var(--accent-green)', height: 56, paddingInline: 32 }}
            >
              <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28">
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm40,120.37a28.27,28.27,0,0,1-15,14.88,44.38,44.38,0,0,1-19.34,3.75,23.74,23.74,0,0,1-11.49-3.44,52.44,52.44,0,0,1-14.88-10.23,53.33,53.33,0,0,1-10.23-14.88A23.74,23.74,0,0,1,93.63,123,44.38,44.38,0,0,1,97.38,103.7a28.27,28.27,0,0,1,14.88-15c4.71-2.31,9.8-3.41,14.88-3.44h.84a43.83,43.83,0,0,1,28.18,14.31,27.87,27.87,0,0,1,6.84,18.32A28.8,28.8,0,0,1,168,144.37Z"></path>
              </svg>
              Contactez nous
            </button>
            <p className="mt-3 mx-auto" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: 560 }}>
              Sécurisez votre avenir financier dès aujourd'hui. Contactez-nous pour en savoir plus.
            </p>
          </section>
        </main>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="position-sticky" style={{ bottom: 20, width: '100%', zIndex: 20, paddingInline: 16 }}>
        <button
          onClick={openWhatsApp}
          className="d-flex mx-auto align-items-center justify-content-center rounded-pill shadow-lg gap-3 border-0"
          style={{ maxWidth: 480, height: 64, overflow: 'hidden', backgroundColor: 'var(--accent-green)', color: 'var(--background-dark)' }}
        >
          <svg fill="currentColor" height="28" viewBox="0 0 256 256" width="28">
            <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm40,120.37a28.27,28.27,0,0,1-15,14.88,44.38,44.38,0,0,1-19.34,3.75,23.74,23.74,0,0,1-11.49-3.44,52.44,52.44,0,0,1-14.88-10.23,53.33,53.33,0,0,1-10.23-14.88A23.74,23.74,0,0,1,93.63,123,44.38,44.38,0,0,1,97.38,103.7a28.27,28.27,0,0,1,14.88-15c4.71-2.31,9.8-3.41,14.88-3.44h.84a43.83,43.83,0,0,1,28.18,14.31,27.87,27.87,0,0,1,6.84,18.32A28.8,28.8,0,0,1,168,144.37Z"></path>
          </svg>
          <span className="text-truncate">Commencer sur WhatsApp</span>
        </button>
      </div>
    </div>
  );
}

export default App;
