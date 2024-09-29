import React from 'react';
import '../styles/Footer.css'; // 
import logo from '../assets/logo.png'; 
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-icons">
        <a href="https://x.com/UyouthP"><img src="https://img.icons8.com/ios-filled/50/DC143C/twitter.png" alt="twitter" /></a>
        <a href="https://youtube.com/@unitedyouthparliament?si=UmEG_m_32mciJgA9"><img src="https://img.icons8.com/ios-filled/50/DC143C/youtube-play.png" alt="YouTube" /></a>
        <a href="https://www.instagram.com/unitedyouthparliament/"><img src="https://img.icons8.com/ios-filled/50/DC143C/instagram-new.png" alt="Instagram" /></a>

        <a href="https://www.facebook.com/share/xsQkEYrGGPEmh3Ny/?mibextid=qi2Omg"><img src="https://img.icons8.com/ios-filled/50/DC143C/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/50/DC143C/discord-logo.png" alt="Discord" /></a>
      </div>

      <div className="footer-middle">
        
        <p>© 2020-2024 The United Youth Parliament is a dynamic college program designed to empower students by fostering leadership, debate, and collaboration. It offers a platform for young individuals to engage in discussions on global issues, develop critical thinking skills, and advocate for positive change in their communities.</p>
      </div>

      <div className="footer-bottom">
        <a href="#" className="footer-link">PRIVACY NOTICE</a>
        <a href="#" className="footer-link">TERMS OF SERVICE</a>
        <img src={logo} alt="ESRB Rating" className="esrb-logo" />
      </div>
    </footer>
  );
}

export default Footer;
