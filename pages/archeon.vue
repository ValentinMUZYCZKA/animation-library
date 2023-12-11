

<template>
    <section>
      <div id="loader">
        <div class="loader-text">
        <div class="loader-counter">
          00
        </div>
        %
        </div>
      </div>
      <ClientOnly>
        <Bike />
      </ClientOnly>
      <div class="texts-container">
        <div class="title section content-left">
          <h1> 
            Une moto
          </h1>
            <p>Qu'elle est bien </p>
            <p>pour la conduire</p>
          
        </div>

        <div class="section-1  section content-right">
          <h2>
            rouge  
          </h2>
          <p>Elle est donc</p>
          <p>très rapide</p>
        </div>

        <div class="section-2  section section--half content-left">
          <p class="stat-title">
            0 à 100
          </p>
          <p>vite</p>

          <p class="stat-title">
            Poids
          </p>
          <p>Pas très lourd</p>
        </div>

        <div class="section-2  section section--half content-right">
          <p class="stat-title">
            puissance
          </p>
          <p>beaucoup de cheval</p>

          <p class="stat-title">
            Cylindrée
          </p>
          <p>NB cm³</p>
        </div>

        <div class="section-3 section content-left">
          <h1> 
            Prêt
          </h1>
            <p>à prendre la route ?</p>
            <p><small><i>( et un platane )</i></small></p>
          
        </div>

        <div class="section-4 section content-left">
          <h1> 
            Hey !
          </h1>
            <p>Regarde moi</p>
            <p>Sous tous les angles</p>
            <p>avec ta souris</p>
          
        </div>
      </div>
    </section>
  </template>
  <script>
</script>

<style lang="scss">
//Loader
body {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll; 
}

body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
#loader{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: #FFFFFF;
  font-weight: 300;

  & .loader-text{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
}


#mountId{
  position: relative;
  z-index: -1;
  filter: brightness(0.05);
}
.wrapper{
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
}

#bg-video{
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  top: 0;
  z-index: -1;
}
.container{
  
  height: calc(15 * 100vh);
}


.texts-container{
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  touch-action: none;

  
  .section{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    &.title,
    &.section-1,
    &.section-2,
    &.section-3,
    &.section-4{
      transform: translateY(200px);
      opacity: 0;
    }
  }

  & .title,
  & .section{
    position: absolute;
    width: 100%;
    height: 100%;

    &.section--half{
      & .stat-title{
        font-size: 3rem;
        margin-top: 100px;

        &:first-of-type{
          margin-top: 0;
        }
      }

      & p{
        font-size: 1rem;
      }
    }

    & h1,
    & h2{
      font-size: 5rem;
      font-weight: 900;
      text-align: left;
      color: #FFFFFF;
      text-transform: uppercase;
      margin: 0;
      
    }

      & p{
        font-size: 1.5rem;
        margin: 0;
        font-weight: 400;
        color: #FFFFFF;
        text-transform: uppercase;
        transform: translateX(5px);
      }
    
  }

  .content-left{
      left: 15%;
      align-items: start;

      &.section--half{
        left: 5%;
      }

  }

  .content-right{
      align-items: end;
      right: 15%;

      &.section--half{
        right: 5%;
      }

  }
}
</style>
