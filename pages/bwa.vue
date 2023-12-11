<script setup lang="ts">

useHead({
  bodyAttrs: {
    class: computed(() => {
     return 'white';
          }),
  },
});
</script>

<template>
      
  <div class="main-container">
    <NuxtLayout name="white">
      <section>
      <ClientOnly>
        <BwaLogoAnimation/>
      </ClientOnly>
    </section>
      </NuxtLayout>
   
  </div>
    
  </template>

  
<style lang="scss">
.white #__nuxt{
  background-color: #ffffff;
  color: #69737b;
}
.main-container{
  max-width: 1600px;
  margin: 0 auto;
}
.white header nav ul li a{
  color: #000000;
}
  
</style>

