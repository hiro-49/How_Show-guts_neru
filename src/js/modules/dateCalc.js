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
    let isNegative = false;

    for(var i = 0; i < 3; i++){
      Date0[i] = parseInt(separatedDate0[i]);
      originDate1[i] = parseInt(separatedDate1[i]);
    }

    //Date0 < originDateとなるようにする
    if(originDate1[this.Y] < Date0[this.Y]){
      isNegative = true;
    }else if(originDate1[this.Y] == Date0[this.Y] && originDate1[this.M] < Date0[this.Y]){
      isNegative = true;
    }else if(originDate1[this.Y] == Date0[this.Y] && originDate1[this.M] == Date0[this.M] && originDate1[this.D]  < Date0[this.D]){
      isNegative = true;
    }

    if(isNegative){
      for(let i = 0; i < 3; i++){
        let number = Date0[i];
        Date0[i] = originDate1[i];
        originDate1[i] = number;
      }
    }

    days = originDate1[this.D] - Date0[this.D];
    console.log(days);
    while(Date0[this.M] != originDate1[this.M]){
      days += this.HowMonthDays(Date0[this.M],this.IsLeapYear(Date0[this.Y]));
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

    if(isNegative){
      days *= -1;
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
    var days = parseInt(s_days.value);
    if(days >= 0){
      let correctionNum = originDate[this.M] >= 3 ? 1 : 0;
      //date[this.Y]を計算
      //来年の同じ日までの日数を計算してdaysから引く
      //daysが足りなくなるまで繰り返す
      var nextYearDays = this.IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;
      while(days >= nextYearDays){
        days -= nextYearDays;
        date[this.Y]++;
        nextYearDays = this.IsLeapYear(date[this.Y] + correctionNum) ? 366 : 365;
      }

      //date[this.M]を計算
      //来月の同じ日までの日数を(ry
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

      //残りが日付となる
      //30日しかない月なのに31日になると困るからそこの処理はする
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
    }else{
      days *= -1;
      var correctionNum = originDate[this.M] <= 2 ? 1 : 0;
      //date[this.Y]を計算
      //去年の同じ日までの日数を計算してdaysから引く
      //daysが足りなくなるまで繰り返す
      var previousYearDays = this.IsLeapYear(date[this.Y] - correctionNum) ? 366 : 365;
      while(days >= previousYearDays){
        days -= previousYearDays;
        date[this.Y]--;
        previousYearDays = this.IsLeapYear(date[this.Y] - correctionNum) ? 366 : 365;
      }
      //date[this.M]を計算
      //先月の同じ日までの日数を(ry
      var thisMonthDays = this.HowMonthDays(date[this.M] - 1, this.IsLeapYear(date[this.Y]));
      while(days >= thisMonthDays){
        days -= thisMonthDays;
        date[this.M]--;
        if(date[this.M] == 0){
          date[this.M] = 12;
          date[this.Y]--;
        }
        thisMonthDays = this.HowMonthDays(date[this.M] - 1, this.IsLeapYear(date[this.Y]));
      }
      //残りが日付とはならない
      //今の日付と残りのdaysを比較してdaysの方が大きければdaysからdateを引く
      //その後先月の最終日付からdaysを引く
      //dateの方が大きければdaysを引いて終了
      if(date[this.D] < days){
        days -= date[this.D];
        date[this.M]--;
        if(date[this.M] == 0){
          date[this.M] = 12;
          date[this.Y]--;
        }
        date[this.D] = this.HowMonthDays(date[this.M],this.IsLeapYear(date[this.Y])) - days;
      }else{
        date[this.D] -= days;
      }
    }
    return date[this.Y] + '-' + ('00' + date[this.M]).slice(-2) + '-' + ('00' + date[this.D]).slice(-2);
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
    if(month == 0 || month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
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
