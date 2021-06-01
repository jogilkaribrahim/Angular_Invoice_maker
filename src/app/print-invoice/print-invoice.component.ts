import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-print-invoice',
  templateUrl: './print-invoice.component.html',
  styleUrls: ['./print-invoice.component.css']
})
export class PrintInvoiceComponent implements OnInit {
  products: Product[] = [];
  invoices : Invoice[] = [];

  constructor( private Pservice: ProductsService , private Iservice : InvoiceService) { }

  ngOnInit(): void {
    this.products = this.Pservice.getProducts();
    this.Pservice.ProductsChanged.subscribe((products: Product[]) => { this.products = products; });


    this.invoices = this.Iservice.getInvoices();
    this.Iservice.InvoiceChanged.subscribe((invoices: Invoice[]) => { this.invoices = invoices; });
    
  }
  print(){
    window.print();
    console.log('Refresh Clicked');
    
  }
}
