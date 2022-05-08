<template>

      <nav>
        <div :class="{'offsetNav': offsetY > 0 }">
          <div>
            <a class="desktopButton" v-for="button in navButtons" :key="button.id" @click="$emit('navigateMenu', button.id)">{{ button.name }}</a>
            <a target="blank" class="desktopButton" :href="`${publicPath}CV_Nolan_boisel.pdf`">CV</a>
          </div>
          <div class="progressBar" :style="{width: offsetY+'%'}"></div>
        </div>
        <Burger @navigateMenu="(id) => $emit('navigateMenu', id)" :navButtons="navButtons"/>
      </nav>

</template>

<script>
import Burger from './Burger.vue'
export default {
    name: 'navbar-menu',
    components: {
        Burger
    },
    props: {
        offsetY: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            navButtons: [
                {name: "Accueil", id: "home"},
                {name: "À propos", id: "about"},
                {name: "Projets", id: "projects"},
                {name: "Compétences", id: "skills"},
                {name: "Contact", id: "contact"}
            ],
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

    nav{
    position: fixed;
    z-index: 10;
    color: $white;
    width: 100%;
    top: -1px;

    &>div:nth-child(1){
      height: 100px;
      transition: .2s;
      display: flex;
      justify-content: center;
      align-items: center;

      a.desktopButton{
        margin: 0 2.5em;
        transition: .4s;
      }
      a.desktopButton:hover{
        color: $blue;
        cursor: pointer;
      }

      .progressBar{
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: $blue;
        height: 3px;
      }
    }
    .burgerContainer{
      display: none;
    }
  }
  .offsetNav{
    background-color: $darkBlue;
    height: 60px !important;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.75);
  }

  @media screen and (max-width: 1200px){
        nav{

            &>div:nth-child(1){

                a.desktopButton{
                margin: 0 1.5em;
                }
            }
        }
  }

  @media screen and (max-width: 1000px){
    nav{

      &>div:nth-child(1){
        display: none;
      }
      .burgerContainer{
        display: block;
      }
    }
  }
</style>