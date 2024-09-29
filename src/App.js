import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainContent from './components/MainContent';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Import all the pages created, stored in the 'components' folder
import UYM2 from './components/UYM2';
import UYM from './components/UYM';
import Members from './components/Members';
import Photos from './components/Photos';
import Videos from './components/Videos';
import News from './components/News';
import Support from './components/Support';

function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === '/register';

  // Set dynamic document title based on route
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home - My App';
        break;
      case '/register':
        document.title = 'Register - My App';
        break;
      case '/uym2':
        document.title = 'UYM 2.0 - My App';
        break;
      case '/uym':
        document.title = 'UYM - My App';
        break;
      case '/members':
        document.title = 'Members - My App';
        break;
      case '/photos':
        document.title = 'Photos - My App';
        break;
      case '/videos':
        document.title = 'Videos - My App';
        break;
      case '/news':
        document.title = 'News - My App';
        break;
      case '/support':
        document.title = 'Support - My App';
        break;
      default:
        document.title = 'My App';
    }
  }, [location]);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main Content Route */}
          <Route path="/" element={<MainContent />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />

          {/* UYM 2.0 Page */}
          <Route path="/uym2" element={<UYM2 />} />

          {/* UYM Page */}
          <Route path="/uym" element={<UYM />} />

          {/* Members Page */}
          <Route path="/members" element={<Members />} />

          {/* Photos Page */}
          <Route path="/photos" element={<Photos />} />

          {/* Videos Page */}
          <Route path="/videos" element={<Videos />} />

          {/* News Page */}
          <Route path="/news" element={<News />} />

          {/* Support Page */}
          <Route path="/support" element={<Support />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
