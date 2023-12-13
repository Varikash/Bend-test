import { Component } from 'react';
import { connect } from 'react-redux';
import ClassItemList from '../ClassItemList/ClassItemList';
import { fetchZoneThings } from '../../services/reducers/ItemSlice';
import { RootState } from '../../services/reducers';
import { ZoneData } from '../../types/Zone.types';
import { Thing } from '../../types/Thing.types';
import { groupItems } from '../../services/functions';

type Props = {
	data: ZoneData;
	items: Thing[];
	isLoading: boolean;
	fetchZoneThings: (areaId: number) => void;
};

class ClassZone extends Component<Props> {
	componentDidMount() {
		const { data, fetchZoneThings } = this.props;
		fetchZoneThings(data.areaId);
	}

	render() {
		const { items, isLoading, data } = this.props;
		const groupedItems = groupItems(items);

		return (
			<div>
				<h2>{data.name}</h2>
				<ClassItemList items={groupedItems} isLoading={isLoading} />
			</div>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	items: state.items.items,
	isLoading: state.items.isLoading,
});

const mapDispatchToProps = { fetchZoneThings };

export default connect(mapStateToProps, mapDispatchToProps)(ClassZone);
