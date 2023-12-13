import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAreas } from '../mockApi';
import { ZoneData } from '../../types/Zone.types';

export const fetchZones = createAsyncThunk(
  'zones/fetchZones',
  async () => {
    const response = await fetchAreas();
    return response as ZoneData[];
  }
)

interface ZoneState {
  areas: ZoneData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ZoneState = {
  areas: [],
  isLoading: false,
  error: null,
}

export const zonesSlise = createSlice({
  name: 'zones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchZones.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchZones.fulfilled, (state, action) => {
      state.areas = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchZones.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Problem with getting Zone data';
    });
  },
});

export default zonesSlise.reducer;