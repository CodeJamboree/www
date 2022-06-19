import emoji from "@lewismoten/emoji";
import actionBuilder from "../actionBuilder";
const build = actionBuilder("settings", emoji.speechBalloon);

export const foo = build("foo");
