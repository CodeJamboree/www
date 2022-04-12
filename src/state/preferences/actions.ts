import emoji from '@lewismoten/emoji';
import actionBuilder from '../actionBuilder';
const build = actionBuilder('preferences', emoji.wavingHand);

export const toggleDarkMode = build('toggle dark mode');
export const changeDarkModePreference = build('change dark mode preference');
