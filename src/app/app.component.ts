import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Student } from './student.interface';
import { ageValidator } from './student.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  studentDataArray: Student[] = [
    {
      name: 'jun',
      age: 24
    },
    {
      name: 'ren',
      age: 24
    },
    {
      name: 'josh',
      age: 24
    },
    {
      name: 'abe',
      age: 23
    }
  ];


  studentForm: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) {
    this.studentForm = this._fb.group({
      students: this._fb.array([])
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.studentArray.setValidators([ageValidator]);
  }

  public get studentArray() {
    return this.studentForm.controls['students'] as FormArray;
  }

  initializeForm() {
    for (let i = 0; i < this.studentDataArray.length; i++) {
      const formGroup = this._fb.group({
        name: [{ value: this.studentDataArray[i].name, disabled: false}],
        age: [{value: this.studentDataArray[i].age, disabled: true}],
      });
      this.studentArray.push(formGroup);
      //this.studentArray.setValidators([ageValidator]);
    }
  }

  edit() {
    this.studentForm.enable();
  }

  reset() {
    this.studentForm.disable();
  }



}
