import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ApprenantComponent as app } from './pages/apprenant/apprenant.component';
import { CmComponent } from './pages/cm/cm.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { FormateurComponent } from './pages/formateur/formateur.component';
import { UtilisateurComponent } from './widgets/utilisateur/utilisateur.component';
import { UdapteProfileComponent } from './pages/udapte-profile/udapte-profile.component';
import { ApprenantComponent } from './widgets/apprenant/apprenant.component';
import { GrCompetenceComponent } from './widgets/gr-competence/gr-competence.component';
import { EditeCompetencesComponent } from './widgets/edite-competences/edite-competences.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path : '', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ AuthGuard], children: [
    { path: '', component: ProfileComponent }
  ]},
  { path: 'cm', component : CmComponent, canActivate: [ AuthGuard]},
  { path: 'apprenants', component: app, canActivate: [ AuthGuard]},
  { path: 'formateur', component: FormateurComponent, canActivate: [ AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
