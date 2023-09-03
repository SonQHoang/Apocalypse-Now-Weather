from app.models import db, User, Tips, TipComments, StoryComments, Stories, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo= User(
            first_name= "Demo",
            last_name= "AA",
            username='Demo',
            location="Cape Tribulation, Australia",
            latitude=-16.03064400000,
            longitude=145.4378118901539,
            email='demo@aa.io',
            prepper_type="Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "Generic User",
            password='password'
        )

    marnie= User(
            first_name= "Marnie",
            last_name= "AA",
            username='Marnie',
            location="Perth, Australia",
            email='marnie@aa.io',
            prepper_type="Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "Generic User",
            password='password')

    bobbie= User(
            first_name= "Bobbie",
            last_name= "AA",
            username='Bobbie',
            location="Perth, Australia",
            email='bobbie@aa.io',
            prepper_type="Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "Generic User",
            password='password')

    user4= User(
            first_name= "John",
            last_name= "Smith",
            username= "TestUser1",
            location= "Perth, Australia",
            email= "John.Smith@awn.com",
            prepper_type= "Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "An avid hiker and outdoor enthusiast, John loves exploring nature trails and documenting his experiences through photography.",
            password= "password"
        )
    user5= User(
            first_name= "Emily",
            last_name= "Johnson",
            username= "TestUser2",
            location= "Perth, Australia",
            email= "Emily.Johnson@awn.com",
            prepper_type= "EMP (Electomagiec Pulse) / Solar Flare",
            prepper_description= "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
            bio= "With a passion for art and creativity, Emily is a freelance graphic designer who enjoys combining her artistic flair with innovative digital designs.",
            password= "password"
        )
    user6= User(
            first_name= "Michael",
            last_name= "Williams",
            username= "TestUser3",
            location= "Perth, Australia",
            email= "Michael.Williams@awn.com",
            prepper_type= "Economic Collapse",
            prepper_description= "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
            bio= "A tech-savvy problem solver, Michael is a software engineer who thrives on finding elegant solutions to complex coding challenges.",
            password= "password"
        )
    user7= User(

            first_name= "Jessica",
            last_name= "Brown",
            username= "TestUser4",
            location= "Perth, Australia",
            email= "Jessica.Brown@awn.com",
            prepper_type= "Pandemic",
            prepper_description= "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
            bio= "A nutritionist and fitness advocate, Jessica empowers others to embrace healthy lifestyles and make positive dietary changes.",
            password= "password"
        )
    user8= User(

            first_name= "Daniel",
            last_name= "Jones",
            username= "TestUser5",
            location= "Perth, Australia",
            email= "Daniel.Jones@awn.com",
            prepper_type= "Natural Disaster",
            prepper_description= "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
            bio= "A travel blogger and adventurer, Daniel's passion for exploring remote destinations has led him to share captivating stories from around the world.",
            password= "password"
        )
    user9= User(
            first_name= "Sarah",
            last_name= "Davis",
            username= "TestUser6",
            location= "Perth, Australia",
            email= "Sarah.Davis@awn.com",
            prepper_type= "Biological / Chemical Attack",
            prepper_description= "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
            bio= "As an environmental activist, Sarah is dedicated to raising awareness about sustainable living and promoting eco-friendly practices.",
            password= "password"
        )
    user10= User(
            first_name= "David",
            last_name= "Martinez",
            username= "TestUser7",
            location= "Perth, Australia",
            email= "David.Martinez@awn.com",
            prepper_type= "Cyber-Attack",
            prepper_description= "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
            bio= "An amateur astronomer, David spends his evenings stargazing and capturing celestial wonders through his telescope and camera.",
            password= "password"
        )
    user11= User(

            first_name= "Maria",
            last_name= "Rodriguez",
            username= "TestUser8",
            location= "Perth, Australia",
            email= "Maria.Rodriguez@awn.com",
            prepper_type= "Civil Unrest / Martial Law",
            prepper_description= "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
            bio= "A culinary enthusiast and food blogger, Maria transforms traditional recipes into modern culinary delights while sharing her culinary journey.",
            password= "password"
        )
    user12= User(
            first_name= "James",
            last_name= "Miller",
            username= "TestUser9",
            location= "Perth, Australia",
            email= "James.Miller@awn.com",
            prepper_type= "Ecological / Environmental",
            prepper_description= "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
            bio= "With a background in finance and investing, James is a financial advisor helping individuals secure their financial futures through strategic planning.",
            password= "password"
        )
    user13= User(
            first_name= "Jennifer",
            last_name= "Garcia",
            username= "TestUser10",
            location= "Perth, Australia",
            email= "Jennifer.Garcia@awn.com",
            prepper_type= "Peak Oil / Resource Depletion",
            prepper_description= "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
            bio= "A children's book author and educator, Jennifer's creative stories inspire young minds and foster a love for reading and learning.",
            password= "password"
        )
    user14= User(
            first_name= "Christopher",
            last_name= "Wilson",
            username= "TestUser11",
            location= "Perth, Australia",
            email= "Christopher.Wilson@awn.com",
            prepper_type= "Alien Invasion",
            prepper_description= "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
            bio= "An urban planner and community advocate, Christopher is dedicated to creating vibrant neighborhoods that enhance quality of life.",
            password= "password"
        )
    user15= User(
            first_name= "Lisa",
            last_name= "Anderson",
            username= "TestUser12",
            location= "Perth, Australia",
            email= "Lisa.Anderson@awn.com",
            prepper_type= "Zombie Apocalypse",
            prepper_description= "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
            bio= "A veterinarian and animal lover, Lisa provides compassionate care for pets and educates pet owners on responsible pet ownership.",
            password= "password"
        )
    user16= User(
            first_name= "Brian",
            last_name= "Taylor",
            username= "TestUser13",
            location= "Perth, Australia",
            email= "Brian.Taylor@awn.com",
            prepper_type= "Generalist",
            prepper_description= "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
            bio= "Brian is a passionate musician and music teacher who believes in the power of music to uplift spirits and bring communities together.",
            password= "password"
        )
    user17= User(
            first_name= "Karen",
            last_name= "Thomas",
            username= "TestUser14",
            location= "Perth, Australia",
            email= "Karen.Thomas@awn.com",
            prepper_type= "Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "As a social worker, Karen is committed to supporting vulnerable populations and providing resources to improve their well-being.",
            password= "password"
        )
    user18= User(
        first_name= "Matthew",
        last_name= "Jackson",
        username= "TestUser15",
        location= "Perth, Australia",
        email= "Matthew.Jackson@awn.com",
        prepper_type= "EMP (Electromagnetic Pulse) / Solar Flare",
        prepper_description= "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
        bio= "A science communicator, Matthew engages audiences with the wonders of the natural world through educational videos and talks.",
        password= "password"
        )
    user19= User(
        first_name= "Laura",
        last_name= "White",
        username= "TestUser16",
        location= "Perth, Australia",
        email= "Laura.White@awn.com",
        prepper_type= "Economic Collapse",
        prepper_description= "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
        bio= "Laura is an interior designer who transforms living spaces into functional and beautiful environments that reflect her clients' personalities.",
        password= "password"
        )
    user20= User(
        first_name= "Robert",
        last_name= "Harris",
        username= "TestUser17",
        location= "Perth, Australia",
        email= "Robert.Harris@awn.com",
        prepper_type= "Pandemic",
        prepper_description= "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
        bio= "An investigative journalist, Robert uncovers hidden truths and sheds light on important issues that shape society.",
        password= "password"
        )
    user21= User(
        first_name= "Elizabeth",
        last_name= "Martinez",
        username= "TestUser18",
        location= "Perth, Australia",
        email= "Elizabeth.Martinez@awn.com",
        prepper_type= "Natural Disaster",
        prepper_description= "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
        bio= "A public health advocate, Elizabeth works to improve community well-being through health education and policy initiatives.",
        password= "password"
        )
    user22= User(
        first_name= "William",
        last_name= "Lewis",
        username= "TestUser19",
        location= "Perth, Australia",
        email= "William.Lewis@awn.com",
        prepper_type= "Biological / Chemical Attack",
        prepper_description= "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
        bio= "With a background in architecture, William designs sustainable buildings that harmonize with the environment and serve their occupants.",
        password= "password"
        )
    user23= User(
        first_name= "Mary",
        last_name= "Walker",
        username= "TestUser333",
        location= "Perth, Australia",
        email= "Mary.Walker@awn.com",
        prepper_type= "Cyber-Attack",
        prepper_description= "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
        bio= "Mary is a dedicated elementary school teacher who fosters a love of learning and empowers young minds to explore their potential.",
        password= "password"
        )
    user24= User(
        first_name= "Kevin",
        last_name= "Allen",
        username= "TestUser20",
        location= "Perth, Australia",
        email= "Kevin.Allen@awn.com",
        prepper_type= "Civil Unrest / Martial Law",
        prepper_description= "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
        bio= "A technology entrepreneur, Kevin develops innovative apps that simplify everyday tasks and enhance digital experiences.",
        password= "password"
        )
    user25= User(
        first_name= "Patricia",
        last_name= "Young",
        username= "TestUser21",
        location= "Perth, Australia",
        email= "Patricia.Young@awn.com",
        prepper_type= "Ecological / Environmental",
        prepper_description= "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
        bio= "Patricia is a yoga instructor who guides students on a journey of mindfulness, wellness, and self-discovery through yoga practice.",
        password= "password"
        )
    user26= User(
            first_name= "Richard",
            last_name= "Lewis",
            username= "TestUser22",
            location= "Perth, Australia",
            email= "Richard.Lewis@awn.com",
            prepper_type= "Peak Oil / Resource Depletion",
            prepper_description= "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
            bio= "Richard is a historian specializing in local history, unearthing forgotten stories that enrich our understanding of the past.",
            password= "password"
        )
    user27= User(
            first_name= "Cynthia",
            last_name= "Perez",
            username= "TestUser23",
            location= "Perth, Australia",
            email= "Cynthia.Perez@awn.com",
            prepper_type= "Alien Invasion",
            prepper_description= "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
            bio= "A botanical artist, Cynthia creates intricate illustrations that capture the beauty and diversity of plant life in exquisite detail.",
            password= "password"
        )
    user28= User(
            first_name= "Joseph",
            last_name= "Turner",
            username= "TestUser24",
            location= "Perth, Australia",
            email= "Joseph.Turner@awn.com",
            prepper_type= "Zombie Apocalypse",
            prepper_description= "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
            bio= "With a background in psychology, Joseph is a life coach who empowers individuals to overcome challenges and achieve personal growth.",
            password= "password"
        )
    user29= User(
            first_name= "Nancy",
            last_name= "Baker",
            username= "TestUser25",
            location= "Perth, Australia",
            email= "Nancy.Baker@awn.com",
            prepper_type= "Generalist",
            prepper_description= "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
            bio= "An astronomy educator, Nancy ignites curiosity about the cosmos through interactive workshops and telescope observing sessions.",
            password= "password"
        )
    user30= User(
            first_name= "Jason",
            last_name= "King",
            username= "TestUser26",
            location= "Perth, Australia",
            email= "Jason.King@awn.com",
            prepper_type= "Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "A sports journalist, Jason covers major sporting events, sharing athletes' stories and capturing the excitement of the games.",
            password= "password"
    )
    user31= User(
            first_name= "Karen",
            last_name= "Adams",
            username= "TestUser27",
            location= "Perth, Australia",
            email= "Karen.Adams@awn.com",
            prepper_type= "EMP (Electromagnetic Pulse) / Solar Flare",
            prepper_description= "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
            bio= "Karen is a marine biologist committed to marine conservation, conducting research and advocating for the protection of ocean ecosystems.",
            password= "password"
        )
    user32= User(
            first_name= "Daniel",
            last_name= "Wright",
            username= "TestUser28",
            location= "Perth, Australia",
            email= "Daniel.Wright@awn.com",
            prepper_type= "Economic Collapse",
            prepper_description= "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
            bio= "Daniel is a sustainable farmer who cultivates organic produce and educates communities about the benefits of locally sourced food.",
            password= "password"
        )
    user33= User(
            first_name= "Jennifer",
            last_name= "Mitchell",
            username= "TestUser29",
            location= "Perth, Australia",
            email= "Jennifer.Mitchell@awn.com",
            prepper_type= "Pandemic",
            prepper_description= "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
            bio= "A life enthusiast and motivational speaker, Jennifer empowers people to embrace positivity and live their lives to the fullest.",
            password= "password"
        )
    user34= User(
            first_name= "Steve",
            last_name= "Robinson",
            username= "TestUser30",
            location= "Perth, Australia",
            email= "Steve.Robinson@awn.com",
            prepper_type= "Natural Disaster",
            prepper_description= "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
            bio= "A tech entrepreneur, Steve develops cutting-edge applications that shape the digital landscape and improve users' daily experiences.",
            password= "password"
        )
    user35= User(

            first_name= "Laura",
            last_name= "Phillips",
            username= "TestUser3252",
            location= "Perth, Australia",
            email= "Laura.Phillips@awn.com",
            prepper_type= "Biological / Chemical Attack",
            prepper_description= "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
            bio= "Laura is a botanist specializing in rare plant species, working to preserve biodiversity and restore ecosystems in endangered areas.",
            password= "password"
        )
    user36= User(

            first_name= "Charles",
            last_name= "Wood",
            username= "TestUser31",
            location= "Perth, Australia",
            email= "Charles.Wood@awn.com",
            prepper_type= "Cyber-Attack",
            prepper_description= "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet.",
            bio= "An antique collector and historian, Charles unearths artifacts that offer glimpses into the past and shed light on historical eras.",
            password= "password"
        )
    user37= User(

            first_name= "Jessica",
            last_name= "Green",
            username= "TestUser32",
            location= "Perth, Australia",
            email= "Jessica.Green@awn.com",
            prepper_type= "Civil Unrest / Martial Law",
            prepper_description= "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
            bio= "A wildlife rehabilitator, Jessica dedicates her time to caring for injured animals and releasing them back into their natural habitats.",
            password= "password"
        )
    user38= User(

            first_name= "Donald",
            last_name= "Nelson",
            username= "TestUser33",
            location= "Perth, Australia",
            email= "Donald.Nelson@awn.com",
            prepper_type= "Ecological / Environmental",
            prepper_description= "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
            bio= "Donald is a sustainable architect who designs eco-friendly structures that merge seamlessly with the environment and reduce carbon footprint.",
            password= "password"
        )
    user39= User(
            first_name= "Michelle",
            last_name= "Hall",
            username= "TestUser34",
            location= "Perth, Australia",
            email= "Michelle.Hall@awn.com",
            prepper_type= "Peak Oil / Resource Depletion",
            prepper_description= "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
            bio= "As a community organizer, Michelle rallies people together to address local issues and create positive change within their neighborhoods.",
            password= "password"
        )
    user40= User(

            first_name= "Brian",
            last_name= "Rivera",
            username= "TestUser35",
            location= "Perth, Australia",
            email= "Brian.Rivera@awn.com",
            prepper_type= "Alien Invasion",
            prepper_description= "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
            bio= "Brian is a space enthusiast who shares his passion for astronomy through public talks and observatory events that inspire wonder in the cosmos.",
            password= "password"
        )
    user41= User(

            first_name= "Angela",
            last_name= "Torres",
            username= "TestUser36",
            location= "Perth, Australia",
            email= "Angela.Torres@awn.com",
            prepper_type= "Zombie Apocalypse",
            prepper_description= "Inspired more by pop culture than a perceived real threat, these preppers plan for a world overrun by the undead or some form of societal collapse where humans turn on each other en masse.",
            bio= "Angela is a humanitarian photographer capturing compelling images that shed light on global issues and amplify the voices of marginalized communities.",
            password= "password"
        )
    user42= User(

            first_name= "Ronald",
            last_name= "Collins",
            username= "TestUser37",
            location= "Perth, Australia",
            email= "Ronald.Collins@awn.com",
            prepper_type= "Generalist",
            prepper_description= "Not focusing on one specific threat, these preppers believe in being ready for a wide range of scenarios. Their preps are often more broad-based, encompassing elements from several of the above categories.",
            bio= "Ronald is a disaster relief volunteer who swiftly responds to emergencies, providing aid and support to affected communities in times of crisis.",
            password= "password"
        )
    user43= User(

            first_name= "Kimberly",
            last_name= "Howard",
            username= "TestUser38",
            location= "Perth, Australia",
            email= "Kimberly.Howard@awn.com",
            prepper_type= "Nuclear",
            prepper_description= "These individuals prepare for nuclear war or a nuclear accident. Their preps often include underground bunkers, Geiger counters, potassium iodide pills, and measures to shield against radioactive fallout.",
            bio= "A paleontologist and fossil researcher, Kimberly unlocks the mysteries of prehistoric life by studying ancient remailns and reconstructing past ecosystems.",
            password= "password"
        )
    user44= User(

            first_name= "Amanda",
            last_name= "Clark",
            username= "TestUser39",
            location= "Perth, Australia",
            email= "Amanda.Clark@awn.com",
            prepper_type= "EMP (Electomagiec Pulse) / Solar Flare",
            prepper_description= "They focus on the possibility of an EMP, either from a solar flare or as a weaponized attack. Their main concern is the loss of electrical devices and grid collapse. They often have Faraday cages to protect essential electronics, solar panels, and manual tools.",
            bio= "Amanda is a wilderness guide leading outdoor adventures, connecting people with nature and encouraging them to explore the great outdoors.",
            password= "password"
        )
    user45= User(

            first_name= "Thomas",
            last_name= "Perez",
            username= "TestUser40",
            location= "Perth, Australia",
            email= "Thomas.Perez@awn.com",
            prepper_type= "Economic Collapse",
            prepper_description= "These preppers believe that economic systems might collapse, leading to hyperinflation, loss of savings, and widespread societal chaos. They invest in precious metals, barter items, and self-sufficiency tools.",
            bio= "Thomas is a master woodworker who crafts exquisite furniture pieces, infusing each creation with a touch of artistic flair and meticulous craftsmanship.",
            password= "password"
        )
    user46= User(

            first_name= "Peter",
            last_name= "Parker",
            username= "TestUser41",
            location= "Perth, Australia",
            email= "Peter.Parker@awn.com",
            prepper_type= "Pandemic",
            prepper_description= "Especially relevant after events like the COVID-19 pandemic, these individuals prepare for widespread disease outbreaks. They stock up on medical supplies, masks, sanitation items, and often have quarantine protocols.",
            bio= "A globetrotting travel writer, Peter chronicles his journeys to remote corners of the world, sharing captivating stories that inspire wanderlust in readers.",
            password= "password"
        )
    user47= User(

            first_name= "Tony",
            last_name= "Stark",
            username= "TestUser42",
            location= "Perth, Australia",
            email= "Tony.Stark@awn.com",
            prepper_type= "Natural Disaster",
            prepper_description= "Depending on their location, they may prepare for hurricanes, earthquakes, tsunamis, tornadoes, floods, etc. This includes securing homes, having emergency rations, water purification methods, and evacuation plans.",
            bio= "An innovative tech inventor, Tony develops groundbreaking gadgets that streamline daily tasks and enhance convenience in the modern world.",
            password= "password"
        )
    user48= User(

            first_name= "Amy",
            last_name= "Rodriguez",
            username= "TestUser43",
            location= "Perth, Australia",
            email= "Amy.Rodriguez@awn.com",
            prepper_type= "Biological / Chemical Attack",
            prepper_description= "These preppers focus on potential terrorist attacks using biological or chemical agents. They might have hazmat suits, gas masks, and specific antidotes or treatments for certain toxins.",
            bio= "Amy is a passionate environmentalist and wildlife researcher, dedicating her efforts to protecting endangered species and their habitats.",
            password= "password"
        )
    user49= User(

            first_name= "Samantha",
            last_name= "Young",
            username= "TestUser525",
            location= "Perth, Australia",
            email= "Samantha.Young@awn.com",
            prepper_type= "Cyber-Attack",
            prepper_description= "With the increasing dependence on technology, some preppers anticipate significant cyber-attacks that could cripple infrastructures. They prioritize cybersecurity, offline backups, and methods to function without internet",
            bio= "Samantha is a motivational speaker who empowers individuals to overcome challenges, offering practical tools for personal growth and transformation.",
            password= "password"
        )
    user50= User(

            first_name= "Jeffrey",
            last_name= "Adams",
            username= "TestUser44",
            location= "Perth, Australia",
            email= "Jeffrey.Adams@awn.com",
            prepper_type= "Civil Unrest / Martial Law",
            prepper_description= "They prepare for scenarios where societal structures break down due to political instability, civil war, or other factors. These preppers focus on security, off-grid living, and community-building.",
            bio= "With a green thumb and a heart for gardening, Jeffrey cultivates lush gardens that provide beauty, sustenance, and tranquility for all who visit.",
            password= "password"
        )
    user51= User(
            first_name= "Stephanie",
            last_name= "Carter",
            username= "TestUser45",
            location= "Perth, Australia",
            email= "Stephanie.Carter@awn.com",
            prepper_type= "Ecological / Environmental",
            prepper_description= "Concerned about scenarios such as drastic climate change, loss of biodiversity, or massive pollution events, these individuals might focus on sustainable living, permaculture, and relocating to less vulnerable areas.",
            bio= "Stephanie is a humanitarian aid worker who provides critical support to communities affected by disasters, ensuring their basic needs are met during challenging times.",
            password= "password"
        )
    user52= User(
            first_name= "Andrew",
            last_name= "Ward",
            username= "TestUser46",
            location= "Perth, Australia",
            email= "Andrew.Ward@awn.com",
            prepper_type= "Peak Oil / Resource Depletion",
            prepper_description= "They prepare for a world where key resources (like oil) become scarce, driving societal change. Their preparation often includes renewable energy sources and skills that don't rely on fossil fuels.",
            bio= "An aerospace engineer, Andrew designs cutting-edge aircraft systems that contribute to safer and more efficient air travel around the world.",
            password= "password"
        )
    user53= User(
            first_name= "Bruce",
            last_name= "Banner",
            username= "TestUser47",
            location= "Perth, Australia",
            email= "Bruce.Banner@awn.com",
            prepper_type= "Alien Invasion",
            prepper_description= "While much less common, some believe in the possibility of extraterrestrial threats. Their preparations might seem eclectic, ranging from creating community alliances to researching perceived alien technologies.",
            bio= "Bruce is a health and fitness coach who helps clients achieve their wellness goals, emphasizing the importance of physical activity and balanced nutrition.",
            password= "password"
        )

    tip1= Tips(
        user_id= 1,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip2= Tips(
        user_id= 1,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip3= Tips(
        user_id= 1,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip4= Tips(
        user_id= 2,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
        )
    tip5= Tips(
        user_id= 3,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
        )
    tip6= Tips(
        user_id= 3,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
        )
    tip7= Tips(
        user_id= 4,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
        )
    tip8= Tips(
        user_id= 4,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
        )
    tip9= Tips(
        user_id= 5,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip10= Tips(
        user_id= 5,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip11= Tips(
        user_id= 5,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip12= Tips(
        user_id= 6,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip13= Tips(
        user_id= 7,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip14= Tips(
        user_id= 8,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip15= Tips(
        user_id= 9,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip16= Tips(
        user_id= 10,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip17= Tips(

        user_id= 11,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip18= Tips(
        user_id= 12,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip19= Tips(
        user_id= 13,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip20= Tips(
        user_id= 14,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip21= Tips(
        user_id= 15,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip22= Tips(
        user_id= 16,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip23= Tips(
        user_id= 17,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip24= Tips(
        user_id= 17,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip25= Tips(
        user_id= 18,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip26= Tips(
        user_id= 18,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip27= Tips(
        user_id= 19,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip28= Tips(
        user_id= 19,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip29= Tips(
        user_id= 20,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip30= Tips(
        user_id= 20,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip31= Tips(

        user_id= 21,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip32= Tips(
        user_id= 22,
        weather_category= "Paranormal Chaos",
        title= "Yes, Rain Can be Cursed Now",
        body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
        date_created= datetime(2023, 8, 8)
            )
    tip33= Tips(
        user_id= 23,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip34= Tips(
        user_id= 24,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip35= Tips(
        user_id= 25,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip36= Tips(
        user_id= 26,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip37= Tips(
        user_id= 27,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip38= Tips(
        user_id= 28,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip39= Tips(
        user_id= 29,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip40= Tips(
        user_id= 30,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip41= Tips(
        user_id= 30,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip42= Tips(
        user_id= 31,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip43= Tips(
        user_id= 31,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip44= Tips(
        user_id= 32,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip45= Tips(
        user_id= 33,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip46= Tips(
        user_id= 34,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip47= Tips(

        user_id= 35,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip48= Tips(
        user_id= 36,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip49= Tips(
        user_id= 36,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip50= Tips(
        user_id= 37,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip51= Tips(
        user_id= 38,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip52= Tips(
        user_id= 39,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip53= Tips(
        user_id= 40,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip54= Tips(
        user_id= 41,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip55= Tips(
        user_id= 41,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip56= Tips(
        user_id= 42,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip57= Tips(
        user_id= 42,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip58= Tips(
        user_id= 43,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip59= Tips(
        user_id= 44,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip60= Tips(
        user_id= 45,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip61= Tips(
        user_id= 46,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip62= Tips(
        user_id= 47,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )
    tip63= Tips(
        user_id= 48,
            weather_category= "Mystical Elements",
            title= "It may look pretty, but stay awy from Bioluminescent Rain",
            body= "Navigating the surreal beauty of bioluminescent rain calls for careful preparation. Much like the otherworldly landscape described, approach with caution and take steps to safeguard yourself. While the spectacle is captivating, remember that the rain could contain unknown elements. When venturing outside, wear protective clothing, such as a raincoat and waterproof boots, to minimize skin contact. Use an umbrella or any form of cover to shield your face and body. If you encounter any body of water illuminated by the rain, avoid direct contact and opt for filtered or purified water sources. Prioritize keeping your essentials within reach and secured indoors, as bioluminescent conditions may disrupt technology. Most importantly, maintain situational awareness and heed your instincts—no matter the allure, personal safety should always take precedence.",
            date_created= datetime(2023, 8, 8)
            )
    tip64= Tips(
        user_id= 49,
            weather_category= "Paranormal Chaos",
            title= "Yes, Rain Can be Cursed Now",
            body= "Facing the ominous influence of cursed rain necessitates a cautious approach. As each drop appears tainted, prioritize protection above all. Utilize a sturdy umbrella or raincoat to create a barrier between yourself and the rain's potential effects. Seek shelter indoors if possible, as minimizing exposure is crucial. Should you find yourself outside, avoid contact with any surface touched by the rain, including soil, plants, and bodies of water. Cultivate a sense of preparedness by carrying essential items like bottled water, non-perishable food, and a first aid kit. To counter the feeling of misfortune, maintain a positive mindset and focus on maintaining your well-being. Remember, while the rain may bring adversity, your resilience and careful planning can help you weather its malevolent influence.",
            date_created= datetime(2023, 8, 8)
            )
    tip65= Tips(
        user_id= 50,
            weather_category= "Natural Disasters",
            title= "Surviving a Solar Flare",
            body= "In the event of a solar flare, it's crucial to stay informed about space weather forecasts through reliable sources like NOAA's Space Weather Prediction Center. Limiting the use of electronic devices can help mitigate potential disruptions caused by the intense radiation. Seek shelter indoors or in a hard-topped vehicle to reduce exposure. Having an emergency kit with essentials such as non-perishable food, water, flashlights, and a battery-powered radio is essential for self-sufficiency during disruptions. Additionally, remember to protect your eyes if observing related phenomena like the Northern Lights, and remain calm while following safety guidelines.",
            date_created= datetime(2023, 8, 8)
            )
    tip66= Tips(
        user_id= 50,
            weather_category= "Supernatural Phenomena",
            title= "Beware of the Aurora Plague",
            body= "In the face of the enigmatic Aurora Plague, prioritizing safety and understanding is paramount. Like those who have survived before keep a vigilant eye on changes in behavior and cognition, which could be early signs of infection. Stay informed by observing the celestial phenomenon's patterns and consulting experts to discern safe windows for exploration. Create a well-equipped survival kit with essentials like medical supplies, non-perishable food, and communication devices to maintain contact with fellow survivors. Establish a communication network to share findings and developments, fostering a sense of unity and cooperation. Above all, balance the desire for understanding with the necessity for self-preservation. Approach the ethereal auroras with caution, for within their beauty may hide the answers to this celestial conundrum and the key to survival.",
            date_created= datetime(2023, 8, 8)
            )

    tip_comment_1= TipComments(
        tip_id= 1,
        user_id= 1,
        body= "Survival is all about knowledge. Thanks for boosting mine!",
        date_created= datetime(2023, 8, 8),
        )
    tip_comment_2= TipComments(
        tip_id= 2,
        user_id= 2,
        body= "Thanks for sharing these survival gems. I'm taking notes!",
        date_created= datetime(2023, 8, 8),
        )
    tip_comment_3= TipComments(
        tip_id= 2,
        user_id= 3,
        body= "I'm intrigued... Are these survival tips from personal experience",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_4= TipComments(
        tip_id= 2,
        user_id= 4,
        body= "I'm intrigued... Are these survival tips from personal experience",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_5= TipComments(
        tip_id= 3,
        user_id= 5,
        body= "I'm intrigued... Are these survival tips from personal experience",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_6= TipComments(
        tip_id= 4,
        user_id= 6,
        body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_7= TipComments(
        tip_id= 5,
        user_id= 7,
        body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_8= TipComments(

        tip_id= 5,
        user_id= 8,
        body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_9= TipComments(

        tip_id= 6,
        user_id= 9,
        body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_10= TipComments(
        tip_id= 6,
        user_id= 10,
        body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_11= TipComments(
        tip_id= 7,
        user_id= 11,
        body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_12= TipComments(
        tip_id= 8,
        user_id= 12,
        body= "Really thankful there are people like you out there making tips like this for us to follow!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_13= TipComments(
        tip_id= 8,
        user_id= 13,
        body= "Really thankful there are people like you out there making tips like this for us to follow!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_14= TipComments(
        tip_id= 8,
        user_id= 14,
            body= "Really thankful there are people like you out there making tips like this for us to follow!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_15= TipComments(
        tip_id= 9,
        user_id= 15,
            body= "Really thankful there are people like you out there making tips like this for us to follow!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_16= TipComments(
        tip_id= 10,
        user_id= 16,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_17= TipComments(
        tip_id= 10,
        user_id= 17,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_18= TipComments(
        tip_id= 10,
        user_id= 18,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_19= TipComments(
        tip_id= 11,
        user_id= 19,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_20= TipComments(
        tip_id= 12,
        user_id= 20,
            body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_21= TipComments(
        tip_id= 12,
        user_id= 21,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_22= TipComments(
        tip_id= 13,
        user_id= 22,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_23= TipComments(
        tip_id= 14,
        user_id= 23,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_24= TipComments(
        tip_id= 15,
        user_id= 24,
            body= "Thanks for sharing these survival gems. I'm taking notes!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_25= TipComments(
        tip_id= 15,
        user_id= 25,
            body= "Thanks for sharing these survival gems. I'm taking notes!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_26= TipComments(
        tip_id= 16,
        user_id= 26,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_27= TipComments(
        tip_id= 17,
        user_id= 27,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_28= TipComments(
        tip_id= 18,
        user_id= 28,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_29= TipComments(
        tip_id= 19,
        user_id= 29,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_30= TipComments(
        tip_id= 20,
        user_id= 30,
            body= "Thanks for sharing these survival gems. I'm taking notes!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_31= TipComments(
        tip_id= 21,
        user_id= 31,
            body= "Thanks for sharing these survival gems. I'm taking notes!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_32= TipComments(
        tip_id= 22,
        user_id= 32,
            body= "Thanks for sharing these survival gems. I'm taking notes!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_33= TipComments(
        tip_id= 23,
        user_id= 33,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_34= TipComments(
        tip_id= 24,
        user_id= 34,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_35= TipComments(
        tip_id= 25,
        user_id= 35,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_36= TipComments(
        tip_id= 26,
        user_id= 36,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_37= TipComments(
        tip_id= 27,
        user_id= 37,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_38= TipComments(
        tip_id= 28,
        user_id= 38,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_39= TipComments(
        tip_id= 29,
        user_id= 39,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_40= TipComments(
        tip_id= 29,
        user_id= 40,
            body= "Survival is all about knowledge. Thanks for boosting mine!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_41= TipComments(
        tip_id= 30,
        user_id= 41,
            body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_42= TipComments(
        tip_id= 30,
        user_id= 42,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_43= TipComments(
        tip_id= 31,
        user_id= 43,
            body= "Because nothing says 'hopeless' like survival tactics.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_44= TipComments(
        tip_id= 31,
        user_id= 44,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_45= TipComments(
        tip_id= 32,
        user_id= 45,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_46= TipComments(
        tip_id= 33,
        user_id= 46,
            body= "Survival tips that make me question what I know about emergencies.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_47= TipComments(
        tip_id= 34,
        user_id= 47,
            body= "Because nothing says 'hopeless' like survival tactics.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_48= TipComments(
        tip_id= 35,
        user_id= 48,
            body= "Because nothing says 'hopeless' like survival tactics.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_49= TipComments(
        tip_id= 36,
        user_id= 49,
            body= "These survival tips serve as a reminder of the dangers out there.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_50= TipComments(
        tip_id= 36,
        user_id= 50,
            body= "These survival tips serve as a reminder of the dangers out there.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_51= TipComments(
        tip_id= 37,
        user_id= 2,
            body= "These survival tips serve as a reminder of the dangers out there.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_52= TipComments(
        tip_id= 38,
        user_id= 2,
            body= "Because nothing says 'hopeless' like survival tactics.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_53= TipComments(
        tip_id= 39,
        user_id= 4,
            body= "Sad to consider a world where these survival tips are necessary.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_54= TipComments(
        tip_id= 40,
        user_id= 3,
            body= "Sad to consider a world where these survival tips are necessary.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_55= TipComments(
        tip_id= 41,
        user_id= 17,
            body= "Because nothing says 'hopeless' like survival tactics.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_56= TipComments(
        tip_id= 42,
        user_id= 24,
            body= "Sad to consider a world where these survival tips are necessary.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_57= TipComments(
        tip_id= 42,
        user_id= 28,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_58= TipComments(
        tip_id= 43,
        user_id= 33,
            body= "I hope I never have to use these...",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_59= TipComments(
        tip_id= 43,
        user_id= 32,
            body= "You never know when it'll come in handy though!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_60= TipComments(
        tip_id= 44,
        user_id= 35,
            body= "I hope I never have to use these...",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_61= TipComments(
        tip_id= 45,
        user_id= 39,
            body= "Thanks for the tips, I'll still manage to mess it up.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_62= TipComments(
        tip_id= 46,
        user_id= 36,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_63= TipComments(
        tip_id= 47,
        user_id= 42,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_64= TipComments(
        tip_id= 48,
        user_id= 44,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_65= TipComments(
        tip_id= 49,
        user_id= 48,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_66= TipComments(
        tip_id= 50,
        user_id= 50,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_67= TipComments(
        tip_id= 50,
        user_id= 12,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_68= TipComments(
        tip_id= 51,
        user_id= 14,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_69= TipComments(
        tip_id= 52,
        user_id= 16,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_70= TipComments(
        tip_id= 53,
        user_id= 19,
            body= "As if I needed more reminders of how unprepared I am.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_71= TipComments(
        tip_id= 54,
        user_id= 22,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_72= TipComments(
        tip_id= 55,
        user_id= 24,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_73= TipComments(
        tip_id= 55,
        user_id= 4,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_74= TipComments(
        tip_id= 56,
        user_id= 2,
            body= "How many people wanna go out there and trip applying these tips right now?",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_75= TipComments(
        tip_id= 57,
        user_id= 18,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_76= TipComments(
        tip_id= 57,
        user_id= 20,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_77= TipComments(
        tip_id= 57,
        user_id= 25,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_78= TipComments(
        tip_id= 58,
        user_id= 26,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_79= TipComments(
        tip_id= 59,
        user_id= 26,
            body= "Survival for dummies, perfect.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_80= TipComments(
        tip_id= 60,
        user_id= 14,
            body= "Survival for dummies, perfect.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_81= TipComments(
        tip_id= 60,
        user_id= 10,
            body= "Survival for dummies, perfect.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_82= TipComments(
        tip_id= 61,
        user_id= 3,
            body= "Survival for dummies, perfect.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_83= TipComments(
        tip_id= 62,
        user_id= 10,
            body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_84= TipComments(
        tip_id= 63,
        user_id= 44,
            body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_85= TipComments(
        tip_id= 64,
        user_id= 48,
            body= "In a pinch, these tips could be a lifesaver. Thanks!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_86= TipComments(
        tip_id= 65,
        user_id= 50,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_87= TipComments(
        tip_id= 66,
        user_id= 23,
            body= "Survival for dummies, perfect.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_88= TipComments(
        tip_id= 47,
        user_id= 24,
            body= "Survival expert in the making these tips prove it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_89= TipComments(
        tip_id= 52,
        user_id= 29,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_90= TipComments(
        tip_id= 55,
        user_id= 35,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_91= TipComments(
        tip_id= 58,
        user_id= 37,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_92= TipComments(
        tip_id= 49,
        user_id= 34,
            body= "Survival expert in the making these tips prove it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_93= TipComments(
        tip_id= 32,
        user_id= 32,
            body= "Survival expert in the making these tips prove it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_94= TipComments(
        tip_id= 53,
        user_id= 15,
            body= "Survival expert in the making these tips prove it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_95= TipComments(
        tip_id= 65,
        user_id= 18,
            body= "Survival expert in the making these tips prove it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_96= TipComments(
        tip_id= 66,
        user_id= 23,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_97= TipComments(
        tip_id= 42,
        user_id= 35,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_98= TipComments(
        tip_id= 13,
        user_id= 28,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_99= TipComments(
        tip_id= 10,
        user_id= 38,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_100= TipComments(
        tip_id= 9,
        user_id= 21,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_101= TipComments(
        tip_id= 34,
        user_id= 22,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_102= TipComments(
        tip_id= 34,
        user_id= 34,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_103= TipComments(
        tip_id= 38,
        user_id= 41,
            body= "These survival tips are something I'll file away for later.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_104= TipComments(
        tip_id= 38,
        user_id= 32,
            body= "You're on fire! These tips showcase your survival prowess.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_105= TipComments(
        tip_id= 38,
        user_id= 35,
            body= "You're on fire! These tips showcase your survival prowess.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_106= TipComments(
        tip_id= 18,
        user_id= 18,
            body= "You're on fire! These tips showcase your survival prowess.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_107= TipComments(
        tip_id= 24,
        user_id= 13,
            body= "You're on fire! These tips showcase your survival prowess.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_108= TipComments(
        tip_id= 22,
        user_id= 10,
            body= "You're on fire! These tips showcase your survival prowess.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_109= TipComments(
        tip_id= 23,
        user_id= 5,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_110= TipComments(
        tip_id= 23,
        user_id= 4,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_111= TipComments(
        tip_id= 27,
        user_id= 4,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_112= TipComments(
        tip_id= 9,
        user_id= 2,
            body= "I'm intrigued... Are these survival tips from personal experience",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_113= TipComments(
        tip_id= 34,
        user_id= 18,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_114= TipComments(
        tip_id= 34,
        user_id= 18,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_115= TipComments(
        tip_id= 38,
        user_id= 17,
            body= "Nailed it! These are the tricks of the survival trade!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_116= TipComments(
        tip_id= 38,
        user_id= 36,
            body= "Nailed it! These are the tricks of the survival trade!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_117= TipComments(
        tip_id= 38,
        user_id= 38,
            body= "Nailed it! These are the tricks of the survival trade!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_118= TipComments(
        tip_id= 18,
        user_id= 41,
            body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_119= TipComments(
        tip_id= 24,
        user_id= 42,
            body= "Survival tips to clutter my brain. Great.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_120= TipComments(
        tip_id= 22,
        user_id= 32,
            body= "Survival tips to clutter my brain. Great.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_121= TipComments(
        tip_id= 26,
        user_id= 37,
            body= "Survival tips to clutter my brain. Great.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_122= TipComments(
        tip_id= 22,
        user_id= 32,
            body= "Nailed it! These are the tricks of the survival trade!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_123= TipComments(
        tip_id= 24,
        user_id= 30,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_124= TipComments(
        tip_id= 23,
        user_id= 17,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_125= TipComments(
        tip_id= 21,
        user_id= 32,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_126= TipComments(
        tip_id= 21,
        user_id= 38,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_127= TipComments(
        tip_id= 23,
        user_id= 28,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_128= TipComments(
        tip_id= 29,
        user_id= 34,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_129= TipComments(
        tip_id= 22,
        user_id= 12,
            body= "Thanks for the tip!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_130= TipComments(
        tip_id= 34,
        user_id= 45,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_131= TipComments(
        tip_id= 27,
        user_id= 32,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_132= TipComments(
        tip_id= 23,
        user_id= 7,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_133= TipComments(
        tip_id= 22,
        user_id= 7,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_134= TipComments(
        tip_id= 26,
        user_id= 3,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_135= TipComments(
        tip_id= 22,
        user_id= 15,
            body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_136= TipComments(
        tip_id= 24,
        user_id= 20,
            body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_138= TipComments(
        tip_id= 23,
        user_id= 32,
            body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_139= TipComments(
        tip_id= 21,
        user_id= 14,
            body= "Not sure how practical these are for me, but thanks.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_140= TipComments(
        tip_id= 21,
        user_id= 15,
            body= "Survival tips to clutter my brain. Great.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_141= TipComments(
        tip_id= 66,
        user_id= 13,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_142= TipComments(
        tip_id= 64,
        user_id= 10,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_143= TipComments(
        tip_id= 64,
        user_id= 32,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_144= TipComments(
        tip_id= 63,
        user_id= 42,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_145= TipComments(
        tip_id= 66,
        user_id= 42,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_146= TipComments(
        tip_id= 23,
        user_id= 1,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_147= TipComments(
        tip_id= 61,
        user_id= 12,
            body= "Nice tip! Appreciate it!",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_148= TipComments(
        tip_id= 61,
        user_id= 32,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_149= TipComments(
        tip_id= 63,
        user_id= 42,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_150= TipComments(
        tip_id= 66,
        user_id= 42,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_137= TipComments(
        tip_id= 20,
        user_id= 1,
            body= "Interesting advice. Hope I never have to use it.",
            date_created= datetime(2023, 8, 8),
        )
    tip_comment_151= TipComments(
        tip_id= 20,
        user_id= 12,
            body= "Really thankful there are people like you out there making tips like this for us to follow!",
            date_created= datetime(2023, 8, 8),
        )

    story_1= Stories (
        user_id = 1,
        title= "Solar Flare Shakeup",
        body= """
            Amid the unrelenting turmoil of the Solar Flare Apocalypse, I emerge as a beacon of hope for a
            community grappling with the loss of technology. With power grids flickering and communication
            networks reduced to static, I take on the role of a guide, leading a diverse group of survivors
            on a perilous journey to salvage and preserve humanity's technological legacy.

            Amidst the challenges, I witness the resurgence of human ingenuity as we adapt, invent, and rediscover
            older methods of communication and collaboration. Bonds form between unlikely allies as we work
            tirelessly to shield critical information from the volatile solar flares. Through our resilience, we
            strive to forge a future where the indomitable spirit of innovation prevails against the forces
            that seek to push humanity back to an age before the digital era.
        """,
        date_created= datetime(2023, 10, 8),
        )

    story_2 = Stories (
        user_id = 2,
        title= "Inside the Nightmare of Hurricane Cherise",
        body= """
            In the wake of a Category 7 Hurricane's devastating landfall, I join a group of resilient individuals,
            striving to rebuild and reclaim our shattered community. Against the backdrop of widespread destruction,
            our unity becomes our greatest strength as we rise from the ruins, determined to reshape our world and
            secure a future for ourselves and the generations to come. With towering waves threatening to engulf our
            homes and ferocious winds tearing at the fabric of our existence, I take charge of our collective efforts
            to fortify shelters and ensure the distribution of essential resources.
        """,
        date_created= datetime(2023, 10, 8),
        )

    # Three - Raging Wildfires
    story_3= Stories (
        user_id = 3,
        title= "Fury and Flames",
        body= """
            Amidst the unrelenting devastation of Raging Wildfires, I rise as a beacon of hope for a group of survivors
            seeking safety amidst the inferno. With landscapes ablaze and communities reduced to ashes, I orchestrate
            evacuation plans, organize resources, and inspire resilience in the face of nature's wrath. As the fires
            rage on, the spirit of rebirth becomes our driving force, symbolizing our determination to rise from the
            ashes. As landscapes once lush and vibrant are transformed into landscapes of destruction and communities
            reduced to ash, I keep moving forward. On the bright side... at least it's easy to cook our food.
        """,
        date_created= datetime(2023, 10, 8),
        )

    # Four - Cryo Storms
    story_4= Stories (
        user_id = 4,
        title= "Frozen Resilience",
        body= """
            Amidst the unrelenting Cryo Storms, my family and I have ingeniously converted an underground bunker into a
            sanctuary against the frigid onslaught. Our efforts to harness geothermal energy and maintain a liveable
            environment are a testament to our determination to persevere. The unforgiving cold becomes a backdrop to
            our unyielding bond, and the challenges we face are met with the warmth of our connection.
        """,
        date_created= datetime(2023, 10, 8),
        )

    # Five - Inferno Twisters
    story_5= Stories (
        user_id = 5,
        title= "The Twisted Inferno",
        body= """
            Caught in the midst of Inferno Twisters, I'm part of a nomadic group of survivors, using our wits to outrun
            the fiery vortexes. Amidst the chaos, we develop innovative strategies to minimize our vulnerability while
            exploring the enigmatic forces that gave birth to these devastating tornadoes of flame. Together, we discover
            that even in the face of the most daunting challenges, humanity's capacity for unity and adaptation remailns
            unbreakable. Our journey through the tornado inferno becomes a testament to the extraordinary heights we can
            reach when we refuse to be consumed by the darkness that seeks to engulf us.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Six - Sand Tsunami
    story_6= Stories (
        user_id = 6,
        title= "Sand Tsunami Refuge",
        body= """
            Against the backdrop of colossal Sand Tsunamis consuming coastal cities, I find myself in the company of a
            diverse band of survivors atop a towering sand dune. While we find momentary solace amidst the sweeping storms,
            the unceasing threat of the next deluge forces us to be constantly vigilant. The harsh desert environment tests
            our limits and prompts us to uncover hidden strengths.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Seven - Biohazard Hail
    story_7 = Stories (
        user_id = 7,
        title= "Rains of Doom",
        body= """
            After Biohazard Hail rains down, leaving sickness and disease in their wake, I band together with fellow survivors,
            scavenging for resources and seeking refuge. The hail's deadly payload necessitates careful planning and resource
            management as we navigate a world where even the simplest actions become fraught with risk.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Eight - Polyphonic Lightning
    story_8= Stories (
        user_id = 8,
        title= "Polyphonic Symphonies",
        body= """
            As the electrified atmosphere reverberates with discordant beauty, we navigate the treacherous terrain, drawing
            inspiration from the unpredictable but mesmerizing melodies that shape our path. While the challenge of survival
            is daunting, the symphony we collectively create binds us in ways beyond the physical. As we harmonize our
            efforts against both the elements and the enigmatic music of the sky, bonds of camaraderie form, solidifying
            the notion that even in the face of the unknown, the power of unity can bring harmony to the chaos. Our journey
            through the thunderous melodies becomes a testament to the human spirit's capacity to find beauty and connection
            in the most extraordinary of circumstances.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Nine - Abyssal Rain
    story_9= Stories (
        user_id = 9,
        title= "Echelons of the Deep",
        body= """
            My story unfolds as I navigate a landscape submerged beneath the weight of rainwater teeming with marine
            life from the abyss. As cities once towering on land become submerged ruins, my mission becomes one of
            survival, exploration, and understanding. The rain, now imbued with the essence of the ocean's depths,
            becomes both a life-giving resource and a conduit for change. Guided by curiosity, I forge connections
            with fellow explorers, each driven by a shared curiosity to fathom the true nature of the abyssal rain.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Ten - Moonquakes
    story_10= Stories (
        user_id = 10,
        title= "Lunar Tides & Tremors",
        body= """
            I'm part of a group of intrepid explorers seeking to uncover the truths behind these seismic disturbances.
            As the moon's gravitational forces wreak havoc on the Earth's stability, our journey is one of discovery,
            danger, and a quest for understanding. Between this and last week's Cryo Storms, it's hard to determine
            the fate of our expedition. Wish us luck as we continue our research!
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Eleven - Shifting Continents
    story_11= Stories (
        user_id = 11,
        title= "Tectonic Turmoil",
        body= """
            Amid the cataclysmic chaos of Shifting Continents, I embark on an odyssey to reunite with my family
            in a world reshaped by tectonic upheavals. As landscapes transform and familiar landmarks vanish,
            my determination becomes a driving force to navigate the unfamiliar terrain and discover the fate of
            my loved ones. No matter the outcome, at least we still have memes.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twelve - Blazing Skies
    story_12= Stories (
        user_id = 12,
        title= "Firestorm Exodus",
        body= """
            Surrounded by the aftermath of meteor showers that ignited the world into Blazing Skies,
            I am part of a tenacious group navigating through the flames in search of a safe haven.
            The charred landscapes force us to rely on each other's unique strengths, fostering an
            unbreakable camaraderie. The intense heat serves as a crucible, forging us into a united
            force against the relentless fires.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Thirteen - Acid Rain
    story_13= Stories (
        user_id = 13,
        title= "Acid Rain Escape",
        body= """
            In the midst of a world consumed by Acid Rain, my survival hinges on finding
            refuge in an abandoned skyscraper. As I gather essential supplies and work with
            my fellow survivors to reinforce our defenses, the corroding effects of the acidic
            rain add a sense of urgency to our every move. Balancing the tensions within our
            group becomes just as crucial as adapting to the ongoing weather catastrophe outside.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # SUPERNATURAL PHENOMENA
    # Fourteen - Whispering Winds
    story_14= Stories (
        user_id = 14,
        title= "Howlers",
        body= """
            Enveloped by the eerie embrace of Whispering Winds, I find myself on a journey where
            unpredictable gusts carry unsettling voices and cryptic messages. Guided by curiosity
            and an unwavering spirit, I traverse a landscape where the boundary between reality and
            the ethereal is blurred. As these spectral whispers become both a source of guidance
            and a harbinger of danger, I navigate the winds' enigmatic language, uncovering hidden
            truths that challenge the very essence of our understanding of the world.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifteen - Crystal Frost
    story_15= Stories (
        user_id = 15,
        title= "Frozen Reverie",
        body= """
            Amid the enchanting yet treacherous embrace of Crystal Frost, I navigate a world where
            surfaces are adorned with beautiful yet perilous crystalline structures. As I traverse
            the frozen landscapes, I am both captivated by the frost's otherworldly beauty and
            wary of its potential dangers. "Frozen Reverie" becomes my journey's name, a testament
            to the delicate balance I must strike between wonder and survival. Every step I take
            is a dance between fascination and caution.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Sixteen - Aurora Plague
    story_16= Stories (
        user_id = 16,
        title= "Cursed Radiance",
        body= """
            Caught in the grip of the Aurora Plague, I join a group of survivors striving to comprehend
            the mysterious illness that accompanies the ethereal aurora borealis. "Cursed Radiance"
            becomes both the name and essence of our journey, as we grapple with the dual nature of
            the phenomenon—a breathtaking spectacle that heralds a malevolent presence. As the
            illness alters behavior and cognition, I am driven by the urgency to find a cure while
            also deciphering the celestial connection that has brought this plague upon us.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Seventeen - Magnetic Storm
    story_17= Stories (
        user_id = 17,
        title= "A Story on Magnetism",
        body= """
            Caught in the turmoil of Magnetic Storms, I struggled to navigate a world where technology is
            in chaos. My journey took me through a landscape of disruption and uncertainty as I sought to
            restore order amid the magnetic turmoil. The once-familiar hum of gadgets and devices is
            replaced by an eerie silence, and the navigation systems we once relied upon have become as
            unpredictable as the storms themselves. The path I tread is treacherous, filled with obstacles
            that demand resourcefulness and a keen understanding of the changing rules of the new reality.
            The struggle to communicate, navigate, and adapt becomes an ongoing battle against the invisible
            forces that have rewritten the rules of the world as we knew it.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Eighteen - Sentient Clouds
    story_18= Stories (
        user_id = 18,
        title= "A New Take on Cloud-Watching",
        body= """
            Caught within the enigma of Sentient Clouds, I find myself navigating a world where the skies hold both
            mystery and danger. As these cloud formations exhibit an unsettling sentience, my journey unfolds as a
            quest to decode the secrets hidden within their patterns and movements. Each cloud carries a message, a
            warning, or a clue, and my ability to comprehend their cryptic language becomes paramount for our survival.
            I lead a group of fellow survivors who rely on my insights to predict and mitigate the cloud formations'
            unpredictable behaviors. In the midst of their eerie dances across the heavens, I uncover a connection that
            transcends the mundane—a connection between nature and the human spirit, reminding us that even in the face
            of the unknown, our capacity to learn and adapt remailns a source of hope and strength.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Nineteen - Temporal Rainbows
    story_19= Stories (
        user_id = 19,
        title= "A Colorful Experience",
        body= """
            In a world where the boundaries of time and space are blurred by Temporal Rainbows, I'm drawn into an
            extraordinary journey of discovery and intrigue. These mesmerizing rainbows, unlike any phenomenon
            witnessed before, cast doubt upon the conventional rules of reality. "A Colorful Experience" becomes an
            apt name for the surreal adventure that unfolds. Fueled by curiosity and a need for survival, I set out to
            unravel the enigma behind these ethereal rainbows. Each appearance brings with it the potential for danger
            and opportunity, and as their shimmering hues dance across the horizon, I'm driven to venture into uncharted
            territory. Every step I take is imbued with uncertainty and wonder, as I strive to decipher the temporal
            anomalies they introduce to the world.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty - Spectral Storms
    story_20= Stories (
        user_id = 20,
        title= "Phantom Tempest",
        body= """
            As the boundary between the living and the ethereal blurs, my journey becomes a dance between the tangible and the
            spectral. With each gust of wind and flash of lightning, I am both captivated by the haunting beauty of the phenomena
            and vigilant against their unpredictable and often unsettling manifestations. This experience has been a testament to
            the courage needed to navigate a reality where the line between the seen and the unseen is eternally blurred.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty One - Phantom Fog
    story_21= Stories (
        user_id = 21,
        title= "Ghosts in the Mist",
        body= """
            Embraced by the mysterious veil of the Phantom Fog, I navigate a world where thick fog distorts reality and creates
            illusions that challenge my every step. As I venture through the mist-shrouded landscapes, my journey becomes a
            delicate balance between trust and skepticism, as what I perceive may not be what truly lies before me. Guided by a
            relentless curiosity and the need for survival, I unravel the enigmatic nature of the phantom fog, peeling back layers
            of illusion to uncover the truths hidden beneath the haze.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Two - Molten Hail
    story_22= Stories (
        user_id = 22,
        title= "Torrential Flames",
        body= """
            The very heavens seem to unleash a fiery onslaught, challenging my ability to seek shelter and protect both myself and
            those around me. "Inferno Downpour" becomes my journey's name, a testament to the infernal nature of the elements that
            threaten to consume all in their path. As I traverse the scorched terrain and face the searing impact of the molten
            hail, my resilience and resourcefulness become my only allies against this catastrophic force of nature.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Three - Eclipse Aurora
    story_23= Stories (
        user_id = 23,
        title= "Eclipse Apocalypse",
        body= """
            As darkness shrouds the landscape and the skies are painted with unearthly hues, my quest becomes twofold—survival in
            a world where perpetual darkness reigns and the unraveling of the secrets behind this cosmic phenomenon. Guided by a
            mixture of awe and trepidation, I navigate the transformed world, seeking both the means to endure and the answers that
            lie beyond the enigmatic celestial event.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Four - Venomous Mist
    story_24= Stories (
        user_id = 24,
        title= "Lethal Veil",
        body= """
            I was unfortunately outside foraging when this happened in our area. The mist carried toxic substances,
            threatening human life and the environment alike. With each cautious step, I sought refuge and resources
            to protect myself and others from the lethal embrace of this atmospheric enigma. As the mist's grip tightened,
            survival became a delicate dance between vigilance and vulnerability, forever shaping our quest for life
            amidst the shadows.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Five - Echoing Thunder
    story_25= Stories (
        user_id = 25,
        title= "Fancy Thunder",
        body= """
            Thunder has a flair for the dramatic, shaking the ground and putting on a show that even pre-apocalypse
            Hollywood would envy. With each rumble, my journey turned into a mix of survival instincts and spontaneous
            dance moves. I zigzagged through the landscape, seeking shelter and embracing the rhythm of the storm, all
            while trying to avoid being the lead singer in a lightning-based band. And as the echoes bounced off the
            landscape, I couldn't help but wonder if the thunder had a standing ovation planned for the end of its
            performance.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Six - Astral Shimmers
    story_26= Stories (
        user_id = 26,
        title= "Wonky, Rockin' Stargazing",
        body= """
            This made me the ultimate stargazing enthusiast, dancing through the landscapes illuminated by this
            interstellar light show. From constellation karaoke to moonwalk competitions, each night was a new
            adventure, proving that even in the face of apocalyptic events, the universe knows how to throw a
            killer party.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # MYSTICAL ELEMENTS
    # Twenty Seven - Bioluminescent Rain
    story_27= Stories (
        user_id = 27,
        title= "Glow Showers",
        body= """
            It made the whole area look like Alice in Wonderland vomited all over everything. As beautiful and
            breathtaking as it was, it was quite caustic. I've had my favorite song stuck in my head all day,
            but I can't even listen to it because I accidentally left my phone outside. 5/10 - recommend with
            EXTREME caution.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Eight - Ash Monsoon
    story_28= Stories (
        user_id = 28,
        title= "Decorative Ash",
        body= """
            From ash angels to impromptu art installations, every surface became a canvas for creative expression.
            The monochrome madness turned chaos into a chaotic masterpiece, and as I wiped a smudge of ash off
            my cheek, I couldn't help but smile at the absurdity of it all. After all, who knew that the end of
            the world would come with such a unique dress code?
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Twenty Nine - Chrono Frogs
    story_29= Stories (
        user_id = 29,
        title= "Froggy Whimsicality",
        body= """
            In the swirl of time warp whimsy brought on by the Chrono Frogs, I embarked on a journey that
            blurred the lines between reality and fantasy. The frogs played tricks on the senses, distorting
            perceptions and creating a carnival of confusion. Armed with a sense of curiosity and a pocket full
            of breadcrumbs, I ventured through the misty timescapes, where every step felt like a leap through
            the pages of history. Moments stretched and compressed, leaving me in awe of the frog's mischievous
            dance in time. As I stumbled upon relics of bygone eras and met characters that seemed to have walked
            straight out of history books, I couldn't help but embrace the enchanting chaos.
        """,
        date_created= datetime(2023, 10, 8),
        )

    # Thirty - Time-Skipping Storms
    story_30= Stories (
        user_id = 30,
        title= "Time for Chaos",
        body= """
            Conversations looped, deja vu moments abounded, and the world seemed to play an unpredictable game of
            hopscotch with reality. My advice? Embrace the uncertainty, knowing that even in the face of time's
            capriciousness, every moment was an opportunity for a new adventure. After all, who needs a straight
            road when you can travel through the tapestry of time itself?
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty One - Biome Shifts
    story_31= Stories (
        user_id = 31,
        title= "An Ecosystem As Dysfunctional As My Family",
        body= """
            Mother nature was clearly having a laugh at our expense. I mean, what kind of mother does that to her own
            children? Forcing us to experience rainforest-dwelling camels, saltwater goats, flying crocodiles...?
            It's all just one big, nature-made improv show, and we're all living in it. Might as well enhoy it, I guess.
            After all, who needs a regular old nature documentary when you can be part of a reality show that even the
            Kardashians couldn't script?
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty Two - Quantum Storms
    story_32= Stories (
        user_id = 32,
        title= "Reality Roulette",
        body= """
            Okay, so a few things to note...
            1. Reality has some sick dance moves. Never seen anything fold, twist, and occasionally do the cha-cha
            like that before.
            2. Don't talk to your future self. You don't wanna live with that kind of disappointment.
            3. Even absolute chaos has its own particular charms... sometimes.
            4. Hope you don't ever get caught up in one of these storms with anything substantial in your stomach. It
            WILL end up somewhere besides your stomach. Which direction it goes depends on you.
        """,
       date_created= datetime(2023, 10, 8),
    )

    # Thirty Three - Prismatic Snowfall
    story_33= Stories (
        user_id = 33,
        title= "A Spectacle to Behold",
        body= """
            Experiencing the magic of 'snowglobe spectacles' thanks to Prismatic Snowfall! The snowflakes
            turned into mini rainbows when they hit the ground, and my friends all turned into butterflies.
            It was like a winter wonderland! Who needs plain old snow when you can walk on rainbows and chill
            with butterflies? #PrismaticSnowfall #WinterMagic
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty Four - Frostfire
    story_34= Stories (
        user_id = 34,
        title= "A Hellish Paradox",
        body= """
            Stepping outside into the Frostfire was the weirdest, most uncomfortable experience ever. It was
            like my entire body was covered in one massive IcyHot patch on steroids. I definitely recommend
            finding refuge and NOT LEAVING until its over unless you want to have vivid nightmares for weeks.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty Five - Symbiotic Storms
    story_35= Stories (
        user_id = 35,
        title= "Symbiotic Rebirth",
        body= """
            Amid the transformative Symbiotic Storms, I form an alliance with a group of individuals who share
            the same challenges. As we grapple with our newfound abilities, we uncover a potential path towards
            humanity's evolution. Navigating this uncharted territory demands not only personal growth but also
            navigating the moral landscape of using our powers for good.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Thirty Six - Golden Snow
    story_36= Stories (
        user_id = 36,
        title= "Gilded Snowfall",
        body= """
            If someone woulda told me a few years ago that gold would one day rain down from the sky, I woulda laughed
            them into oblivion, all while hoping that would eventually happen so I wouldn't have to deal with student
            loans. Let me start by saying it's nowhere near as glorious as it sounds. The globs of gold raining down
            were so hot it felt like being sprayed with insanely heavy BBs straight from the pits of hell.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty Seven - Ethereal Breezes
    story_37= Stories (
        user_id = 37,
        title= "Breezy Tales",
        body= """
            Dancing in the breeze, so light and fun,
            A breeze that's second to none!
            Leaves giggling secrets, a mischevious delight,
            As I stroll through a world where the wind takes flight.

            With every step, a tale it seems to tell,
            Of hidden treasures and enchantments, oh so swell!
            I'm just a character in this whimsical rhyme,
            Where even the wind knows it's having a good time.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Thirty Eight - Elemental Mirage
    story_38= Stories (
        user_id = 38,
        title= "Mirage Realm",
        body= """
            Immersed in a world ensnared by an Elemental Mirage, I embark on a quest to uncover the
            source of the illusions. Distinguishing between reality and deception becomes a constant
            challenge as I traverse through ever-shifting landscapes. The intricate nature of the
            mirages demands not only physical endurance but also the intellectual prowess to unravel
            their enigmatic nature.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Thirty Nine - Supernova Daylight
    story_39= Stories (
        user_id = 39,
        title= "Supernova Sunrise",
        body= """
            In a daylight's grip, a blaze untamed,
            Supernove Light, by sun's fire framed.
            Shadows dance with searing heat,
            A cosmic brilliance, both wild and neat.

            Step with caution, eyes shielded bright,
            As sun's explosion floods our sight.
            A stunning danger, beauty and might
            Supernova Sunrise takes its flight.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # PARANORMAL CHAOS
    # Forty - Cursed Rain
    story_40= Stories (
        user_id = 40,
        title= "Sinister Storms",
        body= """
        Each drop carries a sinister aura. Luck seems to go awry as the rain continues to fall,
        leaving a trail of misfortune and chaos in its wake. It's like a real-life series of
        unfortunate events. I never liked that book. Yay me.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty One - Gravity Waves
    story_41= Stories (
        user_id = 41,
        title= "Waves of Change",
        body= """
            If you're ever in the midst of an episode of Gravity Waves, brace yourself for a topsy-turvy
            experience. One moment, you're floating like an astronaut; the next, gravity pulls you down
            like a lead weight. It's like a rollercoaster ride through space, and you're just trying to
            hold on for dear life until you regain solid footing.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Two - Ravenous Locust Rains
    story_42= Stories (
        user_id = 42,
        title= "NomNomNom",
        body= """
            I could tell we were about to be plagued with locusts once I saw the sky darken in the middle of
            the day. Those things have a serious appetite, too. A buddy of mine ended up with his clothes
            eaten right off of him in a matter of seconds. It's survivable though - just unleash your inner
            pest exterminator like I did! You won't be as epic an exterminator as me, but you can give it your
            best shot.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Three - Plague Clouds
    story_43= Stories (
        user_id = 43,
        title= "Viral Outbreak",
        body= """
            In the face of Plague Clouds that release contagious diseases, I'm part of a team of scientists racing
            against time to uncover a cure. As internal conflicts threaten to disrupt our efforts, we grapple with
            the moral dilemmas of scientific intervention. The stakes are high, and the pressing need to save lives
            weighs heavily on our shoulders.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Four - Echoing Shadows
    story_44= Stories (
        user_id = 44,
        title= "Unraveled Echoes",
        body= """
            Echoing Shadows envelop me in a surreal reality where the very fabric of the world is unraveling. As I
            traverse through this distorted realm, I collect fragments of memories and experiences that hint at
            the underlying enigma. The echoes of the past merge with the present chaos, guiding me toward a deeper
            understanding of the events that have reshaped our existence. With each revelation, I inch closer to
            understanding my place in this turbulent new reality, driven by an unyielding curiosity to piece together
            the fragments of a world in flux.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Forty Five - Crimson Tides
    story_45= Stories (
        user_id = 45,
        title= "The Deep Blue Sea's Crimson Makeover",
        body= """
            I recently joined a group of marine biologists to uncover the mysteries behind the unusual blood-red color
            of the ocean. It appears to be causing some very bizarre mutations in the aqautic lifeforms. Sometimes it's
            difficult to even know what the creature originally was. Other times, it's clear that they are more vicious
            and deadly versions of the creatures we all know and love. It may look like an enigmatic masterpiece on the
            surface, but it's an underwater hellscape below the illusion of tranquility.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Six - Reality Ripples
    story_46= Stories (
        user_id = 46,
        title= "Reality Benders",
        body= """
            In a world of unpredictable Reality Ripples, I join a team of physicists grappling with the consequences of
            reality disturbances. Our pursuit of restoring stability pits our scientific curiosity against the ethical
            dilemmas posed by meddling with the fabric of existence. Balancing our quest for understanding with the risks
            of altering reality becomes a complex struggle.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Forty Seven - Enigmatic Mirages
    story_47= Stories (
        user_id = 47,
        title= "Enigmatic Illusions",
        body= """
            I once stepped inside an enigmatic mirage. Or, at least it felt that way. This is a place where reality shimmers
            and dances. A mind-bending journey as we chase fleeting visions and question what's real. As I journeyed through
            the shifting landscapes of surreal visions, I delved deeper into the mysteries that these mirages hold, determined
            to uncover their secrets.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Eight - Haunting Resonance
    story_48= Stories (
        user_id = 48,
        title= "Secrets in the Resonance",
        body= """
            It was like every step carried an eerie echo, as if the past was speaking to the present. Footsteps reverberated
            so loudly, they interrupted the symphony of memories and whispers of bygone eras invading my mind. As I navigated
            this unfamiliar auditory tapestry, I swear I heard whispers of hidden stories that shaped the very foundation of
            our reality.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Forty Nine - Poltergeist Gusts
    story_49= Stories (
        user_id = 49,
        title= "The Howling Winds of Chaos",
        body= """
            These mischievous winds seem to have a life of their own. I guess that's a bit ironic considering that
            they're well... you know... dead. They send stuff flying through the air as if possessed by invisible
            pranksters. Floating furniture, playful tugs on your clothing... Just be careful. When they're angry,
            jokes can quickly become murderous.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifty - Eclipsed Sun
    story_50= Stories (
        user_id = 50,
        title= "Eternal Night Survival",
        body= """
            As the world plunges into darkness due to the Eclipsed Sun, my unique perspective as a blind survivor becomes an
            asset. Navigating by heightened senses, I find solace in the inky blackness while searching for answers. An
            unexpected friendship sheds light on the mysteries of the eclipse and propels me towards the journey of unveiling
            the celestial secrets.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Fifty One - Silent Thunder
    story_51= Stories (
        user_id = 51,
        title= "Silent Resurgence",
        body= """
            Following the eerie phenomenon of Silent Thunder, my journey unfolds in the company of deaf survivors who
            have found refuge in an old library. Our unique adaptation to a world devoid of sound allows us to uncover
            secrets that would otherwise remailn hidden. While the silence may isolate us from the turmoil outside, it also
            empowers us to navigate a world filled with enigmatic whispers.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifty Two - Vampire Breeze
    story_52= Stories (
        user_id = 52,
        title= "This Weather SUCKS",
        body= """
            It chills to the bone, sapping energy with every gust. Made me feel absolutely exhausted, and I passed out
            while walking the trail to my house. It took a lot out of me. And I mean, I was only 30 yesterday. Now I'm
            60. Who woulda thought an unscheduled nap could do so much damage??
        """,
        date_created= datetime(2023, 10, 8),
    )



    # UNPREDICTABLE TRANSFORMATIONS
    # Fifty Three - Zombie Doomsday
    story_53= Stories (
    user_id = 53,
        title= "Wake the Dead",
        body= """
            In the twilight's eerie hush,
            We play our guitars, deepening daylight's blush.
            "Zombie Doomsday," it's here, it's now,
            We summon power, with every vow.

            Strumming chords that pierce the night,
            Our rock anthems ignite the fight.
            Undead hordes, they rise and sway,
            To our music's power, they obey.

            Disclaimer: You totally CANNOT fight zombies this way. Run far and fast.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Fifty Four - Sonic Storms
    story_54 =  Stories (
    user_id = 1,
        title= "Rocking the Sonic Radiowaves",
        body= """
            So there I am, chillin' with my crew, when out of nowhere, these crazy Sonic Storms start tearing through
            everything. Like, seriously, buildings shaking, windows rattling, it's like Mother Nature cranked the volume.
            But you know what they say, when life gives you super loud storms, you crank up the tunes and fight back. Amps
            blasting, guitars wailing, we're turning this chaotic noise into a full-on concert. Who knows - maybe music is
            the secret to taming the apocalypse.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifty Five - Reverse Rain
    story_55= Stories (
        user_id = 2,
        title= "Uplifted",
        body= """
            Picture this: a world where raindrops defy gravity, rising from the ground to the sky. Yeah, you heard me right.
            It's like nature decided to flip the script and mess with the laws of physics. So, naturally, I grab my umbrella
            and head out to witness this upside-down rain phenomenon for myself. At first, it's just surreal. It's like a
            weird magic show from Mother Nature. People are gathering in the streets, laughing, pointing, and trying to catch
            the raindrops in their hands. But here's the twist  this isn't just some quirky weather show. As these raindrops
            rise, they're carrying all sorts of stuff with them. It's like a little raindrop picnic rising to the sky.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Fifty Six - Mirror Mists
    story_56= Stories (
        user_id = 3,
        title= "Misty Reflections",
        body= """
            The day it all started, I was walking through the woods, lost in my thoughts. Suddenly, I stepped into a misty patch,
            and bam! There it was  a mirror reflecting the trees, the sky, and even my own surprised face. I mean, who needs
            bathroom mirrors anymore, am I right? The city streets have transformed into a kaleidoscope of reflections  buildings,
            people, and street art blending together. The downside is that People are tripping over their own feet, mesmerized by
            the reflections, and car accidents have turned into bizarre ballets of shattered glass. But hey, life's an adventure,
            and this mirror mist is teaching us to pay attention, to look closer at the world around us.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifty Seven - Echoing Dunes
    story_57= Stories (
        user_id = 4,
        title= "Sand In All the Wrong Places",
        body= """
            I was out exploring the desert one day when I stumbled upon these echoing dunes. It's like every footstep sends
            ripples through time, and suddenly, you're surrounded by the distant voices of people long gone. It's eerie and
            magical all at once, like having a conversation with history itself. Some use it for storytelling and some historians
            have used it to research the past. But sometimes, it's almost like it finds the darkest parts of your personal history
            and plays it over and over again like a broken record.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Fifty Eight - Chameleon Clouds
    story_58= Stories (
        user_id = 5,
        title= "Cloud Camouflage Chronicles",
        body= """
            These clouds can mimic buildings, animals, even other clouds. It's like a never-ending game of "Guess What I Am." You'll
            be staring at what seems like a clear blue sky, only to realize that the clouds have transformed into an intricate mosaic
            of shapes and forms. But here's the kicker they're not just playing around. Chameleon clouds have become a sort of
            celestial code, a way for nature to communicate with us. Meteorologists study their patterns, deciphering messages hidden
            in the sky. It's like decoding Mother Nature's secret language, and let me tell you, it's a wild ride.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Fifty Nine - Petrifying Fog
    story_59= Stories (
        user_id = 6,
        title= "Stones Embrace",
        body= """
            So there I was, navigating through the dense woods one morning, when this eerie fog started rolling in. Now, I'd heard the
            legends about this petrifying fog, but I always thought they were just tales to spook us. Well, let me tell you, those
            legends are as real as the petrified trees standing like statues in its wake. But amidst the danger, something extraordinary
            happened. People started finding ways to use the petrified objects. It was like a scavenger hunt for stone resources. Need a
            chair? Find a petrified log. Looking for a tool? Look no further than that stone hammer by the foggy trail. And as bizarre as
            it sounds, the petrified landscape turned into art. People sculpted intricate statues and landscapes that looked like they were
            lifted straight out of myth and legend. It was like Mother Nature's take on a surrealist art gallery.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Sixty - Temporal Tides
    story_60= Stories (
        user_id = 7,
        title= "A Timely Tidal Wave",
        body= """
            Imagine catching a wave at sunrise and finding yourself in a medieval village, surrounded by knights and castles. Or getting swept
            up by the tide during a storm and landing in a futuristic cityscape with flying cars and holographic billboards. It was like a roller
            coaster ride through the annals of history and the distant future. But with great time-travel power comes great responsibility. You
            can't just go waltzing through history without causing ripples. And believe me, I've seen some unintended consequences that'll make
            your head spin faster than those tides.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Sixty One - Chlorine Showers
    story_61= Stories (
        user_id = 8,
        title= "Chemical Quirks",
        body= """
            Turns out, this chlorine downpours aren't refreshing like a dip in the pool. They burn, they bleach, and they leave you feeling like you'd
            taken a dip in a chemical experiment gone wrong. So, there I was, doing the chlorine shuffle  hopping from awning to awning, dodging and
            weaving like a rain-dodging ninja. It's not your typical rainy day, but hey, it's all part of the quirky charm of living in a world where
            Mother Nature's got a mischievous streak. Just remember your umbrella and if you want a trendy new tye-dye tee, just put a shirt on the porch
            and reap the rewards.
        """,
        date_created= datetime(2023, 10, 8),
    )


    # Sixty Two - Dimensional Rifts
    story_62= Stories (
        user_id = 9,
        title= "Portal in Real Life",
        body= """
            I was just going about my day doing chores around the house when all of a sudden I'm standing in the middle of a bustling marketplace. People
            are dressed in medieval attire, hawking goods I've only seen in movies. And me? I'm in my jeans and sneakers, feeling like a time traveler
            who missed the dress code memo, until I realized I had actually traveled to a different reality. You'd think dealing with dimensional rifts
            would be a nightmare, right? Well, sure, it's not exactly convenient. Imagine trying to get to work on time when you're constantly being zapped
            from one era to another. As for me, I've learned to embrace the chaos. Who else can say they've haggled with a medieval merchant one minute and
            texted their friend from a futuristic skyscraper the next?
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Sixty Three - Quantum Swirls
    story_63= Stories (
        user_id = 10,
        title= "Quantum Odyssey",
        body= """
            Caught in the wake of Quantum Swirls that have fractured reality, I'm entangled in a series of time loops. With
            each iteration, I gain a new perspective on the chaotic world around me, and my actions ripple through time in
            unexpected ways. Navigating this quantum maze demands not only survival instincts but a keen understanding of
            the threads that weave through the fabric of existence.
        """,
        date_created= datetime(2023, 10, 8),
        )


    # Sixty Four - Fractal Rain
    story_64= Stories (
        user_id = 11,
        title= "Decoding the Kaleidoscope",
        body= """
            Ever seen raindrops that form intricate patterns mid-air? Welcome to the world of Fractal Rain, where nature's
            waterworks have taken on a mesmerizing twist. It's like a kaleidoscope in the sky, and I got a front-row seat
            to the show. For some, it's like an Eldritch Horror; so complex that it drives them insane. Those who are able
            have started interpreting the fractals, trying to decipher if they hold any hidden messages. Some claim they've
            cracked the code, that the rain is sending us secret signals from the divines. As for me, I'm content just
            enjoying the show.
        """,
        date_created= datetime(2023, 10, 8),
    )

    # Sixty Five - Reality Hiccups
    story_65= Stories (
        user_id = 12,
        title= "When the World Sneezes",
        body= """
            Ever had those moments where things just... glitch? Like you're walking down the street and suddenly, everything
            around you freezes for a split second? That's the reality hiccups for you, and let me tell you, it's like living
            in a simulation that occasionally trips over its own code. People have started making games out of it, trying to
            predict when the next hiccup will hit. Some even claim they've mastered the art of moving during the freezes,
            like they're dancing through a glitchy dance floor. I prefer to be more cautious - you never know what horros
            could occur.
        """,
        date_created= datetime(2023, 10, 8),
        )

    story_comment_1= StoryComments (
            story_id= 1,
            body= "Wow, that's insane. I never knew this was a thing...",
        user_id= 1,
            date_created= datetime(2023, 8, 8),
        )
    story_comment_2= StoryComments (
            story_id= 1,
        user_id= 1,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_3= StoryComments (
            story_id= 2,
            body= "Just another normal day of bad weather...",
        user_id= 2,
            date_created= datetime(2023, 8, 8),
        )
    story_comment_4= StoryComments (
            story_id= 3,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
        user_id= 3,
            date_created= datetime(2023, 8, 8),
        )
    story_comment_5= StoryComments (
            story_id= 4,
        user_id= 3,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_6= StoryComments (
            story_id= 5,
        user_id= 3,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_7= StoryComments (
            story_id= 6,
        user_id= 3,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_8= StoryComments (
            story_id= 7,
        user_id= 4,
            body= "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_9= StoryComments (
            story_id= 8,
        user_id= 5,
            body= "Dang",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_10= StoryComments (
            story_id= 9,
        user_id= 6,
            body= "Surviving that took guts and quick thinking. I don't know if I could've handled myself like you in that situation.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_11= StoryComments (
            story_id= 10,
        user_id= 7,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_12= StoryComments (
            story_id= 11,
        user_id= 8,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_13= StoryComments (
            story_id= 12,
        user_id= 8,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_14= StoryComments (
            story_id= 13,
        user_id= 8,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_15= StoryComments (
            story_id= 14,
        user_id= 9,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_16= StoryComments (
            story_id= 15,
        user_id= 10,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_17= StoryComments (
            story_id= 16,
        user_id= 11,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_18= StoryComments (
            story_id= 17,
        user_id= 12,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_19= StoryComments (
            story_id= 18,
        user_id= 13,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_20= StoryComments (
            story_id= 19,
        user_id= 14,
            body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_21= StoryComments (
            story_id= 20,
        user_id= 14,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_22= StoryComments (
            story_id= 21,
        user_id= 15,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_23= StoryComments (
            story_id= 22,
        user_id= 16,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_24= StoryComments (
            story_id= 23,
        user_id= 16,
            body= "Thanks for sharing your story so we can all be more informed!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_25= StoryComments (
            story_id= 24,
        user_id= 16,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_26= StoryComments (
            story_id= 25,
        user_id= 16,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_27= StoryComments (
            story_id= 26,
        user_id= 17,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_28= StoryComments (
            story_id= 27,
        user_id= 18,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_29= StoryComments (
            story_id= 28,
        user_id= 19,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_30= StoryComments (
            story_id= 29,
        user_id= 20,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_31= StoryComments (
            story_id= 30,
        user_id= 21,
            body= "Nature wanted to take you out, but you said 'Nope!'. Glad you're okay",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_32= StoryComments(
            story_id= 31,
        user_id= 22,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_33= StoryComments (
            story_id= 32,
        user_id= 23,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_34= StoryComments (
            story_id= 33,
        user_id= 24,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_35= StoryComments (
            story_id= 34,
        user_id= 25,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_36= StoryComments (
            story_id= 35,
        user_id= 26,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_37= StoryComments (
            story_id= 36,
        user_id= 27,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_38= StoryComments (
            story_id= 37,
        user_id= 27,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_39= StoryComments (
            story_id= 38,
        user_id= 28,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_40= StoryComments (
            story_id= 39,
        user_id= 29,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_41= StoryComments (
            story_id= 40,
        user_id= 30,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_42= StoryComments (
            story_id= 41,
        user_id= 31,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_43= StoryComments (
            story_id= 42,
        user_id= 32,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_44= StoryComments (
            story_id= 43,
        user_id= 33,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_45= StoryComments (
            story_id= 44,
        user_id= 34,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_46= StoryComments (
            story_id= 45,
        user_id= 35,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_47= StoryComments (
            story_id= 46,
        user_id= 36,
            body= "Just another normal day of bad weather...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_48= StoryComments (
            story_id= 47,
        user_id= 36,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_49= StoryComments (
            story_id= 48,
        user_id= 37,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_50= StoryComments (
            story_id= 49,
        user_id= 38,
            body= "Wow, Mother Nature isn't happy with us...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_51= StoryComments (
            story_id= 50,
        user_id= 38,
            body= "Your ability to stay focused and navigate those adverse conditions is incredible. Thanks for sharing your story!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_52= StoryComments (
            story_id= 51,
        user_id= 38,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_53= StoryComments (
            story_id= 52,
        user_id= 39,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_54= StoryComments (
            story_id= 53,
        user_id= 40,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_55= StoryComments (
            story_id= 54,
        user_id= 41,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_56= StoryComments (
            story_id= 55,
        user_id= 42,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_57= StoryComments (
            story_id= 56,
        user_id= 43,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_58= StoryComments (
            story_id= 57,
        user_id= 44,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_59= StoryComments (
            story_id= 58,
        user_id= 45,
            body= "Wow, that's insane. I never knew this was a thing...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_60= StoryComments (
            story_id= 59,
        user_id= 45,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_61= StoryComments (
            story_id= 60,
        user_id= 46,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_62= StoryComments (
            story_id= 61,
        user_id= 47,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_63= StoryComments (
            story_id= 62,
        user_id= 48,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_64= StoryComments (
            story_id= 63,
        user_id= 49,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_65= StoryComments (
            story_id= 64,
        user_id= 50,
            body= "Reading this reminded me of the importance of being prepared for anything. Your survival instincts are inspiring!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_66= StoryComments (
            story_id= 33,
        user_id= 24,
            date_created= datetime(2023, 8, 8),
            body= "This is a story that everyone should read."
        )
    story_comment_67= StoryComments (
            story_id= 33,
        user_id= 50,
            date_created= datetime(2023, 8, 8),
            body= "Wow, you learn something new everyday."
        )
    story_comment_68= StoryComments (
            story_id= 4,
        user_id= 23,
            date_created= datetime(2023, 8, 8),
            body= "And this is why I don't wanna go outside everyone."
        )
    story_comment_69= StoryComments (
            story_id= 7,
        user_id= 25,
            body= "Does anyone remember when the weather started being so terrible? Anyone remember the good 'ol days when we would all just complain about it being too hot or there being too much rain?",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_70= StoryComments (
            story_id= 23,
        user_id= 3,
            body= "I love how descriptive you were in your story. Keep on writing!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_71= StoryComments (
            story_id= 22,
        user_id= 40,
            body= "Gosh nature is something else these days..",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_72= StoryComments (
            story_id= 41,
        user_id= 50,
            body= "Sending prayers and love your way. Stay safe",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_73= StoryComments (
            story_id= 25,
        user_id= 50,
            body= "Yeah our world is going downhill fast...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_74= StoryComments (
            story_id= 29,
        user_id= 50,
            body= "I'm soo thankful you shared this story. More people need to know about this.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_75= StoryComments (
            story_id= 30,
        user_id= 20,
            body= "What the person above me said! Yeah so many peopl would be better off if they knew the story you were sharing!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_76= StoryComments (
            story_id= 32,
        user_id= 49,
            body= "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting more and more scared",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_77= StoryComments (
            story_id= 32,
        user_id= 50,
            body= "Bro, do you really think feeling safe but being ignorant is going to help? These people are going to be in a lot of trouble if they were to suddenly encounter these situations. At least letting them know gives them a heads up",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_78= StoryComments (
            story_id= 32,
        user_id= 5,
            body= "Yeah I agree, better to know more than less.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_79= StoryComments (
            story_id= 32,
        user_id= 27,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_80= StoryComments (
            story_id= 65,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_81= StoryComments (
            story_id= 12,
        user_id= 5,
            body= "It was an okay story..",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_82= StoryComments (
            story_id= 14,
        user_id= 4,
            body= "Wow, who would have thought...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_83= StoryComments (
            story_id= 16,
        user_id= 40,
            body= "First time on this site and wow these stories are insane. Keep writing ya'll!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_84= StoryComments (
            story_id= 14,
        user_id= 50,
            body= "Sending prayers and love your way. Stay safe",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_85= StoryComments (
            story_id= 18,
        user_id= 2,
            date_created= datetime(2023, 8, 8),
            body= "The world is a little less dark because of all of you..."
        )
    story_comment_86= StoryComments (
            story_id= 16,
        user_id= 50,
            body= "I'm soo thankful you shared this story. More people need to know about this.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_87= StoryComments (
            story_id= 54,
        user_id= 20,
            body= "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_88= StoryComments (
            story_id= 62,
        user_id= 49,
            body= "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting more and more scared",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_89= StoryComments (
            story_id= 62,
        user_id= 30,
            date_created= datetime(2023, 8, 8),
            body= "This is going to be crazy..."
        )
    story_comment_90= StoryComments (
            story_id= 4,
        user_id= 5,
            body= "Wow who wouldn've thought that would've been there.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_91= StoryComments (
            story_id= 13,
        user_id= 7,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_92= StoryComments (
            story_id= 8,
        user_id= 8,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_93= StoryComments (
            story_id= 8,
        user_id= 25,
            body= "I'm soo thankful you shared this story. More people need to know about this.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_94= StoryComments (
            story_id= 8,
            body= "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!",
        user_id= 20,
            date_created= datetime(2023, 8, 8),
        )
    story_comment_95= StoryComments (
            story_id= 62,
        user_id= 9,
            body= "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting more and more scared",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_96= StoryComments (
            story_id= 10,
        user_id= 15,
            body= "Sheesh good luck to whoever decides to live there...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_97= StoryComments (
            story_id= 34,
        user_id= 5,
            body= "Yeah I agree, better to know more than less.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_98= StoryComments (
            story_id= 34,
        user_id= 27,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_99= StoryComments (
            story_id= 37,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_100= StoryComments (
            story_id= 37,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_101= StoryComments (
            story_id= 39,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_102= StoryComments (
            story_id= 41,
        user_id= 5,
            body= "Yeah I agree, better to know more than less.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_103= StoryComments (
            story_id= 36,
        user_id= 27,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_104= StoryComments (
            story_id= 43,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_105= StoryComments (
            story_id= 43,
            user_id= 50,
            body= "I'm soo thankful you shared this story. More people need to know about this.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_106= StoryComments (
            story_id= 41,
            user_id= 20,
            body= "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_107= StoryComments (
        story_id= 44,
        user_id= 49,
        body= "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting mroe and more sarred",
        date_created= datetime(2023, 8, 8),
    )

    story_comment_108= StoryComments (
        story_id= 46,
        user_id= 30,
        body= "This is going to be crazy...",
        date_created= datetime(2023, 8, 8),
        )
    story_comment_109= StoryComments (
            story_id= 42,
        user_id= 5,
            body= "Yeah I agree, better to know more than less.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_110= StoryComments (
            story_id= 45,
        user_id= 27,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_111= StoryComments (
            story_id= 41,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_112= StoryComments (
            story_id= 44,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_113= StoryComments (
            story_id= 39,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_114= StoryComments (
            story_id= 41,
        user_id= 5,
            body= "Yeah I agree, better to know more than less.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_115= StoryComments (
            story_id= 36,
        user_id= 27,
            body= "Some people just wanna be ignorant. Just let em be that way if they want it. You don't have to go around trying to save everyone",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_116= StoryComments (
            story_id= 43,
        user_id= 29,
            body= "Good read",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_117= StoryComments (
            story_id= 43,
        user_id= 50,
            body= "I'm soo thankful you shared this story. More people need to know about this.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_118= StoryComments (
            story_id= 41,
        user_id= 20,
            body= "What the person above me said! Yeah so many people would be better off if they knew the story you were sharing!",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_119= StoryComments (
            story_id= 44,
        user_id= 49,
            body= "Thanks for sharing but did you really have to share this one? I feel like a lot of people would have been happier being ignorant and not getting more and more scared",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_120= StoryComments (
            story_id= 58,
        user_id= 24,
            date_created= datetime(2023, 8, 8),
            body= "Wow that was eye opening..."
        )
    story_comment_121= StoryComments (
            story_id= 42,
        user_id= 52,
            body= "Sometimes I wish I didn't go on this site. I get more scared each time.",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_122= StoryComments (
            story_id= 51,
        user_id= 37,
            body= "Well I've got my daily dose of the news for today",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_123= StoryComments (
            story_id= 50,
        user_id= 17,
            body= "Whoa, looking forward to what you're going to write next",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_124= StoryComments (
            story_id= 44,
        user_id= 50,
            body= "Interesting story",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_1= StoryComments (
            story_id= 9,
        user_id= 50,
            body= "Who would've thought that my home would become like this...",
            date_created= datetime(2023, 8, 8),
        )
    story_comment_125= StoryComments (
        story_id= 9,
        user_id= 11,
        body= "Yeah, my family is out there as well...",
        date_created= datetime(2023, 8, 8),
        )
    story_comment_126= StoryComments (
        story_id= 65,
        user_id= 1,
        body= "I couldn't stop reading! Thanks for showing us the importance of staying prepared and level-headed when confronted with extreme weather.",
        date_created= datetime(2023, 8, 8),
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

    db.session.add_all([story_1, story_2, story_3, story_4, story_5, story_6, story_7, story_8, story_9, story_10, story_11, story_12, story_13, story_14, story_15, story_16, story_17, story_18, story_19, story_20, story_21, story_22, story_23, story_24, story_25, story_26, story_27, story_28, story_29, story_30, story_31, story_32, story_33, story_34, story_35, story_36, story_37, story_38, story_39, story_40, story_41, story_42, story_43, story_44, story_45, story_46, story_47, story_48, story_49, story_50, story_51, story_52, story_53, story_54, story_55, story_56, story_57, story_58, story_59, story_60, story_61, story_62, story_63, story_64, story_65])

    db.session.add_all([story_comment_1, story_comment_2, story_comment_3, story_comment_4, story_comment_5, story_comment_6, story_comment_7, story_comment_8, story_comment_9, story_comment_10, story_comment_11, story_comment_12, story_comment_13, story_comment_14, story_comment_15, story_comment_16, story_comment_17, story_comment_18, story_comment_19, story_comment_20, story_comment_21, story_comment_22, story_comment_23, story_comment_24, story_comment_25, story_comment_26, story_comment_27, story_comment_28, story_comment_29, story_comment_30, story_comment_31, story_comment_32, story_comment_33, story_comment_34, story_comment_35, story_comment_36, story_comment_37, story_comment_38, story_comment_39, story_comment_40, story_comment_41, story_comment_42, story_comment_43, story_comment_44, story_comment_45, story_comment_46, story_comment_47, story_comment_48, story_comment_49, story_comment_50, story_comment_51, story_comment_52, story_comment_53, story_comment_54, story_comment_55, story_comment_56, story_comment_57, story_comment_58, story_comment_59, story_comment_60, story_comment_61, story_comment_62, story_comment_63, story_comment_64, story_comment_65, story_comment_66, story_comment_67, story_comment_68, story_comment_69, story_comment_70, story_comment_71, story_comment_72, story_comment_73, story_comment_74, story_comment_75, story_comment_76, story_comment_77, story_comment_78, story_comment_79, story_comment_80, story_comment_81, story_comment_82, story_comment_83, story_comment_84, story_comment_85, story_comment_86, story_comment_87, story_comment_88, story_comment_89, story_comment_90, story_comment_91, story_comment_92, story_comment_93, story_comment_94, story_comment_95, story_comment_96, story_comment_97, story_comment_98, story_comment_99, story_comment_100, story_comment_101, story_comment_102, story_comment_103, story_comment_104, story_comment_105, story_comment_106, story_comment_107, story_comment_108, story_comment_109, story_comment_110, story_comment_111, story_comment_112, story_comment_113, story_comment_114, story_comment_115, story_comment_116, story_comment_117, story_comment_118, story_comment_119, story_comment_120, story_comment_121, story_comment_122, story_comment_123, story_comment_124, story_comment_125, story_comment_126])

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.

def undo_users():
    if environment== "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tips RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tips"))
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
