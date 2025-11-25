fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);


export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;


    constructor(id: number, title: string, description: string, price: number, discountPercentage: number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    displayDetails(): string {
        return `${this.title} with an ID of ${this.id}costs $${this.price} and has a description of: ${this.description}.`
    }

    getPriceWithDiscount(quantity: number, taxRate: number): number{
        let cost = (this.price * quantity) * this.discountPercentage;
        let totalCost = cost * (1 + taxRate);
        return totalCost;
    }
}