<template>
    <div class="projectsContainer">
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row1" :key="i" :style="{backgroundImage: 'url(' + project.background + ')'}" @click="openProject(project.url, $event, i)">
                <div>
                    <div v-for="item in project.icons" :key="item.name">
                        <img 
                            :src="require(`../assets/${item.link}`)" 
                            :alt="item.name" 
                            @mouseover="item.active=true"
                            @mouseleave="item.active=false"
                            ref="icon"
                        >
                        <div :class="{showLabel: item.active}">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row2" :key="i" :style="{backgroundImage: 'url(' + project.background + ')'}" @click="openProject(project.url, $event, i)">
                <div>
                    <div v-for="item in project.icons" :key="item.name">
                        <img 
                            :src="require(`../assets/${item.link}`)" 
                            :alt="item.name" 
                            @mouseover="item.active=true"
                            @mouseleave="item.active=false"
                            ref="icon"
                        >
                        <div :class="{showLabel: item.active}">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects-container',
    data(){
        return {
            row1: [
                { 
                    icons: [ 
                        {link: "html.svg", active: false, name: "HTML"}, 
                        {link: "css.svg", active: false, name: "CSS"} 
                    ],
                    url: 'https://github.com/No1707/News-website-Front-end',
                    background: require('../assets/GlobalMag.png')
                }, 
                {
                    icons: [
                        {link: "html.svg", active: false, name: "HTML"},
                        {link: "css.svg", active: false, name: "CSS"},
                        {link: "js.svg", active: false, name: "JavaScript"},
                        {link: "angular.svg", active: false, name: "Angular JS"} 
                    ],
                    url: 'https://github.com/No1707/MacronutrientsNeeds',
                    background: require('../assets/MacrosNut.png')
                },
                {
                    icons: [
                        {link: "html.svg", active: false, name: "HTML"},
                        {link: "css.svg", active: false, name: "CSS"},
                        {link: "js.svg", active: false, name: "JavaScript"},
                        {link: "jquery.svg", active: false, name: "jQuery"},
                        {link: "firebase.svg", active: false, name: "Firebase"}
                    ],
                    url: 'https://labthestrokes.web.app/',
                    background: require('../assets/Strokes.png')
                }
            ],
            row2: [
                {
                    icons: [
                        {link: "css.svg", active: false, name: "CSS"},
                        {link: "wordpress.svg", active: false, name: "Wordpress"},
                        {link: "js.svg", active: false, name: "JavaScript"},
                        {link: "jquery.svg", active: false, name: "jQuery"}
                    ],
                    url: 'https://www.axibio.fr/',
                    background: require('../assets/Axibio.png')
                },
                {
                    icons: [
                        {link: "vuejs.svg", active: false, name: "Vue.js"},
                        {link: "tailwind.svg", active: false, name: "TailwindCSS"},
                        {link: "js.svg", active: false, name: "JavaScript"},
                        {link: "coingecko.svg", active: false, name: "CoinGecko API"}
                    ],
                    url: 'https://nolan-crypto-dashboard.web.app/',
                    background: require('../assets/CryptoDash.png')
                },
                {
                    icons: [
                        {link: "shopify.svg", active: false, name: "Shopify"},
                        {link: "liquid.svg", active: false, name: "Liquid"},
                        {link: "css.svg", active: false, name: "CSS"}
                    ],
                    url: 'https://kawalearn.shop/',
                    background: require('../assets/KawalearnShop.png')
                }
            ]
        }
    },
    methods: {
        openProject(link, event) {
            this.$refs.icon.indexOf(event.target) == -1 ? window.open(link) : null
        }
    }
}
</script>

<style scoped lang="scss">
$black: #1a1a1a;
$darkGrey: #1a2f47;
$blue: #00adb5;
$white: #EEEEEE;

    .projectsContainer{
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 0 50px;

        &>div{
            display: flex;
            justify-content: space-evenly;

            &>div{
                width: 28%;
                min-height: 200px;
                margin: 2%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                overflow: hidden;
                position: relative;

                &>div{
                    position: absolute;
                    width: 100%;
                    height: 50px;
                    background-color: $darkGrey;
                    padding: 4px 15px;
                    bottom: -50px;
                    left: 0;
                    transition: .4s;
                    display: flex;
                    align-items: center;
                    
                    &>div{
                        position: relative;
                        display: flex;
                        justify-content: center;

                        img{
                            width: 32px;
                            height: 32px;
                            margin: 0 5px;
                            z-index: 1;
                        }

                        div{
                            visibility: hidden;
                            position: absolute;
                        }
                        .showLabel{
                            visibility: visible;
                            width: max-content;
                            color: $white;
                            background-color: $darkGrey;
                            padding: 3px 6px;
                            top: -35px;
                            border-radius: 3px;
                        }
                    }
                }
            }
            &>div::before{
                content: '';
                background-color: rgba(0,0,0,0);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transition: .4s;
            }

            &>div.real:hover{
                cursor: pointer;

                &:before{
                    background-color: rgba(0,0,0,.5);
                }
                &>div{
                    bottom: 0;
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        .projectsContainer{
            
            &>div{

                &>div{
                    min-height: 170px;
                }
            }
        }
    }
    @media screen and (max-width: 1000px){
        .projectsContainer{
            margin: 5% auto;

            .revealMultiple{
                flex-direction: column;
                align-items: center;

                .revealMultipleItem{
                    width: 400px;
                    margin: 3em auto;
                    overflow: visible;

                    &>div{
                        bottom: -35px;
                        height: 35px;
                        padding: 3px 12px;
                        
                        &>div{

                            img{
                                width: 22px;
                                height: 22px;
                            }

                            .showLabel{
                                top: -27px;
                            }
                        }
                    }
                }
                &>div.real:hover{

                    &:before{
                        background: transparent;
                    }
                    &>div{
                        bottom: -35px;
                    }
                }
            }
        }
    }
</style>