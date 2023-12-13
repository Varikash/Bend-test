import { Component } from 'react';
import Style from './ItemList.module.css';
import ClassItem from '../ClassItem/ClassItem';
import Skeleton from '../Skeleton/Skeleton';
import { ItemListProps } from '../../types/ItemListProps.types';
import { Thing } from '../../types/Thing.types';

class ClassItemList extends Component<ItemListProps> {
	determineIndicatorColor = (group: Thing[]): string => {
		const allOpen = group.every(item => item.status === 'open');
		const allClosed = group.every(item => item.status === 'closed');

		if (allOpen) return 'var(--indicator-open)';
		if (allClosed) return 'var(--indicator-closed)';
		return 'var(--indicator-mixed)';
	};

	render() {
		const { items, isLoading } = this.props;

		if (isLoading) {
			return <Skeleton />;
		}

		return (
			<div className={Style.container}>
				{items.map((group, index) => (
					<div key={index} className={Style.itemList}>
						<div
							className={Style.indicator}
							style={{ backgroundColor: this.determineIndicatorColor(group) }}
						></div>
						{group.map(item => (
							<ClassItem key={item.id} {...item} />
						))}
					</div>
				))}
			</div>
		);
	}
}

export default ClassItemList;
