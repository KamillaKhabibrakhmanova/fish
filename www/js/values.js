angular.module('starter.values', [])
.value('Species', 
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
)

.value('Fisheries',  [ { code: '47', fishery: 'AK Bristol Bay salmon drift gillnet fishery' },
  { code: '48', fishery: 'AK Bristol Bay salmon set gillnet fishery' },
  { code: '45', fishery: 'AK Cook nlet salmon drift gillnet fishery' },
  { code: '122', fishery: 'AK Cook nlet salmon set gillnet' },
  { code: '18', fishery: 'AK Kodiak salmon set gillnet fishery' },
  { code: '08', fishery: 'AK Peninsula/Aleutian slands salmon drift gillnet fishery' },
  { code: '19', fishery: 'AK Peninsula/Aleutian slands salmon set gillnet fishery' },
  { code: '06', fishery: 'AK Prince William Sound salmon drift gillnet fishery' },
  { code: '15', fishery: 'AK Southeast salmon drift gillnet fishery' },
  { code: '16', fishery: 'AK Yakutat salmon set gillnet fishery' },
  { code: '', fishery: 'Purse seine fisheries' },
  { code: '120', fishery: 'AK Kodiak salmon purse seine fishery' },
  { code: '121', fishery: 'AK Cook nlet salmon purse seine fishery' },
  { code: '101', fishery: 'AK Bering Sea, Aleutian slands, flatfish trawl fishery' },
  { code: '102', fishery: 'AK Bering Sea, Aleutian slands pollock trawl fishery' },
  { code: '103', fishery: 'AK Bering Sea, Aleutian slands rockfish trawl fishery' },
  { code: '11',
    fishery: 'CA/OR thresher shark/swordfish drift gillnet fishery (>_14 in. mesh) (includes the high seas Pacific Highly Migratory' },
  { code: '12',
    fishery: 'CA halibut/white seabass and other species set gillnet (>3.5in mesh)' },
  { code: '21',
    fishery: 'WA Puget Sound Region salmon drift gillnet fishery (includes all inland waters south of US-Canada border and eastward of the Bonilla-Tatoosh line--Treaty ndian fishing is excluded)' },
  { code: '92',
    fishery: 'CA yellowtail, barracuda and white seabass drift gillnet fishery (mesh size ?3.5in and <14in)' },
  { code: '91',
    fishery: 'H deep-set (tuna target) longline/set line fishery (includes the high seas Western Pacific Pelagic (deep-set component) fishery)' },
  { code: '130',
    fishery: 'H shallow-set (swordfish target) longline/set line fishery (includes the high seas Western Pacific Pelagic (shallow-set component) fishery)' },
  { code: '166', fishery: 'American Samoa longline fishery' },
  { code: '167', fishery: 'H shortline fishery' },
  { code: '131', fishery: 'CA spot prawn pot fishery' },
  { code: '132', fishery: 'CA Dungeness crab pot fishery' },
  { code: '133', fishery: 'OR Dungeness crab pot fishery' },
  { code: '134', fishery: 'WA/OR/CA sablefish pot fishery' },
  { code: '173', fishery: 'WA Coastal Dungeness crab pot/trap fishery' },
  { code: '57', fishery: 'Northeast sink gillnet fishery' },
  { code: '59', fishery: 'Mid-Atlantic gillnet fishery' },
  { code: '83', fishery: 'NC inshore gillnet fishery' },
  { code: '58', fishery: 'Northeast anchored float gillnet fishery' },
  { code: '89', fishery: 'Northeast drift gillnet fishery' },
  { code: '84', fishery: 'Southeast Atlantic gillnet fishery' },
  { code: '40', fishery: 'Southeastern U.S. Atlantic shark gillnet fishery' },
  { code: '110', fishery: 'Chesapeake Bay inshore gillnet fishery' },
  { code: '05',
    fishery: 'Atlantic Ocean, Caribbean, Gulf of Mexico large pelagics longline fishery (includes the high seas Atlantic Highly Migratory Species longline fishery)' },
  { code: '70',
    fishery: 'Mid-Atlantic mid-water trawl (including pair trawl) fishery' },
  { code: '65', fishery: 'Northeast mid-water trawl (including pair trawl) fishery' },
  { code: '77', fishery: 'Northeast bottom trawl fishery' },
  { code: '100', fishery: 'Mid-Atlantic bottom trawl fishery' },
  { code: '175',
    fishery: 'Southeastern U.S. Atlantic, Gulf of Mexico shrimp trawl fishery' },
  { code: '71', fishery: 'Mid-Atlantic haul/beach seine fishery' },
  { code: '87', fishery: 'NC long haul seine fishery' },
  { code: '111', fishery: 'Mid-Atlantic menhaden purse seine fishery' },
  { code: '72', fishery: 'NC roe mullet stop net fishery' },
  { code: '88', fishery: 'VA pound net fishery' },
  { code: '74', fishery: 'Northeast/Mid-Atlantic American lobster trap/pot fishery' },
  { code: '97', fishery: 'Atlantic mixed species trap/pot fishery' },
  { code: '85', fishery: 'Atlantic blue crab trap/pot fishery' },
  { code: '176',
    fishery: 'Southeastern U.S. Atlantic, Gulf of Mexico stone crab trap/pot fishery' },
  { code: '66', fishery: 'Gulf of Mexico menhaden purse seine fishery' },
  { code: '95', fishery: 'Gulf of Mexico gillnet fishery' },
  { code: '135', fishery: 'Atlantic Highly Migratory Species drift gillnet fishery' },
  { code: '137', fishery: 'Atlantic Highly Migratory Species trawl fishery' },
  { code: '140', fishery: 'Western Pacific Pelagic trawl fishery' },
  { code: '168', fishery: 'CCAMLR trawl fishery' },
  { code: '142', fishery: 'South Pacific Tuna purse seine fishery' },
  { code: '143', fishery: 'Western Pacific Pelagic purse seine fishery' },
  { code: '147', fishery: 'South Pacific Albacore Troll longline fishery' },
  { code: '148', fishery: 'South Pacific Tuna longline fishery' },
  { code: '169', fishery: 'CCAMLR longline fishery' },
  { code: '149', fishery: 'Atlantic Highly Migratory Species troll fishery' },
  { code: '150', fishery: 'South Pacific Albacore Troll troll fishery' },
  { code: '151', fishery: 'South Pacific Tuna troll fishery' },
  { code: '152', fishery: 'Western Pacific Pelagic troll fishery' },
  { code: '153',
    fishery: 'Atlantic Highly Migratory Species handline/pole and line fishery' },
  { code: '154',
    fishery: 'Pacific Highly Migratory Species handline/pole and line fishery' },
  { code: '155',
    fishery: 'South Pacific Albacore Troll handline/pole and line fishery' },
  { code: '156', fishery: 'Western Pacific Pelagic handline/pole and line fishery' },
  { code: '158', fishery: 'Pacific Highly Migratory Species liner (NE) fishery' },
  { code: '159', fishery: 'South Pacific Albacore Troll liner (NE) fishery' },
  { code: '160', fishery: 'Western Pacific Pelagic liner (NE) fishery' } ])

.value('Injuries',
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
 { code: '14', injury: 'Killed' } ])

.value('USStates', 

    [{
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
]);