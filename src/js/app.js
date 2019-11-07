'use strict';
import dateCalc from "./modules/dateCalc.js";
import Needle from "./modules/Needle";
import StringColor from "./modules/SideNewsStringColor";
import BottomNewsScroll from "./modules/BottomNewsScroll";

{
  //各要素を取得
  const i_date0 = document.getElementById('date0');
  const i_date1 = document.getElementById('date1');
  const s_days = document.getElementById('days');
  //正規表現
  const regexp_date = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  const regexp_days = new RegExp(/^\d+$/);
  //変数
  var today;
  //タイプライター風表示用
  var delay = 100;
  //インスタンス
  var c_dateCalc = new dateCalc();
  var needle = new Needle(document.getElementById('needle0'));
  var stringColor = new StringColor(document.getElementById('sideNewsSentence'));
  var buttomNewsScroll = new BottomNewsScroll(document.getElementById('bottomNewsSentence'));

  //html読み込み後実行
  window.onload = () => {
    today = new Date();
    tutorial()
    .then(inputDate0)
    .then(inputDate1);
  }

  //イベントリスナーを追加
  i_date0.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date0.value)){
      needle.AnimToDate1();
    } else {
      i_date0.value = "false";
    }

  })

  i_date1.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date1.value)){
      needle.AnimToDays();
      s_days.value = c_dateCalc.CalcDate0_Date1(i_date0, i_date1);
    } else {
      i_date1.value = "false";
    }
  })

  s_days.addEventListener('blur', ()=>{
    if(regexp_days.test(s_days.value)){
      needle.AnimToDate1();
      i_date1.value = c_dateCalc.Date0_Days(i_date0, s_days);
    } else {
      s_days.value = "false";
    }
  })

  s_days.addEventListener('focus', ()=>{
    needle.AnimToDays();
  })

  //関数

  //promise用関数
  //tutorial処理
  var tutorial = () => {
    return new Promise((resolve, reject) => {
      if(today != null){
        resolve();
      }
    })
  }

  var inputDate0 = () => {
    return new Promise((resolve, reject) => {
      let str = today.getFullYear() + '-' + ('00' + (today.getMonth() + 1)).slice(-2) + '-' + ('00' + today.getDate()).slice(-2);
      i_date0.focus();
      setTypewriter(i_date0, str)
      .then(() => {
        i_date0.blur();
        resolve();
      })
    })
  }

  var inputDate1 = () => {
    let str = (today.getFullYear() + 1) + '-01-01';
    i_date1.focus();
    setTypewriter(i_date1, str)
    .then(() => {
      i_date1.blur();
    })
  }

  //タイプライター風表示
  var setTypewriter = (input, str) => {

    return new Promise((resolve, reject) => {
      let typewriter = setInterval(() => {
        let buf = input.value;
        let writed = buf.length;
        let write = "";
        if(writed < str.length){
          write = str.charAt(writed);
          input.value = buf + write;
        }else{
          console.log(input.value);
          clearInterval(typewriter);
          resolve();
        }
      }, delay);
    })
  }

}
