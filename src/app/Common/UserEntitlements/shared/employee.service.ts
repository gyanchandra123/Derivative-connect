import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';



@Injectable()
export class EmployService {
    /*  D:\interview\suchi frontend\src\app\Common\UserEntitlements\URL\URL.ts */

 
    baseUrl = 'http://localhost:3000/employees';

    constructor(private httpClient: HttpClient) {


    }


    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl).
            pipe(catchError(this.handleError));
    }


    private handleError(errorResponse: HttpErrorResponse) {

        if (errorResponse.error instanceof ErrorEvent) {
            console.log('Cleint side error :' + errorResponse.error.message)
        }
        else {
            console.log('server side error :' + errorResponse.error.message);
        }

        // return an observable with a meaningful error message to the end user
        return throwError('"There is a problem with the service We are notified & working on it.Please try again later."');


    }


    //post:    

    addEmploy(recievedEmploy: Employee): Observable<Employee> {

        return this.httpClient.post<Employee>(this.baseUrl, recievedEmploy, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError))


    }

    updateEmploy(recievedEmploy: Employee): Observable<void> {

        return this.httpClient.put<void>(`${this.baseUrl}/${recievedEmploy.id}`, recievedEmploy, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).pipe(catchError(this.handleError))
    }

    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }



    deleteEmployee(empID: number): Observable<void> {

        return this.httpClient.delete<void>(`${this.baseUrl}/${empID}`)
            .pipe(catchError(this.handleError));

    }


}