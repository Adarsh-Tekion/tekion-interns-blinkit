import { Card } from '../organisms/card'
import { ReaderItem } from "../../../../../../../organisms/constants/itemReader"
function showCard(item) {
    return <Card key={ReaderItem.getId(item)} ProductInfo={item} />
}
function displayAllRow(row, index) {
    return (
        <div key={index} className="row flex">
            {row.map(showCard)}
        </div>
    )
}
export { displayAllRow }