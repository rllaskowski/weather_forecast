import { fromJS } from "immutable";

const cityListJS = require("./city-list.json");

const cityList = cityListJS.map(city => ({
    value: `${city.name} ${city.country}`
}))

const cityDict = {}

cityListJS.forEach(city => {
    cityDict[`${city.name} ${city.country}`] = city.coord;
});


export {
    cityDict,
    cityList
}
