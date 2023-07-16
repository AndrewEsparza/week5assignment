class Book {
  constructor(title, author) {
    this.title = title;
  this.author = author;
  }

  describe() {
    return `${this.title} by ${this.author}`;
  }
}

class Library {
  constructor(name) {
    this.name = name;
this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
      alert(`Book '${book.title}' added to the library.`); // Notify the user about the successful addition of the book
    } else {
   throw new Error(`You can only add an instance of Book. Argument is not a book.`); // Throw an error if the argument passed is not an instance of Book
    }
  }

  // Method to remove a book from the library
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
    this.books.splice(index, 1);
      alert(`Book '${book.title}' removed from the library.`); // Notify the user about the successful removal of the book
    } else {
      alert(`Book '${book.title}' not found in the library.`); // Notify the user that the book to remove was not found in the library
    }
  }

  // Method to list all books in the library
  listBooks() {
    let bookList = `Books in the library:\n`;
    this.books.forEach((book) => {
      bookList += `- ${book.describe()}\n`; // Generate a formatted string to display each book's title and author
    });
    alert(bookList); // Show the list of books to the user through an alert message
  }
}

class Menu {
  constructor() {
    this.library = new Library("My Library");
  }

  //Method to start the library app
  start() {
    let selection = this.showMainMenuOptions();
    while (selection !== '0') {
      switch (selection) {
        case '1':
          this.addBook();
          break;
        case '2':
          this.removeBook();
          break;
        case '3':
          this.listBooks();
          break;
        default:
          alert('Invalid selection. Please try again.'); //Notify the user if an invalid option is chosen
      }
      selection = this.showMainMenuOptions(); //Show the main menu options again to allow the user to choose another option
    }

    alert(`Exiting the library app.`); //Notify the user that the app is exiting
  }

  //Method to display the main menu options and get user input
  showMainMenuOptions() {
    return prompt(`
      Library App Menu:
      0) Exit
      1) Add a book
      2) Remove a book
      3) List all books
    `); //Display the main menu options to the user and get their selection through a prompt
  }

  //Method to add a book to the library
  addBook() {

    const title = prompt("Enter the title of the book:"); // Get the title of the book from the user through a prompt
    const author = prompt("Enter the author of the book:"); // Get the author of the book from the user through a prompt
  const book = new Book(title, author); // Create a new Book instance using the provided title and author
    this.library.addBook(book); // Add the book to the library
  }

  // Method to remove a book from the library
  removeBook() {
    const title = prompt("Enter the title of the book to remove:"); // Get the title of the book to remove from the user through a prompt
 const book = this.findBookByTitle(title); // Find the book in the library based on the provided title
    if (book) {
      this.library.removeBook(book); // Remove the book from the library if found
    } else {
 alert(`Book '${title}' not found in the library.`); // Notify the user that the book to remove was not found in the library
    }
  }


   //Method to list all books in the library
  listBooks() {
  this.library.listBooks();   // List all books in the library by invoking the corresponding method in the Library class
  }

  // Method to find a book in the library by its title

  findBookByTitle(title) {
    
    return this.library.books.find((book) => book.title === title); // Find the book in the library based on the provided title
  }
}

//Starts the library app

const menu = new Menu();
menu.start();
