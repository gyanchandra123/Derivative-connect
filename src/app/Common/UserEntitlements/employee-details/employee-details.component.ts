import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee.model';
import { EmployService } from '../shared/employee.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  childEmployeesData: Employee;

  private routeEmpId: number;

  constructor(private _employService: EmployService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

    // reading route parametr using the snapshot approach:
    //this.routeEmpId = +this._activatedRoute.snapshot.paramMap.get('id');

    // reading route parametr using the observable approach:
    this._activatedRoute.paramMap.subscribe(params => {
      this.routeEmpId = +params.get('id');

      this._employService.getEmployee(this.routeEmpId).subscribe((data: Employee) => {
        this.childEmployeesData = data,
          (error: any) => console.log(error);
      });
    })

  }



  viewNextEmploy(): void {

    if (this.routeEmpId < 4) {

      this.routeEmpId++;
      this._router.navigate(['/UserEntitlement/employees', this.routeEmpId], { queryParamsHandling: "preserve" })
    }
    else {
      this.routeEmpId = 1;
      this._router.navigate(['UserEntitlement/employees', this.routeEmpId], { queryParamsHandling: "preserve" })
    }

  }

}
