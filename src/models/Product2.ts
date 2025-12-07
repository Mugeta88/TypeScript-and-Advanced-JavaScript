


export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;


    constructor(id: number, title: string, description: string, price: number, discountPercentage: number, category: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }

    displayDetails(): string {
        return `
        Product: ${this.title} 
        ID: ${this.id} 
        Price: $${this.price} 
        Discount: ${this.discountPercentage}
        Category: ${this.category}
        `
    }

    getPriceWithDiscount(quantity: number = 1, taxRate: number = 0): number{
        let discountAmount = this.price  * (this.discountPercentage / 100);
        let discountPrice = this.price - discountAmount;
        
        let subtotal = discountPrice * quantity;
        let total = subtotal * (1 + taxRate);
        return Number(total.toFixed(2));
    }
}