import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup!:FormGroup

  title = 'dynamicReativeforms';
  
  formConfig = [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
      minLength: 2,
      maxLength: 50
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    // Add more form controls as needed
  ];
  

  constructor(private formBuilder:FormBuilder){}


  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({});
    this.createFormControls();
    // this.formConfig.forEach(control => {
    //   const { name, validation, value } = control;
    //   const formControl = this.formBuilder.control(value, validation);
    //   this.formGroup.addControl(name, formControl);
    // });

  //   const dynamicJsonData = {
  //   // Your dynamic JSON data here
  //   // Example:
  //   name: '',
  //   email: '',
  //   age: ''
  //  };

   //this.generateForm(dynamicJsonData);
  }

  createFormControls() {
    for (const field of this.formConfig) {
      const validators = [];

      if (field.required) {
        validators.push(Validators.required);
      }

      if (field.minLength) {
        validators.push(Validators.minLength(field.minLength));
      }

      if (field.maxLength) {
        validators.push(Validators.maxLength(field.maxLength));
      }

      if (field.pattern) {
        validators.push(Validators.pattern(field.pattern));
      }

      this.formGroup.addControl(field.name, this.formBuilder.control('', validators));
    }
  }
  // generateForm(jsonData: any) {
  //   const formControlsConfig:any = {};
    
  //   // Iterate over the JSON properties and create form controls dynamically
  //   for (const key in jsonData) {
  //     if (jsonData.hasOwnProperty(key)) {
  //       const value = jsonData[key];
        
  //       // Set default value and validation rules as per your requirements
  //       formControlsConfig[key] = new FormControl(value, Validators.required);
  //     }
  //   }
    
  //   // Create the form group using the form controls configuration
  //   this.formGroup = this.formBuilder.group(formControlsConfig);
  // }

  onSubmit() {
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      // Do something with the form data
      console.log(formData);
    } else {
      // Handle form validation errors
    }
  }
  //With these steps, you can dynamically generate an Angular reactive form based on your dynamic JSON data. The form controls will be created based on the properties in the JSON, and you can define validation rules and default values as needed.
  
  
  
  
  
  
  
}
