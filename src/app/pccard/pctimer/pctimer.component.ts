import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pctimer',
  templateUrl: './pctimer.component.html',
  styleUrls: ['./pctimer.component.scss'],
})
export class PctimerComponent implements OnInit {
  public hour:  number = 0;
  public minute: number = 0;
  public second: number = 0;

  public time: string = '00:00:00';
  public nbSecond: number = 0;

  public timerIsOn: boolean = false;

  constructor() {}

  resetTimer() {
    console.log('reset timer');
  }

  ngOnInit(): void {}

  launchTimer() {
    if (!this.timerIsOn) {
      this.timerIsOn = true;
      setInterval(() => {
        this.update();
      }, 1000);
    }
  }

  update() {
    this.handleTimer();
    
  }

  handleTimer(){
    this.nbSecond += 1;
    this.second = (this.nbSecond % 60);
    this.minute = (Math.floor(this.nbSecond/60) % 60);
    this.hour = (Math.floor(this.nbSecond/3600)  % 3600);

    var hStr = ""
    if (this.hour < 10) {
      hStr = '0' + this.hour.toString();
    }
    else {
      hStr = this.hour.toString();
    }

    var mStr = ""
    if (this.minute < 10) {
      mStr = '0' + this.minute.toString();
    }
    else {
      mStr = this.minute.toString();
    }

    var sStr = ""
    if (this.second < 10) {
      sStr = '0' + this.second.toString();
    }
    else {
      sStr = this.second.toString();
    }

    this.time = hStr + ":" + mStr + ":" + sStr;
    
  }
}
