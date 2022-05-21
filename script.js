let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}


///  /////////////////////////////////  ///
/////  ///////// START OF /////////  /////
///////  ///// COLLAB PAGE /////  ///////
/////////  ///// SCRIPT /////  /////////
///////////  /////////////  ///////////
const audioBegin = new AudioContext()
document.getElementById("start-togetherjs").addEventListener("click",TogetherJS)


//***SIGNUP-LOGIN SCRIPT
document.getElementById("signup-btn").addEventListener("click", displaySignup)
document.getElementById("login-btn").addEventListener("click", displayLogin)
document.getElementById("s-close-x").addEventListener("click", closeModal)
document.getElementById("l-close-x").addEventListener("click", closeModal)
 function displaySignup() {
   document.getElementById("sign-overlay").style.display = "block"
   document.getElementById("signup").innerHTML =
       `

       <div class="box" id="title">
         <h1>Create your account!</h1>
         </div>

       <form class="accountForm" method="post" action="/users">

         <div class="form-entries">
         <div class="tab">
           <div class="box" id="nameFirst">
           <label>First name:</label>
           <input name="firstName" id="first"/>
           </div>

          <div class="box" id="nameLast">
           <label>Last name:</label>
           <input name="lastName" id="last"/>
           </div>
         </div>

         <div class="tab">
           <div class="box" id="dob">
            <label>D.O.B</label>
            <input name="dateOfBirth" id="dateOfBirth"/>
          </div>

           <div class="box" id="emailAddress">
           <label>Email:</label>
           <input name="email" id="email"/>
           </div>
         </div>

         <div class="tab">
           <div class="box" id="usernameAdd">
           <label>Username:</label>
           <input name="username" id="username"/>
           </div>

           <div class="box" id="passwordAdd">
             <label>Password:</label>
             <input name="password" id="password"/>
           </div>
         </div>

         <div class="tab">
           <a href="privacy-policy.html">Privacy Policy</a>
         </div>
         </div>

         <div id="submit">
         <button id="submit-btn" class="closeModalBtn">Sign up!</button>
         </div>

       </form>`


  document.getElementsByClassName("closeModalBtn").addEventListener("click", closeModal)
}

 function displayLogin() {
   document.getElementById("log-overlay").style.display = "block"
  document.getElementById("login").innerHTML =
      `
      <div class="box" id="title-login">
      <h1>Login!</h1>
      </div>

      <form class="accountForm" method="post" action="/users">

      <div class="form-entries">

        <div class="tab">
          <div class="box" id="usernameGet">
          <label>Username:</label>
          <input name="username" id="username-get"/>
          </div>

          <div class="box" id="passwordGet">
          <label>Password:</label>
          <input name="password" id="password-get"/>
          </div>
        </div>

        <div id="login">
        <button id="login-btn" class="closeModalBtn">Login!</button>
        </div>

      </form>`


  document.getElementsByClassName("closeModalBtn").addEventListener("click", closeModal)
 }




function closeModal() {
  document.getElementById("overlay").style.display = "none"
}



//***STUDIO-MENU SCRIPT
document.getElementById("file").addEventListener("click", displayFileMenu)
document.getElementById("edit").addEventListener("click", displayEditMenu)
document.getElementById("settingsbtn").addEventListener("click", displaySettingsMenu)


const fileMenu = document.getElementById("file-content")
const editMenu = document.getElementById("edit-content")
const settingsMenu = document.getElementById("settings-content")

 function displayFileMenu() {
   fileMenu.classList.remove('inactive')
   fileMenu.classList.add('active')
  document.getElementById("file-content").innerHTML =
    `<a href="#">New...</a>
    <a href="#">Open</a>
    <a href="#">Open Recent...</a>
    <hr/>
    <a href="#">Save</a>
    <a href="#">Save As...</a>
    <a href="#">Export</a>
    <a href="#">Share</a>
    <hr/>
    <a href="profile.html">Exit Studio</a>`


}




function displayEditMenu() {
   editMenu.classList.remove('inactive')
   editMenu.classList.add('active')
  document.getElementById("edit-content").innerHTML =
      `<a href="#">Undo</a>
      <a href="#">Redo</a>
      <hr/>
      <a href="#">Split</a>
      <a href="#">Merge</a>
      <a href="#">Mute</a>
      <a href="#">Cut</a>
      <a href="#">Copy</a>
      <a href="#">Paste</a>
      <hr/>
      <a href="#">Add</a>
      <a href="#">Delete</a>`


}



