import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { HttpClientModule } from '@angular/common/http';
import { SlicePipe } from '@angular/common';
@Component({
  selector: 'app-comp-1',
  standalone: true,
  imports: [HttpClientModule, SlicePipe],
  templateUrl: './comp-1.component.html',
  styleUrl: './comp-1.component.css',
})
export class Comp1Component implements OnInit  {
  products : any[] = [];
  constructor( private _TestService:TestService){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this._TestService.Prodcuts().subscribe({
      next: (res) =>{
        console.log(res);
        this.products = res;
      },error : (err) =>{
        console.log('Error Fetching Prodcuts',err);
      },complete : ()=>{
        console.log('Request Completed');
        
      }
    })
  }
}
