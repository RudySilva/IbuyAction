export interface IBidder {
    bidderId: number;
    bidderName: string;
    bidderCompany: string;
    address: string;
    number: string;
    postCode: string;
    phone: string;
    mobile: string;
    driverLicense: string;
    city: string;
    state: string;
    country: string;
    howActionsFindOut: string;
    email: string;
}

export class Product implements IBidder {
    bidderId: number;
    bidderName: string;
    bidderCompany: string;
    address: string;
    number: string;
    postCode: string;
    phone: string;
    mobile: string;
    driverLicense: string;
    city: string;
    state: string;
    country: string;
    howActionsFindOut: string;
    email: string;

    constructor(bidderId: number,
        bidderName: string,
        bidderCompany: string,
        address: string,
        number: string,
        postCode: string,
        phone: string,
        mobile: string,
        driverLicense: string,
        city: string,
        state: string,
        country: string,
        howActionsFindOut: string,
        email: string){
    }
 }