function displaySettingsMenu() {
   settingsMenu.classList.remove('inactive')
   settingsMenu.classList.add('active')
  document.getElementById("settings-content").innerHTML =
      `<a href="#">...</a>
      <a href="#">...</a>
      <hr/>
      <a href="#">...</a>
      <a href="#">...</a>
      <a href="#">...</a>
      <a href="#">...</a>
      <a href="#">...</a>
      <a href="#">...</a>
      <hr/>
      <a href="#">...</a>
      <a href="#">...</a>`



}




////DRAG AND DROP FILES LIST
let filesDropArea = document.getElementById('filesDropArea')

// filesDropArea.addEventListener('dragenter', handlerFunction, false)
// filesDropArea.addEventListener('dragleave', handlerFunction, false)
// filesDropArea.addEventListener('dragover', handlerFunction, false)
// filesDropArea.addEventListener('drop', handlerFunction, false)

let tracksDropArea = document.getElementById('tracksDropArea')

// tracksDropArea.addEventListener('dragenter', handlerFunction, false)
// tracksDropArea.addEventListener('dragleave', handlerFunction, false)
// tracksDropArea.addEventListener('dragover', handlerFunction, false)
// tracksDropArea.addEventListener('drop', handlerFunction, false)


//***CTRLS SCRIPT
// const ctrlsBar = document.getElementById("ctrlsBar").innerHTML =
// `<div class="left">
// 	<span><i class="fa-light fa-volume"></i></span>
// 	<input type="range" min="0.0" max="1.0" step="0.01" value="0.5" list="volumes" name="volume">
// 	<datalist id="volumes">
// 		<option value="0.0" label="Mute">
// 		<option value="1.0" label="100%">
// 	</datalist>
// </div>
//
// <div class="center">
// 	<button id="record" class="ctrls-btn"><i class="fa-solid fa-microphone"></i></button>
//
// 	<button id="play" class="ctrls-btn"><i class="fa-solid fa-play"></i></i></button>
//
// 	<button id="pause" class="ctrls-btn"><i class="fa-regular fa-pause"></i></button>
//
// 	<button id="stop" class="ctrls-btn"><i class="fa-solid fa-stop"></i></button>
//
// 	<button id="save" class="ctrls-btn"><i class="fa-solid fa-floppy-disk"></i></i></button>
// </div>
//
//
// <div class="right">
// 	<span>Current waveform:</span>
// 	<select name="waveform"><i class="fa-regular fa-waveform"></i>
//
// 		<option value="sine"><i class="fa-regular fa-wave-sine"></i>Sine</option>
//
// 		<option value="square"><i class="fa-regular fa-wave-square"></i>Square</option>
//
// 		<option value="sawtooth"><embed src="./sawtooth-wave.svg" height="50">Sawtooth</option>
//
//
// 		<option value="triangle"><i class="fa-regular fa-wave-triangle"></i>Triangle</option>
//
// 		<option value="custom"><i class="fa-regular fa-waveform-lines"></i>Custom</option>
//
// 	</select>
// </div>`




//***INSTRUMENTS SCRIPT
let hh, clap, bass //HIHAT, container for sound sourceKeys
let hPat, cPat, bPat //HIHAT PATTERN, an array of numbers that can make beats.
let hPhrase, cPhrase, bPhrase //HIHAT PHRASE, defines how the pattern is interpreted.
let drums //PART, parts + phrases attach phrase to part
let bpmCTRL
let beatLength
let cellWidth
let cnv
let sPat
let cursorPos


