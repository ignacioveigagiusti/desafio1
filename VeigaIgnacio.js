class User {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.pets = [];
    }
 
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
 
    addPet(pet) {
        this.pets.push(pet);
    }

    countPets() {
        return this.pets.length;
    }

    addBook(bookTitle, bookAuthor) {
        let bookToAdd = {title: bookTitle , author: bookAuthor};
        this.books.push(bookToAdd);
    }

    getBookNames() {
        let bookNames = []
        for (let i = 0; i < this.books.length; i++) {
            bookNames.push(this.books[i].title)           
        }
        return bookNames
    }
}

const user = new User('Ignacio','Veiga');
console.log(user);

console.log(user.getFullName());
 
user.addPet('Dog');
console.log(user.pets);
user.addPet('Cat');
console.log(user.pets);

console.log(user.countPets());

user.addBook('The Lord of The Rings', 'J. R. R. Tolkien');
console.log(user.books);
user.addBook('Norwegian Wood', 'Haruki Murakami');
console.log(user.books);

console.log(user.getBookNames());