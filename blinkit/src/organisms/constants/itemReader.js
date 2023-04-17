import _ from "lodash"
export const ReaderItem = {
    getProductName: _.property("product_name"),
    getImageUrl: _.property("image_url"),
    getId: _.property("id"),
    getPrice: _.property("price"),
    getDiscountPrice: _.property("discount_price"),
    getCurrency: _.property("currency"),
    getCategories: _.property("categories")
}
