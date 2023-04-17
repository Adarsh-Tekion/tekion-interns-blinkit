import { ReaderCategory } from "../../../../../../../organisms/constants/categoryReader"
function renderCategory(category) {
    return (<li key={ReaderCategory.getId(category)} className="side-bar-list flex" onClick={() => this.setCategoryId(ReaderCategory.getId(category))}>
        <img src={ReaderCategory.getImageUrl(category)} alt="All" className="food-image" />
        <p>{ReaderCategory.getDisplayText(category)}</p>
    </li>)
}
export { renderCategory }