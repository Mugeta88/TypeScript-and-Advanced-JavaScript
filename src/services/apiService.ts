import { Product } from "../models/Product2";
const BASE_URL = "https://dummyjson.com/products";


export async function fetchAllProducts(): Promise<Product[]> {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();

        // Convert API data into Product objects
        return data.products.map((p: any) => {
            return new Product(
                p.id,
                p.title,
                p.description,
                p.price,
                p.discountPercentage,
                p.category
            );
        });

    } catch (error) {
        console.error("Error fetching all products:", error);
        throw error;
    }
}


export async function fetchProductById(id: number): Promise<Product> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`Product with ID ${id} not found.`);
        }

        const p = await response.json();

        return new Product(
            p.id,
            p.title,
            p.description,
            p.price,
            p.discountPercentage,
            p.category
        );

    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
    }
}