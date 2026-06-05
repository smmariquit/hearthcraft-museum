import "./App.css";

export default function App() {
  return (
    <div className="hc-container">
      {/* Hero Section */}
      <section className="hc-hero">
        <div className="hc-hero-overlay"></div>
        <div className="hc-nav-container">
          <div className="hc-logo">
            <img src="/logo.png" alt="HearthCraft Logo" />
          </div>
          <nav className="hc-nav">
            <ul>
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#">Rules</a></li>
              <li><a href="#">Staff</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Bans</a></li>
              <li><a href="#">Vote</a></li>
              <li><a href="#">Map</a></li>
              <li><a href="#">Feedback</a></li>
              <li><a href="#">Store</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="hc-hero-content">
          <h1>Welcome to HearthCraft!</h1>
          <h2>We've been making the best experiences since October 2018.</h2>
          <a href="#" className="hc-btn-play">play.hearthcraft.net</a>
        </div>
      </section>

      {/* Core Features */}
      <section className="hc-features">
        <h3>CORE FEATURES</h3>
        <div className="hc-features-grid">
          <div className="hc-feature-box">
            <div className="hc-feature-icon">
              <i className="fas fa-bars"></i>
            </div>
            <h4>FEATURE-RICH</h4>
            <p>The server has just enough features to ensure that you have something to do. It doesn't have too much that it's overly complex.</p>
          </div>
          <div className="hc-feature-box">
            <div className="hc-feature-icon">
              <i className="fas fa-coffee"></i>
            </div>
            <h4>LAID-BACK COMMUNITY</h4>
            <p>We hate drama as much as you do. We don't tolerate anyone who intends to disrupt the server's peace.</p>
          </div>
          <div className="hc-feature-box">
            <div className="hc-feature-icon">
              <i className="fas fa-laugh"></i>
            </div>
            <h4>LIVELINESS</h4>
            <p>We are not one of those soulless hub servers. In HearthCraft, we try our best to keep the community active, connected, and undivided</p>
          </div>
        </div>
      </section>

      {/* Player Reviews */}
      <section className="hc-reviews">
        <h3>PLAYER REVIEWS</h3>
        <div className="hc-reviews-subtitle">
          <p><strong>Don't take <em>only</em> our</strong></p>
          <p><strong>word for it.</strong></p>
        </div>
        
        <div className="hc-reviews-grid">
          <div className="hc-review-box">
            <div className="hc-quote-icon">
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="hc-review-text">I very much enjoy this server and all the work that's gone into it. It took me a little time to become part of the community but I think that says more about me because the people are, for the most part, lovely.</p>
            <div className="hc-review-author">
              <img src="/MaebeeNot.png" alt="MaebeeNot" />
              <h5>MaebeeNot</h5>
            </div>
          </div>
          
          <div className="hc-review-box">
            <div className="hc-quote-icon">
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="hc-review-text">I've been playing for a bit now and it the first server I joined cause I literally bought java just to play it with my mates and honestly best decision ever! I love the server so much and the staff and everyone is so nice. It has literally made me laugh so many times and its better to every other server I've been on. So uniquely kind!</p>
            <div className="hc-review-author">
              <img src="/BoatFrog.png" alt="BoatFrog" />
              <h5>BoatFrog</h5>
            </div>
          </div>

          <div className="hc-review-box">
            <div className="hc-quote-icon">
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="hc-review-text">This server is a wonderful place, the crates are a nice addition, there are many additions to special items you get in them, not to mention the addition of all the plugins like BetterEnd and mcMMO really spice up the experience itself. The staff are friendly, do their jobs well and everyone is able to have a good time because of them, keep up the good work.</p>
            <div className="hc-review-author">
              <img src="/SerenityUsagi77.png" alt="SerenityUsagi77" />
              <h5>SerenityUsagi77</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer className="hc-footer-area">
        <div className="hc-footer-top">
          <div className="hc-footer-col">
            <h2>About us</h2>
            <p className="hc-about-text">Since 2018, HearthCraft has had one goal in mind: to create a community that people can call home, thus the name "HearthCraft". We've created a lot of happy experiences for players that involve sweet hellos, laughing, banter, and some warmth amidst the cold world.</p>
            
            <div className="hc-social-links">
              <div className="hc-social-item">
                <div className="hc-social-icon bg-email">
                  <i className="fas fa-envelope"></i>
                </div>
                <a href="mailto:support@hearthcraft.net">support@hearthcraft.net</a>
              </div>
              <div className="hc-social-item">
                <div className="hc-social-icon bg-discord">
                  <i className="fab fa-discord"></i>
                </div>
                <a href="#">discord.hearthcraft.net</a>
              </div>
            </div>
          </div>
          
          <div className="hc-footer-col">
            <h2>Navigation</h2>
            <ul className="hc-footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Rules</a></li>
              <li><a href="#">Staff Members</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Vote</a></li>
              <li><a href="#">Server Store</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Store Terms and Conditions</a></li>
              <li><a href="#">Survival Minecraft Server List</a></li>
            </ul>
          </div>
        </div>
        
        <div className="hc-footer-bottom">
          <p>
            <span className="fw-normal">© 2021</span> HearthCraft | <span className="fw-normal">Website Developed by</span> Examp1e <span className="fw-normal">| HearthCraft is not, in any way, associated with Mojang AB.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
