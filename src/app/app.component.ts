//template typescript generato da command line-> diverso da quello ancora più semplice che genera stackblitz angular

//importa libreria Angular che realizza component
import { Component } from '@angular/core';

@Component({//direttiva angular (né js né ts, ma parte del linguaggio di Angular, precompilato)
  selector: 'app-root', //come altri component faranno riferimento a questo
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
