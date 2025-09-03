// components/About.js
export default {
  name: 'About',
  template: `
    <section class="intro" id="about">
      <h1>About Our Bookshop</h1>
      <p>We’re a cozy community bookstore with a passion for stories and good coffee.
         Our team loves to recommend hidden gems for all ages.</p>
    </section>

    <section class="featured-books">
      <h2>Our Values</h2>
      <div class="book-grid">
        <div class="book">
          <h3>Community</h3>
          <ul>
            <li>Author meetups</li>
            <li>Local partnerships</li>
            <li>Reading groups</li>
          </ul>
        </div>
        <div class="book">
          <h3>Curation</h3>
          <ul>
            <li>Handpicked titles</li>
            <li>Diverse genres</li>
            <li>Indie publishers</li>
          </ul>
        </div>
        <div class="book">
          <h3>Comfort</h3>
          <ul>
            <li>Quiet reading nooks</li>
            <li>Fresh coffee</li>
            <li>Warm atmosphere</li>
          </ul>
        </div>
      </div>
    </section>
  `,
};
