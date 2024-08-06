import { useState, useEffect } from "react";


function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        console.log(data);
    }, [currency])

    return data; // only returning data
}

export default useCurrencyinfo; // hum pura function hi export kra rhe h tki bki chizon ka bhi access kr ske