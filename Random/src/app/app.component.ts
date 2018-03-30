import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   template: `
        <app-article></app-article>
             `
})
export class AppComponent { 
} 
/*import { Component } from '@angular/core';
import { RandomWordService } from './services/random-word.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RandomWordService],
})
export class AppComponent {
  title = 'Random Words!';
  randomWords = [];
 
  constructor(private randomWordsService: RandomWordService) {}
 
  getNewRandomWord() {
    console.debug("here");
    this.randomWordsService.getNew().subscribe((word) => {
    this.randomWords.push(word);
    });
   }
}*/