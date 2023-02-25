import { Component, OnInit } from '@angular/core';
import { QuestonsService } from './questons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  addQuestion(questionString: string) {
    this.service.addQuestion(questionString).subscribe();
  }
  questions: any;
  question: string = '';
  constructor(private service: QuestonsService) {}
  ngOnInit(): void {
    this.service.getQuestions().subscribe((x) => {
      this.questions = x;
      console.log(x);
    });
  }
}
