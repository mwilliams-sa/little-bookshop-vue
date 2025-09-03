// components/Contact.js
export default {
  name: 'Contact',
  template: `
    <section class="intro">
      <h1>Contact Us</h1>
      <p>Questions or recommendations? We’d love to hear from you.</p>
    </section>

    <section class="contact-page contact-section">
      <form @submit.prevent="handleSubmit" novalidate>
        <div class="form-field">
          <label for="name">Name</label>
          <input id="name" v-model="name" type="text" placeholder="Your full name" />
          <small class="error-text">{{ nameError }}</small>
        </div>

        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" placeholder="you@example.com" />
          <small class="error-text">{{ emailError }}</small>
        </div>

        <div class="form-field">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" rows="6" placeholder="Write at least 10 characters..."></textarea>
          <small class="error-text">{{ messageError }}</small>
        </div>

        <button class="btn-primary" :disabled="!isValid" type="submit">Send Message</button>
      </form>

      <!-- Simple inline modal -->
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <h2 id="modalTitle">Message Sent ✅</h2>
          <p><strong>Name:</strong> {{ name }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Message:</strong></p>
          <pre class="modal-message">{{ message }}</pre>
          <button class="btn-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      name: '',
      email: '',
      message: '',
      showModal: false,
    };
  },
  computed: {
    nameError() {
      if (!this.name.trim()) return 'Name is required.';
      return /^[A-Za-z\s\'-]+$/.test(this.name.trim())
        ? '' : 'Name can only contain letters, spaces, apostrophes, or hyphens.';
    },
    emailError() {
      if (!this.email.trim()) return 'Email is required.';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())
        ? '' : 'Please enter a valid email.';
    },
    messageError() {
      const t = this.message.trim();
      if (!t) return 'Message is required.';
      if (t.length < 10) return 'Message must be at least 10 characters.';
      return '';
    },
    isValid() {
      return !this.nameError && !this.emailError && !this.messageError;
    },
  },
  methods: {
    handleSubmit() {
      if (!this.isValid) return;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      // optional: reset
      // this.name = this.email = this.message = '';
    },
  },
};
