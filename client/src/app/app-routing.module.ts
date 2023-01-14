import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectSelectorComponent } from './components/project-selector/project-selector.component';


const routes: Routes = [
  // { path: 'login', component: LandingContainer, data: { animation: 'login', layer: 0 } },
  { path: '', component: ProjectSelectorComponent, data: { animation: '', layer: 1 } },
  { path: 'home', component: ProjectSelectorComponent, data: { animation: 'home', layer: 1 } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'profile', layer: 2 } },
  // {
  //   path: 'intx', loadChildren: () => import('./containers/help/help.module').then(mod => mod.HelpModule)
  // },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule { }
