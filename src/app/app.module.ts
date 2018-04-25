import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,RouterLink} from '@angular/router';
import {PageSliderModule}    from 'ng2-page-slider';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {FormsModule} from "@angular/forms";
import { LoginService } from './login/loginservices.service';
import { CoursesComponent } from './courses/courses.component';
import { MoviesComponent } from './movies/movies.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { HowComponent } from './how/how.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    WelcomeComponent,
    CoursesComponent,
    MoviesComponent,
    ShoppingComponent,
    TvshowsComponent,
    HowComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,PageSliderModule,FormsModule,RouterModule.forRoot([
      
            {path: 'login/welcome', component:WelcomeComponent},
            
            {path: 'welcome/login' , component:LoginComponent},

            {path: 'welcome/courses' , component:CoursesComponent},

            {path: 'welcome/movies' , component:MoviesComponent},

            {path: 'welcome/shopping' , component:ShoppingComponent},

            {path: 'welcome/tvshows' , component:TvshowsComponent},
            
            {path: 'how', component:HowComponent},
            
            {path: 'about', component:AboutComponent},

            {path: 'register', component:RegisterComponent},
            
            
            {path:'**',component:LoginComponent},        
             
            
          ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
