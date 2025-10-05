<template>
  <div class="bigbro">
    <div class="column-wrapper">
      <div class="page-container">
        <div class="flexy">
          <div class="form-container">
            <form @submit.prevent="submitForm" class="form">
              <div class="title">
                <h1>Sign up</h1>
              </div>

              <div class="form-group">
                <label>NAME</label>
                <input type="text" v-model="name" required placeholder="enter your name..." />
              </div>

              <div class="form-group">
                <label>USERNAME</label>
                <input type="text" v-model="username" required placeholder="enter your username.." />
              </div>

              <div class="form-group">
                <label>PASSWORD</label>
                <input type="password" v-model="password" required minlength="8" placeholder="enter your password.." />
              </div>

              <div class="form-group">
                <label>EMAIL</label>
                <input type="email" v-model="email" required placeholder="enter your email..." />
              </div>
              <div class="terms">
                <input type="checkbox" v-model="agreeToTerms" required />
                <label>I read and agree to <span>Terms & Conditions</span></label>
              </div>
              
              
              <router-link to="/homepage" class="sky-button">
                Go to explore our journey
              </router-link>

            </form>
          </div>
        </div>
      </div>
      <div class="login-prompt">
        Already have an account?
        <RouterLink to="/Signin" style="color: #4450a0;">Sign in</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import { registerWithEmailAndPassword, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { RouterLink } from "vue-router";

export default {
  name: "SignUp",
  components: {
    RouterLink,
  },
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      agreeToTerms: false,
      photo: null,
      previewImage: null,
    };
  },
  methods: {
    validateForm() {
      if (!this.name || !this.username || !this.email || !this.password) {
        alert("Please fill in all required fields");
        return false;
      }
      if (!this.agreeToTerms) {
        alert("You must agree to the terms and conditions.");
        return false;
      }
      return true;
    },

    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.photo = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },

   
    async submitForm() {
      if (!this.validateForm()) return;

      try {
        const user = await registerWithEmailAndPassword(
          this.email,
          this.password,
          this.username
        );

        let photoURL = "";

        if (this.photo) {
          photoURL = await this.uploadImage(this.photo);
        }

        const userData = {
          name: this.name,
          username: this.username,
          email: this.email,
          phone: this.phone,
          bio: "",
          followers: [],
          following: [],
          createdAt: new Date(),
          photoURL: photoURL,
        };

        await setDoc(doc(db, "users", user.uid), userData);

        alert("Registration successful!");
        this.$router.push("/homepage");
      } catch (error) {
        alert("Registration failed: " + error.message);
      }
    },
  },
};
</script>
<style>
/* Background Styling */

.sky-button {
  background: linear-gradient(to right, #3b8db0, #143c57); /* blue sky gradient */
  color: white;
  font-weight: bold;
  padding: 15px 30px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  user-select: none;
}

.sky-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}
.bigbro {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Quicksand', sans-serif;
  background: url('/src/assets/images/spacecraft.jpeg') no-repeat center center fixed;
  background-size: cover;
  animation: floatBg 10s infinite alternate;
  color: #4a4a4a;
}

@keyframes floatBg {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Card Container */
.page-container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(188, 145, 117, 0.15); /* beige shadow */
  padding: 40px 30px;
  max-width: 420px;
  width: 90%;
  transition: transform 0.4s ease;
}
.st{
  background-color: rgb(63, 126, 198);
}
.page-container:hover {
  transform: translateY(-5px);
}

/* Title */
.title h1 {
  text-align: center;
  background: linear-gradient(135deg, #bc9175, #9eeec2); /* beige-blue */
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.4em;
  letter-spacing: 1px;
  margin-bottom: 25px;
}

/* Input Fields */
.form-group {
  margin-bottom: 18px;
}

label {
  color: #bc9175; /* beige label */
  font-weight: 600;
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 95%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1.5px solid #d0d6e2;
  background-color: #f9fafd;
  font-size: 15px;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #bc9175; /* beige focus */
  box-shadow: 0 0 0 3px rgba(188, 145, 117, 0.2);
  outline: none;
}

/* File Input */
.file-input {
  display: none;
}

.custom-file-input {
  padding: 12px 24px;
  background: linear-gradient(135deg, #bc9175, #9eeec2);
  color: white;
  border-radius: 10px;
  width: 35%;
  height: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.custom-file-input:hover {
  background: linear-gradient(135deg, #9e7d5a, #438ab0);
  transform: translateY(-2px);
}

/* Terms Checkbox */
.terms {
  display: flex;
  align-items: center;
  margin: 18px 0;
  font-size: 13px;
  color: #4d5a6a;
}

.terms input[type="checkbox"] {
  margin-right: 8px;
  accent-color: #bc9175; /* beige accent */
}

.terms span {
  font-weight: bold;
  color: #bc9175;
  cursor: pointer;
  text-decoration: underline;
}

/* Submit Button */
button[type="submit"]:hover {
  background: linear-gradient(135deg, #9e7d5a, #65a5cd);
  transform: translateY(-2px);
}

/* Links and Prompts */
.login-prompt {
  text-align: center;
  margin-top: 18px;
  font-size: 14px;
}

.login-prompt a {
  color: #bc9175;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
  transition: color 0.2s;
}

.login-prompt a:hover {
  color: #9e7d5a;
}

/* Responsive */
@media (max-width: 480px) {
  .page-container {
    padding: 30px 20px;
  }

  .title h1 {
    font-size: 2rem;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="tel"] {
    width: 100%;
  }

  .custom-file-input {
    width: 100%;
    margin-top: 10px;
  }
}

.page-container {
  background: transparent; /* make it fully see-through */
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(188, 145, 117, 0.15); /* keep shadow for depth */
  padding: 40px 30px;
  max-width: 420px;
  width: 90%;
  transition: transform 0.4s ease;
}

</style>