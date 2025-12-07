import { Product } from "./models/Product2";
import { calculateTax } from "./utils/taxCalculator";
import { calculateDiscount } from "./utils/discountCalculator";
import { fetchAllProducts, fetchProductById } from "./services/apiService";

async function main(): Promise<void> {
    try {
        console.log("Fetching all products");

        
        const products: Product[] = await fetchAllProducts();

        console.log(`Loaded ${products.length} products.`);

        
        const sampleProduct: Product = products[0];

        console.log("PRODUCT DETAILS");
        console.log(sampleProduct.displayDetails());

        
        const discountAmount: number = calculateDiscount(
            sampleProduct.price,
            sampleProduct.discountPercentage
        );

        const taxAmount: number = calculateTax(
            sampleProduct.price,
            sampleProduct.category
        );

        console.log(`Discount amount: $${discountAmount}`);
        console.log(`Tax amount: $${taxAmount}`);

        
        const priceAfterDiscountAndTax: number = sampleProduct.getPriceWithDiscount(
            1,
            taxAmount / sampleProduct.price 
        );

        console.log(`Final price with discount + tax: $${priceAfterDiscountAndTax}`);

        console.log("Fetching a single product by ID");

       
        const product5: Product = await fetchProductById(5);

        console.log(product5.displayDetails());

    } catch (error) {
        console.error("Something went wrong in the main application:");
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error);
        }
    }
}

main();