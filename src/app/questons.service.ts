import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestonsService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(this.apiUrl + '/questions');
  }

  addQuestion(question: any) {
    return this.http.post(this.apiUrl + '/question', question);
  }

  deleteQuestion(id: string) {
    return this.http.delete(this.apiUrl + '/questions/' + id);
  }
}
