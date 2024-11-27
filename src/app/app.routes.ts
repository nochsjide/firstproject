import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ParentbehaviorsubComponent } from './parentbehaviorsub/parentbehaviorsub.component';
import { ContactbehavsubjparentComponent } from './contactbehavsubjparent/contactbehavsubjparent.component';
import { TemplatevalidationComponent } from './templatevalidation/templatevalidation.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NotesComponent } from './notes/notes.component';
import {ViewnotesComponent} from './viewnotes/viewnotes.component';
import { EditnotesComponent } from './editnotes/editnotes.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { studentGuard } from './guards/student.guard';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CourseRegistrationComponent } from './course-registration/course-registration.component';
import { ViewClassmatesComponent } from './view-classmates/view-classmates.component';
import { PipecomponentComponent } from './pipecomponent/pipecomponent.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'pipe',  component: PipecomponentComponent },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: AdmindashComponent},
      { path: 'signup', component: AdminsignupComponent },
      { path: 'login',component:AdminloginComponent},
      
    ],
  },
  
  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent},
      { path: 'profile', component: ProfileComponent },
      { path: 'update-password',component:UpdatePasswordComponent},
      { path: 'upload-picture',component: UploadPictureComponent},
      { path: 'course-registration', component:CourseRegistrationComponent },
      { path: 'view-classmates', component: ViewClassmatesComponent },
    ],
  },
  {
    path: 'contact',
    children: [
      { path: '', component: ContactComponent },
      { path: 'view', component: ViewcontactComponent },
      { path: 'edit/:index', component: EditcomponentComponent },
    ],
  },
  { path: 'templatevalidate', component: TemplatevalidationComponent },
  {path:'eventparent',component:EventparentComponent},
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/edit' , component:EditnotesComponent},
  { path: 'notes/:index' , component:ViewnotesComponent},

  { path: 'parentbehav', component: ParentbehaviorsubComponent },
  { path: 'contactparentbehav', component: ContactbehavsubjparentComponent },
  {path:'studentsignin',component:SigninComponent},
  {path:'studentsignup',component:SignupComponent},
  { path: '**', component: ErrorPageComponent },
  // Wildcard route for 404 error
];
