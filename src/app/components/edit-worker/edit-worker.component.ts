import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkerService }  from '../../services/worker/worker.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.scss']
})
export class EditWorkerComponent implements OnInit {
  formGroup: FormGroup;

  id:any;

  constructor(
    public formulario:FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private workerService: WorkerService,
    private router: Router,
  ) {
    // Para capturar un parametro - id de list para editar
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // subscribe para obtener la información
    this.workerService.GetWorker(this.id).subscribe(respuesta => {
      console.table(respuesta);
      // valor 0 que vino de la API
      this.formGroup.setValue({
        nombre: respuesta[0]['nombre'],
        correo: respuesta[0]['correo'],
      })
    })

    this.formGroup = this.formulario.group({
      nombre:[''],
      correo:[''],
    })
  }

  ngOnInit(): void {
  }

  sendData():any {
    console.log('form workers' + this.formGroup.value);
    console.log(this.id);
    this.workerService.Editworker(this.id, this.formGroup.value).subscribe(() => {
      this.router.navigateByUrl('/list-worker');
    });
  }

}
