import Card from "./Card";
import { useState, useEffect } from "react";

function CardGrid() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/items")  // Fetch all items
        .then((response) => response.json())
        .then((data) => {
          setItems(data); // Store the list of items
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, []);

    return (<div className="card-deck ">
        {items.length > 0 ? (
        items.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} desc={item.description} />
        ))
      ) : (
        <p>No items found</p>
      )}

        </div>
    );
}

export default CardGrid;


