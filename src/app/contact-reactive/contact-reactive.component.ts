import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  myField = new FormControl();
  name!: string;//comes from querystring
  departments: string[] = [];
  selectedCity$ = this.dataSvc.selectedCity$;
  
  onSubmit(): void {
    console.log('Form Values', this.contactForm.value)
  }
  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly dataSvc: DataService) { }

  ngOnInit(): void {
    this.route.snapshot.data['departments']; //resolver
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
