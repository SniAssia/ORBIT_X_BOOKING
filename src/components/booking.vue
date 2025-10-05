<template>
    <section class="booking">
      <!-- HEADER -->
    <div class="home-btn-container">
        <router-link to='/homepage' class="home-btn">Return to home page</router-link>
    </div>
  
      
  
      <!-- ELIGIBILITY SECTION -->
      <section id="eligibility" class="section">
        <h2>Eligibility Criteria</h2>
        <p>
          To ensure the safety and comfort of all our guests, we require participants to meet basic health, fitness, 
          and legal requirements. After completing the booking form, your submission will be carefully analyzed by our 
          medical partners and specialists. Based on their review, you will receive a consultation ticket confirming 
          your readiness for space travel.
        </p>
        <a 
          href="https://docs.google.com/forms/d/1j4-LDGhw4143HELMHrG-uLNnRt0y7D5DQlfQGiul6rs/edit" 
          target="_blank" 
          class="book-btn"
        >
          🚀 Book Your Journey
        </a>
      </section>
  
      <!-- WHY CHOOSE US -->
      <section id="why-us" class="section">
        <h2>Why Choose Us</h2>
        <div class="card-container">
          <div v-for="(item, index) in whyUs" :key="index" class="card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </section>
    </section>
  </template>
  
  <script>
  export default {
    name: "Booking",
    data() {
      return {
        
        whyUs: [
          { title: "♻ Sustainability", desc: "Renewable energy systems and waste recycling for long-term operation,Lightweight inflatable modules: more space, lower launch costs." },
            { title : "security",desc : "real time emergency protocols for managing space debris"},
          { title: "🌍 Attached to the ISS", desc: "Located in Low Earth Orbit, attached to ISS for security and support." },
          {title :"Space for All",desc:"ORBIT_X is a transformative space experience designed for everyone, including those with disabilities. Through innovative technology and tailored accommodations, we ensure that individuals with mobility challenges can join this once-in-a-lifetime journey. By making space accessible to all, we break down barriers and invite explorers of every ability to witness the wonders of space, proving that the cosmos is for everyone." }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .booking {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background: url('@/assets/images/sunset.jpeg') no-repeat center center/cover;
    min-height: 100vh;
    padding-bottom: 4rem;
  }
  
  /* HEADER */
  .booking-header {
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  }
  
  .booking-header ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
  }
  
  .booking-header a {
    text-decoration: none;
    color: #bc9175;
    font-weight: 600;
    transition: all 0.3s;
  }
  
  .booking-header a:hover {
    color: #ffcc88;
    text-shadow: 0 0 10px #ffcc88;
  }
  
  /* SECTION STYLING */
  .section {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    text-align: center;
  }
  
  .section h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #bc9175;
    text-shadow: 0 0 10px #bc9175;
  }
  .home-btn-container {
  text-align: center;
  margin: 2rem 0;
}

.home-btn {
  display: inline-block;
  background: #bc9175;
  color: #fff;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(188,145,117,0.5);
}

.home-btn:hover {
  background: #ffcc88;
  color: #111;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 0 25px #ffcc88;
}

  .section p {
    max-width: 700px;
    margin: 0 auto 2rem;
    color: #ddd;
  }
  
  /* SERVICE CARDS */
  .service-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .service-card {
    background: rgba(0,0,30,0.7);
    border: 2px solid #bc9175;
    border-radius: 15px;
    padding: 1.5rem;
    width: 280px;
    box-shadow: 0 0 20px #bc9175;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .service-card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 35px #ffcc88;
  }
  
  /* WHY CHOOSE US CARDS */
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .card {
    background: rgba(0,0,30,0.7);
    border-radius: 15px;
    padding: 1.5rem;
    width: 260px;
    transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
    border: 2px solid #bc9175;
  }
  
  .card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 0 35px #ffcc88;
    background: rgba(30,15,10,0.85);
  }
  
  .card h3 {
    color: #bc9175;
    margin-bottom: 0.5rem;
  }
  
  .card p {
    color: #ddd;
  }
  
  /* BOOK BUTTON */
  .book-btn {
    display: inline-block;
    margin-top: 1rem;
    background: #bc9175;
    color: #fff;
    padding: 0.8rem 2rem;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .book-btn:hover {
    background: #ffcc88;
    color: #111;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 0 25px #ffcc88;
  }
  
  /* RESPONSIVE */
  @media (max-width: 768px) {
    .service-cards, .card-container {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  