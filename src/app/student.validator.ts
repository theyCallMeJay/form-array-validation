import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export function ageValidator(control: AbstractControl) {
    const formArray = control as FormArray;
    console.log(formArray.length);
   /*  for (let i = 0; i < formArray.length; i++) {
        for (let j = i + 1; j < formArray.length; j++) {
            if
        }
    } */
    let i = 0;
    let j = 1;
    while ( i < formArray.length - 1) {
        const groupi = formArray.controls[i] as FormGroup;
        const groupj = formArray.controls[j] as FormGroup;
        console.log(groupj.controls['age'].value);
        console.log(groupi.controls['age'].value);
        console.log(groupj.controls['age'].value - groupi.controls['age'].value);
        console.log(Number(groupj.controls['age'].value) - Number(groupi.controls['age'].value));
        if (Number(groupj.controls['age'].value - groupi.controls['age'].value).toFixed(2) !== String(0.01) ) {
            return {verywrong: true};
        }
        i++;
        j++;
    }
    return null;
}

export function fpArithmetic (op, x, y) {
    const n = {
        '*': x * y,
        '-': x - y,
        '+': x + y,
        '/': x / y
    }[op];

    return Math.round(n * 100) / 100;
}
