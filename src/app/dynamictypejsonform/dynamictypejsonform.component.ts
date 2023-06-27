import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const dynamicFormData = `
[
  {
    "name": "subscribe",
    "label": "Subscribe to Newsletter",
    "type": "checkbox",
    "required": false,
    "checked": false
  },
  {
    "name": "firstName",
    "label": "First Name",
    "type": "text",
    "required": true
  },
  {
    "name": "lastName",
    "label": "Last Name",
    "type": "text",
    "required": true
  },
  {
    "name": "email",
    "label": "Email",
    "type": "email",
    "required": true
  }
]
`;

@Component({
  selector: 'app-dynamictypejsonform',
  templateUrl: './dynamictypejsonform.component.html',
  styleUrls: ['./dynamictypejsonform.component.css']
})
export class DynamictypejsonformComponent implements OnInit {

  dynamicForm!: FormGroup;
  dynamicForm2!: FormGroup;
  dynamicForm3!: FormGroup;
  dynamicFormData:any[] = [];
  formFields: any[] = []; // Array to hold the parsed JSON data
  checkedValue:any;
  constructor(private formBuilder: FormBuilder, private renderer:Renderer2, private el: ElementRef) {}
  
  ngOnInit(): void {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
    // Parse your JSON data and extract necessary information
    const jsonData = `
      [
        { 
          "type": "text", 
          "name": "lastname", 
          "inputType": "text", 
          "label": "Last Name",
          "value":"Chakraborty",
          "isDisable": true
        },
        { 
          "type": "textarea", 
          "name": "description", 
          "label": "Put Your Sample Description",
          "value" : "" 
        },
        { 
          "type": "select", 
          "name": "category", 
          "label": "Describe the Category", 
          "Default": "Please Select from Option...",
          "value" : "",
          "options": [
            { "label": "Option 1", "value": "option1" },
            { "label": "Option 2", "value": "option2" },
            { "label": "Option 3", "value": "option3" }
          ]
        },
        { 
        "type": "checkbox", 
        "name": "Gender",
        "checked": "false",
        "inputType": "checkbox", 
        "label": "Remember the Position",
        "value" : ""
        },
        { 
          "type": "text", 
          "name": "firstname", 
          "inputType": "text", 
          "label": "First Name",
          "value":"Partha",
          "isDisable": true 
        }
      ]
    `;

    this.formFields = JSON.parse(jsonData);
    console.log("this.formFields",this.formFields);
    // Dynamically create form controls and form groups based on the extracted information
    const formGroupConfig:any = {};
      this.formFields.forEach((field)=>{
      formGroupConfig[field.name] = new FormControl('', Validators.required);
      if(field.type === "checkbox"){
        field.isChecked = JSON.parse(field.checked);
        formGroupConfig[field.name] = new FormControl(field.isChecked, Validators.requiredTrue);
      }
      if(field.value !=""){
        formGroupConfig[field.name] = new FormControl(field.value);
      }
    });
    console.log("this.formFields#####",this.formFields);
    // Build the form using the generated form controls and form groups
    this.dynamicForm = this.formBuilder.group(formGroupConfig);

    this.dynamicForm2 = this.formBuilder.group({
      acceptTerms: [false, Validators.requiredTrue]
    });


    this.dynamicForm3 = this.formBuilder.group({});
    this.dynamicFormData = JSON.parse(dynamicFormData); // Assuming you have the dynamic JSON data available

    // Loop through the dynamic form data and create form controls dynamically
    for (const field of this.dynamicFormData) {
      const validators = field.required ? [Validators.required] : [];
      
      if (field.type === 'checkbox') {
        const initialValue = field.checked || false; // Set initial checked state
        this.dynamicForm3.addControl(field.name, new FormControl(initialValue, Validators.requiredTrue));
      } 
      else if(field.type === "email"){
          validators.push(Validators.email);
          this.dynamicForm3.addControl(field.name, this.formBuilder.control('', validators));
      }
      else {
        this.dynamicForm3.addControl(field.name, this.formBuilder.control('', validators));
      }
    }
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      // Handle form submission and perform necessary actions
      console.log("successful:$$$$###",this.dynamicForm.value);
    } else {
      // Form is invalid, display validation errors
      console.log('Form is invalid');
      console.log('$$$$$',this.dynamicForm);
      console.log('$$$$$',this.dynamicForm.value);
      //console.log("this.formFields#####",this.formFields);
    }
  }
  onSubmit2() {
    console.log(this.dynamicForm2.value);
  }

  onSubmit3() {
    if (this.dynamicForm3.valid) {
      // Form is valid, do your submission logic here
      console.log(this.dynamicForm3.value);
      console.log(this.dynamicForm3);
    } else {
      // Form is invalid, display error messages or handle as needed
      console.log("unsuccessful",this.dynamicForm3.value);
      console.log(this.dynamicForm3);
    }
  }
}
