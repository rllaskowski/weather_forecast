import { combineEpics } from "redux-observable";
import forecastEpic from "./containers/forecast/epics";
import getGifsEpic from "./redux/gif/epics";

export const rootEpic = combineEpics(forecastEpic, getGifsEpic);
