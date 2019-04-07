import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { ChatComponent } from './components/chat/chat.component';
import { FeedComponent } from './components/feed/feed.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FriendItemComponent } from './components/friend-item/friend-item.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';

// Services
import { AuthService } from './services/solid.auth.service';
import { ChatService } from './services/chat.service';
import { AuthGuard } from './services/auth.guard.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-popup',
    component: LoginPopupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPopupComponent,
    ProfileComponent,
    RegisterComponent,
    ChatFormComponent,
    ChatComponent,
    FeedComponent,
    MessageComponent,
    NavbarComponent,
    FriendItemComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgSelectModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule // required for toastr
  ],
  providers: [AuthService , ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
