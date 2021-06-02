import { useEffect, useState } from "react";

const useGreetings = () => {
  const currentHour = new Date().getHours();
  const [grettings, setGrettings] = useState("");

  useEffect(() => {
    if (currentHour < 12) setGrettings("Good morning");
    if (currentHour >= 12 && currentHour < 18) setGrettings("Good afternoon");
    else setGrettings("Good night");
  }, []);

  return [grettings];
};

export default useGreetings;
