import Order from "../../../domain/entity/order";
import OrderRepository from "../../../domain/repository/order-repository";


export default class OrderRepositoryMemory implements OrderRepository {
    private orders: Order[];

    constructor () {
        this.orders = [];
    }

    save (order: Order): void {
        this.orders.push(order);
    }
}