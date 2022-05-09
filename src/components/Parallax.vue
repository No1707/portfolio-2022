<template>
  <div ref="scrollParallax">
    <slot>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'scroll-parallax',
    props: {
      speed: {
        type: Number,
        required: true,
        default: 0.15
      },
      down: {
        type: Boolean,
        default: false,
        required: false
      },
      up: {
        type: Boolean,
        default: true,
        required: false
      },
      right: {
        type: Boolean,
        default: true,
        required: false
      },
      left: {
        type: Boolean,
        default: false,
        required: false
      },
      direction: {
        type: String,
        default: 'y',
        required: false
      },
      responsive: {
          type: Boolean,
          default: true,
          required: false
      }
    },
    data() {
      return {
        el: null,
        axes: null,
        speedCoeff: null,
        windowWidth: null
      }
    },
    methods: {
      loadParallax() {
        this.initDirection()
        this.el = this.$refs.scrollParallax
        // const speedCoeff = this.down ? -this.speed : this.speed;
        window.addEventListener('scroll', () => {
          this.el.style.transform = `translate${this.axes}(${window.pageYOffset * this.speedCoeff}px)`;
        })
      },
      initDirection() {
        if(this.responsive === false && this.windowWidth < 1000 ){
          this.speedCoeff = 0
        } else {
          if (this.direction === 'x') {
            this.axes = 'X'
            if (this.left) {
              this.speedCoeff = -this.speed
            } else {
              this.speedCoeff = this.speed
            }
          } else if (this.direction === 'y'){
            this.axes = 'Y'
            if (this.down) {
              this.speedCoeff = -this.speed
            } else {
              this.speedCoeff = this.speed
            }
          }
        }
      }
    },
    mounted() {
      this.windowWidth = window.innerWidth
      this.loadParallax()
    }
  }
</script>