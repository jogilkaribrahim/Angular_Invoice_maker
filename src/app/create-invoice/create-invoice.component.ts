import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  products: Product[];
  invoices : Invoice[];
  @ViewChild('fullname') NameInputRef : ElementRef;
  @ViewChild('address') AddressInputRef : ElementRef; 
  @ViewChild('state') StateInputRef : ElementRef;
  @ViewChild('statecode') StateCodeInputRef : ElementRef;
  @ViewChild('registrationNo') RegistrationNoInputRef : ElementRef; 
  @ViewChild('panNo') PanNoInputRef : ElementRef; 
  @ViewChild('transport') TransportInputRef : ElementRef; 
  @ViewChild('cgstamt') CgstAmountInputRef : ElementRef;
  @ViewChild('sgstamt') SgstAmountInputRef : ElementRef; 
  @ViewChild('icgstamt') IcgstAmountInputRef : ElementRef;
  @ViewChild('finalamt') FinalTotalInputRef : ElementRef; 
  constructor(private Iservice: InvoiceService, private Pservice: ProductsService,  private route: Router) { }

  ngOnInit(): void {
    this.invoices = this.Iservice.getInvoices();
    this.Iservice.InvoiceChanged.subscribe((invoices: Invoice[]) => { this.invoices = invoices; });

    this.products = this.Pservice.getProducts();
    this.Pservice.ProductsChanged.subscribe((products: Product[]) => { this.products = products; });
  }

  onSubmit(){
    const IngName = this.NameInputRef.nativeElement.value;
    const IngAdd = this.AddressInputRef.nativeElement.value;
    const IngState = this.StateInputRef.nativeElement.value;
    const IngStateCode = this.StateCodeInputRef.nativeElement.value;
    const IngRegistrationNo = this.RegistrationNoInputRef.nativeElement.value;
    const IngPanNo = this.PanNoInputRef.nativeElement.value;
    const IngTransport = this.TransportInputRef.nativeElement.value;
    const IngCgstAmount = this.CgstAmountInputRef.nativeElement.value;
    const IngSgstAmount = this.SgstAmountInputRef.nativeElement.value;
    const IngIcgstAmount = this.IcgstAmountInputRef.nativeElement.value;
    const IngFinalTotal = this.FinalTotalInputRef.nativeElement.value;
    const newInvoice = new Invoice(IngName, IngAdd, IngState, IngStateCode,
      IngRegistrationNo, IngPanNo, IngTransport, IngCgstAmount, IngSgstAmount, IngIcgstAmount,
      IngFinalTotal);
    this.Iservice.addInvoices(newInvoice);
    
this.route.navigate(['print-invoice']);

    
  }

}
