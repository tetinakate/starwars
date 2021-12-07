import React from "react";
import isEmpty from "lodash/isEmpty";
import { Spinner } from "../../components/spinner";

export const Layout = ({ data, isLoading, children }) => {
    if(isEmpty(data) && !isLoading){
        return <p>Данные отсутствуют.</p>
        // return <Spinner />
    }
    if(isLoading){
        //return <p>Загрузка...</p>
        return <Spinner />
    }
    return(
        <div>
            { children }
        </div>
    )
}