<template>
  
    <header>

      <!-- Navbar -->
      <nav :class="{'offsetNav': offsetY > 0 }">
        <div>
          <div>
            <button>Accueil</button>
            <button>À propos</button>
            <button>Projets</button>
            <button>Compétences</button>
            <button>Contact</button>
            <button>CV</button>
          </div>
          <div class="progressBar" :style="{width: offsetY+'%'}"></div>
        </div>
      </nav>

      <div class="headerMain">

        <!-- Left -->
        <div class="headerLeft">
          <h1>
            <scroll-parallax direction="x" :speed="0.1">Bonjour, jeune développeur front-end</scroll-parallax>
            <scroll-parallax direction="x" :left="true" :speed="0.1">à votre service !</scroll-parallax>
          </h1>
        </div>
        
        <!-- Right -->
        <div class="headerRight">
          <div class="headerImgWrapper">
            <div class="headerImg"></div>
            <scroll-parallax class="headerImgParallax" :speed="0.7" :style="{backgroundPosition: 'top 0 right ' + -scrollY*0.7 + 'px'}"  direction="x" :left="true" />
          </div>
        </div>

      </div>

    </header>

    <!-- Section A propos -->
    <section class="section1">

      <scroll-parallax :speed="0.3" direction="x">
        <h2>À propos</h2>
      </scroll-parallax>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro, voluptatem expedita quisquam, facere sunt fugit maxime sed fugiat ea asperiores quidem repudiandae doloribus laborum! Beatae perferendis corrupti tempora aut.
      Assumenda ullam laboriosam quasi corrupti ab dolore suscipit necessitatibus facilis, culpa ipsum sit ea dolorum aut ipsa similique magnam nulla cumque iusto ipsam. Culpa repudiandae modi iste ipsum perspiciatis facilis.
      Quos quo, dolorum obcaecati dolores iste suscipit ex molestias labore iure eligendi similique nemo temporibus soluta corrupti delectus libero, quaerat, alias dolorem facilis sapiente tempore. Cumque possimus voluptates iste fugit.
      Incidunt, nam. Dolore nostrum veniam cumque nobis quos corrupti delectus modi possimus ex quaerat tempora, quia fugit esse deserunt assumenda repellat expedita rerum maxime tenetur similique. Dolorum nam debitis numquam?
      Provident eum dolorem, molestiae quasi, porro dignissimos nemo sit non placeat nulla labore rem? Nesciunt reprehenderit minus maxime perferendis laudantium alias, autem reiciendis dolore, porro nostrum placeat harum accusantium itaque!</p>

    </section>

    <!-- Section Projets -->
    <section class="section2">

      <scroll-parallax :speed="0.3" direction="x" :left="true">
        <h2>Projets</h2>
      </scroll-parallax>

      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

    </section>

    <!-- Section Compétences -->
    <section class="section3">

      <scroll-parallax :speed="0.3" direction="x">
        <h2>Compétences</h2>
      </scroll-parallax>

      <div>
        <div></div>
        <div></div>
      </div>

    </section>

    <!-- Section Contact -->
    <section class="section4">

      <scroll-parallax :speed="0.22" direction="y" :up="true">
        <h2>Contact</h2>
      </scroll-parallax>

      <form action=""></form>

    </section>
  
</template>

<script>
import revealItems from './js/reveal.js'

export default {
  name: 'App',
  data() {
    return {
      limit: 0,
      offsetY: 0,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.limit = Math.max( 
        document.body.scrollHeight-document.documentElement.clientHeight, 
        document.body.offsetHeight-document.documentElement.clientHeight, 
        document.documentElement.clientHeight-document.documentElement.clientHeight, 
        document.documentElement.scrollHeight-document.documentElement.clientHeight, 
        document.documentElement.offsetHeight-document.documentElement.clientHeight )
    revealItems()
  },
  methods: {
    onScroll() {
      this.scrollY = window.scrollY
      this.offsetY = (window.scrollY * 100)/this.limit
    }
  }
}
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/styles.scss";
</style>