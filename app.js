const app = Vue.createApp({
  data() {
    return {
      url: 'http//www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/1.jpg', isFav: true},
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
        { title: 'the name of the wind', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true}
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')

// Challenge - Add to Favs
//   - attach a click event to each li tag (for each book)
//   - when a user clicks an li, toogle the 'isFav' property of that book