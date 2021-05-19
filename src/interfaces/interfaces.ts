import {RouteComponentProps} from "react-router-dom";


export interface RouterProps {
    path: string
};


export interface CollectionProps extends RouteComponentProps<RouterProps> {
};

export interface CollectionItemProps extends RouteComponentProps<RouterProps>{
    price: number,
    title: string,
    url: string,
    description: string,
    id: number
}

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


// export interface CatalogState {
//     items: CatalogItem[],
//     title: string
// };

export interface LoginState {
    token: string;
    userId: string;
    isEnter: boolean;
    message: string;
  };
  
export interface CollectionState {
    items: CatalogItem[],
    title: string
  };
  
export interface mainPageCatalogState {
    titles: string[],
    images: string[]
  };

export interface CollectionItemState{
    price: number,
    url: string,
    description: string,
    title: string,
    error: string,
    isFetched: boolean
}
  
export interface CatalogState {
    collectionReducer: CollectionState,
    mainPageReducer: mainPageCatalogState,
    collectionItemReducer: CollectionItemState
  };
  
  declare global {
    interface Store {
      loginReducer: LoginState;
      catalogReducer: CatalogState
    }
  };
