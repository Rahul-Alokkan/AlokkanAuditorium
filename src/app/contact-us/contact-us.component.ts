import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';  


@Component({
  selector: 'Av2-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  // myForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
  //   });
  // }

  // get phone() {
  //   return this.myForm.get('phone');
  // }

  // onSubmit() {
  //   // Handle form submission
  //   if (this.myForm.valid) {
  //     console.log('Form submitted successfully with mobile number:', this.myForm.value.phone);
  //   }
  // }

}
