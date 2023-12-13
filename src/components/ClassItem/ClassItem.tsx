import { Component } from 'react';
import Style from './ClassItem.module.css';
import { ItemProps } from '../../types/ItemProps.types';

class ClassItem extends Component<ItemProps> {
	render() {
		const { sku, defaultSku, joinedWith } = this.props;
		const itemClass =
			joinedWith !== null ? `${Style.item} ${Style.joined}` : Style.item;

		return (
			<div className={itemClass}>
				<h2 className={Style.sku}>{sku}</h2>
				<span className={Style.defaultSku}>{defaultSku}</span>
			</div>
		);
	}
}

export default ClassItem;
