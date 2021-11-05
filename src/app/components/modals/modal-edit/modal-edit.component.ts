import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/shared/models';
import { getValidationMessages } from 'src/app/shared/form-validation-messages';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  auto: Automovil = {} as Automovil;
  action: string = "Agregar";

  myForm: FormGroup = this.fb.group({});

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

  getValidationMessages(control: AbstractControl): string[] {
    return getValidationMessages(control);
  }

  isValid(control: AbstractControl) {
    return control.valid || control.pristine;
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
