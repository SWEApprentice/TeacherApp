import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage  {

  student = {
    name: "ด.ช.เอก",
    lastname: "เมืองลพ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQow52wL55qRJdIYSGgZnSHOmM6bWGMXfMGbstqu_WyCqpo-UQR",
  }

}
