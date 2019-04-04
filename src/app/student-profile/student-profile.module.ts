import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentProfilePage } from './student-profile.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProfilePage
  },
  {
    path: 'student-save',
    children: [
      {
        path: '',
        loadChildren: '../student-save/student-save.module#StudentSavePageModule'
      }
    ]
  },
  {
    path: 'student-score',
    children: [
      {
        path: '',
        loadChildren: '../student-score/student-score.module#StudentScorePageModule'
      }
    ]
  },
  {
    path: 'student-evo',
    children: [
      {
        path: '',
        loadChildren: '../student-evo/student-evo.module#StudentEvoPageModule'
      }
    ]
  },
  {
    path: 'student-portfolio',
    children: [
      {
        path: '',
        loadChildren: '../student-portfolio/student-portfolio.module#StudentProfolioPageModule'
      }
    ]
  },
  {
    path: 'profile-edit',
    children: [
      {
        path: '',
        loadChildren: '../profile-edit/profile-edit.module#ProfileEditfolioPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentProfilePage]
})
export class StudentProfilePageModule {}
