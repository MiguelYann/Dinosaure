import { DataSource } from '@angular/cdk/table';
import { ApiService } from '../api.service';

export class DinosaureDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getDinosaures();
  }

  disconnect() {

  }
}
