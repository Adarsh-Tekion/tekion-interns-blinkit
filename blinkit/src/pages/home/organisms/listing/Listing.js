import { React, useState, useMemo, useCallback } from 'react'
import { Sidebar } from './organisms/sidebar';
import styles from './listing.module.css'
import { Grid } from './organisms/grid';
import UseDataFetch from '../../../../organisms/helpers/organism.dataFetch';
import { getItemsForCategory } from './helpers/listing.getCategory';
import { Loader } from '../../../../organisms/loader';

export default function Listing() {
    const [category, setCategory] = useState();
    const data = UseDataFetch("items");
    const categorizedItems = useMemo(() => {
        return getItemsForCategory(category, data)
    }, [data, category]);

    const setCategoryId = useCallback(id => setCategory(id), []);

    if (data.length === 0) {
        return (<Loader />)
    }
    else return (
        <main className={`flex ${styles["list"]}`}>
            <Sidebar setCategoryId={setCategoryId} />
            <Grid categorizedItems={categorizedItems} />
        </main>
    )
}
