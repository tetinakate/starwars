import React, { useState, useEffect} from "react";
import SwapiService from "../../../services/swapi-service";
import { getData } from "../../../services";
import { API } from "../../../constants";
import { isEmpty } from "lodash";

import imgSrc from "../../../assets/img";
import "./planets.css";
import { Layout } from "../../../containers/layout";

export const Planets = () => {
    const swapiService = new SwapiService();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);

    const getPlanetList = async () => {
        const url = nextPage || 1 ;
        const res = await getData(API.planets(url));
        const urlNext = res?.next ? new URL(res?.next)?.search : null
        const urlNextPageNum = urlNext && new URLSearchParams(urlNext).get("page")
       
        setData([...data, ...res?.results]);
        setNextPage(urlNextPageNum);
        setLoading(false);
    }
    const handleImgError = (event) => {
        event.target.src = imgSrc.noPic;
    }

    useEffect(() => {
        getPlanetList();
    }, [])

    if(isLoading){
        return <p>Loading...</p>;
    }
    if(isEmpty(data)){
        return <p>Data not found...</p>;
    }

    return(
        <Layout data={data} isLoading={isLoading}>
            <h1>Planets</h1>
            <div className="planets d-flex">
                {
                    data.map( (planet, index) => {
                        return(
                            <div key={planet.name} className="item">
                                <p><span>{planet.name}</span></p>
                                <div>
                                    <img src={`${swapiService.getPlanetImg(index + 1)}.jpg`} alt={planet.name} onError={handleImgError} />
                                </div>
                                {/* <p>Период вращения: {planet.rotation_period}</p>
                                <p>Диаметр: {planet.diameter}</p>
                                <p>Популяция: {planet.population}</p>
                                <p>Климат: {planet.climate}</p> */}
                            </div>
                        )
                    })
                }
            </div>
            <div className="button load-more">
                {nextPage && <button className="btn-load-more"  onClick={getPlanetList}>{isLoading ? 'Loading...' : 'Load More'}</button>}
            </div>
        </Layout>
    )
}