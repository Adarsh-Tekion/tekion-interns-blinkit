import { displayAllRow } from "./grid.displayAllRow"
function showMappedRow(rows) {
    return (rows.map((row, index) => (displayAllRow(row, index))))
}
export { showMappedRow }