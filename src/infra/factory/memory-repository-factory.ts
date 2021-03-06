import RepositoryFactory from "../../domain/factory/repository-factory";
import couponRepository from "../../domain/repository/coupon-repository";
import itemRepository from "../../domain/repository/item-repository";
import orderRepository from "../../domain/repository/order-repository";
import CouponRepositoryMemory from "../repository/memory/coupon-repository-memory";
import ItemRepositoryMemory from "../repository/memory/item-repository-memory";
import OrderRepositoryMemory from "../repository/memory/order-repository-memory";

export default class MemoryRepositoryFactory implements RepositoryFactory {
    createItemRepository(): itemRepository {
        return new ItemRepositoryMemory();
    }
    createCouponRepository(): couponRepository {
        return new CouponRepositoryMemory();
    }
    createOrderRepository(): orderRepository {
        return new OrderRepositoryMemory();
    }
    
}