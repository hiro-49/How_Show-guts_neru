'use strict'
import anime from 'animejs';

export default class ButtomNewsScroll{
  constructor(elem){
    this.elem = elem;
    this.Scroll();
  }

  Scroll(){
    console.log("buttomNewsScroll");
    anime({
      targets:this.elem,
      loop:true,
      translateX: -3345,
      easing:'linear',
      duration: 15000
    });
  }
}
