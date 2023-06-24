import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamictypejsonformwith-validation-error',
  templateUrl: './dynamictypejsonformwith-validation-error.component.html',
  styleUrls: ['./dynamictypejsonformwith-validation-error.component.css']
})
export class DynamictypejsonformwithValidationErrorComponent implements OnInit {

  dynamicForm!: FormGroup;
  formFields: any[] =[]; // Array to hold the parsed JSON data
  formStructure = [
    {
      type: 'input',
      label: 'Name',
      name: 'name',
      validations: [
        { type: 'required', message: 'Name is required' },
        { type: 'minLength', value: 3, message: 'Name should have at least 3 characters' }
      ]
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      options: ['USA', 'Canada', 'UK']
    },
    // Add more form control definitions as needed
  ];
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.dynamicForm = this.formBuilder.group({});
    this.formStructure.forEach(control => {
      const validatorsArray:any = [];
      if (control.validations) {
        control.validations.forEach(validation => {
          if (validation.type === 'required') {
            validatorsArray.push(Validators.required);
          } else if (validation.type === 'minLength') {
            validatorsArray.push(Validators.minLength(7));
          }
          // Add more validation types as needed
        });
      }

      this.dynamicForm.addControl(
        control.name,
        this.formBuilder.control('', validatorsArray)
      );
    });
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      // Form is valid, perform necessary actions with the form data
      const formData = this.dynamicForm.value;
      console.log(formData);
    } else {
      // Form is invalid, display validation errors
      console.log('Form is invalid');
    }
  }
}
