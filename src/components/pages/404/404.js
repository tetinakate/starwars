import React from "react";
import { Link } from "react-router-dom";

import "./404.css";

export const NotFound = () => {
    return(
        <div className="not-found">
            <h1>Данной страницы не существует!</h1>
            <div className="error-message"><span>404</span> Not Found</div>
            <p>Вы можете перейти на <Link to="/">главную страницу</Link>.</p>

        </div>
    )
}