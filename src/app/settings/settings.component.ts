import { Component, OnInit } from '@angular/core';
import { TestingService } from '../services/testing.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  webId: string;
  message: string;

  constructor(private testingService: TestingService) { }

  ngOnInit() {
  }



  send() {
    this.testingService.sendMessage(this.webId, this.message);
  }

  check() {
    
  }
}
