import { createSelector } from 'reselect';
import createState from './createState';
import IState from './IState';

const selectSlice = ({ preferences = createState() } = {}): IState => preferences;

export const selectIsDarkMode = createSelector(selectSlice, ({ isDarkMode }) => isDarkMode);
