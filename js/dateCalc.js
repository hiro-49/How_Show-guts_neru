'use strict';

{
  //各要素を取得
  const i_date0 = document.getElementById('date0');
  const i_date1 = document.getElementById('date1');
  const s_days = document.getElementById('days');
  const needle0 = document.getElementById('needle0');
  //正規表現
  const regexp_date = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  const regexp_days = new RegExp(/^\d+$/);
  //配列用定数
  const Y = 0;
  const M = 1;
  const D = 2;

  //イベントリスナーを追加
  i_date0.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date0.value)){
      needle0.classList.add("anim_needle0_date0-to-days");
      console.log(needle0.classList);
    } else {
      i_date0.value = "false";
      needle0.classList.add("anim_needle0_date0-to-days");
    }

  })

  i_date1.addEventListener('blur', ()=>{
    if(regexp_date.test(i_date1.value)){
      s_days.value = CalcDate0_Date1();
    } else {
      i_date1.value = "false";
    }
  })

  s_days.addEventListener('blur', ()=>{
    if(regexp_days.test(s_days.value)){
      i_date1.value = CalcDate0_Days();
      needle0.classList.add("anim_needle0_days-to-date1");
    } else {
      s_days.value = "false";
      needle0.classList.add("anim_needle0_days-to-date1");
    }
  })

  //二つの日付から日数を計算する
  function CalcDate0_Date1(){
    var separatedDate0 = i_date0.value.split("-");
    var separatedDate1 = i_date1.value.split("-");
    var Date0 = new Array(3);
    var originDate1 = new Array(3);
    var days = 0;
    for(var i = 0; i < 3; i++){
      Date0[i] = parseInt(separatedDate0[i]);
      originDate1[i] = parseInt(separatedDate1[i]);
    }

    days = originDate1[D] - Date0[D];
    console.log(days);
    while(Date0[M] != originDate1[M]){
      days += HowMonthDays(Date0[M],IsLeapYear(Date0[Y]));
      Date0[M]++;
      if(Date0[M] > 12){
        Date0[M] = 1;
        Date0[Y]++;
      }
    }
    console.log(days);
    var correctionNum = originDate1 [M] >= 3 ? 1 : 0;
    while(Date0[Y] != originDate1[Y]){
      days += IsLeapYear(Date0[Y] + correctionNum) ? 366 : 365;
      Date0[Y]++;
    }
    console.log(days);
    return days;
  }

  //日付と日数から新たな日付を計算
  function CalcDate0_Days(){
    var separatedDate0 = i_date0.value.split("-");
    var originDate = new Array(3);
    var date = new Array(3);
    for(var i = 0; i < 3; i++){
      originDate[i] = parseInt(separatedDate0[i]);
      date[i] = originDate[i];
    }
    var correctionNum = originDate[M] >= 3 ? 1 : 0;
    var days = parseInt(s_days.value);

    var nextYearDays = IsLeapYear(date[Y] + correctionNum) ? 366 : 365;
    while(days >= nextYearDays){
      days -= nextYearDays;
      date[Y]++;
      nextYearDays = IsLeapYear(date[Y] + correctionNum) ? 366 : 365;
    }

    var thisMonthDays = HowMonthDays(date[M], IsLeapYear(date[Y]));
    while(days >= thisMonthDays){
      days -= thisMonthDays;
      date[M]++;
      if(date[M] == 13){
        date[M] = 1;
        date[Y]++;
      }
      thisMonthDays = HowMonthDays(date[M], IsLeapYear(date[Y]));
    }

    date[D] += days;
    if(date[D] > thisMonthDays){
      date[M]++;
      date[D] -= thisMonthDays;
      if(date[M] == 13){
        date[M] = 1;
        date[Y]++;
      }
      if(date[M] == 2){
        thisMonthDays = HowMonthDays(date[M],IsLeapYear(date[Y]))
      }
    }
    return date[Y] + '-' + date[M] + '-' + date[D];
  }

  //yearが閏年かどうか
  function IsLeapYear(year){
    if(year % 4 != 0){
      return false;
    } else if((year % 100 == 0) && (year % 400 != 0)){
      return false;
    } else {
      return true;
    }
  }

  // monthの日数を返す
  function HowMonthDays(month, isLeapYear){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
      return 31;
    } else if(month == 2){
      if(isLeapYear){
        return 29;
      } else {
        return 28;
      }
    } else {
      return 30;
    }
  }
}
