import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from '../../../../config/api.config';
import { StorageService } from '../../../services/storageService';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css']
})
export class DashboardDetailComponent implements OnInit {

  movie: MovieDTO;
  baseUrl: string = API_CONFIG.baseUrl;

  constructor(public data: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.movie = this.data.getMovie();
  }

  back(){
    this.router.navigate([''], {skipLocationChange: true});
  }
}
