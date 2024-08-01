import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, MatSortModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'dob',
    'actions',
  ];
  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  dataSource = new MatTableDataSource<PeriodicElement>(
    this.generateUserDataArray(10)
  );
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  generateUserDataArray(numUsers: number): PeriodicElement[] {
    const users = [];

    for (let i = 1; i <= numUsers; i++) {
      const user = {
        id: i?.toString(),
        name: `User ${i}`,
        email: `user${i}@example.com`,
        phone: `123-456-789${i % 10}`, // This just makes sure the phone number format stays the same
        dob: `1990-01-${String(i).padStart(2, '0')}`, // Date of birth will be Jan 1 to 31 for example
        actions: 'Edit | Delete', // Placeholder actions
      };

      users.push(user);
    }

    return users;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  actions: string;
}
