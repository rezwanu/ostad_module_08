

document.addEventListener("DOMContentLoaded", function (){

let openModalBtn = document.getElementById('openModalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

let modal = document.getElementById('myModal');

// open

openModalBtn.addEventListener('click', function (){
    modal.style.display = "block";
})

// close

closeModalBtn.addEventListener('click', function (){
    modal.style.display = "none";
})



})