function setup() {
  cnv = createCanvas(320, 60)
  cnv.mousePressed(canvasPressed)

  beatLength = 16
  cellWidth = width/beatLength
  cursorPos = 0


  hh = loadSound('sound_assets/hh_sample.mp3', () => {})
  clap = loadSound('sound_assets/clap_sample.mp3', () => {})
  bass = loadSound('sound_assets/bass_sample.mp3', () => {})

  hPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  cPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  bPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  hPhrase= new p5.Phrase('hh', (time) => {
    hh.play(time)
  }, hPat)

  cPhrase= new p5.Phrase('clap', (time) => {
    clap.play(time)
  }, cPat)

  bPhrase= new p5.Phrase('bass', (time) => {
    bass.play(time)
  }, bPat)

  drums = new p5.Part()

  drums.addPhrase(hPhrase)
  drums.addPhrase(cPhrase)
  drums.addPhrase(bPhrase)
  drums.addPhrase('seq', sequence, sPat)

  bpmCTRL = createSlider(30, 600, 80, 1)
  bpmCTRL.position(10, 70)
  bpmCTRL.input(() => {drums.setBPM(bpmCTRL.value())})
  drums.setBPM('80')

  drawMatrix()
}



function canvasPressed() {

  let rowClicked = floor(3*mouseY/height)
  let indexClicked = floor(16*mouseX/width)

  if (rowClicked === 0) {

  console.log('first row ' + indexClicked)
  hPat[indexClicked] = hPat[indexClicked]? 0: 1;
  push.hPat

  } else if (rowClicked === 1) {

  console.log('second row')
  cPat[indexClicked] = cPat[indexClicked]? 0: 1;

  } else if(rowClicked === 2) {

  console.log('third row')
  bPat[indexClicked] = bPat[indexClicked]? 0: 1;
  }

  drawMatrix()
}



function drawMatrix() {

  background(80)
  stroke('gray')
  strokeWeight(2)
  fill('white')

  for (let i = 0; i < beatLength + 1; i++) {

  //startx, starty, endx, endy
  line(i*cellWidth, 0, i*cellWidth, height)
  }

  for (let i = 0; i < 4; i++) {
  line(0, i*height/3, width, i*height/3)
  }
  noStroke()

  for (let i = 0; i < beatLength; i++) {

  if (hPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/6, 10)
  }
  if (cPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height/2, 10)
  }
  if (bPat[i] === 1) {
    ellipse(i*cellWidth +0.5*cellWidth, height*5/6, 10)
  }

  }
}



function keyPressed() {
  if (key === " ") {

  if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()) {

    if (!drums.isPlaying) {

    drums.loop()

    } else {

    drums.stop()
    }
  } else {
    console.log('oops, be patient as the drums load...')
  }
  }
}

function sequence(time, beatIndex) {
  console.log(beatIndex)

  setTimeout(() => {

    drawMatrix()
    drawPlayhead(beatIndex)

  }, time * 1000)

}

function drawPlayhead(beatIndex) {

  stroke('red')
  fill(255, 0, 0, 30)
  rect((beatIndex - 1) * cellWidth, 0, cellWidth, height)

displaySequencer()

}

  //let lowNote = 48;
  //let highNote = 83;
  //let piano = createPiano(lowNote, highNote);



  //let piano = new Nexus.Piano('keyboard',{
    //'size': [500,125],
    //'mode': 'button',  // 'button', 'toggle', or 'impulse'
  //	'lowNote': 24,
  //	'highNote': 60
//	})

  //const createPiano = (lowNote, highNote) => {
  //  const newPiano = new Nexus.Piano('piano', {
  //	size: [300, 300],
  //	mode: 'toggle',
    //lowNote,
    //highNote,
   // });

   // return newPiano;
//	}


//const instruments = document.getElementsByClassName("instrument-item")
//let instrumentPosition = 0
//const totalInstruments = instruments.length

//document.getElementById("instruments-button-next").addEventListener("click", moveToNextInstrument)
//document.getElementById("instruments-button-prev").addEventListener("click", moveToPrevInstrument)

//function moveToNextInstrument() {
 // hideAllInstruments()
  //if (instrumentPosition === totalInstruments - 1) {
//	instrumentPosition = 0
 // } else {
  //instrumentPosition++
  //}
 // instruments[instrumentsPosition].classList.add("instrument-item-visible")
//}

//function moveToPrevInstrument() {
  //hideAllInstruments()
//  if (instrumentPosition === 0) {
//	instrumentPosition = totalInstruments - 1
 // } else {
//	instrumentPosition--
  //}
 // instruments[instrumentPosition].classList.add("instrument-item-visible")
//}

//function hideAllInstruments() {
 // for (let instrument of instruments) {
  //instrument.classList.remove("instrument-item-visible")
