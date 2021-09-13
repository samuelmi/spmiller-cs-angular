import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/entry';
import { AdminService } from '../services/admin-service.service';

@Component({
  selector: 'admin-component',
  templateUrl: './admin-component.component.html'
})
export class AdminComponentComponent implements OnInit {
  token: string = "";

  pendingEntries: Entry[];


  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  getPendingEntries() {
    this.adminService.getPendingEntries(this.token).subscribe(data => {
      this.pendingEntries = data
      console.log(this.pendingEntries);
    });
  }

}
