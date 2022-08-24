import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpecAPIService {
  baseUrl : string = 'http://dev-sw6-uapi.ecm.in.th/uapi/drt-ElectronicsDocument'


  constructor(private http : HttpClient) { }

  getAPI(id:number){
    return this.http.get(`${this.baseUrl}/ED-GetNews?EmployeeId=${id}`)
  }
}
