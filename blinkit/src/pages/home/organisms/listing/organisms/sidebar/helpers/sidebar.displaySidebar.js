import { renderCategory } from "./sidebar.renderCategory"
function DisplaySideBar(Categories, setCategoryId) {
    return Categories.map(
        renderCategory, {
        setCategoryId
    })
}
export { DisplaySideBar }