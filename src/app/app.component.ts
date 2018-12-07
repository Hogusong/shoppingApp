import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  choiceToOpen: string = "recipes" ;

  onSelectBrowser(choice: string){
    this.choiceToOpen = choice;
  }

}
