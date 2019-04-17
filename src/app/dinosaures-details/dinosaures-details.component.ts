import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dinosaures-details',
  templateUrl: './dinosaures-details.component.html',
  styleUrls: ['./dinosaures-details.component.css']
})
export class DinosauresDetailsComponent implements OnInit {
dinosaures: any;
constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getDinosaureDetails(this.route.snapshot.params['id']);

  }

  getDinosaureDetails(id:any) {
    this.api.getDinosaure(id)
      .subscribe(data => {
        console.log(data);
        this.dinosaures = data;
      });
  }
  deleteBook(id) {
    this.api.deleteDinosaure(id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
