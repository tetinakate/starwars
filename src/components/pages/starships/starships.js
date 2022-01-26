import React, { useState, useEffect} from "react";
import SwapiService from "../../../services/swapi-service";
import { getData } from "../../../services";
import { API } from "../../../constants";
import imgSrc from "../../../assets/img";
import "./starships.css";
import { Layout } from "../../../containers/layout";

export const Starships = () => {
    const swapiService = new SwapiService();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);

    const getStarshipsList = async () => {
        const url = nextPage || 1;
        const res = await getData(API.starships(url));
        const urlNext = res?.next ? new URL(res?.next)?.search : null
        const urlNextPageNum = urlNext && new URLSearchParams(urlNext).get("page")
       
        setData([...data, ...res?.results]);
        setNextPage(urlNextPageNum)
        setLoading(false);

    }
    const handleImgError = (event) => {
        event.target.src = imgSrc.noPic;
    }

    useEffect(() => {
        getStarshipsList();
    }, [])


    return(
        <Layout data={data} isLoading={isLoading}>
            <h1>Starships</h1>
            <div className="starships d-flex">
                {
                    data.map((starship, index) => {
                        return(
                            <div key={index + 1} className="item">
                                <p><span>{starship.name}</span></p>
                                <div>
                                    <img src={`${swapiService.getStarshipsImg(index + 1)}.jpg`} alt={starship.name} onError={handleImgError} />
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className="button load-more">
                {nextPage && <button className="btn-load-more"  onClick={getStarshipsList}>{isLoading ? 'Loading...' : 'Load More'}</button>}
            </div>
        </Layout>
    )
}