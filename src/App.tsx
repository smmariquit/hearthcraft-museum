import "./App.css";

export default function App() {
  return (
    <div className="hc-museum-container">
      <nav className="hc-nav">
        <div className="hc-logo">HC Museum [EXTREMELY WIP]</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#discord">Discord</a></li>
        </ul>
      </nav>
      <header className="hc-header">
        <h1>Welcome to HC Museum!</h1>
        <h2>We've been making the best experiences since October 2018.</h2>
        <div className="hc-ip">play.hearthcraft.net</div>
      </header>
      <section className="hc-features" id="features">
        <h2>Core Features</h2>
        <div className="hc-feature-list">
          <div className="hc-feature">
            <h3>Feature-Rich</h3>
            <p>The server had just enough features to ensure you had something to do. It didn’t have too much that it became overly complex.</p>
          </div>
          <div className="hc-feature">
            <h3>Laid-Back Community</h3>
            <p>We hated drama as much as you do. We didn’t tolerate anyone who intended to disrupt the server’s peace.</p>
          </div>
          <div className="hc-feature">
            <h3>Liveliness</h3>
            <p>We were not one of those soulless hub servers. In HearthCraft, we tried our best to keep the community active, connected, and undivided.</p>
          </div>
        </div>
      </section>
      <section className="hc-about" id="about">
        <h2>About Us</h2>
        <p>Since 2018, HearthCraft had one goal in mind: to create a community that people could call home, thus the name "HearthCraft". We created a lot of happy experiences for players that involved sweet hellos, laughing, banter, and some warmth amidst the cold world.</p>
        <div className="hc-contact">
          <div>Email: <a href="mailto:support@hearthcraft.net">support@hearthcraft.net</a></div>
          <div>Discord: <a href="https://discord.gg/FADmTfa" target="_blank" rel="noopener noreferrer">discord.hearthcraft.net</a></div>
        </div>
      </section>
      <section className="hc-reviews" id="reviews">
        <h2>Player Reviews</h2>
        <p>Don’t take only our word for it. No rephrasing, no only-positive selection. Reviews came directly from the Discord.</p>
        <div className="hc-review-placeholder">(Reviews unavailable in museum version)</div>
      </section>
      <footer className="hc-footer">
        <div className="hc-footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Store Terms and Conditions</a>
        </div>
        <div className="hc-footer-copy">
          © 2025 HC Museum | Remembrance of HearthCraft | Not associated with Mojang AB or Microsoft.
        </div>
      </footer>
    </div>
  );
}
