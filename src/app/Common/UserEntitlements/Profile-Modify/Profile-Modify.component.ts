
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Department } from '../model/department';
import { Employee } from '../model/employee.model';
import { EmployService } from '../shared/employee.service';

@Component({
  selector: 'app-profile-Modify',
  templateUrl: './profile-modify.component.html',
  styleUrls: ['./profile-modify.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CreateEmployeeComponent implements OnInit {

  gender = 'male';
  isActive = true;
  department = '2';
  panelTitle: string;

  //accessing form directly in the component:
  @ViewChild('empFormTemplate') public createEmployForm: NgForm;

  departments: Department[] = [
    {
      id: 1,
      name: 'Help Desk'
    },

    {
      id: 2,
      name: 'Hr'
    },

    {
      id: 3,
      name: 'IT'
    },
    {
      id: 4,
      name: 'PayRoll'
    }

  ];

  datePickerConfig: Partial<BsDatepickerConfig>;

  btnToggle = false;
  imageToggle = false;
  imageBtn = 'show';

  employee: Employee;

  constructor(private _employService: EmployService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {

    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-red',
      showWeekNumbers: false,
      inputDateFormat: "DD/MM/YYYY",
      minDate: new Date(2019, 12, 18),
      maxDate: new Date(2020, 12, 31),
      isAnimated: true
    });


  }


  ngOnInit() {

    this._activatedRoute.paramMap.subscribe(routeIdParamMap => {
      const employRouteId = +routeIdParamMap.get('id');

      console.log("IDDDD ngOnit", employRouteId);
      this.getEmployeeById(employRouteId);
    })

  }


  //after using the HTTPclient :method
  getEmployeeById(empRouteId: number): void {

    if (empRouteId === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        email: null,
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
        password: null,
        confirmPassword: null
      }
      this.panelTitle = 'Create';

      // / ********************BIG ISSUE SOLVED*******************************

      this.createEmployForm ? this.createEmployForm.reset() : this.createEmployForm;

      this.createEmployForm.controls.email.valueChanges.subscribe(
        (data) => {
          console.log(data)
        }
      )




    } else {
      this.panelTitle = 'Edit';
      this._employService.getEmployee(empRouteId).subscribe((data: Employee) => {

        this.employee = data,
          (error: any) => console.log(error);


      });
    }
  }



  //save method before applying using the HTTPClient method:post
  saveEmployee(eachEmployee: NgForm) {

    // saving new employ to the DB:
    if (this.employee.id === null) {
      this._employService.addEmploy(this.employee).subscribe(
        (data: Employee) => {
          console.log(data)
          eachEmployee.reset();
          this._router.navigate(['UserEntitlement/list']);
        },
        (error: any) => console.log(error)
      );
    } else {

      this._employService.updateEmploy(this.employee).subscribe(
        () => {
          eachEmployee.reset();
          this._router.navigate(['UserEntitlement/list']);
        },
        (error: any) => console.log(error)
      );

    }
  }


  loadSomeValues(eachEmployee: NgForm): void {
    eachEmployee.reset({
      name: 'gyan',
      gender: "male",
      email: "gy@google.com",
      phoneNumber: 899879987,
      contactPreference: "email",
    })
  }


  photoPathDetection() {
    this.btnToggle = true;
  }

  toggleImage() {

    this.imageToggle = !this.imageToggle;
    /*  if (this.imageToggle == false) {
       this.imageToggle = true;
       this.imageBtn = 'hide'    
     }
 
     else {
       this.imageToggle = false;
       this.imageBtn = 'show'
     } */

  }



  checking(data: any) {
    console.log('INPUT CHECK:', data)
  }



}
