import { createSelector } from 'reselect';
import createState from './createState';
import IState from './IState';

const selectSlice = ({ settings = createState() } = {}): IState => settings;

export const selectName = createSelector(selectSlice, ({ name }) => name);
export const selectLicense = createSelector(selectSlice, ({ license }) => license);
