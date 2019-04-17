import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { DinosaureDataSource } from './DinosaureDataSource';


@Component({
  selector: 'app-dinosaures',
  templateUrl: './dinosaures.component.html',
  styleUrls: ['./dinosaures.component.css']
})
export class DinosauresComponent implements OnInit {
  // Ajout de l'attribut pour garder toute la liste des dinosaures

dinosaure: any;
displayedColumns = ['age', 'famille', 'Race'];
dataSource = new DinosaureDataSource(this.api);

 // Injection de l'API dans le composant
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDinosaures()
    .subscribe(res => {
      console.log(res);
      this.dinosaure = res;
    }, err => {
      console.log(err);
    });
  }

}
