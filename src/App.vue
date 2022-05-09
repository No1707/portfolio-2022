<template>
    
    <header ref="home">

      <Navbar :offsetY="offsetY" @navigateMenu="navigateMenu"/>

      <div class="headerMain">

        <!-- Left -->
        <div class="headerLeft">
          <h1 class="revealMultiple">
            <span class="revealMultipleItem">Bonjour, <span>à votre service...</span></span>
            <span class="revealMultipleItem">Développeur</span>
            <span class="revealMultipleItem"><span v-for="letter in titleh1" :key="letter.letter" :class="{clickedLetter: letter.active}" @click="letter.active=!letter.active">{{ letter.letter }}</span></span>
          </h1>

          <scroll-parallax class="reveal" direction="x" :right="true" :speed="0.15" :responsive="false">
            <p>Création de sites web <span>modernes</span> et <span>responsives</span></p>
          </scroll-parallax>

          <button class="styledButton" @click="navigateMenu('contact')">
            <span>Me contacter</span>
          </button>

        </div>
        
        <!-- Right -->
        <div class="headerRight">
          <div class="reveal">
            <scroll-parallax class="headerPhoto parallaxTransition" :speed=".1">
              <img src="./assets/photo.jpg" alt="">
            </scroll-parallax>
            <scroll-parallax class="parallaxTransition" :speed=".15" :down="true"></scroll-parallax>
          </div>
        </div>

      </div>

    </header>

    <!-- Section A propos -->
    <section class="section1" ref="about">

      <div class="sectionTitle">
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x">
          À pro
        </scroll-parallax>
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x">
          pos
        </scroll-parallax>
      </div>

      <div class="sectionContainer">
        
        <h2>À propos</h2>
        

        <div>
          <scroll-parallax direction="x" :speed=".07" class="parallaxTransition" :responsive="false">
            <p>
              Le <span>développement front-end</span> est une discipline que j'adore. <br>
              J'aime faire naître des sites et applications de zéro, en les habillant et
              en y implentant des <span>intégrations modernes</span> pour ensuite les rendre 
              disponibles à tous. <br>
              Animations, intéractions, effets UI sont les éléments que je préfère intégrés. <br><br><br>
    
              Curieux, rigoureux, aime les défis, très attentif aux détails, vous pouvez compter
              sur moi pour faire mon <span>maximum</span> dans la réalisation de votre projet. <br><br><br>
              
              Web 3, Cryptomonnaies, Fan de mountain biking ( VTT de descente ), Sportif.
    
              Je saurais être à la <span>hauteur</span> de vos attentes.
            </p>
          </scroll-parallax>
          <scroll-parallax direction="x" :left="true" :speed=".07" class="parallaxTransition"></scroll-parallax>
        </div>

      </div>

    </section>

    <!-- Section Projets -->
    <section class="section2" ref="projects">

      <div class="sectionTitle">
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x" :left="true">
          Pro
        </scroll-parallax>
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x" :left="true">
          jets
        </scroll-parallax>
      </div>

      <div class="sectionContainer">

        <h2>Projets</h2>

        <ProjectsContainer />

      </div>

    </section>

    <!-- Section Compétences -->
    <section class="section3" ref="skills">

      <div class="sectionTitle">
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x">
          Comp
        </scroll-parallax>
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x">
          éten
        </scroll-parallax>
        <scroll-parallax class="parallaxTransition" :speed="0.25" direction="x">
          ces
        </scroll-parallax>
      </div>

      <div class="sectionContainer">

        <h2>Compétences</h2>
        
        <Skills />

      </div>

    </section>

    <!-- Section Contact -->
    <footer class="section4" ref="contact">

      <scroll-parallax class="parallaxTransition sectionTitle" :speed="0.5" direction="y" :up="true">
        Contact
      </scroll-parallax>

      <div class="sectionContainer">

        <h2>Contact</h2>

        <ContactForm />

        <div class="copyright">© 2022 Nolan BOISEL</div>
      </div>

    </footer>

    <Reseaux id="desktopContact" />

</template>

<script>
import revealItem from './js/reveal.js'
import revealMultipleItems from './js/revealMultiple.js'
import Reseaux from './components/Reseaux.vue'
import ContactForm from './components/ContactForm.vue'
import ProjectsContainer from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Reseaux,
    ContactForm,
    ProjectsContainer,
    Skills,
    Navbar
},
  data() {
    return {
      limit: 0,
      offsetY: 0,
      scrollY: 0,
      titleh1: [
        {letter: 'w', active: false},
        {letter: 'e', active: false},
        {letter: 'b', active: false},
        {letter: ' ', active: false},
        {letter: 'f', active: false},
        {letter: 'r', active: false},
        {letter: 'o', active: false},
        {letter: 'n', active: false},
        {letter: 't', active: false},
        {letter: '-', active: false},
        {letter: 'e', active: false},
        {letter: 'n', active: false},
        {letter: 'd', active: false},
        {letter: '.', active: false}
      ]
    }
  },
  mounted() {
    revealItem()  
    revealMultipleItems()
    window.addEventListener('scroll', this.onScroll)
    this.limit = Math.max(
        document.body.scrollHeight-document.documentElement.clientHeight, 
        document.body.offsetHeight-document.documentElement.clientHeight, 
        document.documentElement.clientHeight-document.documentElement.clientHeight, 
        document.documentElement.scrollHeight-document.documentElement.clientHeight, 
        document.documentElement.offsetHeight-document.documentElement.clientHeight)
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY
      this.offsetY = (window.scrollY * 100)/this.limit
    },
    navigateMenu(id){
      const el = this.$refs[`${id}`]
      window.scroll({ top: el.offsetTop })
    }
  }
}
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/styles.scss";
@import "./styles/button.scss";
</style>