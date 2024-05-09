import { readFileSync } from "fs";
import { data } from "./payload";

const payload = data;

const filter = {
    cabinClasses: ["Y", "B", "E"],
    fareBrand: "Flexi"
}

console.log(payload)

let filteredPayload = payload.Payload.filter(x =>
    x.Onwards.some(y => filter.cabinClasses.includes(y.CabinClass))
    &&
    x.Returns.some(y => filter.cabinClasses.includes(y.CabinClass))
    &&
    x.BrandedFareInfoes.map(y => y.FareBrand.toUpperCase().includes(filter.fareBrand.toUpperCase()))
);

console.log(filteredPayload)
