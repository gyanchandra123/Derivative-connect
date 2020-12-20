import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployService } from '../shared/employee.service';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {



  // using seeter approach to detect the chaanges in the @input property in the parent.
  /*  private childEmployeesData: Employee;
 
   @Input()
   set employee(val: Employee) {
 
     console.log('PREVIOUS EMPLOYEE :'+(this.childEmployeesData?this.childEmployeesData.name:"NULL"));
     console.log('CURRENT EMPLOYEE :'+val.name);
     this.childEmployeesData = val;
   }
 
   get(): Employee {
     return this.childEmployeesData;
   } */

  // @Input() employeeId: any;

  @Input() childEmployeesData: Employee;

  @Input() searchTerm: string;

  optionalRouteEmpId: number;

  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  confirmDelete: boolean = false;

  isHidden: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _employService: EmployService) { }

  ngOnInit(): void {

    this.optionalRouteEmpId = +this._activatedRoute.snapshot.paramMap.get('optionalRouteEmpId');

  }


  // using ngOnChanges() approach to detect the chaanges in the @input property in the parent.
  ngOnChanges(eachChanges: SimpleChanges): void {

    //detecting changes for single changes in the input parameter:

    /* let previousEmployee = <Employee>eachChanges.childEmployeesData.previousValue;

    let currentEmployee = <Employee>eachChanges.childEmployeesData.currentValue;

    console.log(previousEmployee);
    console.log(currentEmployee);

    console.log(previousEmployee ? previousEmployee.name : 'NULL');
    console.log(currentEmployee.name) */


    //detecting changes for multiple changes in the input parameter:
    /* for (const eachKey of Object.keys(eachChanges)) {

      const eachInput = eachChanges[eachKey];

      console.log(eachInput);

    } */
  }


  //sending data from the child to the parent compoent using @output:
  /*   @Output() notify:EventEmitter<Employee> = new EventEmitter<Employee>();
  
    sendDataToParent():void{
      this.notify.emit(this.childEmployeesData);
    } */

  //sending data from the child to the parent compoent using templatRef variable approach:
  sendDataToParent(): string {
    return this.childEmployeesData.name + " " + this.childEmployeesData.gender;
  }


  //view next employ:
  viewNextEmploy(): void {
    this._router.navigate(['UserEntitlement/employees', this.childEmployeesData.id], { queryParams: { 'empName': this.searchTerm } });
  }

  editEmployee(): void {
    this._router.navigate(['UserEntitlement/edit', this.childEmployeesData.id]);
  }

  deleteEmploy(): void {
    this._employService.deleteEmployee(this.childEmployeesData.id).subscribe(
      () => {
        console.log('employee with the id :' + this.childEmployeesData.id + 'is deleted');
      }
    );
    this.notifyDelete.emit(this.childEmployeesData.id);
  }


}
