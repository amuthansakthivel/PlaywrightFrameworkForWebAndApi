export type Product =
        | "Apple MacBook Air Laptop M1"
        | "Apple MacBook Pro Laptop M2"

export type ProductDetails = {
    menu:
        | "Mobiles, Computers"
        | "Electronics"
        | "Fashion"
        | "Home & Kitchen"
        | "Amazon Pay"
        | "Toys & Baby Products"
        | "Sports, Fitness & Outdoors";
    subMenu:
        | "Laptops"
        | "Tablets"
        | "Desktops"
        | "Software"
        | "Headphones"
        | "Monitors"
        | "Printers"
        | "Scanners"
        | "Webcams"
        | "Projectors"
        | "Accessories"
        | "Networking";
}

export type Brands =
    | "Apple Apple"
    | "Samsung"
    | "HP"