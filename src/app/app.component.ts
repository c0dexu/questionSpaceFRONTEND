import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestonsService } from './questons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  addQuestion(questionString: any) {
    this.service.addQuestion(questionString).subscribe((x) => {
      this.questions.push(x);
    });
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

  deleteQuestion(id: string) {
    console.log(id);
    this.service.deleteQuestion(id).subscribe();
  }
}
