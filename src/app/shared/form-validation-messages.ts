import { AbstractControl } from "@angular/forms";

const VALIDATION_MESSAGES: {[key: string]: (error: any) => string} = {
    "required": (error: any): string => {
      return `El campo es requerido`;
    }, 
    "min": (error: any) => {
      return `Ingrese un valor mayor a ${error.min}.`;
    },
    "max": (error: any) => {
      return `Ingrese un valor menor a ${error.max}.`;
    },
    "minlength": (error: any) => {
      return `El campo debe tener al menos ${error.requiredLength} caracteres.`;
    }
};

export function getValidationMessages(control: AbstractControl): string[] {
    let messages = [];

    for (const errorKey in control.errors) {
      const messageFunction = VALIDATION_MESSAGES[errorKey];
      const message = messageFunction(control.errors[errorKey]);
      
      messages.push(message);
    }
    
    return messages;
}