const { postgres } = require('../db')

const quizData = [
  {
    specialization: 'Art',
    questions: [
      {
        question: 'Who painted the Mona Lisa?',
        type: 'MCQ',
        options: [
          'Vincent van Gogh',
          'Leonardo da Vinci',
          'Pablo Picasso',
          'Claude Monet'
        ],
        correct: 1
      },
      {
        question:
          'Albrecht D&uuml;rer&#039;s birthplace and place of death were in...',
        type: 'MCQ',
        options: ['Bamberg', 'Augsburg', 'Berlin', 'N&uuml;rnberg'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Geography',
    questions: [
      {
        question: 'Montreal is in which Canadian province?',
        type: 'MCQ',
        options: ['Alberta', 'Ontario', 'Nova Scotia', 'Quebec'],
        correct: 3
      },
      {
        question: 'How many states are in Australia?',
        type: 'MCQ',
        options: ['8', '5', '7', '6'],
        correct: 3
      },
      {
        question:
          'The historical city Timbuktu is located in which West African country?',
        type: 'MCQ',
        options: ['Niger', 'Burkina Faso', 'Senegal', 'Mali'],
        correct: 3
      },
      {
        question: 'The Republic of Malta is the smallest microstate worldwide.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'The Space Needle is located in which city?',
        type: 'MCQ',
        options: ['Vancouver', 'Los Angles', 'Seattle', 'Toronto'],
        correct: 2
      },
      {
        question: 'What is Laos?',
        type: 'MCQ',
        options: ['River', 'Region', 'City', 'Country'],
        correct: 3
      },
      {
        question: 'California is larger than Japan.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'When does Finland celebrate their independence day?',
        type: 'MCQ',
        options: [
          'December 6th',
          'January 2nd',
          'February 8th',
          'November 12th'
        ],
        correct: 0
      },
      {
        question: 'What is the name of New Zealand&#039;s indigenous people?',
        type: 'MCQ',
        options: ['Samoans', 'Polynesians', 'Maori', 'Vikings'],
        correct: 2
      },
      {
        question: 'In which English county is Stonehenge?',
        type: 'MCQ',
        options: ['Somerset', 'Wiltshire', 'Cumbria', 'Herefordshire'],
        correct: 1
      },
      {
        question:
          'Switzerland has four national languages, English being one of them.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'What is the smallest country in the world?',
        type: 'MCQ',
        options: ['Malta', 'Maldives', 'Monaco', 'Vatican City'],
        correct: 3
      },
      {
        question:
          'Rhode Island is actually located on the US mainland, despite its name.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'The Japanese district Akihabara is also known by what nickname?',
        type: 'MCQ',
        options: [
          'Electric Town',
          'Otaku Central ',
          'Moon Walk River',
          'Big Eyes'
        ],
        correct: 0
      },
      {
        question: 'Which city is the capital of the United States of America?',
        type: 'MCQ',
        options: ['Los Angeles', 'Albany', 'Seattle', 'Washington D.C'],
        correct: 3
      },
      {
        question: 'Seoul is the capital of North Korea.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'Which country has the abbreviation &quot;CH&quot;?',
        type: 'MCQ',
        options: ['China', 'Canada', 'Switzerland', 'No Country'],
        correct: 2
      },
      {
        question: 'What is the capital of South Korea?',
        type: 'MCQ',
        options: ['Taegu', 'Kitakyushu', 'Pyongyang', 'Seoul'],
        correct: 3
      },
      {
        question: 'In which city, is the Big Nickel located in Canada?',
        type: 'MCQ',
        options: [
          'Calgary, Alberta',
          'Victoria, British Columbia',
          'Sudbury, Ontario',
          'Halifax, Nova Scotia '
        ],
        correct: 2
      },
      {
        question:
          'The Southeast Asian island of Borneo is politically divided among 3 countries.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'What is the most common climbing route for the second highest mountain in the world, K2?',
        type: 'MCQ',
        options: ['Polish Line', 'Cesen Route', 'Abruzzi Spur', 'Magic Line'],
        correct: 2
      },
      {
        question: 'What is the capital of Indonesia?',
        type: 'MCQ',
        options: ['Palembang', 'Bandung', 'Jakarta', 'Medan'],
        correct: 2
      },
      {
        question: 'Which country was NOT formerly part of Yugoslavia?',
        type: 'MCQ',
        options: ['Serbia', 'Albania', 'Macedonia', 'Croatia'],
        correct: 1
      },
      {
        question:
          'Which of the following Inuit languages was the FIRST to use a unique writing system not based on the Latin alphabet?',
        type: 'MCQ',
        options: ['Inuktitut', 'Inuinnaqtun', 'Greenlandic', 'Inupiat'],
        correct: 0
      },
      {
        question: 'What is the capital of Estonia?',
        type: 'MCQ',
        options: ['Riga', 'Helsinki', 'Tartu', 'Tallinn'],
        correct: 3
      },
      {
        question: 'The land mass of modern day Turkey is called what?',
        type: 'MCQ',
        options: [
          'Anatolia',
          'Ottoma',
          'Ismuth of Ottoma',
          'Ismuth of Anatolia'
        ],
        correct: 0
      },
      {
        question: 'Which is not a country in Africa?',
        type: 'MCQ',
        options: ['Somalia', 'Liberia', 'Guyana', 'Senegal'],
        correct: 2
      },
      {
        question: 'How many countries border Kyrgyzstan?',
        type: 'MCQ',
        options: ['4', '1', '3', '6'],
        correct: 0
      },
      {
        question: 'St. Louis is the capital of the US State Missouri.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Broome is a town in which state of Australia?',
        type: 'MCQ',
        options: [
          'Northern Territory',
          'Western Australia',
          'South Australia',
          'Tasmania'
        ],
        correct: 1
      },
      {
        question: 'Where is Hadrian&#039;s Wall located?',
        type: 'MCQ',
        options: [
          'Dublin, Ireland',
          'Rome, Italy',
          'Carlisle, England',
          'Alexandria, Egypt'
        ],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Science: Computers',
    questions: [
      {
        question: 'Linus Torvalds created Linux and Git.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'The open source program Redis is a relational database server.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'What does GHz stand for?',
        type: 'MCQ',
        options: ['Gigahetz', 'Gigahertz', 'Gigahotz', 'Gigahatz'],
        correct: 1
      },
      {
        question:
          'The Harvard architecture for micro-controllers added which additional bus?',
        type: 'MCQ',
        options: ['Control', 'Address', 'Instruction', 'Data'],
        correct: 2
      },
      {
        question: 'The first computer bug was formed by faulty wires.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: '&quot;HTML&quot; stands for Hypertext Markup Language.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'How many bytes are in a single Kibibyte?',
        type: 'MCQ',
        options: ['2400', '1240', '1000', '1024'],
        correct: 3
      },
      {
        question:
          'When Gmail first launched, how much storage did it provide for your email?',
        type: 'MCQ',
        options: ['Unlimited', '5GB', '512MB', '1GB'],
        correct: 3
      },
      {
        question:
          'Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'In programming, the ternary operator is mostly defined with what symbol(s)?',
        type: 'MCQ',
        options: ['?:', '?', 'if then', '??'],
        correct: 0
      },
      {
        question:
          'If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.',
        type: 'MCQ',
        options: ['JavaScript', 'Binary', 'C++', 'Python'],
        correct: 1
      },
      {
        question: 'MacOS is based on Linux.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'America Online (AOL) started out as which of these online service providers?',
        type: 'MCQ',
        options: ['GEnie', 'Quantum Link', 'Prodigy', 'CompuServe'],
        correct: 1
      },
      {
        question:
          'The teapot often seen in many 3D modeling applications is called what?',
        type: 'MCQ',
        options: [
          '3D Teapot',
          'Utah Teapot',
          'Tennessee Teapot',
          'Pixar Teapot'
        ],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Science & Nature',
    questions: [
      {
        question:
          'It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'On which mission did the Space Shuttle Columbia break up upon re-entry?',
        type: 'MCQ',
        options: ['STS-61-C', 'STS-109', 'STS-107', 'STS-51-L'],
        correct: 2
      },
      {
        question: 'Which Apollo mission was the first one to land on the Moon?',
        type: 'MCQ',
        options: ['Apollo 13', 'Apollo 11', 'Apollo 9', 'Apollo 10'],
        correct: 1
      },
      {
        question: 'What is the largest living organism currently known to man?',
        type: 'MCQ',
        options: [
          'Honey Fungus',
          'The Coral Reef',
          'Redwood Tree',
          'Blue Whale'
        ],
        correct: 0
      },
      {
        question: 'Which chemical element was originally known as Alabamine?',
        type: 'MCQ',
        options: ['Molybdenum', 'Astatine', 'Selenium', 'Antimony'],
        correct: 1
      },
      {
        question:
          'The &#039;Islets of Langerhans&#039; is found in which human organ?',
        type: 'MCQ',
        options: ['Brain', 'Pancreas', 'Kidney', 'Liver'],
        correct: 1
      },
      {
        question:
          'Which planet did the &quot;Viking 1&quot; spacecraft send surface images of, starting in 1976?',
        type: 'MCQ',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correct: 0
      },
      {
        question: 'What is radiation measured in?',
        type: 'MCQ',
        options: ['Kelvin', 'Decibel', 'Gray ', 'Watt'],
        correct: 2
      },
      {
        question:
          'The medical term for the belly button is which of the following?',
        type: 'MCQ',
        options: ['Nares', 'Umbilicus', 'Paxillus', 'Nevus'],
        correct: 1
      },
      {
        question:
          'An organism described as &quot;heliotropic&quot; has a tendancy to move towards which of these things?',
        type: 'MCQ',
        options: ['Pollen', 'Water', 'Light', 'Trees'],
        correct: 2
      },
      {
        question: 'Dry ice is the solid form of what substance?',
        type: 'MCQ',
        options: ['Nitrogen', 'Ammonia', 'Oxygen', 'Carbon dioxide'],
        correct: 3
      },
      {
        question:
          'The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?',
        type: 'MCQ',
        options: ['Neptune', 'Jupiter', 'Venus', 'Uranus'],
        correct: 3
      },
      {
        question: 'Steel is an alloy of Iron and Carbon.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'What do you study if you are studying entomology?',
        type: 'MCQ',
        options: ['Humans', 'the Brain', 'Fish', 'Insects'],
        correct: 3
      },
      {
        question:
          'Rhinoplasty is a surgical procedure on what part of the human body?',
        type: 'MCQ',
        options: ['Ears', 'Neck', 'Chin', 'Nose'],
        correct: 3
      },
      {
        question:
          'What does the term &quot;isolation&quot; refer to in microbiology?',
        type: 'MCQ',
        options: [
          'A lack of nutrition in microenviroments',
          'Testing effects of certain microorganisms in an isolated enviroments, such as caves',
          'The nitrogen level in soil',
          'The separation of a strain from a natural, mixed population of living microbes'
        ],
        correct: 3
      },
      {
        question: 'What are human nails made of?',
        type: 'MCQ',
        options: ['Calcium', 'Bone', 'Keratin', 'Chitin'],
        correct: 2
      },
      {
        question: 'What is Hypernatremia?',
        type: 'MCQ',
        options: [
          'Decrease in blood potassium',
          'Increase in blood glucose',
          'Decrease in blood iron',
          'Increase in blood sodium'
        ],
        correct: 3
      },
      {
        question: 'Botanically speaking, which of these fruits is NOT a berry?',
        type: 'MCQ',
        options: ['Strawberry', 'Banana', 'Blueberry', 'Concord Grape'],
        correct: 0
      },
      {
        question: 'How much radiation does a banana emit?',
        type: 'MCQ',
        options: [
          '0.7 Microsievert',
          '0.5 Microsievert',
          '0.1 Microsievert',
          '0.3 Microsievert'
        ],
        correct: 2
      },
      {
        question: 'Igneous rocks are formed by excessive heat and pressure.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'What is radiation measured in?',
        type: 'MCQ',
        options: ['Decibel', 'Gray ', 'Kelvin', 'Watt'],
        correct: 1
      },
      {
        question: 'Steel is an alloy of Iron and Carbon.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'What is the scientific name for the extinct hominin known as &quot;Lucy&quot;?',
        type: 'MCQ',
        options: [
          'Australopithecus Architeuthis',
          'Australopithecus Afarensis',
          'Australopithecus Antaris',
          'Australopithecus Africanus'
        ],
        correct: 1
      },
      {
        question:
          'When the Falcon Heavy was launched on it&#039;s test flight, what was the only part of the operation that failed?',
        type: 'MCQ',
        options: [
          'Side Booster Landing',
          'Center Core Landing',
          'Deployment of Starman',
          'Ignition and Liftoff'
        ],
        correct: 1
      }
    ]
  },
  {
    specialization: 'General Knowledge',
    questions: [
      {
        question:
          'In 2010, Twitter and the United States Library of Congress partnered together to archive every tweet by American citizens.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'What is real haggis made of?',
        type: 'MCQ',
        options: [
          'Sheep&#039;s Heart, Liver and Lungs',
          'Sheep&#039;s Heart, Kidneys and Lungs',
          'Whole Sheep',
          'Sheep&#039;s Liver, Kidneys and Eyes'
        ],
        correct: 0
      },
      {
        question: 'What is the profession of Elon Musk&#039;s mom, Maye Musk?',
        type: 'MCQ',
        options: ['Biologist', 'Model', 'Musician', 'Professor'],
        correct: 1
      },
      {
        question:
          'Which product did Nokia, the telecommunications company, originally sell?',
        type: 'MCQ',
        options: ['Computers', 'Paper', 'Processors', 'Phones'],
        correct: 1
      },
      {
        question:
          'If someone said &quot;you are olid&quot;, what would they mean?',
        type: 'MCQ',
        options: [
          'Your appearance is repulsive.',
          'You are out of shape/weak.',
          'You smell extremely unpleasant.',
          'You are incomprehensible/an idiot.'
        ],
        correct: 2
      },
      {
        question: 'Pluto is a planet.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'Which church&#039;s interior in Vatican City was designed in 1503 by renaissance architects including Bramante, Michelangelo and Bernini?',
        type: 'MCQ',
        options: [
          'The Duomo of Florence',
          'Catania Cathedral',
          'St. Peter&#039;s Basilica',
          'St. Mark&rsquo;s Basilica'
        ],
        correct: 2
      },
      {
        question:
          'The words &quot;bungalow&quot; and &quot;shampoo&quot; originate from the languages of which country?',
        type: 'MCQ',
        options: ['India', 'Ethiopia', 'Papua New Guinea', 'China'],
        correct: 0
      },
      {
        question: 'What is the French word for &quot;hat&quot;?',
        type: 'MCQ',
        options: ['Chapeau', 'Bonnet', ' &Eacute;charpe', ' Casque'],
        correct: 0
      },
      {
        question: 'Which of the following is not an Ivy League University?',
        type: 'MCQ',
        options: [
          'Harvard',
          'University of Pennsylvania',
          'Princeton',
          'Stanford'
        ],
        correct: 3
      },
      {
        question: 'The Sun rises from the North.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'How long did it take the motorized window washers of the original World Trade Center to clean the entire exterior of the building?',
        type: 'MCQ',
        options: ['2 Months', '1 Month', '1 Week', '3 Weeks'],
        correct: 1
      },
      {
        question: 'What year was Apple Inc. founded?',
        type: 'MCQ',
        options: ['1976', '1978', '1974', '1980'],
        correct: 0
      },
      {
        question:
          'Which slogan did the fast food company, McDonald&#039;s, use before their &quot;I&#039;m Lovin&#039; It&quot; slogan?',
        type: 'MCQ',
        options: [
          'Have It Your Way',
          'Why Pay More!?',
          'We Love to See You Smile',
          'Making People Happy Through Food'
        ],
        correct: 2
      },
      {
        question:
          'Which of the following is the IATA code for Manchester Airport?',
        type: 'MCQ',
        options: ['MAN', 'LHR', 'EGCC', 'EGLL'],
        correct: 0
      },
      {
        question:
          'The scientific name for the Southern Lights is Aurora Australis?',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'The word &quot;astasia&quot; means which of the following?',
        type: 'MCQ',
        options: [
          'The inability to stand up',
          'The inability to make decisions',
          'The inability to concentrate on anything',
          'A feverish desire to rip one&#039;s clothes off'
        ],
        correct: 0
      },
      {
        question:
          'What is the name of the very first video uploaded to YouTube?',
        type: 'MCQ',
        options: [
          'Me at the zoo',
          'carrie rides a truck',
          'Her new puppy from great grandpa vern.',
          'tribute'
        ],
        correct: 0
      },
      {
        question: 'What is Cynophobia the fear of?',
        type: 'MCQ',
        options: ['Germs', 'Flying', 'Dogs', 'Birds'],
        correct: 2
      },
      {
        question: 'What is the Italian word for &quot;tomato&quot;?',
        type: 'MCQ',
        options: ['Pomodoro', 'Peperoncino', 'Cipolla', 'Aglio'],
        correct: 0
      },
      {
        question: 'What is the currency of Poland?',
        type: 'MCQ',
        options: ['Złoty', 'Euro', 'Ruble', 'Krone'],
        correct: 0
      },
      {
        question: 'What is the currency of Poland?',
        type: 'MCQ',
        options: ['Euro', 'Krone', 'Złoty', 'Ruble'],
        correct: 2
      },
      {
        question:
          'According to Fair Works Australia, how long do you have to work to get Long Service Leave?',
        type: 'MCQ',
        options: ['2 years', '8 years', '6 months', '7 years'],
        correct: 3
      },
      {
        question: 'What was the destination of the missing flight MH370?',
        type: 'MCQ',
        options: ['Singapore', 'Kuala Lumpur', 'Beijing', 'Tokyo'],
        correct: 2
      },
      {
        question: 'The word &quot;astasia&quot; means which of the following?',
        type: 'MCQ',
        options: [
          'The inability to stand up',
          'A feverish desire to rip one&#039;s clothes off',
          'The inability to concentrate on anything',
          'The inability to make decisions'
        ],
        correct: 0
      },
      {
        question:
          'Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'Originally another word for poppy, coquelicot is a shade of what?',
        type: 'MCQ',
        options: ['Pink', 'Red', 'Green', 'Blue'],
        correct: 1
      },
      {
        question:
          'According to the United States&#039; CDC, one in how many Americans die annually due to smoking?',
        type: 'MCQ',
        options: ['One hundred', 'Twenty', 'Five', 'Ten'],
        correct: 2
      },
      {
        question:
          'Romanian belongs to the Romance language family, shared with French, Spanish, Portuguese and Italian. ',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'When was the Declaration of Independence approved by the Second Continental Congress?',
        type: 'MCQ',
        options: [
          'June 4, 1776',
          'July 2, 1776',
          'July 4, 1776',
          'May 4, 1776'
        ],
        correct: 2
      },
      {
        question: 'Which film star has his statue in Leicester Square?',
        type: 'MCQ',
        options: [
          'Charlie Chaplin',
          'Rowan Atkinson ',
          'Paul Newman',
          'Alfred Hitchcock'
        ],
        correct: 0
      },
      {
        question:
          'The new One World Trade Center in Manhattan, New York City was designed by which architect? ',
        type: 'MCQ',
        options: [
          'Bjarke Ingels',
          'Michael Arad',
          'David Childs',
          'Fumihiko Maki'
        ],
        correct: 2
      },
      {
        question:
          'Terry Gilliam was an animator that worked with which British comedy group?',
        type: 'MCQ',
        options: [
          'The League of Gentlemen&lrm;',
          'The Penny Dreadfuls',
          'The Goodies&lrm;',
          'Monty Python'
        ],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Entertainment: Film',
    questions: [
      {
        question:
          'In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?',
        type: 'MCQ',
        options: [
          'January 25, 2015',
          'October 21, 2015',
          'July 20, 2015',
          'August 28, 2015'
        ],
        correct: 1
      },
      {
        question:
          'Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?',
        type: 'MCQ',
        options: [
          'Harry Potter',
          'Ted',
          'Spy Kids',
          'Pirates of the Caribbean '
        ],
        correct: 0
      },
      {
        question:
          'Which movie released in 2016 features Superman and Batman fighting?',
        type: 'MCQ',
        options: [
          'Batman v Superman: Superapocalypse',
          'Batman v Superman: Dawn of Justice',
          'Batman v Superman: Knightfall',
          'Batman v Superman: Black of Knight'
        ],
        correct: 1
      },
      {
        question:
          'In the 1994 movie &quot;Speed&quot;, what is the minimum speed the bus must go to prevent to bomb from exploding?',
        type: 'MCQ',
        options: ['70 mph', '60 mph', '50 mph', '40 mph'],
        correct: 2
      },
      {
        question:
          'In the movie &quot;V for Vendetta,&quot; what is the date that masked vigilante &quot;V&quot; urges people to remember?',
        type: 'MCQ',
        options: [
          'November 5th',
          'September 5th',
          'November 4th',
          'November 6th'
        ],
        correct: 0
      },
      {
        question:
          'Which singer is portrayed by Bruce Campbell in the 2002 film &#039;Bubba Ho-Tep&#039;?',
        type: 'MCQ',
        options: [
          'Elvis Presley',
          'Buddy Holly',
          'Johnny Cash',
          'Hank Williams, Sr.'
        ],
        correct: 0
      },
      {
        question:
          'Which actor played the main character in the 1990 film &quot;Edward Scissorhands&quot;?',
        type: 'MCQ',
        options: [
          'Johnny Depp',
          'Ben Stiller',
          ' Clint Eastwood',
          'Leonardo DiCaprio'
        ],
        correct: 0
      },
      {
        question:
          'In the 1971 film &quot;Willy Wonka &amp; the Chocolate Factory&quot;, who played Willy Wonka?',
        type: 'MCQ',
        options: ['Gene Wilder', 'Johnny Depp', 'Peter Ostrum', 'Shia LeBouf'],
        correct: 0
      },
      {
        question:
          'Which star actor was in &quot;Top Gun&quot;, &quot;Jerry Maguire&quot; and &quot;Born on the Fourth of July&quot;?',
        type: 'MCQ',
        options: [
          'John Travolta',
          'Tom Cruise',
          'Kelly McGillis',
          'George Clooney'
        ],
        correct: 1
      },
      {
        question:
          'In Big Hero 6, what were Baymax&#039;s motions modeled after?',
        type: 'MCQ',
        options: [
          'Baby monkeys',
          'Baby bears',
          'Baby ostriches',
          'Baby penguins'
        ],
        correct: 3
      },
      {
        question:
          'In &quot;Jurassic World&quot;, which company purchases InGen and creates Jurassic World?',
        type: 'MCQ',
        options: [
          'International Genetics Incorporated',
          'Biology Synthetics Technologies',
          'Masrani Global Corporation ',
          'International Genetic Technologies'
        ],
        correct: 2
      },
      {
        question:
          'Who plays &quot;Bruce Wayne&quot; in the 2008 movie &quot;The Dark Knight&quot;?',
        type: 'MCQ',
        options: [
          'Christian Bale',
          'Michael Caine',
          'Ron Dean',
          'Heath Ledger'
        ],
        correct: 0
      },
      {
        question:
          'When does &quot;Rogue One: A Star Wars Story&quot; take place chronologically in the series?',
        type: 'MCQ',
        options: [
          'After Episode 6',
          'Between Episode 3 and 4',
          'Before Episode 1',
          'Between Episode 4 and 5'
        ],
        correct: 1
      },
      {
        question:
          'In &quot;Star Trek Nemesis&quot;, why was Praetor Shinzon created?',
        type: 'MCQ',
        options: [
          'To steal the Enterprise',
          'To destroy the Enterprise',
          'To replace Picard as a Romulan Agent',
          'To become Picard&#039;s friend '
        ],
        correct: 2
      },
      {
        question:
          'Which director directed the movie &quot;Pan&#039;s Labyrinth&quot;?',
        type: 'MCQ',
        options: [
          'Alfonso Cuar&oacute;n',
          'Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu',
          ' Alejandro Jodorowsky',
          'Guillermo Del Toro'
        ],
        correct: 3
      },
      {
        question: 'What was the first movie to ever use a Wilhelm Scream?',
        type: 'MCQ',
        options: [
          'The Charge at Feather River',
          'Indiana Jones',
          'Treasure of the Sierra Madre',
          'Distant Drums'
        ],
        correct: 3
      },
      {
        question:
          'Which musical artist had a prominent role in the 2017 film &quot;Kingsman: The Golden Circle&quot;?',
        type: 'MCQ',
        options: ['Rihanna', 'Justin Bieber', 'Lady Gaga', 'Elton John'],
        correct: 3
      },
      {
        question:
          'About how much money did it cost for Tommy Wiseau to make his masterpiece &quot;The Room&quot; (2003)?',
        type: 'MCQ',
        options: ['$6 Million', '$10 Million', '$1 Million', '$20,000'],
        correct: 0
      },
      {
        question:
          'Which singer is portrayed by Bruce Campbell in the 2002 film &#039;Bubba Ho-Tep&#039;?',
        type: 'MCQ',
        options: [
          'Johnny Cash',
          'Buddy Holly',
          'Elvis Presley',
          'Hank Williams, Sr.'
        ],
        correct: 2
      },
      {
        question:
          'Sean Connery wasn&#039;t in &quot;Indiana Jones and the Kingdom of the Crystal Skull&quot; because he found retirement too enjoyable.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'The word &quot;Inception&quot; came from the 2010 blockbuster hit &quot;Inception&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          '&quot;Cube&quot;, &quot;Cube 2: Hypercube&quot; and &quot;Cube Zero&quot; were directed by the same person.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'Which famous singer was portrayed by actor Kevin Spacey in the 2004 biographical film &quot;Beyond the Sea&quot;?',
        type: 'MCQ',
        options: [
          'Frank Sinatra',
          'Louis Armstrong',
          'Dean Martin',
          'Bobby Darin'
        ],
        correct: 3
      },
      {
        question: 'What is the birth name of Michael Keaton?',
        type: 'MCQ',
        options: [
          'Michael Fox',
          'Michael Kane',
          'Michael Douglas',
          'Michael Richards'
        ],
        correct: 2
      },
      {
        question: 'What was the first feature-length computer-animated movie?',
        type: 'MCQ',
        options: ['Lion king', 'Toy Story', 'Tron', '101 Dalmatians'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Video Games',
    questions: [
      {
        question:
          'Which of the following is not a faction in Tom Clancy&#039;s The Division?',
        type: 'MCQ',
        options: ['Last Man Batallion', 'CDC', 'Rikers', 'Cleaners'],
        correct: 1
      },
      {
        question:
          'What is the first primary weapon the player gets in &quot;PAYDAY: The Heist&quot;?',
        type: 'MCQ',
        options: ['Brenner 21', 'AMCAR-4', 'M308', 'Reinbeck'],
        correct: 1
      },
      {
        question:
          'In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.',
        type: 'MCQ',
        options: ['Kashya', 'Valla', 'Malthael', 'Andariel'],
        correct: 3
      },
      {
        question:
          'In Sid Meier&#039;s Civilization V, which World Wonder can only be built in cities on or next to a desert?',
        type: 'MCQ',
        options: [
          'The Pyramids',
          'Mausoleum of Maussollos',
          'Alhambra',
          'Petra'
        ],
        correct: 3
      },
      {
        question:
          'DragonForce&#039;s &#039;Through the Fire and Flames&#039; is widely considered to be the hardest song in the Guitar Hero series.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Which &quot;Fallout: New Vegas&quot; quest is NOT named after a real-life song?',
        type: 'MCQ',
        options: [
          'Come Fly With Me',
          'Ain&#039;t That a Kick in the Head',
          'Ring-a-Ding Ding',
          'They Went That-a-Way'
        ],
        correct: 3
      },
      {
        question:
          'In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'In &quot;Mario &amp; Sonic at the Olympic Games&quot;, characters are split into how many types?',
        type: 'MCQ',
        options: ['6', '3', '4', '5'],
        correct: 2
      },
      {
        question:
          'In the game Pok&eacute;mon Conquest, how many kingdoms make up the region of Ransei?',
        type: 'MCQ',
        options: ['15', '16', '17', '18'],
        correct: 2
      },
      {
        question:
          'Which franchise does the creature &quot;Slowpoke&quot; originate from?',
        type: 'MCQ',
        options: ['Sonic The Hedgehog', 'Dragon Ball', 'Yugioh', 'Pokemon'],
        correct: 3
      },
      {
        question:
          'The first Maxis game to feature the fictional language &quot;Simlish&quot; was The Sims (2000).',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'In what year was &quot;Metal Gear Solid&quot; released in North America?',
        type: 'MCQ',
        options: ['2001', '1998', '1987', '2004'],
        correct: 1
      },
      {
        question:
          'What level do you have to be to get a service medal on CS:GO?',
        type: 'MCQ',
        options: ['40', '50', '20', '30'],
        correct: 0
      },
      {
        question:
          'How many permanent companions are there in the base game version of Fallout: New Vegas?',
        type: 'MCQ',
        options: ['7', '9', '8', '6'],
        correct: 2
      },
      {
        question:
          'In the Half-Life series, Gordon Freeman&#039;s signature weapon is a:',
        type: 'MCQ',
        options: ['Sledgehammer', 'Fiber Wire', 'Crowbar', 'Katana'],
        correct: 2
      },
      {
        question: 'In the National Pokedex what number is Porygon-Z?',
        type: 'MCQ',
        options: ['474', '589', '376', '432'],
        correct: 0
      },
      {
        question:
          'Which of the following is not a prosecutor in the &quot;Ace Attorney&quot; video game series?',
        type: 'MCQ',
        options: [
          'Jake Marshall',
          'Jacques Portsman',
          'Godot',
          'Miles Edgeworth'
        ],
        correct: 0
      },
      {
        question:
          'Who was the voice actor for Snake in Metal Gear Solid V: The Phantom Pain?',
        type: 'MCQ',
        options: [
          'Norman Reedus',
          'Hideo Kojima',
          'David Hayter',
          'Kiefer Sutherland'
        ],
        correct: 3
      },
      {
        question:
          'In the &quot;Little Lost Girl&quot; Easter Egg in Call of Duty: Black Ops II, what&#039;s the last step required for the achievement?',
        type: 'MCQ',
        options: [
          'Skewer the Winged Beast',
          'Freedom',
          'Ascend from Darkness',
          'Raise Hell'
        ],
        correct: 3
      },
      {
        question: 'Which one of these games came out first?',
        type: 'MCQ',
        options: ['Starbound', 'Factorio', 'Minecraft', 'Terraria'],
        correct: 3
      },
      {
        question:
          'Where does &quot;The Legend of Zelda: Majora&#039;s Mask&quot; take place?',
        type: 'MCQ',
        options: ['Besaid', 'Termina', 'Gysahl', 'Hyrule'],
        correct: 1
      },
      {
        question:
          '&quot;Metal Gear Solid 3: Snake Eater&quot; takes place on Shadow Moses Island.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'In &quot;Overwatch,&quot; what is the hero McCree&#039;s full name?',
        type: 'MCQ',
        options: [
          'Gabriel Reyes',
          'Jesse McCree',
          'Jamison &quot;Deadeye&quot; Fawkes',
          'Jack &quot;McCree&quot; Morrison'
        ],
        correct: 1
      },
      {
        question: 'What was the world&#039;s first handheld game device?',
        type: 'MCQ',
        options: [
          'Mattel Auto Race',
          'Game &amp; Watch',
          'Game Boy',
          'Microvision'
        ],
        correct: 0
      },
      {
        question:
          'In &quot;The Binding of Isaac&quot;, which item instantly kills Mom and Mom&#039;s Heart?',
        type: 'MCQ',
        options: ['Book of Shadows', 'The Bible', 'The Halo', 'Brimstone'],
        correct: 1
      },
      {
        question:
          '&quot;Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'In Diablo lore, this lesser evil spawned from one of the seven heads of Tathamet, and was known as the Maiden of Anguish.',
        type: 'MCQ',
        options: ['Kashya', 'Valla', 'Malthael', 'Andariel'],
        correct: 3
      },
      {
        question:
          'Which of the following is NOT a summon in the game &quot;South Park: The Stick of Truth&quot;?',
        type: 'MCQ',
        options: ['Mr. Slave', 'Mr. Hankey', 'Jesus', 'Towelie'],
        correct: 3
      },
      {
        question:
          'How many times do you fight the Imprisoned in The Legend of Zelda: Skyward Sword?',
        type: 'MCQ',
        options: ['3', '2', '4', '5'],
        correct: 0
      },
      {
        question:
          'Which Overwatch character says the line &quot;Heroes never die!&quot;?',
        type: 'MCQ',
        options: ['Sonic', 'Reaper', 'Mercy', 'Ana'],
        correct: 2
      },
      {
        question:
          'The game Garry&#039;s Mod originally took assets and codes from the popular Half Life 2 mod JBmod.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'In the game Dead by Daylight, the killer Michael Myers is refered to as &quot;The Shape&quot;.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'Who is the half-demon character in Divinity: Original Sin 2 who you talk to to transition between acts?',
        type: 'MCQ',
        options: ['Gawin', 'Exter', 'Malady', 'Meister Siva'],
        correct: 2
      },
      {
        question:
          'In &quot;Fallout 4&quot; which faction is not present in the game?',
        type: 'MCQ',
        options: [
          'The Institute',
          'The Minutemen',
          'The Brotherhood of Steel',
          'The Enclave'
        ],
        correct: 3
      },
      {
        question: 'What was the first .hack game?',
        type: 'MCQ',
        options: [
          '.hack//Sign',
          '.hack//Zero',
          '.hack//Liminality',
          '.hack//Infection'
        ],
        correct: 3
      },
      {
        question: 'What block in Minecraft has the highest blast resistance?',
        type: 'MCQ',
        options: ['Bedrock', 'Obsidian', 'Barrier', 'Block of Diamond'],
        correct: 2
      },
      {
        question:
          'In &quot;The Binding of Isaac&quot;, which item instantly kills Mom and Mom&#039;s Heart?',
        type: 'MCQ',
        options: ['Book of Shadows', 'Brimstone', 'The Bible', 'The Halo'],
        correct: 2
      },
      {
        question:
          '&quot;Return to Castle Wolfenstein&quot; was the only game of the Wolfenstein series where you don&#039;t play as William &quot;B.J.&quot; Blazkowicz.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'What was the original release date of Grand Theft Auto V?',
        type: 'MCQ',
        options: [
          'April 14, 2015',
          'November 18, 2014',
          'August 17, 2013',
          'September 17, 2013'
        ],
        correct: 3
      },
      {
        question:
          'The main character in the &quot;Half-Life&quot; franchise is named Morgan Freeman.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'DragonForce&#039;s &#039;Through the Fire and Flames&#039; is widely considered to be the hardest song in the Guitar Hero series.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'Which franchise does the creature &quot;Slowpoke&quot; originate from?',
        type: 'MCQ',
        options: ['Yugioh', 'Sonic The Hedgehog', 'Dragon Ball', 'Pokemon'],
        correct: 3
      },
      {
        question:
          'In the 2002 video game &quot;Kingdom Hearts&quot;, how many playable worlds were there?',
        type: 'MCQ',
        options: ['14', '16', '13', '11'],
        correct: 0
      },
      {
        question:
          'Which of these is NOT a playable character race in the video game &quot;Starbound&quot;?',
        type: 'MCQ',
        options: ['Floran', 'Hylotl', 'Novakid', 'Fenerox'],
        correct: 3
      },
      {
        question:
          'What&#039;s the name of the halloween-related Sims 4 Stuff Pack released September 29th, 2015?',
        type: 'MCQ',
        options: [
          'Fearful Frights',
          'Ghosts n&#039; Ghouls',
          'Spooky Stuff',
          'Nerving Nights'
        ],
        correct: 2
      },
      {
        question:
          'In Counter Strike: Global Offensive, what is the code implanted onto the C4 as the Terrorists plant the bomb?',
        type: 'MCQ',
        options: ['7890728', '7256380', '7726354', '7355608'],
        correct: 3
      },
      {
        question:
          'In the fighting game &quot;Skullgirls,&quot; which character utilizes a folding chair called the &quot;Hurting&quot; as a weapon?',
        type: 'MCQ',
        options: ['Cerebella', 'Beowulf', 'Big Band', 'Squigly'],
        correct: 1
      },
      {
        question:
          'In the title of the game &quot;Luigi&#039;s Mansion&quot;, what is the only letter to not appear with a pair of eyes in it?',
        type: 'MCQ',
        options: ['n', 'i', 's', 'm'],
        correct: 2
      },
      {
        question: 'Which of the following has Jennifer Taylor NOT voiced?',
        type: 'MCQ',
        options: ['Princess Peach', 'Cortana', 'Zoey', 'Sarah Kerrigan'],
        correct: 3
      },
      {
        question:
          'On which planet does the game Freedom Planet (2014) take place?',
        type: 'MCQ',
        options: ['Avalice', 'Galaxytrail', 'Shang Mu', 'Freedom'],
        correct: 0
      },
      {
        question:
          'What Pok&eacute;mon&#039;s Base Stat Total does not change when it evolves?',
        type: 'MCQ',
        options: ['Scyther', 'Larvesta', 'Pikachu', 'Sneasel'],
        correct: 0
      },
      {
        question:
          'What is the name of a popular franchise that includes placing blocks down and surviving in an open world? ',
        type: 'MCQ',
        options: ['Roblox', 'Grand Theft Auto V', 'Unturned', 'Minecraft'],
        correct: 3
      },
      {
        question: 'What was the world&#039;s first handheld game device?',
        type: 'MCQ',
        options: [
          'Mattel Auto Race',
          'Microvision',
          'Game Boy',
          'Game &amp; Watch'
        ],
        correct: 0
      },
      {
        question:
          'The voice actor for which Portal 2 character was not a TV or film actor prior to the game?',
        type: 'MCQ',
        options: ['Cave Johnson', 'GLaDOS', 'Atlas / P-Body', 'Wheatley'],
        correct: 1
      },
      {
        question:
          'What is the name of the alien species introduced in Shadow the Hedgehog (2005)?',
        type: 'MCQ',
        options: ['The Swarm', 'The Eclipse', 'Black Arms', 'Black Hive'],
        correct: 2
      },
      {
        question: 'When was &quot;Luigi&#039;s Mansion 3&quot; released?',
        type: 'MCQ',
        options: [
          'January 13th, 2019',
          'October 1st, 2019',
          'September 6th, 2018',
          'October 31st, 2019'
        ],
        correct: 3
      },
      {
        question:
          'Who is the English voice actor for Sora from the Kingdom Hearts series?',
        type: 'MCQ',
        options: [
          'Miyu Irino',
          'Haley Joel Osment',
          'Kōki Uchiyama',
          'Jesse McCartney'
        ],
        correct: 1
      },
      {
        question: 'Which Kirby game first introduced Copy Abilities?',
        type: 'MCQ',
        options: [
          'Kirby&#039;s Adventure',
          'Kirby Super Star',
          'Kirby&#039;s Dream Land',
          'Kirby&#039;s Dream Land 2'
        ],
        correct: 0
      },
      {
        question:
          'Which of the following Call of Duty games was a PS3 launch title?',
        type: 'MCQ',
        options: [
          'Call of Duty 3',
          'Call of Duty 4: Modern Warfare',
          'Call of Duty: World at War',
          'Call of Duty: Roads to Victory'
        ],
        correct: 0
      },
      {
        question:
          'Which car is NOT featured in &quot;Need for Speed: Hot Pursuit 2&quot;?',
        type: 'MCQ',
        options: ['Toyota MR2', 'Ford Crown Victoria', 'BMW Z8', 'McLaren F1'],
        correct: 0
      },
      {
        question:
          'The game &quot;Jetpack Joyride&quot; was created by &quot;Redbrick Studios&quot;.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'In the game &quot;Overwatch,&quot; what are the names of the two Australian criminals from the Junkers faction?',
        type: 'MCQ',
        options: [
          'Junkrat and Roadhog',
          'Ana and Pharah',
          'McCree and Deadeye',
          'Roadrat and Junkhog'
        ],
        correct: 0
      },
      {
        question: 'What was the first weapon pack for &quot;PAYDAY 2&quot;?',
        type: 'MCQ',
        options: [
          'The Gage Weapon Pack #1',
          'The Gage Historical Pack',
          'The Gage Chivalry Pack',
          'The Overkill Pack'
        ],
        correct: 0
      },
      {
        question:
          'In the game &quot;Brawlhalla&quot;, what species is the character B&ouml;dvar is?',
        type: 'MCQ',
        options: [
          'A Human',
          'Half Human / Half Bear',
          'Half Tiger /  Half Human',
          'Half Wolf / Half Bear'
        ],
        correct: 1
      },
      {
        question:
          'In the &quot;Devil May Cry&quot; franchise, which game is chronologically first?',
        type: 'MCQ',
        options: [
          'Devil May Cry 2',
          'Devil May Cry',
          'Devil May Cry 3: Dante&#039;s Awakening ',
          'Devil May Cry 4'
        ],
        correct: 2
      },
      {
        question:
          '&quot;Strangereal&quot; is a fictitious Earth-like world for which game series?',
        type: 'MCQ',
        options: ['Deus Ex', 'Ace Combat', 'Jet Set Radio', 'Crimson Skies'],
        correct: 1
      },
      {
        question: 'Which of these Pok&eacute;mon cannot learn Surf?',
        type: 'MCQ',
        options: ['Linoone', 'Tauros', 'Nidoking', 'Arbok'],
        correct: 3
      },
      {
        question:
          'In the &quot;S.T.A.L.K.E.R.&quot; series, the Freedom faction wishes to destroy the supernatural area known as  &quot;the Zone&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'What is the name of the machine that fails and essentially dooms mankind in the beginning of the first Half-Life game?',
        type: 'MCQ',
        options: [
          'Dark fusion resonator',
          'Anti-mass spectrometer',
          'Dark fusion reactor',
          'Oscillation generator'
        ],
        correct: 1
      },
      {
        question: 'What is the subtitle for Gran Turismo 3?',
        type: 'MCQ',
        options: ['A-Spec', 'Drive', 'Nitro', 'Championship'],
        correct: 0
      },
      {
        question:
          'The most graphically violent game to precede the creation of the ESRB (Entertainment Software Rating Board) was...',
        type: 'MCQ',
        options: ['Resident Evil', 'Duke Nukem', 'Doom', 'Mortal Kombat'],
        correct: 3
      },
      {
        question: 'Who is the creator of Touhou project?',
        type: 'MCQ',
        options: ['Jun', 'Zun', 'Twilight Frontier', 'Tasofro'],
        correct: 1
      },
      {
        question:
          'In &quot;Call Of Duty: Zombies&quot;, what is the name of the machine that upgrades weapons?',
        type: 'MCQ',
        options: ['Gersch Device', 'Wunderfizz', 'Mule Kick', 'Pack-A-Punch'],
        correct: 3
      },
      {
        question:
          'In the co-op shooter Payday 2, which contact helps you break out Hoxton?',
        type: 'MCQ',
        options: ['The Butcher', 'The Elephant', 'Vlad', 'The Dentist'],
        correct: 3
      },
      {
        question:
          'Ellen McLain, the voice of GLaDOS in the Portal game series, is married to the voice actor for which Team Fortress 2 character?',
        type: 'MCQ',
        options: ['Soldier', 'Heavy', 'Sniper', 'Scout'],
        correct: 2
      },
      {
        question:
          'Who is the half-demon character in Divinity: Original Sin 2 who you talk to to transition between acts?',
        type: 'MCQ',
        options: ['Malady', 'Meister Siva', 'Gawin', 'Exter'],
        correct: 0
      },
      {
        question: 'Which city hosted the CS:GO Dreamhack Open 2015?',
        type: 'MCQ',
        options: ['Cologne', 'Cluj-Napoca', 'London', 'Atlanta'],
        correct: 1
      },
      {
        question:
          'In the video game franchise &quot;Halo&quot;, what is the UNSC&#039;s main opposing faction called?',
        type: 'MCQ',
        options: [
          'The Reckoning',
          'The Slaughterers',
          'The Peoples',
          'The Covenant'
        ],
        correct: 3
      },
      {
        question:
          'How many Chaos Emeralds can you collect in the first Sonic The Hedgehog?',
        type: 'MCQ',
        options: ['Five', 'Eight', 'Six', 'Seven'],
        correct: 2
      },
      {
        question: 'Who composed the soundtrack for the game VVVVVV?',
        type: 'MCQ',
        options: [
          'Magnus P&aring;lsson',
          'Danny Baranowsky',
          'Joel Zimmerman',
          'Terry Cavanagh'
        ],
        correct: 0
      },
      {
        question:
          'Which of these online games was originally named LindenWorld in it&#039;s early development?',
        type: 'MCQ',
        options: ['SecondLife', 'IMVU', 'HabboHotel', 'ActiveWorlds'],
        correct: 0
      },
      {
        question:
          'Which of these Counter-Strike maps is a bomb defuse scenario?',
        type: 'MCQ',
        options: ['Havana', '747', 'Oilrig', 'Prodigy'],
        correct: 3
      },
      {
        question:
          'The &quot;Day of Defeat&quot; series of games take place during which war?',
        type: 'MCQ',
        options: ['Iraq War', 'World War II', 'Vietnam War', 'World War I'],
        correct: 1
      },
      {
        question:
          'In Portal 2, how did CEO of Aperture Science, Cave Johnson, presumably die?',
        type: 'MCQ',
        options: [
          'Accidentally sending a portal to the Moon',
          'Moon Rock Poisoning',
          'Slipped in the shower',
          'Asbestos Poisoning'
        ],
        correct: 1
      },
      {
        question: 'In Need for Speed: Underground, what car does Eddie drive?',
        type: 'MCQ',
        options: [
          'Nissan Skyline GT-R (R34)',
          'Acura Integra Type R',
          'Mazda RX-7 FD3S',
          'Subaru Impreza 2.5 RS'
        ],
        correct: 0
      },
      {
        question:
          'In the game &quot;Fire Emblem: Shadow Dragon&quot;, what is the central protagonist&#039;s name?',
        type: 'MCQ',
        options: ['Eliwood', 'Marth', 'Robin', 'Roy'],
        correct: 1
      },
      {
        question:
          'How many games in the Crash Bandicoot series were released on the original Playstation?',
        type: 'MCQ',
        options: ['6', '3', '5', '4'],
        correct: 2
      },
      {
        question: 'When was the first Call of Duty title released?',
        type: 'MCQ',
        options: [
          'July 18, 2004',
          'October 29, 2003',
          'November 14, 2002',
          'December 1, 2003'
        ],
        correct: 1
      },
      {
        question:
          'What is the main character&#039;s name in &quot;Braid&quot;?',
        type: 'MCQ',
        options: ['James', 'Tim', 'Boregard', 'Jackson'],
        correct: 1
      },
      {
        question:
          'Gordon Freeman, the protagonist of &quot;Half-Life&quot;, is said to have once had a ponytail.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'In &quot;Yo! Noid 2,&quot; The Noid can perform what special move?',
        type: 'MCQ',
        options: ['Dodge Roll', 'Pizza Throw', 'Spin Dash', 'Dab'],
        correct: 3
      },
      {
        question:
          'In Terraria, which debuff does the ankh charm not provide immunity to?',
        type: 'MCQ',
        options: ['Slow', 'Venom', 'Cursed', 'Bleeding'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Sports',
    questions: [
      {
        question:
          'Which portuguese island is soccer player Cristiano Ronaldo from?',
        type: 'MCQ',
        options: ['Madeira', 'Santa Maria', 'Porto Santo', 'Terceira'],
        correct: 0
      },
      {
        question:
          'During Wimbledon, spectators in the grounds can buy the tennis balls that have been used in matches.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'What team did England beat to win in the 1966 World Cup final?',
        type: 'MCQ',
        options: ['Portugal', 'Soviet Union', 'Brazil', 'West Germany'],
        correct: 3
      },
      {
        question:
          'What is the nickname of Northampton town&#039;s rugby union club?',
        type: 'MCQ',
        options: ['Saints', 'Harlequins', 'Wasps', 'Saracens'],
        correct: 0
      },
      {
        question: 'Who won the 2011 Stanley Cup?',
        type: 'MCQ',
        options: [
          'Montreal Canadiens',
          'New York Rangers',
          'Toronto Maple Leafs',
          'Boston Bruins'
        ],
        correct: 3
      },
      {
        question: 'What team won the 2016 MLS Cup?',
        type: 'MCQ',
        options: [
          'Montreal Impact',
          'Colorado Rapids',
          'Toronto FC',
          'Seattle Sounders'
        ],
        correct: 3
      },
      {
        question: 'Which year was the third Super Bowl held?',
        type: 'MCQ',
        options: ['1970', '1969', '1971', '1968'],
        correct: 1
      },
      {
        question: 'Who won the 2018 Monaco Grand Prix?',
        type: 'MCQ',
        options: [
          'Kimi Raikkonen',
          'Daniel Ricciardo',
          'Sebastian Vettel',
          'Lewis Hamilton'
        ],
        correct: 1
      },
      {
        question:
          'How many scoring zones are there on a conventional dart board?',
        type: 'MCQ',
        options: ['82', '62', '102', '42'],
        correct: 0
      },
      {
        question: 'What is the oldest team in the NFL?',
        type: 'MCQ',
        options: [
          'Arizona Cardinals',
          'Chicago Bears',
          'New York Giants',
          'Green Bay Packers'
        ],
        correct: 0
      },
      {
        question:
          'Which basketball team has attended the most NBA grand finals?',
        type: 'MCQ',
        options: [
          'Philadelphia 76ers',
          'Boston Celtics',
          'Los Angeles Lakers',
          'Golden State Warriors'
        ],
        correct: 2
      },
      {
        question:
          'Which soccer team won the Copa Am&eacute;rica Centenario 2016?',
        type: 'MCQ',
        options: ['Argentina', 'Colombia', 'Brazil', 'Chile'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Politics',
    questions: [
      {
        question:
          'What was the personal nickname of the 40th Governor of the US State Louisiana, Huey Long?',
        type: 'MCQ',
        options: ['The Kingfish', 'The Champ', 'The Oracle', 'The Hoot Owl'],
        correct: 0
      },
      {
        question:
          'Who was elected leader of the UK Labour Party in September 2015?',
        type: 'MCQ',
        options: [
          'David Cameron',
          'Jeremy Corbyn',
          'Ed Miliband',
          'Theresa May'
        ],
        correct: 1
      },
      {
        question: 'In 2016, the United Kingdom voted to stay in the EU.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'Which of the following United States Presidents served the shortest term in office?',
        type: 'MCQ',
        options: [
          'Zachary Taylor',
          'William Henry Harrison',
          'Warren G. Harding',
          'James A. Garfield'
        ],
        correct: 1
      },
      {
        question:
          'George W. Bush lost the popular vote in the 2004 United States presidential election.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'The State of Queensland, Australia voted NO to a referendum for daylight savings in 1992.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Former president Theodore Roosevelt (1900-1908)  ran for another term under the Progressive Party in 1912.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Which of the following Argentinian presidents was elected in 2015?',
        type: 'MCQ',
        options: [
          'Cristina Fernandez de Kirchner',
          'Juan Domingo Peron',
          'Nestor Kirchner',
          'Mauricio Macri'
        ],
        correct: 3
      },
      {
        question:
          '&quot;Yes, America Can!&quot; was this United States politician&#039;s de facto campaign slogan in 2004.',
        type: 'MCQ',
        options: ['Barack Obama', 'John Kerry', 'Al Gore', 'George W. Bush'],
        correct: 3
      },
      {
        question:
          'Jeb Bush was elected as Governor of Florida in 2002, starting his political career.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Entertainment: Board Games',
    questions: [
      {
        question:
          'What Magic: The Gathering card&#039;s flavor text is just &#039;Ribbit.&#039;?',
        type: 'MCQ',
        options: ['Frogmite', 'Turn to Frog', 'Bloated Toad', 'Spore Frog'],
        correct: 1
      },
      {
        question:
          'In Magic: The Gathering, what was a tribute card to Jamie Wakefield&#039;s late wife Marilyn, who loved horses?',
        type: 'MCQ',
        options: [
          'Timbermare',
          'Loyal Pegasus',
          'Sungrace Pegasus',
          'Vryn Wingmare'
        ],
        correct: 0
      },
      {
        question:
          'Europa Universalis is a strategy video game based on which French board game?',
        type: 'MCQ',
        options: [
          'Europa Universalis',
          'Europa!',
          'Power in Europe',
          'Europe and the Universe'
        ],
        correct: 0
      },
      {
        question:
          'Which card is on the cover of the Beta rulebook of &quot;Magic: The Gathering&quot;?',
        type: 'MCQ',
        options: ['Island', 'Bog Wraith', 'Rock Hydra', 'Elvish Archers'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Animals',
    questions: [
      {
        question: 'What is the scientific name of the cheetah?',
        type: 'MCQ',
        options: [
          'Felis catus',
          'Acinonyx jubatus',
          'Lynx rufus',
          'Panthera onca'
        ],
        correct: 1
      },
      {
        question: 'What is the Gray Wolf&#039;s scientific name?',
        type: 'MCQ',
        options: [
          'Canis Lupus Lycaon',
          'Canis Latrans',
          'Canis Lupus',
          'Canis Aureus'
        ],
        correct: 2
      },
      {
        question: 'What type of animal is a natterjack?',
        type: 'MCQ',
        options: ['Fish', 'Insect', 'Bird', 'Toad'],
        correct: 3
      },
      {
        question: 'What is the scientific name of the cheetah?',
        type: 'MCQ',
        options: [
          'Felis catus',
          'Panthera onca',
          'Acinonyx jubatus',
          'Lynx rufus'
        ],
        correct: 2
      },
      {
        question:
          'The Ceratosaurus, a dinosaur known for having a horn on the top of its nose, is also known to be a decendent of the Tyrannosaurus Rex.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'What is the collective noun for rats?',
        type: 'MCQ',
        options: ['Mischief', 'Pack', 'Race', 'Drift'],
        correct: 0
      },
      {
        question: 'Rabbits are rodents.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'The internet browser Firefox is named after the Red Panda.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Entertainment: Japanese Anime & Manga',
    questions: [
      {
        question:
          'In the &quot;Melancholy of Haruhi Suzumiya&quot; series, the narrator goes by the nickname Kyon.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'In the &quot;Sailor Moon&quot; series, what is Sailor Jupiter&#039;s civilian name?',
        type: 'MCQ',
        options: ['Makoto Kino', 'Usagi Tsukino', 'Minako Aino', 'Rei Hino'],
        correct: 0
      },
      {
        question:
          'Which of the stands from &quot;JoJo&#039;s Bizarre Adventure&quot; mimics the likeness of a tomato?',
        type: 'MCQ',
        options: [
          'Nut King Call',
          'Red Hot Chili Pepper',
          'Cream Starter',
          'Pearl Jam'
        ],
        correct: 3
      },
      {
        question: 'The &quot;To Love-Ru&quot; Manga was started in what year?',
        type: 'MCQ',
        options: ['2005', '2004', '2007', '2006'],
        correct: 3
      },
      {
        question:
          'What was the reason for the banning of episode 35 of the &quot;Pok&eacute;mon Original Series&quot; Anime?',
        type: 'MCQ',
        options: ['Jynx', 'Strong Violence', 'Gun Usage', 'Flashing Images'],
        correct: 2
      },
      {
        question:
          'What is the last name of Edward and Alphonse in the Fullmetal Alchemist series.',
        type: 'MCQ',
        options: ['Ellis', 'Elwood', 'Elric', 'Eliek'],
        correct: 2
      },
      {
        question:
          'What is the name of the device that allows for infinite energy in the anime &quot;Dimension W&quot;?',
        type: 'MCQ',
        options: ['Collectors', 'Tesla', 'Wires', 'Coils'],
        correct: 3
      },
      {
        question:
          'In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?',
        type: 'MCQ',
        options: ['Mikan', 'Haruna', 'Rito', 'Lala'],
        correct: 2
      },
      {
        question:
          'In JoJo&#039;s Bizarre Adventure, winch character is able to accelerate time?',
        type: 'MCQ',
        options: ['Kujo Jotaro', 'Jolyne Cujoh', 'Jotaro Kujo', 'Enrico Pucci'],
        correct: 3
      },
      {
        question: 'In the anime Noragami who is one of the main protagonists?',
        type: 'MCQ',
        options: ['Yukine', 'Mineha', 'Karuha', 'Mayu'],
        correct: 0
      },
      {
        question:
          'Krusty is the guild master of which guild in &quot;Log Horizon&quot;?',
        type: 'MCQ',
        options: [
          'West Wind Brigade',
          'D. D. D',
          'Oceanic Systems (Marine Agency)',
          'Silver Sword'
        ],
        correct: 1
      },
      {
        question: 'The &quot;To Love-Ru&quot; Manga was started in what year?',
        type: 'MCQ',
        options: ['2006', '2004', '2007', '2005'],
        correct: 0
      },
      {
        question:
          'In the anime, &quot;Super Sonico&quot;, what is Super Sonico&#039;s favorite food?',
        type: 'MCQ',
        options: ['Macroons', 'Pizza', 'Chips', 'Ice Cream'],
        correct: 0
      },
      {
        question:
          'Which one of these Manga titles was not created by Urasawa Naoki?',
        type: 'MCQ',
        options: [
          '20th Century Boys',
          'My Father&#039;s Journal',
          'Billy Bat',
          'Monster'
        ],
        correct: 1
      },
      {
        question:
          'In &quot;To Love-Ru&quot;, who is the first to hear of Yami&#039;s past from her?',
        type: 'MCQ',
        options: ['Haruna', 'Mikan', 'Lala', 'Rito'],
        correct: 3
      },
      {
        question:
          'Which animation studio produced the anime adaptation of &quot;xxxHolic&quot;?',
        type: 'MCQ',
        options: ['Sunrise', 'Kyoto Animation', 'Production I.G', 'Xebec'],
        correct: 2
      },
      {
        question:
          'In the ADV (English) Dub of the anime &quot;Ghost Stories&quot;, which character is portrayed as a Pentacostal Christian?',
        type: 'MCQ',
        options: [
          'Momoko Koigakubo',
          'Satsuki Miyanoshita',
          'Mio Itai',
          'Hajime Aoyama'
        ],
        correct: 0
      },
      {
        question: 'Which studio animated Afro Samurai?',
        type: 'MCQ',
        options: ['Gonzo', 'Production I.G', 'xebec', 'Kyoto Animation'],
        correct: 0
      },
      {
        question:
          'In Digimon, what is the Japanese name for the final evolutionary stage?',
        type: 'MCQ',
        options: ['Ultimate', 'Champion', 'Adult', 'Mega'],
        correct: 0
      },
      {
        question: 'What studio animated Ouran High School Host Club?',
        type: 'MCQ',
        options: ['xebec', 'Production I.G', 'Bones', 'Kyoto Animation'],
        correct: 2
      },
      {
        question: 'In the Overlord Anime who was Cocytus made by?',
        type: 'MCQ',
        options: [
          'Bukubukuchagama',
          'Ulbert Alain Odle',
          'Warrior Takemikazuchi',
          'Peroroncino'
        ],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Entertainment: Music',
    questions: [
      {
        question:
          'What musician made the song &quot;Fuckin` Perfect&quot; in 2010?',
        type: 'MCQ',
        options: ['Koven', 'P!nk', 'Mitis', 'Adam lambert'],
        correct: 1
      },
      {
        question:
          'Who is the vocalist and frontman of rock band &quot;Guns N&#039; Roses&quot;?',
        type: 'MCQ',
        options: ['Slash', 'Axl Rose', 'Kurt Cobain', 'Bono'],
        correct: 1
      },
      {
        question:
          'Sting, the lead vocalist of The Police, primarily plays what instrument?',
        type: 'MCQ',
        options: ['Bass Guitar', 'Drums', 'Guitar', 'Keyboards'],
        correct: 0
      },
      {
        question:
          'Arcade Fire&#039;s &#039;The Suburbs&#039; won the Album of the Year award in the 2011 Grammys.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'Who was featured in the song &quot;Words&quot; by Feint? ',
        type: 'MCQ',
        options: ['Anna Yvette ', 'Laura Brehm', 'Veela', 'Danyka Nadeau'],
        correct: 1
      },
      {
        question:
          'Who wrote the Sinead O`Connor hit &#039;Nothing Compares 2 U&#039;?',
        type: 'MCQ',
        options: ['Prince', 'Rick James', 'Cameo', 'Michael Jackson'],
        correct: 0
      },
      {
        question: 'Where did the British Boy Band &quot;Bros&quot; come from?',
        type: 'MCQ',
        options: ['Bagshot', 'Camberley', 'Aldershot', 'Guildford'],
        correct: 1
      },
      {
        question: 'Which band recorded the album &quot;Parallel Lines&quot;?',
        type: 'MCQ',
        options: ['The Police', 'Paramore', 'Coldplay', 'Blondie'],
        correct: 3
      },
      {
        question:
          '&#039;74&ndash;&#039;75 is a 1993 single from the album Ring by what American band?',
        type: 'MCQ',
        options: ['The Bangles', 'R.E.M.', 'The Connells', 'The Ocean Blue'],
        correct: 2
      },
      {
        question:
          'What musician made the song &quot;Fuckin` Perfect&quot; in 2010?',
        type: 'MCQ',
        options: ['P!nk', 'Adam lambert', 'Koven', 'Mitis'],
        correct: 0
      },
      {
        question:
          'According to a song by Belinda Carlisle, Heaven is a place on what?',
        type: 'MCQ',
        options: ['Uranus', 'Earth', 'Venus', 'Mars'],
        correct: 1
      },
      {
        question: 'A Saxophone is a brass instrument.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Pink Guy&#039;s debut album was &quot;Pink Season&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'Which singer was featured in Swedish producer Avicii&#039;s song &quot;Wake Me Up&quot;?',
        type: 'MCQ',
        options: [
          'Pharrell Williams',
          'John Legend',
          'CeeLo Green',
          'Aloe Blacc'
        ],
        correct: 3
      },
      {
        question:
          'Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?',
        type: 'MCQ',
        options: [
          'Unknown Pleasures',
          'The Velvet Underground &amp; Nico',
          'The Dark Side of the Moon',
          'London Calling'
        ],
        correct: 0
      },
      {
        question:
          'The Red Hot Chili Pepper song &quot;Give It Away&quot; is from what album?',
        type: 'MCQ',
        options: [
          'By the Way',
          'Blood Sugar Sex Magik',
          'One Hot Minute',
          'Stadium Arcadium'
        ],
        correct: 1
      },
      {
        question:
          'What musician made the song &quot;Fuckin` Perfect&quot; in 2010?',
        type: 'MCQ',
        options: ['Adam lambert', 'P!nk', 'Mitis', 'Koven'],
        correct: 1
      },
      {
        question:
          'Bj&ouml;rk&#039;s &quot;Unison&quot; contains a sample of which Oval song?',
        type: 'MCQ',
        options: ['Panorama', 'Aero Deck', 'Textuell', 'Do While'],
        correct: 1
      },
      {
        question:
          'Which of these is NOT the name of an album released by Miami-based producer DJ Khaled?',
        type: 'MCQ',
        options: [
          'Suffering From Success',
          'Don&#039;t Ever Play Yourself',
          'Major Key',
          'I Changed A Lot'
        ],
        correct: 1
      },
      {
        question: 'What&#039;s the most common time signature for rock songs?',
        type: 'MCQ',
        options: ['1/2', '4/4', '8/12', '2/4'],
        correct: 1
      },
      {
        question:
          'Which punk rock band released hit songs such as &quot;Californication&quot;, &quot;Can&#039;t Stop&quot; and &quot;Under the Bridge&quot;?',
        type: 'MCQ',
        options: [
          'Red Hot Chilli Peppers',
          'Foo Fighters',
          'Linkin Park',
          'Green Day'
        ],
        correct: 0
      },
      {
        question: 'Pamina and Papageno are characters in what Mozart opera?',
        type: 'MCQ',
        options: [
          'The Magic Flute',
          'The Goose of Cairo',
          'The Impresario',
          'The Marriage of Figaro'
        ],
        correct: 0
      },
      {
        question: 'What was Raekwon the Chefs debut solo album?',
        type: 'MCQ',
        options: [
          'The Wild',
          'Shaolin vs Wu-Tang',
          'The Lex Diamond Story',
          'Only Built 4 Cuban Linx'
        ],
        correct: 3
      },
      {
        question: 'Who is the lead singer of The Lumineers?',
        type: 'MCQ',
        options: [
          'Wesley Schultz',
          'Jeremiah Fraites',
          'Neyla Pekarek',
          'Jay Van Dyke'
        ],
        correct: 0
      },
      {
        question:
          'Chino Moreno is the lead singer of which alternative metal band?',
        type: 'MCQ',
        options: ['Tool', 'Type O Negative', 'Korn', 'Deftones'],
        correct: 3
      },
      {
        question: 'Who released the 1991 album &quot;Out of Time&quot;?',
        type: 'MCQ',
        options: ['Coldplay', 'U2', 'The Rolling Stones', 'R.E.M.'],
        correct: 3
      },
      {
        question:
          'A Caixa Malacacheta is what kind of musical instrument which is commonly used in Latin American music?',
        type: 'MCQ',
        options: ['Bass Drum', 'Snare Drum', 'Maraca', 'Cow Bell'],
        correct: 1
      },
      {
        question: 'What was Raekwon the Chefs debut solo album?',
        type: 'MCQ',
        options: [
          'The Lex Diamond Story',
          'The Wild',
          'Only Built 4 Cuban Linx',
          'Shaolin vs Wu-Tang'
        ],
        correct: 2
      },
      {
        question:
          'Which artist curated the official soundtrack for &quot;The Hunger Games: Mockingjay - Part 1&quot;?',
        type: 'MCQ',
        options: ['Tove Lo', 'Charli XCX', 'Lorde', 'Kanye West'],
        correct: 2
      },
      {
        question:
          'Which Queen song was covered by Brittany Murphy in the 2006 film &quot;Happy Feet&quot;?',
        type: 'MCQ',
        options: [
          'Somebody to Love',
          'Bohemian Rhapsody',
          'Flash',
          'Under Pressure'
        ],
        correct: 0
      },
      {
        question:
          'Sting, the lead vocalist of The Police, primarily plays what instrument?',
        type: 'MCQ',
        options: ['Bass Guitar', 'Keyboards', 'Guitar', 'Drums'],
        correct: 0
      },
      {
        question:
          'Which rap group released the album &quot;Straight Outta Compton&quot;?',
        type: 'MCQ',
        options: ['Beastie Boys', 'N.W.A', 'Run-D.M.C.', 'Wu-Tang Clan'],
        correct: 1
      },
      {
        question:
          '&quot;Hallelujah&quot; is a song written by which Canadian recording artist?',
        type: 'MCQ',
        options: [
          'Justin Bieber ',
          'Leonard Cohen',
          'Ryan Letourneau ',
          'Kory Lefkowits'
        ],
        correct: 1
      },
      {
        question:
          'Who is the Pink Floyd song &quot;Shine On You Crazy Diamond&quot; written about?',
        type: 'MCQ',
        options: ['David Gilmour', 'John Lennon', 'Floyd', 'Syd Barrett'],
        correct: 3
      },
      {
        question: 'In 2015, David Hasselhof released a single called...',
        type: 'MCQ',
        options: [
          'Real Warrior',
          'True Fighter',
          'True Survivor',
          'Real Kung-Fury'
        ],
        correct: 2
      },
      {
        question:
          'Which artist curated the official soundtrack for &quot;The Hunger Games: Mockingjay - Part 1&quot;?',
        type: 'MCQ',
        options: ['Lorde', 'Kanye West', 'Charli XCX', 'Tove Lo'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Entertainment: Comics',
    questions: [
      {
        question:
          'In the webcomic &quot;Ava&#039;s Demon&quot;, what sin is &quot;Nevy Nervine&quot; based off of? ',
        type: 'MCQ',
        options: ['Envy ', 'Lust', 'Sloth', 'Wrath '],
        correct: 0
      },
      {
        question:
          'What are the names of the two &quot;Canon fan trolls&quot; in &quot;Homestuck&quot;?',
        type: 'MCQ',
        options: [
          'The Wrycrown and Voksea Olkido',
          'Grekei Ceknux and Riya Camacho',
          'Mierfa Durgas and Nektan Whelan',
          'Aikter Frekik and Xagrai Ollomu'
        ],
        correct: 2
      },
      {
        question:
          'In Black Hammer, what city did the heroes save from the Anti-God?',
        type: 'MCQ',
        options: ['Mega-City One', 'Spiral City', 'Rockwood', 'Star City'],
        correct: 1
      },
      {
        question:
          'What is the real hair colour of the mainstream comic book version (Earth-616) of Daredevil?',
        type: 'MCQ',
        options: ['Auburn', 'Black', 'Blonde', 'Brown'],
        correct: 2
      },
      {
        question: 'What was the name of the first Robin in the Batman comics?',
        type: 'MCQ',
        options: ['Tim Drake', 'Bruce Wayne', 'Jason Todd', 'Dick Grayson'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Entertainment: Cartoon & Animations',
    questions: [
      {
        question:
          'In &quot;Rick and Morty&quot;, from which dimension do Rick and Morty originate from?',
        type: 'MCQ',
        options: ['C500-a', 'C-137', 'J1977', 'C-136'],
        correct: 1
      },
      {
        question:
          'Nutcracker Suite was one of the musical pieces featured in Disney&#039;s 1940&#039;s film Fantasia.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'What is the cartoon character, Andy Capp, known as in Germany?',
        type: 'MCQ',
        options: [
          'Willi Wakker',
          'Helmut Schmacker',
          'Rod Tapper',
          'Dick Tingeler'
        ],
        correct: 0
      },
      {
        question: 'Which of the following is not a Flintstones character?',
        type: 'MCQ',
        options: [
          'The Great Gazoo',
          'Barney Rubble',
          'Rockhead Slate',
          'Lord Rockingham IX'
        ],
        correct: 3
      },
      {
        question:
          'Which of the following films was Don Bluth both the writer, director, and producer for?',
        type: 'MCQ',
        options: [
          'Anastasia',
          'The Land Before Time',
          'All Dogs Go To Heaven',
          'Titan A.E.'
        ],
        correct: 2
      },
      {
        question:
          'Which of the following did not feature in the cartoon &#039;Wacky Races&#039;?',
        type: 'MCQ',
        options: [
          'The Dragon Wagon',
          'The Crimson Haybailer',
          'The Bouldermobile',
          'The Compact Pussycat'
        ],
        correct: 0
      },
      {
        question:
          'Benny, Brain, Fancy-Fancy, Spook and Choo-Choo were known associates of what Hanna Barbera cartoon character?',
        type: 'MCQ',
        options: ['Top Cat', 'Snagglepuss', 'Scooby-Doo', 'Yogi Bear'],
        correct: 0
      },
      {
        question:
          'Which singer provided the voice of Metroid&#039;s Mother Brain in the animated series &quot;Captain N: The Game Master&quot;?',
        type: 'MCQ',
        options: [
          'Joan Jett',
          'Freddie Mercury',
          'Levi Stubbs',
          'Janet Jackson'
        ],
        correct: 2
      },
      {
        question:
          'The song &#039;Little April Shower&#039; features in which Disney cartoon film?',
        type: 'MCQ',
        options: ['The Jungle Book', 'Bambi', 'Pinocchio', 'Cinderella'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'History',
    questions: [
      {
        question: 'Which Nazi General was known as the &quot;Desert Fox&quot;?',
        type: 'MCQ',
        options: [
          'Gerd von Rundstadt',
          'Heinz Guderian ',
          'Erwin Rommel',
          'Wilhelm Keitel'
        ],
        correct: 2
      },
      {
        question:
          'What was the aim of the &quot;Umbrella Revolution&quot; in Hong Kong in 2014?',
        type: 'MCQ',
        options: [
          'Go back under British Rule',
          'Lower taxes',
          'Gaining Independence',
          'Genuine universal suffrage'
        ],
        correct: 3
      },
      {
        question:
          'Which of the following snipers has the highest amount of confirmed kills?',
        type: 'MCQ',
        options: [
          'Craig Harrison',
          'Vasily Zaytsev',
          'Simo H&auml;yh&auml;',
          'Chris Kyle'
        ],
        correct: 2
      },
      {
        question:
          'In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?',
        type: 'MCQ',
        options: ['Chile', 'Brazil', 'Peru', 'Argentina'],
        correct: 0
      },
      {
        question: 'In 1453, which important city fell?',
        type: 'MCQ',
        options: ['Rome', 'Hamburg', 'Athens', 'Constantinople'],
        correct: 3
      },
      {
        question:
          'All of the following are names of the Seven Warring States EXCEPT:',
        type: 'MCQ',
        options: ['Zhao (趙)', 'Zhai (翟)', 'Qi (齊)', 'Qin (秦)'],
        correct: 1
      },
      {
        question: 'When was the People&#039;s Republic of China founded?',
        type: 'MCQ',
        options: [
          'May 7, 1945',
          'April 3, 1947',
          'October 1, 1949',
          'December 6, 1950'
        ],
        correct: 2
      },
      {
        question: 'When did Spanish Peninsular War start?',
        type: 'MCQ',
        options: ['1810', '1806', '1809', '1808'],
        correct: 3
      },
      {
        question: 'The collapse of the Soviet Union took place in which year?',
        type: 'MCQ',
        options: ['1891', '1992', '1990', '1991'],
        correct: 3
      },
      {
        question: 'Who was the first man to travel into outer space twice?',
        type: 'MCQ',
        options: [
          'Gus Grissom',
          'Charles Conrad',
          'Vladimir Komarov',
          'Yuri Gagarin'
        ],
        correct: 0
      },
      {
        question:
          'Which of these countries remained neutral during World War II?',
        type: 'MCQ',
        options: ['France', 'United Kingdom', 'Switzerland', 'Italy'],
        correct: 2
      },
      {
        question:
          'What was the name of the chemical that was dropped on Vietnam during the Vietnam war?',
        type: 'MCQ',
        options: [
          'Mustard Gas',
          'Phosgene',
          'Agent Orange',
          'Hydrogen Cyanide'
        ],
        correct: 2
      },
      {
        question:
          'Which king was killed at the Battle of Bosworth Field in 1485? ',
        type: 'MCQ',
        options: ['Edward V', 'Henry VII', 'James I', 'Richard III'],
        correct: 3
      },
      {
        question:
          'The Tiananmen Square protests of 1989 were held in Hong Kong.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'What was Genghis Khan&#039;s real name?',
        type: 'MCQ',
        options: ['Tem&uuml;r', 'M&ouml;ngke', 'Tem&uuml;jin', '&Ouml;gedei'],
        correct: 2
      },
      {
        question: 'Which countries participated in the Lobster War?',
        type: 'MCQ',
        options: [
          'France and Brazil',
          'Canada and Norway',
          'Australia and New Zealand',
          'United States and England'
        ],
        correct: 0
      },
      {
        question:
          'Which of these countries was NOT a part of the Soviet Union?',
        type: 'MCQ',
        options: ['Uzbekistan', 'Turkmenistan', 'Afghanistan', 'Kazakhstan'],
        correct: 2
      },
      {
        question: 'When did the Battle of the Bulge end?',
        type: 'MCQ',
        options: [
          'December 7, 1941',
          'December 16, 1944',
          'August 6, 1945',
          'January 25, 1945'
        ],
        correct: 3
      },
      {
        question:
          'On which day did construction start on &quot;The Pentagon&quot;, the headquarters for the United States Department of Defense?',
        type: 'MCQ',
        options: [
          'June 15, 1947',
          'September 11, 1941',
          'January 15, 1943',
          'September 2, 1962'
        ],
        correct: 1
      },
      {
        question:
          'The Hundred Years&#039; War was fought for more than a hundred years.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'Which modern country is known as &quot;The Graveyard of Empires&quot;?',
        type: 'MCQ',
        options: ['Russia', 'China', 'Iraq', 'Afghanistan'],
        correct: 3
      },
      {
        question: 'What happened on June 6, 1944?',
        type: 'MCQ',
        options: [
          'Atomic bombings of Hiroshima and Nagasaki',
          'The Liberation of Paris',
          'D-Day',
          'Attack on Pearl Harbor'
        ],
        correct: 2
      },
      {
        question:
          '&quot;I disapprove of what you say, but I will defend to the death your right to say it&quot; is a quote from French philosopher Voltaire.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Which day did World War I begin?',
        type: 'MCQ',
        options: ['June 28', 'January 28', 'April 28', 'July 28'],
        correct: 3
      },
      {
        question: 'Bohdan Khmelnytsky was which of the following?',
        type: 'MCQ',
        options: [
          'Grand Prince of Novgorod',
          'General Secretary of the Communist Party of the USSR',
          'Leader of the Ukrainian Cossacks',
          'Prince of Wallachia'
        ],
        correct: 2
      },
      {
        question:
          'United States President Ronald Reagan was the first president to appoint a woman to the Supreme Court. ',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Science: Mathematics',
    questions: [
      {
        question: 'In the hexadecimal system, what number comes after 9?',
        type: 'MCQ',
        options: ['16', 'The Letter A', 'The Number 0', '10'],
        correct: 1
      },
      {
        question: 'What&#039;s the square root of 49?',
        type: 'MCQ',
        options: ['7', '12', '9', '4'],
        correct: 0
      },
      {
        question: 'The set of all algebraic numbers is countable.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'How many sides does a trapezium have?',
        type: 'MCQ',
        options: ['6', '3', '5', '4'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Celebrities',
    questions: [
      {
        question:
          'Michael Jackson had a pet python named &lsquo;Crusher&rsquo;.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'Who was Donald Trump&#039;s first wife?',
        type: 'MCQ',
        options: [
          'Ivana Zeln&iacute;čkov&aacute;',
          'Melania Knauss',
          'Marla Maples',
          'Nancy Davis'
        ],
        correct: 0
      },
      {
        question:
          'What is generally considered to be William Shakespeare&#039;s birth date?',
        type: 'MCQ',
        options: [
          'December 1st, 1750',
          'April 23rd, 1564',
          'July 4th, 1409',
          'September 29th, 1699'
        ],
        correct: 1
      },
      {
        question: 'Which actress&#039;s real name was Frances Ethel Gumm?',
        type: 'MCQ',
        options: [
          'Marilyn Monroe',
          'Judy Garland',
          'Doris Day',
          'Julie Andrews'
        ],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Vehicles',
    questions: [
      {
        question:
          'Which Japanese company is the world&#039;s largest manufacturer of motorcycles?',
        type: 'MCQ',
        options: ['Yamaha', 'Kawasaki', 'Honda', 'Suzuki'],
        correct: 2
      },
      {
        question:
          'What model was the sports car gifted to Yuri Gagarin by the French government in 1965?',
        type: 'MCQ',
        options: ['Porsche 911', 'AC Cobra', 'Matra Djet', 'Alpine A110'],
        correct: 2
      },
      {
        question: 'Which of these car models are produced by Lamborghini?',
        type: 'MCQ',
        options: ['Huayra', '918', 'Aventador', 'Chiron'],
        correct: 2
      },
      {
        question:
          'When BMW was established in 1916, it was producing automobiles.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'The difference between the lengths of a Boeing 777-300ER and an Airbus A350-1000 is closest to:',
        type: 'MCQ',
        options: ['1m', '100m', '10m ', '0.1m'],
        correct: 3
      },
      {
        question:
          'Which car tire manufacturer is famous for its &quot;P Zero&quot; line?',
        type: 'MCQ',
        options: ['Pirelli', 'Goodyear', 'Bridgestone', 'Michelin'],
        correct: 0
      },
      {
        question: 'Jaguar Cars was previously owned by which car manfacturer?',
        type: 'MCQ',
        options: ['Fiat', 'Ford', 'Chrysler', 'General Motors'],
        correct: 1
      },
      {
        question:
          'Which Audi does not use Haldex based all wheel drive system?',
        type: 'MCQ',
        options: ['Audi TT', 'Audi S3', 'Audi A3', 'Audi A8'],
        correct: 3
      },
      {
        question: 'Which Variable Valve Timing technology is used by BMW?',
        type: 'MCQ',
        options: ['VVT-iw', 'MultiAir', 'VVEL', 'VANOS'],
        correct: 3
      },
      {
        question:
          'Which animal features on the logo for Abarth, the motorsport division of Fiat?',
        type: 'MCQ',
        options: ['Bull', 'Scorpion', 'Horse', 'Snake'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Television',
    questions: [
      {
        question: 'What is Meg&#039;s full name in &quot;Family Guy&quot;?',
        type: 'MCQ',
        options: [
          'Who-Cares Griffin',
          'Megan Griffin',
          'Neil Griffin',
          'Megatron Griffin'
        ],
        correct: 3
      },
      {
        question:
          'In what year did &quot;The Big Bang Theory&quot; debut on CBS?',
        type: 'MCQ',
        options: ['2008', '2009', '2006', '2007'],
        correct: 3
      },
      {
        question: 'In &quot;Star Trek&quot;, Klaang is a typical Klingon male.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'What breed of dog is &quot;Scooby Doo&quot;?',
        type: 'MCQ',
        options: ['Doberman Pinscher', 'Pit bull', 'Great Dane', 'Boxer'],
        correct: 2
      },
      {
        question: 'Klingons express emotion in art through opera and poetry.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'In &quot;Star Trek&quot;, what is the Klingon death ritual?',
        type: 'MCQ',
        options: [
          'Kiss the jagged forehead before burial.',
          'Shoot into space in a torpedo casing.',
          'Split the deceased&#039;s earnings between bloodkin.',
          'Look into sky and yell loudly in mourning.'
        ],
        correct: 3
      },
      {
        question:
          'Which show is known for the songs &quot;You are a Pirate&quot;, &quot;Cooking by the Book&quot; and &quot;We Are Number One&quot;?',
        type: 'MCQ',
        options: ['LazyTown', 'Tom and Jerry', 'Sofia the First', 'DuckTales'],
        correct: 0
      },
      {
        question: 'The television show Doctor Who first aired in 1963.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'What was the UK &quot;Who Wants to be a Millionaire?&quot; cheating scandal known as?',
        type: 'MCQ',
        options: [
          'Major Fraud',
          'Ingram Cheater',
          'Coughing Major',
          'Millionaire Crime'
        ],
        correct: 0
      },
      {
        question: 'What country is Cory in the House set in?',
        type: 'MCQ',
        options: [
          'The United States of America',
          'Canada',
          'Venezuala',
          'England'
        ],
        correct: 0
      },
      {
        question: 'In &quot;Star Trek&quot;, Klaang is a typical Klingon male.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'Who won Big Brother 2014 UK?',
        type: 'MCQ',
        options: [
          'Pavandeep &quot;Pav&quot; Paul',
          'Christopher Hall',
          'Pauline Bennett',
          'Helen Wood'
        ],
        correct: 3
      },
      {
        question:
          'In which state of America was the Fresh Prince of Bel-Air born and raised in?',
        type: 'MCQ',
        options: ['New Jersey', 'Florida', 'California', 'Pennsylvania'],
        correct: 3
      },
      {
        question:
          'How many seasons did the Sci-Fi television show &quot;Stargate Atlantis&quot; have?',
        type: 'MCQ',
        options: ['10', '7', '5', '2'],
        correct: 2
      },
      {
        question:
          'Cesar Romero played which iconic Batman villain from the 1960&#039;s TV show?',
        type: 'MCQ',
        options: ['Mr. Freeze', 'The Joker', 'The Riddler', 'The Penguin'],
        correct: 1
      },
      {
        question: 'In the show, Doctor Who, what does T.A.R.D.I.S stand for?',
        type: 'MCQ',
        options: [
          'Time And Relative Dimensions In Space',
          'Time And Relative Dimensions In Style',
          'Toilet Aid Rope Dog Is Soup',
          'Time And Resting Dimensions In Space'
        ],
        correct: 0
      },
      {
        question:
          'What is the name of the main antagonists in Battlestar Galactica?',
        type: 'MCQ',
        options: [
          'The Collective',
          'The Rebels',
          'The Federation',
          'The Cylons'
        ],
        correct: 3
      },
      {
        question:
          'In the episode of SpongeBob SquarePants, &quot;Survival of the Idiots&quot;, Spongebob called Patrick which nickname?',
        type: 'MCQ',
        options: ['Larry', 'Dirty Dan', 'Starfish', 'Pinhead'],
        correct: 3
      },
      {
        question: 'In the show, Doctor Who, what does T.A.R.D.I.S stand for?',
        type: 'MCQ',
        options: [
          'Time And Relative Dimensions In Space',
          'Toilet Aid Rope Dog Is Soup',
          'Time And Relative Dimensions In Style',
          'Time And Resting Dimensions In Space'
        ],
        correct: 0
      },
      {
        question:
          'Baron Silas Greenback is the arch nemesis of which cartoon hero?',
        type: 'MCQ',
        options: ['Captain Star', 'Danger Mouse', 'SuperTed', 'Bananaman'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Books',
    questions: [
      {
        question:
          'In The Lies of Locke Lamora, what title is Locke known by in the criminal world?',
        type: 'MCQ',
        options: [
          'The Rose of the Marrows',
          'The Thorn of Camorr',
          'The Thorn of the Marrows',
          'The Thorn of Emberlain'
        ],
        correct: 1
      },
      {
        question:
          'Who is the author of the series &quot;Malazan Book of the Fallen&quot;?',
        type: 'MCQ',
        options: [
          'Ian Cameron Esslemont',
          'J. R. R. Tolkien',
          'George R. R. Martin',
          'Steven Erikson'
        ],
        correct: 3
      },
      {
        question:
          'In the book &quot;The Martian&quot;, how long was Mark Watney trapped on Mars (in Sols)?',
        type: 'MCQ',
        options: ['324 Days', '401 Days', '765 Days', '549 Days'],
        correct: 3
      },
      {
        question:
          '&quot;Green Eggs and Ham&quot; consists of only 50 different words.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'In the Harry Potter universe, what is Cornelius Fudge&#039;s middle name?',
        type: 'MCQ',
        options: ['James', 'Oswald', 'Christopher', 'Harold'],
        correct: 1
      },
      {
        question:
          'In the book series &quot;Odd Thomas&quot;, Danny Jessup has what genetic disease? ',
        type: 'MCQ',
        options: [
          'Spinocerebellar ataxia',
          ' Osteogenesis Imperfecta',
          'Adrenoleukodystrophy',
          'Cystic Fibrosis'
        ],
        correct: 1
      },
      {
        question:
          'J.K. Rowling completed &quot;Harry Potter and the Deathly Hallows&quot; in which hotel in Edinburgh, Scotland?',
        type: 'MCQ',
        options: [
          'Hotel Novotel',
          'The Dunstane Hotel',
          'Sheraton Grand Hotel &amp; Spa',
          'The Balmoral'
        ],
        correct: 3
      },
      {
        question:
          'The Harry Potter series of books, combined, are over 1,000,000 words in length.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'The Harry Potter series of books, combined, are over 1,000,000 words in length.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Musicals & Theatres',
    questions: [
      {
        question:
          'The musical &quot;Dirty Rotten Scoundrels&quot; is set in what country?',
        type: 'MCQ',
        options: ['France', 'USA', 'Sweden', 'Germany'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Mythology',
    questions: [
      {
        question: 'Which of the following is NOT a god in Norse Mythology.',
        type: 'MCQ',
        options: ['Loki', 'Tyr', 'Jens', 'Snotra'],
        correct: 2
      },
      {
        question:
          'In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?',
        type: 'MCQ',
        options: ['Wild dog', 'Spider', 'Monkey', 'Crocodile'],
        correct: 1
      },
      {
        question:
          'In Norse mythology, what is the name of the serpent which eats the roots of the ash tree Yggdrasil?',
        type: 'MCQ',
        options: ['Bragi', 'Nidhogg', 'Odin', 'Ymir'],
        correct: 1
      },
      {
        question: 'What was the punishment for Sysiphus&#039;s craftiness?',
        type: 'MCQ',
        options: [
          'To fell a tree that regenerated after every axe swing.',
          'Cursed to roll a boulder up a hill for eternity.',
          'Standing in a lake filled with water he could not drink.',
          'Tied to a boulder for eternity, being pecked by birds.'
        ],
        correct: 1
      }
    ]
  }
]

const quizData2 = [
  { specialization: 'Art', questions: [] },
  {
    specialization: 'Geography',
    questions: [
      {
        question: 'How tall is One World Trade Center in New York City?',
        type: 'MCQ',
        options: ['1,776 ft', '1,888 ft', '1,960 ft', '1,225 ft'],
        correct: 0
      },
      {
        question:
          'What is the name of the only remaining Grand Duchy in the world ?',
        type: 'MCQ',
        options: ['Andorra', 'Luxembourg', 'Liechtenstein', 'Montenegro'],
        correct: 1
      },
      {
        question: 'What is the official language of Bhutan?',
        type: 'MCQ',
        options: ['Dzongkha', 'Groma', 'Karen', 'Ladakhi'],
        correct: 0
      },
      {
        question: 'How many provinces are in the Netherlands?',
        type: 'MCQ',
        options: ['14', '13', '12', '10'],
        correct: 2
      },
      {
        question: 'Which city is the capital of the United States of America?',
        type: 'MCQ',
        options: ['Washington D.C', 'Los Angeles', 'Albany', 'Seattle'],
        correct: 0
      },
      {
        question: 'What is the capital of Spain?',
        type: 'MCQ',
        options: ['Madrid', 'Barcelona', 'Toledo', 'Sevilla'],
        correct: 0
      },
      {
        question:
          'Colchester Overpass, otherwise known as &quot;Bunny Man Bridge&quot;, is located where?',
        type: 'MCQ',
        options: [
          'Medford, Oregon',
          'Fairfax County, Virginia',
          'Lemon Grove, California',
          'Braxton County, Virgina'
        ],
        correct: 1
      },
      {
        question:
          'What is the official German name of the Swiss Federal Railways?',
        type: 'MCQ',
        options: [
          'Schweizerische Staatsbahnen',
          'Bundesbahnen der Schweiz',
          'Schweizerische Bundesbahnen',
          'Schweizerische Nationalbahnen'
        ],
        correct: 2
      },
      {
        question: 'There are no deserts in Europe.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'What colour is the circle on the Japanese flag?',
        type: 'MCQ',
        options: ['White', 'Yellow', 'Black', 'Red'],
        correct: 3
      },
      {
        question:
          'What is the region conjoining Pakistan, India, and China with unknown leadership called?',
        type: 'MCQ',
        options: ['Kashmir', 'Quin', 'Andorra', 'Gibraltar'],
        correct: 0
      },
      {
        question: 'How many countries border Kyrgyzstan?',
        type: 'MCQ',
        options: ['1', '3', '6', '4'],
        correct: 3
      },
      {
        question:
          'How many independent countries are there within the continent of South America?',
        type: 'MCQ',
        options: ['10', '12', '8', '9'],
        correct: 1
      },
      {
        question:
          'What state is the largest state of the United States of America?',
        type: 'MCQ',
        options: ['Alaska', 'Texas', 'Washington', 'California'],
        correct: 0
      },
      {
        question: 'What is the largest Muslim country in the world?',
        type: 'MCQ',
        options: ['Saudi Arabia', 'Pakistan', 'Indonesia', 'Iran'],
        correct: 2
      },
      {
        question: 'Which of these is NOT a city in Saudi Arabia?',
        type: 'MCQ',
        options: ['Dubai', 'Riyadh', 'Medina', 'Mecca'],
        correct: 0
      },
      {
        question:
          'Which of these is NOT an island that is part of the Philippines?',
        type: 'MCQ',
        options: ['Mindanao', 'Palawan', 'Luzon', 'Java'],
        correct: 3
      },
      {
        question: 'What is the largest country in the world ?',
        type: 'MCQ',
        options: ['Russian Federation', 'China', 'Brazil', 'Canada'],
        correct: 0
      },
      {
        question: 'Montreal is in which Canadian province?',
        type: 'MCQ',
        options: ['Ontario', 'Quebec', 'Alberta', 'Nova Scotia'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Science: Computers',
    questions: [
      {
        question:
          'What does the &#039;S&#039; in the RSA encryption algorithm stand for?',
        type: 'MCQ',
        options: ['Stable', 'Secure', 'Schottky', 'Shamir'],
        correct: 3
      },
      {
        question:
          'What does AD stand for in relation to Windows Operating Systems? ',
        type: 'MCQ',
        options: [
          'Automated Database',
          'Active Directory',
          'Active Department',
          'Alternative Drive'
        ],
        correct: 1
      },
      {
        question:
          'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
        type: 'MCQ',
        options: ['Apple', 'Commodore', 'Microsoft', 'Atari'],
        correct: 0
      },
      {
        question:
          'The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'What was the first Android version specifically optimized for tablets?',
        type: 'MCQ',
        options: ['Froyo', 'Eclair', 'Honeycomb', 'Marshmellow'],
        correct: 2
      },
      {
        question: 'What language does Node.js use?',
        type: 'MCQ',
        options: ['Joomla Source Code', 'JavaScript', 'Java', 'Java Source'],
        correct: 1
      },
      {
        question:
          'Which internet company began life as an online bookstore called &#039;Cadabra&#039;?',
        type: 'MCQ',
        options: ['eBay', 'Shopify', 'Amazon', 'Overstock'],
        correct: 2
      },
      {
        question: 'The first dual-core CPU was the Intel Pentium D.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:',
        type: 'MCQ',
        options: [
          'HD Graphics 7000',
          'HD Graphics 500',
          'HD Graphics 600',
          'HD Graphics 700 '
        ],
        correct: 1
      },
      {
        question: 'In computing terms, typically what does CLI stand for?',
        type: 'MCQ',
        options: [
          'Control Line Interface',
          'Common Language Input',
          'Common Language Interface',
          'Command Line Interface'
        ],
        correct: 3
      },
      {
        question:
          'What was the first Android version specifically optimized for tablets?',
        type: 'MCQ',
        options: ['Eclair', 'Honeycomb', 'Marshmellow', 'Froyo'],
        correct: 1
      },
      {
        question:
          'Which kind of algorithm is Ron Rivest not famous for creating?',
        type: 'MCQ',
        options: [
          'Secret sharing scheme',
          'Stream cipher',
          'Hashing algorithm',
          'Asymmetric encryption'
        ],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Science & Nature',
    questions: [
      {
        question: 'What is the hottest planet in the Solar System?',
        type: 'MCQ',
        options: ['Mercury', 'Jupiter', 'Venus', 'Mars'],
        correct: 2
      },
      {
        question: 'Human cells typically have how many copies of each gene?',
        type: 'MCQ',
        options: ['1', '3', '4', '2'],
        correct: 3
      },
      {
        question: 'In Chemistry, how many isomers does Butanol (C4H9OH) have?',
        type: 'MCQ',
        options: ['3', '4', '5', '6'],
        correct: 1
      },
      {
        question:
          'Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?',
        type: 'MCQ',
        options: ['Yawn', 'Sneeze', 'Hiccup', 'Cough'],
        correct: 1
      },
      {
        question:
          'Not including false teeth; A human has two sets of teeth in their lifetime.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Centripedal force is an apparent force that acts outward on a body moving around a center, arising from the body&#039;s inertia.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Sound can travel through a vacuum.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'What is the molecular formula of the active component of chili peppers(Capsaicin)?',
        type: 'MCQ',
        options: ['C13H25NO4', 'C6H4Cl2', 'C21H23NO3', 'C18H27NO3'],
        correct: 3
      },
      {
        question:
          'The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?',
        type: 'MCQ',
        options: ['Jupiter', 'Uranus', 'Neptune', 'Venus'],
        correct: 1
      },
      {
        question: 'Which chemical element has the lowest boiling point?',
        type: 'MCQ',
        options: ['Nitrogen', 'Helium', 'Neon', 'Hydrogen'],
        correct: 1
      },
      {
        question: 'What is the scientific name of the red fox?',
        type: 'MCQ',
        options: ['Vulpes Vulpie', 'Vulpes Vulpes', 'Vulpes Redus', 'Red Fox'],
        correct: 1
      },
      {
        question:
          'The most frequent subconscious activity repeated by the human body is blinking.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'Dry ice is the solid form of what substance?',
        type: 'MCQ',
        options: ['Ammonia', 'Nitrogen', 'Carbon dioxide', 'Oxygen'],
        correct: 2
      },
      {
        question: 'The human heart has how many chambers?',
        type: 'MCQ',
        options: ['2', '3', '4', '6'],
        correct: 2
      },
      {
        question: 'What is the hottest planet in the Solar System?',
        type: 'MCQ',
        options: ['Mercury', 'Venus', 'Jupiter', 'Mars'],
        correct: 1
      },
      {
        question: 'How many chromosomes are in your body cells?',
        type: 'MCQ',
        options: ['22', '24', '23', '21'],
        correct: 2
      },
      {
        question: 'What does LASER stand for?',
        type: 'MCQ',
        options: [
          'Life antimatter by standing entry of range',
          'Light amplifier by standby energy of radio',
          'Lite analysing by stereo ecorazer',
          'Light amplification by stimulated emission of radiation'
        ],
        correct: 3
      },
      {
        question: 'Which element has the atomic number of 7?',
        type: 'MCQ',
        options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Neon'],
        correct: 2
      },
      {
        question:
          'The chemical element Lithium is named after the country of Lithuania.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'What is the most potent toxin known?',
        type: 'MCQ',
        options: ['Cyanide', 'Asbestos', 'Botulinum toxin', 'Ricin'],
        correct: 2
      },
      {
        question: 'What was the first living creature in space?',
        type: 'MCQ',
        options: ['Dog', 'Monkey', 'Mouse', 'Fruit Flies '],
        correct: 3
      },
      {
        question: 'Which is the most abundant element in the universe?',
        type: 'MCQ',
        options: ['Lithium', 'Hydrogen', 'Oxygen', 'Helium'],
        correct: 1
      },
      {
        question: 'What is the powerhouse of the cell?',
        type: 'MCQ',
        options: ['Redbull', 'Mitochondria', 'Ribosome', 'Nucleus'],
        correct: 1
      },
      {
        question: 'Which element has the highest melting point?',
        type: 'MCQ',
        options: ['Osmium', 'Tungsten', 'Carbon', 'Platinum'],
        correct: 2
      }
    ]
  },
  {
    specialization: 'General Knowledge',
    questions: [
      {
        question:
          'Which of the following  British Monarchs never appeared on a circulated pound sterling coin?',
        type: 'MCQ',
        options: ['Victoria', 'Charles II', 'George VI', 'Edward VIII'],
        correct: 3
      },
      {
        question: 'What direction does the Statue of Liberty face?',
        type: 'MCQ',
        options: ['Northeast', 'Northwest', 'Southeast', 'Southwest'],
        correct: 2
      },
      {
        question: 'Which candy is NOT made by Mars?',
        type: 'MCQ',
        options: ['Twix', 'Almond Joy', 'M&amp;M&#039;s', 'Snickers'],
        correct: 1
      },
      {
        question: 'The French word to travel is &quot;Travail&quot;',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'What is the closest planet to our solar system&#039;s sun?',
        type: 'MCQ',
        options: ['Mars', 'Earth', 'Jupiter', 'Mercury'],
        correct: 3
      },
      {
        question: 'Who is the founder of &quot;The Lego Group&quot;?',
        type: 'MCQ',
        options: [
          'Ole Kirk Christiansen',
          ' Jens Niels Christiansen',
          'Kirstine Christiansen',
          ' Gerhardt Kirk Christiansen'
        ],
        correct: 0
      },
      {
        question:
          'Which of these cities does NOT have a United States Minting location?',
        type: 'MCQ',
        options: [
          'West Point, NY',
          'Philidelphia, PA',
          'St. Louis, MO',
          'San Fransisco, CA'
        ],
        correct: 2
      },
      {
        question:
          'The US emergency hotline is 911 because of the September 11th terrorist attacks.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          '&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'Who invented Pastafarianism?',
        type: 'MCQ',
        options: ['Bill Nye', 'Zach Soldi', 'Eric Tignor', 'Bobby Henderson'],
        correct: 3
      },
      {
        question:
          'Which of the following is the IATA code for Manchester Airport?',
        type: 'MCQ',
        options: ['LHR', 'MAN', 'EGCC', 'EGLL'],
        correct: 1
      },
      {
        question:
          'The new One World Trade Center in Manhattan, New York City was designed by which architect? ',
        type: 'MCQ',
        options: [
          'David Childs',
          'Michael Arad',
          'Bjarke Ingels',
          'Fumihiko Maki'
        ],
        correct: 0
      },
      {
        question: 'What year was Apple Inc. founded?',
        type: 'MCQ',
        options: ['1978', '1976', '1974', '1980'],
        correct: 1
      },
      {
        question: 'The Swedish word &quot;Grunka&quot; means what in English?',
        type: 'MCQ',
        options: ['Pineapple', 'Thing', 'People', 'Place'],
        correct: 1
      },
      {
        question:
          'Rolex is a company that specializes in what type of product?',
        type: 'MCQ',
        options: ['Cars', 'Watches', 'Sports equipment', 'Computers'],
        correct: 1
      },
      {
        question: 'Cucumbers are usually more than 90% water.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Film',
    questions: [
      {
        question: 'Who voiced Metalbeard in &quot;The Lego Movie&quot;?',
        type: 'MCQ',
        options: [
          'Liam Neeson',
          'Will Arnet',
          'Nick Offerman',
          'Morgan Freeman'
        ],
        correct: 2
      },
      {
        question:
          'In the Mad Max franchise, what type of car is the Pursuit Special driven by Max?',
        type: 'MCQ',
        options: [
          'Chrysler Valiant Charger',
          'Pontiac Firebird',
          'Ford Falcon',
          'Holden Monaro'
        ],
        correct: 2
      },
      {
        question:
          'In the 1995 film &quot;Balto&quot;, who are Steele&#039;s accomplices?',
        type: 'MCQ',
        options: [
          'Dusty, Kirby, and Ralph',
          'Nuk, Yak, and Sumac',
          'Kaltag, Nikki, and Star',
          'Jenna, Sylvie, and Dixie'
        ],
        correct: 2
      },
      {
        question:
          'Matt Damon played an astronaut stranded on an extraterrestrial planet in both of the movies Interstellar and The Martian.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Who is the main protagonist in, the 1985 film, Back to the Future?',
        type: 'MCQ',
        options: [
          'Biff Tannen',
          'Emmett &quot;Doc&quot; Brown',
          'George McFly',
          'Marty McFly'
        ],
        correct: 3
      },
      {
        question:
          'What did Alfred Hitchcock use as blood in the film &quot;Psycho&quot;? ',
        type: 'MCQ',
        options: [
          'Ketchup',
          'Maple syrup',
          'Chocolate syrup',
          'Red food coloring'
        ],
        correct: 2
      },
      {
        question:
          '&quot;Foodfight!&quot; earned less than $80,000 at box office.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'In the 1974 Christmas flick &quot;The Year Without a Santa Claus,&quot; what are the names of the two elves who help Mrs. Claus save Christmas?',
        type: 'MCQ',
        options: [
          'Buddy &amp; Bobby',
          'Snowflake &amp; Icicle',
          'Holly &amp; Jolly',
          'Jingle &amp; Jangle'
        ],
        correct: 3
      },
      {
        question:
          'At the end of the 2001 film &quot;Rat Race&quot;, whose concert do the contestants crash?',
        type: 'MCQ',
        options: ['Smash Mouth', 'Linkin Park', 'Bowling for Soup', 'Sum 41'],
        correct: 0
      },
      {
        question:
          'In the film &quot;Requiem for a Dream&quot;, what drug does Jared Leto&#039;s character get addicted to?',
        type: 'MCQ',
        options: ['Cocaine', 'Marijuana', 'Heroin', 'Oxycodone'],
        correct: 2
      },
      {
        question:
          'The killer in the 1981 film &#039;My Bloody Valentine&#039; wears what sort of outfit?',
        type: 'MCQ',
        options: [
          'Police uniform',
          'Clown costume',
          'Mining gear',
          'Santa suit'
        ],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Entertainment: Video Games',
    questions: [
      {
        question:
          'What year was the video game streaming platform TwitchTV founded?',
        type: 'MCQ',
        options: ['2010', '2011', '2012', '2014'],
        correct: 1
      },
      {
        question:
          'In the first Left 4 Dead, you can play as either of these four characters.',
        type: 'MCQ',
        options: [
          'Francis, Bill, Zoey, and Louis',
          'Bender, Andrew, Allison, and Brian',
          'Harry, Ron, Hermione and Dumbledore',
          'Coach, Ellis, Nick, and Rochelle'
        ],
        correct: 0
      },
      {
        question:
          'What is the name of the largest planet in Kerbal Space Program?',
        type: 'MCQ',
        options: ['Minmus', 'Eeloo', 'Kerbol', 'Jool'],
        correct: 3
      },
      {
        question:
          'Hidden in the files for &quot;Mario Kart Arcade GP&quot; is a picture of the Beslan school hostage crisis.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'In Portal, what color is the Intelligence Core?',
        type: 'MCQ',
        options: ['Orange', 'Red', 'Purple', 'Blue'],
        correct: 3
      },
      {
        question:
          'The name of the main character of the video game &quot;The Legend of Zelda&quot;, is Zelda.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'In Counter Strike: Global Offensive, what is the code implanted onto the C4 as the Terrorists plant the bomb?',
        type: 'MCQ',
        options: ['7256380', '7726354', '7355608', '7890728'],
        correct: 2
      },
      {
        question:
          'In &quot;PUBATTLEGROUNDS&quot; which ammo type does the M24 use?',
        type: 'MCQ',
        options: ['5.56mm', '7.62mm', '9mm', '.300 Magnum'],
        correct: 1
      },
      {
        question:
          'Which one of the following titles by Valve is not based on a Community Mod?',
        type: 'MCQ',
        options: ['Ricochet', 'Day of Defeat', 'Counter-Strike', 'Alien Swarm'],
        correct: 0
      },
      {
        question: 'The original Planetside was released in North America on...',
        type: 'MCQ',
        options: [
          'September 29, 2003',
          'June 17, 2001',
          'May 20, 2003',
          'January 14, 2005'
        ],
        correct: 2
      },
      {
        question:
          'Which video game was recalled for containing a hidden, playable South Park episode?',
        type: 'MCQ',
        options: [
          'Tony Hawk&#039;s Pro Skater 3',
          'Madden 99',
          'Sonic Adventure',
          'Tiger Woods 99 PGA Tour'
        ],
        correct: 3
      },
      {
        question:
          'In what year was &quot;Metal Gear Solid&quot; released in North America?',
        type: 'MCQ',
        options: ['2001', '2004', '1987', '1998'],
        correct: 3
      },
      {
        question:
          'In Monster Hunter Generations, which of the following monsters are a part of the &quot;Fated Four&quot;?',
        type: 'MCQ',
        options: ['Gore Magala', 'Astalos', 'Arzuros', 'Malfestio'],
        correct: 1
      },
      {
        question:
          'In &quot;Resident Evil 2&quot;, what is Leon Kennedy&#039;s middle name?',
        type: 'MCQ',
        options: ['Shaun', 'Sam', 'Scott', 'Simon'],
        correct: 2
      },
      {
        question:
          'Which Pok&eacute;mon can learn the move &quot;Secret Power&quot; by leveling up?',
        type: 'MCQ',
        options: ['Type:Null', 'Arceus', 'Silvally', 'Audino'],
        correct: 3
      },
      {
        question:
          'Pok&eacute;mon Go is a location-based augmented reality game developed and published by which company?',
        type: 'MCQ',
        options: ['Rovio', 'Niantic', 'Zynga', 'Supercell'],
        correct: 1
      },
      {
        question:
          'In &quot;Starbound&quot;, according to the asset files, the description of the &quot;Erchius Ghost&quot; is the same as which other assets?',
        type: 'MCQ',
        options: ['Spookit', 'Trictus', 'Petricub', 'Pyromantle'],
        correct: 0
      },
      {
        question: 'What ingredients are required to make a cake in Minecraft?',
        type: 'MCQ',
        options: [
          'Milk, Sugar, and Wheat',
          'Milk, Sugar Cane, Egg, and Wheat',
          'Milk, Bread, Egg, and Wheat',
          'Milk, Sugar, Egg, and Wheat'
        ],
        correct: 3
      },
      {
        question:
          'Valve Corporation is an American video game developer located in which city?',
        type: 'MCQ',
        options: [
          'San Francisco, California',
          'Bellevue, Washington',
          'Seattle, Washington',
          'Austin, Texas'
        ],
        correct: 1
      },
      {
        question: 'Niko Bellic is the protagonist of Grand Theft Auto IV.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Which of the following is NOT one of the main characters in Grand Theft Auto V&rsquo;s story mode?',
        type: 'MCQ',
        options: [
          'Franklin Clinton',
          'Trevor Phillips',
          'Michael de Santa',
          'Tommy Vercetti'
        ],
        correct: 3
      },
      {
        question: 'What game was used to advertise Steam?',
        type: 'MCQ',
        options: [
          'Half-Life 2',
          'Counter-Strike 1.6',
          'Team Fortress',
          'Half-Life'
        ],
        correct: 1
      },
      {
        question:
          'When was the top-down online RPG &quot;Space Station 13&quot; released?',
        type: 'MCQ',
        options: ['2010', '2006', '2000', '2003'],
        correct: 3
      },
      {
        question:
          'What is the default name of the Vampire character in &quot;Shining Soul 2&quot;.',
        type: 'MCQ',
        options: ['Sachs', 'Alucard', 'Bloodstar', 'Dracuul'],
        correct: 2
      },
      {
        question:
          'League of Legends, DOTA 2, Smite and Heroes of the Storm are all part of which game genre?',
        type: 'MCQ',
        options: [
          'Multiplayer Online Battle Arena (MOBA)',
          'Real Time Strategy (RTS)',
          'Role Playing Game (RPG)',
          'First Person Shooter (FPS)'
        ],
        correct: 0
      },
      {
        question:
          'What is the name of the common, gun-toting enemies of the &quot;Oddworld&quot; video game series?',
        type: 'MCQ',
        options: ['Slogs', 'Sligs', 'Glukkons', 'Scrabs'],
        correct: 1
      },
      {
        question:
          'In the game &quot;Red Dead Redemption&quot;, what is the name of John Marston&#039;s dog?',
        type: 'MCQ',
        options: ['Apollo', 'Rutus', 'Finn', 'Rufus'],
        correct: 3
      },
      {
        question: 'What year was the game Team Fortress 2 released?',
        type: 'MCQ',
        options: ['2009', '2007', '2010', '2005'],
        correct: 1
      },
      {
        question:
          'What is the name of the virus in &quot;Metal Gear Solid 1&quot;?',
        type: 'MCQ',
        options: ['FOXDIE', 'FOXENGINE', 'FOXALIVE', 'FOXKILL'],
        correct: 0
      },
      {
        question:
          'In the &quot;PAYDAY&quot; series, what is the real name of the character known as &quot;Dallas&quot;?',
        type: 'MCQ',
        options: [
          'Nathan Steele',
          'Nolan Stuhlinger',
          'Nate Siemens',
          'Nick Stamos'
        ],
        correct: 0
      },
      {
        question:
          'In the MMO RPG &quot;Realm of the Mad God&quot;, what class is known for having the highest possible defense?',
        type: 'MCQ',
        options: ['The Wizard', 'The Archer', 'The Knight', 'The Warrior'],
        correct: 2
      },
      {
        question:
          'What is the full name of the protagonist from the SNES game Clock Tower?',
        type: 'MCQ',
        options: [
          'Jennifer Simpson',
          'Jennifer Cartwright',
          'Jennifer Barrows',
          'Jennifer Maxwell'
        ],
        correct: 0
      },
      {
        question: 'What is the mod &quot;Cry of Fear&quot; based off of?',
        type: 'MCQ',
        options: [
          'Half-Life 2',
          'It&#039;s a stand alone game, not a mod',
          'Half-Life',
          'Counter Strike: Source'
        ],
        correct: 2
      },
      {
        question: 'Who was the main antagonist of Max Payne 3 (2012)?',
        type: 'MCQ',
        options: [
          '&Aacute;lvaro Neves',
          'Milo Rego',
          'Armando Becker',
          'Victor Branco'
        ],
        correct: 3
      },
      {
        question: 'What is the name of the alligator in Where&#039;s My Water?',
        type: 'MCQ',
        options: ['Crocky', 'Justice', 'Cranky', 'Swampy'],
        correct: 3
      },
      {
        question:
          'In the video game Overwatch, which playable character is infamous for saying &quot;It&#039;s high noon.&quot;?',
        type: 'MCQ',
        options: ['Hanzo', 'Pharah', 'McCree', 'Soldier: 76'],
        correct: 2
      },
      {
        question:
          'Which of the following names is the &quot;Mega Man&quot; Franchise known as in Japan?',
        type: 'MCQ',
        options: ['Scissorsman', 'Rockman', 'Paperman', 'Mega Man'],
        correct: 1
      },
      {
        question:
          'In the game &quot;Hearthstone&quot;, what is the best rank possible?',
        type: 'MCQ',
        options: [
          'Rank 1 Master',
          'Rank 1 Elite',
          'Rank 1 Supreme',
          'Rank 1 Legend'
        ],
        correct: 3
      },
      {
        question: 'Which game was exclusive to Dreamcast?',
        type: 'MCQ',
        options: [
          'Tetrisphere',
          'Perfect Dark',
          'Pen Pen TriIcelon',
          'Sylvester &amp; Tweety in Cagey Capers'
        ],
        correct: 2
      },
      {
        question:
          'In &quot;Team Fortress 2&quot;, how much health does a scout have when overhealed?',
        type: 'MCQ',
        options: ['185', '195', '215', '225'],
        correct: 0
      },
      {
        question:
          'In Divinity: Original Sin II, what is the name of the skeletal origin character?',
        type: 'MCQ',
        options: [
          'Lohse',
          'There are no skeletal origin characters',
          'The Red Prince',
          'Fane'
        ],
        correct: 3
      },
      {
        question:
          'Which Overwatch character says the line &quot;Heroes never die!&quot;?',
        type: 'MCQ',
        options: ['Sonic', 'Reaper', 'Ana', 'Mercy'],
        correct: 3
      },
      {
        question:
          'This weapon in Counter-Strike: Global Offensive does not exist in real life.',
        type: 'MCQ',
        options: ['M4A1', 'M4A4', 'AWP', 'MP9'],
        correct: 1
      },
      {
        question:
          'In &quot;Call Of Duty: Zombies&quot;, &quot;Richtofen&quot; is in possession of two filled blood vials belonging to who?',
        type: 'MCQ',
        options: [
          'Sal DeLuca and Finn O&#039;Leary',
          'Al Arlington and Sal DeLuca',
          'Jessica Rose and Jack Vincent',
          'Richtofen'
        ],
        correct: 0
      },
      {
        question:
          'In the &quot;S.T.A.L.K.E.R.&quot; series, the Freedom faction wishes to destroy the supernatural area known as  &quot;the Zone&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'What&#039;s the name of the main protagonist in the &quot;Legend of Zelda&quot; franchise?',
        type: 'MCQ',
        options: ['Mario', 'Link', 'Pit', 'Zelda'],
        correct: 1
      },
      {
        question:
          'One of the early prototypes of the Sega Dreamcast controller resembled which of the following?',
        type: 'MCQ',
        options: ['Hairdryer', 'Tablet', 'Flip Phone', 'Television Remote'],
        correct: 3
      },
      {
        question:
          'The game &quot;Jetpack Joyride&quot; was created by &quot;Redbrick Studios&quot;.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question:
          'DragonForce&#039;s &#039;Through the Fire and Flames&#039; is widely considered to be the hardest song in the Guitar Hero series.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'In the game Pok&eacute;mon Conquest, how many kingdoms make up the region of Ransei?',
        type: 'MCQ',
        options: ['17', '18', '16', '15'],
        correct: 0
      },
      {
        question:
          'In Terraria, which of these items is NOT crafted at a Mythril Anvil?',
        type: 'MCQ',
        options: [
          'Sky Fracture',
          'Orichalcum Tools',
          'Ankh Charm',
          'Venom Staff'
        ],
        correct: 2
      },
      {
        question:
          'In the game &quot;Hearthstone&quot;, what is the best rank possible?',
        type: 'MCQ',
        options: [
          'Rank 1 Legend',
          'Rank 1 Master',
          'Rank 1 Elite',
          'Rank 1 Supreme'
        ],
        correct: 0
      },
      {
        question:
          'When was the video game &quot;P.A.M.E.L.A.&quot; released on Steam?',
        type: 'MCQ',
        options: [
          'October 23, 1997',
          'March 9, 2017',
          'February 16, 2015',
          'January 7, 2007'
        ],
        correct: 1
      },
      {
        question:
          'Which of these is NOT a terrorist faction in Counter-Strike (2000)?',
        type: 'MCQ',
        options: [
          'Elite Crew',
          'Midwest Militia',
          'Phoenix Connection',
          'Guerrilla Warfare'
        ],
        correct: 1
      },
      {
        question:
          'Which of these is NOT a main playable character in &quot;Grand Theft Auto V&quot;?',
        type: 'MCQ',
        options: ['Lamar', 'Franklin', 'Trevor', 'Michael'],
        correct: 0
      },
      {
        question:
          'In Fallout: New Vegas, which one of these casinos can you not play in?',
        type: 'MCQ',
        options: ['Lucky 38', 'Ultra-Luxe', 'Gammorah', 'The Tops'],
        correct: 0
      },
      {
        question:
          'Which Final Fantasy game consisted of a female-only cast of party members?',
        type: 'MCQ',
        options: [
          'Final Fantasy V',
          'Final Fantasy IX',
          'Final Fantasy X-2',
          'Final Fantasy XIII-2'
        ],
        correct: 2
      },
      {
        question:
          'In &quot;Pheonix Wright: Ace Attorney&quot; which character is the District Chief of Police?',
        type: 'MCQ',
        options: ['Miles Edgeworth', 'Mike Meekins', 'Damon Gant', 'Lana Skye'],
        correct: 2
      },
      {
        question:
          'In the first game of the Sly Cooper franchise, what family heirloom did Sly Cooper want to steal back?',
        type: 'MCQ',
        options: [
          'Thievius Raccoonus',
          'The Art of Sneak',
          'Raccoon Training 101',
          'Raccoonus Teachus'
        ],
        correct: 0
      },
      {
        question:
          'TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'In the first Left 4 Dead, you can play as either of these four characters.',
        type: 'MCQ',
        options: [
          'Francis, Bill, Zoey, and Louis',
          'Bender, Andrew, Allison, and Brian',
          'Harry, Ron, Hermione and Dumbledore',
          'Coach, Ellis, Nick, and Rochelle'
        ],
        correct: 0
      },
      {
        question:
          'Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?',
        type: 'MCQ',
        options: ['Mario', 'Donkey Kong', 'Kirby', 'Zelda'],
        correct: 1
      },
      {
        question:
          'What is the name of &quot;Team Fortress 2&quot; update, in which it became Free-to-play?',
        type: 'MCQ',
        options: [
          '&Uuml;ber Update',
          'Mann-Conomy Update',
          'Engineer Update',
          'Pyromania Update'
        ],
        correct: 0
      },
      {
        question: 'When was the game &#039;Portal 2&#039; released?',
        type: 'MCQ',
        options: ['2007', '2014', '2011', '2009'],
        correct: 2
      },
      {
        question: 'Which of these games was NOT developed by Markus Persson?',
        type: 'MCQ',
        options: ['Minecraft', 'Wurm Online', 'Dwarf Fortress', '0x10c'],
        correct: 2
      },
      {
        question:
          'Which company did Gabe Newell work at before founding Valve Corporation?',
        type: 'MCQ',
        options: ['Google', 'Yahoo', 'Apple', 'Microsoft'],
        correct: 3
      },
      {
        question:
          'Big the Cat is a playable character in &quot;Sonic Generations&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Which souls game was not directed by Hidetaka Miyazaki?',
        type: 'MCQ',
        options: ['Dark Souls 2', 'Dark Souls 3', 'Dark Souls', 'Demon Souls'],
        correct: 0
      },
      {
        question: 'What ingredients are required to make a cake in Minecraft?',
        type: 'MCQ',
        options: [
          'Milk, Sugar, and Wheat',
          'Milk, Sugar, Egg, and Wheat',
          'Milk, Sugar Cane, Egg, and Wheat',
          'Milk, Bread, Egg, and Wheat'
        ],
        correct: 1
      },
      {
        question:
          'The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'Ellen McLain, the voice of GLaDOS in the Portal game series, is married to the voice actor for which Team Fortress 2 character?',
        type: 'MCQ',
        options: ['Scout', 'Heavy', 'Soldier', 'Sniper'],
        correct: 3
      },
      {
        question: 'In the Halo series, which era of SPARTAN is Master Chief? ',
        type: 'MCQ',
        options: ['SPARTAN-IV', 'SPARTAN-II', 'SPARTAN-III', 'SPARTAN-I'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Sports',
    questions: [
      {
        question:
          'In Canadian football, scoring a rouge is worth how many points?',
        type: 'MCQ',
        options: ['4', '3', '1', '2'],
        correct: 2
      },
      {
        question:
          'Which soccer team won the Copa Am&eacute;rica 2015 Championship ?',
        type: 'MCQ',
        options: ['Chile', 'Paraguay', 'Argentina', 'Brazil'],
        correct: 0
      },
      {
        question:
          'ATP tennis hosted several tournaments on carpet court before being replaced to reduce injuries.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'Which of the following player scored a hat-trick during their Manchester United debut?',
        type: 'MCQ',
        options: [
          'Cristiano Ronaldo',
          'David Beckham',
          'Robin Van Persie',
          'Wayne Rooney'
        ],
        correct: 3
      },
      {
        question:
          'Skateboarding will be included in the 2020 Summer Olympics in Tokyo.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'Which team won the 2015-16 English Premier League?',
        type: 'MCQ',
        options: [
          'Manchester United',
          'Leicester City',
          'Cheslea',
          'Liverpool'
        ],
        correct: 1
      },
      {
        question:
          'A stimpmeter measures the speed of a ball over what surface?',
        type: 'MCQ',
        options: [
          'Cricket Outfield',
          'Golf Putting Green',
          ' Football Pitch',
          'Pinball Table'
        ],
        correct: 1
      },
      {
        question: 'What is the highest belt you can get in Taekwondo?',
        type: 'MCQ',
        options: ['Black', 'Green', 'White', 'Red'],
        correct: 0
      },
      {
        question:
          'Who won the premier league title in the 2015-2016 season following a fairy tale run?',
        type: 'MCQ',
        options: [
          'Watford',
          'Stoke City',
          'Leicester City',
          'Tottenham Hotspur'
        ],
        correct: 2
      },
      {
        question:
          'Which country did Kabaddi, a contact sport involving tackling, originate from?',
        type: 'MCQ',
        options: ['India', 'Cambodia', 'Australia', 'Turkey'],
        correct: 0
      },
      {
        question: 'Which two teams played in Super Bowl XLII?',
        type: 'MCQ',
        options: [
          'The New York Giants &amp; The New England Patriots',
          'The Seattle Seahawks &amp; The Denver Broncos',
          'The Green Bay Packers &amp; The Pittsburgh Steelers',
          'The Philadelphia Eagles &amp; The New England Patriots'
        ],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Politics',
    questions: [
      {
        question:
          'Who was the only president to not be in office in Washington D.C?',
        type: 'MCQ',
        options: [
          'George Washington',
          'Thomas Jefferson',
          'Richard Nixon',
          'Abraham Lincoln'
        ],
        correct: 0
      },
      {
        question:
          'What year did the effort to deploy the Common Core State Standards (CCSS) in the US begin?',
        type: 'MCQ',
        options: ['2012', '2009', '2006', '1997'],
        correct: 1
      },
      {
        question: 'What is centralism?',
        type: 'MCQ',
        options: [
          'Remaining politically neutral.',
          ' Concentration of power and authority in a central organization.',
          'Conforming to one single common political agenda.',
          'The grey area in the spectrum of political left and right.'
        ],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Entertainment: Board Games',
    questions: [
      {
        question:
          'What is the sum of all the tiles in a standard box of Scrabble?',
        type: 'MCQ',
        options: ['177', '187', '197', '207'],
        correct: 1
      }
    ]
  },
  {
    specialization: 'Animals',
    questions: [
      {
        question: 'Which species of Brown Bear is not extinct?',
        type: 'MCQ',
        options: [
          'California Grizzly Bear',
          'Mexican Grizzly Bear',
          'Syrian Brown Bear',
          'Atlas Bear'
        ],
        correct: 2
      },
      {
        question:
          'The Axolotl is an amphibian that can spend its whole life in a larval state.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          '&quot;Kamea,&quot; the Gilbertese Islander word for dog, is derived from the English phrase &quot;Come here!&quot;',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'Finnish Lapphund dogs were used for herding reindeer.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'How many teeth does an adult rabbit have?',
        type: 'MCQ',
        options: ['26', '30', '24', '28'],
        correct: 3
      },
      {
        question:
          'What is the name of the family that the domestic cat is a member of?',
        type: 'MCQ',
        options: ['Felis', 'Felinae', 'Cat', 'Felidae'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Entertainment: Japanese Anime & Manga',
    questions: [
      {
        question:
          'Who voices &quot;Shou Suzuki&quot; in the English dub of &quot;Mob Psycho 100&quot;?',
        type: 'MCQ',
        options: [
          'David Naughton',
          'Ben Diskin',
          'Casey Mongillo',
          'Chris Niosi'
        ],
        correct: 2
      },
      {
        question:
          'What song plays in the ending credits of the anime &quot;Ergo Proxy&quot;?',
        type: 'MCQ',
        options: [
          'Bittersweet Symphony',
          'Mad World',
          'Sadistic Summer',
          'Paranoid Android'
        ],
        correct: 3
      },
      {
        question:
          'Which animation studio produced &quot;Sword Art Online&quot;?',
        type: 'MCQ',
        options: [
          'Silver Link',
          'A-1 Pictures',
          'Kyoto Animation',
          'Production I.G'
        ],
        correct: 1
      },
      {
        question:
          'The main protagonist of the fifth part of JoJo&#039;s Bizarre Adventure is which of the following?',
        type: 'MCQ',
        options: [
          'Guido Mista',
          'Giorno Giovanna',
          'Jonathan Joestar',
          'Joey JoJo'
        ],
        correct: 1
      },
      {
        question:
          'In the ADV (English) Dub of the anime &quot;Ghost Stories&quot;, which character is portrayed as a Pentacostal Christian?',
        type: 'MCQ',
        options: [
          'Hajime Aoyama',
          'Satsuki Miyanoshita',
          'Mio Itai',
          'Momoko Koigakubo'
        ],
        correct: 3
      },
      {
        question:
          'Who wrote and directed the animated movie &quot;Spirited Away&quot; (2001)?',
        type: 'MCQ',
        options: [
          'Mamoru Hosoda',
          'Hayao Miyazaki',
          'Hidetaka Miyazaki',
          'Isao Takahata'
        ],
        correct: 1
      },
      {
        question:
          'In the &quot;Dragon Ball&quot; franchise, what is the name of Goku&#039;s brother?',
        type: 'MCQ',
        options: ['Vegeta', 'Gohan', 'Raditz', 'Bardock'],
        correct: 2
      },
      {
        question:
          'What is the name of the device that allows for infinite energy in the anime &quot;Dimension W&quot;?',
        type: 'MCQ',
        options: ['Tesla', 'Wires', 'Coils', 'Collectors'],
        correct: 2
      },
      {
        question:
          'In &quot;One Piece&quot;, which one of the following is NOT an Ancient Weapon?',
        type: 'MCQ',
        options: ['Pluton', 'Jupiter', 'Uranus', 'Poseidon'],
        correct: 1
      },
      {
        question:
          'In the &quot;Kagerou Daze&quot; series, Shintaro Kisaragi is prominently shown with the color red.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question:
          'In the &quot;Toaru Majutsu no Index&quot; anime, Touma Kamijou is a level 0 esper that has the ability to do what?',
        type: 'MCQ',
        options: [
          'Dispell any esper or magical powers',
          'Create electricity from his own body',
          'Teleport',
          'Make telepathic communications'
        ],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Entertainment: Music',
    questions: [
      {
        question:
          'What is the name of the 2016 mixtape released by Venezuelan electronic producer Arca?',
        type: 'MCQ',
        options: [
          '&amp;&amp;&amp;&amp;&amp;&amp;',
          'Entra&ntilde;as',
          'Xen',
          'Sheep'
        ],
        correct: 1
      },
      {
        question:
          'Which album by American rapper Kanye West contained songs such as &quot;Love Lockdown&quot;, &quot;Paranoid&quot; and &quot;Heartless&quot;?',
        type: 'MCQ',
        options: [
          'Graduation',
          '808s &amp; Heartbreak',
          'The Life of Pablo',
          'Late Registration'
        ],
        correct: 1
      },
      {
        question:
          '&quot;Twenty One Pilots&quot; made the song &quot;The Motion&quot; featuring Sampha.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'The &#039;In the Flesh&#039; tour was used in support of what Pink Floyd album?',
        type: 'MCQ',
        options: ['Wish You Were Here', 'The Final Cut', 'The Wall', 'Animals'],
        correct: 3
      },
      {
        question: 'Which music publication is often abbreviated to NME?',
        type: 'MCQ',
        options: [
          'New Metro Entertainment',
          'Next Musical Enterprise',
          'New Musical Express',
          'North Manchester Express'
        ],
        correct: 2
      },
      {
        question:
          'Metallica collaborated with Rowan Atkinson&#039;s Mr Bean on a 1992 comic relief single.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'What was Rage Against the Machine&#039;s debut album?',
        type: 'MCQ',
        options: [
          'Evil Empire',
          'The Battle Of Los Angeles',
          'Bombtrack',
          'Rage Against the Machine'
        ],
        correct: 3
      },
      {
        question:
          '&quot;Make You Feel My Love&quot; was originally written and performed by which singer-songwriter?',
        type: 'MCQ',
        options: ['Bob Dylan', 'Billy Joel', 'Elvis', 'Adele'],
        correct: 0
      },
      {
        question:
          'Which of these aliases has NOT been used by electronic musician Aphex Twin?',
        type: 'MCQ',
        options: ['GAK', 'Bradley Strider', 'Burial', 'Caustic Window'],
        correct: 2
      },
      {
        question: 'Pamina and Papageno are characters in what Mozart opera?',
        type: 'MCQ',
        options: [
          'The Impresario',
          'The Magic Flute',
          'The Marriage of Figaro',
          'The Goose of Cairo'
        ],
        correct: 1
      },
      {
        question: 'Who is the lead singer of Pearl Jam?',
        type: 'MCQ',
        options: [
          'Eddie Vedder',
          'Ozzy Osbourne',
          'Stone Gossard',
          'Kurt Cobain'
        ],
        correct: 0
      },
      {
        question: 'A Saxophone is a brass instrument.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 0
      },
      {
        question: 'What was The Velvet Underground&#039;s first album called?',
        type: 'MCQ',
        options: [
          'Loaded',
          'White Light / White Heat',
          'The Velvet Underground',
          'The Velvet Underground &amp; Nico'
        ],
        correct: 3
      },
      {
        question: 'Which popular rock band has a one-armed drummer?',
        type: 'MCQ',
        options: ['The Beatles', 'Lynyrd Skynyrd', 'Def Leppard', 'Foreigner'],
        correct: 2
      },
      {
        question: 'When was Gangnam Style uploaded to YouTube?',
        type: 'MCQ',
        options: ['2011', '2012', '2014', '2013'],
        correct: 1
      },
      {
        question:
          'Lead Singer Rivers Cuomo of American rock band Weezer attended Harvard.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: 'Which Twitch streamer is the vocalist for Red Vox?',
        type: 'MCQ',
        options: ['Vinesauce', 'The8BitDrummer', 'LIRIK', 'Sodapoppin'],
        correct: 0
      },
      {
        question: 'Which Nirvana album had a naked baby on the cover?',
        type: 'MCQ',
        options: ['In Utero', 'Bleach', 'Nevermind', 'Incesticide'],
        correct: 2
      },
      {
        question: 'Which of these albums is a Wu-Tang Clan album?',
        type: 'MCQ',
        options: [
          'The Low End Theory',
          'Licensed to Ill',
          'Perfect Hair',
          'Iron Flag'
        ],
        correct: 3
      },
      {
        question:
          'Kanye West&#039;s &quot;Gold Digger&quot; featured which Oscar-winning actor?',
        type: 'MCQ',
        options: [
          'Alec Baldwin',
          ' Bruce Willis',
          'Jamie Foxx',
          'Dwayne Johnson'
        ],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Entertainment: Comics',
    questions: [
      {
        question:
          'When Batman trolls the online chat rooms, what alias does he use?',
        type: 'MCQ',
        options: ['iAmBatman', 'BWayne13', 'BW1129', 'JonDoe297'],
        correct: 3
      },
      {
        question: 'What are the Three Virtues of Bionicle?',
        type: 'MCQ',
        options: [
          'Unity, Duty, Destiny',
          'Build, Play, Change',
          'Forge, Build, Fight',
          'Work, Play, Live'
        ],
        correct: 0
      },
      {
        question: 'What is Hellboy&#039;s true name?',
        type: 'MCQ',
        options: [
          'Anung Un Rama',
          'Ogdru Jahad',
          'Right Hand of Doom',
          'Azzael'
        ],
        correct: 0
      },
      {
        question:
          'In Black Hammer, what dimension does Colonel Weird travel through?',
        type: 'MCQ',
        options: ['Hyperspace', 'Phantom Zone', 'Mirror Universe', 'Para-Zone'],
        correct: 3
      },
      {
        question:
          'Better known by his nickname Logan, what is Wolverine&#039;s birth name?',
        type: 'MCQ',
        options: ['Logan Wolf', 'James Howlett', 'John Savage', 'Thomas Wilde'],
        correct: 1
      },
      {
        question:
          'In the Homestuck Series, what is the alternate name for the Kingdom of Lights?',
        type: 'MCQ',
        options: ['Yellow Moon', 'No Name', 'Golden City', 'Prospit'],
        correct: 3
      },
      {
        question: 'What was the name of the first Robin in the Batman comics?',
        type: 'MCQ',
        options: ['Tim Drake', 'Dick Grayson', 'Jason Todd', 'Bruce Wayne'],
        correct: 1
      },
      {
        question:
          'Which one of these superhero teams appears in the Invincible comics?',
        type: 'MCQ',
        options: [
          'Teenage Mutant Ninja Turtles',
          'Guardians of the Globe',
          'Justice League',
          'Avengers'
        ],
        correct: 1
      },
      {
        question:
          'In Calvin and Hobbes, what is the name of the principal at Calvin&#039;s school?',
        type: 'MCQ',
        options: ['Mr. Spitling', 'Mr. Boreman', 'Mr. Moe', 'Mr. Spittle'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Entertainment: Cartoon & Animations',
    questions: [
      {
        question: 'Which Sanrio character was introduced in 1996?',
        type: 'MCQ',
        options: ['My Melody', 'Badtz-Maru', 'Pompompurin', 'Kerropi'],
        correct: 2
      },
      {
        question:
          'What is lost in Hawaiian and is also the name of a little girl in a 2002 film which features a alien named &quot;Stitch&quot;?',
        type: 'MCQ',
        options: ['Lolo', 'Lucy', 'Lilo', 'Lulu'],
        correct: 2
      },
      {
        question:
          'Who created the Cartoon Network series &quot;Regular Show&quot;?',
        type: 'MCQ',
        options: [
          'Ben Bocquelet',
          'J. G. Quintel',
          'Rebecca Sugar',
          'Pendleton Ward'
        ],
        correct: 1
      },
      {
        question:
          'In the animated series RWBY, what is the name of the weapon used by Weiss Schnee?',
        type: 'MCQ',
        options: [
          'Crescent Rose',
          'Myrtenaster',
          'Ember Celica',
          'Gambol Shroud'
        ],
        correct: 1
      },
      {
        question: 'Nickelodeon is owned by what parent company?',
        type: 'MCQ',
        options: ['Viacom', 'FOX', 'CBS', 'ABC'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'History',
    questions: [
      {
        question: 'What were the first states to break away from Yugoslavia?',
        type: 'MCQ',
        options: [
          'Macedonia, Montenegro',
          'Montenegro, Slovenia',
          'Slovenia, Croatia',
          'Slovenia, Macedonia'
        ],
        correct: 2
      },
      {
        question: 'Which country was an allied power in World War II?',
        type: 'MCQ',
        options: ['Soviet Union', 'Germany', 'Japan', 'Italy'],
        correct: 0
      },
      {
        question:
          'What was the last colony the UK ceded marking the end of the British Empire?',
        type: 'MCQ',
        options: ['Hong Kong', 'Australia', 'Ireland', 'India'],
        correct: 0
      },
      {
        question: 'The pantheon in Rome was used to worship what god?',
        type: 'MCQ',
        options: [
          'Zeus',
          'Any god they wanted',
          'Both Athena and Zeus',
          'Athena'
        ],
        correct: 1
      },
      {
        question:
          'In what year was the last natural case of smallpox documented?',
        type: 'MCQ',
        options: ['1990', '1977', '1982', '1980'],
        correct: 1
      },
      {
        question:
          'The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      },
      {
        question: 'When was the SS or Schutzstaffel established?',
        type: 'MCQ',
        options: [
          'March 8th, 1935',
          'September 1st, 1941',
          'April 4th, 1925',
          'February 21st, 1926'
        ],
        correct: 2
      },
      {
        question: 'What year did Australia become a federation?',
        type: 'MCQ',
        options: ['1910', '1899', '1901', '1911'],
        correct: 2
      },
      {
        question: 'What happened on June 6, 1944?',
        type: 'MCQ',
        options: [
          'Attack on Pearl Harbor',
          'D-Day',
          'The Liberation of Paris',
          'Atomic bombings of Hiroshima and Nagasaki'
        ],
        correct: 1
      },
      {
        question:
          'Which is the hull NO. of the Fletcher class destroyer Fletcher?',
        type: 'MCQ',
        options: ['DD-992', 'DD-444', 'DD-445', 'DD-446'],
        correct: 2
      },
      {
        question: 'When did the Crisis of the Third Century begin?',
        type: 'MCQ',
        options: ['235 AD', '235 BC', '210 AD', '242 AD'],
        correct: 0
      },
      {
        question:
          'In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?',
        type: 'MCQ',
        options: ['Brazil', 'Peru', 'Argentina', 'Chile'],
        correct: 3
      },
      {
        question:
          'Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?',
        type: 'MCQ',
        options: ['The Sands', 'The Flamingo', 'The MGM Grand', 'The Sahara'],
        correct: 1
      },
      {
        question:
          'The Fallingwater House, located in Pennsylvania, was designed by which architect?',
        type: 'MCQ',
        options: [
          'Frank Lloyd Wright',
          'Antoni Gaudi',
          'Frank Gehry',
          'Le Corbusier'
        ],
        correct: 0
      },
      {
        question:
          'During the Spanish Civil War (1936), Francisco Franco fought for which political faction?',
        type: 'MCQ',
        options: [
          'Popular Front',
          'Papal State',
          'Nationalist Spain',
          'Republican Spain'
        ],
        correct: 2
      },
      {
        question:
          'King Henry VIII was the second monarch of which European royal house?',
        type: 'MCQ',
        options: ['Tudor', 'York', 'Lancaster', 'Stuart'],
        correct: 0
      },
      {
        question: 'Joseph Smith was the founder of what religion?',
        type: 'MCQ',
        options: ['Mormonism', 'Buddhism', 'Hinduism', 'Christianity'],
        correct: 0
      },
      {
        question:
          'When did Lithuania declare independence from the Soviet Union?',
        type: 'MCQ',
        options: [
          'December 25th, 1991',
          'December 5th, 1991',
          'March 11th, 1990',
          'April 20th, 1989'
        ],
        correct: 2
      },
      {
        question: 'Adolf Hitler was born on which date?',
        type: 'MCQ',
        options: [
          'April 16, 1889',
          'June 12, 1889',
          'February 6, 1889',
          'April 20, 1889'
        ],
        correct: 3
      },
      {
        question:
          'Which U.S. president took part in the Potsdam Conference, where the Allies reached a peace settlement with Germany?',
        type: 'MCQ',
        options: [
          'Franklin D. Roosevelt',
          'Dwight D. Eisenhower',
          'Herbert Hoover',
          'Harry S. Truman'
        ],
        correct: 3
      },
      {
        question: 'The collapse of the Soviet Union took place in which year?',
        type: 'MCQ',
        options: ['1992', '1990', '1991', '1891'],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Science: Mathematics',
    questions: [
      {
        question:
          'The French mathematician &Eacute;variste Galois is primarily known for his work in which?',
        type: 'MCQ',
        options: [
          'Abelian Integration',
          'Galois&#039; Continued Fractions',
          'Galois&#039; Method for PDE&#039;s ',
          'Galois Theory'
        ],
        correct: 3
      },
      {
        question:
          'You can square root a negative number with an imaginary number &quot;i&quot;.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question: '111,111,111 x 111,111,111 = 12,345,678,987,654,321',
        type: 'Single',
        options: ['True', 'False'],
        correct: 0
      }
    ]
  },
  {
    specialization: 'Celebrities',
    questions: [
      {
        question: 'What is Doug Walker&#039;s YouTube name?',
        type: 'MCQ',
        options: [
          'The Nostalgia Critic',
          'The Angry Video Game Nerd',
          'AngryJoeShow',
          'The Cinema Snob'
        ],
        correct: 0
      },
      {
        question: 'Marilyn Monroe was born on July 1, 1926.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question:
          'Tupac Shakur died due to complications from being stabbed in 1996.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      },
      {
        question: 'Who out of these actresses is the youngest?',
        type: 'MCQ',
        options: [
          'Bonnie Wright',
          'Emma Watson',
          'Ariel Winter',
          'Kiernan Shipka'
        ],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Vehicles',
    questions: [
      {
        question:
          'Volkswagen&#039;s legendary VR6 engine has cylinders positioned at what degree angle?',
        type: 'MCQ',
        options: ['45 Degree', '90 Degree', '15 Degree', '30 Degree'],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Entertainment: Television',
    questions: [
      {
        question:
          'How many seasons did the Sci-Fi television show &quot;Stargate Universe&quot; have?',
        type: 'MCQ',
        options: ['10', '3', '5', '2'],
        correct: 3
      },
      {
        question:
          'Who is the main character in the show &quot;Burn Notice&quot;?',
        type: 'MCQ',
        options: [
          'Michael Westen',
          'Fiona Glenanne',
          'Madeline Westen',
          'Sam Axe'
        ],
        correct: 0
      },
      {
        question:
          'Like his character in &quot;Parks and Recreation&quot;, Aziz Ansari was born in South Carolina.',
        type: 'Single',
        options: ['False', 'True'],
        correct: 1
      },
      {
        question:
          'Which company has exclusive rights to air episodes of the &quot;The Grand Tour&quot;?',
        type: 'MCQ',
        options: ['CCTV', 'Amazon', 'BBC', 'Netflix'],
        correct: 1
      },
      {
        question:
          'Which of following is rude and dishonorable by Klingon standards?',
        type: 'MCQ',
        options: [
          'Taking his D&#039;k tahg',
          'Reaching over and taking his meal',
          'Punching him and taking his ship station position',
          'Insulting and laughing at him at the dinner table'
        ],
        correct: 0
      },
      {
        question:
          'Who played Agent Fox Mulder in the TV sci-fi drama &quot;The X-Files&quot;?',
        type: 'MCQ',
        options: [
          'Robert Patrick',
          'Gillian Anderson',
          'Mitch Pileggi',
          'David Duchovny'
        ],
        correct: 3
      },
      {
        question: 'From what show is the character &quot;James Doakes&quot;? ',
        type: 'MCQ',
        options: [
          'Marvel&#039;s Daredevil',
          'The Walking Dead',
          'Dexter',
          'Boardwalk Empire'
        ],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Entertainment: Books',
    questions: [
      {
        question:
          'What is the name of the protagonist of J.D. Salinger&#039;s novel Catcher in the Rye?',
        type: 'MCQ',
        options: [
          'Fletcher Christian',
          'Holden Caulfield',
          'Randall Flagg',
          'Jay Gatsby'
        ],
        correct: 1
      },
      {
        question:
          'What is the name of the gang that Ponyboy is a part of in the book, The Outsiders?',
        type: 'MCQ',
        options: ['The Socs', 'The Greasers', 'The Outsiders', 'The Mafia'],
        correct: 1
      },
      {
        question:
          'According to The Hitchhiker&#039;s Guide to the Galaxy book, the answer to life, the universe and everything else is...',
        type: 'MCQ',
        options: ['Death', 'Loving everyone around you', 'Chocolate', '42'],
        correct: 3
      },
      {
        question:
          'In &quot;Little Women&quot;, which of the March sisters married Laurie?',
        type: 'MCQ',
        options: ['Jo', 'Meg', 'Amy', 'Beth'],
        correct: 2
      },
      {
        question:
          'By what nickname is Jack Dawkins known in the Charles Dickens novel, &#039;Oliver Twist&#039;?',
        type: 'MCQ',
        options: ['Fagin', 'The Artful Dodger', 'Mr. Fang', 'Bull&rsquo;s-eye'],
        correct: 1
      },
      {
        question:
          'In Alice in Wonderland, what is the name of Alice&#039;s kitten?',
        type: 'MCQ',
        options: ['Oscar', 'Smokey', 'Heath', 'Dinah'],
        correct: 3
      }
    ]
  },
  {
    specialization: 'Entertainment: Musicals & Theatres',
    questions: [
      {
        question: 'In Les Mis&eacute;rables, who is Prison Code 24601?',
        type: 'MCQ',
        options: [
          'Jean Valjean',
          'Jean Claude Van Damme',
          'Marius Pontmercy',
          'Javert'
        ],
        correct: 0
      },
      {
        question:
          'In which Shakespearean play will you find the suicide of Ophelia?',
        type: 'MCQ',
        options: ['Othello', 'Hamlet', 'Macbeth', 'King Lear'],
        correct: 1
      },
      {
        question: 'What is Jean ValJean&#039;s first prisoner number?',
        type: 'MCQ',
        options: ['24601', '9430', '32769', '1729'],
        correct: 0
      },
      {
        question:
          'In which Shakespearean play will you find the suicide of Ophelia?',
        type: 'MCQ',
        options: ['Othello', 'Macbeth', 'Hamlet', 'King Lear'],
        correct: 2
      }
    ]
  },
  {
    specialization: 'Mythology',
    questions: [
      {
        question:
          'According to Japanese folklore, what is the favorite food of the Kappa.',
        type: 'MCQ',
        options: ['Cucumbers', 'Kabocha', 'Soba', 'Nasu'],
        correct: 0
      },
      {
        question: 'Which of the following is NOT a god in Norse Mythology.',
        type: 'MCQ',
        options: ['Tyr', 'Snotra', 'Jens', 'Loki'],
        correct: 2
      },
      {
        question: 'A wyvern is the same as a dragon.',
        type: 'Single',
        options: ['True', 'False'],
        correct: 1
      }
    ]
  }
]

let count = 0
// const quezez = await postgres.quiz.createMany({
//   data: await Promise.all(
//     quizData.map(async s => {
//       if (count > faculty.length - 2) count = 0
//       count++
//       console.log(faculty[count].id)
//       return {
//         name: s.specialization,
//         duration: s.questions.length * 2,
//         isPublished: false,
//         specializationId: (
//           await postgres.specialization.findFirst({
//             where: {
//               name: s.specialization
//             },
//             select: {
//               id: true
//             }
//           })
//         ).id,
//         createdById: faculty[Math.floor(Math.random() * 13) + 1].id,
//         collegeId: '91d4727d-37c1-4e29-9e33-03b3f288fd55',
//         isPublished: false
//       }
//     })
//   )
// })
// console.log(JSON.stringify(faculty))
// const allQuiz = await postgres.quiz.findMany({
//   select: {
//     id: true,
//     name: true
//   }
// })
// for (let i = 0; i < allQuiz.length; i++) {
//   const quiz = quizData.find(s => s.specialization === allQuiz[i].name)
//   if (quiz) {
//     await postgres.quizQuestions.createMany({
//       data: quiz.questions.map(s => {
//         return {
//           question: s.question,
//           type: s.type,
//           quizId: allQuiz[i].id
//         }
//       })
//     })
//   }
//   console.log(quiz.specialization)
// }
//  const allQuiz = await postgres.quiz.findMany({
//    select: {
//      id: true,
//      name: true
//    }
//  })
//  for (let i = 0; i < allQuiz.length; i++) {
//    const quiz = quizData.find(s => s.specialization === allQuiz[i].name)
//    if (quiz) {
//      quiz.questions.forEach(async s => {
//        await postgres.quizQuestions.create({
//          data: {
//            question: s.question,
//            type: s.type,
//            quizId: allQuiz[i].id,
//            Choices: {
//              createMany: {
//                data: s.options.map((ch, i) => {
//                  return {
//                    text: ch,
//                    isCorrect: i === s.correct ? true : false
//                  }
//                })
//              }
//            }
//          }
//        })
//      })
//    }
//    console.log(quiz.specialization)
//  }
const main = async () => {
  const faculty = await postgres.user.findMany({
    where: {
      role: 'faculty'
    }
  })
  // const quezez = await postgres.quiz.createMany({
  //   data: await Promise.all(
  //     quizData2.map(async s => {
  //       if (count > faculty.length - 2) count = 0
  //       count++
  //       console.log(faculty[count].id)
  //       return {
  //         name: s.specialization + ' Quiz',
  //         duration: s.questions.length * 2,
  //         isPublished: false,
  //         specializationId: (
  //           await postgres.specialization.findFirst({
  //             where: {
  //               name: s.specialization
  //             },
  //             select: {
  //               id: true
  //             }
  //           })
  //         ).id,
  //         createdById: faculty[Math.floor(Math.random() * 13) + 1].id,
  //         collegeId: '91d4727d-37c1-4e29-9e33-03b3f288fd55',
  //         isPublished: false
  //       }
  //     })
  //   )
  // })
  // const quiz = await postgres.quiz.findMany({
  //   include: {
  //     Specialization: {
  //       select: {
  //         name: true
  //       }
  //     },
  //     Questions: {
  //       select: {
  //         Choices: {
  //           select: {
  //             id: true,
  //             isCorrect: true,
  //             text: true
  //           }
  //         },
  //         question: true,
  //         id: true,
  //         type: true
  //       }
  //     }
  //   }
  // })
  // console.log(JSON.stringify(quiz))
  // const allQuiz = await postgres.quiz.findMany({
  //   select: {
  //     id: true,
  //     name: true
  //   }
  // })
  // for (let i = 0; i < allQuiz.length; i++) {
  //   const quiz = quizData2.find(
  //     s => s.specialization + ' Quiz' === allQuiz[i].name
  //   )
  //   if (quiz) {
  //     quiz.questions.forEach(async s => {
  //       await postgres.quizQuestions.create({
  //         data: {
  //           question: s.question,
  //           type: s.type,
  //           quizId: allQuiz[i].id,
  //           Choices: {
  //             createMany: {
  //               data: s.options.map((ch, i) => {
  //                 return {
  //                   text: ch,
  //                   isCorrect: i === s.correct ? true : false
  //                 }
  //               })
  //             }
  //           }
  //         }
  //       })
  //     })
  //     console.log(quiz.specialization)
  //   }
  // }
}

main().then(() => console.log('done'))
