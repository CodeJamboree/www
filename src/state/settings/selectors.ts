import { createSelector } from 'reselect';
import createState from './createState';
import IState from './IState';

const selectSlice = ({ settings = createState() } = {}): IState => settings;

export const selectName = createSelector(selectSlice, ({ name }) => name);
export const selectLicense = createSelector(selectSlice, ({ license }) => license);
export const selectContactName = createSelector(selectSlice, ({ contactName }) => contactName);
export const selectContactEmail = createSelector(selectSlice, ({ contactEmail }) => contactEmail?.join('@'));
export const selectContactEmailUrl = createSelector(selectContactEmail, email => `mailto:${email}`);
export const selectContactLocalMail = createSelector(selectSlice, ({ contactLocalMail }) => contactLocalMail);
export const selectContactMail = createSelector(selectSlice, ({ contactMail }) => contactMail);
