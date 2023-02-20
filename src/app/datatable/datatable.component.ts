import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  data: any;
  dataSource!: any[];
  displayedColumns: string[] = ['symbol', 'change', 'abs_change', 'volume'];
  error!: string;

  constructor(private data_service: DataserviceService) {
    this.get_data();
  }

  get_data() {
    this.data_service.get_all().subscribe({
      next: (response: any[]) => {
        // Extract the symbol and data[] values from the response
        this.dataSource = response.map(item => {
          return {
            symbol: item.symbol,
            change: item.change,
            abs_change: item.abs_change,
            volume: item.volume
          };
        });
      },
      error: (error: any) => {
        this.error = error;
      }
    });
  }
}
