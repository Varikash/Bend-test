import { Thing } from "../types/Thing.types";

export const groupItems = (items: Thing[]): Thing[][] => {

  // Создаем массив групп
  const groups: Thing[][] = [];

  items.forEach(item => {
    if (item.joinedWith === null) {
      // Создаем новую группу для элемента без joinedWith
      const group = [item];
      // Добавляем все элементы, которые связаны с этим элементом
      items.forEach(subItem => {
        if (subItem.joinedWith === item.id) {
          group.push(subItem);
        }
      });
      // Добавляем группу в массив групп
      groups.push(group);
    }
  });

  // Возвращаем массив групп
  return groups;
};

