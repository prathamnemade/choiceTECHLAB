import { Component, OnInit } from '@angular/core';
import { SessionTimeout } from '../commons/idleState';
import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { LocalDataService } from '../commons/common.constants';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName = "";
  constructor(private http: HttpClient, private router: Router, public localDataService: LocalDataService, private sessionTimeout: SessionTimeout, private idle: Idle, private keepalive: Keepalive) {
    this.sessionTimeout.sessiontimeout(idle, keepalive)
    console.warn("construct");
  }

  ngOnInit() {
    this.userName = localStorage.getItem('name')
    this.triggerpopoup = false;
  }
  logout() {
    this.router.navigate(['/login'])
    localStorage.removeItem('email')
    localStorage.removeItem('name')
  }
  triggerpopoup = false;
  valueToAdd = "";
  filterText = "";
  filteredList = []
  results;
  loading = false;
  logoutDummy() {
    this.triggerpopoup = true;
  }
  addTOadd() {
    this.localDataService.addArray.push(this.valueToAdd)
    console.warn(this.localDataService.addArray);

  }
  filterdata() {
    console.warn("keyup");
    this.filteredList = []
    this.localDataService.addArray.map(x => {
      if (x.includes(this.filterText)) {
        this.filteredList.push(x)
      }
    })

  }
  interceptors() {
    this.loading = true;

    this.getIpAddress().subscribe(data => {
      this.loading = false;
      this.results = data
    })
  }
  getIpAddress() {
    return this.http
      .get<{ ip: string }>('https://jsonip.com')
      .pipe(map(response => response || {}))

  }
}
