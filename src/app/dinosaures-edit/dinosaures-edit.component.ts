import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-dinosaures-edit',
  templateUrl: './dinosaures-edit.component.html',
  styleUrls: ['./dinosaures-edit.component.css']
})
export class DinosauresEditComponent implements OnInit {
  DinosForm: FormGroup;
  id: string = '';
  age: string = '';
  famille: string = '';
  Race: string = '';
  nourriture: string = '';
  p
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDinosaure(this.route.snapshot.params['id']);
  this.DinosForm = this.formBuilder.group({
    age: [null, Validators.required],
    famille : [null, Validators.required],
    Race : [null, Validators.required],
    nourriture : [null, Validators.required],

  });
  }
  getDinosaure(id) {
    this.api.getDinosaure(id).subscribe(data => {
      this.id = data._id;
      this.DinosForm.setValue({
        age: data.age,
        famille: data.famille,
        Race: data.Race,
        nourriture: data.nourriture,
      });
    });
  }
  onFormSubmit(form:any) {
    this.api.updateDinosaure(form)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/dinosaures-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
  DinosaureDetails() {
    this.router.navigate(['/dinosaures-details', this.id]);
  }


}
