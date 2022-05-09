<template>
    <div class="skillsContainer">

        <div>
            <h3>Maîtrisées :</h3>
            <div class="revealMultiple">
                <div class="revealMultipleItem" v-for="master in mastered" :key="master.name"><img :src="require(`../assets/${master.link}`)" :alt="master.name">{{master.name}}</div>
            </div>
        </div>

        <div>
            <h3>Déjà travaillées :</h3>
            <div class="revealMultiple">
                <div class="revealMultipleItem" v-for="worked in workedOn" :key="worked.name"><img :src="require(`../assets/${worked.link}`)" :alt="worked.name">{{worked.name}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'skills-container',
    data() {
        return {
            mastered: [
                {link: "htmlBlue.svg", name: "HTML"},
                {link: "cssBlue.svg", name: "CSS"},
                {link: "jsBlue.svg", name: "JavaScript"},
                {link: "vuejsBlue.svg", name: "Vue.js"},
                {link: "jqueryBlue.svg", name: "jQuery"},
                {link: "firebaseBlue.svg", name: "Firebase"}
            ],
            workedOn: [
                {link: "reactBlue.svg", name: "React"},
                {link: "angularBlue.svg", name: "Angular"},
                {link: "wordpressBlue.svg", name: "Wordpress"},
                {link: "shopifyBlue.svg", name: "Shopify"},
                {link: "bootstrapBlue.svg", name: "Bootstrap"},
                {link: "tailwindBlue.svg", name: "TailwindCSS"},
            ]
        }
    }
}
</script>

<style scoped lang="scss">
$black: #1a1a1a;
$darkBlue: #1a2f47;
$blue: #00adb5;
$white: #EEEEEE;

    .skillsContainer{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;

        &>div{
            width: 100%;
            color: $white;
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            margin: 70px auto;

            h3{
                color: $black;
                font-weight: bold;
                font-size: 2em;
                margin-bottom: 50px;
                text-align: center;
            }

            &>div{
                display: flex;
                background-color: #1a2f472f;
                color: $black;
                overflow: hidden;

                &>div{
                    padding: 25px;
                    display: flex;
                    align-items: center;
                    width: 100%;

                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 15px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px){
        .skillsContainer{

            &>div{
                margin: 50px auto;

                &>div{
                    background-color: transparent;
                    flex-wrap: wrap;
                    overflow: visible;
                    justify-content: center;

                    &>div{
                        width: 30%;
                        justify-content: center;
                        padding: 15px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 1000px){
        .skillsContainer{
            
            &>div{
                    margin: 30px auto;

                h3{
                    margin-bottom: 30px;
                }

                &>div{
                    
                    &>div{

                        img{
                            width: 35px;
                            height: 35px;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 690px){
        .skillsContainer{
            
            &>div{
                    margin: 30px auto;

                h3{
                    margin-bottom: 30px;
                }

                &>div{
                    margin-left: 5vw;
                    justify-content: space-around;
                    
                    &>div{
                        width: 40%;
                        justify-content: flex-start;
                        padding: 10px;

                        img{
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
            }
        }
    }
</style>