import { Product } from "../models/Product2";




export function calculateTax(product: Product): number {
        if (product.category === "groceries") {
            let taxRate = 0.03;
            let taxAmount = product.price * taxRate;
            return Number(taxAmount.toFixed(2));
        } else {
            let taxRate = 0.0475;
            let taxAmount = product.price * taxRate;
            return Number(taxAmount.toFixed(2)); 
        }
    }
