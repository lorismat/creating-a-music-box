<!-- 
  THIS COMPONENT GATHERS SOME FEATURES I WANTED TO TRY WITH NUXT3 
  -- NOT RENDERED IN THE CURRENT MUSIC BOX APPLICATION --
-->


<template>
  <div>

    <client-only>
      <CanvasTest />
    </client-only>
    

    hello world
    {{ counter }} <br>
    {{ $testPlugin("Joe") }} <br>

    <button @click="helloTone">HELLO TONE</button>

  </div>
</template>

<script setup>
import * as Tone from 'tone';

const appConfig = useAppConfig();

// workshop with both
// https://www.asanzdiego.com/2020/03/taller-de-p5js-y-de-tonejs.html
// code
// https://github.com/asanzdiego/workshop-p5js-and-tonejs

// hello tone
function helloTone() {
  const synth = new Tone.Synth().toDestination();
  // define a melody
  const melody = [    
      ["C4", "8n"],
      ["E4", "8n"],
      ["G4", "8n"],
      ["C5", "8n"],
      ["G4", "8n"],
      ["E4", "8n"],
      ["C4", "8n"]
  ];
  // play the melody
  const now = Tone.now();
  for (let i = 0; i < melody.length; i++) {
      const note = melody[i][0];
      const duration = melody[i][1];
      synth.triggerAttackRelease(note, duration, now + i/2);
  }
}

// the below counter's state is set in the `index.vue` page
// store alternative
const counter = useState('counter');

// to use the plugin within the script
const { $testPlugin } = useNuxtApp()

onMounted(() => {
  // console.log( $testPlugin("Joe") );
  // trying out features from nuxt.js
  // console.log(counter);
  // console.log("hello world");
  // compTest();
  // utilsTest();
  // console.log("from app config", JSON.parse(JSON.stringify(appConfig)).testVal);
})
</script>

<style lang="scss" scoped>
div {
  font-family: monospace;
}
</style>