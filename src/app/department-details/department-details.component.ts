import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
   <h2>You selected Department ID is {{DeptId}}</h2>
   <p>
    <button (click)="showO()">Overview</button>
    <button (click)="showC()">Contact</button>
   </p>
   <router-outlet></router-outlet>
   <button (click)="goPrev()">Previous</button><p>    </p>
   <button (click)="goNext()">Next</button><p>    </p>
   <button (click)="Goto()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public DeptId;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get('id'));
    // this.DeptId=id;
    this.route.paramMap.subscribe((params: ParamMap)=> {
      let id=parseInt(params.get('id'));
      this.DeptId=id;
    })
  }
  goPrev(){
    let prevId=this.DeptId-1;
    this.router.navigate(['/departments',prevId]);
  }
  goNext(){
    let nextId=this.DeptId+1;
    this.router.navigate(['/departments',nextId]);
  }
  Goto(){
    let selectedID=this.DeptId? this.DeptId : null;
    // this.router.navigate(['/departments',{id:selectedID}]);
    this.router.navigate(['../',{id:selectedID}],{relativeTo:this.route});
  }

  showO(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
  showC(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }

}