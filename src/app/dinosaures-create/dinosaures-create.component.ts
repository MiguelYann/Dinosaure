import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-dinosaures-create',
  templateUrl: './dinosaures-create.component.html',
  styleUrls: ['./dinosaures-create.component.css']
})
export class DinosauresCreateComponent implements OnInit {

  DinosForm: FormGroup;
 age: Number;
famille: string='';
Race: string='';
nourriture: string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.DinosForm = this.formBuilder.group({
      age : [0, Validators.required],
      famille : [null, Validators.required],
      Race : [null, Validators.required],
      nourriture : [null, Validators.required],

    });
  }

  onFormSubmit(form:NgForm) {
  this.api.postDinosaure(form)
    .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/dinosaures-details', id]);
      }, (err) => {
        console.log(err);
      });
}

}
