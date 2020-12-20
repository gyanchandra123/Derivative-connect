import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployService } from '../shared/employee.service';

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-add.component.css']
})

export class ListEmployeeComponent implements OnInit {
  error: string;

  employees: Employee[];

  filteredEmployees: Employee[];

  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {   
    this._searchTerm = value;
    this.filteredEmployees = this.filteringEmployee(value);

  }

  filteringEmployee(filteredEmployeeName: string): Employee[] {

    return this.employees.filter(eachEmploy =>
      eachEmploy.name.toLowerCase().indexOf(filteredEmployeeName.toLowerCase()) !== -1

    )

  }





  constructor(private employService: EmployService,
    private _router: Router,
    private _activateRoute: ActivatedRoute,
  ) {

    const resolveEmployListOrError: Employee[] | string = this._activateRoute.snapshot.data['employResolveService'];

    if (Array.isArray(resolveEmployListOrError)) {
      this.employees = resolveEmployListOrError;
    }
    else {
      this.error = resolveEmployListOrError;
    }


    this.filteredEmployees = this.employees;

    const searchTermExistORnot = this._activateRoute.snapshot.queryParamMap.has('empName');

    if (searchTermExistORnot) {
      this.searchTerm = this._activateRoute.snapshot.queryParamMap.get('empName');
    }
    else {
      this.filteredEmployees = this.employees;
    }

  }

  /*  ngOnInit() {
 
     this.employees = this.employService.getEmployees();
     this.employeeToDisplay = this.employees[0];
   }
 
    employeeToDisplay: Employee;
   arrayIndex: number = 1;
   childData: Employee;
 
   viewNexEmployee(): void {
 
     if (this.arrayIndex <= 3) {
       this.employeeToDisplay = this.employees[this.arrayIndex]
       this.arrayIndex++;
     }
     else{
       this.employeeToDisplay = this.employees[0];
       this.arrayIndex =1;
 
     }
   }
   
    getDataFromChild(data: Employee): void {
    this.childData = data;
  }

   */

  ngOnInit() {
  }

  //p[assing data to the route]
  onClick(empID: number): void {
    this._router.navigate(['/employees', empID], { queryParams: { 'empName': this.searchTerm } });
  }

  //applying pure pipe:

  changingEmployName(): void {

    /*  //checking for string value change:
     //this.employees[0].name = 'JORDAN';
 
     //checking for object reference  change:
     const newEmployList = Object.assign([], this.employees);
     newEmployList[0].name = "JORDAN";
     this.employees = newEmployList;
 
     //checking for property value change: WHen pure pipe is not executed
     this.employees[0].name = 'JORDAN'; */

    //applying filtering through the filter process written inside the component:
    this.employees[0].name = 'JORDAN';
    this.filteredEmployees = this.filteringEmployee(this._searchTerm);

  }

  //applying impure pipe:-
  /* onMOuseMove(){

  } */

  deleteNotifyEmployee(dataId: any): void {
    const foundIndex = this.filteredEmployees.findIndex(eachEmployee => eachEmployee.id === dataId);

    if (foundIndex !== -1) {
      this.filteredEmployees.splice(foundIndex, 1)
    }
  }
}
