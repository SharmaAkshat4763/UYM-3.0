import React from 'react';

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useInView } from 'react-intersection-observer'; // Import useInView for scroll animations
import '../styles/MainContent.css'; // Ensure you create this file for styling

function MainContent() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the Register page when button is clicked
  };

  // Create refs to track if the sections are in view
  const { ref: firstSectionRef, inView: isFirstSectionVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: secondSectionRef, inView: isSecondSectionVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: thirdSectionRef, inView: isThirdSectionVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div>
      {/* Video Background Section */}
      <div className="main-content">
        <video
          src="https://videos.pexels.com/video-files/20794145/20794145-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          className="background-video"
        ></video>
        <div className="overlay-content">
          <h1>United Youth Parliament <span className='red'>3.0</span></h1>
          <p><span className='white'>Platform where students, dressed as politicians, engage in debates and discussions, simulating real-world political scenarios.</span></p>
          <button className="cta-button" onClick={handleRegisterClick}>Register Now</button>
        </div>
      </div>
      
      {/* Latest News Section */}
      <div className="latest-news-section">
        <h2 className="section-title">The Latest</h2>
        <div className="news-cards-container">
          {/* Card 1 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 1" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">DEV | 9/20/2024</p>
              <h3 className="news-title">Player Behavior, Balance, and Anti-Cheat // Dev Updates</h3>
              <p className="news-description">Our final Dev Update before we roll into 2025.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 2" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">GAME UPDATES | 9/20/2024</p>
              <h3 className="news-title">Vanguard x VALORANT</h3>
              <p className="news-description">How the anti-cheat team continues to evolve as cheaters do.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="news-card">
            <img 
              src="https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200" 
              alt="News 3" 
              className="news-image" 
            />
            <div className="news-content">
              <p className="news-category">COMMUNITY | 9/13/2024</p>
              <h3 className="news-title">Community Roundup: August 2024 - Vyse Edition</h3>
              <p className="news-description">"I have the vision, I am the means." See the community's take on Vyse.</p>
            </div>
          </div>
        </div>

        <div className="news-button-container">
          <a href="#" className="news-button">Go to News Page</a>
        </div>
      </div>

      {/* Valorant Section with Video */}
      <div className={`new-section valorant-section ${isFirstSectionVisible ? 'animate-section' : ''}`} ref={firstSectionRef}>
        <div className="valorant-content">
          <h2>We Are United Youth Parliament</h2>
          <p>
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
          </p>
        </div>
        <div className="valorant-video">
          <video
            src="https://media.istockphoto.com/id/1399065815/video/particle-plasma-burst-on-black-background.mp4?s=mp4-640x640-is&k=20&c=-ik-_rEbOxWqqrgznQvOSLHmPLaolkTlQmpO3lKljGk="
            autoPlay
            loop
            muted
            className="valorant-background-video"
          ></video>
        </div>
      </div>

      {/* Defy the Limits Section */}
      <div className={`new-section valorant-section ${isSecondSectionVisible ? 'animate-section' : ''}`} ref={secondSectionRef}>
        <div className="valorant-content">
          <h2>Defy the Limits</h2>
          <p>
            Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush. Play fast and think faster to survive.
          </p>
        </div>
        <div className="valorant-video">
          <video
            src="https://videosforuyp.s3.ap-south-1.amazonaws.com/1700639054923524.MP4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCmFwLXNvdXRoLTEiRzBFAiEA%2BYqaBB2I67F4sucD5WoRfsS9%2BaMHS9lMJJhgf7OCSVoCIAFY31jJu8XFusmbEVYb7fQI84rb2B74iD7o3inlXLgQKv0CCFgQABoMMDIxODkxNTg2MTc5IgxeVGe4QkPcxNZySCwq2gJJXxpsoAxyl112lAz7MiCUsy8w%2FE1Mk7v4FZ1CurLJy%2BTFABky8okUIrnvrzjpd3HdE1v6ROZoGMYhM%2B8%2F8XXFWAqmsFobCJTnPqYzcZauTYOxLvQKZmNdKunQyDE2F3jBmzHccLJ%2FffgA%2FHxNzQKi%2F8wXIdliZuGlBEV6mn76xBhgJZ5vw%2Fsm6a6XpRfXK49i%2BHOhH1u1NwFMfYhsVDHj6V6s4GsFpe9ge%2F%2Bf8L691FIbC27gCvEydO7EK2VySFuIe7KVsi05fS06kdlnOcl0Q9pvobmTbeEeijm2%2FpwOdDnukIRIxpFFTijhal7z9fWKIUY5K0JVVAieOYQzdQp0Aa42NWhPXF%2BKxJ1%2Fdm%2FtHjXYa83b%2B5VUKWcYW1d0YcnQb%2Fhh5kuhTgIga3y1Hy%2BMsH85wNg3BciUVlqo5wwQUS3hj1Kah%2FygSY5cuOgcg09Vt9h9AcO%2FWrDcMLXr47cGOrMCA%2Fwijcj%2B0ShB%2BcLECsmUiJgfGuugXxGOlq83nAYvtOJC4S8G0l04wLXS7mKLQYLmq%2BCCkDGJfypC9Gl4YmIXB%2FDEmgWQF1xfiY9%2BR5BHdR1wWlLVQXDxBnWR0wM4vhR7FVyu6Da%2FVnoZezxNr0JVQiEsa8Oy6NhKK2hsl54mkH2LlJs9YigHxR7FEIpweNWeI7rzORdqmlsvxQ%2BvwCtqd1b7TuVuyT00FqmTMY4bdzSOIyXD6uUfgP4PxwppksL5dArEmVlnfkCoapd%2BZyHnJmrhQ5W8Zbiq%2FEQQeiY6xvgNm1qs2jTJoTvrU0ynjMCrIFv8jjFGZ8oiNDguDYbiGZ8sMhbe6HSY2XWQANLq7FucmDrAiDRmvkJlmbteNvUsULvLvu4FawhXVuDj5Us5N0qBsA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240929T170122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAQKGGXDCB6B72QBCF%2F20240929%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=39606ff0ffad475d3396381308df041b73555d2251b4fb3d0c89b616d547d459"
            autoPlay
            loop
            muted
            className="valorant-background-video"
          ></video>
        </div>
      </div>

      {/* Join the Fight Section */}
      <div className={`new-section valorant-section ${isThirdSectionVisible ? 'animate-section' : ''}`} ref={thirdSectionRef}>
        <div className="valorant-content">
          <h2>Join the Fight</h2>
          <p>
            Experience the intensity of battle, whether you’re fighting alone or with a team. Valorant offers unique characters, abilities, and styles for every player.
          </p>
        </div>
        <div className="valorant-video">
          <video
            src="https://media.istockphoto.com/id/1399065815/video/particle-plasma-burst-on-black-background.mp4?s=mp4-640x640-is&k=20&c=-ik-_rEbOxWqqrgznQvOSLHmPLaolkTlQmpO3lKljGk="
            autoPlay
            loop
            muted
            className="valorant-background-video"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
