import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { fetchThings } from "../../services/mockApi";
import { groupItems } from "../../services/functions";
import { ZoneProps } from "../../types/Zone.types";
import { Thing } from "../../types/Thing.types";

const Zone: React.FC<ZoneProps> = ({ data }) => {
  const [items, setItems] = useState<Thing[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchThings().then(allItems => {
      const zoneItems = allItems.filter(item => item.areaId === data.areaId);
      const groupedItems = groupItems(zoneItems);
      setItems(groupedItems);
      setIsLoading(false); 
    });
  }, [data.areaId]);

  return (
    <div>
      <h2>{data.name}</h2>
      <ItemList items={items} isLoading={isLoading}/>
    </div>
  );
};

export default Zone;
