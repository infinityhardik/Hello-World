// Ways to declare Arrow Functions

const greet1 = (name) => {
    return console.log("Hello " + name);
}

const greet2 = name => {
    return console.log("Hello " + name);
}

const greet3 = name => console.log("Hello " + name);

greet1('Hardik');
greet2('Hardik');
greet3('Hardik');


// novel object
const novel = {
    /**
    * Setter method to set the title and author of the novel
    */
    set: function(title, author) {
        this.title = title;
        this.author = author;
    },
    /**
    * Getter method to print the title and author of the novel
    */
    get: function () {
        console.log("Title = " + this.title + ", Author = " + this.author);
        
        /* TODO: Convert the function named print to an arrow function so that the output from this function is:
        Title = Pride and Prejudice, Author = Jane Austen
        */
        /**
        * Function to print the title and author of the novel
        */
        var print = () => {
            console.log("Title = " + this.title + ", Author = " + this.author);
        }
        print();
    }
}

let title = "Pride and Prejudice", author = "Jane Austen";
novel.set(title, author); // setting the keys title and author of the novel object as the ones defined in the above line
novel.get();