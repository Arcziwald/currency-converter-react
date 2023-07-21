import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = (rateUrl) => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const axiosRates = async () => {
      try {
        const response = await axios.get(rateUrl);
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
  });

  return ratesData;
};
