import { useEffect, useState } from "react";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import ActionSection from "../components/action";

export default function Home() {
  const [foundItems, setFoundItems] = useState([]);
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    // FETCH FOUND ITEMS
    fetch("http://localhost:5000/api/found")
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("Found API error:", text);
          return [];
        }
        return res.json();
      })
      .then((data) => {
        setFoundItems(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error(err);
        setFoundItems([]);
      });

    // FETCH LOST ITEMS 
    fetch("http://localhost:5000/api/lost")
      .then(async (res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => {
        setLostItems(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setLostItems([]);
      });
  }, []);

  return (
    <>
      <Herosection />
      <ActionSection />

      <CardSection
        title="Found Items"
        items={foundItems}
        type="found"
      />

      <CardSection
        title="Lost Items"
        items={lostItems}
        type="lost"
      />

      <Footer />
    </>
  );
}