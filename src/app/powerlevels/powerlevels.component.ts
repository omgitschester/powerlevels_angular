import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-powerlevels',
  templateUrl: './powerlevels.component.html',
  styleUrls: ['./powerlevels.component.css']
})
export class PowerlevelsComponent implements OnInit {

  powerlevel: number = 0;
  human = 0;
  saiyan = 0;
  supersaiyan = 0;
  supersaiyan2 = 0;
  supersaiyan3 = 0;
  supersaiyan4 = 0;

  all(){
    this.human= this.powerlevel*1;
    this.saiyan= this.powerlevel*10;
    this.supersaiyan= this.powerlevel*90;
    this.supersaiyan2= this.powerlevel*150;
    this.supersaiyan3= this.powerlevel*250;
    this.supersaiyan4= this.powerlevel*500;
    
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
