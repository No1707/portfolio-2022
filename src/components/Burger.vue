<template>

    <div class="burgerContainer">
        <div class="burgerButton" @click="burgerToggle=!burgerToggle" :class="{open: burgerToggle}">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div :class="{displayMenu: burgerToggle}" class="burgerMenu">
            <div>
                <a v-for="button in navButtons" :key="button.id" @click="$emit('navigateMenu', button.id), this.burgerToggle=false">{{ button.name }}</a>
                <a :href="`${publicPath}CV_Nolan_boisel.pdf`" target="blank">CV</a>
            </div>
            <div>
                <Reseaux />
            </div>
        </div>
    </div>
    

</template>

<script>
import Reseaux from './Reseaux.vue'
export default{
    name:'burger-menu',
    components: {
        Reseaux
    },
    props: {
        navButtons: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            burgerToggle: false,
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style scoped lang="scss">
$black: #1a1a1a;
$lightBlack: #272727;
$darkBlue: #1a2f47;
$blue: #00adb5;
$white: #EEEEEE;
$darkWhite: #e6e4e4;

    .burgerButton {
        z-index: 1;
        right: 50px;
        top: 50px;
        width: 42px;
        height: 30px;
        position: absolute;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .35s ease-in-out;
        -moz-transition: .35s ease-in-out;
        -o-transition: .35s ease-in-out;
        transition: .35s ease-in-out;
        cursor: pointer;

        span{
            display: block;
            position: absolute;
            height: 5px;
            width: 100%;
            background: $blue;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            -webkit-transform-origin: left center;
            -moz-transform-origin: left center;
            -o-transform-origin: left center;
            transform-origin: left center;
        }
        span:nth-child(1){
            top: 0px;
        }
        span:nth-child(2){
            top: 15px;
        }
        span:nth-child(3){
            top: 30px;
        }
    }

    .burgerButton.open{
        
        span:nth-child(1){
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            top: 0px;
            left: 8px;
        }
        span:nth-child(2){
            width: 0%;
            opacity: 0;
        }
        span:nth-child(3){
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            top: 30px;
            left: 8px;
        }
    }

    .burgerMenu{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: $darkBlue;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 4em 6em;
        display: flex;
        flex-direction: column;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;

        &>div:nth-child(1){
            display: flex;
            flex-direction: column;
            font-size: 1.5em;

            a{
                margin: 2vh 0;
            }
        }
    }

    .displayMenu{
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }
    @media screen and (max-width: 690px){
        .burgerButton{
            top: 30px;
            right: 30px;
            width: 36px;
            height: 30px;

            span:nth-child(2){
                top: 12px;
            }
            span:nth-child(3){
                top: 24px;
            }

        }
        .burgerButton.open{

            span:nth-child(3){
                top: 26px;
            }
        }
        .burgerMenu{
            &>div:nth-child(1){
                a{
                    font-size: .8em;
                }
            }
        }
    }
</style>