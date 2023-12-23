class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
 
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
 
    addMascota(pet) {
        this.mascotas.push(pet);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(bookTitle, bookAuthor) {
        let bookToAdd = {title: bookTitle , author: bookAuthor};
        this.libros.push(bookToAdd);
    }

    getBookNames() {
        let bookNames = []
        for (let i = 0; i < this.libros.length; i++) {
            bookNames.push(this.libros[i].title)           
        }
        return bookNames
    }
 }
 
const usuario = new Usuario('Ignacio','Veiga');
console.log(usuario);

console.log(usuario.getFullName());
 
usuario.addMascota('Perro');
console.log(usuario.mascotas);
usuario.addMascota('Gato');
console.log(usuario.mascotas);

console.log(usuario.countMascotas());

usuario.addBook('El Señor de los Anillos', 'J. R. R. Tolkien');
console.log(usuario.libros);
usuario.addBook('Tokyo Blues', 'Haruki Murakami');
console.log(usuario.libros);

console.log(usuario.getBookNames());