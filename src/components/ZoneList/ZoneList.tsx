import { useEffect, useState } from "react";
import { fetchAreas } from "../../services/mockApi";
import Zone from "../Zone/Zone";
import Spinner from "../Spinner/Spinner";
import { ZoneData } from "../../types/Zone.types";

const ZoneList = () => {

  const [areas, setAreas] = useState<ZoneData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAreas().then((data: ZoneData[]) => {
      setAreas(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />
  }

return(
  <section>
    {areas&&
    areas.map(area => {
      return <Zone key={area.areaId} data={area} />
    })}
  </section>
)
}

export default ZoneList;