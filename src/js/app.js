'use strict';
import dateCalc from "./modules/dateCalc.js";
import Needle from "./modules/Needle";

{
  //各要素を取得
  const i_date0 = document.getElementById('date0');
  const i_date1 = document.getElementById('date1');
  const s_days = document.getElementById('days');
  //正規表現
  const regexp_date = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  const regexp_days = new RegExp(/^\d+$/);
  //インスタンス
  var c_dateCalc = new dateCalc();
  var needle = new Needle(document.getElementById('needle0'));


  //イベントリスナーを追加
  i_date0.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date0.value)){

    } else {
      i_date0.value = "false";
      needle.AnimToDate1();
    }

  })

  i_date1.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date1.value)){
      s_days.value = c_dateCalc.CalcDate0_Date1(i_date0, i_date1);
    } else {
      i_date1.value = "false";
    }
  })

  s_days.addEventListener('blur', ()=>{
    if(regexp_days.test(s_days.value)){
      i_date1.value = c_dateCalc.Date0_Days(i_date0, s_days);
    } else {
      s_days.value = "false";
    }
  })
}
