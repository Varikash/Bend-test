import React from 'react';
import Style from './Item.module.css';
import { ItemProps } from '../../types/ItemProps.types';

const Item: React.FC<ItemProps> = ({ sku, defaultSku, joinedWith }) => {
	const itemClass =
		joinedWith !== null ? `${Style.item} ${Style.joined}` : Style.item;

	return (
		<div className={itemClass}>
			<h2 className={Style.sku}>{sku}</h2>
			<span className={Style.defaultSku}>{defaultSku}</span>
		</div>
	);
};
export default Item;
