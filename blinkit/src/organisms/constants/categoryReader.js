import _ from "lodash"
export const ReaderCategory = {
    getDisplayText: _.property("display_text"),
    getImageUrl: _.property("image_url"),
    getId: _.property("id"),
    checkActive: _.property("active"),
    getProductCount: _.property("product_count"),
    checkAction: _.property("action"),
    getUrl: _.property("url"),
    getType: _.property("type")
}