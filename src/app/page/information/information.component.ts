import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Daum, Root } from 'src/app/model/model';
import { SpecAPIService } from 'src/app/services/spec-api.service';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  value1: string = "off";

  getapi:Daum[] = [];
  constructor(private specService : SpecAPIService , private actiVateRoute:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.actiVateRoute.params.subscribe((response : any) => {
      this.getSpecAPI(response.id)
    })
  }
  getSpecAPI(id : number){
    this.specService.getAPI(id).subscribe((response:any) => {
      this.getapi = response.data
      console.log(this.getapi)
    })
  }
  clickActive: boolean = false
  togglePopup(){
    this.clickActive = !this.clickActive
  }


}
