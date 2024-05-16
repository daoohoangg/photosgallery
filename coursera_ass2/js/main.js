function upDate(id){
    document.getElementById('header_ti').innerHTML = id.alt;
    document.getElementById('header_ti').style.backgroundImage = "url(" + id.src + ")";
}
function unDo(){
    document.getElementById('header_ti').style.backgroundImage ="url('')";
    document.getElementById('header_ti').innerHTML = 'Hover over an image below to display here';
}




var fruits = ["Banana","Orange","Apple","Mango"];
function loadFruits(){
    document.getElementById('fruits').innerHTML = fruits;
}
function myFunction(){
    var fruit = prompt("What is your favorite fruit?");
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = fruits;
}


function randomImage(){
    var arrOfImages = ["img/163165-puppy-dog-face-free-transparent-image-hd.jpg",
    "img/dog-1463218026uIC.jpg", 
    "img/th.jpg"];
    randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    img = document.querySelector("src",randomImg);
    img.setAttribute("src",randomImg);
    img.setAttribute("alt","");
}
