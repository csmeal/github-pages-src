import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitContainerComponent } from './components/git-container';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'git', component: GitContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
