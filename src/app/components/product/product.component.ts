import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';     // ✅ eklendi
import { Product } from '../../models/Product/product';
import { HttpClient } from '@angular/common/http';
import { productResponseModel } from '../../models/Product/productResponseModule';
import { HttpClientModule } from '@angular/common/http';


@Component({
  standalone : true,
  selector: 'app-product',
  imports: [CommonModule , HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  apiUrl :string = "https://localhost:7292/api/MenuItems";
  productResponeModel : productResponseModel = {
    data :this.products,
    message : "",
    success : true,
  };
  //productResponseModel : productResponseModelduct = {}
  constructor(private httpclient:HttpClient){//private dışardan ProductComponent oluşturulursa httpclient ın o component nesnesine ait bir filed olarak çıkamsını engeller ve burda this ile c# ta olmasa da parametre olarak verilen nesneye ulaşabiliriz sanki bir field gibi
   this.httpclient.get //constta yalnızca komponentin oluşum anında kullanılması için bağımlılıklar sağlanır

}

  ngOnInit(): void {//api çağrısı gibi işler ,onInıt interfaceinden gelen metod
    console.log("Init calıstı");//ngOnInıt component dom a eklenince çalıışır
  }
  //dom a ekleme : componentin tarayıcıda görünür hale gelmesi
  getProducts(){
      this.httpclient.get<productResponseModel>(this.apiUrl) //gelen datayı productresponse modeline map etme anlamı taşır
      .subscribe((response)=>{this.products = response.data}) 

  }

}
