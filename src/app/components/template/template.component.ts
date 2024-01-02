import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  value = 'Clear me';

  constructor(
    // private dialog: MatDialog,
  ) { 
    
  }

  ngOnInit(): void {

  }

  openDialog(){
    // this.dilo
  }
}
