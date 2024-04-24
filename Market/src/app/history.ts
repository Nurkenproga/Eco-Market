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
        "products": "hui",
        "phone": 77756724567,
        "address": "Schevcenko",
        "comments": "idi nah",
        "total_amount": 741,
        "delivery_cost":8451
    },
    {
        "order_number": 2,
        "products": "hui alibeka",
        "phone": 777567245675,
        "address": "Schevcenko0",
        "comments": "idi nah",
        "total_amount": 741,
        "delivery_cost":8451
    }
]
