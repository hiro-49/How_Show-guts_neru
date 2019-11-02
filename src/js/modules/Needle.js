'use strict'
import anime from 'animejs';

export default class Needle{

  constructor(needle){
    this.needle = needle;
    this.StateInit();
    this.state = this.date0;
  }

  StateInit(){
    this.date0 = 'date0';
    this.date1 = 'date1';
    this.days = 'days';
  }

  AnimToDate0(){
    switch(this.state){
      case this.date0:
        break;
      case this.date1:
        anime({
          target:this.needle,
          rotate:360
        })
        break;
      case this.days:
        anime({
          target:this.needle,
          rotate:360
        })
        break;
    }
    this.state = this.date0;
    console.log('Exec AnimToDate0()');
  }

  AnimToDate1(){
    console.log('state:' + this.state);
    switch(this.state){
      case this.date0:
        anime({
          targets:this.needle,
          rotate:220
        })
        console.log('Exec AnimToDate1()');
        break;
      case this.date1:
        break;
      case this.days:
        anime({
          target:this.needle,
          rotate:220
        })
        break;
    }
    this.state = this.date1;
  }

  AnimToDays(){
    switch(this.state){
      case this.date0:
        anime({
          target:this.needle,
          rotate:120
        })
        break;
      case this.date1:
        anime({
          target:this.needle,
          rotate:120
        })
        break;
      case this.days:
        break;
    }
    this.state = this.days;
  }

}
