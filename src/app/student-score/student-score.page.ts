import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.page.html',
  styleUrls: ['./student-score.page.scss'],
})
export class StudentScorePage implements OnInit {

  Score = [{name:'ภาษาไทย'},{name:'ภาษาอังกฤษ'},{name:'คณิตศาสตร์'}]
  
  constructor() { }

  ngOnInit() {
  }

}
