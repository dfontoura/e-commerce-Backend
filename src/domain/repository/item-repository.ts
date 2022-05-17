import Item from "../entity/item";

export default interface ItemRepository {
    getById(id: number): Item|undefined;
}
