export type OrderState =
    | {status:"created" ; orderId: number}
    | {status:"paid" ; paid: number}
    | {status:"shipped" ; shippedAt: Date}
    | {status:"delivered" ; deliveredAt: Date}
    | {status:"cancelled" ; reason: string}

 
export type OrderAction = "pay" | "ship" | "deliver" | "cancel";

export type product = {
    id: number,
    heading: string,
    subHeading: string,
    price: number
}
export type productProps = {
    data:product
}