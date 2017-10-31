import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-component2',
  templateUrl: './super-saiyan-component2.component.html',
  styleUrls: ['./super-saiyan-component2.component.css']
})
export class SuperSaiyanComponent2Component implements OnInit {

  @Input() mySuperSaiyan2;
  constructor() { }

  ngOnInit() {
  }

}
