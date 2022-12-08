<!-- 
  TESTING CANVAS WITH NUXT 3
  -- NOT RENDERED IN THE CURRENT MUSIC BOX APPLICATION --
-->
<template>
  <div id ="p5sketch">
    <!-- p5 instance will be created here -->
  </div>
</template>

<script setup>
import p5 from "p5";

function drawing() {
  const sketch = ( s ) => {
    let x = 100;
    let y = 100;

    s.setup = () => {
      s.createCanvas(200, 200);
    };

    s.draw = () => {
      s.background(0);
      s.fill(255);
      s.rect(x,y,50,50);
    };
  };
  let myp5 = new p5(sketch, "p5sketch");
}

onMounted(() => {
  drawing();
})

</script>