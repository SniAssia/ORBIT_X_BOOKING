<template>
    <section id="couple-experiences">
      <!-- 🌌 Background Overlay -->
      <div class="background-overlay"></div>
  
      <!-- 🏠 Back to Home -->
      <router-link to="/homepage" class="home-link">
        Back to Home
      </router-link>
      <router-link to="/services" class="home-link">
        Go explore other services
      </router-link>
  
      <!-- 🎬 Video Overlay -->
      <div class="video-overlay" v-if="showVideo" @click="closeVideo">
        <video ref="videoPlayer" :src="videoSrc" controls autoplay @click.stop></video>
      </div>
  
      <h2>💑 Couples Experiences</h2>
  
      <div class="couple-card">
        <video
          :src="video"
          muted
          loop
          autoplay
          playsinline
          @click.stop="playVideo(video)"
        ></video>
  
        <div class="sub-services">
          <div v-for="(item, i) in items" :key="i" class="subservice-card">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Couple",
    data() {
      return {
        showVideo: false,
        videoSrc: "",
        video: require("@/assets/videos/couple_exp.mp4"),
        items: [
          { title: "Valentine’s Day Event:", desc: "Exclusive orbital celebration." },
          { title: "Tailored honeymoons:", desc: "Romantic escapes for newlyweds." },
          { title: "Star Ceremony:", desc: "Name a star together with certificate." }
        ]
      };
    },
    methods: {
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
  #couple-experiences {
    position: relative;
    padding: 4rem 2rem;
    text-align: center;
    color: #fff;
    overflow: hidden;
    background-image: url('@/assets/images/service_for.jpeg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }
  
  .background-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 0;
  }
  
  /* 🏠 Home link button */
  .home-link {
    margin : 20px; 
    position: relative;
    z-index: 2;
    display: inline-block;
    margin-bottom: 2rem;
    padding: 0.7rem 1.4rem;
    font-size: 1.1rem;
    color: #bc9175;
    border: 1px solid #bc9175;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(188, 145, 117, 0.3);
  }
  .home-link:hover {
    background-color: #bc9175;
    color: #000;
    box-shadow: 0 0 25px #bc9175;
    transform: scale(1.05);
  }
  
  #couple-experiences h2 {
    position: relative;
    z-index: 2;
    font-size: 2.6rem;
    color: #bc9175;
    text-shadow: 0 0 20px #bc9175, 0 0 40px rgba(188, 145, 117, 0.6);
    margin-bottom: 3rem;
    animation: fadeIn 1s ease forwards;
  }
  
  /* 💫 Main couple card */
  .couple-card {
    position: relative;
    z-index: 2;
    max-width: 850px;
    margin: auto;
    background: rgba(20, 20, 40, 0.85);
    border: 1px solid #bc9175;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 0 35px #bc9175;
    backdrop-filter: blur(6px);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .couple-card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 45px #bc9175;
  }
  
  .couple-card video {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    transition: transform 0.4s ease;
  }
  .couple-card video:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px rgba(188, 145, 117, 0.4);
  }
  
  /* 💞 Subservices cards */
  .subservice-card {
    background: rgba(255, 255, 255, 0.05);
    border-left: 3px solid #bc9175;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }
  .subservice-card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px #bc9175;
  }
  .subservice-card h4 {
    color: #bc9175;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .subservice-card p {
    margin: 0;
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
  
  /* ✨ Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>
  