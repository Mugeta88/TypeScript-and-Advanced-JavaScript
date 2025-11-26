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
        return `
        Product: ${this.title} 
        ID: ${this.id} 
        Price: $${this.price} 
        Discount: ${this.discountPercentage}
        `
    }

    getPriceWithDiscount(quantity: number = 1, taxRate: number = 0): string{
        let discountAmount = this.price  * (this.discountPercentage / 100);
        let discountPrice = this.price - discountAmount;
        
        let subtotal = discountPrice * quantity;
        let total = subtotal * (1 + taxRate);
        return total.toFixed(2);
    }
}