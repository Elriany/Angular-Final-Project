import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { totalmem } from 'os';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent {
  ourFees = [];
  constructor(private http:Http) {  // Dependency Injection
    this.http.get('http://localhost:49576/api/fees/')
    .subscribe(
      response =>{ 
        this.ourFees = response.json();       
      },
      error=>{console.log("error");}
    )
  }
  AddProduct(data)
  {
   //console.log(data.value);
   this.http.post('http://localhost:49576/api/fees',data.value)
    .subscribe(
              response =>{this.refreshList()},
              error =>{console.log("Error");
      });
  }
  DeleteFee(id)
  {
    //console.log(id);
    this.http.delete('http://localhost:49576/api/fees/'+id)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("Deleted");
      },
      error=>{console.log("Faild");}
    )
  }
  fee={};
  productID;
  EditFee(id){
    this.http.get('http://localhost:49576/api/fees/'+id)
    .subscribe(
      response =>{    
        this.fee=response.json();
        this.productID=response.json().id;
      },
      error=>{console.log("Faild");}
    )
  }
  update(newData){
    newData.value.id=this.productID;
   // console.log(newData.value);
    this.http.put('http://localhost:49576/api/fees/',newData.value)
    .subscribe(
      response =>{    
        this.refreshList();
        console.log("success");        
      },
      error=>{console.log("Faild");}
    )
    
  }
  refreshList()
  {
    this.http.get('http://localhost:49576/api/fees/')
    .subscribe(
      response =>{ 
        this.fees = response.json();        
      },
      error=>{console.log("success");}
    )
  }
}


