import { useState, useEffect, useCallback } from "react";

const useTranslations = (lang, keys) => {
  const [translations, setTranslations] = useState({});

  const fetchTranslations = useCallback(async () => {
    try {
      const queryString = keys.map((key) => `key=${key}`).join("&");
      const response = await fetch(
        `/api/translations?${queryString}&lang=${lang}`
      );
      const data = await response.json();
      //console.log("data",data[0][lang]);
      setTranslations(data[0][lang]);
    } catch (error) {
      console.error("Ошибка при получении перевода:", error);
    }
  }, [lang]);
  useEffect(() => {
    fetchTranslations();
  }, [fetchTranslations]);

  return translations;
};

export default useTranslations;
