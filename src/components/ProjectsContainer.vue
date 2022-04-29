<template>
    <div class="projectsContainer">
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row1" :key="i">
                <div>

                </div>
                <div>
                    <div v-for="tech in project" :key="tech.tech">
                        <img 
                            :src="require(`../assets/${tech.tech}.svg`)" 
                            :alt="tech.tech" 
                            @mouseover="tech.active=true" 
                            @mouseleave="tech.active=false" 
                        >
                        <div :class="{showLabel: tech.active}">{{ tech.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="revealMultiple">
            <div class="revealMultipleItem real" v-for="(project, i) in row2" :key="i">
                <div>
                        
                </div>
                <div>
                    <div v-for="tech in project" :key="tech.tech">
                        <img 
                            :src="require(`../assets/${tech.tech}.svg`)" 
                            :alt="tech.tech" 
                            @mouseover="tech.active=true" 
                            @mouseleave="tech.active=false" 
                        >
                        <div :class="{showLabel: tech.active}">{{ tech.name }}</div>
                    </div>
                </div>
            </div>
            <div class="revealMultipleIteam"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'projects-container',
    data(){
        return {
            row1: [
                [ 
                    {tech: "html", active: false, name: "HTML"},
                    {tech: "css", active: false, name: "CSS"} 
                ], 
                [
                    {tech: "html", active: false, name: "HTML"},
                    {tech: "css", active: false, name: "CSS"},
                    {tech: "js", active: false, name: "JavaScript"},
                    {tech: "angular", active: false, name: "Angular JS"} 
                ],
                [
                    {tech: "html", active: false, name: "HTML"},
                    {tech: "css", active: false, name: "CSS"},
                    {tech: "js", active: false, name: "JavaScript"},
                    {tech: "jquery", active: false, name: "jQuery"},
                    {tech: "firebase", active: false, name: "Firebase"},
                ]
            ],
            row2: [
                [
                    {tech: "css", active: false, name: "CSS"},
                    {tech: "wordpress", active: false, name: "Wordpress"},
                    {tech: "js", active: false, name: "JavaScript"},
                    {tech: "jquery", active: false, name: "jQuery"},
                ],
                [
                    {tech: "vuejs", active: false, name: "Vue.js"},
                    {tech: "tailwind", active: false, name: "TailwindCSS"},
                    {tech: "js", active: false, name: "JavaScript"},
                    {tech: "coingecko", active: false, name: "CoinGecko"},

                ]
            ]
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
      margin: 4em auto;

        &>div{
            display: flex;
            justify-content: space-evenly;

            &>div{
                width: 28%;
                min-width: 250px;
                min-height: 200px;
                margin: 4% 2%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                overflow: hidden;
                position: relative;

                &>div:nth-child(1){
                    position: absolute;
                    width: 100%;
                    height: 50px;
                    background-color: $darkGrey;
                    padding: 5px 15px;
                    top: -50px;
                    left: 0;
                    transition: .4s;
                }

                &>div:nth-child(2){
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
                &>div:nth-child(1){
                    top: 0;
                }
                &>div:nth-child(2){
                    bottom: 0;
                }
            }
        }
        &>div:nth-child(1){
            
            &>div:nth-of-type(1){
                background-image: url('../assets/GlobalMag.png');
            }
            &>div:nth-of-type(2){
                background-image: url('../assets/MacrosNut.png');
            }
            &>div:nth-of-type(3){
                background-image: url('../assets/Strokes.png');
            }
        }
        &>div:nth-child(2){
            &>div:nth-of-type(1){
                background-image: url('../assets/Axibio.png');
            }
            &>div:nth-of-type(2){
                background-image: url('../assets/CryptoDash.png');
            }
        }
    }
</style>