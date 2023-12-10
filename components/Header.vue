<template>
    <header>
        <nav>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li class="bwa"><nuxt-link to="/bwa">BWA</nuxt-link></li>
                <li><nuxt-link to="/archeon">Moto</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss">
    header {
        position: fixed;
        width: 100%;
        z-index: 1000;
        top: 0;
        
       & nav{
        max-width: 960px;
        margin: 30px auto;
        font-family: 'Maven Pro', sans-serif;
        font-size: 18px;
        & ul{
            display: flex;
            justify-content: flex-end;
            gap: 40px;
            list-style: none;
            margin: 0 auto;
            padding: 0;
            width: 100%;
            
    
            & li{
                & a{
                   
                    color: #FFFFFF;
                    text-decoration: none;
    
                    &:hover{
                        text-decoration: underline;
                    }
                }

                &.bwa{
                    & a{
                        font-family: 'EmBauhaus', 'Maven Pro', sans-serif;
                        text-transform: lowercase;
                        letter-spacing: 4px;
                        font-weight: 400;
                        font-size: 20px;
                        top: -3px;
                        }
                    }
                }
            }
       }
    }
</style>