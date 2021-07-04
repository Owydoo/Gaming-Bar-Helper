import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pctimer',
  templateUrl: './pctimer.component.html',
  styleUrls: ['./pctimer.component.scss'],
})
export class PctimerComponent implements OnInit {
  public hour: number = 0;
  public minute: number = 0;
  public second: number = 0;

  public time: string = '00:00:00';
  public nbSecond: number = 0;

  public timerIsStartedOnce: boolean = false;
  public timerIsOn: boolean = false;

  public timerInterval: any;

  constructor() {}


  ngOnInit(): void {}

  launchTimer() {
    if (this.timerIsOn) {
      this.timerIsOn = false
    }
    else {
      this.timerIsOn = true
    }
    
    this.timerIsStartedOnce = true;
    this.timerInterval = setInterval(() => {
      this.update();
    }, 1000);
  
    // else {
    //   if (this.timerIsOn) {
    //     this.pauseTimer()
    //   }
    // }
  }

  pauseTimer() {
    this.timerIsOn = false;
    clearInterval(this.timerInterval)
  }

  resetTimer(){
    this.timerIsOn = false;
    clearInterval(this.timerInterval)

    this.hour = 0;
    this.minute = 0;
    this.second = 0;
    this.time = '00:00:00';
    this.nbSecond = 0;

    this.timerIsStartedOnce = false

  }

  update() {
    this.handleTimer();
    // if (this.timerIsOn) {
    //   clearInterval(this.timerInterval)
    // }
  }

  handleTimer() {
    this.nbSecond += 1;
    this.second = this.nbSecond % 60;
    this.minute = Math.floor(this.nbSecond / 60) % 60;
    this.hour = Math.floor(this.nbSecond / 3600) % 3600;

    var hStr = '';
    if (this.hour < 10) {
      hStr = '0' + this.hour.toString();
    } else {
      hStr = this.hour.toString();
    }

    var mStr = '';
    if (this.minute < 10) {
      mStr = '0' + this.minute.toString();
    } else {
      mStr = this.minute.toString();
    }

    var sStr = '';
    if (this.second < 10) {
      sStr = '0' + this.second.toString();
    } else {
      sStr = this.second.toString();
    }

    this.time = hStr + ':' + mStr + ':' + sStr;
  }

}