//	instrument.classList.add("instrument-item-hidden")
  //}
//}

//let audio = new AudioContext()



/////////////////////////////////////////// DOM Elements to variables


// MIDI
const midiDevices = document.getElementById('midiDevicesSelector')
const myMidiMonitor = document.getElementById('midiMonitorDisplay')
const velocityOn = document.getElementById('velocityOnCheckbox')

// MIDI learn
const midiLearn = document.getElementById('midiLearnCheckbox')
let control = []
let controlId = []
let lastChanged

 // BPM
let tempoBpm = document.getElementById('bpmSlider')
bpmDisplay.innerHTML = tempoBpm.value

// pitch bend vars
const pitchBender = document.getElementById("pitchBendSlider")
const bendRange = document.getElementById("bendRangeSlider")
const bendDisplay = document.getElementById("bendRangeDisplay")
let bendAction = false
//bendDisplay.innerHTML = bendRange.value

// gain
const mainGain = document.getElementById('mainGainSlider')
control[0] = document.getElementById("mainGainSlider")

//amp envelope
const ampA = document.getElementById("attackSlider")
control[1] = document.getElementById("attackSlider")

const ampD = document.getElementById("decaySlider")
control[2] = document.getElementById("decaySlider")

const ampS = document.getElementById("sustainSlider")
control[3] = document.getElementById("sustainSlider")

const ampR = document.getElementById("releaseSlider")
control[4] = document.getElementById("releaseSlider")

//filter
const filterCut = document.getElementById("filterCutSlider")
control[5] = document.getElementById("filterCutSlider")

const filterRes = document.getElementById("filterResSlider")
control[6] = document.getElementById("filterResSlider")

//filter
const mainFilterLfoMod = document.getElementById("mainFilterLfoModSlider")
control[7] = document.getElementById("mainFilterLfoModSlider")

const mainFilterLfoRate = document.getElementById("mainFilterLfoRateSlider")
control[8] = document.getElementById("mainFilterLfoRateSlider")

//const mainFilterLfoRateDisplay = document.getElementById("mainFilterLfoRateDisplay")
//mainFilterLfoRateDisplay.innerHTML = mainFilterLfoRate.value

const mainFilterLfoRetrig = document.getElementById("mainFilterRetrigCheckbox")
const mainFilterLfoSync = document.getElementById("mainFilterSyncCheckbox")

//delay
const delayTime = document.getElementById("delayTimeSlider")
control[9] = document.getElementById("delayTimeSlider")

//const delayTimeDisplay = document.getElementById("delayTimeDisplay")
//delayTimeDisplay.innerHTML = "4n"

const delayFb = document.getElementById("delayFbSlider")
control[10] = document.getElementById("delayFbSlider")

const delayWet = document.getElementById("delayWetSlider")
control[11] = document.getElementById("delayWetSlider")

/////////////////////////////////////////// DOM Elements to variables

/////////////////////////////////////////// Global variables

// last changed gui param for MIDI learn
//let lastChanged

/////////////////////////////////////////// Global Variables

/////////////////////////////////////////// Canvas Variables

// Send Tone audio to Nexus
Nexus.context = Tone.context

// virtual piano create and send to html div
const piano = new Nexus.Piano('#keyboardDiv',{
  'size': [750,300],
  'mode': 'button',  // 'button', 'toggle', or 'impulse'
  'lowNote': 24,
  'highNote': 84


})

// create oscilloscope and send to html div
//const oscilloscope = new Nexus.Oscilloscope('#oscilloscopeDiv')


/////////////////////////////////////////// Canvas Variables

////////////////////////////////////////// MIDI Variables
let noteOn
let noteOff
let midiFreq
let midiVelocity
let count = 0
let pitchBend = 1

////////////////////////////////////////// MIDI Variables

/////////////////////////////////////////// Audio Variables

//  create audo objects
const osc = new Tone.Oscillator(440, "sawtooth")
const mainFilterLfo = new Tone.LFO(0.1,400,4000).start()
const mainFilter = new Tone.Filter(Nexus.scale(parseFloat(filterCut.value),0,1,20,10000), "lowpass",-24)
const ampEnvelope = new Tone.Envelope (0.1,0.1,1,0.1)
const vcaNode = Tone.context.createGain()
const pingPong = new Tone.PingPongDelay("4n", 0.7)

