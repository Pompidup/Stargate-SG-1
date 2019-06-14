import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Formulaire';
  
   toggle() {
    this.show = !this.show;
  
  // CHANGE THE NAME OF THE BUTTON.
        if(this.show)
          this.buttonName = "Masquer formulaire";
        else
          this.buttonName = "Afficher formulaire";
      }
  model: Order = new Order();

  constructor() { }

  ngOnInit() { }

}
export class Order {
  pseudo: string;
  contactmail: string;
  password:string;
}



