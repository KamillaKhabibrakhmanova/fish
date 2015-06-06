angular.module('starter.values', [])

.value('Species', function() {
[ { code: '100', animal: 'Steller (northern) sea lion' },
 { code: '047', animal: 'Atlantic white-sided dolphin' },
 { code: '002', animal: 'North Atlantic right whale 101' },
 { code: '049', animal: 'Pacific white-sided dolphin' },
 { code: '005', animal: 'Gray whale 105' },
 { code: '053', animal: 'Common dolphin' },
 { code: '007', animal: 'Fin whale 115' },
 { code: '054', animal: 'Bottlenose dolphin' },
 { code: '010', animal: 'Minke whale 116' },
 { code: '055', animal: 'Grampus (Risso’s) dolphin' },
 { code: '011', animal: 'Humpback whale 117' },
 { code: '058', animal: 'Spotted dolphin' },
 { code: '012', animal: 'Sperm `whale 121' },
 { code: '060', animal: 'Spinner dolphin' },
 { code: '016', animal: 'Beluga whale 124' },
 { code: '061', animal: 'Striped dolphin' },
 { code: '038', animal: 'False killer whale 127' },
 { code: '063', animal: 'Northern right whale dolphin' },
 { code: '039', animal: 'Killer whale 129' },
 { code: '068', animal: 'Harbor porpoise' },
 { code: '221', animal: 'Pilot whale 130' },
 { code: '072', animal: 'Dall’s porpoise' },
 { code: '230', animal: 'Beaked whale 131' },
 { code: '235', animal: 'Unidentified small cetacean' },
 { code: '231', animal: 'Bryde’s whale 132' },
 { code: '232', animal: 'Dwarf sperm whale 203' },
 { code: '210', animal: 'Unidentified baleen whale 204' },
 { code: '220', animal: 'Unidentified toothed whale' } ]
})

.value('Injuries', function() {
[ { code: '01 ', injury: 'Visible blood flow' },
 { code: '08', injury: 'Listlessness or inability to defend' },
 { code: '02', injury: 'Loss of/damage to appendage/jaw' },
 { code: '09', injury: 'Inability to swim or dive' },
 { code: '03', injury: 'Inability to use appendage(s)' },
 { code: '10', injury: 'Equilibrium imbalance' },
 { code: '04', injury: 'Asymmetry in shape of body or body position' },
 { code: '11', injury: 'Ingestion of gear' },
 { code: '05', injury: 'Any noticeable swelling or hemorrhage (bruising)' },
 { code: '12', injury: 'Released trailing gear/gear perforating body' },
 { code: '06', injury: 'Laceration (deep cut)' },
 { code: '13', injury: 'Other wound or injury' },
 { code: '07', injury: 'Rupture or puncture of eyeball' },
 { code: '14', injury: 'Killed' } ]
})

.value('USStates', function() {
  return [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]})