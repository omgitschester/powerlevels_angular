import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PowerlevelsComponent } from './powerlevels/powerlevels.component';
import { CalculateComponent } from './powerlevels/calculate/calculate.component';
import { HumanComponentComponent } from './powerlevels/human-component/human-component.component';
import { SaiyanComponentComponent } from './powerlevels/saiyan-component/saiyan-component.component';
import { SuperSaiyanComponentComponent } from './powerlevels/super-saiyan-component/super-saiyan-component.component';
import { SuperSaiyanComponent2Component } from './powerlevels/super-saiyan-component2/super-saiyan-component2.component';
import { SuperSaiyanComponent3Component } from './powerlevels/super-saiyan-component3/super-saiyan-component3.component';
import { SuperSaiyanComponent4Component } from './powerlevels/super-saiyan-component4/super-saiyan-component4.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerlevelsComponent,
    CalculateComponent,
    HumanComponentComponent,
    SaiyanComponentComponent,
    SuperSaiyanComponentComponent,
    SuperSaiyanComponent2Component,
    SuperSaiyanComponent3Component,
    SuperSaiyanComponent4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
