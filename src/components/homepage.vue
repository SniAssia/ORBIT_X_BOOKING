<template>
    <div>
      <!-- Header -->
      <header class="main-header">
        <div class="logo-container">
          <img 
            src="@/assets/images/stellar_minds.jpeg" 
            alt="OrbitX Logo" 
            class="header-logo"
            @click="openLogoModal"
          />
          <div class="logo-text">
            <h1 @click="toggleTeamInfo">Stellar Minds</h1>
            
            <div v-show="showTeamInfo" class="team-info-box">
              <p style="color:white">
                Meet the brilliant minds behind Stellar Minds: 
                Wiame, Assia, Ismail, Saif Eddine, and Youssef ✨🚀
              </p>
            </div>
          </div>
        </div>
        <router-link to="/services" class="nav-link">
          CHECK OUR EXCLUSIVE SERVICES
        </router-link>
        <router-link to="/couple" class="nav-link">
          COUPLE EXPERIENCES
        </router-link>
      </header>
  
      <!-- Hero Section -->
      <section class="hero">
  <section id="about">
    <h2>Discover our mission</h2>
    <p>
        Imagine experiencing a once-in-a-lifetime adventure while orbiting 400 kilometers above Earth — watching the sunrise sixteen times a day, surrounded by the silence of space and the glow of our planet below. ORBIT_X is more than a hotel; it’s a new chapter in human experience — where technology meets emotion, and where the commercialization of space becomes personal, intimate, and meaningful. By transforming Low Earth Orbit into a destination for all, we bring the wonder and beauty of space to those ready to embrace an unforgettable journey — proving that space is not just for scientists or astronauts, but for dreamers, explorers, and adventurers seeking the most exclusive experience ever conceived.  
    </p>

    <!-- 🌌 Video below Discover LEO -->
    <div class="leo-video-container">
      <video 
        src="@/assets/videos/welcome.mp4" 
        autoplay 
        muted 
        loop 
        playsinline 
        class="leo-video"
      ></video>
    </div>

    <img src="@/assets/images/spacecraft.jpeg" alt="Earth from space" />
  </section>

  <h2>🚀 OrbitX</h2>
  <p>Experience the thrill of space tourism in Low Earth Orbit</p>
  <router-link to="/booking" class="cta-button">Book Your Journey</router-link>
</section>

  
      <!-- Footer -->
      <footer>
        <p>© 2025 OrbitX | Powered by NASA Space Apps Hackathon</p>
      </footer>
  
      <!-- Logo Modal -->
      <div 
        v-if="showLogoModal" 
        class="logo-modal" 
        @click.self="closeLogoModal"
        @wheel="onWheel"
      >
        <span class="close-btn" @click="closeLogoModal">&times;</span>
        <img 
          src="@/assets/images/stellar_minds.jpeg" 
          alt="OrbitX Logo Big"
          :style="{ transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom})` }"
          @mousedown="startDrag"
          @mousemove="dragMove"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          draggable="false"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Homepage",
    data() {
      return {
        showTeamInfo: false,
        showLogoModal: false,
        zoom: 1,
        offsetX: 0,
        offsetY: 0,
        isDragging: false,
        dragStartX: 0,
        dragStartY: 0,
      };
    },
    methods: {
      toggleTeamInfo() {
        this.showTeamInfo = !this.showTeamInfo;
      },
      openLogoModal() {
        this.showLogoModal = true;
        this.zoom = 1;
        this.offsetX = 0;
        this.offsetY = 0;
      },
      closeLogoModal() {
        this.showLogoModal = false;
      },
      onWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        this.zoom = Math.min(Math.max(this.zoom + delta, 0.5), 3);
      },
      startDrag(e) {
        this.isDragging = true;
        this.dragStartX = e.clientX - this.offsetX;
        this.dragStartY = e.clientY - this.offsetY;
      },
      dragMove(e) {
        if (this.isDragging) {
          this.offsetX = e.clientX - this.dragStartX;
          this.offsetY = e.clientY - this.dragStartY;
        }
      },
      endDrag() {
        this.isDragging = false;
      }
    },
    mounted() {
      // ✅ Inject Chatbase chatbot dynamically
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
    }
  };
  </script>
  <style >
  /* Global Background */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background: url('/src/assets/images/sunset.jpeg') ;
}

