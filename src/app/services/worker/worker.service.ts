import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../../model/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  api:string = 'http://localhost/empleados/';

  constructor(
    private http: HttpClient,
  ) { }

  Addworker(dataWoker: Worker):Observable<any> {
    // "?insertar=1" Esto es para conectar con el PHP
    return this.http.post(this.api + "?insertar=1", dataWoker);
  }
  GetWorkers() {
    return this.http.get(this.api);
  }
  Editworker(id:any, dataWoker: Worker):Observable<any> {
    return this.http.post(this.api + "?actualizar="+id, dataWoker);
  }
  Deleteworker(id:any):Observable<any> {
    return this.http.get(this.api + "?borrar="+id);
  }

  getAllWorkers() {
    return this.http.get<Worker[]>(this.api);
  }

  GetWorker(id:any):Observable<any> {
    console.log("id: "+id);
    return this.http.get(this.api + "?consultar="+id);
  }
}
