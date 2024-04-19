import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';  


@Component({
  selector: 'Av2-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  public form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }
    
  get f(){
    return this.form.controls;
  }
   
  onSubmit(){
    console.log(this.form.value);

}
