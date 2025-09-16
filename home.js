import { books } from "./books.js";

export default {
  data() {
    return { books };
  },
  template: `
    <section class="page">
      <h2 class="section-title">Featured Books</h2>

      <div class="book-grid">
        <article v-for="b in books" :key="b.id" class="book-card">
          <a :href="'#/book/' + b.id" class="book-cover">
            <img :src="b.img" :alt="b.title + ' cover'" loading="lazy">
          </a>
          <div class="book-meta">
            <h3 class="book-title">
              <a :href="'#/book/' + b.id">{{ b.title }}</a>
            </h3>
            <p class="book-author">{{ b.author }}</p>
            <p class="book-price">{{ b.price }}</p>
            <a :href="'#/book/' + b.id" class="btn">View details</a>
          </div>
        </article>
      </div>
    </section>
  `,
};
