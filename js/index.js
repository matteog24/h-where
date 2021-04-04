/* let device = document.querySelector('body');
let div = document.querySelectorAll('div');
let w = window.innerWidth;
let h = window.innerHeight;
const text = document.createElement('h1');

$(document).ready(function(){
    checkScreen();
    $(window).resize(function(){
        w = window.innerWidth;
        h = window.innerHeight;
        checkScreen();
    });
});

function checkScreen() {
    if (w > 1200) {
        $(div).hide();
        text.innerText = "Sorry, your device is too big!"
        text.style.cssText = "position: absolute; width: 100%; heigth: 100%; color: white; text-align: center;"
        document.body.appendChild(text);
    }
    else if (w < 1200) {
        text.remove();
        $(div).show(); 
    }
} */

function change(value) {
    let category = document.getElementById('category');
    let categoryList = document.getElementById('category2')
    let alfabeto = document.getElementById('alfabeto');
    let alfabetoList = document.getElementById('alfabeto2');

    if (value == alfabeto) {
        category.style.opacity = "0.4"
        alfabeto.style.opacity = "1"

        alfabetoList.style.overflow = "visible"
        alfabetoList.style.opacity = "1"
        alfabetoList.style.height = "auto"

        categoryList.style.opacity = "0"
        categoryList.style.overflow = "hidden"
        categoryList.style.height = "0"
    }
    else if (value == category) {
        alfabeto.style.opacity = "0.4"
        category.style.opacity = "1"

        categoryList.style.overflow = "visible"
        categoryList.style.opacity = "1"
        categoryList.style.height = "auto"

        alfabetoList.style.opacity = "0"
        alfabetoList.style.overflow = "hidden"
        alfabetoList.style.height = "0"        
    }
}

function getDirections(startPole, place) {

    let directionsText = document.getElementById('directions-text');
    let directionsArray = [];
    let listOfDirections = [];
    let list = document.getElementById("list");

    if (directionsText.childElementCount = 1) {
        directionsText.innerHTML = ""
    }

    let heading = document.createElement('h2');
    heading.id = 'directions-text'

    if (startPole == 1) {
        if (place == 'myp') {
            heading.innerHTML = "MYP & DP";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'pyp') {
            heading.innerHTML = "PYP";
            directionsArray = ['⬇️ for 10m', '⬅️'];
        }
        else if (place == 'college') {
            heading.innerHTML = "College";
            directionsArray = ['⬆️ for 250m', '➡️'];
        }
        else if (place == 'student-house') {
            heading.innerHTML = "Student House";
            directionsArray = ['⬆️ for 50m', '⬅️', '⬆️ for 20m', '⬅️', '⬆️ for 50m', '➡️'];
        }
        else if (place == 'library') {
            heading.innerHTML = "Library";
            directionsArray = ['⬆️ for 50m', '⬅️ for 10m', '⬆️'];
        }
        else if (place == 'sports-center') {
            heading.innerHTML = "Sports Center";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'bistro') {
            heading.innerHTML = "Bistro";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'football') {
            heading.innerHTML = "Football";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'hall') {
            heading.innerHTML = "Hall";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'sierra') {
            heading.innerHTML = "Sierra";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }
        else if (place == 'innovation-area') {
            heading.innerHTML = "Innovation Area";
            directionsArray = ['⬆️ for 100m', '➡️'];
        }

        directionsArray.forEach(function(element) {
            listOfDirections.push("<li>" + element + "</li>");
        });
          
        list.innerHTML = listOfDirections.join('');
    }

    directionsText.appendChild(heading, list)
}