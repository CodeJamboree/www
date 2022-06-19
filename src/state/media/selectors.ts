import { createSelector } from "reselect";
import createMediaState from "./createMediaState";
import IMediaSlice from "./IMediaSlice";

const selectSlice = ({ media = createMediaState() } = {}): IMediaSlice => media;

export const selectAllIds = createSelector(selectSlice, ({ allIds }) => allIds);
export const selectById = createSelector(selectSlice, ({ byId }) => byId);
