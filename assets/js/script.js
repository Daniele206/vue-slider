const {createApp} = Vue;

createApp({

  data(){
    return{
      imgContainer: [
        {
          img: './assets/img/01.webp',
          title: 'Spiderman',
          description: 'Immergiti nei panni di Peter Parker, lunico e inimitabile amichevole spiderman di quartiere.'
        },
        {
          img: './assets/img/02.webp',
          title: 'Ratchet & Clank',
          description: 'Ratchet é un meccanico della razza Lombax che grazie al Dimensionatore é pronto a intraprendere mille avventure.'
        },
        {
          img: './assets/img/03.webp',
          title: 'Fortnite',
          description: 'Metti play prendi il bus e lanciati sull\'isola, si parte in 100 ma solo uno sopravvive nella Battle-Royale.'
        },
        {
          img: './assets/img/04.webp',
          title: 'Cat Game',
          description: 'Impersonifica un gatto nel suo quoitidiano, all\'apparenza potrebbe sembrare noiso ma dietero c\'é molto di piú.'
        },
        {
          img: './assets/img/05.webp',
          title: 'Marvel Game',
          description: 'Entra nell\'universo marvel é sconfiggi decine di suoper cattivi utilizzando a turno tutti i tuoi super eroi preferiti.'
        },
      ],
      counter: 0,
    };
  },

  methods:{
    loopSlider(direction){

      direction ? this.counter++ : this.counter--

      if(this.counter === this.imgContainer.length){
        this.counter = 0;
      }else if(this.counter < 0){
        this.counter = this.imgContainer.length - 1;
      }
    },

    infiniteLoop(){
      setInterval(() => this.loopSlider(true), 3000)
    }
  },

  mounted(){
    this.infiniteLoop()
  },

}).mount('#app');