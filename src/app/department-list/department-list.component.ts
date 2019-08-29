import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h2>Department List</h2>
  <ul class="items">
    <li (click)="onSelect(i)" [class.selected]="isSelected(i)" *ngFor="let i of department">
    <span class="badge">{{i.id}}</span> {{i.name}} </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public selId;
  department=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"}
  ]
  constructor(private router:Router,private route:ActivatedRoute) { }
  onSelect(department){
    // this.router.navigate(['/department',department.id]);
    this.router.navigate([department.id],{relativeTo: this.route});
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id=parseInt(params.get('id'));
      this.selId=id;
    });
  }

  isSelected(department){
    return department.id===this.selId;
  }

}
