import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AssignmentService {
  
  constructor(private http: HttpClient){}
  getAssignments():Observable<any>  {
    return this.http.get("http://localhost:3000/assigments")
  }
}

// let assigments = [{
//     "id": 1,
//     "text" : "First Assignment"
//   }, 
//   {
//     "id": 2,
//     "text" : "Second Assignment"
//   }
// ]