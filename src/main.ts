import { writeFileSync } from "fs";
import { data } from "./payload";

const payload = data;

const filter = {
    cabinClasses: ["Y", "B", "E"],
    fareBrand: "Flexi",
    // cabinClasses: ["M", "H", "W"],
    // fareBrand: "Standard",
}

// console.log(payload)

let filteredPayload = payload.Payload.filter(x =>
    x.Onwards.every(y => !y['CabinClass'] || y['CabinClass'] && filter.cabinClasses.includes(y['CabinClass']))
    &&
    x.Returns.every(y => !y['CabinClass'] || y['CabinClass'] && filter.cabinClasses.includes(y['CabinClass']))
    &&
    x.BrandedFareInfoes.map(y => y.FareBrand.toUpperCase().includes(filter.fareBrand.toUpperCase()))
);

console.log(filteredPayload.length)

const filteredPayloadString = JSON.stringify(filteredPayload, null, 4)

writeFileSync('filteredData.json', filteredPayloadString, 'utf8')


