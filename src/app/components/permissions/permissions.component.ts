import { Component, OnInit } from '@angular/core';
import { RdfService } from '../../services/rdf.service';
import { AuthService } from '../../services/solid.auth.service';

declare let solid: any;
@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {



  constructor(private rdf:RdfService,private auth: AuthService) { }

  ngOnInit() {
    
  }

  givePermission(fileUrl:string){

    if(this.auth.isSessionActive())
    {

      //this.rdf.setPermissions(fileUrl,"https://luispastrana.inrupt.net/profile/card#me");
    }
  }

 
}
