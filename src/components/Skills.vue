<template>
    <div class="skillsContainer">

        <div>
            <h3>Maîtrisées :</h3>
            <div>
                <div v-for="master in mastered" :key="master.name"><img :src="require(`../assets/${master.link}`)" :alt="master.name">{{master.name}}</div>
            </div>
        </div>

        <div>
            <h3>Déjà travaillée :</h3>
            <div>
                <div v-for="worked in workedOn" :key="worked.name"><img :src="require(`../assets/${worked.link}`)" :alt="worked.name">{{worked.name}}</div>
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
                {link: "html.svg", name: "HTML"},
                {link: "css.svg", name: "CSS"},
                {link: "js.svg", name: "JavaScript"},
                {link: "vuejs.svg", name: "Vue.js"},
                {link: "jquery.svg", name: "jQuery"},
                {link: "firebase.svg", name: "Firebase"}
            ],
            workedOn: [
                {link: "react.svg", name: "React"},
                {link: "angular.svg", name: "Angular"},
                {link: "wordpress.svg", name: "Wordpress"},
                {link: "shopify.svg", name: "Shopify"},
                {link: "bootstrap.svg", name: "Bootstrap"},
                {link: "tailwind.svg", name: "TailwindCSS"},
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
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

        &>div{
            background-color: $darkBlue;
            padding: 30px 50px;
            max-width: 400px;
            width: 100%;
            color: $white;
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;

            &>div{
                display: grid;
                grid-template-columns: 50% 50%;
                text-align: start;

                &>div{
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin: 10px auto;

                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 15px;
                    }
                }
            }
        }
    }
</style>