import React from 'react';
import Style from './ItemList.module.css';
import Item from '../Item/Item';
import Skeleton from '../Skeleton/Skeleton';
import { ItemListProps } from '../../types/ItemListProps.types';
import { Thing } from '../../types/Thing.types';

const ItemList: React.FC<ItemListProps> = ({ items, isLoading }) => {
	const determineIndicatorColor = (group: Thing[]): string => {
		const allOpen = group.every(item => item.status === 'open');
		const allClosed = group.every(item => item.status === 'closed');

		if (allOpen) return 'var(--indicator-open)';
		if (allClosed) return 'var(--indicator-closed)';
		return 'var(--indicator-mixed)';
	};

	if (isLoading) {
		return <Skeleton />;
	}

	return (
		<div className={Style.container}>
			{items.map((group, index) => (
				<div key={index} className={Style.itemList}>
					<div
						className={Style.indicator}
						style={{ backgroundColor: determineIndicatorColor(group) }}
					></div>
					{group.map(item => (
						<Item key={item.id} {...item} />
					))}
				</div>
			))}
		</div>
	);
};

export default ItemList;
