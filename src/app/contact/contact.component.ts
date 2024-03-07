import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: NgForm;

  id!: string;//comes from url
  model = {
    name: "",
    checkAdult: true,
    department: "",
    comment: ""
  }

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']//valor viene por parametro de ruta
    })
  }
  //onSubmit(values: any)
  onSubmit() {
    console.log('Form Values', this.contactForm)
  }
}
