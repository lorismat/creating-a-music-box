<template>
  <div id ="p5sketch">
    <!-- p5 instance will be created here -->
  </div>
</template>

<script setup>
import p5 from "p5";

const appConfig = useAppConfig();
const colors = appConfig.colors;
const borderWidth = 4;

function drawing() {
  // console.log(window.innerWidth);
  // conditional width and height for responsiveness
  const W = 600;
  const H = 600;

  const sketch = ( s ) => {
    let xRect = W/2;
    let yRect = H/2;

    let xCircle = W/4;
    let yCircle = H/4;

    //30, 75, 58, 20, 86, 75

    let xT1 = 30;
    let yT1 = 75;
    let xT2 = 58;
    let yT2 = 20;
    let xT3 = 86;
    let yT3 = 75;

    let angle = 0;

    s.setup = () => {
      s.createCanvas(W, H);
    };
    
    s.draw = () => {
      angle += 0.01;
      s.background(255);
      s.stroke(0);
      s.strokeWeight(borderWidth);

      //rect
      s.push();
        s.fill(colors.pink);
        s.translate(xRect,yRect);
        s.rotate(angle);
        s.rect(-25,-25,50,50);
      s.pop();

      // circle
      s.push();
        s.fill(colors.yellow);
        s.translate(xCircle,yCircle);
        s.circle(0,0,50);
      s.pop();

      // triangle
      s.push();
        s.fill(colors.blue);
        s.translate(400,400);
        //s.rotate(angle);
        s.triangle(xT1,yT1,xT2,yT2,xT3,yT3);
      s.pop();
    };
  };
  let myp5 = new p5(sketch, "p5sketch");
}

onMounted(() => {
  drawing();
})

</script>

<style lang="scss" scoped>
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