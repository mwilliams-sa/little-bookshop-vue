eexport default {
  data() {
    return {
      books: [
        {
          id: 1,
          title: "Velora Isle",
          author: "M. Williams",
          price: "R249",
          img: "https://picsum.photos/seed/book1/300/420",
        },
        {
          id: 2,
          title: "A Kingdom of Fire & Fate",
          author: "H. Renee",
          price: "R299",
          img: "https://picsum.photos/seed/book2/300/420",
        },
        {
          id: 3,
          title: "Hooked",
          author: "E. McIntire",
          price: "R279",
          img: "https://picsum.photos/seed/book3/300/420",
        },
        {
          id: 4,
          title: "Priest",
          author: "S. Simone",
          price: "R269",
          img: "https://picsum.photos/seed/book4/300/420",
        },
        {
          id: 5,
          title: "Scarred",
          author: "E. McIntire",
          price: "R289",
          img: "https://picsum.photos/seed/book5/300/420",
        },
        {
          id: 6,
          title: "Unhinged",
          author: "S. Macca",
          price: "R259",
          img: "https://picsum.photos/seed/book6/300/420",
        },
      ],
    };
  },
  template: `
    <section class="page">
      <h2 class="section-title">Featured Books</h2>

      <div class="book-grid">
        <article v-for="b in books" :key="b.id" class="book-card">
          <div class="book-cover">
            <img :src="b.img" :alt="b.title + ' cover'" loading="lazy">
          </div>
          <div class="book-meta">
            <h3 class="book-title">{{ b.title }}</h3>
            <p class="book-author">{{ b.author }}</p>
            <p class="book-price">{{ b.price }}</p>
            <a href="#/contact" class="btn">Enquire</a>
          </div>
        </article>
      </div>
    </section>
  `,
};
