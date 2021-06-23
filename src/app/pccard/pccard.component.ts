import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pccard',
  templateUrl: './pccard.component.html',
  styleUrls: ['./pccard.component.scss']
})
export class PCCardComponent implements OnInit {

  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = 'Default Name';

  @Input()
  get number(): number { return this._number;}
  set number(nb:number){
    this._number = nb;
  }
  private _number = 0;



  constructor() { }

  ngOnInit(): void {
  }

}
