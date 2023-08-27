from app.models import db, User, Tips, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name = "Demo", 
        last_name = "AA", 
        username='Demo', 
        location="pending", 
        email='demo@aa.io', 
        prepper_type ="Nuclear", 
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.", 
        bio = "Generic User",
        password='password')
    
    marnie = User(
        first_name = "Marnie", 
        last_name = "AA", 
        username='Marnie', 
        location="pending", 
        email='marnie@aa.io', 
        prepper_type ="Nuclear", 
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "Generic User", 
        password='password')
    
    bobbie = User(
        first_name = "Bobbie", 
        last_name = "AA", 
        username='Bobbie', 
        location="pending",
        email='bobbie@aa.io', 
        prepper_type ="Nuclear", 
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "Generic User",
        password='password')
    
    user4 = User(
        first_name = "John",
        last_name= "Smith",
        username = "TestUser1",
        location= "pending",
        email = "John.Smith@awn.com",
        prepper_type = "Nuclear",
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "An avid hiker and outdoor enthusiast, John loves exploring nature trails and documenting his experiences through photography.",
        password = "password"
    )
    user5 = User(
        first_name = "Emily",
        last_name= "Johnson",
        username = "TestUser2",
        location= "pending",
        email = "Emily.Johnson@awn.com",
        prepper_type = "EMP (Electomagiec Pulse) / Solar Flare",
        prepper_description = "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
        bio = "With a passion for art and creativity, Emily is a freelance graphic designer who enjoys combining her artistic flair with innovative digital designs.",
        password = "password"
    )
    user6 = User(
        first_name = "Michael",
        last_name= "Williams",
        username = "TestUser3",
        location= "pending",
        email = "Michael.Williams@awn.com",
        prepper_type = "Economic Collapse",
        prepper_description = "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
        bio = "A tech-savvy problem solver, Michael is a software engineer who thrives on finding elegant solutions to complex coding challenges.",
        password = "password"
    )
    user7 = User(
        
        first_name = "Jessica",
        last_name = "Brown",
        username = "TestUser4",
        location = "pending",
        email = "Jessica.Brown@awn.com",
        prepper_type = "Pandemic",
        prepper_description = "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
        bio = "A nutritionist and fitness advocate, Jessica empowers others to embrace healthy lifestyles and make positive dietary changes.",
        password = "password"
    )
    user8 = User(
        
        first_name = "Daniel",
        last_name = "Jones",
        username = "TestUser5"
,        location = "pending",
        email = "Daniel.Jones@awn.com",
        prepper_type = "Natural Disaster",
        prepper_description = "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
        bio = "A travel blogger and adventurer, Daniel's passion for exploring remote destinations has led him to share captivating stories from around the world.",
        password = "password"
    )
    user9 = User(
        
        first_name = "Sarah",
        last_name = "Davis",
        username = "TestUser6"
,        location = "pending",
        email = "Sarah.Davis@awn.com",
        prepper_type = "Biological / Chemical Attack",
        prepper_description = "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
        bio = "As an environmental activist, Sarah is dedicated to raising awareness about sustainable living and promoting eco-friendly practices.",
        password = "password"
    )
    user10 = User(
        
        first_name = "David",
        last_name = "Martinez",
        username = "TestUser7"
,        location = "pending",
        email = "David.Martinez@awn.com",
        prepper_type = "Cyber-Attack",
        prepper_description = "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
        bio = "An amateur astronomer, David spends his evenings stargazing and capturing celestial wonders through his telescope and camera.",
        password = "password"
    )
    user11 = User(
        
        first_name = "Maria",
        last_name = "Rodriguez",
        username = "TestUser8",
        location = "pending",
        email = "Maria.Rodriguez@awn.com",
        prepper_type = "Civil Unrest / Martial Law",
        prepper_description = "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
        bio = "A culinary enthusiast and food blogger, Maria transforms traditional recipes into modern culinary delights while sharing her culinary journey.",
        password = "password"
    )
    user12 = User(
        
        first_name = "James",
        last_name = "Miller",
        username = "TestUser9",
        location = "pending",
        email = "James.Miller@awn.com",
        prepper_type = "Ecological / Environmental",
        prepper_description = "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
        bio = "With a background in finance and investing, James is a financial advisor helping individuals secure their financial futures through strategic planning.",
        password = "password"
    )
    user13 = User(
        
        first_name = "Jennifer",
        last_name = "Garcia",
        username = "TestUser10",
        location = "pending",
        email = "Jennifer.Garcia@awn.com",
        prepper_type = "Peak Oil / Resource Depletion",
        prepper_description = "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
        bio = "A children's book author and educator, Jennifer's creative stories inspire young minds and foster a love for reading and learning.",
        password = "password"
    )
    user14 = User(
        
        first_name = "Christopher",
        last_name = "Wilson",
        username = "TestUser11"
,        location = "pending",
        email = "Christopher.Wilson@awn.com",
        prepper_type = "Alien Invasion",
        prepper_description = "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
        bio = "An urban planner and community advocate, Christopher is dedicated to creating vibrant neighborhoods that enhance quality of life.",
        password = "password"
    )
    user15 = User(
        
        first_name = "Lisa",
        last_name = "Anderson",
        username = "TestUser12"
,        location = "pending",
        email = "Lisa.Anderson@awn.com",
        prepper_type = "Zombie Apocalypse",
        prepper_description = "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
        bio = "A veterinarian and animal lover, Lisa provides compassionate care for pets and educates pet owners on responsible pet ownership.",
        password = "password"
    )
    user16 = User(
        
        first_name = "Brian",
        last_name = "Taylor",
        username = "TestUser13"
,        location = "pending",
        email = "Brian.Taylor@awn.com",
        prepper_type = "Generalist",
        prepper_description = "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
        bio = "Brian is a passionate musician and music teacher who believes in the power of music to uplift spirits and bring communities together.",
        password = "password"
    )
    user17 = User(
        
        first_name = "Karen",
        last_name = "Thomas",
        username = "TestUser14"
,        location = "pending",
        email = "Karen.Thomas@awn.com",
        prepper_type = "Nuclear",
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "As a social worker, Karen is committed to supporting vulnerable populations and providing resources to improve their well-being.",
        password = "password"
    ) 
    user18 = User(
    first_name = "Matthew",
    last_name = "Jackson",
    username = "TestUser15",
    location = "pending",
    email = "Matthew.Jackson@awn.com",
    prepper_type = "EMP (Electromagnetic Pulse) / Solar Flare",
    prepper_description = "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
    bio = "A science communicator, Matthew engages audiences with the wonders of the natural world through educational videos and talks.",
    password = "password"
    )
    user19 = User(
    
    first_name = "Laura",
last_name = "White",
username = "TestUser16",
location = "pending",
    email = "Laura.White@awn.com",
    prepper_type = "Economic Collapse",
    prepper_description = "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
    bio = "Laura is an interior designer who transforms living spaces into functional and beautiful environments that reflect her clients' personalities.",
    password = "password"
    )
    user20 = User(
    
    first_name = "Robert",
last_name = "Harris",
username = "TestUser17"
,    location = "pending",
    email = "Robert.Harris@awn.com",
    prepper_type = "Pandemic",
    prepper_description = "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
    bio = "An investigative journalist, Robert uncovers hidden truths and sheds light on important issues that shape society.",
    password = "password"
    )
    user21 = User(
    
    first_name = "Elizabeth",
last_name = "Martinez",
username = "TestUser18"
,    location = "pending",
    email = "Elizabeth.Martinez@awn.com",
    prepper_type = "Natural Disaster",
    prepper_description = "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
    bio = "A public health advocate, Elizabeth works to improve community well-being through health education and policy initiatives.",
    password = "password"
    )
    user22 = User(
    
    first_name = "William",
last_name = "Lewis",
username = "TestUser19"
,    location = "pending",
    email = "William.Lewis@awn.com",
    prepper_type = "Biological / Chemical Attack",
    prepper_description = "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
    bio = "With a background in architecture, William designs sustainable buildings that harmonize with the environment and serve their occupants.",
    password = "password"
    )
    user23 = User(
    first_name = "Mary",
    last_name = "Walker",
    username = "TestUser333",
    location = "pending",
    email = "Mary.Walker@awn.com",
    prepper_type = "Cyber-Attack",
    prepper_description = "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
    bio = "Mary is a dedicated elementary school teacher who fosters a love of learning and empowers young minds to explore their potential.",
    password = "password"
    )
    user24 = User(
    
    first_name = "Kevin",
last_name = "Allen",
username = "TestUser20"
,    location = "pending",
    email = "Kevin.Allen@awn.com",
    prepper_type = "Civil Unrest / Martial Law",
    prepper_description = "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
    bio = "A technology entrepreneur, Kevin develops innovative apps that simplify everyday tasks and enhance digital experiences.",
    password = "password"
    )
    user25 = User(
    
    first_name = "Patricia",
last_name = "Young",
username = "TestUser21"
,    location = "pending",
    email = "Patricia.Young@awn.com",
    prepper_type = "Ecological / Environmental",
    prepper_description = "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
    bio = "Patricia is a yoga instructor who guides students on a journey of mindfulness, wellness, and self-discovery through yoga practice.",
    password = "password"
    )
    user26 = User(
        
        first_name = "Richard",
        last_name = "Lewis",
        username = "TestUser22"
,        location = "pending",
        email = "Richard.Lewis@awn.com",
        prepper_type = "Peak Oil / Resource Depletion",
        prepper_description = "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
        bio = "Richard is a historian specializing in local history, unearthing forgotten stories that enrich our understanding of the past.",
        password = "password"
    )
    user27 = User(
        
        first_name = "Cynthia",
        last_name = "Perez",
        username = "TestUser23"
,        location = "pending",
        email = "Cynthia.Perez@awn.com",
        prepper_type = "Alien Invasion",
        prepper_description = "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
        bio = "A botanical artist, Cynthia creates intricate illustrations that capture the beauty and diversity of plant life in exquisite detail.",
        password = "password"
    )
    user28 = User(
        
        first_name = "Joseph",
        last_name = "Turner",
        username = "TestUser24"
,        location = "pending",
        email = "Joseph.Turner@awn.com",
        prepper_type = "Zombie Apocalypse",
        prepper_description = "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
        bio = "With a background in psychology, Joseph is a life coach who empowers individuals to overcome challenges and achieve personal growth.",
        password = "password"
    )
    user29 = User(
        
        first_name = "Nancy",
        last_name = "Baker",
        username = "TestUser25"
,        location = "pending",
        email = "Nancy.Baker@awn.com",
        prepper_type = "Generalist",
        prepper_description = "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
        bio = "An astronomy educator, Nancy ignites curiosity about the cosmos through interactive workshops and telescope observing sessions.",
        password = "password"
    )
    user30 = User(
        
        first_name = "Jason",
        last_name = "King",
        username = "TestUser26"
,        location = "pending",
        email = "Jason.King@awn.com",
        prepper_type = "Nuclear",
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "A sports journalist, Jason covers major sporting events, sharing athletes' stories and capturing the excitement of the games.",
        password = "password"
    )
    user31 = User(
        
        first_name = "Karen",
        last_name = "Adams",
        username = "TestUser27"
,        location = "pending",
        email = "Karen.Adams@awn.com",
        prepper_type = "EMP (Electromagnetic Pulse) / Solar Flare",
        prepper_description = "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
        bio = "Karen is a marine biologist committed to marine conservation, conducting research and advocating for the protection of ocean ecosystems.",
        password = "password"
    )
    user32 = User(
        
        first_name = "Daniel",
        last_name = "Wright",
        username = "TestUser28"
,        location = "pending",
        email = "Daniel.Wright@awn.com",
        prepper_type = "Economic Collapse",
        prepper_description = "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
        bio = "Daniel is a sustainable farmer who cultivates organic produce and educates communities about the benefits of locally sourced food.",
        password = "password"
    )
    user33 = User(
        
        first_name = "Jennifer",
        last_name = "Mitchell",
        username = "TestUser29"
,        location = "pending",
        email = "Jennifer.Mitchell@awn.com",
        prepper_type = "Pandemic",
        prepper_description = "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
        bio = "A life enthusiast and motivational speaker, Jennifer empowers people to embrace positivity and live their lives to the fullest.",
        password = "password"
    )
    user34 = User(
        
        first_name = "Steve",
        last_name = "Robinson",
        username = "TestUser30"
,        location = "pending",
        email = "Steve.Robinson@awn.com",
        prepper_type = "Natural Disaster",
        prepper_description = "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
        bio = "A tech entrepreneur, Steve develops cutting-edge applications that shape the digital landscape and improve users' daily experiences.",
        password = "password"
    )
    user35 = User(
        
        first_name = "Laura",
        last_name = "Phillips",
        username = "TestUser3252"
,        location = "pending",
        email = "Laura.Phillips@awn.com",
        prepper_type = "Biological / Chemical Attack",
        prepper_description = "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
        bio = "Laura is a botanist specializing in rare plant species, working to preserve biodiversity and restore ecosystems in endangered areas.",
        password = "password"
    )
    user36 = User(
        
        first_name = "Charles",
        last_name = "Wood",
        username = "TestUser31"
,        location = "pending",
        email = "Charles.Wood@awn.com",
        prepper_type = "Cyber-Attack",
        prepper_description = "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
        bio = "An antique collector and historian, Charles unearths artifacts that offer glimpses into the past and shed light on historical eras.",
        password = "password"
    )
    user37 = User(
        
        first_name = "Jessica",
        last_name = "Green",
        username = "TestUser32"
,        location = "pending",
        email = "Jessica.Green@awn.com",
        prepper_type = "Civil Unrest / Martial Law",
        prepper_description = "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
        bio = "A wildlife rehabilitator, Jessica dedicates her time to caring for injured animals and releasing them back into their natural habitats.",
        password = "password"
    )
    user38 = User(
        
        first_name = "Donald",
        last_name = "Nelson",
        username = "TestUser33"
,        location = "pending",
        email = "Donald.Nelson@awn.com",
        prepper_type = "Ecological / Environmental",
        prepper_description = "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
        bio = "Donald is a sustainable architect who designs eco-friendly structures that merge seamlessly with the environment and reduce carbon footprint.",
        password = "password"
    )
    user39 = User(
        
        first_name = "Michelle",
        last_name = "Hall",
        username = "TestUser34"
,        location = "pending",
        email = "Michelle.Hall@awn.com",
        prepper_type = "Peak Oil / Resource Depletion",
        prepper_description = "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
        bio = "As a community organizer, Michelle rallies people together to address local issues and create positive change within their neighborhoods.",
        password = "password"
    )
    user40 = User(
        
        first_name = "Brian",
        last_name = "Rivera",
        username = "TestUser35"
,        location = "pending",
        email = "Brian.Rivera@awn.com",
        prepper_type = "Alien Invasion",
        prepper_description = "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
        bio = "Brian is a space enthusiast who shares his passion for astronomy through public talks and observatory events that inspire wonder in the cosmos.",
        password = "password"
    )
    user41 = User(
        
        first_name = "Angela",
        last_name = "Torres",
        username = "TestUser36"
,        location = "pending",
        email = "Angela.Torres@awn.com",
        prepper_type = "Zombie Apocalypse",
        prepper_description = "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
        bio = "Angela is a humanitarian photographer capturing compelling images that shed light on global issues and amplify the voices of marginalized communities.",
        password = "password"
    )
    user42 = User(
        
        first_name = "Ronald",
        last_name = "Collins",
        username = "TestUser37"
,        location = "pending",
        email = "Ronald.Collins@awn.com",
        prepper_type = "Generalist",
        prepper_description = "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
        bio = "Ronald is a disaster relief volunteer who swiftly responds to emergencies, providing aid and support to affected communities in times of crisis.",
        password = "password"
    )
    user43 = User(
        
        first_name = "Kimberly",
        last_name = "Howard",
        username = "TestUser38"
,        location = "pending",
        email = "Kimberly.Howard@awn.com",
        prepper_type = "Nuclear",
        prepper_description = "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
        bio = "A paleontologist and fossil researcher, Kimberly unlocks the mysteries of prehistoric life by studying ancient remains and reconstructing past ecosystems.",
        password = "password"
    )
    user44 = User(
        
        first_name = "Amanda",
        last_name = "Clark",
        username = "TestUser39"
,        location = "pending",
        email = "Amanda.Clark@awn.com",
        prepper_type = "EMP (Electomagiec Pulse) / Solar Flare",
        prepper_description = "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
        bio = "Amanda is a wilderness guide leading outdoor adventures, connecting people with nature and encouraging them to explore the great outdoors.",
        password = "password"
    )
    user45 = User(
        
        first_name = "Thomas",
        last_name = "Perez",
        username = "TestUser40"
,        location = "pending",
        email = "Thomas.Perez@awn.com",
        prepper_type = "Economic Collapse",
        prepper_description = "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
        bio = "Thomas is a master woodworker who crafts exquisite furniture pieces, infusing each creation with a touch of artistic flair and meticulous craftsmanship.",
        password = "password"
    )
    user46 = User(
        
        first_name = "Peter",
        last_name = "Parker",
        username = "TestUser41"
,        location = "pending",
        email = "Peter.Parker@awn.com",
        prepper_type = "Pandemic",
        prepper_description = "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
        bio = "A globetrotting travel writer, Peter chronicles his journeys to remote corners of the world, sharing captivating stories that inspire wanderlust in readers.",
        password = "password"
    )
    user47 = User(
        
        first_name = "Tony",
        last_name = "Stark",
        username = "TestUser42"
,        location = "pending",
        email = "Tony.Stark@awn.com",
        prepper_type = "Natural Disaster",
        prepper_description = "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
        bio = "An innovative tech inventor, Tony develops groundbreaking gadgets that streamline daily tasks and enhance convenience in the modern world.",
        password = "password"
    )
    user48 = User(
        
        first_name = "Amy",
        last_name = "Rodriguez",
        username = "TestUser43"
,        location = "pending",
        email = "Amy.Rodriguez@awn.com",
        prepper_type = "Biological / Chemical Attack",
        prepper_description = "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
        bio = "Amy is a passionate environmentalist and wildlife researcher, dedicating her efforts to protecting endangered species and their habitats.",
        password = "password"
    )
    user49 = User(
        
        first_name = "Samantha",
        last_name = "Young",
        username = "TestUser525"
,        location = "pending",
        email = "Samantha.Young@awn.com",
        prepper_type = "Cyber-Attack",
        prepper_description = "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet",
        bio = "Samantha is a motivational speaker who empowers individuals to overcome challenges, offering practical tools for personal growth and transformation.",
        password = "password"
    )
    user50 = User(
        
        first_name = "Jeffrey",
        last_name = "Adams",
        username = "TestUser44"
,        location = "pending",
        email = "Jeffrey.Adams@awn.com",
        prepper_type = "Civil Unrest / Martial Law",
        prepper_description = "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
        bio = "With a green thumb and a heart for gardening, Jeffrey cultivates lush gardens that provide beauty, sustenance, and tranquility for all who visit.",
        password = "password"
    )
    user51 = User(
        
        first_name = "Stephanie",
        last_name = "Carter",
        username = "TestUser45"
,        location = "pending",
        email = "Stephanie.Carter@awn.com",
        prepper_type = "Ecological / Environmental",
        prepper_description = "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
        bio = "Stephanie is a humanitarian aid worker who provides critical support to communities affected by disasters, ensuring their basic needs are met during challenging times.",
        password = "password"
    )
    user52 = User(
        
        first_name = "Andrew",
        last_name = "Ward",
        username = "TestUser46"
,        location = "pending",
        email = "Andrew.Ward@awn.com",
        prepper_type = "Peak Oil / Resource Depletion",
        prepper_description = "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
        bio = "An aerospace engineer, Andrew designs cutting-edge aircraft systems that contribute to safer and more efficient air travel around the world.",
        password = "password"
    )
    user53 = User(
        
        first_name = "Bruce",
        last_name = "Banner",
        username = "TestUser47",
        location = "pending",
        email = "Bruce.Banner@awn.com",
        prepper_type = "Alien Invasion",
        prepper_description = "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
        bio = "Bruce is a health and fitness coach who helps clients achieve their wellness goals, emphasizing the importance of physical activity and balanced nutrition.",
        password = "password"
    )

    tip1 = Tips(
        user_id = 1,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip2 = Tips(
        user_id = 1,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip3 = Tips(
        user_id = 1,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip4 = Tips(
        user_id = 2,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
    )
    tip5 = Tips(
        user_id = 3,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
    )
    tip6 = Tips(
        user_id = 3,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
    )
    tip7 = Tips(
        user_id = 4,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
    )
    tip8 = Tips(
        user_id = 4,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
    )
    tip9 = Tips(
        user_id = 5,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip10 = Tips(
        user_id = 5,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip11 = Tips(
        user_id = 5,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip12 = Tips(
        user_id = 6,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip13 = Tips(
        user_id = 7,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip14 = Tips(
        user_id = 8,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip15 = Tips(
        user_id = 9,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip16 = Tips(
        user_id = 10,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip17 = Tips(
    
        user_id = 11,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip18 = Tips(
        user_id = 12,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip19 = Tips(
        user_id = 13,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip20 = Tips(
        user_id = 14,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip21 = Tips(
        user_id = 15,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip22 = Tips( 
        user_id = 16,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip23 = Tips(
        user_id = 17,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip24 = Tips(
        user_id = 17,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip25 = Tips(
        user_id = 18,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip26 = Tips(
        user_id = 18,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip27 = Tips(
        user_id = 19,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip28 = Tips(        
        user_id = 19,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip29 = Tips(    
        user_id = 20,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip30 = Tips(        
        user_id = 20,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip31 = Tips(

        user_id = 21,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip32 = Tips(        
        user_id = 22,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip33 = Tips(    
        user_id = 23,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip34 = Tips(        
        user_id = 24,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip35 = Tips(
        user_id = 25,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip36 = Tips(        
        user_id = 26,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip37 = Tips(    
        user_id = 27,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip38 = Tips(        
        user_id = 28,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip39 = Tips(
        user_id = 29,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip40 = Tips(        
        user_id = 30,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip41 = Tips(    
        user_id = 30,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip42 = Tips(        
        user_id = 31,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip43 = Tips(
        user_id = 31,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip44 = Tips(        
        user_id = 32,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip45 = Tips(    
        user_id = 33,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip46 = Tips(        
        user_id = 34,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip47 = Tips(

        user_id = 35,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip48 = Tips(        
        user_id = 36,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip49 = Tips(    
        user_id = 36,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip50 = Tips(        
        user_id = 37,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip51 = Tips(
        user_id = 38,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip52 = Tips(    
        user_id = 39,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip53 = Tips(    
        user_id = 40,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip54 = Tips(    
        user_id = 41,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip55 = Tips(
        user_id = 41,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip56 = Tips(    
        user_id = 42,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip57 = Tips(    
        user_id = 42,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip58 = Tips(        
        user_id = 43,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip59 = Tips(    
        user_id = 44,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip60 = Tips(    
        user_id = 45,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip61 = Tips(    
        user_id = 46,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip62 = Tips(    
        user_id = 47,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip63 = Tips(    
        user_id = 48,
        weather_category = 3,
        title = "It may look pretty, but stay awy from Bioluminescent Rain",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip64 = Tips(    
        user_id = 49,
        weather_category = 4,
        title = "Yes, Rain Can be Cursed Now",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip65 = Tips(    
        user_id = 50,
        weather_category = 1,
        title = "Surviving a Solar Flare",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    tip66 = Tips(    
        user_id = 50,
        weather_category = 2,
        title = "Beware of the Aurora Plague",
        body = "Sample Body",
        date_created = datetime(2023, 8, 8) 
        )
    
    # db.session.add(demo)
    # db.session.add(marnie)
    # db.session.add(bobbie)

    # db.session.add(tip1)
    # db.session.add(tip2)
    # db.session.add(tip3)
    db.session.add_all([demo, marnie,bobbie,user4,user5,user6,user7,user8,user9,user10,
    user11,user12,user13,user14,user15,user16,user17,user18,user19,user20,
    user21,user22,user23,user24,user25,user26,user27,user28,user29,user30,
    user31,user32,user33,user34,user35,user36,user37,user38,user39,user40,
    user41,user42,user43,user44,user45,user46,user47,user48,user49,user50, user51, user52, user53])

    db.session.add_all([tip1, tip2,tip3,tip4,tip5,tip6,tip7,tip8,tip9,tip10,
    tip11,tip12,tip13,tip14,tip15,tip16,tip17,tip18,tip19,tip20,
    tip21,tip22,tip23,tip24,tip25,tip26,tip27,tip28,tip29,tip30,
    tip31,tip32,tip33,tip34,tip35,tip36,tip37,tip38,tip39,tip40,
    tip41,tip42,tip43,tip44,tip45,tip46,tip47,tip48,tip49,tip50,
    tip51,tip52,tip53,tip54,tip55,tip56,tip57,tip58,tip59,tip60,
    tip61,tip62,tip63,tip64,tip65,tip66])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.

def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tips RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tips"))
        db.session.execute(text("DELETE FROM users"))

        
    db.session.commit()