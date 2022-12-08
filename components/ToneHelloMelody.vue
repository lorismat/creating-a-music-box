<template>
  <div class="btn-container">
    <button @click="toggle">Play</button>
  </div>
</template>

<script setup>
import * as Tone from 'tone';

let synth, loop;
function toggle(e) {
  if (e.target.innerHTML == "Play") {
    e.target.innerHTML = "Pause";
    synth = new Tone.Synth().toDestination();
    loop = new Tone.Loop(time => {   
      synth.triggerAttackRelease("C4", "16n", time);
      synth.triggerAttackRelease("E4", "16n", time + 0.25);
      synth.triggerAttackRelease("G4", "16n", time + 1);
      synth.triggerAttackRelease("C5", "8n", time + 1.5);
    }, "1n")
    loop.start();
    Tone.Transport.start();
  } else {
    e.target.innerHTML = "Play";
    Tone.Transport.stop();
    loop.stop();
    synth.dispose();
  }
}

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
</style>