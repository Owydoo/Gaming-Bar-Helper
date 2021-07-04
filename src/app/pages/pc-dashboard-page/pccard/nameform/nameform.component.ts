import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nameform',
  template: `
    <form>
      <div class="form-group">
        <label for="name"></label>
        <input nbInput ngModel name="firstName" #firstName="ngModel" (change)="sendFirstName(firstName)" id="firstName" type="text" class="form-control">
      </div>
      <button nbButton outline status="primary">Changer le nom</button>
    </form>
  `,
  styles: [
  ]
})
export class NameformComponent {

  firstName: string = "";

  @Output() firstNameEvent = new EventEmitter<string>();

  sendFirstName(message:any){
    this.firstNameEvent.emit(message.value);
  }

  log(x:any) {
    console.log(x.value);
  }
  
  //fonction qui doit prendre firstName et l'envoyer dans le parent, c'est à dire le pc card

}