// audio connections
mainFilterLfo.connect(mainFilter.frequency)
osc.connect(mainFilter)
mainFilter.connect(vcaNode)
ampEnvelope.connect(vcaNode.gain)

vcaNode.connect(pingPong)
pingPong.connect(Tone.Master)

// audio initial values

ampEnvelope.attack = Nexus.scale(parseFloat(ampA.value),0,1,0.01,2)
ampEnvelope.decay = Nexus.scale(parseFloat(ampD.value),0,1,0.01,2)
ampEnvelope.sustain = parseFloat(ampS.value)
ampEnvelope.release = Nexus.scale(parseFloat(ampR.value),0,1,0.01,3)

mainFilter.frequency.value = Nexus.scale(parseFloat(filterCut.value),0,1,20,10000)
mainFilter.Q.value = Nexus.scale(parseFloat(filterRes.value),0,1,0.01,10)
mainFilterLfo.amplitude.value = parseFloat(mainFilterLfoMod.value)
mainFilterLfo.frequency.value = Nexus.scale(parseFloat(mainFilterLfoRate.value),0,1,0.01,10)
Tone.Master.volume.value = Nexus.scale(parseFloat(mainGain.value),0,1,-50,-10)

pingPong.wet.value = parseFloat(delayWet.value)

Tone.Transport.bpm.value = parseFloat(tempoBpm.value)

delayTimeSet()
mainFilterLfoRateSet()
osc.start()

// connect oscilloscope to output
//oscilloscope.connect(Tone.Master)

/////////////////////////////////////////// Audio Variables


/////////////////////////////////////////// Listeners

// get the virtual piano
piano.on('change',function(v) {
  if (v.state){
    midiVelocity = 1

    // set the osc frequency to the played key
     freq = Nexus.mtof(v.note)
     osc.frequency.value = freq*pitchBend
     ampEnvelope.triggerAttack()
     if (mainFilterLfoRetrig.checked){
         mainFilterLfo.stop()
         mainFilterLfo.start()
      }
  }else{
    ampEnvelope.triggerRelease()
  }
})

// pitch bend action to snap to center
function pitchBendAction() {
  pitchBender.value = 0.5
}

// display pitch bend range values in gui text
function pitchBendRangeSet() {
  bendDisplay.innerHTML = bendRange.value
}

// call parameter functions when changed by MIDI cc
function controlCall(controlMatch){
  switch(controlMatch){
    case 0:
    mainGainSet()
    case 1:
    ampAttackSet()
    break
    case 2:
    ampDecaySet()
    break
    case 3:
    ampSustainSet()
    break
    case 4:
    ampReleaseSet()
    break
    case 5:
    mainFilterCutSet()
    break
    case 6:
    mainFilterResSet()
    break
    case 7:
    mainFilterLfoModSet()
    break
    case 8:
    mainFilterLfoRateSet()
    break
    case 9:
    delayTimeSet()
    break
    case 10:
    delayFbSet()
    break
    case 11:
    delayWetSet()
    break
  }
}

// bpm set
let bpmInput = document.getElementById("bpmSlider")
bpmInput.addEventListener("input", bpmSet())
function bpmSet(){
  Tone.Transport.bpm.value = parseInt(tempoBpm.value)
  bpmDisplay.innerHTML = tempoBpm.value
  delayTimeSet()
  mainFilterLfoRateSet()
}

// main gain
let mainGainInput = document.getElementById("mainGainSlider")
mainGainInput.addEventListener("input", mainGainSet())
function mainGainSet() {
  Tone.Master.volume.value = Nexus.scale(parseFloat(mainGain.value),0,1,-50,-10)
  lastChanged = 0
}

// amp attack
let attackInput = document.getElementById("attackSlider")
attackInput.addEventListener("input", ampAttackSet())
function ampAttackSet() {
  ampEnvelope.attack = Nexus.scale(parseFloat(ampA.value),0,1,0.01,2)
  lastChanged = 1
}

// amp decay
let decayInput = document.getElementById("decaySlider")
decayInput.addEventListener("input", ampDecaySet())
function ampDecaySet() {
  ampEnvelope.decay = Nexus.scale(parseFloat(ampD.value),0,1,0.01,2)
  lastChanged = 2
}

