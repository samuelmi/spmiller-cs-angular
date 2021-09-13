import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponentComponent as AdminComponent } from './admin-component/admin-component.component';

const appRoutes: Routes = [
 { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ResumeComponent,
    HomeComponent,
    ProjectsComponent,
    GuestBookComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
