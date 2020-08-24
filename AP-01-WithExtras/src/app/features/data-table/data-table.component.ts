import { MatSnackBar } from '@angular/material/snack-bar';
import { DataTableService } from './data-table.service';
import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() title = 'Tabla';
  @Input() icon = 'table_chart';
  @Input() endpoint: string;
  @Input() displayedColumns: string[];
  @Input() formDialog: TemplateRef<any>;

  public dataSource: MatTableDataSource<object> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dataTableService: DataTableService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.dataTableService.findAll(this.endpoint)
      .subscribe((result: object[]) => {
        this.dataSource.data = result;
        this.notifyTable();
      });
  }

  onSubmit(object: any): void {
    // Metodo manejar el alta o la edición de un registro.
    this.dialog.open(this.formDialog, {
      disableClose: true,
      data: object
    }).afterClosed().subscribe(result => {
      if (result.event === 'Añadir') {
        this.create(result.data);
      } else if (result.event === 'Editar') {
        this.update(result.data);
      }
    });
  }

  onDelete(object: any): void {
    // Metodo manejar la baja de un registro.
    if (confirm('¿Está seguro que desea eliminar este registro?')) {
      this.delete(object.id);
    }
  }

  create(object: any): void {
    this.dataTableService.create(this.endpoint, object).subscribe((result) => {
      this.dataSource.data.unshift(result);
      this.success('Añadido!, Se ha añadido correctamente.');
    });
  }

  update(object: any): void {
    this.dataTableService.update(this.endpoint, object, object.id).subscribe(() => {
      this.dataSource.data.filter((value: any) => {
        if (value.id === object.id) {
          const index = this.dataSource.data.indexOf(value);
          this.dataSource.data[index] = object;
        }
      });
      this.success('Actualizado!, Se ha actualizado correctamente.');
    });
  }

  delete(id: number): void {
    this.dataTableService.delete(this.endpoint, id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((value: any) =>
        value.id !== id
      );
      this.success('Eliminado!, Se ha eliminado correctamente.');
    });
  }

  success(text: string): void {
    this.snackBar.open(text, 'OK', { duration: 1000 });
    this.notifyTable();
  }

  notifyTable(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
