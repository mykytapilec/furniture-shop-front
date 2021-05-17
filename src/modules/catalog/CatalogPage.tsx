import React from "react";
import "./catalogPage.css"
import CatalogItemPreview from "../../components/catalog item preview/CatalogItemPreview";

export const CatalogPage: React.FC = () => {
    return (
        <div className="catalog">
           <CatalogItemPreview title="Tables" url='https://severdv.ru/wp-content/uploads/2020/05/matras-dlya-krovati-17.jpg'/>
            <CatalogItemPreview title="Beds" url='https://severdv.ru/wp-content/uploads/2020/05/matras-dlya-krovati-17.jpg'/>
            <CatalogItemPreview title="Armchairs" url='https://severdv.ru/wp-content/uploads/2020/05/matras-dlya-krovati-17.jpg'/>
            <CatalogItemPreview title="Sofas" url='https://severdv.ru/wp-content/uploads/2020/05/matras-dlya-krovati-17.jpg'/>
        </div>
    )
}