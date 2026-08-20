export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    description: string;
    details: string;
    rating: number;
    reviews: number;
    instock: boolean;
    sizes?: string[];
    colors?: string[];

}
export const products: Product[] = [
    {
        id: "1",
        name: "Premium Cotton T-Shirt",
        category: "Tops",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://placehold.co/600x600/2563eb/ffffff?text=Premium+Cotton+T-Shirt",

        description: "A soft and comfortable cotton t-shirt perfect for casual wear.",
        details: "Made from 100% premium cotton t-shirt perfect for casual wear.",
        rating: 4.5,
        reviews: 120,
        instock: true,
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        colors: ["White", "Black", "Navy","Gray"],
    },
    {
        id: "2",
        name: "Slim Fit Denim Jeans",
        category: "Bottoms",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://placehold.co/600x600/2563eb/ffffff?text=Denim+Jeans",

        description: "A classic pair of slim fit denim jeans perfect for casual wear.",
        details: "Made from high-quality denim, these jeans offer a comfortable fit and are available in various washes.",
        rating: 4.3,
        reviews: 85,
        instock: true,
        sizes: ["28", "30", "32", "34", "36","38"],
        colors: ["Blue", "Black", "Gray","Dark Blue"],
    },
    {
        id: "3",
        name:"Oversized Hoodie",
        category: "Outerwear",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://placehold.co/600x600/6b7280/ffffff?text=Oversized+Hoodie",
        description: "A cozy and trendy oversized hoodie.",
        details: " 80% Cotton, 20% Polyester. Made from soft and comfortable fabric, this hoodie is perfect for layering.",
        rating: 4.7,
        reviews: 150,
        instock: true,
        sizes: ["XS", "S", "M", "L","XL","XXL"],
        colors: ["White", "Black", "Navy","Gray","Red"],
    },
    {
        id: "4",
        name: "Classic Leather Jacket",
        category:"Outerwear",
        price: 129.99,
        originalPrice: 199.99,
        image: "https://placehold.co/600x600/374151/ffffff?text=Classic+Leather+Jacket",
        description: "A timeless classic leather jacket.",
        details: "Crafted from high-quality leather, this jacket offers a sophisticated look and durable wear.",
        rating: 4.8,
        reviews: 95,
        instock: true,
        sizes: ["XS", "S", "M", "L","XL","XXL"],
        colors: ["Brown", "Black", "Tan"],
    },
    {
        id: "5",
        name: "Casual Sneakers",
        category: "Footwear",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://placehold.co/600x600/1f2937/ffffff?text=Casual+Sneakers",
        description: "Comfortable and stylish casual sneakers.",
        details: "Perfect for everyday wear, these sneakers offer a lightweight design and excellent cushioning.",
        rating: 4.6,
        reviews: 110,
        instock: true,
        sizes: ["7", "8", "9", "10", "11","12"],
        colors: ["White", "Black", "Navy","Gray"],
    },
    {
        id: "6",
        name: "Summer Dress",
        category: "Dresses",
        price: 44.99,
        image: "https://placehold.co/600x600/ec4899/ffffff?text=Summer+Dress",
        description: "A light and breezy summer dress perfect for warm weather.",
        details: "Made from breathable fabric, this dress offers a comfortable fit and is available in various colors .",
        rating: 4.4,
        reviews: 90,
        instock: true,
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Red", "Blue", "Green","Yellow","white"]
    },
];
export const getProductById=(id: string)=>{
    return products.find(p => p.id === id);
};
