export function filter() {

    const payload = data; // data => Any

    let filteredPayload = payload.BaggageOptions.flatMap(x => x.Baggages)

    console.log(filteredPayload.length)

    const filteredPayloadString = JSON.stringify(filteredPayload, null, 4)

    Bun.write('src/filteredData.json', filteredPayloadString);

}

let data = {
    "AirItineraryCode": "RDpcUHJvamVjdFxUb3VyXERvY3VtZW50YXRpb25cUWF0YXIgQWlyd2F5cyBJbXBsZW1lbnRhdGlvbiBndWlkZVxRckFwaUludGVncmF0aW9uXFFyQXBpSW50ZWdyYXRpb25cUS1PZmZlclByaWNlUmVzcG9uc2UueG1s",
    "AirBaggageItineraryCode": null,
    "SegmentCode": "RDpcUHJvamVjdFxUb3VyXERvY3VtZW50YXRpb25cUWF0YXIgQWlyd2F5cyBJbXBsZW1lbnRhdGlvbiBndWlkZVxRckFwaUludGVncmF0aW9uXFFyQXBpSW50ZWdyYXRpb25cUS1BaXJTaG9wcGluZ1Jlc3BvbnNlLnhtbHwxRjJRUlpfNVFHRVB0MHhwdmN2OGJlWUFBUjZoaE4wblZSODsxRjJRUlpfNVFHRVB0MHhwdmN2OGJlWUFBUjZoaE4wblZSOC0xfElHQ0FFQkdDNDY=",
    "IGXKey": "BLT45E7C9A386202638502459217891488",
    "Meals": [],
    "AirMeals": null,
    "BaggageOptions": [
      {
        "Baggages": [
          {
            "Id": "DAC-JFK-1",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 5,
            "Price": 110000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-2",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 10,
            "Price": 220000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-3",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 15,
            "Price": 330000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-4",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 20,
            "Price": 440000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-5",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 25,
            "Price": 550000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-6",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 30,
            "Price": 660000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-7",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 35,
            "Price": 770000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-8",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 40,
            "Price": 880000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-9",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 45,
            "Price": 990000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-10",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 50,
            "Price": 1100000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-11",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 55,
            "Price": 1210000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-12",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 60,
            "Price": 1320000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-13",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 65,
            "Price": 1430000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-14",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 70,
            "Price": 1540000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-15",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 75,
            "Price": 1650000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-16",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 80,
            "Price": 1760000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-17",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 85,
            "Price": 1870000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-18",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 90,
            "Price": 1980000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-19",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 95,
            "Price": 2090000,
            "Eligibility": null
          },
          {
            "Id": "DAC-JFK-20",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 100,
            "Price": 2200000,
            "Eligibility": null
          }
        ],
        "Eligibility": {
          "OfferCode": "SUP3-4651059243432104065-1-289",
          "PaxRefID": "PAX2",
          "SegmentRef": "JRN1",
          "PaxType": "ADT",
          "PaxName": "",
          "PaxDocNo": null,
          "PaxDob": null,
          "TripDetail": "DAC-JFK",
          "Price": 0,
          "Discount": 0
        }
      },
      {
        "Baggages": [
          {
            "Id": "JFK-DAC-1",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 5,
            "Price": 110000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-2",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 10,
            "Price": 220000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-3",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 15,
            "Price": 330000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-4",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 20,
            "Price": 440000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-5",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 25,
            "Price": 550000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-6",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 30,
            "Price": 660000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-7",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 35,
            "Price": 770000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-8",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 40,
            "Price": 880000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-9",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 45,
            "Price": 990000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-10",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 50,
            "Price": 1100000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-11",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 55,
            "Price": 1210000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-12",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 60,
            "Price": 1320000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-13",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 65,
            "Price": 1430000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-14",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 70,
            "Price": 1540000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-15",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 75,
            "Price": 1650000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-16",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 80,
            "Price": 1760000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-17",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 85,
            "Price": 1870000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-18",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 90,
            "Price": 1980000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-19",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 95,
            "Price": 2090000,
            "Eligibility": null
          },
          {
            "Id": "JFK-DAC-20",
            "BaggageType": "PREPAID FIRST BAG PC",
            "Quantity": 100,
            "Price": 2200000,
            "Eligibility": null
          }
        ],
        "Eligibility": {
          "OfferCode": "SUP3-4651059243432104065-1-290",
          "PaxRefID": "PAX2",
          "SegmentRef": "JRN2",
          "PaxType": "ADT",
          "PaxName": "",
          "PaxDocNo": null,
          "PaxDob": null,
          "TripDetail": "JFK-DAC",
          "Price": 0,
          "Discount": 0
        }
      }
    ],
    "WheelChair": null,
    "WheelChairs": [],
    "OthersServices": null
  }