import { Component, OnInit } from '@angular/core';
import { WorkerService }  from '../../services/worker/worker.service';
import { Worker } from '../../model/worker.model';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.scss']
})
export class ListWorkerComponent implements OnInit {
  // Para get Workers
  Workers:any;
  workers: Worker[] = [];

  // answer - respuesta
  constructor(
    private workerService: WorkerService,
  ) {
    this.workerService.GetWorkers().subscribe(answer => {
      console.table(answer)
      this.Workers = answer;
    })
  }

  ngOnInit(): void {
    // Obtenemos datos con subscribe de la API
    this.workerService.getAllWorkers().subscribe(data => {
      this.workers = data;
    })
  }

  deleteworker(id:any, x:any) {
    if(window.confirm('¿Desea eliminar el registro?')) {
      this.workerService.Deleteworker(id).subscribe((respuesta) => {
        this.Workers.splice(x,1); 
        this.workerService.getAllWorkers().subscribe(data => {
          this.workers = data;
        })
      });
    }
  }
}
