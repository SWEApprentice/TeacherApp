import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  
  student = {Status:'ปกติ',name:'ด.ช.เอก',lastname:'เมืองจันทร์',address:'115/11',IDcard:'1234567891125',number:'0865844759'};

  constructor() { }

  ngOnInit() {
  }

}
