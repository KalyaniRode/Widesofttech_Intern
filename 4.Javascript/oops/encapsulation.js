class Library {
    // Private field to store number of books
    #totalBooks = 50; // private variable, cannot be accessed directly from outside

    // Getter to check total books
    getTotalBooks() {
        return this.#totalBooks;
    }

    // Method to add books to the library
    addBooks(count) {
        if (count > 0) {
            this.#totalBooks += count;
            console.log(`${count} books added successfully.`);
        } else {
            console.log("Invalid number of books to add.");
        }
    }

    // Method to borrow books
    borrowBooks(count) {
        if (count > 0 && count <= this.#totalBooks) {
            this.#totalBooks -= count;
            console.log(`${count} books borrowed successfully.`);
        } else {
            console.log("Not enough books available or invalid count.");
        }
    }
}

// Usage
let myLibrary = new Library();

console.log(myLibrary.getTotalBooks()); // 50
myLibrary.addBooks(20);                 // 20 books added
console.log(myLibrary.getTotalBooks()); // 70
myLibrary.borrowBooks(15);              // 15 books borrowed
console.log(myLibrary.getTotalBooks()); // 55

// Trying to access private field directly
console.log(myLibrary.totalBooks); // undefined
