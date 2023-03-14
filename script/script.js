  const { createApp } = Vue
  let app = document.getElementById("app")
  createApp({
    data: () => ({
      images: [
        {
            imgPath: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
          imgPath: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
          imgPath: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
          imgPath: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
          imgPath: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ],
    appWidth: app.clientWidth,
    index: 0,
    translateX: 0
  }),
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },
  methods: {
    getDimensions() {
      this.appWidth = app.clientWidth;
    },
    nextImg() {
      this.index++
      for (let w = (this.appWidth * this.index); w <= ((this.appWidth * this.index) + this.appWidth); w++){
        this.translateX = w 
      }
    },
    prevImg() {
      for (let w = (this.appWidth * this.index); w >= ((this.appWidth * this.index) - this.appWidth); w--){
        this.translateX = w
      }
      this.index--
    }
  }
  }).mount('#app')

