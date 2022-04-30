<template>
    <div class="projectsContainer">
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row1" :key="i" :style="{backgroundImage: 'url(' + project.background + ')'}" @click="openProject(project.url)">
                <div>
                    <div v-for="item in project.icons" :key="item.tech">
                        <img 
                            :src="require(`../assets/${item.tech}.svg`)" 
                            :alt="item.name" 
                            @mouseover="item.active=true" 
                            @mouseleave="item.active=false" 
                        >
                        <div :class="{showLabel: item.active}">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row2" :key="i" :style="{backgroundImage: 'url(' + project.background + ')'}" @click="openProject(project.url)">
                <div>
                    <div v-for="item in project.icons" :key="item.tech">
                        <img 
                            :src="require(`../assets/${item.tech}.svg`)" 
                            :alt="item.name" 
                            @mouseover="item.active=true" 
                            @mouseleave="item.active=false" 
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
                        {tech: "html", active: false, name: "HTML"}, 
                        {tech: "css", active: false, name: "CSS"} 
                    ],
                    url: 'https://github.com/No1707/News-website-Front-end',
                    background: require('../assets/GlobalMag.png')
                }, 
                {
                    icons: [
                        {tech: "html", active: false, name: "HTML"},
                        {tech: "css", active: false, name: "CSS"},
                        {tech: "js", active: false, name: "JavaScript"},
                        {tech: "angular", active: false, name: "Angular JS"} 
                    ],
                    url: 'https://github.com/No1707/MacronutrientsNeeds',
                    background: require('../assets/MacrosNut.png')
                },
                {
                    icons: [
                        {tech: "html", active: false, name: "HTML"},
                        {tech: "css", active: false, name: "CSS"},
                        {tech: "js", active: false, name: "JavaScript"},
                        {tech: "jquery", active: false, name: "jQuery"},
                        {tech: "firebase", active: false, name: "Firebase"}
                    ],
                    url: 'https://labthestrokes.web.app/',
                    background: require('../assets/Strokes.png')
                }
            ],
            row2: [
                {
                    icons: [
                        {tech: "css", active: false, name: "CSS"},
                        {tech: "wordpress", active: false, name: "Wordpress"},
                        {tech: "js", active: false, name: "JavaScript"},
                        {tech: "jquery", active: false, name: "jQuery"}
                    ],
                    url: 'https://www.axibio.fr/',
                    background: require('../assets/Axibio.png')
                },
                {
                    icons: [
                        {tech: "vuejs", active: false, name: "Vue.js"},
                        {tech: "tailwind", active: false, name: "TailwindCSS"},
                        {tech: "js", active: false, name: "JavaScript"},
                        {tech: "coingecko", active: false, name: "CoinGecko"}
                    ],
                    url: 'https://github.com/No1707/Crypto-Dashboard',
                    background: require('../assets/CryptoDash.png')
                },
                {
                    icons: [
                        {tech: "shopify", active: false, name: "Shopify"},
                        {tech: "liquid", active: false, name: "Liquid"},
                        {tech: "css", active: false, name: "CSS"}
                    ],
                    url: 'https://kawalearn.shop/',
                    background: require('../assets/KawalearnShop.png')
                }
            ]
        }
    },
    methods: {
        openProject(link) {
            window.open(link)
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
      padding: 0 2em;
      display: flex;
      flex-direction: column;
      margin: 5em auto;

        &>div{
            display: flex;
            justify-content: space-evenly;

            &>div{
                width: 28%;
                min-width: 250px;
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
</style>