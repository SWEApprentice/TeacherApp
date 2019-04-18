import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { StudentScorePage } from '../student-score/student-score.page';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {
  data: any;
  constructor(
    public act: ActivatedRoute,
    public route: NavController,
    public modalcontroller: ModalController
  ) { }

  ngOnInit() {
    let res: any = this.act.snapshot.paramMap.get('student');
    this.data = JSON.parse(res)
    console.log(this.data)
  }

  async score(){
    const modal = await this.modalcontroller.create({
      component: StudentScorePage,
      componentProps:{
        data: this.data.value
      }
    });
    return await modal.present();
  }

  goscore(){
    this.route.navigateForward('/student-score')
  }
}

