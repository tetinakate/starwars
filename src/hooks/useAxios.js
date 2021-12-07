import { useState, useEffect } from "react"
import { getData } from "../services";

export const useAxios = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async (url) => {
            const res = await getData(url)
    
            setData(res)
            setLoading(false);
        }

        loadData(props.url);
    }, [props.url])

    return { data, isLoading }
}