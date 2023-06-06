/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Gleison Vieira Dutra
 *      Student ID: 119237220
 *      Date:       March 21st 
 */

function createButton() {

    let menu = document.getElementById("menu"); // 1
    
     for (let i = 0; i < artists.length; i++){
        let button = document.createElement("button"); // 3
        button.innerHTML = artists[i].name; //4

        button.addEventListener("click", function() {
            loadArtist(i);
        })

        menu.appendChild(button);
        }        
}


function loadArtist(index = 0) {
    let selectedArtist = document.getElementById("selected-artist");
    selectedArtist.innerHTML = artists[index].name;
    
    let links = " (";
    for (let i = 0; i < artists[index].links.length; i++) {
        links += '<a href="' + artists[index].links[i].url + '" target="_blank">' + artists[index].links[i].name + '</a>';

        if (i < artists[index].links.length - 1) {
            links += ', ';
        }

    }
    links += ')';
    selectedArtist.innerHTML += links;
    
    var nameObject = songs.filter((selectedSong) => artists[index].id === selectedSong.artistId && [false].includes(selectedSong.flagged));
    
    let table = document.getElementById("songsTable");
    table.innerHTML = "";

    nameObject.forEach(element => {
        
        row = table.insertRow();

        let cell = row.insertCell();
        let text = document.createTextNode(element.title);
        cell.appendChild(text);
       
        cell = row.insertCell();
        text = document.createTextNode(element.year);
        cell.appendChild(text);
       
        cell = row.insertCell();
        let min = Math.round(element.duration/60);
            let sec = element.duration%60

            sec > 10 ? text = document.createTextNode(min + ":" + sec): text = document.createTextNode(min + ":" + '0' + sec);

        cell.appendChild(text);

        row.addEventListener("click", function() {
            console.log(element.title);
        })

   });

}

window.onload = function() {
    createButton();
    loadArtist(); 
}
