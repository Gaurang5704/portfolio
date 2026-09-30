import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // On route change, scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // On initial mount: disable scroll restoration so browser doesn't jump
  // to a saved position (which causes the footer-jump bug on reload).
  // Tab-switches do NOT trigger a mount, so they preserve scroll offset naturally.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
