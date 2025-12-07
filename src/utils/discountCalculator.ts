import {Product} from "../models/Product2";



export function calculateDiscount(price: number, discountPercentage: number): number {
        return Number((price * (discountPercentage / 100)).toFixed(2));
    }