// amp sustain
let sustainInput = document.getElementById("sustainSlider")
sustainInput.addEventListener("input", ampSustainSet())
function ampSustainSet() {
  ampEnvelope.sustain = parseFloat(ampS.value)
  lastChanged = 3
}

// amp release
let releaseInput = document.getElementById("releaseSlider")
releaseInput.addEventListener("input", ampReleaseSet())
function ampReleaseSet() {
  ampEnvelope.release = Nexus.scale(parseFloat(ampR.value),0,1,0.01,3)
  lastChanged = 4
}

// filter cut
let cutInput = document.getElementById("filterCutSlider")
cutInput.addEventListener("input", mainFilterCutSet())
function mainFilterCutSet() {
  mainFilter.frequency.value = Nexus.scale(parseFloat(filterCut.value),0,1,20,10000)
  lastChanged = 5
}

// filter res
let restInput = document.getElementById("filterResSlider")
restInput.addEventListener("input", mainFilterResSet())
function mainFilterResSet() {
  mainFilter.Q.value = Nexus.scale(parseFloat(filterRes.value),0,1,0.01,10)
  lastChanged = 6
}

// filter lfo mod
let lfoModInput = document.getElementById("mainFilterLfoModSlider")
lfoModInput.addEventListener("input", mainFilterLfoModSet())
function mainFilterLfoModSet() {
  mainFilterLfo.amplitude.value = parseFloat(mainFilterLfoMod.value)
  lastChanged = 7
}

// filter lfo rate
let lfoRateInput = document.getElementById("mainFilterLfoRateSlider")
let filterSyncCheckInput = document.getElementById("mainFilterSyncCheckbox")
lfoRateInput.addEventListener("input", mainFilterLfoRateSet())
filterSyncCheckInput.addEventListener("input", mainFilterLfoRateSet())
function mainFilterLfoRateSet() {
  if (mainFilterLfoSync.checked){
    let filterLfoRateString
    let syncValue = parseInt(Nexus.scale(parseFloat(mainFilterLfoRate.value),0,1,0,24))
    switch(syncValue){
    case 0:
    mainFilterLfo.frequency.value = "64m"
    filterLfoRateString = "64b"
    break
    case 1:
    mainFilterLfo.frequency.value = "32m"
    filterLfoRateString = "32b"
    break
    case 2:
    mainFilterLfo.frequency.value = "16m"
    filterLfoRateString = "16b"
    break
    case 3:
    mainFilterLfo.frequency.value = "8m"
    filterLfoRateString = "8b"
    break
    case 4:
    mainFilterLfo.frequency.value = "4m"
    filterLfoRateString = "4b"
    break
    case 5:
    mainFilterLfo.frequency.value = "2m"
    filterLfoRateString = "2b"
    break
    case 6:
    mainFilterLfo.frequency.value = "1m"
    filterLfoRateString = "1b"
    break
    case 7:
    mainFilterLfo.frequency.value = "2n."
    filterLfoRateString = "2n."
    break
    case 8:
    mainFilterLfo.frequency.value = "2n"
    filterLfoRateString = "2n"
    break
    case 9:
    mainFilterLfo.frequency.value = "2t"
    filterLfoRateString = "2t"
    break
    case 10:
    mainFilterLfo.frequency.value = "4n."
    filterLfoRateString = "4n."
    break
    case 11:
    mainFilterLfo.frequency.value = "4n"
    filterLfoRateString = "4n"
    break
    case 12:
    mainFilterLfo.frequency.value = "4t"
    filterLfoRateString = "4t"
    break
    case 13:
    mainFilterLfo.frequency.value = "8n."
    filterLfoRateString = "8n."
    break
    case 14:
    mainFilterLfo.frequency.value = "8n"
    filterLfoRateString = "8n"
    break
    case 15:
    mainFilterLfo.frequency.value = "8t"
    filterLfoRateString = "8t"
    break
    case 16:
    mainFilterLfo.frequency.value = "16n."
    filterLfoRateString = "16n."
    break
    case 17:
    mainFilterLfo.frequency.value = "16n"
    filterLfoRateString = "16n"
    break
    case 18:
    mainFilterLfo.frequency.value = "16t"
    filterLfoRateString = "16t"
    break
    case 19:
    mainFilterLfo.frequency.value = "32n."
    filterLfoRateString = "32n."
    break
    case 20:
    mainFilterLfo.frequency.value = "32n"
    filterLfoRateString = "32n"
    break
    case 21:
    mainFilterLfo.frequency.value = "32t"
    filterLfoRateString = "32t"
    break
    case 22:
    mainFilterLfo.frequency.value = "64n."
    filterLfoRateString = "64n."
    break
    case 23:
    mainFilterLfo.frequency.value = "64n"
    filterLfoRateString = "64n"
    break
    case 24:
    mainFilterLfo.frequency.value = "64t"
    filterLfoRateString = "64t"
    break
  }
  mainFilterLfoRateDisplay.innerHTML = filterLfoRateString
  }else{
  mainFilterLfo.frequency.value = Nexus.scale(parseFloat(mainFilterLfoRate.value),0,1,0.01,10)
  mainFilterLfoRateDisplay.innerHTML = mainFilterLfo.frequency.value
  }
  lastChanged = 8
}

