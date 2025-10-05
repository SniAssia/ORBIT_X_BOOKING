<template>
    <section id="client-services">
      <!-- 🎬 Video Overlay -->
      <div class="video-overlay" v-if="showVideo" @click="closeVideo">
        <video ref="videoPlayer" :src="videoSrc" controls autoplay @click.stop></video>
      </div>
  
      <h2>Our Services</h2>
  
      <div class="service-grid">
        <!-- Each Service Card -->
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          @click="toggleSub(index)"
        >
          <h3>{{ service.title }}</h3>
  
          <!-- 🎥 Small video preview -->
          <div class="video-preview" v-if="service.video">
            <video
              :src="service.video"
              muted
              loop
              autoplay
              playsinline
              @click.stop="playVideo(service.video)"
            ></video>
          </div>
  
          <!-- 💫 Sub-services mini-cards -->
          <div class="sub-services" v-show="openIndex === index">
            <div
              v-for="(item, i) in service.items"
              :key="i"
              class="subservice-card"
            >
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 💑 Link to Couples component -->
      <div class="a">
      <router-link to="/couple" class="couple-link">
        💑 Explore Couples Experiences 
      </router-link>
      <router-link to="/booking" class="couple-link">
        Can't wait to see you with us , go book your journey now! 
      </router-link>
    </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Services",
    data() {
      return {
        openIndex: null,
        showVideo: false,
        videoSrc: "",
        services: [
          {
            title: "Accommodation & Comfort",
            video: require("@/assets/videos/accomodation.mp4"),

            items: [
              { title: "Private luxury suites:", desc: "Panoramic Earth views, cozy romantic design, premium materials." },
              { title: "Adjustable artificial gravity:", desc: "Earth-like, lunar, or zero-G options via rotating sections or localized tech." },
              { title: "Smart climate control:", desc: "Personalized temperature, lighting, and sound ambiance." },
              { title: "Zero-gravity sleeping pods:", desc: "Float together in soft, enclosed capsules for futuristic sleep." }
            ]
          },
          {
            title: "Dining & Culinary Experiences",
            video: require("@/assets/videos/dining.mp4"),
            
            items: [
              { title: "Gourmet space cuisine:", desc: "Prepared by chefs trained in microgravity cooking." },
              { title: "Couples dining pods:", desc: "Earth-facing windows for intimate meals." },
              { title: "Space bar:", desc: "Offering cocktails in floating bubbles." }
            ]
          },
          {
            title: "Entertainment & Recreation",
            video: require("@/assets/videos/entert.mp4"),
            items: [
              { title: "Zero-gravity cinema:", desc: "Enjoy space-themed films." },
              { title: "Low-gravity sports:", desc: "Floating tennis, dance, hoverball." },
              { title: "Virtual reality stargazing:", desc: "Deep-space exploration simulations." }
            ]
          },
          {
            title: "Wellness & Spa",
            video: require("@/assets/videos/spa.mp4"),
            items: [
              { title: "Hydrotherapy domes:", desc: "Relax in zero-G water spheres." },
              { title: "Celestial massage:", desc: "Performed under artificial starlight." },
              { title: "Energy rejuvenation pods:", desc: "Boost vitality with biofield tuning." }
            ]
          }
        ]
      };
    },
    methods: {
      toggleSub(index) {
        this.openIndex = this.openIndex === index ? null : index;
      },
      playVideo(src) {
        this.videoSrc = src;
        this.showVideo = true;
        this.$nextTick(() => this.$refs.videoPlayer.play());
      },
      closeVideo() {
        this.showVideo = false;
        const vid = this.$refs.videoPlayer;
        if (vid) vid.pause();
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #000;
    color: #fff;
  }
  
  #client-services {
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    background-image: url('@/assets/images/service_for.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
    min-height: 100vh;
  }
  
  #client-services h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #bc9175;
    text-shadow: 0 0 15px #bc9175;
  }
  
  /* === SERVICE GRID === */
  .service-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .service-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid #bc9175;
    border-radius: 12px;
    padding: 1.5rem;
    width: 340px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
  }
  
  .service-card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px #bc9175;
  }
  
  .service-card h3 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #bc9175;
  }
  
  /* 🎥 Small video preview inside each card */
  .video-preview {
    margin-bottom: 1rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(188, 145, 117, 0.4);
  }
  .a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 2rem;
  }
  
  .video-preview video {
    width: 100%;
    height: 180px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .video-preview video:hover {
    transform: scale(1.05);
  }
  
  /* === Subservices mini-cards === */
  .sub-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    text-align: left;
    animation: popIn 0.4s ease forwards;
  }
  
  .subservice-card {
    background: rgba(0, 0, 30, 0.85);
    border-left: 3px solid #bc9175;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 0 10px #bc917566;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .subservice-card:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px #bc9175;
  }
  
  .subservice-card h4 {
    color: #bc9175;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .subservice-card p {
    margin: 0;
    font-size: 0.95rem;
    color: #ddd;
  }
  
  /* 🎬 Full-screen video overlay */
  .video-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.4s ease;
  }
  
  .video-overlay video {
    max-width: 80%;
    max-height: 80%;
    border-radius: 12px;
    box-shadow: 0 0 25px #bc9175;
  }
  
  /* 💑 Link to couples component */
  .couple-link {
    display: inline-block;
    margin-top: 3rem;
    color: #bc9175;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    border: 1px solid #bc9175;
    padding: 0.8rem 1.6rem;
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .couple-link:hover {
    background-color: #bc9175;
    color: #000;
    box-shadow: 0 0 20px #bc9175;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  </style>
  