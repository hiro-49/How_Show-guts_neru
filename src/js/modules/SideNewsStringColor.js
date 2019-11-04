'use strict'
import anime from 'animejs';

export default class StringColor{
  constructor(string){
    this.string = string;
    this.StringColorAnim();
  }

  StringColorAnim(){
    console.log("StringColorAnim");
    anime({
      targets:this.string,
      color:['#F00', '#FF0', '#0F0'],
      loop:true,
      duration: 3000
    })
  }
}
