import { EventEmitter, Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  InvoiceChanged = new EventEmitter<Invoice[]>();
  private invoices: Invoice[] = [];

       getInvoices(){
           return this.invoices.slice();
       }
       addInvoices(invoice: Invoice){
           this.invoices.push(invoice);
           this.InvoiceChanged.emit(this.invoices.slice());
       }
       addInvoice(invoice: Invoice[]){
           // for (let ingredient of this.ingredients){
           //     this.addIngredients(ingredient);
           // }
           this.invoices.push(...invoice);
           this.InvoiceChanged.emit(this.invoices.slice());
       }
}
