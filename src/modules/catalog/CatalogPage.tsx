import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {startFetchData} from "./store/catalog.actions";
export const CatalogPage: React.FC = () => {
    return (
        <div>
            <Link to="tables"> Tables</Link>
            <Link to="beds"> Beds</Link>
            <Link to="armchairs"> Armchairs</Link>
            <Link to="sofas"> Sofas</Link>
        </div>
    )
}