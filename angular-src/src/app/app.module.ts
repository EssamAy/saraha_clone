import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'account/forgotpassword', component: ForgotpasswordComponent },
  { path: 'account/resetpassword', component: ResetpasswordComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    MessagesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SettingsComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
