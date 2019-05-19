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
import { ChatItemComponent } from './components/chat-item/chat-item.component';
import { ChatListComponent, NewChatDialogComponent } from './components/chat-list/chat-list.component';
import { CustomizationComponent } from './components/customization/customization.component';
import { AboutComponent } from './components/about/about.component';

// Services
import { AuthService } from './services/solid.auth.service';
import { ChatService } from './services/chat.service';
import { AuthGuard } from './services/auth.guard.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';

import { PickerModule } from '@ctrl/ngx-emoji-mart';


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
    path: 'customization',
    component: CustomizationComponent
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
    path: 'about',
    component: AboutComponent,
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
    ChatItemComponent,
    ChatListComponent,
    NewChatDialogComponent,
    CustomizationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgSelectModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule, // required for toastr
    MatSnackBarModule,
    MatMenuModule,
    PickerModule
  ],
  entryComponents: [NewChatDialogComponent],
  providers: [AuthService , ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
