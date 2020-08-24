import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from './../../../core/models/persona';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.scss']
})
export class PersonaFormComponent implements OnInit {

  public action: string;
  public personaForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Persona,
    public dialogRef: MatDialogRef<PersonaFormComponent>,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setAction();
    this.buildForm();
  }

  buildForm(): void {
    this.personaForm = this.formBuilder.group({
      id: [this.data.id],
      nombre: [this.data.nombre, [Validators.required]],
      apellido: [this.data.apellido, [Validators.required]],
      dni: [this.data.dni, [Validators.required]]
    });
  }

  setAction(): void {
    this.action = this.data.id ? 'Editar' : 'Añadir';
  }

  onAction(): void {
    this.dialogRef.close({ event: this.action, data: this.personaForm.value });
  }

  errorHandling(control: string, error: string): boolean {
    return this.personaForm.controls[control].hasError(error);
  }

}
