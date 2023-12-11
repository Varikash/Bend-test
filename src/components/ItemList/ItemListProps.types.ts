import { Thing } from "../../types/Thing.types";

export interface ItemListProps {
  items: Thing[][];
  isLoading: boolean;
}