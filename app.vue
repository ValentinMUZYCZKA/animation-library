<template>
  <Header />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');

html{
  background-color: #000000;
  color: #FFFFFF;
  font-family: 'Maven Pro', sans-serif;
  font-size: 18px;
}
body{
  margin: 0;
}



.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

</style>