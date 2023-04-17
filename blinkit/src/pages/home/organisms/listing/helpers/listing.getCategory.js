function filterByCategory(item) {
    return item.categories.includes(this.category);
}
function getItemsForCategory(category, items) {
    const filteredItems = items.filter(
        filterByCategory, {
        category
    })
    if (!filteredItems.length)
        return items;
    else
        return filteredItems;
}
export { getItemsForCategory }