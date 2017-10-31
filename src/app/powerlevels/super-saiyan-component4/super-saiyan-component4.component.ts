import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component4',
  templateUrl: './super-saiyan-component4.component.html',
  styleUrls: ['./super-saiyan-component4.component.css']
})
export class SuperSaiyanComponent4Component implements OnInit {

  @Input() mySuperSaiyan4;
  constructor() { }

  ngOnInit() {
  }

}
