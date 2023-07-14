import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const currentExchangeRate = "https://api.exchangerate.host/latest?base=PLN";

        const axiosRates = async () => {
            try {
                const response = await axios.get(currentExchangeRate);
                const { rates, date } = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                });
            } catch {
                setRatesData({
                    status: "error",
                });
            };
        };

        setTimeout(axiosRates, 1000);
    }, []);
   
    return ratesData;    
};