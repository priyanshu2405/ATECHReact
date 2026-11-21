import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import WorkIndexPage from './pages/WorkIndexPage';
import CaseStudyPage from './pages/CaseStudyPage';
import MarketPage from './pages/MarketPage';
import { PrivacyPolicyPage, TermsPage } from './pages/LegalPage';
import './App.css';

// Auto scroll to top on route navigation
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/about/" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/contact/" element={<ContactPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/pricing/" element={<PricingPage />} />
                        <Route path="/work" element={<WorkIndexPage />} />
                        <Route path="/work/" element={<WorkIndexPage />} />
                        <Route path="/work/:slug" element={<CaseStudyPage />} />
                        <Route path="/work/:slug/" element={<CaseStudyPage />} />
                        <Route path="/uk" element={<MarketPage marketSlug="uk" />} />
                        <Route path="/uk/" element={<MarketPage marketSlug="uk" />} />
                        <Route path="/canada" element={<MarketPage marketSlug="canada" />} />
                        <Route path="/canada/" element={<MarketPage marketSlug="canada" />} />
                        <Route path="/dubai-uae" element={<MarketPage marketSlug="dubai-uae" />} />
                        <Route path="/dubai-uae/" element={<MarketPage marketSlug="dubai-uae" />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                        <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/terms/" element={<TermsPage />} />
                        {/* Fallback to homepage */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton />
                <CookieConsent />
            </div>
        </BrowserRouter>
    );
}

export default App;
