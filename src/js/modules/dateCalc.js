'use strict';

export default class dateCalc{
  //配列用定数
  // var this.Y = 0;
  // var this.M = 1;
  // var this.D = 2;

  constructor(){
    this.Y = 0;
    this.M = 1;
    this.D = 2;
  }

  //二つの日付から日数を計算する
  CalcDate0_Date1(i_date0, i_date1){
    var separatedDate0 = i_date0.value.split("-");
    var separatedDate1 = i_date1.value.split("-");
    var Date0 = new Array(3);
    var originDate1 = new Array(3);
    var days = 0;

    for(var i = 0; i < 3; i++){
      Date0[i] = parseInt(separatedDate0[i]);
      originDate1[i] = parseInt(separatedDate1[i]);
    }

    days = originDate1[this.D] - Date0[this.D];
    console.log(days);
    while(Date0[this.M] != originDate1[this.M]){
      days += this.HowMonthDays(Date0[this.M],IsLeapYear(Date0[this.Y]));
      Date0[this.M]++;
      if(Date0[this.M] > 12){
        Date0[this.M] = 1;
        Date0[this.Y]++;
      }
    }
    console.log(days);
    var correctionNum = originDate1 [this.M] >= 3 ? 1 : 0;
    while(Date0[this.Y] != originDate1[this.Y]){
      days += this.IsLeapYear(Date0[this.Y] + correctionNum) ? 366 : 365;
      Date0[this.Y]++;
    }
    console.log(days);
    return days;
  }

  //日付と日数から新たな日付を計算
  CalcDate0_Days(i_date0, s_days){
    var separatedDate0 = i_date0.value.split("-");
    var originDate = new Array(3);
    var date = new Array(3);
    for(var i = 0; i < 3; i++){
      originDate[i] = parseInt(separatedDate0[i]);
      date[i] = originDate[i];
    }
    var correctionNum = originDate[this.M] >= 3 ? 1 : 0;
    var days = parseInt(s_days.value);

    var nextYearDays = this.IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;
    while(days >= nextYearDays){
      days -= nextYearDays;
      date[this.Y]++;
      nextYearDays = this.IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;
    }

    var thisMonthDays = this.HowMonthDays(date[this.M], this.IsLeapYear(date[this.Y]));
    while(days >= thisMonthDays){
      days -= thisMonthDays;
      date[this.M]++;
      if(date[this.M] == 13){
        date[this.M] = 1;
        date[this.Y]++;
      }
      thisMonthDays = this.HowMonthDays(date[this.M], this.IsLeapYear(date[this.Y]));
    }

    date[this.D] += days;
    if(date[this.D] > thisMonthDays){
      date[this.M]++;
      date[this.D] -= thisMonthDays;
      if(date[this.M] == 13){
        date[this.M] = 1;
        date[this.Y]++;
      }
      if(date[this.M] == 2){
        thisMonthDays = this.HowMonthDays(date[this.M],this.IsLeapYear(date[this.Y]))
      }
    }
    return date[this.Y] + '-' + date[this.M] + '-' + date[this.D];
  }

  //yearが閏年かどうか
  IsLeapYear(year){
    if(year % 4 != 0){
      return false;
    } else if((year % 100 == 0) && (year % 400 != 0)){
      return false;
    } else {
      return true;
    }
  }

  // monthの日数を返す
  HowMonthDays(month, isLeapYear){
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

};
