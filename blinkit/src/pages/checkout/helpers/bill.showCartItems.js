import { ReaderItem } from "../../../organisms/constants/itemReader"

export function showCartItems(items, count) {
    return (items.map((item) => {
        if (count.get(ReaderItem.getId(item)) > 0) {
            return (<tr key={ReaderItem.getId(item)}>
                <td className="item-name">{ReaderItem.getProductName(item)}</td>
                <td className="item-qty">{count.get(ReaderItem.getId(item))}</td>
            </tr>)
        }
    })
    )
}
