import React, { useState, useEffect} from "react";
import SwapiService from "../../../services/swapi-service";
import { Layout } from "../../../containers/layout";
import { getData } from "../../../services";
import { API } from "../../../constants";

import imgSrc from "../../../assets/img";

import "./characters.css";

export const Characters = () => {
    const swapiService = new SwapiService();

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(null);

    const getPersonList = async () => {
        const url = nextPage || 1;
        const res = await getData(API.persons(url));
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
        getPersonList();
      }, []);

    return(
        <Layout data={data} isLoading={isLoading}>
            <h1>Characters</h1>
            <div className="characters d-flex">
                {
                    data.map((person, index) => {
                        return(
                            <div key={index + 1} className="item">
                                <p><span>{person.name}</span></p>
                                <div>
                                    <img src={`${swapiService.getCharactersImg(index + 1)}.jpg`} alt={person.name} onError={handleImgError} />
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className="button load-more">
                {nextPage && <button className="btn-load-more"  onClick={getPersonList}>{isLoading ? 'Loading...' : 'Load More'}</button>}
            </div>


        </Layout>
    )
}