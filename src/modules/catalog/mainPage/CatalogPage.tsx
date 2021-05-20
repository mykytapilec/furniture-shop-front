import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogItemPreview from '../../../components/catalogItemPreview/CatalogItemPreview';
import { Loader } from '../../../components/loader/Loader';

import { fetchCatalog } from './store/actions';

import './catalogPage.css';


export const CatalogPage: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: Store) => state.catalogReducer.mainPageReducer);

    const {images, titles} = data;

    useEffect(() => {
        images.length === 0 && dispatch(fetchCatalog());
    }, [dispatch, images]);

    if (images.length === 0) {
        return <Loader />
    }

    return (
        <div className="catalog">
            {titles.map((item, index) => <CatalogItemPreview title={item} url={images[index]} key={Math.random()}/>)}
        </div>
    )
};