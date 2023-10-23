import React ,{ useRef } from "react";
import "./App.css"; // Add your CSS styling here 
function App() {
  const bioRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="header">
      
      <div className="profile-image-container">
          <div className="circle-border"></div>
        </div>
        <h1>VISWA SAI</h1>
        <p>Web Developer</p>
      </header>

      <section className="bio">
        <h2>Bios</h2>
        <p>Date of Birth: August 7,2003</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>School</h3>
          <p>Sri Vijnana Vihara English medium school</p>
        </div>

        <div className="intermediate">
          <h3>Intermediate</h3>
          <p>Gravitty</p>
        </div>

        <div className="btech">
          <h3>B.Tech</h3>
          <p>Vit-ap</p>
        </div>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Playing Cricket</li>
          <li>Reading</li>
          <li>Music Listening</li>
          {/* Add more hobbies */}
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form><div className="social-icons">
        <a href="https://www.linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      </section>
      
    </div>
  );
}

export default App;
