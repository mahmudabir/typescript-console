export let data = {
    "RequestTime": "2024-05-09 04:03:14 PM",
    "ResponseTime": "2024-05-09 04:03:23 PM",
    "RequestURL": "api/AirTravel/SearchAir",
    "Success": true,
    "Message": "Searched Air Request Successfully!",
    "Payload": [
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-1",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-1",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 1815.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 1573.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 1815.50,
            "BasePrice": 1573.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MHxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 1815.50,
                    "BaseFare": 1573.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 1815.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 1573.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MHxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-2",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-2",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 1897.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 1655.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 1897.50,
            "BasePrice": 1655.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MXxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 1897.50,
                    "BaseFare": 1655.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 1897.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 1655.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MXxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-3",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-3",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 1897.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 1655.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 1897.50,
            "BasePrice": 1655.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MnxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 1897.50,
                    "BaseFare": 1655.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 1897.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 1655.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MnxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-4",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-4",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-4",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 1923.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 1655.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 1923.50,
            "BasePrice": 1655.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8M3xJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 1923.50,
                    "BaseFare": 1655.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 1923.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 1655.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8M3xJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-5",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-5",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-5",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 1923.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 1655.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 1923.50,
            "BasePrice": 1655.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NHxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 1923.50,
                    "BaseFare": 1655.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 1923.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 1655.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NHxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-6",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-6",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2303.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2303.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NXxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2303.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2303.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NXxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-7",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-7",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2303.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2303.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NnxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2303.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2303.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NnxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-8",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-8",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-8",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2315.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 254.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2315.00,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 254.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8N3xJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2315.00,
                    "BaseFare": 2061.0,
                    "TotalTax": 254.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2315.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 254.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8N3xJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-9",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-9",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-9",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2318.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2318.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8OHxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2318.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2318.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8OHxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-10",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-10",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-10",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2318.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2318.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8OXxJR1RBUkJPQzI1",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2318.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2318.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8OXxJR1RBUkJPQzI1",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-11",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-11",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-11",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2318.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2318.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2318.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2318.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-12",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-12",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-12",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2318.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2318.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2318.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2318.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 45m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-13",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-13",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-13",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "326",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 10:55:00",
                    "ArrivalTime": "2024-06-16 17:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "326",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDEF",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2318.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2318.50,
            "BasePrice": 2061.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2318.50,
                    "BaseFare": 2061.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2318.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2061.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-14",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-14",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2384.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2384.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2384.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2384.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-15",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-15",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2384.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2384.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2384.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2384.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-16",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-16",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2384.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2384.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2384.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2384.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-17",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-17",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2384.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2384.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 242.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2384.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 242.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2384.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 242.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-18",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-18",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-18",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2396.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 254.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2396.00,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 254.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2396.00,
                    "BaseFare": 2142.0,
                    "TotalTax": 254.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2396.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 254.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-19",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-19",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-19",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2396.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 254.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2396.00,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 254.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2396.00,
                    "BaseFare": 2142.0,
                    "TotalTax": 254.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2396.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 254.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-20",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-20",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-20",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MTl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-21",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-21",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-21",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-22",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-22",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-22",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-23",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-23",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-23",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-24",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-24",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-24",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-25",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-25",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-25",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-26",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-26",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-26",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-27",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-27",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-27",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MjZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 50m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-28",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-28",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-28",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "26",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 06:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "26",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "12h 55m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-29",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-29",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-29",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2008",
                    "Origin": "SIN",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 23:40:00",
                    "ArrivalTime": "2024-06-17 06:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2008",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2399.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2399.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 257.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2399.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 257.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2399.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 257.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-30",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-30",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-30",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2408.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2408.30,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2408.30,
                    "BaseFare": 2142.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2408.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mjl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-31",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "2007",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:55:00",
                    "ArrivalTime": "2024-05-24 16:20:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "2007",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-31",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-31",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2408.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2408.30,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2408.30,
                    "BaseFare": 2142.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2408.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-32",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-32",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-32",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2410.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2410.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2410.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2410.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-33",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-33",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-33",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2410.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2410.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2410.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2410.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-34",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-34",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-34",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2410.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2410.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2410.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2410.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-35",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-35",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-35",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2410.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2410.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 268.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2410.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 268.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2410.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 268.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-36",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-36",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-36",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-36",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2422.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 280.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2422.00,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 280.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2422.00,
                    "BaseFare": 2142.0,
                    "TotalTax": 280.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2422.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 280.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-37",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-37",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-37",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-37",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2422.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 280.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2422.00,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 280.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2422.00,
                    "BaseFare": 2142.0,
                    "TotalTax": 280.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2422.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 280.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8MzZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-38",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-38",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-38",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-38",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-39",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-39",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-39",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-39",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-40",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-40",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-40",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-40",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Mzl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-41",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-41",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-41",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-41",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-42",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-42",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-42",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-42",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-43",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-43",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-43",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-43",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-44",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-44",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-44",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-44",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-45",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-45",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-45",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-45",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-46",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-46",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-46",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-46",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "5015",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "5015",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-47",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-47",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-47",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "328",
                    "Origin": "SIN",
                    "Destination": "MUC",
                    "DepartureTime": "2024-06-16 00:30:00",
                    "ArrivalTime": "2024-06-16 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "328",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "2",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-47",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "95",
                    "Origin": "MUC",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 08:00:00",
                    "ArrivalTime": "2024-06-16 09:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "95",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "1",
                    "BookingCode": "W",
                    "BookingCount": "9",
                    "CabinClass": "W",
                    "FareBasis": "NLNCNDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "25 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2425.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2425.50,
            "BasePrice": 2142.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 283.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Value, Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2425.50,
                    "BaseFare": 2142.0,
                    "TotalTax": 283.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2425.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 2142.0,
                            "TotalTax": 283.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-48",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-48",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-48",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2895.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2895.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2895.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2895.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-49",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-49",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-49",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2895.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2895.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2895.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2895.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-50",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-50",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-50",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2895.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2895.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2895.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2895.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NDl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-51",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-51",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-51",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2895.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2895.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 266.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2895.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 266.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2895.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 266.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-52",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-52",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-52",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-52",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2906.80,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 277.80,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2906.80,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 277.80,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2906.80,
                    "BaseFare": 2629.0,
                    "TotalTax": 277.80,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2906.80,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 277.80,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-53",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-53",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-53",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-53",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2906.80,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 277.80,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2906.80,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 277.80,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2906.80,
                    "BaseFare": 2629.0,
                    "TotalTax": 277.80,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2906.80,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 277.80,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-54",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-54",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-54",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-54",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-55",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-55",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-55",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-55",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-56",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-56",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-56",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-56",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-57",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-57",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-57",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-57",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-58",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-58",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-58",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-58",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-59",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-59",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-59",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-59",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-60",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-60",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-60",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-60",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NTl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-61",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-61",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-61",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-61",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-62",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-62",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-62",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-62",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4947",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:00:00",
                    "ArrivalTime": "2024-06-16 10:25:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4947",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-63",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "N",
                    "BookingCount": "9",
                    "CabinClass": "N",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-63",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-63",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "346",
                    "Origin": "SIN",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-06-16 01:25:00",
                    "ArrivalTime": "2024-06-16 08:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "346",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "P",
                    "BookingCount": "9",
                    "CabinClass": "P",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-63",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1185",
                    "Origin": "ZRH",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 09:35:00",
                    "ArrivalTime": "2024-06-16 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1185",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "B",
                    "BookingCount": "9",
                    "CabinClass": "B",
                    "FareBasis": "PLNCSDE",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 2910.30,
                    "NoOfPassenger": 1,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 2910.30,
            "BasePrice": 2629.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 281.30,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "NEGOTIATED FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Standard ",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 2910.30,
                    "BaseFare": 2629.0,
                    "TotalTax": 281.30,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 2910.30,
                            "NoOfPassenger": 1,
                            "BaseFare": 2629.0,
                            "TotalTax": 281.30,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-64",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-64",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-64",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9566.20,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 338.20,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9566.20,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 338.20,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9566.20,
                    "BaseFare": 9228.0,
                    "TotalTax": 338.20,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9566.20,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 338.20,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-65",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-65",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-65",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9566.20,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 338.20,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9566.20,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 338.20,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9566.20,
                    "BaseFare": 9228.0,
                    "TotalTax": 338.20,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9566.20,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 338.20,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 20m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-66",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:30:00",
                    "ArrivalTime": "2024-05-24 06:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-66",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-66",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9639.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 280.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9639.50,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 280.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9639.50,
                    "BaseFare": 9359.0,
                    "TotalTax": 280.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9639.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 280.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "12h 25m",
                    "NoOfStop": 0,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-67",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "325",
                    "Origin": "FRA",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 21:40:00",
                    "ArrivalTime": "2024-05-24 16:05:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "325",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-67",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-67",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9639.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 280.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9639.50,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 280.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9639.50,
                    "BaseFare": 9359.0,
                    "TotalTax": 280.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9639.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 280.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NjZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-68",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-68",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-68",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-68",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9643.20,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 415.20,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9643.20,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 415.20,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9643.20,
                    "BaseFare": 9228.0,
                    "TotalTax": 415.20,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9643.20,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 415.20,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-69",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-69",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-69",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-69",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9646.70,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9646.70,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 418.70,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9646.70,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9646.70,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 418.70,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-70",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-70",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-70",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-70",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9646.70,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9646.70,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 418.70,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njl8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9646.70,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9646.70,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 418.70,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Njl8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-71",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-71",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-71",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-71",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9646.70,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9646.70,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 418.70,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzB8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9646.70,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9646.70,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 418.70,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzB8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-72",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-72",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-72",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-72",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9646.70,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9646.70,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 418.70,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzF8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9646.70,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9646.70,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 418.70,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzF8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "15h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-73",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-73",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-73",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "324",
                    "Origin": "SIN",
                    "Destination": "AMS",
                    "DepartureTime": "2024-06-16 23:55:00",
                    "ArrivalTime": "2024-06-17 07:15:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "324",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-73",
                    "Group": 1,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1003",
                    "Origin": "AMS",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-17 08:05:00",
                    "ArrivalTime": "2024-06-17 09:10:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1003",
                    "OriginTerminal": "",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9646.70,
                    "NoOfPassenger": 1,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9646.70,
            "BasePrice": 9228.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": true,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 418.70,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzJ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9646.70,
                    "BaseFare": 9228.0,
                    "TotalTax": 418.70,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9646.70,
                            "NoOfPassenger": 1,
                            "BaseFare": 9228.0,
                            "TotalTax": 418.70,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzJ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-74",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "1186",
                    "Origin": "FRA",
                    "Destination": "ZRH",
                    "DepartureTime": "2024-05-23 09:45:00",
                    "ArrivalTime": "2024-05-23 10:35:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "1186",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-74",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "345",
                    "Origin": "ZRH",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 11:45:00",
                    "ArrivalTime": "2024-05-24 05:55:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "345",
                    "OriginTerminal": "",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-74",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-74",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9716.50,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 357.50,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9716.50,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 357.50,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzN8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9716.50,
                    "BaseFare": 9359.0,
                    "TotalTax": 357.50,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9716.50,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 357.50,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzN8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-75",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7028",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7028",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-75",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-75",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-75",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9720.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9720.00,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 361.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzR8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9720.00,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9720.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 361.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzR8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 0m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-76",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4167",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 11:00:00",
                    "ArrivalTime": "2024-05-23 12:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4167",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "E",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-76",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-76",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-76",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9720.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9720.00,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 361.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzV8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9720.00,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9720.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 361.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzV8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 10m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-77",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "7217",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:50:00",
                    "ArrivalTime": "2024-05-23 11:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "7217",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-77",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-77",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-77",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9720.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9720.00,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 361.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzZ8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9720.00,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9720.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 361.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8NzZ8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 15m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-78",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4309",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:45:00",
                    "ArrivalTime": "2024-05-23 11:45:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4309",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-78",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-78",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-78",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9720.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9720.00,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 361.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Nzd8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9720.00,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9720.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 361.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Nzd8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        },
        {
            "TotalTravelTimes": [
                {
                    "TravelType": "onward",
                    "TotalTravelDuration": "14h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                },
                {
                    "TravelType": "return",
                    "TotalTravelDuration": "1d 4h 30m",
                    "NoOfStop": 1,
                    "SegmentCount": 0
                }
            ],
            "Onwards": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-79",
                    "Group": 0,
                    "Carrier": "LH",
                    "CarrierName": "Lufthansa Airlines",
                    "FlightNumber": "4301",
                    "Origin": "FRA",
                    "Destination": "MUC",
                    "DepartureTime": "2024-05-23 10:30:00",
                    "ArrivalTime": "2024-05-23 11:30:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "LH",
                    "OperatingCarrierName": "Lufthansa Airlines",
                    "OperatingFlightNumber": "4301",
                    "OriginTerminal": "1",
                    "DestinationTerminal": "2",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-79",
                    "Group": 0,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "327",
                    "Origin": "MUC",
                    "Destination": "SIN",
                    "DepartureTime": "2024-05-23 12:50:00",
                    "ArrivalTime": "2024-05-24 07:00:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "327",
                    "OriginTerminal": "2",
                    "DestinationTerminal": "0",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "30 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "Returns": [
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-79",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "24",
                    "Origin": "SIN",
                    "Destination": "JFK",
                    "DepartureTime": "2024-06-16 12:10:00",
                    "ArrivalTime": "2024-06-16 18:50:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "24",
                    "OriginTerminal": "3",
                    "DestinationTerminal": "4",
                    "BookingCode": "R",
                    "BookingCount": "4",
                    "CabinClass": "R",
                    "FareBasis": "RT5SGR10",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                },
                {
                    "AirSegment_Key": "SP2F-16778406019222351238-79",
                    "Group": 1,
                    "Carrier": "SQ",
                    "CarrierName": "Singapore Airlines",
                    "FlightNumber": "25",
                    "Origin": "JFK",
                    "Destination": "FRA",
                    "DepartureTime": "2024-06-16 20:55:00",
                    "ArrivalTime": "2024-06-17 10:40:00",
                    "TravelDuration": "0m",
                    "Distance": null,
                    "AvailabilitySource": null,
                    "OperatingCarrier": "SQ",
                    "OperatingCarrierName": "Singapore Airlines",
                    "OperatingFlightNumber": "25",
                    "OriginTerminal": "4",
                    "DestinationTerminal": "1",
                    "BookingCode": "Y",
                    "BookingCount": "9",
                    "CabinClass": "Y",
                    "FareBasis": "YIFSQ",
                    "Currency": "SGD",
                    "AirBaggageAllowance": "35 Kg",
                    "Equipment": null,
                    "HiddenSegment": null
                }
            ],
            "FareBreakdown": [
                {
                    "TaxesBreakdown": [],
                    "PassengerType": "ADT",
                    "TotalFare": 9720.00,
                    "NoOfPassenger": 1,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "Surcharges": 0.0,
                    "ApiDiscount": 0.0,
                    "Fees": 0.0,
                    "AIT": 0.0
                }
            ],
            "AirPricingSolution_Key": "SP2F-16778406019222351238",
            "TotalPrice": 9720.00,
            "BasePrice": 9359.0,
            "AIT": 0.0,
            "APICurrencyType": "SGD",
            "PassengerType": "ADT",
            "Adults": 1,
            "Childs": 0,
            "Infants": 0,
            "PlatingCarrier": "SQ",
            "PlatingCarrierName": "Singapore Airlines",
            "IsRefundable": false,
            "IsBookable": true,
            "IsTaxBreakdownAvailable": true,
            "TotalTax": 361.00,
            "LatestTicketingTime": "5/9/2024 10:33:22 AM",
            "ChangePenalties": null,
            "CancelPenalties": null,
            "FareType": "PUBLIC FARE",
            "TripType": "RoundTrip",
            "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Nzh8SUdUQVJCT0MyNQ==",
            "HasOwnID": true,
            "OwnIDRef": "IGTARBOC25",
            "ApiTotalDiscount": 0.0,
            "IGXKey": "IGXTEST0603002",
            "AdditionalText": null,
            "GDSCode": "1A",
            "IsBrandedFare": true,
            "BrandedFareInfoes": [
                {
                    "FareBrand": "Premium Economy Lite, Economy Flexi",
                    "BrandedFareInfoDetail": {
                        "Cabin Baggage": {
                            "Text": "ADT,CHD - 7 KG/1 PIECE INFT - 10KG",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Checked Baggage": {
                            "Text": "30KG/2 PIECES",
                            "OtherText": "(* As per the weight received from system.)",
                            "IsAvailableContent": false
                        },
                        "Purchase Baggage": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Change": {
                            "Text": "Pay to Change",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Cancellation": {
                            "Text": "Pay to cancel up to 24 hours prior to departure ",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Meal": {
                            "Text": "Pre-purchase available",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Seat selection": {
                            "Text": "Free (Preferred & Standard seat only)",
                            "OtherText": "",
                            "IsAvailableContent": false
                        },
                        "Lounge Access": {
                            "Text": "Pay",
                            "OtherText": "",
                            "IsAvailableContent": false
                        }
                    },
                    "TotalFare": 9720.00,
                    "BaseFare": 9359.0,
                    "TotalTax": 361.00,
                    "FareBreakdowns": [
                        {
                            "TaxesBreakdown": [],
                            "PassengerType": "ADT",
                            "TotalFare": 9720.00,
                            "NoOfPassenger": 1,
                            "BaseFare": 9359.0,
                            "TotalTax": 361.00,
                            "Surcharges": 0.0,
                            "ApiDiscount": 0.0,
                            "Fees": 0.0,
                            "AIT": 0.0
                        }
                    ],
                    "SegmentCode": "SUdYVEVTVDA2MDMwMDJfSUdUQVJCT0MyNV82Mzg1MDg2NzQwMjM3OTYwMTZ8Nzh8SUdUQVJCT0MyNQ==",
                    "Remarks": "",
                    "IsRefundable": false
                }
            ],
            "IsPassportAndVisaRequired": false
        }
    ],
    "PayloadType": "Search Air",
    "ApiWiseStatus": [
        {
            "ApiName": "SQ 1",
            "ApiCode": "IGTARBOC25",
            "StartTime": "09-May-2024 04:03:14 PM",
            "ResponseJsonUrl": "SQ_IGXTEST0603002_638508673944870625",
            "EndTime": "09-May-2024 04:03:22 PM",
            "ConvertionTime": "09-May-2024 04:03:23 PM",
            "IsSuccess": true,
            "Message": null
        }
    ],
    "ActualErrorMessages": []
}