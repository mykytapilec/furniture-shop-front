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
  
export interface CatalogState {
    collectionReducer: CollectionState,
    mainPageReducer: mainPageCatalogState,
  };
  
  declare global {
    interface Store {
      loginReducer: LoginState;
      catalogReducer: CatalogState
    }
  };
