import {RouteComponentProps} from "react-router-dom";


export interface RouterProps {
    path: string
};


export interface CollectionProps extends RouteComponentProps<RouterProps> {
};


export interface CatalogInterface {
    items: CatalogItem[],
    title: string,
    error: string
};


export interface CatalogItem {
    price: number,
    title: string,
    url: string,
    description: string,
    id: number
};


export interface CatalogState {
    items: CatalogItem[],
    title: string
};

