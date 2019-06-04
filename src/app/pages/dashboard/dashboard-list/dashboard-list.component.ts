import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboardService';
import { Router } from '@angular/router';

import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from '../../../../config/api.config';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @ViewChild('search') search:ElementRef;
  movies: MovieDTO[] = [];
  baseUrl: string = API_CONFIG.baseUrl;

  constructor(private dashboardService: DashboardService,
              private router: Router) { }

  ngOnInit() {
    this.getUpcomingMovies();
  }


  getUpcomingMovies(){
    this.dashboardService.getAllUpcoming(1).subscribe(
      (res) => this.onSuccess(res),
      error => alert('Error on loading results of upcoming!')
    )
  }


  onSuccess(res) {  
    if (res != undefined) {
      res.forEach(item => {  
        this.movies.push(item);
      });
    }  
  }  

}
