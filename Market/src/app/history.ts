export interface history{
    order_number: number;
    products: string;
    phone: number;
    address: string;
    comments: string;
    total_amount: number;
    delivery_cost: number;
}

export const history: history[] = [
    {
        "order_number": 1,
        "products": "Манго маракуя",
        "phone": 77756724567,
        "address": "Schevcenko 85",
        "comments": "доставить быстрее",
        "total_amount": 741,
        "delivery_cost":50  
    },
    {
        "order_number": 2,
        "products": "Драконий фрукт",
        "phone": 777567245675,
        "address": "Tole bi 59",
        "comments": "позвоните как подьедете",
        "total_amount": 900,
        "delivery_cost":120
    },
    {
        "order_number": 3,
        "products": "Редис Помидоры",
        "phone": 777567245675,
        "address": "Mamyr-4 314",
        "comments": "No comments",
        "total_amount": 450,
        "delivery_cost":200
    },
]
