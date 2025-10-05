<template>
    <header>
      <nav class="main-header" :class="{ scrolled: isScrolled }">
        <div class="logo-container">
          <!-- When you click, the modal opens -->
          <img 
            src="../assets/images/stellar_minds.jpeg" 
            alt="OrbitX Logo" 
            class="header-logo"
            @click="openLogoModal"
          />
          <div class="logo-text" @click="toggleTeam">
            <h1 class="animated-logo">Stellar Minds</h1>
            <p>Who are we?</p>
          </div>
        </div>
  
        <ul class="main-nav">
          <li>
            <router-link to="/signup" class="nav-link">
              Sign Up and unlock your journey with us
            </router-link>
          </li>
          <li>
            <router-link to="/signin" class="nav-link">
              Sign In
            </router-link>
          </li>
        </ul>
      </nav>
  
      <!-- Team Info Section -->
      <section id="team-info" :class="{ active: showTeam }">
        <div class="team-container">
          <h2 class="team-title">Meet the Stellar Minds</h2>
          <div class="team-grid">
            <div class="member-card">
              
              <h3>Youssef LAABADI</h3>
              
            </div>
            <div class="member-card">
              
              <h3>Said-eddine kaddouri</h3>
              
            </div>
            <div class="member-card">
              
              <h3>Ismail ouizzane</h3>
              
            </div>
            <div class="member-card">
              
              <h3>Wiame Lazar</h3>
              
            </div>
            <div class="member-card">
              
              <h3>Assia Snissi</h3>
              
            </div>
          </div>
        </div>
      </section>
  
      <!-- Hero Section -->
      <section id="discover" class="hero-section">
        <h1 class="hero-title">Welcome to our business  </h1>
        <p class="hero-subtitle">
            Imagine experiencing a once-in-a-lifetime adventure while orbiting 400 kilometers above Earth — watching the sunrise sixteen times a day, surrounded by the silence of space and the glow of our planet below. ORBIT_X is more than a hotel; it’s a new chapter in human experience — where technology meets emotion, and where the commercialization of space becomes personal, intimate, and meaningful. By transforming Low Earth Orbit into a destination for all, we bring the wonder and beauty of space to those ready to embrace an unforgettable journey — proving that space is not just for scientists or astronauts, but for dreamers, explorers, and adventurers seeking the most exclusive experience ever conceived.    
        </p>
        <div class="media-container">
  <video 
    class="hero-video" 
    src="../assets/videos/iss_view.mp4" 
    autoplay 
    muted 
    loop 
    playsinline
  ></video>
</div>
      </section>
  
      <!-- 🔥 Logo Modal (when clicking on logo) -->
      <div 
        v-if="showLogoModal" 
        class="logo-modal" 
        @click.self="closeLogoModal"
      >
        <span class="close-btn" @click="closeLogoModal">&times;</span>
        <img src="../assets/images/stellar_minds.jpeg" alt="Logo Big" class="modal-logo" />
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Navbar",
    data() {
      return {
        showTeam: false,
        isScrolled: false,
        showLogoModal: false,
      };
    },
    methods: {
      toggleTeam() {
        this.showTeam = !this.showTeam;
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 50;
      },
      openLogoModal() {
        this.showLogoModal = true;
      },
      closeLogoModal() {
        this.showLogoModal = false;
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
  
      // ✅ Chatbase Chatbot Injection
      (function () {
        if (!window.chatbase || window.chatbase("getState") !== "initialized") {
          window.chatbase = (...args) => {
            if (!window.chatbase.q) {
              window.chatbase.q = [];
            }
            window.chatbase.q.push(args);
          };
          window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
              if (prop === "q") return target.q;
              return (...args) => target(prop, ...args);
            },
          });
        }
  
        const onLoad = function () {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = "M3easKgpmNVB4iEzWJBqX";
          script.domain = "www.chatbase.co";
          document.body.appendChild(script);
        };
  
        if (document.readyState === "complete") {
          onLoad();
        } else {
          window.addEventListener("load", onLoad);
        }
      })();
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  };
  </script>
  <style scoped>

/* 🔥 Logo Modal Styling */
.logo-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9); /* Black semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.4s ease forwards;
}

.modal-logo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 3px solid #00bfff;
  box-shadow: 0 0 30px #00bfff, 0 0 60px #ff007f;
  animation: popIn 0.5s ease forwards;
}

.close-btn {
  position: absolute;
  top: 25px;
  right: 35px;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}
.close-btn:hover {
  color: #ff007f;
  transform: scale(1.2);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes popIn {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
  /* --- Header & Navbar --- */
