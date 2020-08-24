import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { DataTableModule } from './../data-table/data-table.module';
import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { PersonaTableComponent } from './persona-table/persona-table.component';


@NgModule({
  declarations: [PersonaFormComponent, PersonaTableComponent],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    DataTableModule
  ]
})
export class PersonaModule { }
