

export class Invoice {

    
   
    fullName: String;
    address: String;
    state: String;
    stateCode: Number;
    registrationNo: Number;
    panNo: String;
    transport: Number;
    sgstamount: Number;
    cgstamount: Number;
    icgstamount: Number;
    finalTotal: Number;


    constructor(
        fullName: string,
        address: string,
        state: string,
        stateCode: number,
        registrationNo: number,
        panNo: string,
        transport: number,
        cgstamount: number,
        sgstamount: number,
        icgstamount: number,
        finalTotal: number
    ) {
        this.fullName = fullName;
        this.address = address;
        this.panNo = panNo;
        this.state = state;
        this.stateCode = stateCode;
        this.registrationNo = registrationNo;
        this.transport = transport;
        this.sgstamount = sgstamount;
        this.cgstamount = cgstamount;
        this.icgstamount = icgstamount;
        this.finalTotal = finalTotal;
    }

}
