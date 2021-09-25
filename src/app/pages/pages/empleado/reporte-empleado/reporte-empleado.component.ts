import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
import { EmpleadoService } from 'src/app/pages/services/empleado.service';

@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrls: ['./reporte-empleado.component.css']
})
export class ReporteEmpleadoComponent implements OnInit {

  id: string;
  empleado: any = {};

  constructor(private activatedRoute: ActivatedRoute, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getEmpleadoById(this.id);
  }

  getEmpleadoById(id: string){
    this.empleadoService.getEmpleadoById(id).subscribe((resp:any) => {
      this.empleado = resp['data']
      console.log('empleado', this.empleado);
    })
  }

  exportPDF(){
    const options = {

      margin:       0.2,
      filename:     `Ficha Ocupacional - ${this.empleado.nombre}.pdf`,
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    }

    const content: Element = document.getElementById('export-table');

    html2pdf().from(content).set(options).save();
  }

}
