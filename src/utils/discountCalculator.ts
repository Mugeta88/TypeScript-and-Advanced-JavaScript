import {Product} from "../models/Product2";

export class discountTaxCal extends Product {
    constructor(id: number, title: string, description: string, price: number, discountPercentage: number) {
        super(id, title, description, price, discountPercentage)
    }

    calculateDiscount() {
        let discountAmount = this.price * this.discountPercentage;
        return `$${discountAmount}`;

    }

}