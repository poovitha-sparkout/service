import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private Httpclient:HttpClient ) { }

  getData():Observable<any>{
    return this.Httpclient.get(' https://jsonplaceholder.typicode.com/posts');
  }
  postData(data: any): Observable<any> {
    return this.Httpclient.post(' https://jsonplaceholder.typicode.com/posts', data);
}


}