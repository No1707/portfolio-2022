<template>
    
    <header ref="home">

      <!-- Navbar -->
      <nav :class="{'offsetNav': offsetY > 0 }">
        <div>
          <div>
            <a v-for="button in navButtons" :key="button.id" @click="navigateMenu(button.id)">{{ button.name }}</a>
            <a>CV</a>
          </div>
          <div class="progressBar" :style="{width: offsetY+'%'}"></div>
        </div>
      </nav>

      <div class="headerMain">

        <!-- Left -->
        <div class="headerLeft">
          <h1 class="revealMultiple">
            <span class="revealMultipleItem"><span>Bonjour,</span> à votre service...</span>
            <span class="revealMultipleItem">Développeur</span>
            <span class="revealMultipleItem"><span v-for="letter in titleh1" :key="letter" @click="clickedLetter($event)">{{ letter }}</span></span>
          </h1>
          <scroll-parallax class="reveal" direction="x" :right="true" :speed="0.15">
            <p>Création de sites web <span>modernes</span> et <span>responsives</span></p>
          </scroll-parallax>
          <button class="styledButton" @click="navigateMenu('contact')">
            <span>Me contacter</span>
          </button>
        </div>
        
        <!-- Right -->
        <div class="headerRight">
          <div class="headerImgWrapper reveal">
            <scroll-parallax class="headerImgParallax" :speed="0.7" :style="{backgroundPosition: 'top 0 right ' + -scrollY*0.7 + 'px'}"  direction="x" :left="true" />
            <div class="headerImg"></div>
          </div>
        </div>

      </div>

    </header>

    <!-- Section A propos -->
    <section class="section1" ref="about">

      <div class="sectionContainer">

        <scroll-parallax class="parallaxTransition" :speed="0.3" direction="x">
          <h2>À propos</h2>
        </scroll-parallax>

        <div>
          <scroll-parallax direction="x" :speed=".07" class="parallaxTransition">
            <p>
              Le développement front-end est une discipline que j'adore. <br>
              J'aime faire naître des sites et applications de zéro, en les habillant et
              en y implentant des intégrations modernes pour ensuite les rendre 
              disponible à tous.
              Animations, intéractions, effets UI sont ce que je préfère intégrés. <br><br><br>
    
              Curieux, rigoureux, aime les défis, très attentif aux détails, vous pouvez compter
              sur moi pour faire mon maximum dans la réalisation de votre projet. <br><br><br>
              
              Web 3, Cryptomonnaies, Échecs, Fan de mountain biking ( VTT de descente ), Sportif.
    
              Je saurais être à la hauteur de vos attentes.
            </p>
          </scroll-parallax>
          <scroll-parallax direction="x" :left="true" :speed=".07" class="parallaxTransition"></scroll-parallax>
        </div>

      </div>

    </section>

    <!-- Section Projets -->
    <section class="section2" ref="projects">

      <div class="sectionContainer">

        <scroll-parallax class="parallaxTransition" :speed="0.3" direction="x" :left="true">
          <h2>Projets</h2>
        </scroll-parallax>

        <ProjectsContainer />

      </div>

    </section>

    <!-- Section Compétences -->
    <section class="section3" ref="skills">

      <div class="sectionContainer">

        <scroll-parallax class="parallaxTransition" :speed="0.3" direction="x">
          <h2>Compétences</h2>
        </scroll-parallax>

        <Skills />

      </div>

    </section>

    <!-- Section Contact -->
    <footer class="section4" ref="contact">

      <div class="sectionContainer">

        <scroll-parallax class="parallaxTransition" :speed="0.2" direction="y" :up="true">
          <h2>Contact</h2>
        </scroll-parallax>

        <ContactForm />

        <div class="copyright">© 2022 Nolan BOISEL</div>
      </div>

    </footer>

    <Reseaux />

</template>

<script>
import revealItem from './js/reveal.js'
import revealMultipleItems from './js/revealMultiple.js'
import Reseaux from './components/Reseaux.vue'
import ContactForm from './components/ContactForm.vue'
import ProjectsContainer from './components/Projects.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    Reseaux,
    ContactForm,
    ProjectsContainer,
    Skills
},
  data() {
    return {
      limit: 0,
      offsetY: 0,
      scrollY: 0,
      navButtons: 
        [{name: "Accueil", id: "home"}, 
        {name: "À propos", id: "about"},
        {name: "Projets", id: "projects"},
        {name: "Compétences", id: "skills"},
        {name: "Contact", id: "contact"}],
      titleh1: ['w','e','b',' ','f','r','o','n','t','-','e','n','d','.']
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
    },
    clickedLetter(e){
      const ifClass = e.target.classList
      ifClass.contains('clickedLetter') ? ifClass.remove('clickedLetter') : ifClass.add('clickedLetter')
    }
  }
}
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/styles.scss";
@import "./styles/button.scss";
</style>