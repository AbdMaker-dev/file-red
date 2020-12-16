import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './interceptors/auth.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NaveComponent } from './widgets/nave/nave.component';
import { CmComponent } from './pages/cm/cm.component';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './widgets/edit-profile/edit-profile.component';
import { ProfileComponent } from './widgets/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ContainerComponent } from './widgets/container/container.component';
import { ContainerLeftComponent } from './widgets/container-left/container-left.component';
import { ContainerRightComponent } from './widgets/container-right/container-right.component';
import { ApprenantComponent as app } from './pages/apprenant/apprenant.component';
import { FormateurComponent } from './pages/formateur/formateur.component';
import { UtilisateurComponent } from './widgets/utilisateur/utilisateur.component';
import { ListeUtilisateurComponent } from './widgets/liste-utilisateur/liste-utilisateur.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UdapteProfileComponent } from './pages/udapte-profile/udapte-profile.component';
import { ApprenantComponent } from './widgets/apprenant/apprenant.component';
import { GrCompetenceComponent } from './widgets/gr-competence/gr-competence.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CompetenceComponent } from './widgets/competence/competence.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListCompetenceComponent } from './widgets/list-competence/list-competence.component';
import { MatModulesModule } from './materialModules/mat-modules/mat-modules.module';
// MDB Angular Pro

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    NaveComponent,
    CmComponent,
    EditProfileComponent,
    ProfileComponent,
    ContainerComponent,
    ContainerLeftComponent,
    ContainerRightComponent,
    app,
    FormateurComponent,
    UtilisateurComponent,
    ListeUtilisateurComponent,
    UdapteProfileComponent,
    ApprenantComponent,
    GrCompetenceComponent,
    CompetenceComponent,
    ListCompetenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FlexLayoutModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
