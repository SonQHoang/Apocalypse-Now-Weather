const apocWeatherData = {
    NaturalDisasters: {
      eOne: {
        name: "Solar Flare Apocalypse",
        source: "/icons/solar-flare.png",
        category: "Natural Disasters",
        description:
          "A massive solar flare disrupts technology, causing widespread power outages and communication failures",
      },

      eTwo: {
        name: "Category 7 Hurricane",
        source: "/icons/hurricane-black.png",
        category: "Natural Disasters",
        description:
          "Unprecedentedly strong hurricanes with speeds surpassing all known scales, obliterating cities and causing massive tsunamis.",
      },

      eThree: {
        name: "Raging Wildfires",
        source: "/icons/wildfire-home.png",
        category: "Natural Disasters",
        description: "Smores are easily made, but be careful of your house",
      },

      eFour: {
        name: "Cryo Storms",
        source: "/icons/frozen.png",
        category: "Natural Disasters",
        description:
          "Intense cold fronts create freezing storms that encase everything in thick layers of ice.",
      },

      eFive: {
        name: "Inferno Twisters",
        source: "/icons/firetornado.png",
        category: "Natural Disasters",
        description:
          "Fire tornadoes form, combining the destructiveness of wildfires with the power of tornadoes.",
      },

      eSix: {
        name: "Sand Tsunamis",
        source: "/icons/tsunami.png",
        category: "Natural Disasters",
        description:
          "Massive sandstorms surge across coastal regions, swallowing cities and causing destruction.",
      },

      eSeven: {
        name: "Biohazard Hail",
        source: "/icons/biohazard-red.png",
        category: "Natural Disasters",
        description:
          "Hailstones carry harmful pathogens, causing sickness and disease outbreaks.",
      },

      eEight: {
        name: "Polyphonic Lightning",
        source: "/icons/lightning-storm.png",
        category: "Natural Disasters",
        description:
          "Lightning strikes create hauntingly beautiful music-like sounds, but they also trigger power surges and fires.",
      },

      eNine: {
        name: "Abyssal Rain",
        source: "/icons/kraken.png",
        category: "Natural Disasters",
        description:
          "Rainwater carries deep-sea creatures, turning cities into underwater landscapes.",
      },

      eTen: {
        name: "Moonquakes",
        source: "/icons/earthquake.png",
        category: "Natural Disasters",
        description:
          "Intense seismic activity caused by the moon's gravitational forces triggers earthquakes of unprecedented magnitude.",
      },

      eEleven: {
        name: "Shifting Continents",
        source: "/icons/dyingearth.png",
        category: "Natural Disasters",
        description:
          "Cataclysmic weather events trigger tectonic shifts, reshaping continents and landscapes.",
      },

      eTwelve: {
        name: "Blazing Skies",
        source: "/icons/meteorite-black.png",
        category: "Natural Disasters",
        description:
          "Meteor showers rain down fiery debris, causing widespread fires and endangering life on Earth.",
      },

      eThirteen: {
        name: "Acid Rain",
        source: "/icons/acid-rain.png",
        category: "Natural Disasters",
        description:
          "Acidic rain falls from the sky, corroding everything it touches and posing a severe threat to ecosystems.",
      },
    },

    SupernaturalPhenomena: {
      eOne: {
        name: "Whispering Winds",
        source: "/icons/wind.png",
        category: "Supernatural Phenomena",
        description:
          "Unpredictable gusts of wind carry eerie voices and unsettling messages.",
      },

      eTwo: {
        name: "Crystal Frost",
        source: "/icons/frozen.png",
        category: "Supernatural Phenomena",
        description:
          "Frost forms on surfaces and grows into beautiful yet dangerous crystalline structures, freezing everything in its path.",
      },

      eThree: {
        name: "Aurora Plague",
        source: "/icons/aurora-borealis.png",
        category: "Supernatural Phenomena",
        description:
          "An otherworldly aurora borealis brings a mysterious illness that affects people's behavior and cognition.",
      },

      eFour: {
        name: "Magnetic Storms",
        source: "/icons/compass.png",
        category: "Supernatural Phenomena",
        description:
          "Fluctuations in Earth's magnetic field disrupt technology and navigation systems, leading to chaos.",
      },

      eFive: {
        name: "Sentient Clouds",
        source: "/icons/cloud.png",
        category: "Supernatural Phenomena",
        description:
          "Cloud formations exhibit sentient behavior, communicating with people through patterns and movements.",
      },

      eSix: {
        name: "Temporal Rainbows",
        source: "/icons/rainbow.png",
        category: "Supernatural Phenomena",
        description: "Rainbows appear with shimmering colors that bend time and space.",
      },

      eSeven: {
        name: "Spectral Storms",
        source: "/icons/lightning-storm.png",
        category: "Supernatural Phenomena",
        description:
          "Storms bring with them apparitions and ghostly phenomena, creating a surreal and eerie atmosphere.",
      },

      eEight: {
        name: "Phantom Fog",
        source: "/icons/phantomfog.png",
        category: "Supernatural Phenomena",
        description:
          "Thick fog distorts reality and creates illusions, making navigation nearly impossible.",
      },

      eNine: {
        name: "Molten Hail",
        source: "/icons/molten-hail.png",
        category: "Supernatural Phenomena",
        description:
          "Hailstones made of molten rock and metal rain down, causing widespread destruction.",
      },

      eTen: {
        name: "Eclipse Aurora",
        source: "/icons/aurora-borealis.png",
        category: "Supernatural Phenomena",
        description:
          "A rare alignment of cosmic events results in a breathtaking but unsettling aurora in the sky.",
      },

      eEleven: {
        name: "Venomous Mist",
        source: "/icons/poison-rain.png",
        category: "Supernatural Phenomena",
        description:
          "Mist carries toxic substances that cause harm to both the environment and living beings.",
      },

      eTwelve: {
        name: "Echoing Thunder",
        source: "/icons/pocket-watch.png",
        category: "Supernatural Phenomena",
        description:
          "Thunder that echoes not only through the air but also through time, replaying past sounds and generating disorienting echoes that distort reality.",
      },

      eThirteen: {
        name: "Astral Shimmers",
        source: "/icons/sparkle.png",
        category: "Supernatural Phenomena",
        description:
          "Mysterious and vibrant shimmers of light that manifest in the sky, causing subtle shifts in perception and drawing people into otherworldly trances.",
      },
    },

    MysticalElements: {
      eOne: {
        name: "Bioluminescent Rain",
        source: "/icons/acid-rain-black.png",
        category: "Mystical Elements",
        description:
          "Rainwater becomes bioluminescent, creating mesmerizing yet toxic landscapes.",
      },

      eTwo: {
        name: "Ash Monsoon",
        source: "/icons/volcano.png",
        category: "Mystical Elements",
        description:
          "Volcanic eruptions lead to massive ash clouds that create a monsoon of ash and debris.",
      },

      eThree: {
        name: "Chrono Frog",
        source: "/icons/frog.png",
        category: "Mystical Elements",
        description:
          "Mysterious frog distorts time perception and causes temporary disorientation.",
      },

      eFour: {
        name: "Time-Skipping Storms",
        source: "/icons/confusion.png",
        category: "Natural Disasters",
        description:
          "Intense storms cause time to skip forward or backward for brief periods, leading to confusion and disarray.",
      },

      eFive: {
        name: "Biome Shifts",
        source: "/icons/biomeshifts.png",
        category: "Mystical Elements",
        description:
          "Drastic weather shifts lead to rapid changes in ecosystems and the appearance of unfamiliar flora and fauna.",
      },

      eSix: {
        name: "Quantum Storms",
        source: "/icons/quantumswirls.png",
        category: "Mystical Elements",
        description:
          "Weather anomalies lead to quantum fluctuations, creating unpredictable phenomena.",
      },

      eSeven: {
        name: "Prismatic Snowfall",
        source: "/icons/snow_black.png",
        category: "Mystical Elements",
        description:
          "Snowflakes refract light in mesmerizing ways, but prolonged exposure causes hallucinations.",
      },

      eEight: {
        name: "Frostfire",
        source: "/icons/fireIce.png",
        category: "Mystical Elements",
        description:
          "Intense cold and fire phenomena combine, leading to paradoxical and dangerous conditions.",
      },

      eNine: {
        name: "Symbiotic Storms",
        source: "/icons/toxiccloud.png",
        category: "Mystical Elements",
        description:
          "Weather events lead to unexpected symbiotic relationships between organisms, altering ecosystems drastically.",
      },

      eTen: {
        name: "Golden Snow",
        source: "/icons/snow_black.png",
        category: "Mystical Elements",
        description:
          "A mesmerizing golden-hued snowfall that's incredibly heavy and can collapse structures and trees under its weight.",
      },

      eEleven: {
        name: "Ethereal Breezes",
        source: "/icons/wind.png",
        category: "Mystical Elements",
        description:
          "Soft and luminous gusts of wind that carry strange whispers and elusive fragrances, transporting people's minds to distant realms.",
      },

      eTwelve: {
        name: "Elemental Mirage",
        source: "/icons/aliens.png",
        category: "Mystical Elements",
        description:
          "Atmospheric conditions create illusions of fantastical landscapes and creatures, blurring the boundaries between reality and imagination.",
      },

      eThirteen: {
        name: "Supernova Daylight",
        source: "/icons/blind.png",
        category: "Mystical Elements",
        description:
          "The day turns as bright as a supernova, blinding all and causing spontaneous fires.",
      },
    },

    ParanormalChaos: {
      eOne: {
        name: "Cursed Rain",
        source: "/icons/acid-rain.png",
        category: "Paranormal Chaos",
        description:
          "Rainfall carries a malevolent energy that brings bad luck and misfortune to those it touches.",
      },

      eTwo: {
        name: "Gravity Waves",
        source: "/icons/gravitywaves.png",
        category: "Paranormal Chaos",
        description:
          "Strange atmospheric phenomena cause gravity to fluctuate, leading to unpredictable effects.",
      },

      eThree: {
        name: "Ravenous Locust Rains",
        source: "/icons/locust.png",
        category: "Paranormal Chaos",
        description:
          "Clouds composed of locusts darken the sky, descending upon regions and consuming all vegetation in their path.",
      },

      eFour: {
        name: "Plague Clouds",
        source: "/icons/plague.png",
        category: "Paranormal Chaos",
        description:
          "Toxic clouds release contagious diseases, spreading illness far and wide.",
      },

      eFive: {
        name: "Echoing Shadows",
        source: "/icons/shadows.png",
        category: "Paranormal Chaos",
        description:
          "Shadows that detach from objects and gain a life of their own, moving independently and sometimes revealing hidden truths.",
      },

      eSix: {
        name: "Crimson Tides",
        source: "/icons/death-flaming.png",
        category: "Paranormal Chaos",
        description:
          "The oceans turn blood-red, suffocating marine life and causing bizarre mutations in the surviving species.",
      },

      eSeven: {
        name: "Reality Ripples",
        source: "/icons/realityripples.png",
        category: "Paranormal Chaos",
        description:
          "Sudden distortions in space and time that create visual anomalies, making surroundings appear as if viewed through a turbulent liquid surface.",
      },

      eEight: {
        name: "Enigmatic Mirages",
        source: "/icons/rainbow.png",
        category: "Paranormal Chaos",
        description:
          "Illusions manifest in the environment, playing with perception and creating bizarre and bewildering sights.",
      },

      eNine: {
        name: "Haunting Resonance",
        source: "/icons/confusion.png",
        category: "Paranormal Chaos",
        description:
          "Strange resonances in the air that cause inanimate objects to emit eerie and haunting sounds, resembling ghostly voices.",
      },

      eTen: {
        name: "Poltergeist Gusts",
        source: "/icons/blizzard.png",
        category: "Paranormal Chaos",
        description:
          "Winds that carry an otherworldly energy, causing objects to move on their own and creating a chaotic and unsettling atmosphere.",
      },

      eEleven: {
        name: "Eclipsed Sun",
        source: "/icons/skull-black.png",
        category: "Paranormal Chaos",
        description:
          "A series of prolonged solar eclipses plunges the world into near-perpetual darkness.",
      },

      eTwelve: {
        name: "Silent Thunder",
        source: "/icons/confusion.png",
        category: "Paranormal Chaos",
        description:
          "Thunder rumbles but produces no sound, leading to widespread confusion and anxiety.",
      },

      eThirteen: {
        name: "Vampire Breeze",
        source: "/icons/dying_vampbreeze.png",
        category: "Paranormal Chaos",
        description:
          "Winds that sap the life force and energy from those they touch, leaving people aged and weakened.",
      },
    },

    UnpredictableTransformations: {
      eOne: {
        name: "Zombie Doomsday",
        source: "/icons/zombie.png",
        category: "Unpredictable Transformations",
        description:
          "Triggers a supernatural transformation, raising the dead as relentless zombies",
      },

      eTwo: {
        name: "Sonic Storms",
        source: "/icons/earthquake.png",
        category: "Unpredictable Transformations",
        description:
          "Intense sound waves create shockwave storms that shatter structures and deafen all in their path.",
      },

      eThree: {
        name: "Reverse Rain",
        source: "/icons/reverserain.png",
        category: "Unpredictable Transformations",
        description:
          "Raindrops that defy gravity, rising from the ground to the sky, causing confusion and disarray.",
      },

      eFour: {
        name: "Mirror Mists",
        source: "/icons/sparkle.png",
        category: "Unpredictable Transformations",
        description:
          "Mist that acts as reflective surfaces, making navigation near impossible and causing illusions.",
      },

      eFive: {
        name: "Echoing Dunes",
        source: "/icons/skull_crossbones.png",
        category: "Unpredictable Transformations",
        description:
          "Desert sand dunes that resonate with ghostly whispers and old world songs, luring travelers to their doom.",
      },

      eSix: {
        name: "Chameleon Clouds",
        source: "/icons/toxiccloud.png",
        category: "Unpredictable Transformations",
        description:
          "Clouds that mimic surrounding landscapes, making it challenging to distinguish between the sky and the ground.",
      },

      eSeven: {
        name: "Petrifying Fog",
        source: "/icons/petrifyingfog.png",
        category: "Unpredictable Transformations",
        description:
          "Fog that turns any living being it touches into stone, leaving statues in its wake.",
      },

      eEight: {
        name: "Temporal Tides",
        source: "/icons/pocket-watch.png",
        category: "Unpredictable Transformations",
        description:
          "Ocean tides that can temporarily transport coastal regions to prehistoric or future eras.",
      },

      eNine: {
        name: "Chlorine Showers",
        source: "/icons/chlorine.png",
        category: "Unpredictable Transformations",
        description:
          "Rain mixed with chlorine compounds that burn and bleach everything they touch.",
      },

      eTen: {
        name: "Dimensional Rifts",
        source: "/icons/DimensionalRifts.png",
        category: "Unpredictable Transformations",
        description:
          "Fissures in space that briefly connect different realities, allowing glimpses into alternate worlds and timelines.",
      },

      eEleven: {
        name: "Quantum Swirls",
        source: "/icons/quantumswirls.png",
        category: "Unpredictable Transformations",
        description:
          "Swirling patterns of energy that cause objects and creatures to momentarily phase in and out of existence, creating a sense of unreality.",
      },

      eTwelve: {
        name: "Fractal Rain",
        source: "/icons/acid-rain-black.png",
        category: "Unpredictable Transformations",
        description:
          "Raindrops that split into smaller versions of themselves upon impact, creating intricate fractal patterns on surfaces and in the air.",
      },

      eThirteen: {
        name: "Reality Hiccups",
        source: "/icons/radiation.png",
        category: "Unpredictable Transformations",
        description:
          "Brief moments of glitch-like disturbances in the fabric of reality, causing small localized disruptions in time, space, and matter.",
      },
    },
  };

  module.exports = apocWeatherData;
