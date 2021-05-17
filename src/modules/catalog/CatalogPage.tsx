import React from "react";
import {Link} from "react-router-dom";
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