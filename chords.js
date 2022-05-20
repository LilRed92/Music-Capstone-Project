// import chord objects
import { chordNotes } from "./chordNotes.js"

// display instruction
document.getElementById('howTo').addEventListener("click", function() {
    document.getElementById("chordInstruct").style.display = "block"
    window.scrollBy(0, 500);
})

//renders DOM based on user input
document.getElementById('rootSelect').addEventListener("click", function() { selectRoot() })

document.getElementById('imageButton').addEventListener('click', function() { showImage() })

// get user input and fills the three rows with names on page load
function selectRoot() {
    let rootValue = document.getElementById("rootSelect").value;
    let topChords = chordNotes[rootValue].secDom
    let midChords = chordNotes[rootValue].root
    let bottChords = chordNotes[rootValue].mInt

    document.getElementById("topChords").innerHTML = topChords.map(function(topChords) {
        return `<div id="topRow">${topChords}</div>`
    }).join(" ")

    document.getElementById("midChords").innerHTML = midChords.map(function(midChords) {
        return `<div id="midRow">${midChords}</div>`
    }).join(" ")
    document.getElementById("bottChords").innerHTML = bottChords.map(function(bottChord) {
        return `<div id="bottRow">${bottChord}</div>`
    }).join(" ")
}

selectRoot()


// get user input and fills the three rows with images
function showImage() {
    let rootValue = document.getElementById("rootSelect").value;

    let topChords = chordNotes[rootValue].imagesecDom
    let midChords = chordNotes[rootValue].imageroot
    let bottChords = chordNotes[rootValue].imagemInt

    // render image
    document.getElementById("topChords").innerHTML = topChords.map(function(topChords) {
        return `<div id="topRow"><img id="chordPics" src="${topChords}"></div>`
    }).join(" ")
    document.getElementById("midChords").innerHTML = midChords.map(function(midChords) {
        return `<div id="midRow"><img id="chordPics" src="${midChords}">"</div>`
    }).join(" ")
    document.getElementById("bottChords").innerHTML = bottChords.map(function(bottChord) {
        return `<div id="bottRow"><img id="chordPics" src="${bottChord}">"</div>`
    }).join(" ")

    // change rootLabel
    document.getElementById("rootLabel").innerText = `Show Names`
}

// display and close instruction
document.getElementById('howTo').addEventListener("click", function() {
    document.getElementById("chordInstruct").style.display = "block"
    window.scrollBy(0, 500);
})
document.getElementById('closeHowTo').addEventListener("click", function() {
    document.getElementById("chordInstruct").style.display = "none"
    window.scrollBy(0, 500);
})





