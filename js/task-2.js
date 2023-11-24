class Storage {
  #items = ['Nanitoids', 'Prolonger', 'Antigravitator'];

  constructor() {}

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(removeValue) {
    const indexToRemove = this.#items.indexOf(removeValue);

    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
      console.log(`Елемент ${removeValue} був видалений.`);
    } else {
      console.log(`Елемент ${removeValue} не знайдений.`);
    }
  }
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
