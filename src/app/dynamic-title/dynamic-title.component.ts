import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css']
})
export class DynamicTitleComponent implements AfterViewInit {
  @ViewChild('typewriterTitle', { static: false }) typewriterTitle!: ElementRef;

  titleText: string = 'Austen Furutani: ';
  titles: string[] = ['Back-End Developer', 'Frontend Developer', 'Software Engineer'];


  ngAfterViewInit() {
    // Start typing the titles sequentially
    this.typeWriterEffect(0);
  }


  async typeWriterEffect(idx: number) {
    const titleElement = this.typewriterTitle.nativeElement;
    const text = this.titles[idx];
    let charIndex = 0;

    // Create an observable interval to simulate typing effect
    interval(50) // Adjust typing speed (milliseconds per character) as needed
      .pipe(
        take(text.length) // Take until the length of the current title
      )
      .subscribe(() => {
        titleElement.textContent += text.charAt(charIndex); // Update the title content
        charIndex++;

        if (charIndex === text.length) {
          // When typing is complete for current title, proceed to next if available
          if (idx < this.titles.length - 1) {

            setTimeout(() => this.typeWriterEffectDelete(idx), 4000);
          }
        }
      });
  }

  typeWriterEffectDelete(idx : number){
    const titleElement = this.typewriterTitle.nativeElement;
    interval(50) // Adjust typing speed (milliseconds per character) as needed
      .pipe(
        take(this.titles[idx].length) // Take until the length of the current title
      )
      .subscribe(() => {
        titleElement.textContent = titleElement.textContent.substring(0, (titleElement.textContent.length - 1)); // Update the title content
      });
      setTimeout(() => this.typeWriterEffect(idx + 1), 3000); // Delay before typing next title
  }

}
