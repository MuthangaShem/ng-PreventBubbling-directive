import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bubbling';

	childClicked(event){
		alert('Child clicked');
	}

	parentClicked(event){
		alert('Parent clicked');
	}
}

