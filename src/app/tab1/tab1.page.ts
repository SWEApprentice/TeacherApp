import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  { 
  data: any;

constructor(
  public route: NavController,
  public studentservice: StudentService
) { }

ngOnInit(){
  this.getData();
}

goProfile(item){
  this.route.navigateForward(['/student-profile',{student:JSON.stringify(item)}])
  console.log(item);
}

async getData(){
  this.data = await this.studentservice.getData();
  console.log(this.data);
}
}