const cities = [
 {
   "city": "Kabul",
   "lat": 34.5253,
   "lng": 69.1783,
   "country": "Afghanistan",
   "population": 4273156
 },
 {
   "city": "Kandahār",
   "lat": 31.62,
   "lng": 65.7158,
   "country": "Afghanistan",
   "population": 614254
 },
 {
   "city": "Herāt",
   "lat": 34.3419,
   "lng": 62.2031,
   "country": "Afghanistan",
   "population": 556205
 },
 {
   "city": "Tirana",
   "lat": 41.3289,
   "lng": 19.8178,
   "country": "Albania",
   "population": 418495
 },
 {
   "city": "Vlorë",
   "lat": 40.4667,
   "lng": 19.4833,
   "country": "Albania",
   "population": 130827
 },
 {
   "city": "Kamëz",
   "lat": 41.3833,
   "lng": 19.7667,
   "country": "Albania",
   "population": 126777
 },
 {
   "city": "Algiers",
   "lat": 36.7539,
   "lng": 3.0589,
   "country": "Algeria",
   "population": 3415811
 },
 {
   "city": "Oran",
   "lat": 35.6969,
   "lng": -0.6331,
   "country": "Algeria",
   "population": 852000
 },
 {
   "city": "Constantine",
   "lat": 36.365,
   "lng": 6.6147,
   "country": "Algeria",
   "population": 448374
 },
 {
   "city": "Pago Pago",
   "lat": -14.274,
   "lng": -170.7046,
   "country": "American Samoa",
   "population": 12576
 },
 {
   "city": "Andorra la Vella",
   "lat": 42.5,
   "lng": 1.5,
   "country": "Andorra",
   "population": 22615
 },
 {
   "city": "Escaldes-Engordany",
   "lat": 42.5089,
   "lng": 1.5408,
   "country": "Andorra",
   "population": 14521
 },
 {
   "city": "Encamp",
   "lat": 42.5361,
   "lng": 1.5828,
   "country": "Andorra",
   "population": 12338
 },
 {
   "city": "Luanda",
   "lat": -8.8383,
   "lng": 13.2344,
   "country": "Angola",
   "population": 9051000
 },
 {
   "city": "Cacuaco",
   "lat": -8.8053,
   "lng": 13.2444,
   "country": "Angola",
   "population": 1279488
 },
 {
   "city": "Lubango",
   "lat": -14.9167,
   "lng": 13.5,
   "country": "Angola",
   "population": 776249
 },
 {
   "city": "The Valley",
   "lat": 18.2167,
   "lng": -63.05,
   "country": "Anguilla",
   "population": null
 },
 {
   "city": "Saint John’s",
   "lat": 17.1167,
   "lng": -61.85,
   "country": "Antigua and Barbuda",
   "population": 22219
 },
 {
   "city": "Buenos Aires",
   "lat": -34.5997,
   "lng": -58.3819,
   "country": "Argentina",
   "population": 16710000
 },
 {
   "city": "Córdoba",
   "lat": -31.4167,
   "lng": -64.1833,
   "country": "Argentina",
   "population": 1565112
 },
 {
   "city": "Rosario",
   "lat": -32.9575,
   "lng": -60.6394,
   "country": "Argentina",
   "population": 1276000
 },
 {
   "city": "Yerevan",
   "lat": 40.1814,
   "lng": 44.5144,
   "country": "Armenia",
   "population": 1075800
 },
 {
   "city": "Gyumri",
   "lat": 40.7894,
   "lng": 43.8475,
   "country": "Armenia",
   "population": 121976
 },
 {
   "city": "Vanadzor",
   "lat": 40.8128,
   "lng": 44.4883,
   "country": "Armenia",
   "population": 90525
 },
 {
   "city": "Oranjestad",
   "lat": 12.5186,
   "lng": -70.0358,
   "country": "Aruba",
   "population": 34980
 },
 {
   "city": "Tanki Leendert",
   "lat": 12.5418,
   "lng": -70.022,
   "country": "Aruba",
   "population": 21495
 },
 {
   "city": "Sydney",
   "lat": -33.8678,
   "lng": 151.21,
   "country": "Australia",
   "population": 4840600
 },
 {
   "city": "Melbourne",
   "lat": -37.8142,
   "lng": 144.9631,
   "country": "Australia",
   "population": 4529500
 },
 {
   "city": "Brisbane",
   "lat": -27.4678,
   "lng": 153.0281,
   "country": "Australia",
   "population": 2360241
 },
 {
   "city": "Vienna",
   "lat": 48.2083,
   "lng": 16.3725,
   "country": "Austria",
   "population": 1973403
 },
 {
   "city": "Graz",
   "lat": 47.0708,
   "lng": 15.4386,
   "country": "Austria",
   "population": 289440
 },
 {
   "city": "Linz",
   "lat": 48.3058,
   "lng": 14.2864,
   "country": "Austria",
   "population": 210165
 },
 {
   "city": "Baku",
   "lat": 40.3667,
   "lng": 49.8352,
   "country": "Azerbaijan",
   "population": 2300500
 },
 {
   "city": "Sumqayıt",
   "lat": 40.5917,
   "lng": 49.6397,
   "country": "Azerbaijan",
   "population": 341200
 },
 {
   "city": "Gəncə",
   "lat": 40.6828,
   "lng": 46.3606,
   "country": "Azerbaijan",
   "population": 331400
 },
 {
   "city": "Manama",
   "lat": 26.225,
   "lng": 50.5775,
   "country": "Bahrain",
   "population": 436000
 },
 {
   "city": "Al Muḩarraq",
   "lat": 26.25,
   "lng": 50.6167,
   "country": "Bahrain",
   "population": 75000
 },
 {
   "city": "Madīnat Ḩamad",
   "lat": 26.1128,
   "lng": 50.5139,
   "country": "Bahrain",
   "population": 52700
 },
 {
   "city": "Dhaka",
   "lat": 23.7639,
   "lng": 90.3889,
   "country": "Bangladesh",
   "population": 18627000
 },
 {
   "city": "Chattogram",
   "lat": 22.335,
   "lng": 91.8325,
   "country": "Bangladesh",
   "population": 7000000
 },
 {
   "city": "Nārāyanganj",
   "lat": 23.62,
   "lng": 90.5,
   "country": "Bangladesh",
   "population": 1572386
 },
 {
   "city": "Bridgetown",
   "lat": 13.0975,
   "lng": -59.6167,
   "country": "Barbados",
   "population": 110000
 },
 {
   "city": "Minsk",
   "lat": 53.9,
   "lng": 27.5667,
   "country": "Belarus",
   "population": 2009786
 },
 {
   "city": "Homyel’",
   "lat": 52.4453,
   "lng": 30.9842,
   "country": "Belarus",
   "population": 510300
 },
 {
   "city": "Vitsyebsk",
   "lat": 55.1917,
   "lng": 30.2056,
   "country": "Belarus",
   "population": 366299
 },
 {
   "city": "Brussels",
   "lat": 50.8467,
   "lng": 4.3525,
   "country": "Belgium",
   "population": 1743000
 },
 {
   "city": "Antwerp",
   "lat": 51.2178,
   "lng": 4.4003,
   "country": "Belgium",
   "population": 529247
 },
 {
   "city": "Gent",
   "lat": 51.0536,
   "lng": 3.7253,
   "country": "Belgium",
   "population": 265086
 },
 {
   "city": "Belize City",
   "lat": 17.4986,
   "lng": -88.1886,
   "country": "Belize",
   "population": 57169
 },
 {
   "city": "Orange Walk",
   "lat": 18.075,
   "lng": -88.5583,
   "country": "Belize",
   "population": 18000
 },
 {
   "city": "Belmopan",
   "lat": 17.2514,
   "lng": -88.7669,
   "country": "Belize",
   "population": 17222
 },
 {
   "city": "Cotonou",
   "lat": 6.3667,
   "lng": 2.4333,
   "country": "Benin",
   "population": 762000
 },
 {
   "city": "Abomey-Calavi",
   "lat": 6.4486,
   "lng": 2.3556,
   "country": "Benin",
   "population": 655965
 },
 {
   "city": "Porto-Novo",
   "lat": 6.4972,
   "lng": 2.605,
   "country": "Benin",
   "population": 300000
 },
 {
   "city": "Hamilton",
   "lat": 32.2942,
   "lng": -64.7839,
   "country": "Bermuda",
   "population": 854
 },
 {
   "city": "Thimphu",
   "lat": 27.4722,
   "lng": 89.6361,
   "country": "Bhutan",
   "population": 104000
 },
 {
   "city": "Phuntsholing",
   "lat": 26.85,
   "lng": 89.3833,
   "country": "Bhutan",
   "population": 27658
 },
 {
   "city": "Paro",
   "lat": 27.4333,
   "lng": 89.4167,
   "country": "Bhutan",
   "population": 15000
 },
 {
   "city": "Santa Cruz",
   "lat": -17.7892,
   "lng": -63.1975,
   "country": "Bolivia",
   "population": 3151676
 },
 {
   "city": "La Paz",
   "lat": -16.5,
   "lng": -68.15,
   "country": "Bolivia",
   "population": 2867504
 },
 {
   "city": "El Alto",
   "lat": -16.5047,
   "lng": -68.1633,
   "country": "Bolivia",
   "population": 943000
 },
 {
   "city": "Kralendijk",
   "lat": 12.1444,
   "lng": -68.2656,
   "country": "Bonaire, Sint Eustatius, and Saba",
   "population": 10620
 },
 {
   "city": "Oranjestad",
   "lat": 17.4833,
   "lng": -62.9833,
   "country": "Bonaire, Sint Eustatius, and Saba",
   "population": 1038
 },
 {
   "city": "The Bottom",
   "lat": 17.6261,
   "lng": -63.2492,
   "country": "Bonaire, Sint Eustatius, and Saba",
   "population": 462
 },
 {
   "city": "Sarajevo",
   "lat": 43.8564,
   "lng": 18.4131,
   "country": "Bosnia and Herzegovina",
   "population": 419957
 },
 {
   "city": "Banja Luka",
   "lat": 44.7725,
   "lng": 17.1925,
   "country": "Bosnia and Herzegovina",
   "population": 199191
 },
 {
   "city": "Bijeljina",
   "lat": 44.75,
   "lng": 19.2167,
   "country": "Bosnia and Herzegovina",
   "population": 114663
 },
 {
   "city": "Gaborone",
   "lat": -24.6581,
   "lng": 25.9122,
   "country": "Botswana",
   "population": 231626
 },
 {
   "city": "Francistown",
   "lat": -21.1736,
   "lng": 27.5125,
   "country": "Botswana",
   "population": 103417
 },
 {
   "city": "Molepolole",
   "lat": -24.4067,
   "lng": 25.495,
   "country": "Botswana",
   "population": 67598
 },
 {
   "city": "São Paulo",
   "lat": -23.55,
   "lng": -46.6333,
   "country": "Brazil",
   "population": 23086000
 },
 {
   "city": "Rio de Janeiro",
   "lat": -22.9111,
   "lng": -43.2056,
   "country": "Brazil",
   "population": 12592000
 },
 {
   "city": "Belo Horizonte",
   "lat": -19.9167,
   "lng": -43.9333,
   "country": "Brazil",
   "population": 5328000
 },
 {
   "city": "Road Town",
   "lat": 18.4167,
   "lng": -64.6167,
   "country": "British Virgin Islands",
   "population": 12603
 },
 {
   "city": "Bandar Seri Begawan",
   "lat": 4.8903,
   "lng": 114.9422,
   "country": "Brunei",
   "population": 50000
 },
 {
   "city": "Seria",
   "lat": 4.6141,
   "lng": 114.3302,
   "country": "Brunei",
   "population": 21082
 },
 {
   "city": "Kampong Tunah Jambu",
   "lat": 4.9957,
   "lng": 115.0019,
   "country": "Brunei",
   "population": 8809
 },
 {
   "city": "Sofia",
   "lat": 42.7,
   "lng": 23.33,
   "country": "Bulgaria",
   "population": 1547779
 },
 {
   "city": "Plovdiv",
   "lat": 42.15,
   "lng": 24.75,
   "country": "Bulgaria",
   "population": 383540
 },
 {
   "city": "Varna",
   "lat": 43.2167,
   "lng": 27.9167,
   "country": "Bulgaria",
   "population": 348668
 },
 {
   "city": "Ouagadougou",
   "lat": 12.3686,
   "lng": -1.5275,
   "country": "Burkina Faso",
   "population": 2453496
 },
 {
   "city": "Bobo-Dioulasso",
   "lat": 11.1833,
   "lng": -4.2833,
   "country": "Burkina Faso",
   "population": 903887
 },
 {
   "city": "Koudougou",
   "lat": 12.25,
   "lng": -2.3667,
   "country": "Burkina Faso",
   "population": 160207
 },
 {
   "city": "Bujumbura",
   "lat": -3.3833,
   "lng": 29.3667,
   "country": "Burundi",
   "population": 1075000
 },
 {
   "city": "Gitega",
   "lat": -3.4283,
   "lng": 29.925,
   "country": "Burundi",
   "population": 135467
 },
 {
   "city": "Ngozi",
   "lat": -2.9083,
   "lng": 29.8269,
   "country": "Burundi",
   "population": 39884
 },
 {
   "city": "Praia",
   "lat": 14.918,
   "lng": -23.509,
   "country": "Cabo Verde",
   "population": 127832
 },
 {
   "city": "Mindelo",
   "lat": 16.886,
   "lng": -24.988,
   "country": "Cabo Verde",
   "population": 70468
 },
 {
   "city": "São Filipe",
   "lat": 14.895,
   "lng": -24.498,
   "country": "Cabo Verde",
   "population": 22227
 },
 {
   "city": "Phnom Penh",
   "lat": 11.5694,
   "lng": 104.9211,
   "country": "Cambodia",
   "population": 2129371
 },
 {
   "city": "Siem Reap",
   "lat": 13.3622,
   "lng": 103.8597,
   "country": "Cambodia",
   "population": 147866
 },
 {
   "city": "Battambang",
   "lat": 13.1,
   "lng": 103.2,
   "country": "Cambodia",
   "population": 130000
 },
 {
   "city": "Douala",
   "lat": 4.05,
   "lng": 9.7,
   "country": "Cameroon",
   "population": 5768400
 },
 {
   "city": "Yaoundé",
   "lat": 3.8667,
   "lng": 11.5167,
   "country": "Cameroon",
   "population": 2440462
 },
 {
   "city": "Bamenda",
   "lat": 5.9614,
   "lng": 10.1517,
   "country": "Cameroon",
   "population": 2000000
 },
 {
   "city": "Toronto",
   "lat": 43.7417,
   "lng": -79.3733,
   "country": "Canada",
   "population": 5429524
 },
 {
   "city": "Montréal",
   "lat": 45.5089,
   "lng": -73.5617,
   "country": "Canada",
   "population": 3519595
 },
 {
   "city": "Vancouver",
   "lat": 49.25,
   "lng": -123.1,
   "country": "Canada",
   "population": 2264823
 },
 {
   "city": "George Town",
   "lat": 19.2866,
   "lng": -81.3744,
   "country": "Cayman Islands",
   "population": 27704
 },
 {
   "city": "Bangui",
   "lat": 4.3733,
   "lng": 18.5628,
   "country": "Central African Republic",
   "population": 889231
 },
 {
   "city": "Bimo",
   "lat": 4.2558,
   "lng": 18.4042,
   "country": "Central African Republic",
   "population": 267859
 },
 {
   "city": "Mambéré",
   "lat": 5.5,
   "lng": 15.5,
   "country": "Central African Republic",
   "population": 233666
 },
 {
   "city": "N’Djamena",
   "lat": 12.11,
   "lng": 15.05,
   "country": "Chad",
   "population": 1092066
 },
 {
   "city": "Moundou",
   "lat": 8.5667,
   "lng": 16.0833,
   "country": "Chad",
   "population": 142462
 },
 {
   "city": "Sarh",
   "lat": 9.15,
   "lng": 18.3833,
   "country": "Chad",
   "population": 108061
 },
 {
   "city": "Santiago",
   "lat": -33.4372,
   "lng": -70.6506,
   "country": "Chile",
   "population": 7171000
 },
 {
   "city": "Concepción",
   "lat": -36.8282,
   "lng": -73.0514,
   "country": "Chile",
   "population": 719944
 },
 {
   "city": "Puente Alto",
   "lat": -33.6167,
   "lng": -70.5667,
   "country": "Chile",
   "population": 573935
 },
 {
   "city": "Guangzhou",
   "lat": 23.13,
   "lng": 113.26,
   "country": "China",
   "population": 26940000
 },
 {
   "city": "Shanghai",
   "lat": 31.1667,
   "lng": 121.4667,
   "country": "China",
   "population": 24073000
 },
 {
   "city": "Beijing",
   "lat": 39.904,
   "lng": 116.4075,
   "country": "China",
   "population": 18522000
 },
 {
   "city": "Flying Fish Cove",
   "lat": -10.4167,
   "lng": 105.7167,
   "country": "Christmas Island",
   "population": null
 },
 {
   "city": "Bogotá",
   "lat": 4.7111,
   "lng": -74.0722,
   "country": "Colombia",
   "population": 7968095
 },
 {
   "city": "Timbío",
   "lat": 2.3445,
   "lng": -76.6839,
   "country": "Colombia",
   "population": 4444444
 },
 {
   "city": "Medellín",
   "lat": 6.2308,
   "lng": -75.5906,
   "country": "Colombia",
   "population": 2529403
 },
 {
   "city": "Moroni",
   "lat": -11.699,
   "lng": 43.256,
   "country": "Comoros",
   "population": 111329
 },
 {
   "city": "Mutsamudu",
   "lat": -12.1675,
   "lng": 44.3939,
   "country": "Comoros",
   "population": 30000
 },
 {
   "city": "Ouani",
   "lat": -12.135,
   "lng": 44.4275,
   "country": "Comoros",
   "population": 22501
 },
 {
   "city": "Brazzaville",
   "lat": -4.2694,
   "lng": 15.2714,
   "country": "Congo (Brazzaville)",
   "population": 1827000
 },
 {
   "city": "Pointe-Noire",
   "lat": -4.8,
   "lng": 11.85,
   "country": "Congo (Brazzaville)",
   "population": 829134
 },
 {
   "city": "Tchibota",
   "lat": -4.1794,
   "lng": 11.3731,
   "country": "Congo (Brazzaville)",
   "population": 262931
 },
 {
   "city": "Kinshasa",
   "lat": -4.325,
   "lng": 15.3222,
   "country": "Congo (Kinshasa)",
   "population": 12836000
 },
 {
   "city": "Mbuji-Mayi",
   "lat": -6.15,
   "lng": 23.6,
   "country": "Congo (Kinshasa)",
   "population": 2643000
 },
 {
   "city": "Kananga",
   "lat": -5.897,
   "lng": 22.4488,
   "country": "Congo (Kinshasa)",
   "population": 1971704
 },
 {
   "city": "Avarua",
   "lat": -21.207,
   "lng": -159.771,
   "country": "Cook Islands",
   "population": 5445
 },
 {
   "city": "San José",
   "lat": 9.9325,
   "lng": -84.08,
   "country": "Costa Rica",
   "population": 1543000
 },
 {
   "city": "San Marcos",
   "lat": 10.6204,
   "lng": -84.512,
   "country": "Costa Rica",
   "population": 163745
 },
 {
   "city": "San Ramón",
   "lat": 10.2182,
   "lng": -84.5992,
   "country": "Costa Rica",
   "population": 80566
 },
 {
   "city": "Abidjan",
   "lat": 5.3167,
   "lng": -4.0333,
   "country": "Côte d'Ivoire",
   "population": 4980000
 },
 {
   "city": "Yopougon",
   "lat": 5.3167,
   "lng": -4.0667,
   "country": "Côte d'Ivoire",
   "population": 1571065
 },
 {
   "city": "Cocody",
   "lat": 5.35,
   "lng": -3.9667,
   "country": "Côte d'Ivoire",
   "population": 692583
 },
 {
   "city": "Zagreb",
   "lat": 45.8167,
   "lng": 15.9833,
   "country": "Croatia",
   "population": 809268
 },
 {
   "city": "Rijeka",
   "lat": 45.3272,
   "lng": 14.4411,
   "country": "Croatia",
   "population": 191293
 },
 {
   "city": "Split",
   "lat": 43.51,
   "lng": 16.44,
   "country": "Croatia",
   "population": 178102
 },
 {
   "city": "Havana",
   "lat": 23.1367,
   "lng": -82.3589,
   "country": "Cuba",
   "population": 2141652
 },
 {
   "city": "Santiago de Cuba",
   "lat": 20.0217,
   "lng": -75.8294,
   "country": "Cuba",
   "population": 917340
 },
 {
   "city": "Holguín",
   "lat": 20.8869,
   "lng": -76.2592,
   "country": "Cuba",
   "population": 350191
 },
 {
   "city": "Willemstad",
   "lat": 12.108,
   "lng": -68.935,
   "country": "Curaçao",
   "population": 150000
 },
 {
   "city": "Nicosia",
   "lat": 35.1725,
   "lng": 33.365,
   "country": "Cyprus",
   "population": 330000
 },
 {
   "city": "Limassol",
   "lat": 34.6747,
   "lng": 33.0442,
   "country": "Cyprus",
   "population": 235056
 },
 {
   "city": "Larnaca",
   "lat": 34.9167,
   "lng": 33.6333,
   "country": "Cyprus",
   "population": 84900
 },
 {
   "city": "Prague",
   "lat": 50.0875,
   "lng": 14.4214,
   "country": "Czechia",
   "population": 1335084
 },
 {
   "city": "Olomouc",
   "lat": 49.5939,
   "lng": 17.2508,
   "country": "Czechia",
   "population": 384000
 },
 {
   "city": "Brno",
   "lat": 49.1925,
   "lng": 16.6083,
   "country": "Czechia",
   "population": 382405
 },
 {
   "city": "Copenhagen",
   "lat": 55.6761,
   "lng": 12.5683,
   "country": "Denmark",
   "population": 1366301
 },
 {
   "city": "Aarhus",
   "lat": 56.1572,
   "lng": 10.2107,
   "country": "Denmark",
   "population": 285273
 },
 {
   "city": "Odense",
   "lat": 55.3958,
   "lng": 10.3886,
   "country": "Denmark",
   "population": 180863
 },
 {
   "city": "Djibouti",
   "lat": 11.5883,
   "lng": 43.145,
   "country": "Djibouti",
   "population": 603900
 },
 {
   "city": "Arta",
   "lat": 11.5236,
   "lng": 42.8472,
   "country": "Djibouti",
   "population": 75654
 },
 {
   "city": "Ali Sabieh",
   "lat": 11.15,
   "lng": 42.7167,
   "country": "Djibouti",
   "population": 37939
 },
 {
   "city": "Roseau",
   "lat": 15.3014,
   "lng": -61.3883,
   "country": "Dominica",
   "population": 16582
 },
 {
   "city": "Santo Domingo",
   "lat": 18.4764,
   "lng": -69.8933,
   "country": "Dominican Republic",
   "population": 2581827
 },
 {
   "city": "Santiago",
   "lat": 19.4572,
   "lng": -70.6889,
   "country": "Dominican Republic",
   "population": 1343423
 },
 {
   "city": "Santo Domingo Este",
   "lat": 18.4855,
   "lng": -69.8734,
   "country": "Dominican Republic",
   "population": 948855
 },
 {
   "city": "Guayaquil",
   "lat": -2.19,
   "lng": -79.8875,
   "country": "Ecuador",
   "population": 2723665
 },
 {
   "city": "Quito",
   "lat": -0.22,
   "lng": -78.5125,
   "country": "Ecuador",
   "population": 2011388
 },
 {
   "city": "Cuenca",
   "lat": -2.8974,
   "lng": -79.0045,
   "country": "Ecuador",
   "population": 329928
 },
 {
   "city": "Cairo",
   "lat": 30.0444,
   "lng": 31.2358,
   "country": "Egypt",
   "population": 20296000
 },
 {
   "city": "Giza",
   "lat": 29.987,
   "lng": 31.2118,
   "country": "Egypt",
   "population": 5598402
 },
 {
   "city": "Alexandria",
   "lat": 31.1975,
   "lng": 29.8925,
   "country": "Egypt",
   "population": 4870000
 },
 {
   "city": "San Salvador",
   "lat": 13.6989,
   "lng": -89.1914,
   "country": "El Salvador",
   "population": 567698
 },
 {
   "city": "Usulután",
   "lat": 13.35,
   "lng": -88.45,
   "country": "El Salvador",
   "population": 378606
 },
 {
   "city": "Santa Ana",
   "lat": 13.995,
   "lng": -89.5561,
   "country": "El Salvador",
   "population": 280000
 },
 {
   "city": "Bata",
   "lat": 1.865,
   "lng": 9.77,
   "country": "Equatorial Guinea",
   "population": 250770
 },
 {
   "city": "Malabo",
   "lat": 3.75,
   "lng": 8.7833,
   "country": "Equatorial Guinea",
   "population": 187302
 },
 {
   "city": "Ebebiyín",
   "lat": 2.15,
   "lng": 11.3167,
   "country": "Equatorial Guinea",
   "population": 36565
 },
 {
   "city": "Asmara",
   "lat": 15.3228,
   "lng": 38.925,
   "country": "Eritrea",
   "population": 963000
 },
 {
   "city": "Keren",
   "lat": 15.7778,
   "lng": 38.4581,
   "country": "Eritrea",
   "population": 146500
 },
 {
   "city": "Gwelej",
   "lat": 14.75,
   "lng": 36.7167,
   "country": "Eritrea",
   "population": 100000
 },
 {
   "city": "Tallinn",
   "lat": 59.4372,
   "lng": 24.7453,
   "country": "Estonia",
   "population": 438341
 },
 {
   "city": "Tartu",
   "lat": 58.3833,
   "lng": 26.7167,
   "country": "Estonia",
   "population": 91407
 },
 {
   "city": "Narva",
   "lat": 59.3758,
   "lng": 28.1961,
   "country": "Estonia",
   "population": 53424
 },
 {
   "city": "Addis Ababa",
   "lat": 9.03,
   "lng": 38.74,
   "country": "Ethiopia",
   "population": 3041002
 },
 {
   "city": "Godē",
   "lat": 5.9527,
   "lng": 43.5516,
   "country": "Ethiopia",
   "population": 980782
 },
 {
   "city": "Ērer Sātā",
   "lat": 9.5667,
   "lng": 41.3833,
   "country": "Ethiopia",
   "population": 649000
 },
 {
   "city": "Stanley",
   "lat": -51.7,
   "lng": -57.85,
   "country": "Falkland Islands (Islas Malvinas)",
   "population": 2213
 },
 {
   "city": "Tórshavn",
   "lat": 62,
   "lng": -6.7833,
   "country": "Faroe Islands",
   "population": 13326
 },
 {
   "city": "Klaksvík",
   "lat": 62.2375,
   "lng": -6.539,
   "country": "Faroe Islands",
   "population": 4664
 },
 {
   "city": "Hvalba",
   "lat": 61.6,
   "lng": -6.9556,
   "country": "Faroe Islands",
   "population": 713
 },
 {
   "city": "Palikir",
   "lat": 6.9178,
   "lng": 158.185,
   "country": "Federated States of Micronesia",
   "population": 6227
 },
 {
   "city": "Kolonia",
   "lat": 6.9639,
   "lng": 158.2081,
   "country": "Federated States of Micronesia",
   "population": 6074
 },
 {
   "city": "Colonia",
   "lat": 9.5167,
   "lng": 138.1333,
   "country": "Federated States of Micronesia",
   "population": 3126
 },
 {
   "city": "Suva",
   "lat": -18.1416,
   "lng": 178.4419,
   "country": "Fiji",
   "population": 185913
 },
 {
   "city": "Nadi",
   "lat": -17.8,
   "lng": 177.4167,
   "country": "Fiji",
   "population": 71048
 },
 {
   "city": "Nausori",
   "lat": -18.0244,
   "lng": 178.5454,
   "country": "Fiji",
   "population": 57882
 },
 {
   "city": "Helsinki",
   "lat": 60.1708,
   "lng": 24.9375,
   "country": "Finland",
   "population": 1268296
 },
 {
   "city": "Tampere",
   "lat": 61.4981,
   "lng": 23.76,
   "country": "Finland",
   "population": 334112
 },
 {
   "city": "Espoo",
   "lat": 60.2056,
   "lng": 24.6556,
   "country": "Finland",
   "population": 297132
 },
 {
   "city": "Paris",
   "lat": 48.8567,
   "lng": 2.3522,
   "country": "France",
   "population": 11060000
 },
 {
   "city": "Marseille",
   "lat": 43.2964,
   "lng": 5.37,
   "country": "France",
   "population": 870731
 },
 {
   "city": "Lyon",
   "lat": 45.76,
   "lng": 4.84,
   "country": "France",
   "population": 522969
 },
 {
   "city": "Cayenne",
   "lat": 4.933,
   "lng": -52.33,
   "country": "French Guiana",
   "population": 61550
 },
 {
   "city": "Saint-Laurent-du-Maroni",
   "lat": 5.4976,
   "lng": -54.0325,
   "country": "French Guiana",
   "population": 24287
 },
 {
   "city": "Kourou",
   "lat": 5.16,
   "lng": -52.6499,
   "country": "French Guiana",
   "population": 24029
 },
 {
   "city": "Papeete",
   "lat": -17.5334,
   "lng": -149.5667,
   "country": "French Polynesia",
   "population": 131695
 },
 {
   "city": "Libreville",
   "lat": 0.3903,
   "lng": 9.4542,
   "country": "Gabon",
   "population": 797003
 },
 {
   "city": "Port-Gentil",
   "lat": -0.7167,
   "lng": 8.7833,
   "country": "Gabon",
   "population": 136462
 },
 {
   "city": "Franceville",
   "lat": -1.6333,
   "lng": 13.5833,
   "country": "Gabon",
   "population": 110568
 },
 {
   "city": "Gaza",
   "lat": 31.5069,
   "lng": 34.456,
   "country": "Gaza Strip",
   "population": 590481
 },
 {
   "city": "Rafaḩ",
   "lat": 31.2886,
   "lng": 34.2519,
   "country": "Gaza Strip",
   "population": 152950
 },
 {
   "city": "Khān Yūnis",
   "lat": 31.3444,
   "lng": 34.3031,
   "country": "Gaza Strip",
   "population": 142637
 },
 {
   "city": "Tbilisi",
   "lat": 41.7225,
   "lng": 44.7925,
   "country": "Georgia",
   "population": 1118035
 },
 {
   "city": "Batumi",
   "lat": 41.6458,
   "lng": 41.6417,
   "country": "Georgia",
   "population": 169095
 },
 {
   "city": "Kutaisi",
   "lat": 42.25,
   "lng": 42.7,
   "country": "Georgia",
   "population": 147900
 },
 {
   "city": "Berlin",
   "lat": 52.52,
   "lng": 13.405,
   "country": "Germany",
   "population": 4473101
 },
 {
   "city": "Stuttgart",
   "lat": 48.7775,
   "lng": 9.18,
   "country": "Germany",
   "population": 2787724
 },
 {
   "city": "Munich",
   "lat": 48.1375,
   "lng": 11.575,
   "country": "Germany",
   "population": 2606021
 },
 {
   "city": "Boankra",
   "lat": 6.6944,
   "lng": -1.4028,
   "country": "Ghana",
   "population": 3348000
 },
 {
   "city": "Accra",
   "lat": 5.55,
   "lng": -0.2,
   "country": "Ghana",
   "population": 2388000
 },
 {
   "city": "Kumasi",
   "lat": 6.6667,
   "lng": -1.6167,
   "country": "Ghana",
   "population": 2069350
 },
 {
   "city": "Gibraltar",
   "lat": 36.1333,
   "lng": -5.35,
   "country": "Gibraltar",
   "population": 187083
 },
 {
   "city": "Athens",
   "lat": 37.9842,
   "lng": 23.7281,
   "country": "Greece",
   "population": 3041131
 },
 {
   "city": "Thessaloníki",
   "lat": 40.6403,
   "lng": 22.9347,
   "country": "Greece",
   "population": 824676
 },
 {
   "city": "Piraeus",
   "lat": 37.943,
   "lng": 23.6469,
   "country": "Greece",
   "population": 448997
 },
 {
   "city": "Nuuk",
   "lat": 64.1814,
   "lng": -51.6942,
   "country": "Greenland",
   "population": 18326
 },
 {
   "city": "Sisimiut",
   "lat": 66.9389,
   "lng": -53.6722,
   "country": "Greenland",
   "population": 5582
 },
 {
   "city": "Ilulissat",
   "lat": 69.2167,
   "lng": -51.1,
   "country": "Greenland",
   "population": 4737
 },
 {
   "city": "Saint David’s",
   "lat": 12.0444,
   "lng": -61.6806,
   "country": "Grenada",
   "population": 12486
 },
 {
   "city": "Saint George’s",
   "lat": 12.05,
   "lng": -61.75,
   "country": "Grenada",
   "population": 4315
 },
 {
   "city": "Pointe-à-Pitre",
   "lat": 16.2411,
   "lng": -61.5331,
   "country": "Guadeloupe",
   "population": 250952
 },
 {
   "city": "Basse-Terre",
   "lat": 16.0104,
   "lng": -61.7055,
   "country": "Guadeloupe",
   "population": 307
 },
 {
   "city": "Maina",
   "lat": 13.4692,
   "lng": 144.7332,
   "country": "Guam",
   "population": 122411
 },
 {
   "city": "Hagåtña",
   "lat": 13.4745,
   "lng": 144.7504,
   "country": "Guam",
   "population": 1051
 },
 {
   "city": "Guatemala City",
   "lat": 14.6099,
   "lng": -90.5252,
   "country": "Guatemala",
   "population": 2934841
 },
 {
   "city": "Villa Nueva",
   "lat": 14.5314,
   "lng": -90.5964,
   "country": "Guatemala",
   "population": 618397
 },
 {
   "city": "Mixco",
   "lat": 14.6338,
   "lng": -90.6146,
   "country": "Guatemala",
   "population": 517505
 },
 {
   "city": "Conakry",
   "lat": 9.5092,
   "lng": -13.7122,
   "country": "Guinea",
   "population": 1667864
 },
 {
   "city": "Mamou",
   "lat": 10.3833,
   "lng": -12.0833,
   "country": "Guinea",
   "population": 376269
 },
 {
   "city": "Guéckédou",
   "lat": 8.5667,
   "lng": -10.1333,
   "country": "Guinea",
   "population": 221715
 },
 {
   "city": "Bissau",
   "lat": 11.85,
   "lng": -15.5667,
   "country": "Guinea-Bissau",
   "population": 492004
 },
 {
   "city": "Farim",
   "lat": 12.4833,
   "lng": -15.2167,
   "country": "Guinea-Bissau",
   "population": 46268
 },
 {
   "city": "Quinhámel",
   "lat": 11.8833,
   "lng": -15.85,
   "country": "Guinea-Bissau",
   "population": 42659
 },
 {
   "city": "Georgetown",
   "lat": 6.8058,
   "lng": -58.1508,
   "country": "Guyana",
   "population": 200500
 },
 {
   "city": "New Amsterdam",
   "lat": 6.25,
   "lng": -57.5167,
   "country": "Guyana",
   "population": 46874
 },
 {
   "city": "Linden",
   "lat": 6,
   "lng": -58.3,
   "country": "Guyana",
   "population": 29298
 },
 {
   "city": "Port-au-Prince",
   "lat": 18.5333,
   "lng": -72.3333,
   "country": "Haiti",
   "population": 987310
 },
 {
   "city": "Carrefour",
   "lat": 18.5344,
   "lng": -72.4094,
   "country": "Haiti",
   "population": 511345
 },
 {
   "city": "Pétion-Ville",
   "lat": 18.5128,
   "lng": -72.2864,
   "country": "Haiti",
   "population": 359615
 },
 {
   "city": "Tegucigalpa",
   "lat": 14.1,
   "lng": -87.2167,
   "country": "Honduras",
   "population": 1682725
 },
 {
   "city": "Comayagüela",
   "lat": 14.0981,
   "lng": -87.2097,
   "country": "Honduras",
   "population": 1250000
 },
 {
   "city": "San Pedro Sula",
   "lat": 15.5,
   "lng": -88.0333,
   "country": "Honduras",
   "population": 760182
 },
 {
   "city": "Hong Kong",
   "lat": 22.3,
   "lng": 114.2,
   "country": "Hong Kong",
   "population": 7450000
 },
 {
   "city": "Kowloon",
   "lat": 22.3167,
   "lng": 114.1833,
   "country": "Hong Kong",
   "population": 2108419
 },
 {
   "city": "Sha Tin",
   "lat": 22.3802,
   "lng": 114.1898,
   "country": "Hong Kong",
   "population": 640000
 },
 {
   "city": "Budapest",
   "lat": 47.4925,
   "lng": 19.0514,
   "country": "Hungary",
   "population": 2997958
 },
 {
   "city": "Debrecen",
   "lat": 47.53,
   "lng": 21.6392,
   "country": "Hungary",
   "population": 328642
 },
 {
   "city": "Székesfehérvár",
   "lat": 47.1956,
   "lng": 18.4089,
   "country": "Hungary",
   "population": 272474
 },
 {
   "city": "Reykjavík",
   "lat": 64.1467,
   "lng": -21.94,
   "country": "Iceland",
   "population": 135688
 },
 {
   "city": "Kópavogur",
   "lat": 64.1108,
   "lng": -21.9094,
   "country": "Iceland",
   "population": 34140
 },
 {
   "city": "Hafnarfjörður",
   "lat": 64.02,
   "lng": -21.97,
   "country": "Iceland",
   "population": 29974
 },
 {
   "city": "Delhi",
   "lat": 28.61,
   "lng": 77.23,
   "country": "India",
   "population": 32226000
 },
 {
   "city": "Mumbai",
   "lat": 19.0761,
   "lng": 72.8775,
   "country": "India",
   "population": 24973000
 },
 {
   "city": "Kolkāta",
   "lat": 22.5675,
   "lng": 88.37,
   "country": "India",
   "population": 18502000
 },
 {
   "city": "Jakarta",
   "lat": -6.175,
   "lng": 106.8275,
   "country": "Indonesia",
   "population": 33756000
 },
 {
   "city": "Surabaya",
   "lat": -7.2458,
   "lng": 112.7378,
   "country": "Indonesia",
   "population": 6499000
 },
 {
   "city": "Medan",
   "lat": 3.5894,
   "lng": 98.6739,
   "country": "Indonesia",
   "population": 3632000
 },
 {
   "city": "Tehran",
   "lat": 35.6892,
   "lng": 51.3889,
   "country": "Iran",
   "population": 14148000
 },
 {
   "city": "Kāshān",
   "lat": 33.9833,
   "lng": 51.4333,
   "country": "Iran",
   "population": 5000000
 },
 {
   "city": "Mashhad",
   "lat": 36.3,
   "lng": 59.6,
   "country": "Iran",
   "population": 3372090
 },
 {
   "city": "Baghdad",
   "lat": 33.3153,
   "lng": 44.3661,
   "country": "Iraq",
   "population": 6183000
 },
 {
   "city": "Mosul",
   "lat": 36.34,
   "lng": 43.13,
   "country": "Iraq",
   "population": 1694000
 },
 {
   "city": "Al Başrah",
   "lat": 30.515,
   "lng": 47.81,
   "country": "Iraq",
   "population": 1326564
 },
 {
   "city": "Dublin",
   "lat": 53.35,
   "lng": -6.2603,
   "country": "Ireland",
   "population": 1173179
 },
 {
   "city": "Finglas",
   "lat": 53.4597,
   "lng": -6.2181,
   "country": "Ireland",
   "population": 296214
 },
 {
   "city": "Cork",
   "lat": 51.8972,
   "lng": -8.47,
   "country": "Ireland",
   "population": 222333
 },
 {
   "city": "Douglas",
   "lat": 54.145,
   "lng": -4.482,
   "country": "Isle Of Man",
   "population": 27938
 },
 {
   "city": "Onchan",
   "lat": 54.175,
   "lng": -4.455,
   "country": "Isle Of Man",
   "population": 9172
 },
 {
   "city": "Tel Aviv-Yafo",
   "lat": 32.08,
   "lng": 34.78,
   "country": "Israel",
   "population": 1388400
 },
 {
   "city": "Jerusalem",
   "lat": 31.7784,
   "lng": 35.2066,
   "country": "Israel",
   "population": 919438
 },
 {
   "city": "Haifa",
   "lat": 32.8192,
   "lng": 34.9992,
   "country": "Israel",
   "population": 600000
 },
 {
   "city": "Rome",
   "lat": 41.8931,
   "lng": 12.4828,
   "country": "Italy",
   "population": 2872800
 },
 {
   "city": "Milan",
   "lat": 45.4669,
   "lng": 9.19,
   "country": "Italy",
   "population": 1366180
 },
 {
   "city": "Naples",
   "lat": 40.8333,
   "lng": 14.25,
   "country": "Italy",
   "population": 966144
 },
 {
   "city": "Kingston",
   "lat": 17.9714,
   "lng": -76.7931,
   "country": "Jamaica",
   "population": 580000
 },
 {
   "city": "Portmore",
   "lat": 17.95,
   "lng": -76.8799,
   "country": "Jamaica",
   "population": 170000
 },
 {
   "city": "May Pen",
   "lat": 17.965,
   "lng": -77.245,
   "country": "Jamaica",
   "population": 135142
 },
 {
   "city": "Tokyo",
   "lat": 35.6897,
   "lng": 139.6922,
   "country": "Japan",
   "population": 37732000
 },
 {
   "city": "Ōsaka",
   "lat": 34.6939,
   "lng": 135.5022,
   "country": "Japan",
   "population": 15126000
 },
 {
   "city": "Nagoya",
   "lat": 35.1833,
   "lng": 136.9,
   "country": "Japan",
   "population": 9197000
 },
 {
   "city": "Saint Helier",
   "lat": 49.1858,
   "lng": -2.11,
   "country": "Jersey",
   "population": 33522
 },
 {
   "city": "Amman",
   "lat": 31.9497,
   "lng": 35.9328,
   "country": "Jordan",
   "population": 4007526
 },
 {
   "city": "Al Mafraq",
   "lat": 32.3399,
   "lng": 36.2052,
   "country": "Jordan",
   "population": 580000
 },
 {
   "city": "Irbid",
   "lat": 32.55,
   "lng": 35.85,
   "country": "Jordan",
   "population": 569068
 },
 {
   "city": "Almaty",
   "lat": 43.2775,
   "lng": 76.8958,
   "country": "Kazakhstan",
   "population": 1916822
 },
 {
   "city": "Nur-Sultan",
   "lat": 51.1472,
   "lng": 71.4222,
   "country": "Kazakhstan",
   "population": 1078362
 },
 {
   "city": "Shymkent",
   "lat": 42.3167,
   "lng": 69.5958,
   "country": "Kazakhstan",
   "population": 1028673
 },
 {
   "city": "Nairobi",
   "lat": -1.2864,
   "lng": 36.8172,
   "country": "Kenya",
   "population": 5545000
 },
 {
   "city": "Meru",
   "lat": 0.05,
   "lng": 37.65,
   "country": "Kenya",
   "population": 1833000
 },
 {
   "city": "Mombasa",
   "lat": -4.05,
   "lng": 39.6667,
   "country": "Kenya",
   "population": 1208333
 },
 {
   "city": "Tarawa",
   "lat": 1.3382,
   "lng": 173.0176,
   "country": "Kiribati",
   "population": 28802
 },
 {
   "city": "Betio",
   "lat": 1.35,
   "lng": 172.9333,
   "country": "Kiribati",
   "population": 17356
 },
 {
   "city": "Pristina",
   "lat": 42.6633,
   "lng": 21.1622,
   "country": "Kosovo",
   "population": 161751
 },
 {
   "city": "Ferizaj",
   "lat": 42.3667,
   "lng": 21.1667,
   "country": "Kosovo",
   "population": 108610
 },
 {
   "city": "Gjakovë",
   "lat": 42.3833,
   "lng": 20.4333,
   "country": "Kosovo",
   "population": 94556
 },
 {
   "city": "Kuwait City",
   "lat": 29.3697,
   "lng": 47.9783,
   "country": "Kuwait",
   "population": 3000000
 },
 {
   "city": "Al Jahrā’",
   "lat": 29.35,
   "lng": 47.6833,
   "country": "Kuwait",
   "population": 393432
 },
 {
   "city": "Abū Ḩulayfah",
   "lat": 29.1322,
   "lng": 48.1261,
   "country": "Kuwait",
   "population": 164212
 },
 {
   "city": "Bishkek",
   "lat": 42.8747,
   "lng": 74.6122,
   "country": "Kyrgyzstan",
   "population": 1074075
 },
 {
   "city": "Osh",
   "lat": 40.5333,
   "lng": 72.7833,
   "country": "Kyrgyzstan",
   "population": 322164
 },
 {
   "city": "Jalal-Abad",
   "lat": 40.9333,
   "lng": 73,
   "country": "Kyrgyzstan",
   "population": 89004
 },
 {
   "city": "Vientiane",
   "lat": 17.9667,
   "lng": 102.6,
   "country": "Laos",
   "population": 948487
 },
 {
   "city": "Xiangkhoang",
   "lat": 19.4167,
   "lng": 103.5,
   "country": "Laos",
   "population": 267172
 },
 {
   "city": "Savannakhet",
   "lat": 16.55,
   "lng": 104.75,
   "country": "Laos",
   "population": 124000
 },
 {
   "city": "Riga",
   "lat": 56.9489,
   "lng": 24.1064,
   "country": "Latvia",
   "population": 920643
 },
 {
   "city": "Daugavpils",
   "lat": 55.875,
   "lng": 26.5356,
   "country": "Latvia",
   "population": 80627
 },
 {
   "city": "Liepāja",
   "lat": 56.5117,
   "lng": 21.0139,
   "country": "Latvia",
   "population": 67964
 },
 {
   "city": "Tripoli",
   "lat": 34.4367,
   "lng": 35.8344,
   "country": "Lebanon",
   "population": 530000
 },
 {
   "city": "Beirut",
   "lat": 33.8869,
   "lng": 35.5131,
   "country": "Lebanon",
   "population": 361366
 },
 {
   "city": "Sidon",
   "lat": 33.5606,
   "lng": 35.3758,
   "country": "Lebanon",
   "population": 200000
 },
 {
   "city": "Maseru",
   "lat": -29.31,
   "lng": 27.48,
   "country": "Lesotho",
   "population": 519186
 },
 {
   "city": "Teyateyaneng",
   "lat": -29.1511,
   "lng": 27.7425,
   "country": "Lesotho",
   "population": 75115
 },
 {
   "city": "Mafeteng",
   "lat": -29.8167,
   "lng": 27.25,
   "country": "Lesotho",
   "population": 57059
 },
 {
   "city": "Monrovia",
   "lat": 6.3133,
   "lng": -10.8014,
   "country": "Liberia",
   "population": 1021762
 },
 {
   "city": "New Kru Town",
   "lat": 6.3733,
   "lng": -10.7928,
   "country": "Liberia",
   "population": 84399
 },
 {
   "city": "Upper Buchanan",
   "lat": 5.9161,
   "lng": -10.0525,
   "country": "Liberia",
   "population": 48315
 },
 {
   "city": "Tripoli",
   "lat": 32.8872,
   "lng": 13.1914,
   "country": "Libya",
   "population": 1293016
 },
 {
   "city": "Benghazi",
   "lat": 32.1167,
   "lng": 20.0667,
   "country": "Libya",
   "population": 631555
 },
 {
   "city": "Ajdābiyā",
   "lat": 30.7556,
   "lng": 20.2253,
   "country": "Libya",
   "population": 416000
 },
 {
   "city": "Schaan",
   "lat": 47.1667,
   "lng": 9.5097,
   "country": "Liechtenstein",
   "population": 5998
 },
 {
   "city": "Vaduz",
   "lat": 47.141,
   "lng": 9.521,
   "country": "Liechtenstein",
   "population": 5668
 },
 {
   "city": "Triesen",
   "lat": 47.1,
   "lng": 9.5333,
   "country": "Liechtenstein",
   "population": 5230
 },
 {
   "city": "Vilnius",
   "lat": 54.6872,
   "lng": 25.28,
   "country": "Lithuania",
   "population": 708203
 },
 {
   "city": "Kaunas",
   "lat": 54.8972,
   "lng": 23.8861,
   "country": "Lithuania",
   "population": 381007
 },
 {
   "city": "Klaipėda",
   "lat": 55.75,
   "lng": 21.1667,
   "country": "Lithuania",
   "population": 164310
 },
 {
   "city": "Luxembourg",
   "lat": 49.6117,
   "lng": 6.1319,
   "country": "Luxembourg",
   "population": 132780
 },
 {
   "city": "Esch-sur-Alzette",
   "lat": 49.4969,
   "lng": 5.9806,
   "country": "Luxembourg",
   "population": 36228
 },
 {
   "city": "Dudelange",
   "lat": 49.4833,
   "lng": 6.0833,
   "country": "Luxembourg",
   "population": 21513
 },
 {
   "city": "Macau",
   "lat": 22.2006,
   "lng": 113.5461,
   "country": "Macau",
   "population": 568700
 },
 {
   "city": "Skopje",
   "lat": 41.9961,
   "lng": 21.4317,
   "country": "Macedonia",
   "population": 640000
 },
 {
   "city": "Tetovo",
   "lat": 42.0103,
   "lng": 20.9714,
   "country": "Macedonia",
   "population": 142030
 },
 {
   "city": "Bitola",
   "lat": 41.0319,
   "lng": 21.3347,
   "country": "Macedonia",
   "population": 74550
 },
 {
   "city": "Antananarivo",
   "lat": -18.9333,
   "lng": 47.5167,
   "country": "Madagascar",
   "population": 2610000
 },
 {
   "city": "Androtsy",
   "lat": -24.1,
   "lng": 46.3,
   "country": "Madagascar",
   "population": 809313
 },
 {
   "city": "Betsiboka",
   "lat": -16.95,
   "lng": 46.83,
   "country": "Madagascar",
   "population": 394561
 },
 {
   "city": "Blantyre",
   "lat": -15.7861,
   "lng": 35.0058,
   "country": "Malawi",
   "population": 1895973
 },
 {
   "city": "Lilongwe",
   "lat": -13.9833,
   "lng": 33.7833,
   "country": "Malawi",
   "population": 989318
 },
 {
   "city": "Mzuzu",
   "lat": -11.4581,
   "lng": 34.0151,
   "country": "Malawi",
   "population": 150100
 },
 {
   "city": "Kuala Lumpur",
   "lat": 3.1478,
   "lng": 101.6953,
   "country": "Malaysia",
   "population": 8911000
 },
 {
   "city": "Seberang Jaya",
   "lat": 5.4,
   "lng": 100.4667,
   "country": "Malaysia",
   "population": 946092
 },
 {
   "city": "Klang",
   "lat": 3.0333,
   "lng": 101.45,
   "country": "Malaysia",
   "population": 878000
 },
 {
   "city": "Male",
   "lat": 4.1753,
   "lng": 73.5089,
   "country": "Maldives",
   "population": 133019
 },
 {
   "city": "Kulhudhuffushi",
   "lat": 6.6225,
   "lng": 73.0703,
   "country": "Maldives",
   "population": 15875
 },
 {
   "city": "Foammulah",
   "lat": -0.2932,
   "lng": 73.4236,
   "country": "Maldives",
   "population": 13037
 },
 {
   "city": "Bamako",
   "lat": 12.6458,
   "lng": -7.9922,
   "country": "Mali",
   "population": 2009109
 },
 {
   "city": "Balandougou",
   "lat": 13.3558,
   "lng": -9.5517,
   "country": "Mali",
   "population": 1596882
 },
 {
   "city": "Sikasso",
   "lat": 11.3167,
   "lng": -5.6667,
   "country": "Mali",
   "population": 213977
 },
 {
   "city": "Valletta",
   "lat": 35.8983,
   "lng": 14.5125,
   "country": "Malta",
   "population": 480134
 },
 {
   "city": "Birkirkara",
   "lat": 35.8967,
   "lng": 14.4625,
   "country": "Malta",
   "population": 24356
 },
 {
   "city": "Saint Paul’s Bay",
   "lat": 35.9483,
   "lng": 14.4017,
   "country": "Malta",
   "population": 21046
 },
 {
   "city": "Majuro",
   "lat": 7.0833,
   "lng": 171.3833,
   "country": "Marshall Islands",
   "population": 30000
 },
 {
   "city": "Fort-de-France",
   "lat": 14.6,
   "lng": -61.0667,
   "country": "Martinique",
   "population": 253995
 },
 {
   "city": "Nouakchott",
   "lat": 18.0858,
   "lng": -15.9785,
   "country": "Mauritania",
   "population": 1077169
 },
 {
   "city": "Néma",
   "lat": 16.6167,
   "lng": -7.25,
   "country": "Mauritania",
   "population": 200000
 },
 {
   "city": "Nouadhibou",
   "lat": 20.9333,
   "lng": -17.0333,
   "country": "Mauritania",
   "population": 118000
 },
 {
   "city": "Curepipe",
   "lat": -20.3188,
   "lng": 57.5263,
   "country": "Mauritius",
   "population": 299975
 },
 {
   "city": "Port Louis",
   "lat": -20.1644,
   "lng": 57.5042,
   "country": "Mauritius",
   "population": 149194
 },
 {
   "city": "Quatre Bornes",
   "lat": -20.2654,
   "lng": 57.4791,
   "country": "Mauritius",
   "population": 77308
 },
 {
   "city": "Mamoudzou",
   "lat": -12.7794,
   "lng": 45.2272,
   "country": "Mayotte",
   "population": 32057
 },
 {
   "city": "Mexico City",
   "lat": 19.4333,
   "lng": -99.1333,
   "country": "Mexico",
   "population": 21804000
 },
 {
   "city": "Guadalajara",
   "lat": 20.6767,
   "lng": -103.3475,
   "country": "Mexico",
   "population": 5525000
 },
 {
   "city": "Monterrey",
   "lat": 25.6667,
   "lng": -100.3,
   "country": "Mexico",
   "population": 5341171
 },
 {
   "city": "Chisinau",
   "lat": 47.0228,
   "lng": 28.8353,
   "country": "Moldova",
   "population": 702300
 },
 {
   "city": "Tiraspol",
   "lat": 46.8403,
   "lng": 29.6433,
   "country": "Moldova",
   "population": 133807
 },
 {
   "city": "Bălţi",
   "lat": 47.7667,
   "lng": 27.9167,
   "country": "Moldova",
   "population": 102457
 },
 {
   "city": "Monaco",
   "lat": 43.7333,
   "lng": 7.4167,
   "country": "Monaco",
   "population": 36371
 },
 {
   "city": "Ulaanbaatar",
   "lat": 47.9203,
   "lng": 106.9172,
   "country": "Mongolia",
   "population": 1396288
 },
 {
   "city": "Mörön",
   "lat": 49.6356,
   "lng": 100.1556,
   "country": "Mongolia",
   "population": 134530
 },
 {
   "city": "Erdenet",
   "lat": 49.0278,
   "lng": 104.0444,
   "country": "Mongolia",
   "population": 106810
 },
 {
   "city": "Podgorica",
   "lat": 42.4413,
   "lng": 19.2629,
   "country": "Montenegro",
   "population": 150977
 },
 {
   "city": "Nikšić",
   "lat": 42.7778,
   "lng": 18.95,
   "country": "Montenegro",
   "population": 56970
 },
 {
   "city": "Ulcinj",
   "lat": 41.92,
   "lng": 19.2,
   "country": "Montenegro",
   "population": 19921
 },
 {
   "city": "Brades",
   "lat": 16.7928,
   "lng": -62.2106,
   "country": "Montserrat",
   "population": 391
 },
 {
   "city": "Casablanca",
   "lat": 33.5333,
   "lng": -7.5833,
   "country": "Morocco",
   "population": 4370000
 },
 {
   "city": "El Kelaa des Srarhna",
   "lat": 32.0481,
   "lng": -7.4083,
   "country": "Morocco",
   "population": 1450021
 },
 {
   "city": "Fès",
   "lat": 34.0433,
   "lng": -5.0033,
   "country": "Morocco",
   "population": 1112072
 },
 {
   "city": "Maputo",
   "lat": -25.9667,
   "lng": 32.5833,
   "country": "Mozambique",
   "population": 1191613
 },
 {
   "city": "Matola",
   "lat": -25.9667,
   "lng": 32.4667,
   "country": "Mozambique",
   "population": 1032197
 },
 {
   "city": "Nampula",
   "lat": -15.1167,
   "lng": 39.2667,
   "country": "Mozambique",
   "population": 743000
 },
 {
   "city": "Rangoon",
   "lat": 16.795,
   "lng": 96.16,
   "country": "Myanmar",
   "population": 5209541
 },
 {
   "city": "Mandalay",
   "lat": 21.9831,
   "lng": 96.0844,
   "country": "Myanmar",
   "population": 1319452
 },
 {
   "city": "Nay Pyi Taw",
   "lat": 19.7475,
   "lng": 96.115,
   "country": "Myanmar",
   "population": 1160242
 },
 {
   "city": "Windhoek",
   "lat": -22.57,
   "lng": 17.0836,
   "country": "Namibia",
   "population": 322500
 },
 {
   "city": "Walvisbaai",
   "lat": -22.9561,
   "lng": 14.5081,
   "country": "Namibia",
   "population": 85000
 },
 {
   "city": "Rundu",
   "lat": -17.9167,
   "lng": 19.7667,
   "country": "Namibia",
   "population": 63431
 },
 {
   "city": "Yaren",
   "lat": -0.5477,
   "lng": 166.9209,
   "country": "Nauru",
   "population": null
 },
 {
   "city": "Kathmandu",
   "lat": 27.7172,
   "lng": 85.324,
   "country": "Nepal",
   "population": 975453
 },
 {
   "city": "Bharatpur",
   "lat": 27.6833,
   "lng": 84.4333,
   "country": "Nepal",
   "population": 369377
 },
 {
   "city": "Pokhara",
   "lat": 28.2083,
   "lng": 83.9889,
   "country": "Nepal",
   "population": 353841
 },
 {
   "city": "Amsterdam",
   "lat": 52.3728,
   "lng": 4.8936,
   "country": "Netherlands",
   "population": 1459402
 },
 {
   "city": "Rotterdam",
   "lat": 51.9167,
   "lng": 4.5,
   "country": "Netherlands",
   "population": 631155
 },
 {
   "city": "The Hague",
   "lat": 52.08,
   "lng": 4.31,
   "country": "Netherlands",
   "population": 548320
 },
 {
   "city": "Nouméa",
   "lat": -22.2758,
   "lng": 166.458,
   "country": "New Caledonia",
   "population": 182341
 },
 {
   "city": "Dumbéa",
   "lat": -22.15,
   "lng": 166.45,
   "country": "New Caledonia",
   "population": 35873
 },
 {
   "city": "Mont-Dore",
   "lat": -22.2157,
   "lng": 166.4665,
   "country": "New Caledonia",
   "population": 27620
 },
 {
   "city": "Auckland",
   "lat": -36.8406,
   "lng": 174.74,
   "country": "New Zealand",
   "population": 1346091
 },
 {
   "city": "Wellington",
   "lat": -41.2889,
   "lng": 174.7772,
   "country": "New Zealand",
   "population": 418500
 },
 {
   "city": "Christchurch",
   "lat": -43.531,
   "lng": 172.6365,
   "country": "New Zealand",
   "population": 383200
 },
 {
   "city": "Managua",
   "lat": 12.1544,
   "lng": -86.2738,
   "country": "Nicaragua",
   "population": 1028808
 },
 {
   "city": "Boaco",
   "lat": 12.4719,
   "lng": -85.6594,
   "country": "Nicaragua",
   "population": 317000
 },
 {
   "city": "León",
   "lat": 12.4344,
   "lng": -86.8775,
   "country": "Nicaragua",
   "population": 174051
 },
 {
   "city": "Niamey",
   "lat": 13.515,
   "lng": 2.1175,
   "country": "Niger",
   "population": 1026848
 },
 {
   "city": "Maradi",
   "lat": 13.4833,
   "lng": 7.1,
   "country": "Niger",
   "population": 267249
 },
 {
   "city": "Zinder",
   "lat": 13.8053,
   "lng": 8.9883,
   "country": "Niger",
   "population": 235605
 },
 {
   "city": "Lagos",
   "lat": 6.455,
   "lng": 3.3841,
   "country": "Nigeria",
   "population": 16637000
 },
 {
   "city": "Kano",
   "lat": 12,
   "lng": 8.5167,
   "country": "Nigeria",
   "population": 3848885
 },
 {
   "city": "Abuja",
   "lat": 9.0667,
   "lng": 7.4833,
   "country": "Nigeria",
   "population": 3770000
 },
 {
   "city": "Alofi",
   "lat": -19.056,
   "lng": -169.921,
   "country": "Niue",
   "population": 1611
 },
 {
   "city": "Kingston",
   "lat": -29.0569,
   "lng": 167.9617,
   "country": "Norfolk Island",
   "population": null
 },
 {
   "city": "Pyongyang",
   "lat": 39.0194,
   "lng": 125.7381,
   "country": "North Korea",
   "population": 2863000
 },
 {
   "city": "Hamhŭng",
   "lat": 39.9167,
   "lng": 127.5333,
   "country": "North Korea",
   "population": 768551
 },
 {
   "city": "Nampo",
   "lat": 38.7333,
   "lng": 125.4,
   "country": "North Korea",
   "population": 703317
 },
 {
   "city": "Capitol Hill",
   "lat": 15.2137,
   "lng": 145.7546,
   "country": "Northern Mariana Islands",
   "population": 2500
 },
 {
   "city": "Oslo",
   "lat": 59.9133,
   "lng": 10.7389,
   "country": "Norway",
   "population": 1064235
 },
 {
   "city": "Bergen",
   "lat": 60.3894,
   "lng": 5.33,
   "country": "Norway",
   "population": 267117
 },
 {
   "city": "Stavanger",
   "lat": 58.97,
   "lng": 5.7314,
   "country": "Norway",
   "population": 237369
 },
 {
   "city": "Muscat",
   "lat": 23.6139,
   "lng": 58.5922,
   "country": "Oman",
   "population": 1421409
 },
 {
   "city": "Bawshar",
   "lat": 23.5333,
   "lng": 58.3833,
   "country": "Oman",
   "population": 383257
 },
 {
   "city": "As Sīb",
   "lat": 23.6703,
   "lng": 58.1891,
   "country": "Oman",
   "population": 237816
 },
 {
   "city": "Karachi",
   "lat": 24.86,
   "lng": 67.01,
   "country": "Pakistan",
   "population": 15738000
 },
 {
   "city": "Lahore",
   "lat": 31.5497,
   "lng": 74.3436,
   "country": "Pakistan",
   "population": 12306000
 },
 {
   "city": "Faisalabad",
   "lat": 31.4167,
   "lng": 73.0911,
   "country": "Pakistan",
   "population": 3203846
 },
 {
   "city": "Koror",
   "lat": 7.3419,
   "lng": 134.4792,
   "country": "Palau",
   "population": 8744
 },
 {
   "city": "Melekeok",
   "lat": 7.5006,
   "lng": 134.6241,
   "country": "Palau",
   "population": 7026
 },
 {
   "city": "Ngerulmud",
   "lat": 7.5006,
   "lng": 134.6242,
   "country": "Palau",
   "population": 271
 },
 {
   "city": "Panama City",
   "lat": 8.9833,
   "lng": -79.5167,
   "country": "Panama",
   "population": 1500189
 },
 {
   "city": "San Miguelito",
   "lat": 9.033,
   "lng": -79.5,
   "country": "Panama",
   "population": 315019
 },
 {
   "city": "Colón",
   "lat": 9.3572,
   "lng": -79.8986,
   "country": "Panama",
   "population": 204000
 },
 {
   "city": "Port Moresby",
   "lat": -9.4789,
   "lng": 147.1494,
   "country": "Papua New Guinea",
   "population": 700000
 },
 {
   "city": "Lae",
   "lat": -6.7303,
   "lng": 147.0008,
   "country": "Papua New Guinea",
   "population": 193000
 },
 {
   "city": "Popondetta",
   "lat": -8.7656,
   "lng": 148.2347,
   "country": "Papua New Guinea",
   "population": 65000
 },
 {
   "city": "Asunción",
   "lat": -25.3,
   "lng": -57.6333,
   "country": "Paraguay",
   "population": 524190
 },
 {
   "city": "Ciudad del Este",
   "lat": -25.5167,
   "lng": -54.6167,
   "country": "Paraguay",
   "population": 320782
 },
 {
   "city": "San Lorenzo",
   "lat": -25.34,
   "lng": -57.52,
   "country": "Paraguay",
   "population": 287977
 },
 {
   "city": "Lima",
   "lat": -12.06,
   "lng": -77.0375,
   "country": "Peru",
   "population": 10320000
 },
 {
   "city": "Callao",
   "lat": -12.0333,
   "lng": -77.1333,
   "country": "Peru",
   "population": 1129854
 },
 {
   "city": "Arequipa",
   "lat": -16.4,
   "lng": -71.5333,
   "country": "Peru",
   "population": 1008290
 },
 {
   "city": "Manila",
   "lat": 14.5958,
   "lng": 120.9772,
   "country": "Philippines",
   "population": 24922000
 },
 {
   "city": "Quezon City",
   "lat": 14.63,
   "lng": 121.03,
   "country": "Philippines",
   "population": 2960048
 },
 {
   "city": "Davao",
   "lat": 7.0667,
   "lng": 125.6,
   "country": "Philippines",
   "population": 1776949
 },
 {
   "city": "Adamstown",
   "lat": -25.0667,
   "lng": -130.0833,
   "country": "Pitcairn Islands",
   "population": null
 },
 {
   "city": "Warsaw",
   "lat": 52.23,
   "lng": 21.0111,
   "country": "Poland",
   "population": 1860281
 },
 {
   "city": "Kraków",
   "lat": 50.0614,
   "lng": 19.9372,
   "country": "Poland",
   "population": 800653
 },
 {
   "city": "Łódź",
   "lat": 51.7769,
   "lng": 19.4547,
   "country": "Poland",
   "population": 690422
 },
 {
   "city": "Lisbon",
   "lat": 38.7253,
   "lng": -9.15,
   "country": "Portugal",
   "population": 2719000
 },
 {
   "city": "Porto",
   "lat": 41.1621,
   "lng": -8.622,
   "country": "Portugal",
   "population": 1278210
 },
 {
   "city": "Aves",
   "lat": 41.44,
   "lng": -8.3,
   "country": "Portugal",
   "population": 425411
 },
 {
   "city": "San Juan",
   "lat": 18.3985,
   "lng": -66.061,
   "country": "Puerto Rico",
   "population": 1915105
 },
 {
   "city": "Aguadilla",
   "lat": 18.4382,
   "lng": -67.1537,
   "country": "Puerto Rico",
   "population": 260331
 },
 {
   "city": "Bayamón",
   "lat": 18.3794,
   "lng": -66.1635,
   "country": "Puerto Rico",
   "population": 170028
 },
 {
   "city": "Doha",
   "lat": 25.2867,
   "lng": 51.5333,
   "country": "Qatar",
   "population": 1186023
 },
 {
   "city": "Ar Rayyān",
   "lat": 25.25,
   "lng": 51.4,
   "country": "Qatar",
   "population": 605712
 },
 {
   "city": "Al Khawr",
   "lat": 25.69,
   "lng": 51.51,
   "country": "Qatar",
   "population": 202031
 },
 {
   "city": "Saint-Denis",
   "lat": -20.8789,
   "lng": 55.4481,
   "country": "Reunion",
   "population": 315080
 },
 {
   "city": "Saint-Benoît",
   "lat": -21.0339,
   "lng": 55.7128,
   "country": "Reunion",
   "population": 35310
 },
 {
   "city": "Bucharest",
   "lat": 44.4325,
   "lng": 26.1039,
   "country": "Romania",
   "population": 1883425
 },
 {
   "city": "Cluj-Napoca",
   "lat": 46.7667,
   "lng": 23.5833,
   "country": "Romania",
   "population": 324576
 },
 {
   "city": "Timişoara",
   "lat": 45.7597,
   "lng": 21.23,
   "country": "Romania",
   "population": 319279
 },
 {
   "city": "Moscow",
   "lat": 55.7558,
   "lng": 37.6178,
   "country": "Russia",
   "population": 17332000
 },
 {
   "city": "Saint Petersburg",
   "lat": 59.95,
   "lng": 30.3167,
   "country": "Russia",
   "population": 5384342
 },
 {
   "city": "Novosibirsk",
   "lat": 55.0333,
   "lng": 82.9167,
   "country": "Russia",
   "population": 1625631
 },
 {
   "city": "Kigali",
   "lat": -1.9536,
   "lng": 30.0606,
   "country": "Rwanda",
   "population": 1156663
 },
 {
   "city": "Nyanza",
   "lat": -2.35,
   "lng": 29.7333,
   "country": "Rwanda",
   "population": 225209
 },
 {
   "city": "Gisenyi",
   "lat": -1.7,
   "lng": 29.25,
   "country": "Rwanda",
   "population": 136830
 },
 {
   "city": "Gustavia",
   "lat": 17.8958,
   "lng": -62.8508,
   "country": "Saint Barthelemy",
   "population": null
 },
 {
   "city": "Jamestown",
   "lat": -15.9251,
   "lng": -5.7179,
   "country": "Saint Helena, Ascension, and Tristan da Cunha",
   "population": 714
 },
 {
   "city": "Georgetown",
   "lat": -7.9286,
   "lng": -14.4119,
   "country": "Saint Helena, Ascension, and Tristan da Cunha",
   "population": null
 },
 {
   "city": "Edinburgh of the Seven Seas",
   "lat": -37.0675,
   "lng": -12.3105,
   "country": "Saint Helena, Ascension, and Tristan da Cunha",
   "population": null
 },
 {
   "city": "Basseterre",
   "lat": 17.3,
   "lng": -62.7333,
   "country": "Saint Kitts and Nevis",
   "population": 13220
 },
 {
   "city": "Castries",
   "lat": 14.0167,
   "lng": -60.9833,
   "country": "Saint Lucia",
   "population": 70000
 },
 {
   "city": "Gros Islet",
   "lat": 14.081,
   "lng": -60.953,
   "country": "Saint Lucia",
   "population": 21660
 },
 {
   "city": "Micoud",
   "lat": 13.819,
   "lng": -60.9,
   "country": "Saint Lucia",
   "population": 16620
 },
 {
   "city": "Marigot",
   "lat": 18.0706,
   "lng": -63.0847,
   "country": "Saint Martin",
   "population": 5700
 },
 {
   "city": "Saint-Pierre",
   "lat": 46.7811,
   "lng": -56.1764,
   "country": "Saint Pierre and Miquelon",
   "population": null
 },
 {
   "city": "Kingstown",
   "lat": 13.1578,
   "lng": -61.225,
   "country": "Saint Vincent and the Grenadines",
   "population": 25000
 },
 {
   "city": "Calliaqua",
   "lat": 13.1308,
   "lng": -61.1928,
   "country": "Saint Vincent and the Grenadines",
   "population": 24205
 },
 {
   "city": "Apia",
   "lat": -13.8333,
   "lng": -171.75,
   "country": "Samoa",
   "population": 37708
 },
 {
   "city": "Afega",
   "lat": -13.8019,
   "lng": -171.8217,
   "country": "Samoa",
   "population": 1998
 },
 {
   "city": "Safotu",
   "lat": -13.4528,
   "lng": -172.4036,
   "country": "Samoa",
   "population": 1270
 },
 {
   "city": "Serravalle",
   "lat": 43.9694,
   "lng": 12.4784,
   "country": "San Marino",
   "population": 10878
 },
 {
   "city": "Borgo Maggiore",
   "lat": 43.945,
   "lng": 12.4497,
   "country": "San Marino",
   "population": 6871
 },
 {
   "city": "San Marino",
   "lat": 43.9346,
   "lng": 12.4473,
   "country": "San Marino",
   "population": 4040
 },
 {
   "city": "São Tomé",
   "lat": 0.3361,
   "lng": 6.7306,
   "country": "Sao Tome and Principe",
   "population": 56166
 },
 {
   "city": "Santana",
   "lat": 0.2583,
   "lng": 6.7417,
   "country": "Sao Tome and Principe",
   "population": 10290
 },
 {
   "city": "Neves",
   "lat": 0.3592,
   "lng": 6.5517,
   "country": "Sao Tome and Principe",
   "population": 10068
 },
 {
   "city": "Riyadh",
   "lat": 24.6333,
   "lng": 46.7167,
   "country": "Saudi Arabia",
   "population": 7237000
 },
 {
   "city": "Jeddah",
   "lat": 21.5433,
   "lng": 39.1728,
   "country": "Saudi Arabia",
   "population": 3976000
 },
 {
   "city": "Mecca",
   "lat": 21.4225,
   "lng": 39.8233,
   "country": "Saudi Arabia",
   "population": 1675368
 },
 {
   "city": "Dakar",
   "lat": 14.6928,
   "lng": -17.4467,
   "country": "Senegal",
   "population": 1438725
 },
 {
   "city": "Pikine",
   "lat": 14.75,
   "lng": -17.4,
   "country": "Senegal",
   "population": 1170791
 },
 {
   "city": "Touba",
   "lat": 14.8667,
   "lng": -15.8833,
   "country": "Senegal",
   "population": 529176
 },
 {
   "city": "Belgrade",
   "lat": 44.82,
   "lng": 20.46,
   "country": "Serbia",
   "population": 1378682
 },
 {
   "city": "Novi Sad",
   "lat": 45.2542,
   "lng": 19.8425,
   "country": "Serbia",
   "population": 380000
 },
 {
   "city": "Niš",
   "lat": 43.3192,
   "lng": 21.8961,
   "country": "Serbia",
   "population": 183164
 },
 {
   "city": "Victoria",
   "lat": -4.6167,
   "lng": 55.45,
   "country": "Seychelles",
   "population": 26450
 },
 {
   "city": "Freetown",
   "lat": 8.4844,
   "lng": -13.2344,
   "country": "Sierra Leone",
   "population": 951000
 },
 {
   "city": "Bo",
   "lat": 7.9564,
   "lng": -11.74,
   "country": "Sierra Leone",
   "population": 233684
 },
 {
   "city": "Kenema",
   "lat": 7.8758,
   "lng": -11.1908,
   "country": "Sierra Leone",
   "population": 188463
 },
 {
   "city": "Singapore",
   "lat": 1.3,
   "lng": 103.8,
   "country": "Singapore",
   "population": 5983000
 },
 {
   "city": "Philipsburg",
   "lat": 18.0237,
   "lng": -63.0458,
   "country": "Sint Maarten",
   "population": 1894
 },
 {
   "city": "Bratislava",
   "lat": 48.1439,
   "lng": 17.1097,
   "country": "Slovakia",
   "population": 475503
 },
 {
   "city": "Košice",
   "lat": 48.7167,
   "lng": 21.25,
   "country": "Slovakia",
   "population": 238593
 },
 {
   "city": "Petržalka",
   "lat": 48.1333,
   "lng": 17.1167,
   "country": "Slovakia",
   "population": 114000
 },
 {
   "city": "Ljubljana",
   "lat": 46.0514,
   "lng": 14.5061,
   "country": "Slovenia",
   "population": 286745
 },
 {
   "city": "Maribor",
   "lat": 46.5575,
   "lng": 15.6456,
   "country": "Slovenia",
   "population": 97019
 },
 {
   "city": "Kranj",
   "lat": 46.2333,
   "lng": 14.3667,
   "country": "Slovenia",
   "population": 37941
 },
 {
   "city": "Honiara",
   "lat": -9.4319,
   "lng": 159.9556,
   "country": "Solomon Islands",
   "population": 84520
 },
 {
   "city": "Auki",
   "lat": -8.7667,
   "lng": 160.7,
   "country": "Solomon Islands",
   "population": 7882
 },
 {
   "city": "Gizo",
   "lat": -8.1056,
   "lng": 156.8389,
   "country": "Solomon Islands",
   "population": 6154
 },
 {
   "city": "Mogadishu",
   "lat": 2.0392,
   "lng": 45.3419,
   "country": "Somalia",
   "population": 4249083
 },
 {
   "city": "Boosaaso",
   "lat": 11.2886,
   "lng": 49.1819,
   "country": "Somalia",
   "population": 2000000
 },
 {
   "city": "Hargeysa",
   "lat": 9.5631,
   "lng": 44.0675,
   "country": "Somalia",
   "population": 1200000
 },
 {
   "city": "Johannesburg",
   "lat": -26.2044,
   "lng": 28.0456,
   "country": "South Africa",
   "population": 8000000
 },
 {
   "city": "Soweto",
   "lat": -26.2678,
   "lng": 27.8585,
   "country": "South Africa",
   "population": 1271628
 },
 {
   "city": "Vereeniging",
   "lat": -26.6736,
   "lng": 27.9319,
   "country": "South Africa",
   "population": 1074000
 },
 {
   "city": "Grytviken",
   "lat": -54.2806,
   "lng": -36.508,
   "country": "South Georgia and South Sandwich Islands",
   "population": 99
 },
 {
   "city": "King Edward Point",
   "lat": -54.2833,
   "lng": -36.5,
   "country": "South Georgia And South Sandwich Islands",
   "population": null
 },
 {
   "city": "Seoul",
   "lat": 37.56,
   "lng": 126.99,
   "country": "South Korea",
   "population": 23016000
 },
 {
   "city": "Busan",
   "lat": 35.18,
   "lng": 129.075,
   "country": "South Korea",
   "population": 3453198
 },
 {
   "city": "Incheon",
   "lat": 37.4833,
   "lng": 126.6333,
   "country": "South Korea",
   "population": 2936117
 },
 {
   "city": "Juba",
   "lat": 4.85,
   "lng": 31.6,
   "country": "South Sudan",
   "population": 525953
 },
 {
   "city": "Bor",
   "lat": 6.2125,
   "lng": 31.5608,
   "country": "South Sudan",
   "population": 315351
 },
 {
   "city": "Kajo Kaji",
   "lat": 3.8492,
   "lng": 31.6578,
   "country": "South Sudan",
   "population": 196000
 },
 {
   "city": "Madrid",
   "lat": 40.4169,
   "lng": -3.7033,
   "country": "Spain",
   "population": 6211000
 },
 {
   "city": "Barcelona",
   "lat": 41.3825,
   "lng": 2.1769,
   "country": "Spain",
   "population": 4800000
 },
 {
   "city": "Sevilla",
   "lat": 37.24,
   "lng": -5.99,
   "country": "Spain",
   "population": 1100000
 },
 {
   "city": "Colombo",
   "lat": 6.9344,
   "lng": 79.8428,
   "country": "Sri Lanka",
   "population": 2323826
 },
 {
   "city": "Mount Lavinia",
   "lat": 6.8731,
   "lng": 79.8758,
   "country": "Sri Lanka",
   "population": 245974
 },
 {
   "city": "Kesbewa",
   "lat": 6.7953,
   "lng": 79.9386,
   "country": "Sri Lanka",
   "population": 243842
 },
 {
   "city": "Khartoum",
   "lat": 15.5006,
   "lng": 32.56,
   "country": "Sudan",
   "population": 7869000
 },
 {
   "city": "Omdurman",
   "lat": 15.65,
   "lng": 32.4833,
   "country": "Sudan",
   "population": 2805396
 },
 {
   "city": "Al Mijlad",
   "lat": 11.0339,
   "lng": 27.74,
   "country": "Sudan",
   "population": 985000
 },
 {
   "city": "Paramaribo",
   "lat": 5.8522,
   "lng": -55.2039,
   "country": "Suriname",
   "population": 223757
 },
 {
   "city": "Cottica",
   "lat": 3.8542,
   "lng": -54.2281,
   "country": "Suriname",
   "population": 29210
 },
 {
   "city": "Koewarasan",
   "lat": 5.7697,
   "lng": -55.2922,
   "country": "Suriname",
   "population": 27713
 },
 {
   "city": "Longyearbyen",
   "lat": 78.2167,
   "lng": 15.6333,
   "country": "Svalbard",
   "population": null
 },
 {
   "city": "Manzini",
   "lat": -26.4833,
   "lng": 31.3667,
   "country": "Swaziland",
   "population": 110508
 },
 {
   "city": "Mbabane",
   "lat": -26.3208,
   "lng": 31.1617,
   "country": "Swaziland",
   "population": 94874
 },
 {
   "city": "Siteki",
   "lat": -26.45,
   "lng": 31.95,
   "country": "Swaziland",
   "population": 6381
 },
 {
   "city": "Stockholm",
   "lat": 59.3294,
   "lng": 18.0686,
   "country": "Sweden",
   "population": 1611776
 },
 {
   "city": "Gothenburg",
   "lat": 57.7075,
   "lng": 11.9675,
   "country": "Sweden",
   "population": 607882
 },
 {
   "city": "Malmö",
   "lat": 55.6058,
   "lng": 13.0358,
   "country": "Sweden",
   "population": 351749
 },
 {
   "city": "Zürich",
   "lat": 47.3744,
   "lng": 8.5411,
   "country": "Switzerland",
   "population": 436332
 },
 {
   "city": "Geneva",
   "lat": 46.2017,
   "lng": 6.1469,
   "country": "Switzerland",
   "population": 201818
 },
 {
   "city": "Basel",
   "lat": 47.5547,
   "lng": 7.5906,
   "country": "Switzerland",
   "population": 177827
 },
 {
   "city": "Aleppo",
   "lat": 36.2,
   "lng": 37.16,
   "country": "Syria",
   "population": 1916781
 },
 {
   "city": "Damascus",
   "lat": 33.5131,
   "lng": 36.2919,
   "country": "Syria",
   "population": 1754000
 },
 {
   "city": "Homs",
   "lat": 34.7333,
   "lng": 36.7167,
   "country": "Syria",
   "population": 775404
 },
 {
   "city": "Taipei",
   "lat": 25.0375,
   "lng": 121.5625,
   "country": "Taiwan",
   "population": 9078000
 },
 {
   "city": "Taichung",
   "lat": 24.1439,
   "lng": 120.6794,
   "country": "Taiwan",
   "population": 3033885
 },
 {
   "city": "Kaohsiung",
   "lat": 22.615,
   "lng": 120.2975,
   "country": "Taiwan",
   "population": 2733566
 },
 {
   "city": "Dushanbe",
   "lat": 38.5367,
   "lng": 68.78,
   "country": "Tajikistan",
   "population": 863400
 },
 {
   "city": "Khŭjand",
   "lat": 40.2833,
   "lng": 69.6333,
   "country": "Tajikistan",
   "population": 770000
 },
 {
   "city": "Konibodom",
   "lat": 40.2833,
   "lng": 70.4167,
   "country": "Tajikistan",
   "population": 219000
 },
 {
   "city": "Dar es Salaam",
   "lat": -6.8161,
   "lng": 39.2803,
   "country": "Tanzania",
   "population": 7962000
 },
 {
   "city": "Mwanza",
   "lat": -2.5167,
   "lng": 32.9,
   "country": "Tanzania",
   "population": 706453
 },
 {
   "city": "Mbeya",
   "lat": -8.9,
   "lng": 33.45,
   "country": "Tanzania",
   "population": 467000
 },
 {
   "city": "Bangkok",
   "lat": 13.7525,
   "lng": 100.4942,
   "country": "Thailand",
   "population": 18007000
 },
 {
   "city": "Chiang Mai",
   "lat": 18.7953,
   "lng": 98.9986,
   "country": "Thailand",
   "population": 1198000
 },
 {
   "city": "Nonthaburi",
   "lat": 13.8667,
   "lng": 100.5167,
   "country": "Thailand",
   "population": 255671
 },
 {
   "city": "Nassau",
   "lat": 25.0781,
   "lng": -77.3386,
   "country": "The Bahamas",
   "population": 274400
 },
 {
   "city": "Freeport City",
   "lat": 26.5286,
   "lng": -78.6967,
   "country": "The Bahamas",
   "population": 45945
 },
 {
   "city": "West End",
   "lat": 26.6867,
   "lng": -78.975,
   "country": "The Bahamas",
   "population": 13577
 },
 {
   "city": "Banjul",
   "lat": 13.4531,
   "lng": -16.5775,
   "country": "The Gambia",
   "population": 413397
 },
 {
   "city": "Serekunda",
   "lat": 13.4333,
   "lng": -16.6667,
   "country": "The Gambia",
   "population": 340000
 },
 {
   "city": "Brikama",
   "lat": 13.2667,
   "lng": -16.65,
   "country": "The Gambia",
   "population": 195136
 },
 {
   "city": "Dili",
   "lat": -8.5536,
   "lng": 125.5783,
   "country": "Timor-Leste",
   "population": 222323
 },
 {
   "city": "Maliana",
   "lat": -8.9917,
   "lng": 125.2197,
   "country": "Timor-Leste",
   "population": 15800
 },
 {
   "city": "Baucau",
   "lat": -8.4667,
   "lng": 126.45,
   "country": "Timor-Leste",
   "population": 14961
 },
 {
   "city": "Lomé",
   "lat": 6.1319,
   "lng": 1.2228,
   "country": "Togo",
   "population": 837437
 },
 {
   "city": "Sokodé",
   "lat": 8.9833,
   "lng": 1.1333,
   "country": "Togo",
   "population": 113000
 },
 {
   "city": "Kpalimé",
   "lat": 6.9,
   "lng": 0.6333,
   "country": "Togo",
   "population": 100479
 },
 {
   "city": "Nuku‘alofa",
   "lat": -21.1333,
   "lng": -175.2,
   "country": "Tonga",
   "population": 23221
 },
 {
   "city": "Neiafu",
   "lat": -18.6508,
   "lng": -173.9831,
   "country": "Tonga",
   "population": 7391
 },
 {
   "city": "Chaguanas",
   "lat": 10.5167,
   "lng": -61.4,
   "country": "Trinidad and Tobago",
   "population": 101297
 },
 {
   "city": "San Fernando",
   "lat": 10.2833,
   "lng": -61.4667,
   "country": "Trinidad and Tobago",
   "population": 82997
 },
 {
   "city": "Port of Spain",
   "lat": 10.6667,
   "lng": -61.5167,
   "country": "Trinidad and Tobago",
   "population": 81142
 },
 {
   "city": "Tunis",
   "lat": 36.8064,
   "lng": 10.1817,
   "country": "Tunisia",
   "population": 1056247
 },
 {
   "city": "Sidi Bouzid",
   "lat": 35.0381,
   "lng": 9.4858,
   "country": "Tunisia",
   "population": 429912
 },
 {
   "city": "Sfax",
   "lat": 34.74,
   "lng": 10.76,
   "country": "Tunisia",
   "population": 272801
 },
 {
   "city": "Istanbul",
   "lat": 41.0136,
   "lng": 28.955,
   "country": "Turkey",
   "population": 16079000
 },
 {
   "city": "Ankara",
   "lat": 39.93,
   "lng": 32.85,
   "country": "Turkey",
   "population": 5503985
 },
 {
   "city": "İzmir",
   "lat": 38.42,
   "lng": 27.14,
   "country": "Turkey",
   "population": 4320519
 },
 {
   "city": "Ashgabat",
   "lat": 37.95,
   "lng": 58.3833,
   "country": "Turkmenistan",
   "population": 828100
 },
 {
   "city": "Türkmenabat",
   "lat": 39.0833,
   "lng": 63.5667,
   "country": "Turkmenistan",
   "population": 408906
 },
 {
   "city": "Daşoguz",
   "lat": 41.8333,
   "lng": 59.9667,
   "country": "Turkmenistan",
   "population": 227184
 },
 {
   "city": "Grand Turk",
   "lat": 21.4664,
   "lng": -71.136,
   "country": "Turks and Caicos Islands",
   "population": 5801
 },
 {
   "city": "Funafuti",
   "lat": -8.5167,
   "lng": 179.2,
   "country": "Tuvalu",
   "population": 6025
 },
 {
   "city": "Charlotte Amalie",
   "lat": 18.342,
   "lng": -64.9331,
   "country": "U.S. Virgin Islands",
   "population": null
 },
 {
   "city": "Kampala",
   "lat": 0.3136,
   "lng": 32.5811,
   "country": "Uganda",
   "population": 1680600
 },
 {
   "city": "Mbale",
   "lat": 1.0806,
   "lng": 34.175,
   "country": "Uganda",
   "population": 586300
 },
 {
   "city": "Nansana",
   "lat": 0.3639,
   "lng": 32.5286,
   "country": "Uganda",
   "population": 532800
 },
 {
   "city": "Kyiv",
   "lat": 50.45,
   "lng": 30.5233,
   "country": "Ukraine",
   "population": 2963199
 },
 {
   "city": "Kharkiv",
   "lat": 49.9925,
   "lng": 36.2311,
   "country": "Ukraine",
   "population": 1446107
 },
 {
   "city": "Odesa",
   "lat": 46.4775,
   "lng": 30.7326,
   "country": "Ukraine",
   "population": 1017699
 },
 {
   "city": "Dubai",
   "lat": 25.2631,
   "lng": 55.2972,
   "country": "United Arab Emirates",
   "population": 3331420
 },
 {
   "city": "Abu Dhabi",
   "lat": 24.4667,
   "lng": 54.3667,
   "country": "United Arab Emirates",
   "population": 1483000
 },
 {
   "city": "Sharjah",
   "lat": 25.3575,
   "lng": 55.3908,
   "country": "United Arab Emirates",
   "population": 1247749
 },
 {
   "city": "London",
   "lat": 51.5072,
   "lng": -0.1275,
   "country": "United Kingdom",
   "population": 11262000
 },
 {
   "city": "Birmingham",
   "lat": 52.48,
   "lng": -1.9025,
   "country": "United Kingdom",
   "population": 2919600
 },
 {
   "city": "Manchester",
   "lat": 53.4794,
   "lng": -2.2453,
   "country": "United Kingdom",
   "population": 2705000
 },
 {
   "city": "New York",
   "lat": 40.6943,
   "lng": -73.9249,
   "country": "United States",
   "population": 18972871
 },
 {
   "city": "Los Angeles",
   "lat": 34.1141,
   "lng": -118.4068,
   "country": "United States",
   "population": 12121244
 },
 {
   "city": "Chicago",
   "lat": 41.8375,
   "lng": -87.6866,
   "country": "United States",
   "population": 8595181
 },
 {
   "city": "Montevideo",
   "lat": -34.8836,
   "lng": -56.1819,
   "country": "Uruguay",
   "population": 1719453
 },
 {
   "city": "Salto",
   "lat": -31.3833,
   "lng": -57.95,
   "country": "Uruguay",
   "population": 124878
 },
 {
   "city": "Ciudad de la Costa",
   "lat": -34.8167,
   "lng": -55.95,
   "country": "Uruguay",
   "population": 112449
 },
 {
   "city": "Tashkent",
   "lat": 41.3111,
   "lng": 69.2797,
   "country": "Uzbekistan",
   "population": 2571668
 },
 {
   "city": "Namangan",
   "lat": 41.0011,
   "lng": 71.6683,
   "country": "Uzbekistan",
   "population": 626120
 },
 {
   "city": "Samarkand",
   "lat": 39.6547,
   "lng": 66.9758,
   "country": "Uzbekistan",
   "population": 546303
 },
 {
   "city": "Port-Vila",
   "lat": -17.7333,
   "lng": 168.3167,
   "country": "Vanuatu",
   "population": 51437
 },
 {
   "city": "Luganville",
   "lat": -15.5333,
   "lng": 167.1667,
   "country": "Vanuatu",
   "population": 18062
 },
 {
   "city": "Isangel",
   "lat": -19.53,
   "lng": 169.28,
   "country": "Vanuatu",
   "population": 1200
 },
 {
   "city": "Vatican City",
   "lat": 41.904,
   "lng": 12.453,
   "country": "Vatican City",
   "population": 825
 },
 {
   "city": "Maracaibo",
   "lat": 10.6333,
   "lng": -71.6333,
   "country": "Venezuela",
   "population": 2658355
 },
 {
   "city": "Caracas",
   "lat": 10.4806,
   "lng": -66.9036,
   "country": "Venezuela",
   "population": 2245744
 },
 {
   "city": "Valencia",
   "lat": 10.1667,
   "lng": -68,
   "country": "Venezuela",
   "population": 1484430
 },
 {
   "city": "Ho Chi Minh City",
   "lat": 10.7756,
   "lng": 106.7019,
   "country": "Vietnam",
   "population": 15136000
 },
 {
   "city": "Hanoi",
   "lat": 21.0283,
   "lng": 105.8542,
   "country": "Vietnam",
   "population": 8246600
 },
 {
   "city": "Haiphong",
   "lat": 20.8651,
   "lng": 106.6838,
   "country": "Vietnam",
   "population": 2103500
 },
 {
   "city": "Mata-Utu",
   "lat": -13.2825,
   "lng": -176.1736,
   "country": "Wallis and Futuna",
   "population": null
 },
 {
   "city": "Leava",
   "lat": -14.2933,
   "lng": -178.1583,
   "country": "Wallis and Futuna",
   "population": null
 },
 {
   "city": "Hebron",
   "lat": 31.5333,
   "lng": 35.095,
   "country": "West Bank",
   "population": 215452
 },
 {
   "city": "Nāblus",
   "lat": 32.2222,
   "lng": 35.2611,
   "country": "West Bank",
   "population": 156906
 },
 {
   "city": "Yattir",
   "lat": 31.4478,
   "lng": 35.09,
   "country": "West Bank",
   "population": 64277
 },
 {
   "city": "Sanaa",
   "lat": 15.3483,
   "lng": 44.2064,
   "country": "Yemen",
   "population": 2957000
 },
 {
   "city": "Ta‘izz",
   "lat": 13.5789,
   "lng": 44.0219,
   "country": "Yemen",
   "population": 615467
 },
 {
   "city": "Al Ḩudaydah",
   "lat": 14.8022,
   "lng": 42.9511,
   "country": "Yemen",
   "population": 548433
 },
 {
   "city": "Lusaka",
   "lat": -15.4167,
   "lng": 28.2833,
   "country": "Zambia",
   "population": 2467563
 },
 {
   "city": "Ndola",
   "lat": -12.9667,
   "lng": 28.6333,
   "country": "Zambia",
   "population": 528330
 },
 {
   "city": "Kitwe",
   "lat": -12.8167,
   "lng": 28.2,
   "country": "Zambia",
   "population": 504194
 },
 {
   "city": "Harare",
   "lat": -17.8292,
   "lng": 31.0522,
   "country": "Zimbabwe",
   "population": 2150000
 },
 {
   "city": "Bulawayo",
   "lat": -20.17,
   "lng": 28.58,
   "country": "Zimbabwe",
   "population": 653337
 },
 {
   "city": "Chitungwiza",
   "lat": -17.9939,
   "lng": 31.0481,
   "country": "Zimbabwe",
   "population": 371244
 }
]

export default cities
