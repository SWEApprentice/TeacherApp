import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-score',
  templateUrl: './student-score.page.html',
  styleUrls: ['./student-score.page.scss'],
})
export class StudentScorePage implements OnInit {
  @Input() data: any

  Score = [{name:'ภาษาไทย'},{name:'ภาษาอังกฤษ'},{name:'คณิตศาสตร์'}]
  
  constructor(
    public route: NavController,
    public modalcontroller: ModalController) { }

  ngOnInit() {
    console.log(this.data)
  }

  backProfile(){
    this.modalcontroller.dismiss();
  }
}
