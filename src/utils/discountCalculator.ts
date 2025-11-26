import {Product} from "../models/Product2";



export function calculateDiscount(product: Product): number {
        let discountAmount = product.price  * (product.discountPercentage / 100);
        return Number(discountAmount.toFixed(2));


    }

