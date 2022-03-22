import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker/worker.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {

  formWorkers:FormGroup;
  
  // Lo de form no se utiliza
  constructor(
    public formulario:FormBuilder, 
    private workerService: WorkerService,
    private router: Router,
  ) {
    this.formWorkers = this.formulario.group({
      nombre:[''],
      correo:[''],
    })
  }

  ngOnInit(): void {
  }

  sendData():any {
    console.log('form workers' + this.formWorkers.value);
    this.workerService.Addworker(this.formWorkers.value).subscribe(() => {
      this.router.navigateByUrl('/list-worker');
    });
  }
}
