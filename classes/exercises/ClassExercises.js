// Define your Book class here:
class Book{
    constructor(title,author,copyrightDate,isbn,numberOfPages,checkedOut,discarded){
        this.title= title;
        this.author= author;
        this.copyrightDate= copyrightDate;
        this.isbn= isbn;
        this.numberOfPages= numberOfPages;
        this.checkedOut= checkedOut;
        this.discarded= discarded;
    }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title,author,copyrightDate,isbn,numberOfPages,checkedOut,discarded){
        super(title,author,copyrightDate,isbn,numberOfPages,checkedOut,discarded);
    }
    oldManual(currenYear){
        if (currentYear-this.copyrightDate > 5){
            this.discarded = 'yes';
        }
    }
    

}

class Tiger extends Book{
    constructor(title,author,copyrightDate,ISBN,numberOfPages,checkedOut,discarded){
        super(title,author,copyrightDate,ISBN,numberOfPages,checkedOut,discarded);
    }

}

// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here: