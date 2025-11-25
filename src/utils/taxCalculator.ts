import { Product } from "../models/Product2";

export class TaxCal extends Product {
    category: string;

    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, category: string) {
    super(id, title, description, price, discountPercentage)
    this.category = category;

    }


    calculateTax(): number {
        if (this.category === "groceries") {
            let taxRate = 0.03;
            return taxRate;
        } else {
            let taxRate = 0.0475;
            return taxRate; 
        }
    }
}