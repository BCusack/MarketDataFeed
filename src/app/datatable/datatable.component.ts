import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  data: any;
  constructor(private data_service: DataserviceService) { }

  ngOnInit() {
    this.get_data()
  }
  get_data() {
    return this.data_service.get_all()
      .subscribe(data => {
        this.data = data;
        console.log(this.data)
      });
  }

}
