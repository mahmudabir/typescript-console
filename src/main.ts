import { readFileSync } from "fs";
import { data } from "./payload";

export const payload = data;

console.log(payload)

let filteredPayload = payload.Payload.filter(x =>
    x.Onwards.some(y => y.CabinClass === "Y" || y.CabinClass === "B" || y.CabinClass === "E")
    &&
    x.Returns.some(y => y.CabinClass === "Y" || y.CabinClass === "B" || y.CabinClass === "E")
    &&
    x.BrandedFareInfoes.map(y => y.FareBrand.toUpperCase().includes("Flexi".toUpperCase()))
);

console.log(filteredPayload)
