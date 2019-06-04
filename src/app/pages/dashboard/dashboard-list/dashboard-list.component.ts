import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from '../../../services/dashboardService';
import { Router } from '@angular/router';

import { MovieDTO } from '../../../../models/movie.dto';
import { API_CONFIG } from '../../../../config/api.config';
import { StorageService } from '../../../services/storageService';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {

  @ViewChild('search') search:ElementRef;
  movies: MovieDTO[] = [];
  baseUrl: string = API_CONFIG.baseUrl;
  page: number = 1;
  pageSearch: number = 1;
  searching: boolean = false;
  textSearch: string; 

  constructor(private dashboardService: DashboardService,
              private data: StorageService,
              private router: Router) { }

  ngOnInit() {
    if (this.data.getTextSearch() !== null){
      this.searchByName(this.data.getTextSearch());
      this.search.nativeElement.value = this.data.getTextSearch();
   }else{
     this.getUpcomingMovies();
   }
  }

  searchMovie() {
    this.textSearch = this.search.nativeElement.value;
    if (this.textSearch !== null && this.textSearch !== ""){
      if (this.textSearch != this.data.getTextSearch()){
        this.movies = [];
        this.pageSearch = 1;
      }
      this.data.setTextSearch(this.textSearch);
      this.searchByName(this.textSearch);
    }else{
      alert('Please, type something to search!');
    }
  }

  searchByName(text: string){
    this.searching = true;
    this.dashboardService.search(text, this.pageSearch).subscribe(
      (res) => this.onSuccessSearch(res),
      error => alert('Error on loading results of search!')
    )
  }

  getUpcomingMovies(){
    this.searching = false;
    this.data.setTextSearch(null);
    this.search.nativeElement.value = null;
    this.dashboardService.getAllUpcoming(this.page).subscribe(
      (res) => this.onSuccess(res),
      error => alert('Error on loading results of upcoming!')
    )
  }

  selectMovie(movie){
    this.data.setMovie(movie);
    this.router.navigate(['detail'], {skipLocationChange: true});
  }

  onSuccessSearch(res) {  
    if (res != undefined) {
      if (this.pageSearch === 1){  
        this.movies = [];
      }
      res.forEach(item => {  
        this.movies.push(item);
      });
    }  
  }
  
  onSuccess(res) {  
    if (res != undefined) {
      if (this.page === 1){  
        this.movies = [];
      }  
      res.forEach(item => {  
        this.movies.push(item);
      });
    }  
  } 

  onScroll(){  
    if (this.searching) {
      this.pageSearch = this.pageSearch + 1;
      this.searchMovie()
    }else{
      this.page = this.page + 1;
      this.getUpcomingMovies(); 
    } 
  }  

}
