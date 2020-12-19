import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditeCompetencesComponent } from 'src/app/widgets/edite-competences/edite-competences.component';
import { GrCompetenceComponent } from 'src/app/widgets/gr-competence/gr-competence.component';
import { ProfileComponent } from 'src/app/widgets/profile/profile.component';
import { UtilisateurComponent } from 'src/app/widgets/utilisateur/utilisateur.component';
import { ApprenantComponent } from '../apprenant/apprenant.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    
  { path: 'admin/profils', component: AdminComponent, children: [
    { path: '', component: ProfileComponent }
  ]},
  { path: 'admin/utilisateurs', component: AdminComponent, children: [
    { path: '', component: UtilisateurComponent }
  ]},
  { path: 'admin/apprenants', component: AdminComponent, children: [
    { path: '', component: ApprenantComponent }
  ]},
  { path: 'admin/gr-competences', component: AdminComponent, children: [
    { path: '', component: GrCompetenceComponent }
  ]},
  { path: 'admin/eudte-competence/:id', component: AdminComponent, children: [
    { path: '', component: EditeCompetencesComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