// delay time
let delayTimeInput = document.getElementById("delayTimeSlider")
delayTimeInput.addEventListener("input", delayTimeSet())
function delayTimeSet() {
  let delayString
  switch(parseInt(delayTime.value)){
    case 0:
    pingPong.delayTime.value = "64t"
    delayString = "64t"
    break
    case 1:
    pingPong.delayTime.value = "64n"
    delayString = "64n"
    break
    case 2:
    pingPong.delayTime.value = "64n."
    delayString = "64n."
    break
    case 3:
    pingPong.delayTime.value = "32t"
    delayString = "32t"
    break
    case 4:
    pingPong.delayTime.value = "32n"
    delayString = "32n"
    break
    case 5:
    pingPong.delayTime.value = "32n."
    delayString = "32n."
    break
    case 6:
    pingPong.delayTime.value = "16t"
    delayString = "16t"
    break
    case 7:
    pingPong.delayTime.value = "16n"
    delayString = "16n"
    break
    case 8:
    pingPong.delayTime.value = "16n."
    delayString = "16n."
    break
    case 9:
    pingPong.delayTime.value = "8t"
    delayString = "8t"
    break
    case 10:
    pingPong.delayTime.value = "8n"
    delayString = "8n"
    break
    case 11:
    pingPong.delayTime.value = "8n."
    delayString = "8n."
    break
    case 12:
    pingPong.delayTime.value = "4t"
    delayString = "4t"
    break
    case 13:
    pingPong.delayTime.value = "4n"
    delayString = "4n"
    break
    case 14:
    pingPong.delayTime.value = "4n."
    delayString = "4n."
    break
    case 15:
    pingPong.delayTime.value = "2t"
    delayString = "2t"
    break
    case 16:
    pingPong.delayTime.value = "2n"
    delayString = "2n"
    break
    case 17:
    pingPong.delayTime.value = "2n."
    delayString = "2n."
    break
    case 18:
    pingPong.delayTime.value = "1m"
    delayString = "1b"
    break
  }
  delayTimeDisplay.innerHTML = delayString
  lastChanged = 9
}

// delay feedback
let delayFbInput = document.getElementById("delayFbSlider")
delayFbInput.addEventListener("input", delayFbSet())
function delayFbSet() {
  pingPong.feedback.value = parseFloat(delayFb.value)
  lastChanged = 10
}

// delay wet
let delayWetInput = document.getElementById("delayWetSlider")
delayWetInput.addEventListener("input", delayWetSet())
function delayWetSet() {
  pingPong.wet.value = parseFloat(delayWet.value)
  lastChanged = 11
}

/////////////////////////////////////////// Listeners

/////////////////////////////////////////// MIDI

// get a midi object from the browser
navigator.requestMIDIAccess()
  .then(onMIDISuccess, onMIDIFailure)

// process the midi object
function onMIDISuccess(midiAccess) {
  midiObject = midiAccess
  let inputs = midiAccess.inputs
  let outputs = midiAccess.outputs

  midiDevices.options.length = 0
  midiAccess.inputs.forEach(function (input) {
  midiDevices.options[midiDevices.options.length] = new Option(input.name, input.id)
  })
}

