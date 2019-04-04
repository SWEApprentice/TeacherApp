import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'student-list', loadChildren: './student-list/student-list.module#StudentListPageModule' },
  { path: 'student-profile', loadChildren: './student-profile/student-profile.module#StudentProfilePageModule' },
  { path: 'student-portfolio', loadChildren: './student-portfolio/student-portfolio.module#StudentPortfolioPageModule' },
  { path: 'student-save', loadChildren: './student-save/student-save.module#StudentSavePageModule' },
  { path: 'profile-edit', loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule' },
  { path: 'student-score', loadChildren: './student-score/student-score.module#StudentScorePageModule' },
  { path: 'student-evo', loadChildren: './student-evo/student-evo.module#StudentEvoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
