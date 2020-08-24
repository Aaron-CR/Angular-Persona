import { Component, OnInit } from '@angular/core';
import { PersonaFormComponent } from '../persona-form/persona-form.component';

@Component({
  selector: 'app-persona-table',
  templateUrl: './persona-table.component.html',
  styleUrls: ['./persona-table.component.scss']
})
export class PersonaTableComponent implements OnInit {

  public title = 'Tabla de Personas';
  public icon = 'account_box';
  public endpoint = 'http://localhost:9000/api/v1/personas';
  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'dni'];
  public formDialog = PersonaFormComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
