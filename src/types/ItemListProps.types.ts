import { Thing } from "./Thing.types";

export interface ItemListProps {
  items: Thing[][];
  isLoading: boolean;
}