import { Component, Input, SimpleChanges } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {
  ChartConfiguration,
  ChartData,
  ChartOptions,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-well-card',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
    BaseChartDirective,
  ],
  templateUrl: './well-card.component.html',
  styleUrl: './well-card.component.scss',
})
export class WellCardComponent {
  @Input() data: any;
  displayedColumns = [] as string[];
  isFullScreen = false;
  dataSource = {} as MatTableDataSource<any>;
  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.updateChartData(this.data);
    }
  }

  private updateChartData(data: any) {
    if (data && data.data) {
      this.lineChartData.labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ];
      this.lineChartData.datasets = data.data.series.map(
        (series: any, index: number) => ({
          data: series.data,
          label: series.name,
          fill: false,
          tension: 0.5,
          borderColor: this.getSeriesColor(index),
          backgroundColor: this.getSeriesColor(index),
        })
      );
    }
  }

  private getSeriesColor(index: number): string {
    const colors = ['#e79321', '#1a73e8', '#0bc041'];
    return colors[index % colors.length];
  }
  setIsFullScreen(value: boolean) {
    this.isFullScreen = value;
  }
  ngOnInit() {
    if (this.data) {
      if (this.data.hasOperatingCondition) {
        this.dataSource = new MatTableDataSource(
          this.data.colTwo.data.parameters
        );
        this.displayedColumns = Object.keys(
          this.data.colTwo.data.parameters[0]
        );
      }
    }
    console.log(this.displayedColumns, this.dataSource);
  }
  getElementData(element: any, column: string) {
    console.log(element[column]);

    return element[column];
  }
}
