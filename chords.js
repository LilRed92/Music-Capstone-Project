// Chords Script Below
import { chordNotes } from "/chordNotes.js"
//renders DOM based on user input
document.getElementById('rootSelect').addEventListener("click", function() { selectRoot() })


function selectRoot() {
    chordFillTop()
    chordFillMid()
    chordFillBott()
}

selectRoot()
// get user input and fills the three rows
function chordFillTop() {
    var rootValue = document.getElementById("rootSelect").value;
    let topChords = chordNotes[rootValue].secDom

    document.getElementById("topChords").innerHTML = topChords.map(function(topChords) {
        return `<div id="topRow">${topChords}</div>`
    }).join(" ")
}
function chordFillMid() {
    var rootValue = document.getElementById("rootSelect").value;
    let midChords = chordNotes[rootValue].root
    document.getElementById("midChords").innerHTML = midChords.map(function(midChords) {
        return `<div id="midRow">${midChords}</div>`
    }).join(" ")
}
function chordFillBott() {
    var rootValue = document.getElementById("rootSelect").value;
    let bottChords = chordNotes[rootValue].mInt
    document.getElementById("bottChords").innerHTML = bottChords.map(function(bottChord) {
        return `<div id="bottRow">${bottChord}</div>`
    }).join(" ")
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





