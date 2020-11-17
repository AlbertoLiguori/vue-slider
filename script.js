var data = [
  {
    picture_url:"css/img/image1.jpg"
  },
  {
    picture_url:"css/img/image2.jpg"
  },
  {
    picture_url:"css/img/image3.jpg"
  },
  {
    picture_url:"css/img/image4.jpg"
  },
]

const sliderApp = new Vue({
  el:"#root",

  data:{

    imgSources:data.map(element => element.picture_url),

    currentSrcIndex:0,
  },

  methods:{

    movePrev:function(){

      if(this.currentSrcIndex==0){
        this.currentSrcIndex= this.imgSources.length - 1
      }
      else
      {
        this.currentSrcIndex--;
      };
    },

    moveNext:function(){

      if(this.currentSrcIndex==this.imgSources.length - 1){
        this.currentSrcIndex = 0
      }
      else
      {
        this.currentSrcIndex++;
      };
    },
  }

})
