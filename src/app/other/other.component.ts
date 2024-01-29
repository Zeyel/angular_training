import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { Data } from '../../model/Data';


@Component({
  selector: 'app-other',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent implements AfterViewInit {

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  displayedColumns : string[] = ['id', 'name', 'rating', 'details'];
  dataSource = new MatTableDataSource(DATA);

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortChange(sortState : Sort) {
    if(sortState.direction)
      console.log("Sorting ascending");
    else
      console.log("Sorting descending");
  }

}





const DATA : Data[] = [
  {id: 1, name: "Data1", details: "Details1", rating: 5},
  {id: 2, name: "Data2", details: "Details2", rating: 4},
  {id: 3, name: "Data3", details: "Details3", rating: 3},
  {id: 4, name: "Data4", details: "Details4", rating: 2},
  {id: 5, name: "Data5", details: "Details5", rating: 1}
]
