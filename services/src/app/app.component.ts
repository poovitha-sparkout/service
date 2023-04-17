import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'services';
  
  showPassword = false;
  showDOB = true;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleDOB() {
    this.showDOB = !this.showDOB;
  }

[x: string]: any;
data: any;
newData:any;
myForm !: FormGroup 
form !: FormGroup;
fb: any;


constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService) { }


ngOnInit() {
  this.form = this.fb.group({});
  this.myForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
    
  });
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [true]
  });
  
}
onSubmit() {
    const formData = this.myForm.value;
    this.apiService.postData(formData).subscribe((response: any) => {
      console.log(response);
    });

   
      if (this.form.valid) {
        const formData = this.form.value;
        this['http'].post('/api/submit-form', formData).subscribe(
          (response: any) => {
            console.log(response);
           
            this.form.patchValue({rememberMe: false});
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    }
    
  }

  
  



