import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchThings } from '../mockApi';
import { Thing } from '../../types/Thing.types';

export const fetchZoneThings = createAsyncThunk(
	'things/fetchZoneThings',
	async (areaId: number) => {
		const allItems = await fetchThings();
		return allItems.filter(item => item.areaId === areaId);
	}
);

interface ItemState {
	items: Thing[];
	isLoading: boolean;
	error: string | null;
}

const initialState: ItemState = {
	items: [],
	isLoading: false,
	error: null,
};

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchZoneThings.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchZoneThings.fulfilled, (state, action) => {
				state.items = action.payload;
				state.isLoading = false;
			})
			.addCase(fetchZoneThings.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message || 'Problem with getting Item data';
			});
	},
});

export default itemsSlice.reducer;