// select the midi driver
midiDevices.addEventListener('change', function() {
  selectedMidiDevice=midiDevices.value
  onMIDISelectedDevice()
}, false)

// process midi messages from selected driver
function onMIDISelectedDevice(){
  for (let input of midiObject.inputs.values()){
     if (input.id == selectedMidiDevice){
      input.onmidimessage = getMIDIMessage
      }else{input.onmidimessage = 0}
  }
}

// browser midi failure console log
function onMIDIFailure() {
  console.log('Could not access your MIDI devices.')
}

// process midi messages
function getMIDIMessage(message) {

  /*//midi log
  console.log(message.data[0])
  console.log(message.data[1])
  console.log(message.data[2])*/

  let command = message.data[0]
  let note = message.data[1]
  let value = message.data[2]
  let velocity = (message.data.length > 2) ? message.data[2] : 0 // a velocity value might not be included with a noteOff command
  let indicatorFill = true
  switch (command) {
    case 144: // noteOn
    myMidiMonitor.innerHTML = 'Note On ' + message.data[1] + ' Velocity ' + message.data[2]
      if (velocity > 0) {
       noteOn = true
       if (velocityOn.checked){
        midiVelocity = velocity/127
       }else{
        midiVelocity = 1
       }
      freq = Nexus.mtof(note)
      osc.frequency.value = freq * pitchBend
       ampEnvelope.triggerAttack("+0.0", midiVelocity)
     if (mainFilterLfoRetrig.checked){
         mainFilterLfo.stop()
         mainFilterLfo.start()
      }
     //  piano.toggleKey(note,true)
      count++;
      } else {
        count--;
        if (count <1){
        noteOn = false
        ampEnvelope.triggerRelease()

         /* // show on virtual keys
        pianoI = 24
            while (pianoI < 85 ) {
           piano.toggleKey(pianoI,false)
            pianoI++
            }*/

        }
      }
      break
    case 128: // noteOff
        myMidiMonitor.innerHTML = 'Note Off ' + message.data[1] + ' Velocity ' + message.data[2]
        count--;
        if (count <1){
        noteOn = false
          ampEnvelope.triggerRelease()

            /* // show on virtual keys
            pianoI = 24
            while (pianoI < 85 ) {
           piano.toggleKey(pianoI,false)
            pianoI++
            }*/

        }

      break
    case 224: // pitch bend
      myMidiMonitor.innerHTML = 'Pitch Bend ' + message.data[1] + ' MSB ' + message.data[2]
      pitchBend = Math.pow(2,((((((message.data[2] << 7) | message.data[1]) * 2) / 16383) - 1) * (bendRange.value))/12)
      pitchBender.value = value/127
      osc.frequency.value = freq * pitchBend
      if (message.data[2]===64){
        bendAction = false
      }else{
        bendAction = true
      }
      break
    case 191: // control change - cc
      myMidiMonitor.innerHTML = 'CC ' + message.data[1] + ' Value ' + message.data[2]
      if (!midiLearn.checked){
        //look in the controlId array and find the index containing the incoming cc
        let match = controlId.indexOf(message.data[1])
        if (match >= 0){
          if (match<90){ // sliders
          control[match].value = message.data[2]/127
          controlCall(match)
          }else{ // checkboxes
          if (message.data[2]>63){
            control[match].checked = true
          }else{
            control[match].checked = false
          }
          }
          }
        }
       else{
         controlId[lastChanged] = message.data[1]
       }
       break
      case 176: // control change - cc
      myMidiMonitor.innerHTML = 'CC ' + message.data[1] + ' Value ' + message.data[2]
      if (!midiLearn.checked){
        //look in the controlId array and find the index containing the incoming cc
        let match = controlId.indexOf(message.data[1])
        if (match >= 0){
          if (match<90){ // sliders
          control[match].value = message.data[2]/127
          controlCall(match)
          }else{ // checkboxes
          if (message.data[2]>63){
            control[match].checked = true
          }else{
            control[match].checked = false
          }
          }
          }
        }

       else{
         controlId[lastChanged] = message.data[1]
       }
       break
  }
}
///  /////////////////////////////////  ///
/////  ////////// END OF //////////  /////
///////  ///// COLLAB PAGE /////  ///////
/////////  ///// SCRIPT /////  /////////
///////////  /////////////  ///////////
