import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component3',
  templateUrl: './super-saiyan-component3.component.html',
  styleUrls: ['./super-saiyan-component3.component.css']
})
export class SuperSaiyanComponent3Component implements OnInit {

  @Input() mySuperSaiyan3;
  constructor() { }

  ngOnInit() {
  }

}
