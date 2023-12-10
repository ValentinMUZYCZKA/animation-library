<script setup lang="ts">

import { useBWAnimation } from '@/composables/animations/bwa';
  const { entrance,cleanUpBWAnimation } = useBWAnimation();
 

onMounted(() => {
  entrance();
});

onBeforeUnmount(() => {
  cleanUpBWAnimation();
});


</script>

<template >

 <div class="logo">
    <div class="letters first-letter">
          <div class="main-letter">
            b
          </div>
          <div class="sub-letters">
            <span>u</span>
            <span>s</span>
            <span>i</span>
            <span>n</span>
            <span>e</span>
            <span>s</span>
            <span>s</span>
          </div>
        </div>
        <div class="letters second-letter">
          <div class="main-letter">
            w
          </div>
          <div class="sub-letters">
            <span>e</span>
            <span>b</span>
          </div>
        </div>
        <div class="letters third-letter">
          <div class="main-letter">
            a
          </div>
          <div class="sub-letters">
            <span>g</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
          </div>
        </div>
      </div>

</template>

<style lang="scss">

.logo{
  opacity: 0;
}

.logo{
    padding: 15px 25px;
    display: flex;
    
    & .letters{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: 'EmBauhaus', 'Maven Pro', sans-serif;
      font-size: 30px;
      font-weight: 400;
      color: #09183f;
      text-transform: lowercase;
      letter-spacing: 4px;
      position: relative;
      z-index: 1000;

      & .main-letter{
        position: relative;
        z-index: 1000;
        color: #28afcf;
      }
      & .sub-letters{
        position: absolute;
        bottom: calc(50% - 85px);
        left: 135px;
        z-index: 100;
        font-weight: 300;
        font-size: 45px;
        display: flex;

        & span{
          opacity: 0;
        }
      }
    }
  }
</style>