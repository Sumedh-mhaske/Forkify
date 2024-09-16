class Searchview {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl.querySelector('.search_field').value;
  }
}

export default new Searchview();
