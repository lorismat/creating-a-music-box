<template>
  <div>
    <div class="btn-container">
      <button @click="toggle">Play</button>
    </div>
    <div id ="p5sketch">
      <!-- p5 instance will be created here -->
    </div>
  </div>
</template>

<script setup>
import * as Tone from 'tone';
import p5 from "p5";

// fetching color from an external file
const appConfig = useAppConfig();
const colors = appConfig.colors;

let synth, loop;
let myp5;

const notes = [
  { key: "C4", color: colors.red },
  { key: "D4", color: colors.orange },
  { key: "E4", color: colors.purple },
  { key: "F4", color: colors.blue },
  { key: "G4", color: colors.yellow },
  { key: "A4", color: colors.pink }
]

function toggle(e) {
  if (e.target.innerHTML == "Play") {
    e.target.innerHTML = "Pause";
    synth = new Tone.Synth().toDestination();
    loop = new Tone.Loop(time => {  
      // defining a random integer 
      const randomIdx = parseInt(Math.random()*notes.length);
      synth.triggerAttackRelease(notes[randomIdx].key, "8n", time);
      myp5.draw(notes[randomIdx].color);
    }, "4n")
    loop.start();
    Tone.Transport.start();
  } else {
    e.target.innerHTML = "Play";
    Tone.Transport.stop();
    loop.stop();
    synth.dispose();
  }
}

function drawing() {
  const W = 600;
  const H = 600;

  const sketch = ( s ) => {

    s.setup = () => {
      s.createCanvas(W, H);
      s.background(255);
    };
    
    s.draw = (color) => {
      if (color != undefined) {
        s.stroke(0);
        s.strokeWeight(4);
        s.fill(color);
        s.circle(Math.random()*W,Math.random()*H,50);
      }
      // prevent looping to draw only when the drawing function is called
      s.noLoop();
    };
  };
  myp5 = new p5(sketch, "p5sketch");
}

onMounted(() => {
  drawing();
})

</script>

<style lang="scss" scoped>
.btn-container {
  text-align:center;
  padding: 20px
}
button {
  // @extend %centered-screen;
  border: 4px solid #000;
  border-radius:10px;
  padding: 8px 16px;
  cursor:pointer;
  background-color:#fff;
  font-weight: bold;
  font-size: 24px;
  box-shadow: $shadow $purple-dark;
}

button:hover {
  box-shadow: none;
}

#p5sketch {
  // @extend %centered-screen;
  border: 4px solid #000;
  border-radius:10px;
  max-width: fit-content;
  margin:0 auto;
  background-color:#fff;
  padding:2px;
}
</style>