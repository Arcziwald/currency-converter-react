import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const currentExchangeRate = "https://api.exchangerate.host/latest?base=PLN&symbols=USD,EUR,GBP,CHF&_=" + Date.now();

    const axiosRates = async () => {
      try {
        const response = await axios.get(currentExchangeRate);
        const { rates, date } = response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(axiosRates, 1500);
  }, []);

  return ratesData;
};