.main-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(10, 10, 30, 0.8);
  backdrop-filter: blur(12px);
  transition: box-shadow 0.3s ease, background 0.3s ease;
  z-index: 1000;
}

.main-header.scrolled {
  box-shadow: 0 5px 25px rgba(0, 191, 255, 0.6);
  background: rgba(10, 10, 30, 0.95);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-logo {
  width: 60px;
  border-radius: 50%;
  border: 2px solid #00bfff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.header-logo:hover {
  transform: scale(1.1) rotate(-5deg);
  box-shadow: 0 0 15px #00bfff;
}

.logo-text {
  cursor: pointer;
}
.animated-logo {
  background: linear-gradient(90deg, #00bfff, #ff007f, #00bfff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 5s linear infinite;
}
@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.main-nav {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease, color 0.3s ease;
}
.main-nav a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -5px;
  background-color: #00bfff;
  transition: width 0.3s ease;
}
.main-nav a:hover {
  color: #00bfff;
  transform: scale(1.1);
}
.main-nav a:hover::after {
  width: 100%;
}

/* --- Hero Section --- */
.hero-section {
  min-height: 100vh; /* Full page height */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  background: url('../assets/images/low_earth_orbit.jpeg') center center / cover no-repeat fixed;
  position: relative;
  color: #fff;
  overflow: hidden;
}
.hero-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  animation: backgroundPulse 15s infinite alternate;
}
@keyframes backgroundPulse {
  0% { background: rgba(0,0,0,0.35); }
  50% { background: rgba(0,0,0,0.5); }
  100% { background: rgba(0,0,0,0.35); }
}

.hero-title, .hero-subtitle {
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp 1s forwards;
}
.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation-delay: 0.2s;
}
.hero-subtitle {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  animation-delay: 0.5s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.media-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.hero-image, .hero-video {
  max-width: 500px;
  border-radius: 20px;
  border: 2px solid #00bfff;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}
.hero-image:hover, .hero-video:hover {
  transform: scale(1.1) rotate(-2deg);
  box-shadow: 0 0 25px #00bfff, 0 0 50px #ff007f;
}
/* --- Team Section / Who Are We? --- */
#team-info {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.8s ease, padding 0.8s ease;
  background: linear-gradient(145deg, rgba(10,10,30,0.95), rgba(20,20,50,0.95));
  color: #fff;
  padding: 0 2rem;
  position: relative;
  z-index: 900;
}

#team-info.active {
  max-height: 500px;
  padding: 2rem 2rem;
}

.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(90deg, #00bfff, #ff007f, #00bfff);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 5s linear infinite;
}

/* Slide/fade animation for member cards */
.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.member-card {
  background: rgba(0, 191, 255, 0.1);
  border: 2px solid #00bfff;
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  width: 200px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideFadeIn 0.8s forwards;
  animation-delay: 0.3s;
  transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
}

#team-info.active .member-card:nth-child(1) { animation-delay: 0.2s; }
#team-info.active .member-card:nth-child(2) { animation-delay: 0.4s; }
#team-info.active .member-card:nth-child(3) { animation-delay: 0.6s; }
#team-info.active .member-card:nth-child(4) { animation-delay: 0.8s; }

@keyframes slideFadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.member-card:hover {
  transform: translateY(-10px) scale(1.05) rotate(-1deg);
  box-shadow: 0 0 25px #00bfff, 0 0 35px #ff007f;
  background: rgba(0, 191, 255, 0.2);
}

.member-card img {
  width: 130px;
  border-radius: 50%;
  border: 2px solid #00bfff;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.member-card img:hover {
  transform: scale(1.1) rotate(5deg);
}
.logo-text p {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  cursor: default;

  /* Gradient animation */
  background: linear-gradient(90deg, #00bfff, #ff007f, #00ffea, #ff007f);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textGradientMove 6s ease infinite;

  /* Floating animation */
  display: inline-block;
  position: relative;
  animation: floatText 3s ease-in-out infinite;
  text-shadow: 0 0 5px #00bfff, 0 0 10px #ff007f, 0 0 20px #00ffea;
}

/* Gradient movement */
@keyframes textGradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Gentle floating motion */
@keyframes floatText {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px) rotate(-1deg); }
  100% { transform: translateY(0px); }
}

/* Optional: hover effect */
.logo-text p:hover {
  transform: scale(1.05) translateY(-3px);
  text-shadow: 0 0 10px #00bfff, 0 0 20px #ff007f, 0 0 30px #00ffea;
}

</style>