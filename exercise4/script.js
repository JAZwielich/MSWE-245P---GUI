console.log("Hello World, I'm script.js!");
var presses = 0;

const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
   ]
   
   function printBooks(books){
    for(let i in books){
        if (books[i].title == 1984 || books[i].title == "Moby Dick"){
            continue;
        } else {
            console.log(books[i].title)
        }
    }
   }

   function colorChange(){

    if (presses%2 == 0) {
        document.getElementById("content").style.color = "#0000FF";
        document.getElementById("content").innerHTML = "Bye-Bye World";
        presses++;
    } else {
        document.getElementById("content").style.color = "red";
        document.getElementById("content").innerHTML = "Hello World";
        presses++;

    }
   }

   let p1, p2;

   function setup() {
     createCanvas(500, 500);
     p1 = new Particle(300, 300);
     p2 = new Box(300, 300);
   }
   
   function draw() {
     background(0);
     p1.update();
     p1.show();
     p2.update();
     p2.show();
   }

    printBooks(books);
    console.log
   