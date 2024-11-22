import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { furn } from './furniture';

@Injectable({
  providedIn: 'root'
})
export class FetchFurnitureService {

  constructor(private http: HttpClient) { }
  BaseUrl = "http://localhost:8080/api/furniture/all";

  getAllFurniture() {
    return this.http.get<furn[]>(this.BaseUrl);
  }
}
