import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../model/employee.model';


@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {

    // counter = 0;

    transform(allEmployee: Employee[], searchTerm: string): Employee[] {

        // use for checking the unwanted behaviour of the impure pipe
        /*  this.counter++;
         console.log(this.counter) */

        if (!allEmployee || !searchTerm) {
            console.log("PIPE FILTER");
            return allEmployee;
        }

        return allEmployee.filter(eachEmploy =>
            eachEmploy.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1

        )


    }


}