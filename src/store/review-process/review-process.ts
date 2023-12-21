import {createSlice} from '@reduxjs/toolkit';
import {ReviewProcess} from '../../types/state.ts';
import {fetchReviewsAction} from '../api-actions.ts';
import {NameSpace} from '../../constants.ts';

const initialState : ReviewProcess = {
  reviews: [],
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
