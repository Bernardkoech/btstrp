// useCardData.js
import { useState, useEffect } from 'react';

const useCardData = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("https://test-api-137p.onrender.com/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return { cards };
};

export default useCardData;
