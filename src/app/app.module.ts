import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LocalDataService } from './commons/common.constants';
import { SessionTimeout } from './commons/idleState';
import { AppRoutingModule } from './app.routing';
import { GetValidationMessages } from './login/validationMessages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DelayInterceptor } from './commons/http.interceptors';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  {
      path: "login",
      component: LoginComponent
  },
  {
      path: "register",
      component: RegisterComponent
  },
  {
      path: "home",
      component: HomeComponent,
      canActivate: [AuthGuard]
  },
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  },
  {
      path: "**",
      component: LoginComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    NgIdleKeepaliveModule.forRoot(),BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientModule, HttpModule
  ],
  providers: [LocalDataService, SessionTimeout, GetValidationMessages,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DelayInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
