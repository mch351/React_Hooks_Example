import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // NOTE we can use this way instead: .then(res=> {return res.json()})
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
}

export default useFetch;