from app.models import db, User, Tips, TipComments, StoryComments, environment, SCHEMA
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
    
    tip_comment_1 = TipComments(
        tip_id = 1,
        user_id = 1,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_2 = TipComments(
        tip_id = 2,
        user_id = 2,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_3 = TipComments(
        tip_id = 2,
        user_id = 3,
        body = "I'm intrigued... Are these survival tips from personal experience",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_4 = TipComments(
        tip_id = 2,
        user_id = 4,
        body = "I'm intrigued... Are these survival tips from personal experience",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_5 = TipComments(
        tip_id = 3,
        user_id = 5,
        body = "I'm intrigued... Are these survival tips from personal experience",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_6 = TipComments(
        tip_id = 4,
        user_id = 6,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_7 = TipComments(
        tip_id = 5,
        user_id = 7,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_8 = TipComments(
    
        tip_id = 5,
        user_id = 8,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_9 = TipComments(
    
        tip_id = 6,
        user_id = 9,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_10 = TipComments(
        tip_id = 6,
        user_id = 10,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_11 = TipComments(
        tip_id = 7,
        user_id = 11,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_12 = TipComments(
        tip_id = 8,
        user_id = 12,
        body = "Really thankful there are people like you out there making tips like this for us to follow!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_13 = TipComments(
        tip_id = 8,
        user_id = 13,
        body = "Really thankful there are people like you out there making tips like this for us to follow!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_14 = TipComments(
        tip_id = 8,
        user_id = 14,
        body = "Really thankful there are people like you out there making tips like this for us to follow!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_15 = TipComments(
        tip_id = 9,
        user_id = 15,
        body = "Really thankful there are people like you out there making tips like this for us to follow!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_16 = TipComments(
        tip_id = 10,
        user_id = 16,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_17 = TipComments(
        tip_id = 10,
        user_id = 17,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_18 = TipComments(
        tip_id = 10,
        user_id = 18,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_19 = TipComments(
        tip_id = 11,
        user_id = 19,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_20 = TipComments(
        tip_id = 12,
        user_id = 20,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_21 = TipComments(
        tip_id = 12,
        user_id = 21,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_22 = TipComments(
        tip_id = 13,
        user_id = 22,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_23 = TipComments(
        tip_id = 14,
        user_id = 23,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_24 = TipComments(
        tip_id = 15,
        user_id = 24,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_25 = TipComments(
        tip_id = 15,
        user_id = 25,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_26 = TipComments(
        tip_id = 16,
        user_id = 26,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_27 = TipComments(
        tip_id = 17,
        user_id = 27,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_28 = TipComments(
        tip_id = 18,
        user_id = 28,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_29 = TipComments(
        tip_id = 19,
        user_id = 29,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_30 = TipComments(
        tip_id = 20,
        user_id = 30,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_31 = TipComments(
        tip_id = 21,
        user_id = 31,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_32 = TipComments(
        tip_id = 22,
        user_id = 32,
        body = "Thanks for sharing these survival gems. I'm taking notes!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_33 = TipComments(
        tip_id = 23,
        user_id = 33,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_34 = TipComments(
        tip_id = 24,
        user_id = 34,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_35 = TipComments(
        tip_id = 25,
        user_id = 35,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_36 = TipComments(
        tip_id = 26,
        user_id = 36,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_37 = TipComments(
        tip_id = 27,
        user_id = 37,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_38 = TipComments(
        tip_id = 28,
        user_id = 38,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_39 = TipComments(
        tip_id = 29,
        user_id = 39,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_40 = TipComments(
        tip_id = 29,
        user_id = 40,
        body = "Survival is all about knowledge. Thanks for boosting mine!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_41 = TipComments(
        tip_id = 30,
        user_id = 41,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_42 = TipComments(
        tip_id = 30,
        user_id = 42,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_43 = TipComments(
        tip_id = 31,
        user_id = 43,
        body = "Because nothing says 'hopeless' like survival tactics.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_44 = TipComments(
        tip_id = 31,
        user_id = 44,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_45 = TipComments(
        tip_id = 32,
        user_id = 45,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_46 = TipComments(
        tip_id = 33,
        user_id = 46,
        body = "Survival tips that make me question what I know about emergencies.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_47 = TipComments(
        tip_id = 34,
        user_id = 47,
        body = "Because nothing says 'hopeless' like survival tactics.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_48 = TipComments(
        tip_id = 35,
        user_id = 48,
        body = "Because nothing says 'hopeless' like survival tactics.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_49 = TipComments(
        tip_id = 36,
        user_id = 49,
        body = "These survival tips serve as a reminder of the dangers out there.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_50 = TipComments(
        tip_id = 36,
        user_id = 50,
        body = "These survival tips serve as a reminder of the dangers out there.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_51 = TipComments(
        tip_id = 37,
        user_id = 2,
        body = "These survival tips serve as a reminder of the dangers out there.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_52 = TipComments(
        tip_id = 38,
        user_id = 2,
        body = "Because nothing says 'hopeless' like survival tactics.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_53 = TipComments(
        tip_id = 39,
        user_id = 4,
        body = "Sad to consider a world where these survival tips are necessary.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_54 = TipComments(
        tip_id = 40,
        user_id = 3,
        body = "Sad to consider a world where these survival tips are necessary.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_55 = TipComments(
        tip_id = 41,
        user_id = 17,
        body = "Because nothing says 'hopeless' like survival tactics.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_56 = TipComments(
        tip_id = 42,
        user_id = 24,
        body = "Sad to consider a world where these survival tips are necessary.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_57 = TipComments(
        tip_id = 42,
        user_id = 28,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_58 = TipComments(
        tip_id = 43,
        user_id = 33,
        body = "I hope I never have to use these...",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_59 = TipComments(
        tip_id = 43,
        user_id = 32,
        body = "You never know when it'll come in handy though!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_60 = TipComments(
        tip_id = 44,
        user_id = 35,
        body = "I hope I never have to use these...",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_61 = TipComments(
        tip_id = 45,
        user_id = 39,
        body = "Thanks for the tips, I'll still manage to mess it up.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_62 = TipComments(
        tip_id = 46,
        user_id = 36,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_63 = TipComments(
        tip_id = 47,
        user_id = 42,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_64 = TipComments(
        tip_id = 48,
        user_id = 44,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_65 = TipComments(
        tip_id = 49,
        user_id = 48,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_66 = TipComments(
        tip_id = 50,
        user_id = 50,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_67 = TipComments(
        tip_id = 50,
        user_id = 12,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_68 = TipComments(
        tip_id = 51,
        user_id = 14,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_69 = TipComments(
        tip_id = 52,
        user_id = 16,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_70 = TipComments(
        tip_id = 53,
        user_id = 19,
        body = "As if I needed more reminders of how unprepared I am.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_71 = TipComments(
        tip_id = 54,
        user_id = 22,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_72 = TipComments(
        tip_id = 55,
        user_id = 24,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_73 = TipComments(
        tip_id = 55,
        user_id = 4,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_74 = TipComments(
        tip_id = 56,
        user_id = 2,
        body = "How many people wanna go out there and trip applying these tips right now?",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_75 = TipComments(
        tip_id = 57,
        user_id = 18,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_76 = TipComments(
        tip_id = 57,
        user_id = 20,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_77 = TipComments(
        tip_id = 57,
        user_id = 25,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_78 = TipComments(
        tip_id = 58,
        user_id = 26,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_79 = TipComments(
        tip_id = 59,
        user_id = 26,
        body = "Survival for dummies, perfect.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_80 = TipComments(
        tip_id = 60,
        user_id = 14,
        body = "Survival for dummies, perfect.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_81 = TipComments(
        tip_id = 60,
        user_id = 10,
        body = "Survival for dummies, perfect.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_82 = TipComments(
        tip_id = 61,
        user_id = 3,
        body = "Survival for dummies, perfect.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_83 = TipComments(
        tip_id = 62,
        user_id = 10,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_84 = TipComments(
        tip_id = 63,
        user_id = 44,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_85 = TipComments(
        tip_id = 64,
        user_id = 48,
        body = "In a pinch, these tips could be a lifesaver. Thanks!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_86 = TipComments(
        tip_id = 65,
        user_id = 50,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_87 = TipComments(
        tip_id = 66,
        user_id = 23,
        body = "Survival for dummies, perfect.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_88 = TipComments(
        tip_id = 47,
        user_id = 24,
        body = "Survival expert in the making these tips prove it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_89 = TipComments(
        tip_id = 52,
        user_id = 29,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_90 = TipComments(
        tip_id = 55,
        user_id = 35,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_91 = TipComments(
        tip_id = 58,
        user_id = 37,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_92 = TipComments(
        tip_id = 49,
        user_id = 34,
        body = "Survival expert in the making these tips prove it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_93 = TipComments(
        tip_id = 32,
        user_id = 32,
        body = "Survival expert in the making these tips prove it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_94 = TipComments(
        tip_id = 53,
        user_id = 15,
        body = "Survival expert in the making these tips prove it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_95 = TipComments(
        tip_id = 65,
        user_id = 18,
        body = "Survival expert in the making these tips prove it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_96 = TipComments(
        tip_id = 66,
        user_id = 23,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_97 = TipComments(
        tip_id = 42,
        user_id = 35,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_98 = TipComments(
        tip_id = 13,
        user_id = 28,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_99 = TipComments(
        tip_id = 10,
        user_id = 38,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_100 = TipComments(
        tip_id = 9,
        user_id = 21,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_101 = TipComments(
        tip_id = 34,
        user_id = 22,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_102 = TipComments(
        tip_id = 34,
        user_id = 34,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_103 = TipComments(
        tip_id = 38,
        user_id = 41,
        body = "These survival tips are something I'll file away for later.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_104 = TipComments(
        tip_id = 38,
        user_id = 32,
        body = "You're on fire! These tips showcase your survival prowess.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_105 = TipComments(
        tip_id = 38,
        user_id = 35,
        body = "You're on fire! These tips showcase your survival prowess.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_106 = TipComments(
        tip_id = 18,
        user_id = 18,
        body = "You're on fire! These tips showcase your survival prowess.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_107 = TipComments(
        tip_id = 24,
        user_id = 13,
        body = "You're on fire! These tips showcase your survival prowess.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_108 = TipComments(
        tip_id = 22,
        user_id = 10,
        body = "You're on fire! These tips showcase your survival prowess.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_109 = TipComments(
        tip_id = 23,
        user_id = 5,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_110 = TipComments(
        tip_id = 23,
        user_id = 4,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_111 = TipComments(
        tip_id = 27,
        user_id = 4,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_112 = TipComments(
        tip_id = 9,
        user_id = 2,
        body = "I'm intrigued... Are these survival tips from personal experience",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_113 = TipComments(
        tip_id = 34,
        user_id = 18,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_114 = TipComments(
        tip_id = 34,
        user_id = 18,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_115 = TipComments(
        tip_id = 38,
        user_id = 17,
        body = "Nailed it! These are the tricks of the survival trade!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_116 = TipComments(
        tip_id = 38,
        user_id = 36,
        body = "Nailed it! These are the tricks of the survival trade!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_117 = TipComments(
        tip_id = 38,
        user_id = 38,
        body = "Nailed it! These are the tricks of the survival trade!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_118 = TipComments(
        tip_id = 18,
        user_id = 41,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_119 = TipComments(
        tip_id = 24,
        user_id = 42,
        body = "Survival tips to clutter my brain. Great.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_120 = TipComments(
        tip_id = 22,
        user_id = 32,
        body = "Survival tips to clutter my brain. Great.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_121 = TipComments(
        tip_id = 26,
        user_id = 37,
        body = "Survival tips to clutter my brain. Great.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_122 = TipComments(
        tip_id = 22,
        user_id = 32,
        body = "Nailed it! These are the tricks of the survival trade!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_123 = TipComments(
        tip_id = 24,
        user_id = 30,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_124 = TipComments(
        tip_id = 23,
        user_id = 17,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_125 = TipComments(
        tip_id = 21,
        user_id = 32,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_126 = TipComments(
        tip_id = 21,
        user_id = 38,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_127 = TipComments(
        tip_id = 23,
        user_id = 28,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_128 = TipComments(
        tip_id = 29,
        user_id = 34,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_129 = TipComments(
        tip_id = 22,
        user_id = 12,
        body = "Thanks for the tip!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_130 = TipComments(
        tip_id = 34,
        user_id = 45,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_131 = TipComments(
        tip_id = 27,
        user_id = 32,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_132 = TipComments(
        tip_id = 23,
        user_id = 7,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_133 = TipComments(
        tip_id = 22,
        user_id = 7,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_134 = TipComments(
        tip_id = 26,
        user_id = 3,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_135 = TipComments(
        tip_id = 22,
        user_id = 15,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_136 = TipComments(
        tip_id = 24,
        user_id = 20,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_138 = TipComments(
        tip_id = 23,
        user_id = 32,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_139 = TipComments(
        tip_id = 21,
        user_id = 14,
        body = "Not sure how practical these are for me, but thanks.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_140 = TipComments(
        tip_id = 21,
        user_id = 15,
        body = "Survival tips to clutter my brain. Great.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_141 = TipComments(
        tip_id = 66,
        user_id = 13,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_142 = TipComments(
        tip_id = 64,
        user_id = 10,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_143 = TipComments(
        tip_id = 64,
        user_id = 32,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_144 = TipComments(
        tip_id = 63,
        user_id = 42,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_145 = TipComments(
        tip_id = 66,
        user_id = 42,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_146 = TipComments(
        tip_id = 23,
        user_id = 1,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_147 = TipComments(
        tip_id = 61,
        user_id = 12,
        body = "Nice tip! Appreciate it!",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_148 = TipComments(
        tip_id = 61,
        user_id = 32,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_149 = TipComments(
        tip_id = 63,
        user_id = 42,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_150 = TipComments(
        tip_id = 66,
        user_id = 42,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_137 = TipComments(
        tip_id = 20,
        user_id = 1,
        body = "Interesting advice. Hope I never have to use it.",
        date_created = datetime(2023, 8, 8),
    )
    tip_comment_151 = TipComments(
        tip_id = 20,
        user_id = 12,
        body = "Really thankful there are people like you out there making tips like this for us to follow!",
        date_created = datetime(2023, 8, 8),
    )

    story_comment_1 = StoryComments (
        story_id = 1,
        user_id = 1,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_2 = StoryComments (
        story_id = 1,
        user_id = 1,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_3 = StoryComments (
        story_id = 2,
        user_id = 2,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_4 = StoryComments (
        story_id = 3,
        user_id = 3,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_5 = StoryComments (
        story_id = 4,
        user_id = 3,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    ) 
    story_comment_6 = StoryComments (
        story_id = 5,
        user_id = 3,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_7 = StoryComments (
        story_id = 6,
        user_id = 3,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_8 = StoryComments (
        story_id = 7,
        user_id = 4,
        date_created = datetime(2023, 8, 8),
        body = "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation."
    )
    story_comment_9 = StoryComments (
        story_id = 8,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Dang"
    )
    story_comment_10 = StoryComments (
        story_id = 9,
        user_id = 6,
        date_created = datetime(2023, 8, 8),
        body = "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation."
    )
    story_comment_11 = StoryComments (
        story_id = 10,
        user_id = 7,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_12 = StoryComments (
        story_id = 11,
        user_id = 8,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_13 = StoryComments (
        story_id = 12,
        user_id = 8,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_14 = StoryComments (
        story_id = 13,
        user_id = 8,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_15 = StoryComments (
        story_id = 14,
        user_id = 9,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_16 = StoryComments (
        story_id = 15,
        user_id = 10,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_17 = StoryComments (
        story_id = 16,
        user_id = 11,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_18 = StoryComments (
        story_id = 17,
        user_id = 12,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_19 = StoryComments (
        story_id = 18,
        user_id = 13,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_20 = StoryComments (
        story_id = 19,
        user_id = 14,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    story_comment_21 = StoryComments (
        story_id = 20,
        user_id = 14,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_22 = StoryComments (
        story_id = 21,
        user_id = 15,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_23 = StoryComments (
        story_id = 22,
        user_id = 16,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_24 = StoryComments (
        story_id = 23,
        user_id = 16,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing your story so we can all be more informed!"
    )
    story_comment_25 = StoryComments (
        story_id = 24,
        user_id = 16,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_26 = StoryComments (
        story_id = 25,
        user_id = 16,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_27 = StoryComments (
        story_id = 26,
        user_id = 17,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_28 = StoryComments (
        story_id = 27,
        user_id = 18,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_29 = StoryComments (
        story_id = 28,
        user_id = 19,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_30 = StoryComments (
        story_id = 29,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_31 = StoryComments (
        story_id = 30,
        user_id = 21,
        date_created = datetime(2023, 8, 8),
        body = "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay"
    )
    story_comment_32 = StoryComments(
        story_id = 31,
        user_id = 22,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_33 = StoryComments (
        story_id = 32,
        user_id = 23,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    ) 
    story_comment_34 = StoryComments (
        story_id = 33,
        user_id = 24,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_35 = StoryComments (
        story_id = 34,
        user_id = 25,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_36 = StoryComments (
        story_id = 35,
        user_id = 26,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_37 = StoryComments (
        story_id = 36,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_38 = StoryComments (
        story_id = 37,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_39 = StoryComments (
        story_id = 38,
        user_id = 28,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_40 = StoryComments (
        story_id = 39,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_41 = StoryComments (
        story_id = 40,
        user_id = 30,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_42 = StoryComments (
        story_id = 41,
        user_id = 31,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_43 = StoryComments (
        story_id = 42,
        user_id = 32,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_44 = StoryComments (
        story_id = 43,
        user_id = 33,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_45 = StoryComments (
        story_id = 44,
        user_id = 34,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    ) 
    story_comment_46 = StoryComments (
        story_id = 45,
        user_id = 35,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_47 = StoryComments (
        story_id = 46,
        user_id = 36,
        date_created = datetime(2023, 8, 8),
        body = "Just another normal day of bad weather..."
    )
    story_comment_48 = StoryComments (
        story_id = 47,
        user_id = 36,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_49 = StoryComments (
        story_id = 48,
        user_id = 37,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_50 = StoryComments (
        story_id = 49,
        user_id = 38,
        date_created = datetime(2023, 8, 8),
        body = "Wow, Mother Nature isn't happy with us..."
    )
    story_comment_51 = StoryComments (
        story_id = 50,
        user_id = 38,
        date_created = datetime(2023, 8, 8),
        body = "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!"
    )
    story_comment_52 = StoryComments (
        story_id = 51,
        user_id = 38,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_53 = StoryComments (
        story_id = 52,
        user_id = 39,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_54 = StoryComments (
        story_id = 53,
        user_id = 40,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_55 = StoryComments (
        story_id = 54,
        user_id = 41,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_56 = StoryComments (
        story_id = 55,
        user_id = 42,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_57 = StoryComments (
        story_id = 56,
        user_id = 43,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_58 = StoryComments (
        story_id = 57,
        user_id = 44,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    ) 
    story_comment_59 = StoryComments (
        story_id = 58,
        user_id = 45,
        date_created = datetime(2023, 8, 8),
        body = "Wow, that's insane. I never knew this was a thing..."
    )
    story_comment_60 = StoryComments (
        story_id = 59,
        user_id = 45,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_61 = StoryComments (
        story_id = 60,
        user_id = 46,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_62 = StoryComments (
        story_id = 61,
        user_id = 47,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_63 = StoryComments (
        story_id = 62,
        user_id = 48,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_64 = StoryComments (
        story_id = 63,
        user_id = 49,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_65 = StoryComments (
        story_id = 64,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!"
    )
    story_comment_66 = StoryComments (
        story_id = 33,
        user_id = 24,
        date_created = datetime(2023, 8, 8),
        body = "This is a story that everyone should read."
    )
    story_comment_67 = StoryComments (
        story_id = 33,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Wow, you learn something new everyday."
    )
    story_comment_68 = StoryComments (
        story_id = 4,
        user_id = 23,
        date_created = datetime(2023, 8, 8),
        body = "And this is why I don't wanna go outside everyone."
    )
    story_comment_69 = StoryComments (
        story_id = 7,
        user_id = 25,
        date_created = datetime(2023, 8, 8),
        body = "Does anyone remember when the weather started being so terrible? Anyone remember the good 'ol days when we would all just complain about it being too hot or there being too much rain?"
    )
    story_comment_70 = StoryComments (
        story_id = 23,
        user_id = 3,
        date_created = datetime(2023, 8, 8),
        body = "I love how descriptive you were in your story. Keep on writing!"
    )
    story_comment_71 = StoryComments (
        story_id = 22,
        user_id = 40,
        date_created = datetime(2023, 8, 8),
        body = "Gosh nature is something else these days.."
    )
    story_comment_72 = StoryComments (
        story_id = 41,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Sending prayers and love your way. Stay safe"
    )
    story_comment_73 = StoryComments (
        story_id = 25,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Yeah our world is going downhill fast..."
    )
    story_comment_74 = StoryComments (
        story_id = 29,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "I'm soo thankful you shared this story. More people need to know about this."
    )
    story_comment_75 = StoryComments (
        story_id = 30,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "What the person above me said! Yeah so many peopl would be better off if they knew the story you were sharing!"
    )
    story_comment_76 = StoryComments (
        story_id = 32,
        user_id = 49,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    )
    story_comment_77 = StoryComments (
        story_id = 32,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Bro, do you really think feeling safe but being ignorant is going to help? These people are going to be in a lot of trouble if they were to suddenly encounter these situations. At least letting them know gives them a heads up"
    )
    story_comment_78 = StoryComments (
        story_id = 32,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Yeah I agree, better to know more than less."
    )
    story_comment_79 = StoryComments (
        story_id = 32,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_80 = StoryComments (
        story_id = 65,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_81 = StoryComments (
        story_id = 12,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "It was an okay story.."
    )
    story_comment_82 = StoryComments (
        story_id = 14,
        user_id = 4,
        date_created = datetime(2023, 8, 8),
        body = "Wow, who would have thought..."
    )
    story_comment_83 = StoryComments (
        story_id = 16,
        user_id = 40,
        date_created = datetime(2023, 8, 8),
        body = "First time on this site and wow these stories are insane. Keep writing ya'll!"
    )
    story_comment_84 = StoryComments (
        story_id = 14,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Sending prayers and love your way. Stay safe"
    )
    story_comment_85 = StoryComments (
        story_id = 18,
        user_id = 2,
        date_created = datetime(2023, 8, 8),
        body = "The world is a little less dark because of all of you..."
    )
    story_comment_86 = StoryComments (
        story_id = 16,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "I'm soo thankful you shared this story. More people need to know about this."
    )
    story_comment_87 = StoryComments (
        story_id = 54,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    )
    story_comment_88 = StoryComments (
        story_id = 62,
        user_id = 49,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    )
    story_comment_89 = StoryComments (
        story_id = 62,
        user_id = 30,
        date_created = datetime(2023, 8, 8),
        body = "This is going to be crazy..."
    )
    story_comment_90 = StoryComments (
        story_id = 4,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Wow who wouldn've thought that would've been there."
    )
    story_comment_91 = StoryComments (
        story_id = 13,
        user_id = 7,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_92 = StoryComments (
        story_id = 8,
        user_id = 8,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_93 = StoryComments (
        story_id = 8,
        user_id = 25,
        date_created = datetime(2023, 8, 8),
        body = "I'm soo thankful you shared this story. More people need to know about this."
    )
    story_comment_94 = StoryComments (
        story_id = 8,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    )
    story_comment_95 = StoryComments (
        story_id = 62,
        user_id = 9,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    )
    story_comment_96 = StoryComments (
        story_id = 10,
        user_id = 15,
        date_created = datetime(2023, 8, 8),
        body = "Sheesh good luck to whoever decides to live there..."
    )
    story_comment_97 = StoryComments (
        story_id = 34,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Yeah I agree, better to know more than less."
    )
    story_comment_98 = StoryComments (
        story_id = 34,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_99 = StoryComments (
        story_id = 37,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_100 = StoryComments (
        story_id = 37,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_101 = StoryComments (
        story_id = 39,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_102 = StoryComments (
        story_id = 41,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Yeah I agree, better to know more than less."
    )
    story_comment_103 = StoryComments (
        story_id = 36,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_104 = StoryComments (
        story_id = 43,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_105 = StoryComments (
        story_id = 43,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "I'm soo thankful you shared this story. More people need to know about this."
    )
    story_comment_106 = StoryComments (
        story_id = 41,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    )
    story_comment_107 = StoryComments (
        story_id = 44,
        user_id = 49,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    )
    story_comment_108 = StoryComments (
        story_id = 46,
        user_id = 30,
        date_created = datetime(2023, 8, 8),
        body = "This is going to be crazy..."
    )
    story_comment_109 = StoryComments (
        story_id = 42,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Yeah I agree, better to know more than less."
    )
    story_comment_110 = StoryComments (
        story_id = 45,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_111 = StoryComments (
        story_id = 41,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_112 = StoryComments (
        story_id = 44,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_113 = StoryComments (
        story_id = 39,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_114 = StoryComments (
        story_id = 41,
        user_id = 5,
        date_created = datetime(2023, 8, 8),
        body = "Yeah I agree, better to know more than less."
    )
    story_comment_115 = StoryComments (
        story_id = 36,
        user_id = 27,
        date_created = datetime(2023, 8, 8),
        body = "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone"
    )
    story_comment_116 = StoryComments (
        story_id = 43,
        user_id = 29,
        date_created = datetime(2023, 8, 8),
        body = "Good read"
    )
    story_comment_117 = StoryComments (
        story_id = 43,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "I'm soo thankful you shared this story. More people need to know about this."
    )
    story_comment_118 = StoryComments (
        story_id = 41,
        user_id = 20,
        date_created = datetime(2023, 8, 8),
        body = "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!"
    )
    story_comment_119 = StoryComments (
        story_id = 44,
        user_id = 49,
        date_created = datetime(2023, 8, 8),
        body = "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more scared"
    )
    story_comment_120 = StoryComments (
        story_id = 58,
        user_id = 24,
        date_created = datetime(2023, 8, 8),
        body = "Wow that was eye opening..."
    )
    story_comment_121 = StoryComments (
        story_id = 42,
        user_id = 55,
        date_created = datetime(2023, 8, 8),
        body = "Sometimes I wish I didn't go on this site. I get more scared each time."
    )
    story_comment_122 = StoryComments (
        story_id = 51,
        user_id = 37,
        date_created = datetime(2023, 8, 8),
        body = "Well I've got my daily dose of the news for today"
    )
    story_comment_123 = StoryComments (
        story_id = 50,
        user_id = 17,
        date_created = datetime(2023, 8, 8),
        body = "Whoa, looking forward to whate you're going to write next"
    )
    story_comment_124= StoryComments (
        story_id = 44,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Interesting story"
    )
    story_comment_1 = StoryComments (
        story_id = 9,
        user_id = 50,
        date_created = datetime(2023, 8, 8),
        body = "Who would've thought that my home would become like this..."
    )
    story_comment_125 = StoryComments (
        story_id = 9,
        user_id = 11,
        date_created = datetime(2023, 8, 8),
        body = "Yeah, my family is out there as well..."
    )
    story_comment_126 = StoryComments (
        story_id = 65,
        user_id = 1,
        date_created = datetime(2023, 8, 8),
        body = "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather."
    )
    
    
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

    db.session.add_all([tip_comment_1, tip_comment_2, tip_comment_3, tip_comment_4, tip_comment_5, tip_comment_6, tip_comment_7, tip_comment_8, tip_comment_9, tip_comment_10, tip_comment_11, tip_comment_12, tip_comment_13, tip_comment_14, tip_comment_15, tip_comment_16, tip_comment_17, tip_comment_18, tip_comment_19, tip_comment_20, tip_comment_21, tip_comment_22, tip_comment_23, tip_comment_24, tip_comment_25, tip_comment_26, tip_comment_27, tip_comment_28, tip_comment_29, tip_comment_30, tip_comment_31, tip_comment_32, tip_comment_33, tip_comment_34, tip_comment_35, tip_comment_36, tip_comment_37, tip_comment_38, tip_comment_39, tip_comment_40, tip_comment_41, tip_comment_42, tip_comment_43, tip_comment_44, tip_comment_45, tip_comment_46, tip_comment_47, tip_comment_48, tip_comment_49, tip_comment_50, tip_comment_51, tip_comment_52, tip_comment_53, tip_comment_54, tip_comment_55, tip_comment_56, tip_comment_57, tip_comment_58, tip_comment_59, tip_comment_60, tip_comment_61, tip_comment_62, tip_comment_63, tip_comment_64, tip_comment_65, tip_comment_66, tip_comment_67, tip_comment_68, tip_comment_69, tip_comment_70, tip_comment_71, tip_comment_72, tip_comment_73, tip_comment_74, tip_comment_75, tip_comment_76, tip_comment_77, tip_comment_78, tip_comment_79, tip_comment_80, tip_comment_81, tip_comment_82, tip_comment_83, tip_comment_84, tip_comment_85, tip_comment_86, tip_comment_87, tip_comment_88, tip_comment_89, tip_comment_90, tip_comment_91, tip_comment_92, tip_comment_93, tip_comment_94, tip_comment_95, tip_comment_96, tip_comment_97, tip_comment_98, tip_comment_99, tip_comment_100, tip_comment_101, tip_comment_102, tip_comment_103, tip_comment_104, tip_comment_105, tip_comment_106, tip_comment_107, tip_comment_108, tip_comment_109, tip_comment_110, tip_comment_111, tip_comment_112, tip_comment_113, tip_comment_114, tip_comment_115, tip_comment_116, tip_comment_117, tip_comment_118, tip_comment_119, tip_comment_120, tip_comment_121, tip_comment_122, tip_comment_123, tip_comment_124, tip_comment_125, tip_comment_126, tip_comment_127, tip_comment_128, tip_comment_129, tip_comment_130, tip_comment_131, tip_comment_132, tip_comment_133, tip_comment_134, tip_comment_135, tip_comment_136, tip_comment_137, tip_comment_138, tip_comment_139, tip_comment_140, tip_comment_141, tip_comment_142, tip_comment_143, tip_comment_144, tip_comment_145, tip_comment_146, tip_comment_147, tip_comment_148, tip_comment_149, tip_comment_150, tip_comment_151])

    db.session.add_all([story_comment_1, story_comment_2, story_comment_3, story_comment_4, story_comment_5, story_comment_6, story_comment_7, story_comment_8, story_comment_9, story_comment_10, story_comment_11, story_comment_12, story_comment_13, story_comment_14, story_comment_15, story_comment_16, story_comment_17, story_comment_18, story_comment_19, story_comment_20, story_comment_21, story_comment_22, story_comment_23, story_comment_24, story_comment_25, story_comment_26, story_comment_27, story_comment_28, story_comment_29, story_comment_30, story_comment_31, story_comment_32, story_comment_33, story_comment_34, story_comment_35, story_comment_36, story_comment_37, story_comment_38, story_comment_39, story_comment_40, story_comment_41, story_comment_42, story_comment_43, story_comment_44, story_comment_45, story_comment_46, story_comment_47, story_comment_48, story_comment_49, story_comment_50, story_comment_51, story_comment_52, story_comment_53, story_comment_54, story_comment_55, story_comment_56, story_comment_57, story_comment_58, story_comment_59, story_comment_60, story_comment_61, story_comment_62, story_comment_63, story_comment_64, story_comment_65, story_comment_66, story_comment_67, story_comment_68, story_comment_69, story_comment_70, story_comment_71, story_comment_72, story_comment_73, story_comment_74, story_comment_75, story_comment_76, story_comment_77, story_comment_78, story_comment_79, story_comment_80, story_comment_81, story_comment_82, story_comment_83, story_comment_84, story_comment_85, story_comment_86, story_comment_87, story_comment_88, story_comment_89, story_comment_90, story_comment_91, story_comment_92, story_comment_93, story_comment_94, story_comment_95, story_comment_96, story_comment_97, story_comment_98, story_comment_99, story_comment_100, story_comment_101, story_comment_102, story_comment_103, story_comment_104, story_comment_105, story_comment_106, story_comment_107, story_comment_108, story_comment_109, story_comment_110, story_comment_111, story_comment_112, story_comment_113, story_comment_114, story_comment_115, story_comment_116, story_comment_117, story_comment_118, story_comment_119, story_comment_120, story_comment_121, story_comment_122, story_comment_123, story_comment_124, story_comment_125, story_comment_126])

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