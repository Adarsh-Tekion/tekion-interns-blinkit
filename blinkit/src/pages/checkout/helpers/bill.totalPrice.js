import { ReaderItem } from "../../../organisms/constants/itemReader";
export function totalPrice(items, count) {
    let totalSum = 0
    items.forEach((item) => {
        if ((count.get(ReaderItem.getId(item))) > 0)
            totalSum += Number(ReaderItem.getDiscountPrice(item) * (count.get(ReaderItem.getId(item))))
    })
    return Number(totalSum);
}