import axios from "axios";
import isArray from "lodash/isArray";

export const getData = async (url) => {
    try {
        if (isArray(url)) {
            const result = await Promise.all(url.map((u) => axios(u)));

            return result.map((res) => res?.data)
        }
        console.log(url);
        const result = await axios(url);

        if (result?.status === 200) {
            return result?.data
        }

        return null
    } catch (error) {
        console.error(error)
    }
}