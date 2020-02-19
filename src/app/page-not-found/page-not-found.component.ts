import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="alert alert-success" role="alert">
      <strong>Page Not Found</strong>
    </div>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {

  constructor(public dialog: MatDialog ) {

  }

  ngOnInit() {
  }

}
