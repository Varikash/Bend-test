import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchZones } from '../../services/reducers/zonesSlice';
import { RootState } from '../../services/reducers';
import ClassZone from '../ClassZone/ClassZone';
import Spinner from '../Spinner/Spinner';
import { ZoneData } from '../../types/Zone.types';

type Props = {
	areas: ZoneData[];
	isLoading: boolean;
	fetchZones: () => void;
};

class ClassZoneList extends Component<Props> {
	componentDidMount() {
		this.props.fetchZones();
	}

	render() {
		const { areas, isLoading } = this.props;

		if (isLoading) {
			return <Spinner />;
		}

		return (
			<section>
				{areas.map(area => (
					<ClassZone key={area.areaId} data={area} />
				))}
			</section>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	areas: state.zones.areas,
	isLoading: state.zones.isLoading,
});

const mapDispatchToProps = { fetchZones };

export default connect(mapStateToProps, mapDispatchToProps)(ClassZoneList);
