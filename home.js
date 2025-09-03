// components/Home.js
export default {
  name: 'Home',
  template: `
    <section class="intro">
      <h1>Welcome to Little Bookshop</h1>
      <p>Browse our handpicked reads, discover staff picks, and find your next favorite book.</p>
    </section>

    <section class="featured-books">
      <h2>Staff Picks</h2>
      <div class="book-grid">
        <div class="book">
          <h3>The Secret Garden</h3>
          <ul>
            <li>Classic wonder</li>
            <li>Timeless themes</li>
            <li>By Frances Hodgson Burnett</li>
          </ul>
        </div>
        <div class="book">
          <h3>Little Women</h3>
          <ul>
            <li>Sisterhood & growth</li>
            <li>Heartfelt & warm</li>
            <li>By Louisa May Alcott</li>
          </ul>
        </div>
        <div class="book">
          <h3>The Book Thief</h3>
          <ul>
            <li>Evocative WWII story</li>
            <li>Hope & resilience</li>
            <li>By Markus Zusak</li>
          </ul>
        </div>
      </div>
    </section>
  `,
};