/* Header */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(10, 10, 10, 0.85);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.header-logo {
  width: 60px;
  border-radius: 50%;
  border: 2px solid #c6a38b;
  cursor: pointer;
  transition: transform 0.3s;
}
.header-logo:hover {
  transform: rotate(15deg) scale(1.1);
}

.logo-text h1 {
  margin: 0;
  cursor: pointer;
  font-size: 1.5rem;
  color: #bc9175;
  transition: 0.3s;
}
.logo-text h1:hover {
  color: #ffcc88;
  text-shadow: 0 0 10px #ffcc88;
}

.nav-link {
  display: inline-block;
  padding: 0.6rem 1.5rem;
  margin-left: 2rem;
  background: #cfb6a6;
  color: #111;
  font-weight: 600;
  border-radius: 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(207, 182, 166, 0.4);
}
.nav-link:hover {
  background: #d8ba99;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 15px rgba(207, 182, 166, 0.6);
  color: #000;
}

/* Team Info */
.team-info-box {
  margin-top: 0.5rem;
  background: rgba(0,0,0,0.6);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 15px #c6a38b;
  animation: fadeIn 0.5s ease forwards;
}

/* Hero Section */
.hero {
  text-align: center;
  min-height: 100vh;
  width: 100%;
  padding: 6rem 1rem 4rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4); /* overlay sombre pour lisibilité */
  z-index: 0;
}

.hero h2, .hero p, .hero .cta-button {
  position: relative;
  z-index: 1;
}

.hero h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease forwards;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1.5s ease forwards;
}

.cta-button {
  background: #aa8b76;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s;
}
.cta-button:hover {
  background: #d8ba99;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 20px #d8ba99;
}

/* Sections */
section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #cfb09c;
  text-shadow: 0 0 8px #cfb09c;
}

section p {
  max-width: 700px;
  margin: 0 auto 2rem;
  text-align: center;
  color: #ccc;
}

/* Cards & Grid */
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  width: 260px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
}
.card:hover {
  transform: translateY(-10px) rotateX(5deg);
  box-shadow: 0 10px 25px rgba(187, 154, 132, 0.7);
  background: #272727;
}

/* Buttons */
button {
  cursor: pointer;
  background: #cfb6a6;
  border: none;
  padding: 0.8rem 2rem;
  color: #fff;
  font-weight: 600;
  border-radius: 25px;
  transition: all 0.3s;
}
button:hover {
  background: #c3a889;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 0 15px #c3a889;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  background: rgba(17,17,17,0.9);
  font-size: 0.9rem;
  color: #ccc;
}

/* Animations */
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Logo Modal */
.logo-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  cursor: grab;
}
.logo-modal img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 20px;
  border: 3px solid #c6a38b;
  box-shadow: 0 0 25px #c6a38b;
  transition: transform 0.1s ease;
}
.logo-modal:active {
  cursor: grabbing;
}
.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2.5rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;
}
.close-btn:hover {
  color: #c6a38b;
}

/* Responsive */
@media (max-width: 768px) {
  nav ul { flex-direction: column; gap: 1rem; }
  .grid { flex-direction: column; align-items: center; }
  .hero h2 { font-size: 2.2rem; }
}
.leo-video-container {
  margin: 2rem auto;
  max-width: 900px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(188, 145, 117, 0.6);
  border: 2px solid #bc9175;
}

.leo-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.leo-video:hover {
  transform: scale(1.02);
  box-shadow: 0 0 45px rgba(188, 145, 117, 0.8);
}


</style>