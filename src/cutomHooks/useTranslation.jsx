import { useState, useEffect, useCallback } from "react";

const useTranslations = (lang, page) => {
  const [translations, setTranslations] = useState({});

  const fetchTranslations = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/translations?lang=${lang}&page=${page}`
      );
      const data = await response.json();
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
