import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { WellCardComponent } from '../well-card/well-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-wells',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    WellCardComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './wells.component.html',
  styleUrl: './wells.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellsComponent {
  wellCardsData = [
    {
      hasOperatingCondition: true,
      colOne: {
        title: 'nodal analysis-current',
        data: {
          message: 'No data to display',
        },
      },
      colTwo: {
        title: 'operating conditions-current',
        data: {
          parameters: [
            { parameter: 'THP', currentCondition: '-' },
            { parameter: 'THT', currentCondition: '-' },
            { parameter: 'Choke', currentCondition: '-' },
            { parameter: 'WC', currentCondition: '-' },
            { parameter: 'GOR', currentCondition: '-' },
            { parameter: 'GLR', currentCondition: '-' },
            { parameter: 'Liquid Rate', currentCondition: '-' },
          ],
        },
      },
    },

    {
      hasOperatingCondition: true,
      colOne: {
        title: 'nodal analysis-last well test',
        data: {
          message: 'No data to display',
        },
      },
      colTwo: {
        title: 'operating conditions-last well test',
        data: {
          parameters: [
            { parameter: 'THP', lastCondition: '272.74 (psia)' },
            { parameter: 'WC', lastCondition: '93.00 (%)' },
            { parameter: 'GOR', lastCondition: '2.31 (1000ft3/bbl)' },
            { parameter: 'GLIP', lastCondition: '831.0 (psia)' },
            { parameter: 'GLIR', lastCondition: '1755.49 (Mcfd)' },
            { parameter: 'GLR', lastCondition: '0.16 (1000ft3/bbl)' },
            { parameter: 'Liquid Rate', lastCondition: '1025.88 (bbl/d)' },
          ],
        },
      },
    },

    {
      title: 'oil rate comparison',
      data: {
        chart: 'Oil Rate Comparison Chart Image Data or URL',
        series: [
          {
            name: 'Well Test Rate',
            data: [45, 50, 55, 60, 65, 70, 75], // Sample values for Well Test Rate
          },
          {
            name: 'Allocation Rate',
            data: [40, 48, 52, 58, 62, 68, 72], // Sample values for Allocation Rate
          },
          {
            name: 'WRE Rate',
            data: [35, 42, 49, 55, 61, 66, 73], // Sample values for WRE Rate
          },
        ],
      },
    },
    {
      title: 'gas rate comparison',
      data: {
        chart: 'Gas Rate Comparison Chart Image Data or URL',
        series: [
          {
            name: 'Well Test Rate',
            data: [150, 155, 160, 165, 170, 175, 180], // Sample values for Well Test Rate
          },
          {
            name: 'Allocation Rate',
            data: [145, 150, 155, 160, 165, 170, 175], // Sample values for Allocation Rate
          },
          {
            name: 'WRE Rate',
            data: [140, 145, 150, 155, 160, 165, 170], // Sample values for WRE Rate
          },
        ],
      },
    },
  ];
}
