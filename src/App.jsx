import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import ContactPage from './pages/ContactPage';
import { LoginPage, SignupPage } from './pages/AuthPages';
import { UserDashboard, OwnerDashboard, AdminDashboard } from './pages/DashboardPages';

// Pages where we hide nav/footer
const hideLayoutPaths = ['/login', '/signup', '/dashboard'];

function Layout({ children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isAuth = location.pathname === '/login' || location.pathname === '/signup';
  const showLayout = !isDashboard && !isAuth;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/owner" element={<OwnerDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <p className="font-serif text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-dark-900 mb-3">Page Not Found</h1>
        <p className="text-dark-400 text-base mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-gold px-8 py-3.5 rounded-xl font-semibold text-sm inline-block">
          Go Back Home
        </a>
      </div>
    </main>
  );
}
