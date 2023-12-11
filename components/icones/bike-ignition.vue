<script setup>
onMounted(() => {
    console.log('mouned');
    document.querySelector('.ignition').addEventListener('click',function (e) {
        console.log(e);
        e.target.closest('.ignition').classList.toggle('ignite')
    });
})
</script>

<template>
    <div class="ignition-container">
        <div class="ignition">
            <div class="inner-ring">
                <div class="key-hole">
                </div>
            </div>
        </div>
        Démarrer
    </div>
  </template>
<style lang="scss" scoped>
.ignition-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    & .ignition{
        position: relative;
        width: 100px;
        height: 100px;
        border : 1px solid #FFFFFF;
        border-radius : 50%;
        &:before{
                content: "";
                position: absolute;
                top:4%;
                left:50%;
                transform: translate(-50%, 0 );
                width: 8%;
                height: 8%;
                border : 1px solid #FFFFFF;
                border-radius : 50%;
            }
        &:after{
                content: "";
                position: absolute;
                top:50%;
                left:4%;
                transform: translate( 0 , -50% );
                width: 8%;
                height: 8%;
                border : 1px solid #FFFFFF;
                border-radius : 50%;
            }
            
        & .inner-ring{
            position: relative;
            top:50%;
            left:50%;
            transform: translate(-50%,-50%);
            width:60%;
            height:60%;
            border : 1px solid #FFFFFF;
            border-radius : 50%;

        
            & .key-hole{
                position: relative;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                width:15%;
                height:60%;
                border : 1px solid #FFFFFF;
                Transition: all 0.2s ease-in-out;
            }
        }

        &:hover{
            cursor: pointer;
        
            & .inner-ring{
                border : 1px solid #FFFFFF;
            
                & .key-hole{
                    transform: translate(-50%, -50%) rotate(-7deg);
                }
            }
        }

        &.ignite{
            & .inner-ring .key-hole{
                transform: translate(-50%, -50%) rotate(-90deg);
            }
        }
    }
}

</style>