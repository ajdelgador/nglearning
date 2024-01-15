import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  myField = new FormControl();
  name!: string;//comes from querystring

  onSubmit(): void {
    console.log('Form Values', this.contactForm.value)
  }

  constructor(private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onPatchValue();
    //this.onSetValue();
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    )
  }

  onPatchValue(): void {
    this.contactForm.patchValue({
      name: 'Alberto'
    })
  }
  onSetValue(): void {//set a value to all fields
    this.contactForm.setValue({
      comment: 'Hello World'
    })
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]

    });
  }

}
