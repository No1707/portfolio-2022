<template>

    <div class="reseaux">Réseaux</div>
    
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
            <span class="revealMultipleItem">Bonjour, </span>
            <span class="revealMultipleItem">Développeur <span>web</span></span>
            <span class="revealMultipleItem"><span>Front-end</span> à votre service...</span>
          </h1>
          <scroll-parallax class="reveal" direction="x" :right="true" :speed="0.15">
            <p>Création de sites web <span>modernes</span> et <span>responsives</span></p>
          </scroll-parallax>
        </div>
        
        <!-- Right -->
        <div class="headerRight">
          <div class="headerImgWrapper reveal">
            <scroll-parallax class="headerImgParallax" :speed="0.6" :style="{backgroundPosition: 'top 0 right ' + -scrollY*0.6 + 'px'}"  direction="x" :left="true" />
            <div class="headerImg"></div>
          </div>
        </div>

      </div>

    </header>

    <!-- Section A propos -->
    <section class="section1" ref="about">

      <div class="sectionContainer">

        <scroll-parallax :speed="0.3" direction="x">
          <h2>À propos</h2>
        </scroll-parallax>

        <p class="reveal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad porro, voluptatem expedita quisquam, facere sunt fugit maxime sed fugiat ea asperiores quidem repudiandae doloribus laborum! Beatae perferendis corrupti tempora aut.
        Assumenda ullam laboriosam quasi corrupti ab dolore suscipit necessitatibus facilis, culpa ipsum sit ea dolorum aut ipsa similique magnam nulla cumque iusto ipsam. Culpa repudiandae modi iste ipsum perspiciatis facilis.
        Quos quo, dolorum obcaecati dolores iste suscipit ex molestias labore iure eligendi similique nemo temporibus soluta corrupti delectus libero, quaerat, alias dolorem facilis sapiente tempore. Cumque possimus voluptates iste fugit.
        Incidunt, nam. Dolore nostrum veniam cumque nobis quos corrupti delectus modi possimus ex quaerat tempora, quia fugit esse deserunt assumenda repellat expedita rerum maxime tenetur similique. Dolorum nam debitis numquam?
        Provident eum dolorem, molestiae quasi, porro dignissimos nemo sit non placeat nulla labore rem? Nesciunt reprehenderit minus maxime perferendis laudantium alias, autem reiciendis dolore, porro nostrum placeat harum accusantium itaque!
        </p>

      </div>

    </section>

    <!-- Section Projets -->
    <section class="section2" ref="projects">

      <div class="sectionContainer">

        <scroll-parallax :speed="0.3" direction="x" :left="true">
          <h2>Projets</h2>
        </scroll-parallax>

        <div>
          <div class="revealMultiple">
            <div class="revealMultipleItem"></div>
            <div class="revealMultipleItem"></div>
            <div class="revealMultipleItem"></div>
          </div>
          <div class="revealMultiple">
            <div class="revealMultipleItem"></div>
            <div class="revealMultipleItem"></div>
            <div class="revealMultipleItem"></div>
          </div>
        </div>

      </div>

    </section>

    <!-- Section Compétences -->
    <section class="section3" ref="skills">

      <div class="sectionContainer">

        <scroll-parallax :speed="0.3" direction="x">
          <h2>Compétences</h2>
        </scroll-parallax>

        <div>
          <div></div>
          <div></div>
        </div>

      </div>

    </section>

    <!-- Section Contact -->
    <section class="section4" ref="contact">

      <div class="sectionContainer">

        <scroll-parallax :speed="0.2" direction="y" :up="true">
          <h2>Contact</h2>
        </scroll-parallax>

        <form ref="contactForm" action="https://formspree.io/f/xeqnpkog" method="POST" class="reveal">
          <div>
            <div class="formField">
              <input v-model="contactName" autocomplete="off" type="input" class="formInput" placeholder="Name" name="name" id='name' required="required" />
              <label for="name" class="formLabel">Nom</label>
            </div>
            <div class="formField">
              <input v-model="contactMail" autocomplete="off" type="email" class="formInput" placeholder="Email" name="email" id='email' required="required" />
              <label for="email" class="formLabel">Email</label>
            </div>
          </div>
          <div class="formTextarea">
            <textarea v-model="contactMessage" autocomplete="off" name="message" id="message" minlength="30" rows="5" placeholder="Message" required="required"></textarea>
            <label for="message" class="formLabel">Message</label>
          </div>
          <div class="submitField">
            <button :disabled="disabledContactSubmit" @click="submitContactForm" class="submitButton">
              <span>Envoyer</span>
            </button>
          </div>
        </form>

      </div>

    </section>

</template>

<script>
import revealItems from './js/reveal.js'
import revealMultipleItems from './js/revealMultiple.js'

export default {
  name: 'App',
  data() {
    return {
      limit: 0,
      offsetY: 0,
      scrollY: 0,
      contactName: "",
      contactMail: "",
      contactMessage: "",
      navButtons: 
        [{name: "Accueil", id: "home"}, 
        {name: "À propos", id: "about"},
        {name: "Projets", id: "projects"},
        {name: "Compétences", id: "skills"},
        {name: "Contact", id: "contact"}]
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
    revealMultipleItems()
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
  },
  computed: {
    submitContactForm() {
      // return this.$refs.contactForm.submit()
      return console.log(this.contactName.length, this.contactMail.length, this.contactMessage.length)
    },
    disabledContactSubmit(){
      return this.contactName.length>1 && this.contactMail.length>1 && this.contactMessage.length>1 ? false : true
    }
  }
}
</script>

<style lang="scss">
@import "./styles/reset.css";
@import "./styles/styles.scss";
</style>