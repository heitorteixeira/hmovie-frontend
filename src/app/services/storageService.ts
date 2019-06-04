import { Injectable } from '@angular/core';
import { MovieDTO } from 'src/models/movie.dto';
import { STORAGE_KEYS } from "../../config/storage.config";

@Injectable({
    providedIn: 'root'
  })
export class StorageService {

  getMovie() : MovieDTO {
    let str = localStorage.getItem(STORAGE_KEYS.movie);
    if (str == null){
        return null;
    }else{
        return JSON.parse(str);
    }
  }

  setMovie(obj : MovieDTO){
    if (obj == null){
        localStorage.removeItem(STORAGE_KEYS.movie);
    }else{
        localStorage.setItem(STORAGE_KEYS.movie, JSON.stringify(obj));
    }
  }

  getTextSearch() : string {
    let str = localStorage.getItem(STORAGE_KEYS.textSearch);
    if (str == null){
        return null;
    }else{
        return JSON.parse(str);
    }
  }

  setTextSearch(obj : string){
    if (obj == null){
        localStorage.removeItem(STORAGE_KEYS.textSearch);
    }else{
        localStorage.setItem(STORAGE_KEYS.textSearch, JSON.stringify(obj));
    }
  }

}