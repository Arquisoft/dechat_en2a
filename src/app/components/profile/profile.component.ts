import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolidProfile } from '../../models/solid-profile.model';
import { RdfService } from '../../services/rdf.service';
import { AuthService } from '../../services/solid.auth.service';
import {NamedNode} from '../../../assets/types/rdflib';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit  {

  profile: SolidProfile;
  profileImage: string;
  loadingProfile: Boolean;
  addWebId: string;
  friends: User[] = new Array<User>();

  @ViewChild('f') cardForm: NgForm;

  constructor(private rdf: RdfService,
              private route: ActivatedRoute,
              private auth: AuthService,
              private snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.loadingProfile = true;
    this.loadProfile();
    this.getFriends();

    // Clear cached profile data
    // TODO: Remove this code and find a better way to get the old data
    localStorage.removeItem('oldProfileData');
  }

  async getFriends() {
          await this.rdf.getSession();
          if (!this.rdf.session) {
              return;
          }
          this.rdf.getFriends().then(res => res.map(e => e.value).forEach(async webId => {
              const name = (await this.rdf.getName(webId));
              const picUrl = (await this.rdf.getPicture(webId));
              this.friends.push(new User(this.getUsernameFromWebID(webId), name ? name.value : 'NoName',
                  webId, picUrl ? picUrl.value : 'https://material.angular.io/assets/img/examples/shiba1.jpg'));
          }));

  }

    private getUsernameFromWebID(webId: string): string {
        let username = '';
        if (webId.includes('https://')) {
            username = webId.replace('https://', '');
        } else {
            username = webId.replace('http://', '');
        }
        return username.split('.')[0];
    }

  // Loads the profile from the rdf service and handles the response
  async loadProfile() {
    try {
      this.loadingProfile = true;
      const profile = await this.rdf.getProfile();
      if (profile) {
        this.profile = profile;
        this.auth.saveOldUserData(profile);
      }

      this.loadingProfile = false;
      this.setupProfileData();
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  // Submits the form, and saves the profile data using the auth/rdf service
  async onSubmit () {
    if (!this.cardForm.invalid) {
      try {
        await this.rdf.updateProfile(this.cardForm);
        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
  }

  // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
  // and potentially format the address if we need to reformat it for this UI
  private setupProfileData() {
    if (this.profile) {
      this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
    } else {
      this.profileImage = '/assets/images/profile.png';
    }
  }

  // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
  logout() {
    this.auth.solidSignOut();
  }



  async addFriend() {
    try {
      this.rdf.addFriend(this.addWebId);
      this.snackBar.open('Friend successfully added', '', {
        duration: 2000,
        panelClass: ['snackbar-success']
      });
    } catch {
      console.log('The URI provided is not well-formed or does not point to a profile');
      this.snackBar.open('Friend does not exist or could not be added', '', {
        duration: 2000,
        panelClass: ['snackbar-error']
      });
    }
  }
}
