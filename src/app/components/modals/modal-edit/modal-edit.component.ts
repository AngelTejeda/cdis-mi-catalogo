import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  auto: Automovil = {} as Automovil;
  action: string = "Agregar";

  myForm: FormGroup = this.fb.group({});

  validationMessages: { [key: string]: { [error: string]: string } } = {
    "id": {
      "required": "El ID es requerido."
    },
    "cveveh": {
      "required": "El Cveveh es requerido."
    },
    "marca": {
      "required": "La marca es requerida.",
      "minlength": "La marca necesita al menos cuatro caracteres."
    },
    "submarca": {
      "required": "La marca es requerida.",
      "minlength": "La marca necesita al menos cuatro caracteres."
    },
    "descripcion": {
      "required": "La descripción es requerida."
    },
    "descripcioncorta": {
      "required": "La descripción corta es requerida."
    },
    "modelos": {
      "required": "El modelo es requerido.",
      "min": "El modelo debe ser mayor a 2000.",
      "max": "El modelo debe ser menor a 2020."
    },
    "ocupantes": {
      "required": "Los ocupantes son requeridos.",
      "min": "Debe haber al menos un ocupante."
    }
  };

  formErrors: { [key: string]: string | string[]} = { };

  sliderMinValue: number = 2000;
  sliderMaxValue: number = 2020;
  sliderOptions: Options = {
    floor: 2000,
    ceil: 2020
  };

  constructor(private modalRef: NgbActiveModal, private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.initializeFormGroup();
    
    this.myForm.valueChanges.subscribe(
      (data) => {
        console.log(this.formErrors);
        this.logValidationErrors(this.myForm);
      }
    );
  }

  initializeFormGroup(): void {
    this.myForm = this.fb.group({
      id: [this.auto._id, [
        Validators.required
      ]],
      cveveh: [this.auto.Cveveh, [
        Validators.required
      ]],
      marca: [this.auto.marca, [
        Validators.required,
        Validators.minLength(4)
      ]],
      submarca: [this.auto.submarca, [
        Validators.required,
        Validators.minLength(4)
      ]],
      descripcion: [this.auto.descripcion, [
        Validators.required
      ]],
      descripcioncorta: [this.auto.descripcioncorta, [
        Validators.required
      ]],
      ocupantes: [this.auto.Ocupantes, [
        Validators.required,
        Validators.min(1)
      ]]
    });

    if (this.auto.modelos) {
      this.sliderMinValue = parseInt(this.auto.modelos[0]);
      this.sliderMaxValue = parseInt(this.auto.modelos.slice(-1)[0]);
    }
  }

  logValidationErrors(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl: AbstractControl = group.get(key) as AbstractControl;

      if (abstractControl instanceof FormControl) {
        this.formErrors[key] = this.getErrorMessages(abstractControl, key);
      }
    });
  }

  getErrorMessages(control: FormControl, key: string): string {
    let errors = "";
    
    if (control && (!control.valid && control.dirty)) {
      const messages = this.validationMessages[key];

      for (const errorKey in control.errors) {
        if (errorKey) {
          errors += messages[errorKey] + " ";
        }
      }
    }

    return errors;
  }

  // Getters
  get id(): FormControl {
    return this.myForm.get('id') as FormControl
  }
  
  get cveveh(): FormControl {
    return this.myForm.get('cveveh') as FormControl
  }

  get marca(): FormControl {
    return this.myForm.get('marca') as FormControl
  }
  
  get submarca(): FormControl {
    return this.myForm.get('submarca') as FormControl
  }
  
  get descripcion(): FormControl {
    return this.myForm.get('descripcion') as FormControl
  }
  
  get descripcioncorta(): FormControl {
    return this.myForm.get('descripcioncorta') as FormControl
  }

  get ocupantes(): FormControl {
    return this.myForm.get('ocupantes') as FormControl
  }

  // Modal
  close(): void {
    let array: string[] = [];

    for (let i=this.sliderMinValue; i<= this.sliderMaxValue; i++) {
      array.push(i.toString());
    }

    this.auto._id = this.id.value;
    this.auto.Cveveh = this.cveveh.value;
    this.auto.marca = this.marca.value;
    this.auto.submarca = this.submarca.value;
    this.auto.descripcion = this.descripcion.value;
    this.auto.descripcioncorta = this.descripcioncorta.value;
    this.auto.modelos = array;
    this.auto.Ocupantes = this.ocupantes.value;

    this.modalRef.close(this.auto);
  }

  dismiss(): void {
    this.modalRef.dismiss();
  }

  
}
