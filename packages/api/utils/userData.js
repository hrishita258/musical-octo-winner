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

const scrappedData = [
  {
    index: 0,
    result: [
      {
        ques: 'Which language should an Android developer use? ',
        options: ['Perl', 'PHP', 'Python', 'Java'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Java'
      },
      {
        ques: "Which one of these doesn't the Android Software Developer Kit include?",
        options: ['Recorder', 'Tutorials', 'A debugger', 'Sample code'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Recorder '
      },
      {
        ques: "On which platform Android SDK isn't available anymore? ",
        options: ['Android', 'Linux', 'IOS', 'Windows'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Android'
      },
      {
        ques: 'In which format are Android apps packed? ',
        options: ['.and', '.app', '.apk', '.avg'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: '.apk'
      },
      {
        ques: 'What is The Android Debug Bridge? ',
        options: ['A test framework', 'A toolkit', 'A code', 'A recorder'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'A toolkit'
      },
      {
        ques: 'Which command can save Android apps? ',
        options: ['Backup', 'Save', 'Continue', 'Restore'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Backup'
      },
      {
        ques: 'Which command line tools are required to use? ',
        options: [
          'Pandoc and babun',
          'HTTPie and icdiff',
          'Java Development Kit and Apache Ant',
          'Moro and Timetrap'
        ],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Java Development Kit and Apache Ant'
      },
      {
        ques: "What's fastboot? ",
        options: [
          'A library',
          'A debugger',
          'A language',
          'A diagnostic protocol'
        ],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'A diagnostic protocol '
      },
      {
        ques: "Which one of these isn't a fastboot command? ",
        options: ['Extract', 'Flash', 'Erase', 'Format'],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption: 'Extract '
      },
      {
        ques: 'Which statement is true?',
        options: [
          'Older platforms and tools can be downloaded for compatibility testing.',
          'Only new platforms and tools can be downloaded for compatibility testing.',
          'Android SDK has the fastest test runner.',
          'There is no debugger included in Android SDK.'
        ],
        title: 'Can You Be An Android Developer? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2260277/1525643993.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Listen here: Android developing is the new big thing and one of the best jobs of the future. You should really invest in yourself and try this app developing method. This quiz will help you determine are you made to be an Android developer or not.',
        correctOption:
          'Older platforms and tools can be downloaded for compatibility testing.'
      }
    ]
  },
  {
    index: 1,
    result: [
      {
        ques: 'Which of the names resonates with C#?',
        options: [
          'Dennis Richie',
          'Grace Hopper',
          'Anders Heijberg',
          'Larry Page'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Anders Heijberg'
      },
      {
        ques: 'Which of the following languages influenced C#?',
        options: ['Java', 'Pascal', 'C++', 'COBOL'],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Java'
      },
      {
        ques: 'Which is NOT one of the three ways to pass parameters to a method in C#?',
        options: [
          'Value Parameters',
          'Output Parameters',
          'Model Parameters',
          'Reference Parameters'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Model Parameters'
      },
      {
        ques: 'Within the .NET frame, what is used to organize class?',
        options: ['Namespace', 'Java', 'Lisp', 'GAC'],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Namespace'
      },
      {
        ques: 'A class member carried out when a class is made is...',
        options: ['Class indicator', 'Constructor', 'Cache', 'Boolean'],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Constructor'
      },
      {
        ques: 'The execution entry points for a C# console application is...',
        options: [
          'Parameter method',
          'Main method',
          '0100h method',
          'Dynamic method'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Main method'
      },
      {
        ques: 'What data type does C# support?',
        options: ['Integer', 'Characters', 'Boolean', 'Real'],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Boolean'
      },
      {
        ques: 'In C#, how are methods overloaded?',
        options: [
          'Having different data types',
          'Using the same number parameters',
          'Arranging in sequence of the parameters',
          'Trying to modify change'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Having different data types'
      },
      {
        ques: 'C# does not support...',
        options: [
          'Boolean',
          'Operator overloading',
          'Programming',
          'Multiple Inheritance'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Multiple Inheritance'
      },
      {
        ques: 'A struct is different from a class because...',
        options: [
          'Structs can be inherited',
          'Structs have poor performance',
          'Structs are passed by value',
          'Structs are not stored on stack'
        ],
        title: 'C# Software Developer Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513420304.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Are you planning to become a C# software developer or engineer any time soon? Whether at a big company or you're being interviewed by a potential client, take this sample interview questions to assess your knowledge of C# programming language.",
        correctOption: 'Structs are passed by value'
      }
    ]
  },
  {
    index: 2,
    result: [
      {
        ques: 'Which of the following use cases does NOT describe an inline editor?',
        options: [
          'Use when the value the user needs to edit is of a simple format, ie a text string, drop down box, radio button, etc.',
          'Use when the user needs to edit a relatively low number of fields.',
          'Use when the user needs to edit info in page that requires two steps.',
          'Use if you want the user to be able to edit a value without going to an administration page and remain on the same page.'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption:
          'Use when the user needs to edit info in page that requires two steps.'
      },
      {
        ques: 'This is an example of what UI Element?',
        options: [
          'Input Masking',
          'Breadcrumbs',
          'Natural Language Form',
          'Inline Editer'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Input Masking'
      },
      {
        ques: 'The user wants to make a purchase.   Consider the following use cases, which UI is the best choice?\nUse when the user wants to add items to a shopping cart.\nUse when the user wants to make a single purchase.\n ',
        options: [
          'Checkout Button',
          'Radion Button',
          'Buy Button',
          'Learn More Button'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Buy Button'
      },
      {
        ques: 'On a single step form, where should the primary call to actions be located?  ',
        options: [
          'Centered',
          'Right Justified',
          'Left Justified',
          'Non of the above'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Left Justified'
      },
      {
        ques: 'Where should views per page be located on a table?',
        options: ['Top Left', 'Bottom Right', 'Bottom Left', 'Top Right'],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Bottom Left'
      },
      {
        ques: 'Which of the following is NOT a good use of a modal?',
        options: [
          'To remind users to do something before moving forward and to inform users of important information.',
          'To capture information that requires two or more steps.',
          'To warn users of a potentially harmful situation.',
          'To allow the user to make a quick decision before moving forward.'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'To capture information that requires two or more steps.'
      },
      {
        ques: 'Which font face represents the standard H1 header used across the entire site?',
        options: [
          'Clearview Book 18px',
          'Clearview Book 14 px',
          'Omnes Light 36 px',
          'Omnes Light 48px'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Omnes Light 48px'
      },
      {
        ques: 'How wide is a base structure?',
        options: ['940', '980', '1280', '960'],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: '980'
      },
      {
        ques: 'What is the difference between a Java applet and a Java application?',
        options: [
          'An applet must be executed in a browser environment.',
          'An applet is not able to access the files of the computer it runs on',
          "An application can in general be trusted whereas an applet can't",
          'All of the above'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'All of the above'
      },
      {
        ques: 'Which is the valid declarations within an interface definition?',
        options: [
          'Static void methoda(double d1)',
          'Public final double methoda();',
          'Public double methoda();',
          'All'
        ],
        title: 'UI Java Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2169923/1513777098.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'UI (User Interface) is the bridge between a user and a computer program. The UI is one of the most important aspect of a computer program because it determines how the user interacts with a computer program. The Java UI Developer Assessment Test is to test how much a developer understands the workings of building a great UI. Take the test to check for your competence in the subject area.',
        correctOption: 'Public double methoda();'
      }
    ]
  },
  {
    index: 3,
    result: [
      {
        ques: 'A candidate of the Adobe Campaign Developer Test should have a minimum of how many years experience in SQL development?  ',
        options: ['1', '2', '3', '4'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Web service'
      },
      {
        ques: 'The Adobe Campaign Developer Test contains how many questions?',
        options: ['30', '31', '40', '41'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Customized campaign implementations'
      },
      {
        ques: 'What is the minimum passing score for the Campaign Developer certification?',
        options: ['77', '50', '66', '90'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Project management '
      },
      {
        ques: 'A basic knowledge in which of the following is required to partake in the test?',
        options: ['Web service', 'Technology', 'Digitalisation', 'Graphics'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Multiple Choice'
      },
      {
        ques: 'The certification equips the candidate with which of the following? ',
        options: [
          'Database graphics',
          'Customized campaign implementations',
          'Hacking skills',
          'JavaScript expertise'
        ],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: '3'
      },
      {
        ques: 'A typical candidate aspiring to take the test should have a basic knowledge of...',
        options: [
          'Software',
          'Estimation and statistics',
          'Paperwork',
          'Project management'
        ],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Programming'
      },
      {
        ques: 'The Adobe Campaign Developer Test consists of which kind of questions?',
        options: ['Theory', 'Multiple Choice', 'Writing', 'Essay'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'Digital marketer'
      },
      {
        ques: 'An experience in which of these would be beneficial to a candidate of the test?',
        options: ['Programming', 'Hacking', 'Marking', 'Tipping'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: 'IBM'
      },
      {
        ques: 'The Adobe Campaign Developer Certification would be beneficial to a...',
        options: ['Nurse', 'Doctor', 'Digital marketer', 'Player'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: '41'
      },
      {
        ques: 'Which of these enterprises is closely associated with the Adobe Campaign Developer?',
        options: ['IBM', 'CNN', 'FOX', 'JET'],
        title: 'Adobe Campaign Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1516069970.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Take this assessment test to find out if you qualify as an Adobe Campaign Developer. To qualify, you need some experience with ETL, SQL, JavaScript, XML, HTML, and Enterprise Software implementation.',
        correctOption: '66'
      }
    ]
  },
  {
    index: 4,
    result: [
      {
        ques: 'Hannah has stored a list of sports within the following one-dimensional array. The number of comparisons required to find the item ‘kayaking’ using a linear search is',
        options: ['3', '5', '6', '10'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: '6'
      },
      {
        ques: 'Which one of the following is an advantage of a wireless network over a wired network?',
        options: [
          'More reliable data transmission',
          'Less expensive set-up costs',
          'Slower data transfer rates',
          'Increased data security'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Less expensive set-up costs'
      },
      {
        ques: 'Which trace table is representative of the algorithm above immediately after the loop is executed for the second time?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Option 4'
      },
      {
        ques: 'When analysing a new software solution, the developers identified the following non-functional requirement: ‘All users of the solution will be using their own mobile device.’ To which characteristic is the non-functional requirement related?',
        options: [
          'Reliability',
          'Portability',
          'Maintainability',
          'User-friendliness'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Portability'
      },
      {
        ques: 'Saritha researched the different methods used to calculate whether an individual is within a healthy weight range. She chose to use the body mass index (BMI) method. Instead of entering values into a spreadsheet to calculate an individual’s BMI, she used her programming skills to write an application for mobile phones. Shown below is the user interface for the application that Saritha developed. It shows the BMI displayed when Jim, one of her classmates, entered his details into the application. The values for height and weight to calculate BMI need to be of which data types?',
        options: [
          'String and integer',
          'Integer and string',
          'Integer and integer',
          'Floating point and floating point'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Floating point and floating point'
      },
      {
        ques: 'Which one do you like?',
        options: [
          'Quick sort',
          'Bubble sort',
          'Linear search',
          '. selection sort'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Quick sort'
      },
      {
        ques: 'Which structural characteristic makes XML files distinguishable from other types of files?',
        options: [
          'Appropriate indentation',
          'The use of comma or tab delimiters',
          'The use of a standard library of tags',
          'The inclusion of a header, prolog or declaration statement'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption:
          'The inclusion of a header, prolog or declaration statement'
      },
      {
        ques: 'Which one do you like?',
        options: [
          'Reduce the number of user interfaces from six to three.',
          'Ensure that contrast is maximised on each user interface.',
          'Add alternative text to icons and images to meet the needs of a wider group of users.',
          'Add a menu item that allows a user to access any section from any other section in the application.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption:
          'Add a menu item that allows a user to access any section from any other section in the application.'
      },
      {
        ques: 'To function, the vast range of services that operate over the internet requires a library of technical and communication standards. The term for these technical and communication standards is',
        options: ['HTML.', 'Malware.', 'Monitors.', 'Protocols.'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Protocols.'
      },
      {
        ques: 'Use the following information to answer Questions 10 and 11. Courtney is designing a new GPS-based traffic monitoring application for smartphones. As part of the design process, she has decided to generate some evaluation criteria and develop an evaluation strategy. Which one of the following is a criterion that Courtney could use to evaluate the efficiency of the GPS application?',
        options: [
          'The application will allow users to update traffic conditions.',
          'The application will update real-time traffic conditions for users every five minutes.',
          'The application will allow users to request directions between two or more destinations.',
          'The application will generate and display directions within 10 seconds of the request from the user.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption:
          'The application will generate and display directions within 10 seconds of the request from the user.'
      },
      {
        ques: 'Courtney is researching how to develop an evaluation strategy for her new software solution. Key things that she should consider as she develops an evaluation strategy include',
        options: [
          'Software solution designs, functionality and usability testing, and how client feedback could be incorporated.',
          'The software requirements specification (SRS), use case diagrams and how client feedback could be incorporated.',
          'Project plan evaluation criteria, how the solution will be evaluated, adjustments to timeframes and why changes occurred.',
          'Software solution evaluation criteria, how the criteria will be measured, appropriate timeframe for evaluation to occur and who will be involved in the evaluation process.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption:
          'Software solution evaluation criteria, how the criteria will be measured, appropriate timeframe for evaluation to occur and who will be involved in the evaluation process.'
      },
      {
        ques: 'A programmer has been asked to improve the processing speed of a software solution. The solution reads data from a text file stored on a USB hard drive into RAM. Why is reading the data from RAM more efficient than reading the data from the file stored on the USB hard drive?',
        options: [
          'RAM is more cost-effective than USB hard drives.',
          'RAM has faster read/write speeds than USB hard drives.',
          'RAM generates significantly less heat than USB hard drives.',
          'RAM is not affected by magnetic fields as USB hard drives are.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'RAM has faster read/write speeds than USB hard drives.'
      },
      {
        ques: 'Each member of an organisation needs a username and password to be able to access the organisation’s local area network (LAN). Each member is allocated a unique username but they can each choose their own password. An appropriate data structure to store the username and password for each member of the organisation is',
        options: [
          'A Boolean value.',
          'A string value',
          'An associative array',
          'A one-dimensional array.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'An associative array'
      },
      {
        ques: 'What is the output generated by the pseudocode?',
        options: ['6,15', '6,16', '5,15', '15,5'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: '6,15'
      },
      {
        ques: 'Which control structure starts on line 4 and finishes on line 6?',
        options: ['Infinite', 'Iteration', 'Selection', 'Sequence'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Selection'
      },
      {
        ques: 'Use the following information to answer Questions 16 and 17. A social media platform tracks all user interactions on the platform. This includes user posts, mouse clicks, image and video views, and messages exchanged between users. This data is used to deliver targeted advertising to users and it is summarised to make changes to the platform. For the social media platform, the data used to deliver targeted advertising is considered to be',
        options: [
          'An input to the advertising module.',
          'An output from the advertising module',
          'Both an input to and an output from the advertising module',
          'Neither an input to nor an output from the advertising module'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'An input to the advertising module.'
      },
      {
        ques: 'For the social media platform, tracking user interactions and summarising the data to make changes to the platform is an example of',
        options: [
          'Data mining.',
          'Data searching.',
          'Data protection.',
          'Data extensions.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Data mining.'
      },
      {
        ques: 'After repeated downtime events, the network administrators of a large supermarket chain have contracted a network security analyst to identify the cause of the downtime events. The analyst starts the investigation by implementing a network monitoring tool that will record network traffic and interactions between users on the network. What is this approach commonly known as?',
        options: [
          'Implementing a firewall',
          'Setting up a honeypot',
          'Auditing network logs',
          'Installing anti-malware protections'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Auditing network logs'
      },
      {
        ques: 'The progress of this project has been recorded using',
        options: [
          'Annotations and adjustments.',
          'Progress journals.',
          'Change logs.',
          'SRS.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Annotations and adjustments.'
      },
      {
        ques: 'Dependencies are indicated',
        options: [
          'Using arrows',
          'By shading cells.',
          'In the ‘Task’ column.',
          'In the ‘Duration (weeks)’ column.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Using arrows'
      },
      {
        ques: 'In a Gantt chart, the completion of hardware installation is often a milestone in a project. A milestone shows that',
        options: [
          'A major delay in a project has been avoided.',
          'A major point in a project has been reached.',
          'A dependency in a project has been completed.',
          'No further work can happen until another task is complete.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'A major point in a project has been reached.'
      },
      {
        ques: 'Which one of the following is an example of a non-functional requirement for an online ordering system?',
        options: [
          'Use case diagrams must be drawn for each function.',
          'Display to the user the number of records in a database.',
          'Online ordering must be available 24 hours a day, seven days a week.',
          'Automated emails should be sent within 12 hours of receiving an online order'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption:
          'Online ordering must be available 24 hours a day, seven days a week.'
      },
      {
        ques: 'Storing client data only on an external hard disk drive at the end of the financial year is a form of',
        options: [
          'File disposal.',
          'Data security.',
          'Archiving data for future use.',
          'Back up in case the data is corrupted.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Archiving data for future use.'
      },
      {
        ques: 'Jack is writing a software solution that will produce an invoice. The software solution regularly accesses a section of code that calculates the goods and services tax (GST) payable on each item. This processing feature is referred to as',
        options: [
          'A method.',
          'A function.',
          'A calculation',
          'An instruction.'
        ],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'A function.'
      },
      {
        ques: 'How many times is the loop executed?',
        options: ['Four times', 'Five times', 'Six times', 'Seven times'],
        title:
          'Every Software Developer Should Pass This Test! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(211).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. If you think you are a smart software developer, you have to pass this test!',
        correctOption: 'Five times'
      }
    ]
  },
  {
    index: 5,
    result: [
      {
        ques: 'What does HTML stand for?  ',
        options: [
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language'
        ],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Yes'
      },
      {
        ques: 'Html:   Does the HTML above trigger a http request when the page first loads?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '< mark >'
      },
      {
        ques: 'HTML: Does main1.css have to be downloaded and parsed before Hello World is alerted?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Red'
      },
      {
        ques: 'Is < keygen > a valid HTML5 tag?  ',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption:
          'Applies style rules to all children of the scoped parent element'
      },
      {
        ques: 'Does the tag < bdo > change the direction of text?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Yes'
      },
      {
        ques: 'HTML: Is the above HTML valid?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'No'
      },
      {
        ques: 'In what situation should you use the < small > tag?  ',
        options: [
          'When you want to create subheading after a < h1 > element',
          'When you want to add copyright information inside a < footer >  ',
          'Both situations'
        ],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'All elements succeeding #example with move 5px upwards'
      },
      {
        ques: 'If you have a page of search results and want to highlight the search term, what HTML tag would you use?',
        options: ['< em >', '< strong >', '< mark >', '< highlight >'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Get and post'
      },
      {
        ques: 'HTML: What does the scoped attribute do?',
        options: [
          'Applies style rules to elements succeeding it, but with the same parent element',
          'Applies style rules to all children of the scoped parent element',
          'Applies style rules to IE browsers only',
          'None of the above'
        ],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '3'
      },
      {
        ques: 'HTML: Does the HTML above trigger a http request when the page first loads ?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Clear:both'
      },
      {
        ques: 'HTML: Does main1.css have to be downloaded and parsed before main2.css can be fetched?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Sprite'
      },
      {
        ques: 'HTML: Does  main2.css  have to be downloaded and parsed before Paragraph 1 is rendered on the page?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Owns'
      },
      {
        ques: 'Are CSS property names case-sensitive?',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Red'
      },
      {
        ques: 'Does setting margin-top and margin-bottom have an affect on an inline element?  ',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'No'
      },
      {
        ques: 'Does setting padding-top and padding-bottom on an inline element add to its dimensions?  ',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '1234'
      },
      {
        ques: 'If you have a < p > element with font-size: 10rem , will the text be responsive when the user resizes / drags the browser window?  ',
        options: ['Yes', 'No'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'No'
      },
      {
        ques: 'The pseudo class :checked will select inputs with type radio or checkbox, but not < option > elements.  ',
        options: ['True', 'False'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'No'
      },
      {
        ques: ' In a HTML document, the pseudo class :root always refers to the < html > element.  ',
        options: ['True', 'False'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '91'
      },
      {
        ques: 'The translate() function can move the position of an element on the z-axis.  ',
        options: ['True', 'False'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Yes'
      },
      {
        ques: 'What is the color of the text Sausage ? HTML: CSS:     ',
        options: ['Red', 'Blue', 'Neither'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '4'
      },
      {
        ques: 'What is the color of the text Sausage ? HTML: CSS:  ',
        options: ['Red', 'Blue', 'Neither'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Yes'
      },
      {
        ques: 'What is the color of the text Sausage ? HTML: CSS:  ',
        options: ['Red', 'Blue', 'Neither'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Hyper Text Markup Language'
      },
      {
        ques: 'What is the color of the text Sausage ? HTML: CSS:  ',
        options: ['Red', 'Blue', 'Neither'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: 'Yes'
      },
      {
        ques: 'What will happen to the position of #example? HTML: CSS:  ',
        options: [
          'It will move 5px downwards',
          'All elements succeeding #example with move 5px upwards',
          'Neither'
        ],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '2'
      },
      {
        ques: 'HTML: CSS: Are unused style resources still downloaded by the browser?  ',
        options: ['Yes', 'No', 'Sometimes'],
        title:
          'Senior Front End Developer Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Senior%20Front%20End%20Developer.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Do you want to be a senior front-end web developer, or are you already one? Here, we have a few front-end web development quiz questions and answers to check if you know how to create websites and web applications. Do you have basic knowledge of web development? What does HTML stand for? Front-end development is also called client-side development and is used to develop the GUI of a website. The quiz below contains some important questions that a front-end developer can easily solve. Good luck!',
        correctOption: '1'
      }
    ]
  },
  {
    index: 6,
    result: [
      {
        ques: 'Data locality is considered when scheduling',
        options: ['Job tracker', 'Map task', 'Reduce task', 'Task tracker'],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption: 'Map task'
      },
      {
        ques: 'Task scheduling is handled by',
        options: ['Reduce task', 'Task tracker', 'Map task', 'Job tracker'],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption:
          'The keys given to a reducer are in sorted order but the values associated with each key are in no predictable order'
      },
      {
        ques: 'Input splits created by',
        options: ['Driver program', 'Job tracker', 'Map task', 'Reduce task'],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption: 'Job tracker'
      },
      {
        ques: 'When is the earliest point at which the reduce method of a given Reducer can be called?',
        options: [
          'As soon as at least one mapper has finished processing its input split.',
          'As soon as a mapper has emitted at least one record.',
          'Not until all mappers have finished processing all records.',
          'It depends on the InputFormat used for the job.'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption: 'Driver program'
      },
      {
        ques: 'Which describes how a client reads a file from HDFS?',
        options: [
          'The client queries the NameNode for the block location(s). The NameNode returns the block location(s) to the client. The client reads the data directory off the DataNode(s).',
          'The client queries all DataNodes in parallel. The DataNode that contains the requested data responds directly to the client. The client reads the data directly off the DataNode.',
          'The client contacts the NameNode for the block location(s). The NameNode then queries the DataNodes for block locations. The DataNodes respond to the NameNode, and the NameNode redirects the client to the DataNode that holds the requested data block(s). The client then reads the data directly off the DataNode.',
          'The client contacts the NameNode for the block location(s). The NameNode contacts the DataNode that holds the requested data block. Data is transferred from the DataNode to the NameNode, and then from the NameNode to the client.'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption: 'Network I/O'
      },
      {
        ques: 'You are developing a combiner that takes as input Text keys, IntWritable values, and emits Text keys, IntWritable values. Which interface should your class implement?',
        options: [
          'Combiner (Text, IntWritable, Text, IntWritable)',
          'Mapper (Text, IntWritable, Text, IntWritable)',
          'Reducer (Text, Text, IntWritable, IntWritable)',
          'Combiner (Text, Text, IntWritable, IntWritable)'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption:
          'The Mapper stores the intermediate data on the underlying filesystem of the local disk of the machine which ran Map task'
      },
      {
        ques: 'How are keys and values presented and passed to the reducers during a standard sort and shuffle phase of MapReduce?',
        options: [
          'Keys are presented to reducer in sorted order; values for a given key are not sorted.',
          'Keys are presented to reducer in sorted order; values for a given key are sorted in ascending order.',
          'Keys are presented to a reducer in random order; values for a given key are not sorted.',
          'Keys are presented to a reducer in random order; values for a given key are sorted in ascending order.'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption:
          'Not until all mappers have finished processing all records.'
      },
      {
        ques: 'Assuming default settings, which best describes the order of data provided to a reducer’s reduce method:',
        options: [
          'The keys given to a reducer aren’t in a predictable order, but the values associated with those keys always are.',
          'Both the keys and values passed to a reducer always appear in sorted order.',
          'Neither keys nor values are in any predictable order.',
          'The keys given to a reducer are in sorted order but the values associated with each key are in no predictable order'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption:
          'The client contacts the NameNode for the block location(s). The NameNode then queries the DataNodes for block locations. The DataNodes respond to the NameNode, and the NameNode redirects the client to the DataNode that holds the requested data block(s). The client then reads the data directly off the DataNode.'
      },
      {
        ques: 'You’ve built a MapReduce job that denormalizes a very large table, resulting in an extremely large amount of output data. Which two cluster resources will your job stress? (Choose two).',
        options: ['Processor', 'RAM', 'Network I/O', 'Disk I/O'],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption: 'Combiner (Text, Text, IntWritable, IntWritable)'
      },
      {
        ques: 'In the execution of a MapReduce job, where does the Mapper place the intermediate data of each Map task?',
        options: [
          "The Hadoop framework hold the intermediate data in the TaskTracker's memory",
          'The Mapper transfers the intermediate data to the JobTracker, which then sends it to the Reducers',
          'The Mapper stores the intermediate data on the underlying filesystem of the local disk of the machine which ran Map task',
          'The Mapper transfers the intermediate data to the reducers as soon as it is generated by the Map task'
        ],
        title:
          'Certified Developer Quiz: How Much Do You Know About Apache Hadoop? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503911785.jpg',
        description:
          'Are you a developer? Why not take this super fun and informative Certified developer quiz? All the questions in the quiz are designed to test your knowledge and make you learn new things about the concept. Please make sure to read all the questions carefully before answering. Interestingly, you can use this quiz to refresh your knowledge for an upcoming quiz. The quiz has no time bar, so feel free to take this quiz as many times as you like. Keep learning and have fun!',
        correctOption:
          'Keys are presented to reducer in sorted order; values for a given key are not sorted.'
      }
    ]
  },
  {
    index: 7,
    result: [
      {
        ques: 'Which of these is one of the topics covered in the test?',
        options: ['Management', 'Java', 'Extended Events', 'Queries'],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Python and R'
      },
      {
        ques: 'MS SQL Server 2012 is a...',
        options: [
          'Data administration system',
          'Data management system',
          'Database administration system',
          'Database management system'
        ],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Extended Events'
      },
      {
        ques: "The test assesses participants' knowledge on...",
        options: [
          'Applications',
          'Systems',
          'Table-Valued Functions',
          'Workflows'
        ],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Data management system'
      },
      {
        ques: 'For the Mobility competency, which of the following tools is not essential?',
        options: [
          'Microsoft Intune',
          'System Center Configuration Manager',
          'Azure Real Directory',
          'Azure Rights Management'
        ],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'XML Data'
      },
      {
        ques: 'Which department uses MS SQL Server 2012 Developer the most?',
        options: [
          'Machine learning',
          'Web development',
          'System engineering',
          'Database administration'
        ],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: '15'
      },
      {
        ques: 'Which is one of the topics covered in the test?',
        options: ['Systems', 'Built-In Functions', 'Workflows', 'Management'],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: '5'
      },
      {
        ques: 'What are the two most suitable languages for MS SQL?',
        options: [
          'Java and Python',
          'Python and R',
          'Python and Java',
          'Python and C#'
        ],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Table-Valued Functions'
      },
      {
        ques: 'One of the topics covered in the test is...',
        options: ['Data Systems', 'XML Data', 'Databases', 'AWS'],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Azure Real Directory'
      },
      {
        ques: 'How many questions of this test are application-oriented?',
        options: ['5', '12', '15', '10'],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Database administration '
      },
      {
        ques: 'How many questions are theory-based?',
        options: ['15', '12', '5', '10'],
        title:
          'Intelligent MS SQL Server 2012 (Developer) Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521744436.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The MS SQL Server 2012 (Developer) Assessment Test is a pre-employment test used by recruiters to assess the knowledge gained through real work experience rather than theoretical knowledge of MS SQL Server 2012.',
        correctOption: 'Built-In Functions'
      }
    ]
  },
  {
    index: 8,
    result: [
      {
        ques: 'Adobe Campaign Developer is a cross-channel marketing?',
        options: ['Device', 'Campaign', 'Tool', 'None of the above'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Tool '
      },
      {
        ques: 'Adobe Campaign Developer is a flexible marketing tool and? extensible,',
        options: [
          'Content management',
          'Data security',
          'Extensible',
          'None of the above'
        ],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Extensible'
      },
      {
        ques: 'Adobe Campaign Developer integrates with a variety of?',
        options: [
          'Hybrid software',
          'External sources',
          'Package managers',
          'None of the above'
        ],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'External sources '
      },
      {
        ques: 'Adobe Campaign Developer has nice features and supports many different? ',
        options: ['Package', 'Service', 'Channel', 'Products'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Channel '
      },
      {
        ques: 'Adobe Campaign Developer maven plugin helps to package code and track? ',
        options: ['Software', 'Transaction', 'Content', 'Changes'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Changes'
      },
      {
        ques: 'Adobe Campaign Developer helps define packages in their own file for proper?',
        options: ['Code review', 'Analytics', 'Management', 'Maintenance'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Code review '
      },
      {
        ques: 'Adobe Campaign Developer make packaging single XML in XML proper?',
        options: [
          'Webpage',
          'Git branch',
          'Campaign package',
          'None of the above'
        ],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Campaign package '
      },
      {
        ques: 'In addition to combining multiple files, maven plugin also write additional?',
        options: ['Metadata', 'Specification', 'Protocol', 'Changes'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Metadata '
      },
      {
        ques: 'Maven plugin writes additional metadata to package spec like?',
        options: [
          'Version',
          'Branch and Commit information',
          'Included files',
          'All of the above'
        ],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'All of the above'
      },
      {
        ques: 'The maven and git releases are managed by the standard git?',
        options: ['Software', 'Package', 'Flow plugin', 'None of the above'],
        title:
          'What Do You Know About Adobe Campaign Developer - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520675539.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Adobe Campaign Developer is a marketing tool that is very versatile. And that is without taking into consideration its other features. So, a quiz to get things moving?',
        correctOption: 'Flow plugin '
      }
    ]
  },
  {
    index: 9,
    result: [
      {
        ques: 'What do you think about reading the rules for a board game?',
        options: [
          'A total waste of time that should not be necessary',
          "A fun and interesting insight into the designer's mind, almost as fun as playing",
          'Something that must be done before getting to the game'
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      },
      {
        ques: 'What is your favorite part of creating something?',
        options: [
          'Polishing the appearance to make it aesthetically pleasing',
          'Putting all the parts together to make an interesting whole',
          'Working on the most complicated and intricate parts'
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      },
      {
        ques: 'How do you feel about details?',
        options: [
          'Only important if they affect the aesthetics',
          "Don't let them get in the way of the overall magic",
          'Important as a means to an end'
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      },
      {
        ques: "When encountering an amazing event during your favorite game, what's the first thing to come to mind?",
        options: [
          'That was beautiful!',
          'I wonder why that happened...how can I repeat it?',
          'How did they do that (mechanically)?'
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      },
      {
        ques: 'Do you make decisions easily and quickly?',
        options: [
          "I'll have to get back to you on that",
          "Yes and no, now I'd like to ask you a question",
          "I'd like to know the root of the problem first"
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      },
      {
        ques: 'Do you doodle on paper constantly?',
        options: [
          'Yes, I draw on everything I see',
          'Drawing is fun, but I have trouble putting thoughts on paper to create anything meaningful',
          "It's all about the stick figures baby!"
        ],
        title: 'Why Type Of Game Developer Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(24)(309).jpg',
        description: 'Determine the portfolio submission specialization.',
        correctOption: null
      }
    ]
  },
  {
    index: 10,
    result: [
      {
        ques: 'What does libxml_clear_errors() do?',
        options: [
          'Retrieve array of errors',
          'Retrieve last error from libxml',
          'Remove blank nodes',
          'Clear libxml error buffer'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Clear libxml error buffer'
      },
      {
        ques: 'Which constant set small nodes allocation optimization?',
        options: [
          'LIBXML_NOENT',
          'LIBXML_COMPACT',
          'LIBXML_NOEMPTYTAG',
          'LIBXML_DTDLOAD'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'LIBXML_COMPACT'
      },
      {
        ques: 'Which string function converts a string of ASCII characters to hexadecimal values?',
        options: [
          'Addcslashes()',
          'Addslashes()',
          'Convert_cyr_string()',
          'Bin2hex()'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Bin2hex()'
      },
      {
        ques: 'Which string function(s) converts Hebrew text to visual text?',
        options: [
          'Hebrev()',
          'Hebrevc()',
          'Hex2bin()',
          'A and C',
          'A and B',
          'B and C'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'A and B'
      },
      {
        ques: 'Which is used for one-way string hashing?',
        options: ['Crypt()', 'Crc32()', 'Hebrevc()', 'Count_chars()'],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Crypt()'
      },
      {
        ques: 'What is the best practice for running MySQL queries in PHP?',
        options: [
          'Use mysql_query() and string escaped variables',
          'Use mysql_query() and variables with a blacklisting check',
          'Use PDO prepared statements and parameterized queries',
          'Use mysql_query() and variables'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Use PDO prepared statements and parameterized queries'
      },
      {
        ques: 'Which of the following will check if a function exists?',
        options: [
          'Has_function()',
          'None of these',
          'Function_exists()',
          '$a = “function to check”; if ($a ()) // then function exists'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Function_exists()'
      },
      {
        ques: 'What is the best way to send an email using the variables $to, $subject, and $body?',
        options: [
          'Sendmail(to,subject,body)',
          'Mail(to,subject,body)',
          'Sendmail($to,$subject,$body)',
          'Mail($to,$subject,$body)'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Mail($to,$subject,$body)'
      },
      {
        ques: 'What is the difference between Unix and Windows platforms when specifying a path?',
        options: [
          'They both use / and \\',
          'They use / only',
          'They use \\ only',
          'One uses / and \\ while the other uses / only'
        ],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'One uses / and \\ while the other uses / only'
      },
      {
        ques: 'Which filesystem function returns a character from an open file?',
        options: ['Fgetcsv()', 'Fgets()', 'Fgetss()', 'Fgetcsv()'],
        title: 'PHP Web Developer Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513637682.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'PHP is probably the most popular server scripting language. Also, PHP is a powerful tool for making dynamic and interactive Web pages. Here is a test to assess your knowledge PHP web development.',
        correctOption: 'Fgetcsv()'
      }
    ]
  },
  {
    index: 11,
    result: [
      {
        ques: 'What is the correct value to return to the operating system upon successful completion of a program in c?',
        options: ['0', '1', '-1', 'Program do not return a value'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Rasmus Lerdraf'
      },
      {
        ques: "What will be the output after execution of following code?#include<stdio.h>#include<stdlib.h>int main(){char ch;int i;ch='G';i=ch-'A';printf(\"%d\",i);}",
        options: ['8', '7', '6', '5', 'Error'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'SQLite'
      },
      {
        ques: 'What is the output of following code in c?#include#includeint main(){int i=0678;printf("%d",i);return 0;}',
        options: ['0678', '678', 'Compilation error', 'Runtime error'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Hr tag\n'
      },
      {
        ques: '"My salary was increased 15%"Select the statement which will EXACTLY reproduce above line.',
        options: [
          'Printf("My salary was increased 15%");',
          'Printf("My salary was increased 15\\%");',
          'Printf("My salary was increased \'15%\' ");',
          'Printf("My salary was increased 15%%");'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Compilation error'
      },
      {
        ques: 'What is the output of following?#include <stdio.h>#include <stdlib.h>int main() {     char str[] = "Smaller";    int a = 100;    printf(a > 10 ? "Greater" : "%s", str);    return 0;}',
        options: ['Greater', 'Smaller', '100', 'Compilation error'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption:
          'View wants to be just big enough to enclose its content (plus padding)'
      },
      {
        ques: 'How many times below for loop will run?#include<stdio.h>int main(){int i=0;for(;;){printf("%d",i++);}return 0;}',
        options: ['0 times', 'Infinite times', '1 time', 'Generates error'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Boolean'
      },
      {
        ques: 'What is the output of following?#include#includeint main(){int i=1;printf("%d%d%d",i++,i,++i);return 0;}',
        options: ['124', 'Compiler dependent', '223', '233'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Compiler dependent'
      },
      {
        ques: 'Guess the output. #include<stdio.h>int main(){    int a = 100, b = 200, c = 300;    if(!a >= 500)        b = 300;    c = 400;    printf("%d,%d,%d",a, b, c);    return 0;}',
        options: ['100,200,300', '100,200,400', '100,300,400', '100,300,300'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Greater'
      },
      {
        ques: 'What is the output of following? #include<stdio.h> void main(){   int i = 1;   while(i++<=5);       printf("%d ",i);}',
        options: ['7', '6', '5', '4'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '6'
      },
      {
        ques: 'Linker generate _________ file?',
        options: [
          'Object code',
          'Assembly code',
          'Executable code',
          'None of above'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '7'
      },
      {
        ques: 'Which of the following is not a keyword in java?',
        options: ['Static', 'Boolean', 'Void', 'Private'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Infinite times'
      },
      {
        ques: 'What is the size of byte variable?',
        options: ['8 bit', '16 bit', '32 bit', '64 bit'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Mysql_connect() function'
      },
      {
        ques: 'What is static block?',
        options: [
          'It is used to create syncronized code.',
          'There is no such block.',
          'It is used to initialize the static data member and It is excuted before main method at the time of class loading.',
          'None of the above.'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '78'
      },
      {
        ques: "What happens when thread's sleep() method is called?",
        options: [
          'Thread returns to the ready state.',
          'Thread returns to the waiting state.',
          'Thread starts running.',
          'None of the above.'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Cascading Style Sheet'
      },
      {
        ques: 'Which method of the Runnable interface that must be implemented by all threads?',
        options: ['Run()', 'Start()', 'Sleep()', 'Wait()'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '.css'
      },
      {
        ques: 'Specify the directory name where the XML layout files are stored in android.',
        options: ['/assets', '/src', '/values', 'None of the Above'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Text-transform:capitalize'
      },
      {
        ques: 'Can We inflate multiple layout or fragment on the same screen?',
        options: ['True', 'False'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Drop Table'
      },
      {
        ques: 'Which Build System/Tool is used to Build APK in Android Studio?',
        options: ['Gradle', 'Ant', 'Maven', 'Ansible'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Color'
      },
      {
        ques: 'What is wrap_content Layout parameter.',
        options: [
          'View wants to be as big as its parent (minus padding)',
          'View wants to be just big enough to enclose its content (plus padding)',
          'Both (A) and (B)',
          'None of the Above'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '0'
      },
      {
        ques: 'Which database is Serverless and mostly used for Stand-alone Devices?',
        options: ['MySql', 'SQLite', 'MongoDB', 'None of the Above'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Run()'
      },
      {
        ques: 'Who is known as father of PHP ?',
        options: [
          'Charles Reym',
          'Rasmus Lerdraf',
          'Prof. Thales',
          'Louis Pasture'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '100,200,400'
      },
      {
        ques: 'How a variable declared in PHP ?',
        options: [
          '$varname=$value;',
          'Varname=value;',
          '$varname=value;',
          'None of These'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'True'
      },
      {
        ques: 'What will the following script output?<?php$array = array (1, 2, 3, 5, 8, 13, 21, 34, 55);$sum = 0;for ($i = 0; $i < 5; $i++) {$sum += $array[$array[$i]];}echo $sum;?>',
        options: ['78', '19', 'Null', '5'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: '8 bit'
      },
      {
        ques: 'In PHP in order to access MySQL database you will use:',
        options: [
          'Mysqlconnect() function',
          'Mysql-connect() function',
          'Mysql_connect() function',
          'Sql_connect() function'
        ],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Thread returns to the waiting state.'
      },
      {
        ques: 'The ............. statement is used to delete a table.',
        options: ['Drop Table', 'Delete Table', 'Del table', 'Remove Table'],
        title: "Coder's Clan(Developer Recruit - Round 1) - ProProfs Quiz",
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2072762/1491299812.png',
        description: '',
        correctOption: 'Gradle'
      }
    ]
  },
  {
    index: 12,
    result: [
      {
        ques: 'What is the size of a Char?',
        options: ['4 bits', '7 bits', '8 bits', '16 bits'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: ' To keep track of data in the memory of the computer '
      },
      {
        ques: ' A class cannot be declared',
        options: ['Static', 'Private'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'True'
      },
      {
        ques: 'Following code will result in: int a = 3.5;',
        options: ['Compilation error', 'Runtime error'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: '&&'
      },
      {
        ques: 'Following code will result in: int a1 = 5; double a2 = (float)a1;',
        options: ['Runtime error', 'No errors'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'Runtime Exception '
      },
      {
        ques: ' Following code will result in: int a = 9/0;',
        options: [
          'Compilation error: Divisions must be in a try block.',
          'Runtime Exception'
        ],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: ' A group of code lines that performs a specific task '
      },
      {
        ques: 'Following code will result in: float a = 9/0',
        options: [
          'Compilation error: DivideByZeroException',
          'Runtime Exception'
        ],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: ' if ((x < 3) || (y > = 4)) '
      },
      {
        ques: 'A class can be transient',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'That your Boolean statement will at some point be false'
      },
      {
        ques: 'Following code will result in: class A { int b = 1; public static void main(String [] args) { System.out.println("b is " + b); }}',
        options: ['Compilation error', 'Runtime Error'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'True'
      },
      {
        ques: 'Following code will result in: class A { public static void main(String [] args) {A a = new B(); }} class B extends A {}',
        options: ['Compile error', 'No error'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'Runtime Exception '
      },
      {
        ques: 'Following code will result in: class A { public static void main(String [] args) {A a = new B(); }} class B extends A {}',
        options: ['Runtime Exception', 'No errors'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'FALSE'
      },
      {
        ques: 'Methods that are marked protected can be called in any subclass of that class.',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: ' 5 '
      },
      {
        ques: 'An abstract class can have non-abstract methods',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'VariableType variableName; '
      },
      {
        ques: 'Java keywords are written in lowercase as well as uppercase',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'Private '
      },
      {
        ques: 'What is an instanceof',
        options: ['A methods in object', 'An operator and keyword'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'AN OBJECT-ORIENTED PROGRAMMING LANGUAGE'
      },
      {
        ques: 'Primitive datatypes are allocated on a stack',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'No, not when A is abstract '
      },
      {
        ques: 'Can you compare a boolean to an integer?',
        options: ['Yes', 'No'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'Compile error '
      },
      {
        ques: 'If class A implements an interface does it need to implement all methods of that interface?',
        options: ['Yes, always', 'No, not when A is abstract'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'A JAVA PROGRAM THAT IS RUN THROUGH A WEB BROWSER'
      },
      {
        ques: 'Integer a = new Integer(2); Integer b = new Integer(2); What happens when you do if (a==b)?',
        options: ['True', 'FALSE'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption:
          ' A segment of code to be run a specified amount of times '
      },
      {
        ques: 'The methods wait(), notify() and notifyAll() in Object need to be called from synchronized pieces of code.',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'Compilation error '
      },
      {
        ques: 'Inner classes can be defined within methods',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'True'
      },
      {
        ques: 'Synchronized is a keyword to tell a Thread to grab an Object lock before continuing execution.',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'An operator and keyword '
      },
      {
        ques: 'The default statement of a switch is always executed',
        options: ['True', 'False'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'No errors '
      },
      {
        ques: 'How can you prevent a member variable from becoming serialized?',
        options: ['By marking it volatile', 'By marking it transient'],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'All of the Above '
      },
      {
        ques: 'What is Java (in regard to Computer Science) ?',
        options: [
          ' A type of coffee',
          'AN OBJECT-ORIENTED PROGRAMMING LANGUAGE'
        ],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: 'False'
      },
      {
        ques: 'WHAT IS AN APPLET?',
        options: [
          'A JAVA PROGRAM THAT IS RUN THROUGH A WEB BROWSER',
          ' A type of coffee'
        ],
        title:
          'Java Programming And Software Engineering Fundamentals - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(10)(281).jpg',
        description:
          'If you are preparing for Java developer, then you should definitely take this Java fundamentals programming quiz.',
        correctOption: ' The word "while" '
      }
    ]
  },
  {
    index: 13,
    result: [
      {
        ques: 'GUI stands for graphical underlying interaction.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'False'
      },
      {
        ques: 'The first video game consoles were sold in the late 1970s.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'True'
      },
      {
        ques: 'Super Mario Brothers was the first computer game.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'False'
      },
      {
        ques: 'A game storyboard is an outline showing how a game will develop or play out.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'True'
      },
      {
        ques: 'Testing is not an important step in creating new electronic games.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'False'
      },
      {
        ques: 'Simulation programs can be used for entertainment and training purposes.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'True'
      },
      {
        ques: 'Computer and video games may be adapted fron an existing game, activity, or event.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'True'
      },
      {
        ques: 'New game consoles will only be used for game play using cartridges.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'False'
      },
      {
        ques: 'Computer and video gaming is an industry worth billions of dollars.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'True'
      },
      {
        ques: 'Computer games are meant to be played by one person working alone at a computer.',
        options: ['True', 'False'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'False'
      },
      {
        ques: 'A complete screen, or the set of all the lements representing it.',
        options: ['MIDI', 'Storyboard', 'GUI', 'Frame'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'Frame'
      },
      {
        ques: 'The use of more than one medium for conveying information. Combined music and sound make a multimedia presentation.',
        options: ['GUI', 'MIDI', 'Frame', 'Multimedia'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'Multimedia'
      },
      {
        ques: 'A previsualization tool used to outline and organize the sequence of events in a game.',
        options: ['Storyboard', 'Simulator', 'Multimedia', 'Frame'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'Storyboard'
      },
      {
        ques: 'A person who develops and tests computer programs.',
        options: ['Programmer', 'Simulator', 'Licensing', 'Framer'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'Programmer'
      },
      {
        ques: 'A program or device that enables a user to reproduce under test conditions events that could occur in reality.',
        options: ['Simulator', 'Programmer', 'Framer', 'Licensor'],
        title:
          'Computer Game Development Quiz Questions And Answers - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(20)(245).jpg',
        description:
          'Are you a computer game developer? If so, here we have an interesting computer game development quiz for you. Take this quiz to review your knowledge regarding computer or video games. A game developer is generally a software developer (or programmer) who develops games for phones, tablets, PCs, and consoles. If you are a true developer or working hard to be one, this quiz is recommended to you. The questions are in either true-false or MCQs mode. Please read the questions carefully before submitting your answers.',
        correctOption: 'Simulator'
      }
    ]
  },
  {
    index: 14,
    result: [
      {
        ques: 'With which kind of communication do you identify yourself the most?',
        options: [
          'Communication with clients',
          'Communication with coworkers',
          'Oral communication',
          'Written communication',
          'Technology-related communication',
          'Graphic-related communication'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'How would you describe your problem solving skills?',
        options: ['Excellent', 'Good', 'Average', 'Bad', 'Awful', 'Poor'],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'How often do you like working in a team...',
        options: [
          'Always',
          'Most of the time',
          'Usually',
          'Sometimes',
          'Hardly',
          'Never'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'Do you enjoy management roles?',
        options: [
          'Yes, very much',
          'Yes',
          "Doesn't bother me",
          'No',
          'No way',
          'A little'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'Your creative skills are..',
        options: ['Excellent', 'Very good', 'Good', 'Average', 'Bad', 'Poor'],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'Select which statement best applies to you',
        options: [
          'Can work well under pressure and prioritize work, good with people',
          'Understand different technologies and how they should be used',
          'A business-oriented person, and an understanding of customer needs',
          'Self motivated, patient and persistent, and likes to work alone',
          'Like to work in public, and can remain calm under pressure',
          'Likes technology and enjoy working with graphics'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'Would you prefer a highly technical role?',
        options: [
          'Definitely',
          'Yes, most likely',
          'I would',
          'I guess',
          'No, not really',
          'Definitely not'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      },
      {
        ques: 'Do you think logically and analytically?',
        options: [
          'All the time',
          'Most of the time yes',
          'This usually applies to me',
          'I am able to',
          'This does not usually apply to me',
          'This rarely applies to me'
        ],
        title:
          'Translation Career Quiz: Matching Your Personality To Different Career Roles In Translation - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1766820/6641969179.jpg',
        description:
          'This quiz will help determine which position in translation Translation best suits you. Your answers will help us select one of the following roles for you:TranslatorInterpreterProject ManagerBusiness DeveloperDesktop PublisherLocalization Engineer',
        correctOption: null
      }
    ]
  },
  {
    index: 15,
    result: [
      {
        ques: 'In which category SharePoint 2013 fit?',
        options: ['Hardware', 'Finance', 'Online currency', 'Web-based'],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Web-based'
      },
      {
        ques: 'What is its former name?',
        options: [
          'Office server',
          'Web server',
          'Web protector',
          'Tahoe directory'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Office server'
      },
      {
        ques: 'Which of these operating system does it use?',
        options: [
          'Windows server R2 2008',
          'Windows server XP',
          'Windows core',
          'Windows 2007'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Windows server R2 2008'
      },
      {
        ques: 'What does CMS mean?',
        options: [
          'Classic Microsoft Software',
          'Content Management Software',
          'Content Management System',
          'Classic Management Software'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Content Management System'
      },
      {
        ques: 'Where will the SharePoint installed for customers?',
        options: [
          "Customer's IT infrastructure",
          "The customer's computer",
          'The Internet',
          'The interface'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: "Customer's IT infrastructure"
      },
      {
        ques: 'Which of these services will SharePoint not perform?',
        options: [
          'Record management',
          'Word automation',
          'Managed metadata',
          'Storing tools'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Storing tools'
      },
      {
        ques: 'Which of these can be used for storing personal documents?',
        options: [
          'Onedrive for business',
          'SharePoint coral',
          'SharePoint store',
          'Server bank'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Onedrive for business'
      },
      {
        ques: 'What will you use to configure SharePoint 2013?',
        options: [
          "Your customer's data",
          'Wi-Fi connection',
          'Microsoft office suite',
          'A web browser'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'A web browser'
      },
      {
        ques: 'What is a logical grouping of SharePoint server?',
        options: ['A shell', 'A cabinet', 'A farm', 'A server'],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'A farm'
      },
      {
        ques: 'Which of these evolutions happens in 2010 version to bring about the 2013',
        options: [
          'Central administration rebuilt',
          'New UI with fluent Ribbon',
          'New social profiles features',
          'Onedrive for business'
        ],
        title: 'Sharepoint 2013 Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1567424947.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SharePoint 2013 Assessment Test is designed to assess your application and practical capacities as a developer specializing in SharePoint 2013. Take this quiz to find out more.',
        correctOption: 'Onedrive for business'
      }
    ]
  },
  {
    index: 16,
    result: [
      {
        ques: 'How many section(s) does the question have? ',
        options: ['1', '2', '3', '4'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: 'Recruiters and employers'
      },
      {
        ques: 'There are how many questions in the test? ',
        options: ['20', '30', '45', '60'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '1'
      },
      {
        ques: 'How many minutes is the extra time given to the candidates? ',
        options: ['0', '2', '3', '5'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '30'
      },
      {
        ques: 'How many minutes is allowed in the test? ',
        options: ['20 minutes', '30 minutes', '45 minutes', '60 minutes'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '0'
      },
      {
        ques: 'The test contains how many questions on Teradata Physical Design and Implementation? ',
        options: ['5', '7', '10', '15'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '30 minutes '
      },
      {
        ques: 'How many minutes is the extra minutes usually given to the candidates? ',
        options: ['0', '2', '3', '5'],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: 'Database statistics'
      },
      {
        ques: 'An expert in Teradata 12 Administration is a person who can manage...',
        options: [
          'External Teradata database',
          'Internal Teradata database',
          'Internal and external Teradata database',
          'None of the above'
        ],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '15'
      },
      {
        ques: 'The test contains meaningful questions on...',
        options: [
          'Teradata Physical Design and Implementation',
          'Teradata Database Administration',
          'A and B',
          'None of the above'
        ],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: 'Internal and external Teradata database'
      },
      {
        ques: 'The test enables ____ and ____ to identify potential hires by evaluating working skills and job readiness.',
        options: [
          'Recruiters and owners',
          'Employers and managers',
          'Recruiters and employers',
          'None of the above'
        ],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: '0'
      },
      {
        ques: 'The Teradata database administrator can manage...',
        options: [
          'Database statistics',
          'Data statistics',
          'A and B',
          'None of the above'
        ],
        title:
          'Quiz Yourself On Teradata Database Administration 12 Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1513548751.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Teradata Database Administration Test helps recruiters evaluate the candidate for Teradata Administrator Developer position. Take this quiz to evaluate your knowledge of this test.',
        correctOption: 'A and B'
      }
    ]
  },
  {
    index: 17,
    result: [
      {
        ques: 'The Sqoop Test covers one of these.',
        options: ['Low command', 'Export command', 'Short data', 'Big data'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Version command'
      },
      {
        ques: ' Which of these is a framework for storing and analyzing big data?',
        options: ['Apache Hadoop', 'IBM', 'Python', 'Ubuntu'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Export command'
      },
      {
        ques: 'Who is one of the founders of Cloudera?',
        options: ['Ibim Khalo', 'Amr Awadallah', 'Fred Garcia', 'Leo Tunne'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Oracle'
      },
      {
        ques: 'Which of these is covered in the sqoop test?',
        options: [
          'Power testing',
          'Inhouse data',
          'Expert command',
          'Version command'
        ],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Apache Flume'
      },
      {
        ques: ' A kind of a relational database management system is?',
        options: ['Oracle', 'Coding', 'System', 'Oozie'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Apache Hadoop'
      },
      {
        ques: 'A system used for moving massive quantities of streaming data is?',
        options: ['IBMO', 'Flood', 'Apache Flume', 'MySQL'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: ' Amr Awadallah '
      },
      {
        ques: 'One of the uses of Sqoop include?',
        options: [
          'System management',
          'Data extraction',
          'Software building',
          'Software app'
        ],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Data extraction'
      },
      {
        ques: 'The Apache Sqoop is used for one of these.',
        options: [
          'App testing',
          'Accumulation',
          'Data transfer',
          'Bug testing'
        ],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Data transfer'
      },
      {
        ques: 'Which of this is an advantage of Sqoop?',
        options: [
          'Cost efficiency',
          'Software testing',
          'App building',
          'Data building'
        ],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'Cost efficiency'
      },
      {
        ques: 'Which of these is a kind of database management system?',
        options: ['Python', 'MySQL', 'Analyt', 'Avo'],
        title: 'What Do You Know About Big Data Sqoop Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1518986969.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Sqoop Test is designed by experts which helps recruiters to test the skills of a Sqoop developer before hiring. It is an online assessment test and is most suitable for those who want to build a career in Big Data Testing.',
        correctOption: 'MySQL'
      }
    ]
  },
  {
    index: 18,
    result: [
      {
        ques: 'Autodesk 3ds Max it has modeling capabilities and a flexible?',
        options: ['Plugin', 'Patch', 'Shareware', 'Middleware'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Plugin '
      },
      {
        ques: 'Autodesk 3ds Max architecture can be used on the?',
        options: ['Microsoft windows', 'MacOS', 'Unix OS', 'None of the above'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Microsoft windows '
      },
      {
        ques: 'Autodesk 3ds Max is also used for movie effects and movie?',
        options: [
          'Pre-visualization',
          'Aptitude',
          'Qualitative',
          'None of the above'
        ],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Pre-visualization '
      },
      {
        ques: 'Autodesk 3ds Max is frequently used by?',
        options: [
          'Video games developers',
          'Animations artist',
          'Graphic artist',
          'None of the above'
        ],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Video games developers '
      },
      {
        ques: 'For its modelling animation tools, the last version of 3ds Max also features?',
        options: ['Shaders', 'Wheel', 'Canvas', 'Vector'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Shaders '
      },
      {
        ques: 'Autodesk 3ds Max is also used for creation and rendering and?',
        options: [
          'Global illumination',
          'Dynamic simulation',
          'Particle systems',
          'All of the above'
        ],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'All of the above'
      },
      {
        ques: 'The original 3D Studio product was created for the DOS platform by?',
        options: ['Gary Yost', 'Chris Dune', 'Josh Max', 'Ellen Coln'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Gary Yost '
      },
      {
        ques: 'Autodesk 3ds Max and Yost Group created the product and it was published by?',
        options: ['AutoCAD', 'Autodesk', 'Simula', 'None of the above'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Autodesk '
      },
      {
        ques: 'The release of 3D Studio made Autodesk’s previous 3D rendering package AutoShade?',
        options: [
          'Obsolete',
          'Mainstream',
          'Adopted',
          'None of the aboveOption 2'
        ],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: 'Obsolete '
      },
      {
        ques: 'Autodesk acquired 3D Max and branded it with Autodesk logo, the short name was changed to?',
        options: ['3ds Max', '3D max', '3d Max', 'None of the above'],
        title: 'How Well Do You Know 3ds Max - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1605082406.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Autodesk 3Ds Max is a 3D graphics developer. In other words, you can use it for designing cartoons fot example. With that said, we want you to go through some interesting questions.',
        correctOption: '3ds Max '
      }
    ]
  },
  {
    index: 19,
    result: [
      {
        ques: 'The Santa Monica Studio is owned by ',
        options: [
          'Sony',
          'Sony Entertainment',
          'Sony Interactive Entertainment',
          'Sony Inc'
        ],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'October 2001'
      },
      {
        ques: 'The Santa Monica Studio is based in ',
        options: ['New Jersey', 'Rhodes Island', 'Los Angeles ', 'Georgia '],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: '2003'
      },
      {
        ques: 'When was the company established?',
        options: ['1998', '1999', '2000', '1997'],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'November 2006'
      },
      {
        ques: 'The head of the company is ',
        options: [
          'Sharon James',
          'Jude Robin',
          'Shannon Studstill',
          'Cob Trees'
        ],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'January 2014'
      },
      {
        ques: 'The number of employees of the company is about ',
        options: ['220', '200', '250', '230'],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'Shannon Studstill'
      },
      {
        ques: 'The first developed game of the company are Kinetica and ',
        options: [
          'War of Monsters',
          'God of War',
          'Downhill Damnation',
          'The Con'
        ],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'Sony Interactive Entertainment'
      },
      {
        ques: 'When was the Kinetica released?',
        options: [
          'October 2001',
          'November 2001',
          'January 2002',
          'April 2002'
        ],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'Los Angeles '
      },
      {
        ques: 'When was the War of Monsters released?',
        options: ['2003', '2002', '2004', '2005'],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: '220'
      },
      {
        ques: 'The Blast Factor was released in ',
        options: ['November 2006', 'April 2005', 'March 2006', 'November 2006'],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: 'God of War'
      },
      {
        ques: 'The Santa Monica Studio moved to Playa Vista in ',
        options: ['January 2014', 'March 2015', 'May 2013', 'January 2012'],
        title: 'Do You Know Santa Monica Studio? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2236918/1520430916.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'The Santa Monica Studio is a foremost video game developer of American origin. This test examines your knowledge of games developed by Santa Monica Studio, and history of the company among others.',
        correctOption: '1999'
      }
    ]
  },
  {
    index: 20,
    result: [
      {
        ques: 'How do you pronounce "watir"? ',
        options: [
          'Like "waiter"',
          'Like "water"',
          "Like it's spelled",
          'Without the last letter "r"'
        ],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'OLE'
      },
      {
        ques: 'Finish the statement: Watir is an open-source family of ______ libraries! ',
        options: ['Ruby', 'Sapphire', 'Jade', 'Emerald'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption:
          'Watir-classic directly drives the browser through the OEL protocol.'
      },
      {
        ques: "Name one watir project that's more important than the others!  ",
        options: ['Watir-modern', 'Watir-neo', 'Watir-old', 'Watir-classic'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Gem'
      },
      {
        ques: 'Name another important watir project! ',
        options: [
          'Watir-webgenie',
          'Watir-webdriver',
          'Watir-webmaster',
          'Watir-webguru'
        ],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Like "water"'
      },
      {
        ques: "What's watir-webdriver based on? ",
        options: ['Mercury', 'Calcium', 'Oxygen', 'Selenium'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Ruby'
      },
      {
        ques: "Name one of watir's developers! ",
        options: [
          'Bret Pettichord',
          'Brad Pettichord',
          'Ben Pettichord',
          'Bill Pettichord'
        ],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Watir-classic'
      },
      {
        ques: 'When was watir released? ',
        options: ['In 1965', 'In 2000', 'In 2017', 'In 1994'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Bret Pettichord'
      },
      {
        ques: 'Which Ruby capabilities does watir use? ',
        options: ['WEB', 'OLE', 'NET', 'CEO'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Watir-webdriver'
      },
      {
        ques: 'Which statement is true? ',
        options: [
          'Watir-classic and watirspec are the same thing.',
          "Watir-classic can't operate outside Internet Explorer.",
          'Watir-classic directly drives the browser through the OEL protocol.',
          "Watir-classic doesn't drive on Mac."
        ],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'Selenium'
      },
      {
        ques: 'Finish the sentence: Watir is available as a RubyGem ____!',
        options: ['Gem', 'Diamond', 'Stone', 'Rock'],
        title: 'What Do You Know About Watir Test? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2239999/1521527060.png',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Our future is in web developing. New ways of improving our online experience are being developed constantly. Watir is one of those advanced programs. Tell us what you know about watir! Maybe you're a developer, or just a know it all who till ace this quiz.",
        correctOption: 'In 2017'
      }
    ]
  },
  {
    index: 21,
    result: [
      {
        ques: 'Which of the following is a topic covered in the test?',
        options: [
          'File System Counter',
          'Data query',
          'Absolute query',
          'Database management'
        ],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Hadoop Developer - MapReduce'
      },
      {
        ques: 'What is the duration of the Mapreduce Assessment Test?',
        options: ['30', '40', '60', '20'],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Grid'
      },
      {
        ques: 'The MapReduce programming model  is useful in?',
        options: [
          'Hardware modelling',
          'Software input',
          'Processing huge data',
          'Coding'
        ],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Singular Value Decomposition'
      },
      {
        ques: 'The MapReduce Assessment Test contains questions on?',
        options: [
          'UX/UI',
          'Hadoop Supplied Interfaces',
          'Interface System',
          'Database System'
        ],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Job methods'
      },
      {
        ques: 'This pre-employment test is useful for hiring a?',
        options: [
          'Hadoop Developer - MapReduce',
          'Hacker',
          'Computer Engineer',
          'Systems Informant'
        ],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'File System Counter'
      },
      {
        ques: 'The test contains questions on?',
        options: ['Workload', 'Turner', 'Queries', 'Job methods'],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Infrastructure'
      },
      {
        ques: 'The "MapReduce System" is also called?',
        options: ['Infrastructure', 'Development', 'Reduction', 'Coding'],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: '20'
      },
      {
        ques: 'If all nodes are on the same local network, they are collectively referred to as?',
        options: ['Cluster', 'Bunch', 'Key', 'Rim'],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Processing huge data'
      },
      {
        ques: 'If the nodes are shared across geographically distributed systems, they are called?',
        options: ['Line', 'Key', 'Grid', 'Press'],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Hadoop Supplied Interfaces'
      },
      {
        ques: 'MapReduce is useful in the application of? ',
        options: [
          'Infraction',
          'Singular Value Decomposition',
          'Multiple Documentation',
          'Coded System'
        ],
        title: 'Intelligent MapReduce Assessment Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1521123096.JPG',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Testing knowledge on topics such as MapReduce Version 2 and Process MapReduce Job methods, the Intelligent MapReduce Assessment Test is a re-employment test designed to evaluate the application and practical skills of a MapReduce developer before an interview.',
        correctOption: 'Cluster'
      }
    ]
  },
  {
    index: 22,
    result: [
      {
        ques: 'SSIS is a platform for _____',
        options: [
          'Data integration',
          'Workflow integration',
          'Media integration',
          'Visual integration'
        ],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'Data transformation services'
      },
      {
        ques: 'In what year was SSIS first released? ',
        options: ['2010', '2002', '2005', '2003'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'BIDS'
      },
      {
        ques: 'SSIS was introduced to replace _____',
        options: [
          'Visual Studio Essentials',
          'Warehouse transformation services',
          'Data transformation services',
          'Extraction studio services'
        ],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: '2008R2'
      },
      {
        ques: 'Which of these is a visual development tool used to create or maintain SSIS packages?',
        options: ['SIDS', 'BIDS', 'LIDS', 'MIDS'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'Microsoft'
      },
      {
        ques: 'SSIS can be used on all SQL server editions except _____',
        options: ['Express', '2014', '2008R2', '2016'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'SETDU'
      },
      {
        ques: 'Who is the main developer of SSIS?',
        options: ['Linux', 'Apple', 'Google', 'Microsoft'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'Extract, Transform and Load'
      },
      {
        ques: 'Which of the following is not a tool in SSIS?',
        options: ['DTEXEC', 'DTUTIL', 'DLE DB Command', 'SETDU'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'Data integration'
      },
      {
        ques: 'What does the ETL in ETL tool stand for?',
        options: [
          'Extract, Task and Location',
          'Extract Transfer and Lode',
          'Extract, Transform and Load',
          'Export, Transform and Load'
        ],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: '2005'
      },
      {
        ques: 'The upgrade wizard for SSIS is called _____',
        options: ['SSISUW', 'SSISDD', 'SSISDB', 'SSISWD'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'SSISDB'
      },
      {
        ques: 'The package content on the SQL server is persisted in _____',
        options: ['XML', 'XNL', 'XOL', 'XPL'],
        title: 'SSIS Software Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1556264957.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'SSIS is a component of SQL, a data to import/export wizard, an ETL tool, and lots more. How much do you know about SSIS, its history, and the tool it contains? What developer created SSIS and in what year was it developed? Take this quiz to find out.',
        correctOption: 'XML'
      }
    ]
  },
  {
    index: 23,
    result: [
      {
        ques: 'What does the acronym GNU stand for?',
        options: [
          "GNU's Not Unix!",
          "GNU's Not Unix-like!",
          'GNU not Unix',
          'GNU not Unix-like'
        ],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: '1990'
      },
      {
        ques: '____ is the developer of GNU',
        options: ['Community', 'Isaac Schuleter', 'Graeme Rocher', 'Ben Alman'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: 'Linux'
      },
      {
        ques: '_____ is the founder of the GNU project',
        options: [
          'Richard Stallman',
          'Matei Zaharia',
          'Ben Alman',
          'Mike Hichule'
        ],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: "GNU's Not Unix!"
      },
      {
        ques: 'When was GNU publicly announced?',
        options: ['1983', '1992', '1999', '2000'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: 'Community'
      },
      {
        ques: 'Software development of GNU began in _____ ',
        options: ['1999', '1984', '2000', '2001'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: 'Richard Stallman'
      },
      {
        ques: 'Which of the following influenced the naming of the GNU software?',
        options: ['A song', 'A person', 'A country', 'A book'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: 'The Hurd'
      },
      {
        ques: "When was GNU's manifesto first published?",
        options: ['1985', '1984', '1983', '1990'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: '1983'
      },
      {
        ques: 'GNU is typically used with a kernel called _____',
        options: ['Linux', 'Microsoft', 'Java', 'Python'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: '1984'
      },
      {
        ques: "GNU's own kernel is called _____",
        options: ['The Hurd', 'Linux', 'Unix', 'Java'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: 'A song'
      },
      {
        ques: "When was GNU's kernel started?",
        options: ['1990', '1992', '1994', '1996'],
        title:
          'Quiz: What Do You Know About General Public License? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2350850/1558439756.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "GNU is a set of many programs, applications, libraries, developer tools, and games. It's an operating system that is free software. This means that it respects user freedom. Learn more about GNU and test your current knowledge on this software by answering the questions in the following quiz.",
        correctOption: '1985'
      }
    ]
  },
  {
    index: 24,
    result: [
      {
        ques: 'Which city is Blizzard Entertainment Inc. situated?',
        options: ['California ', 'Maryland ', 'San Francisco ', 'Las Vegas '],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '3'
      },
      {
        ques: 'When was the company founded?',
        options: ['1993', '1992', '1991', '1990'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '19'
      },
      {
        ques: 'How many graduates founded the game developing company?',
        options: ['2', '3', '4', '5'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: 'Need for Speed '
      },
      {
        ques: 'How many games has been developed since the establishment of the company?',
        options: ['17', '18', '19', '20'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '4'
      },
      {
        ques: 'Which of these is not a Blizzard game? ',
        options: ['War Craft ', 'StarCraft ', 'Diablo ', 'Need for Speed '],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '1996'
      },
      {
        ques: 'How many main franchise is the Blizzard having?',
        options: ['2', '3', '4', '5'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: 'Overwatch'
      },
      {
        ques: 'What year was Diablo released?',
        options: ['1996', '1997', '1998', '1999'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '6'
      },
      {
        ques: "Which of these is the company's latest title?",
        options: ['Racing ', 'Warfare ', 'Overwatch', 'Override '],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '9'
      },
      {
        ques: 'How many products has the Blizzard Entertainment produced so far? ',
        options: ['4', '5', '6', '7'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: 'California '
      },
      {
        ques: 'How many Blizzard locations are their all around the world?',
        options: ['9', '8', '7', '6'],
        title: 'Can You Survive This Blizzard Game Challenge? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1562502652.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'As we believed Blizzard Entertainment to be a video game developer, their activities on games and the production of amazing games has been seen. Games like "The Lost Vikings" is developed by the company as well as other popular games. Take this Blizzard game challenge now!',
        correctOption: '1991'
      }
    ]
  },
  {
    index: 25,
    result: [
      {
        ques: 'What is the Tcode used for calling the transport organizer?',
        options: ['SE09', 'SE10', 'SM12', 'SM36'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'SE09'
      },
      {
        ques: 'What is the Tcode for Lock entries?',
        options: ['SM04', 'SM12', 'SM35', 'SM36'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'SM12'
      },
      {
        ques: 'What is the Tcode to view the list of users associated with the same client?',
        options: ['SE16', 'SE04', 'SM04', 'SM12'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'SM12'
      },
      {
        ques: 'What is the Tcode for SAP Online Support System?',
        options: ['OSS', 'OSS1', 'OSS2', 'SNOTE'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'OSS1'
      },
      {
        ques: 'What is the Tcode where we can develop the USER-EXITS?',
        options: ['CMOD', 'SMOD', 'SALE', 'NACE'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'CMOD'
      },
      {
        ques: 'What is the Tcode for IDoc Testing Tool?',
        options: ['WE 19', 'WE 20', 'WE30', 'SM35'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'WE 19'
      },
      {
        ques: 'What is the Tcode for RFC Programming?',
        options: ['SM12', 'SM35', 'SM36', 'SM59'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'SM59'
      },
      {
        ques: 'Customization is done in?',
        options: ['Sandbox', 'Development', 'Quality', 'Production'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'Sandbox'
      },
      {
        ques: 'Dynamically generated function code is stored in:',
        options: ['SY-UCOMM', 'SY-PFKEY', 'PICK', 'SY-SUBRC'],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'SY-UCOMM'
      },
      {
        ques: 'Which component of the class, preserves its own consistency?',
        options: [
          'Private Attributes',
          'Public',
          'Static Methods',
          'Function Modules'
        ],
        title: 'SAP ABAP TCodes: MCQ Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(94)(173).jpg',
        description:
          "SAP ABAP is an object-oriented programming language that shows real-time objects in the form of class objects. If you are an SAP Developer, you must take this quiz to test your basic knowledge of ABAP TCodes. Read the questions carefully and answer. So, let's try out the quiz. All the best!",
        correctOption: 'Private Attributes'
      }
    ]
  },
  {
    index: 26,
    result: [
      {
        ques: 'Formal testing conducted to enable a user, customer or other authorized entity to determine whether to accept a system or component is called:',
        options: [
          'Unit Testing',
          'Integration Testing',
          'System Testing',
          'Acceptance Testing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Behavioural Testing'
      },
      {
        ques: 'Testing done without formal testing technique is called',
        options: [
          'Planned Testing',
          'Integration Testing',
          'Adhoc Testing',
          'Mutation Testing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Fault'
      },
      {
        ques: 'Tests are grouped into one equivalence class when:',
        options: [
          'They involve the same input variables',
          'They result in similar operations in the program',
          'They affect the same output variables',
          'All of the above'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Failure'
      },
      {
        ques: ' BVA complements Equivalence Partitioning.',
        options: ['True', 'False'],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'All of the above'
      },
      {
        ques: 'It is a technique that provides a concise representation of logical conditions and corresponding actions.',
        options: [
          'Equivalence Partitioning',
          'BVA',
          'Cause Effect Graphing',
          'Error Guessing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'True'
      },
      {
        ques: 'Testing is the activity of diagnosing the precise nature of a known error and then correcting the Error.',
        options: ['True', 'False'],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Cause Effect Graphing'
      },
      {
        ques: 'It is a condition that causes the system to fail in performing its required function.',
        options: ['Fault', 'Failure', 'Error', 'Bug'],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'All of the above'
      },
      {
        ques: 'It is the inability of a system or component to perform a required function according to its specification.',
        options: ['Fault', 'Failure', 'Error', 'Bug'],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Both A&B '
      },
      {
        ques: 'Black box testing is also called as',
        options: [
          'Behavioural Testing',
          'Structural Testing',
          'Glass box Texting',
          'Adhoc Testing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'False'
      },
      {
        ques: 'Types of Integration Testing include',
        options: [
          'Big Bang Testing',
          'Top down Testing',
          'Bottom up testing',
          'All of the above'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'All of the above '
      },
      {
        ques: 'Keyword-driven testing is also called:',
        options: [
          'Table-driven testing',
          'Action-word testing',
          'Both A&B',
          'White box testing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Error Seeding'
      },
      {
        ques: 'White Box testing technique includes ',
        options: [
          'Statement Coverage',
          'Branch Coverage',
          'Decision Coverage',
          'All of the above'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Acceptance Testing '
      },
      {
        ques: 'Mutation Testing is also called as:',
        options: [
          'Sanity Testing',
          'Smoke Testing',
          'Error Seeding',
          'Installation Testing'
        ],
        title:
          'Software Testing Fundamentals Test! Trivia Questions Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/1564726538.jpeg',
        description:
          'Welcome to the software testing fundamentals test that is designed to help you solve some of the issues you have with the topics you have covered so far. If you are planning on becoming a software developer, the quiz below is exactly what you need do give it a try and get to see just how much revision you need to do.',
        correctOption: 'Adhoc Testing'
      }
    ]
  },
  {
    index: 27,
    result: [
      {
        ques: 'Object-Oriented Programming means ...  ',
        options: [
          'Being objective about what you develop',
          'Designing the application based on the objects discovered when analysing the problem',
          'Writing an algorithm before writing your program and having a test plan',
          'Writing a program composed of Java classes'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption:
          'Writing an algorithm before writing your program and having a test plan'
      },
      {
        ques: 'If none of the private/protected/public is specified for a member, that member ...',
        options: [
          'Is accessible publicly',
          'Is only accessible by other classes of the same package',
          'Is only accessible from within the class',
          'Is accessible by the class and its subclasses'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Is only accessible by other classes of the same package'
      },
      {
        ques: 'Which one is not correct?',
        options: [
          'A class needs to be instantiated as an object before being used',
          'An objects exists in memory in run time',
          'Class and object are just different names for the same thing',
          'An object is a variable, where its type is the class used to declare the variable'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption:
          'Class and object are just different names for the same thing'
      },
      {
        ques: 'Which is not a part of defining an object?',
        options: [
          'Description',
          'Methods',
          'Associations with other objects',
          'Name'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Description '
      },
      {
        ques: 'Class B inherits from Class A, what cannot be said:',
        options: [
          'B is a sub-class of A',
          'A is a super-class of B',
          'B has access to private members of A',
          'B has access to protected members of A'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'B has access to private members of A '
      },
      {
        ques: 'What is a member of a class',
        options: [
          'An attribute',
          'A method',
          'Attribute or method',
          'A sub-class'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Attribute or method'
      },
      {
        ques: 'A UML association from class A to class B means',
        options: [
          'Class B inherits from Class A',
          'Class B is defined within class A',
          'Class B has an attribute of type A',
          'Class A has an attribute of type B'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Class A has an attribute of type B '
      },
      {
        ques: 'A UML association is ...',
        options: [
          'Implemented as a Java attribute member',
          'Implemented as a Java method',
          'Implemented as a sub-class',
          'Implemented as a String constructor returning the name of the association target'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Implemented as a Java attribute member'
      },
      {
        ques: 'An object could be ...',
        options: ['Anything', 'An algorithm', 'A data container', 'A program'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Anything '
      },
      {
        ques: 'A class is...',
        options: [
          'An object',
          'An executable piece of code',
          'An abstract definition of an object',
          'A varibale'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'An abstract definition of an object '
      },
      {
        ques: 'The size of a frame is set using ...',
        options: [
          'The method setSize()',
          'Automtically in run-time',
          'The width and height attributes of the class JFrame',
          'WIDTH and HEIGHT properties of the window menu in Eclipse'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'The method setSize()'
      },
      {
        ques: 'Which package do you need to use widgets such as JApplet, JFrame, JPanel and JButton?',
        options: ['Javax.swing', 'Javax.gui', 'Java.awt', 'Java.swing'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Javax.swing'
      },
      {
        ques: 'Which one needs a web page to run',
        options: [
          'A Java Application',
          'A Java Stand-Alone Application',
          'A Java Applet',
          'A Java Class'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'A Java Applet'
      },
      {
        ques: 'What does GUI stand for?',
        options: [
          'Graphical User Interface',
          'Gimme Ur Internet',
          'Grand User Interface',
          'Graphical Useful Interface'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Graphical User Interface'
      },
      {
        ques: 'How is the layout of widgets on a panel specified?',
        options: [
          'Automatically',
          'By inheriting from the main container such as a JFrame or JApplet',
          'By calling the method setLayout',
          'By calling the method setContentPane'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'By calling the method setLayout '
      },
      {
        ques: 'Which one adds the widget mainPanel to a frame in the constructor of the frame?',
        options: [
          'Add(this.mainPanel);',
          'This.add(mainPanel);',
          'MainPanel.setVisible(true);',
          'GetContentPane().add(mainPanel);'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'This.add(mainPanel);'
      },
      {
        ques: 'Which one could be used as the main container in a Java application?',
        options: ['JApplet', 'JFrame', 'JPanel', 'JButton'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'JFrame'
      },
      {
        ques: 'How to define a JButton with the caption test?',
        options: [
          "JButton aButton('test');",
          'JButton aButton=new JButton("test");',
          "JButton aButton=new JButton('test');",
          'JButton("test") aButton;'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'JButton aButton=new JButton("test");'
      },
      {
        ques: 'Which one adds the widget mainPanel to an applet in the init method of the applet?',
        options: [
          'Add(mainPanel);',
          'This.add(mainPanel);',
          'MainPanel.setVisible(true);',
          'GetContentPane().add(mainPanel);'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'GetContentPane().add(mainPanel);'
      },
      {
        ques: 'The size of an applet is set using ...',
        options: [
          'The method setSize()',
          'Automtically in browser',
          'The width and height attributes of the class JApplet',
          'HTML properties WIDTH and HEIGHT of the APPLET tag.'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'HTML properties WIDTH and HEIGHT of the APPLET tag.'
      },
      {
        ques: 'The last value in an array called ar can be found at index:',
        options: ['0', '1', 'Ar.length', 'Ar.length - 1'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Ar.length - 1'
      },
      {
        ques: 'What would display from the following statements? int [ ] nums = {1,2,3,4,5,6}; System.out.println((nums[1] + nums[3]));',
        options: ['6', '2+4', '1+3', '4'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: '6'
      },
      {
        ques: 'What loop will display each of the numbers in this array on a separate line: float [ ] nums= {1.1f, 2.2f, 3.3f};',
        options: [
          'For (int i =0; i < 3; i++) System.out.println( nums[i]);',
          'For (i = 1; i',
          'For (i = 0; i',
          'For (i = 1; i < 3; i++) System.out.println(nums[i]);'
        ],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption:
          'For (int i =0; i < 3; i++) System.out.println( nums[i]);'
      },
      {
        ques: 'What displays from the following statements? String word = "abcde"; for (int i = 0; i <4; i+=2) System.out.print(word[i]);',
        options: ['Ab', 'Ac', 'Ace', 'Bd'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: 'Ac'
      },
      {
        ques: 'Given the declaration : int [ ] ar = {1,2,3,4,5}; What is the value of ar[3]?',
        options: ['2', '3', '4', '5'],
        title: 'Quiz: The Ultimate Java Test For Beginners - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(59)(79).jpg',
        description:
          'This is the ultimate Java test for all those Java developer-wannabes who have just began practicing the programming language. It consists of over 93 questions of basically Core Java. So, if you are one of them and want to have a solid practice session to strengthen your hold on the concepts and methods, take it right now.',
        correctOption: '4'
      }
    ]
  },
  {
    index: 28,
    result: [
      {
        ques: 'Which SQL function is used to count the number of rows in a SQL query?',
        options: ['COUNT()', 'NUMBER()', 'SUM()'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'COUNT()'
      },
      {
        ques: 'The FROM SQL clause is used to…',
        options: [
          'specify range for search condition',
          'Specify search condition',
          'Specify what table we are selecting or deleting data from.'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          'Specify what table we are selecting or deleting data from.'
      },
      {
        ques: 'Which of the following is NOT a SQL keyword or SQL clause?',
        options: ['INSERT', 'SELECT', 'UPDATE', 'INVERT'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'INVERT'
      },
      {
        ques: 'The UNION SQL clause can be used with…',
        options: [
          'The SELECT clause only',
          'The DELETE and UPDATE clauses',
          'The UPDATE clause only',
          'None of the other three'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'The SELECT clause only'
      },
      {
        ques: 'What does DML stand for?',
        options: [
          'Different Mode Level',
          'Data Model Language',
          'Data Mode Lane',
          'Data Manipulation language'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'Data Manipulation language'
      },
      {
        ques: 'Which SQL keyword is used to retrieve a maximum value?',
        options: ['MOST', 'MAX', 'TOP', 'UPPER'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'MAX'
      },
      {
        ques: 'Which SQL statement inserts data into a table called Projects?',
        options: [
          "INSERT INTO Projects (ProjectName, ProjectDescription) VALUES ('Content Development', 'Website content development project')",
          "SAVE INTO Projects (ProjectName, ProjectDescription) VALUES ('Content Development', 'Website content development project')",
          "INSERT Projects VALUES ('Content Development', 'Website content development project')",
          "INSERT Projects ('Content Development', 'Website content development project')"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          "INSERT INTO Projects (ProjectName, ProjectDescription) VALUES ('Content Development', 'Website content development project')"
      },
      {
        ques: 'Which of the following SQL clauses is used to enter data into a SQL table?',
        options: ['INSERT INTO', 'WRITE', 'SELECT', 'ENTER'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'INSERT INTO'
      },
      {
        ques: 'Which of the following SQL clauses is used to DELETE data from a database table?',
        options: ['DELETE', 'REMOVE', 'DROP DATA', 'CLEAR'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'DELETE'
      },
      {
        ques: 'Which of the following SQL statements is correct?',
        options: [
          'SELECT CustomerName, COUNT(CustomerName) FROM Orders',
          'SELECT CustomerName, COUNT(CustomerName) FROM Orders GROUP BY CustomerName',
          'SELECT CustomerName, COUNT(CustomerName) FROM Orders ORDER BY CustomerName'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          'SELECT CustomerName, COUNT(CustomerName) FROM Orders GROUP BY CustomerName'
      },
      {
        ques: 'What does SQL stand for?',
        options: [
          'Strong Question Language',
          'Structured Query Language',
          'Structured Question Language'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'Structured Query Language'
      },
      {
        ques: 'Which SQL statement is used to extract data from a database?',
        options: ['SELECT', 'GET', 'OPEN', 'EXTRACT'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'SELECT'
      },
      {
        ques: 'Which SQL statement is used to update data in a database?',
        options: ['SAVE', 'SAVE AS', 'MODIFY', 'UPDATE'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'UPDATE'
      },
      {
        ques: 'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
        options: [
          'SELECT Persons.FirstName',
          'SELECT FirstName FROM Persons',
          'EXTRACT FirstName FROM Persons'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'SELECT FirstName FROM Persons'
      },
      {
        ques: 'With SQL, how do you select all the columns from a table named "Persons"?',
        options: [
          'SELECT *.Persons',
          'SELECT [all] FROM Persons',
          'SELECT * FROM Persons',
          'SELECT Persons'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'SELECT * FROM Persons'
      },
      {
        ques: 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" is "Peter"?',
        options: [
          "SELECT * FROM Persons WHERE FirstName'Peter'",
          "SELECT [all] FROM Persons WHERE FirstName LIKE 'Peter'",
          "SELECT * FROM Persons WHERE FirstName='Peter'",
          "SELECT [all] FROM Persons WHERE FirstName='Peter'"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: "SELECT * FROM Persons WHERE FirstName='Peter'"
      },
      {
        ques: 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
        options: [
          "SELECT * FROM Persons WHERE FirstName='a'",
          "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
          "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
          "SELECT * FROM Persons WHERE FirstName='%a%'"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: "SELECT * FROM Persons WHERE FirstName LIKE 'a%'"
      },
      {
        ques: 'The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are',
        options: ['False', 'True'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'True'
      },
      {
        ques: 'With SQL, how do you select all the records from a table named "Persons" where the "FirstName" is "Peter" and the "LastName" is "Jackson"?',
        options: [
          "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'",
          "SELECT FirstName='Peter', LastName='Jackson' FROM Persons",
          "SELECT * FROM Persons WHERE FirstName'Peter' AND LastName'Jackson'"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          "SELECT * FROM Persons WHERE FirstName='Peter' AND LastName='Jackson'"
      },
      {
        ques: 'With SQL, how do you select all the records from a table named "Persons" where the "LastName" is alphabetically between (and including) "Hansen" and "Pettersen"?',
        options: [
          "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'",
          "SELECT * FROM Persons WHERE LastName>'Hansen' AND LastName",
          "SELECT LastName>'Hansen' AND LastName"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          "SELECT * FROM Persons WHERE LastName BETWEEN 'Hansen' AND 'Pettersen'"
      },
      {
        ques: 'Which SQL statement is used to return only different values?',
        options: ['SELECT DISTINCT', 'SELECT DIFFERENT', 'SELECT UNIQUE'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'SELECT DISTINCT'
      },
      {
        ques: 'Which SQL keyword is used to sort the result-set?',
        options: ['ORDER BY', 'SORT', 'ORDER', 'SORT BY'],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'ORDER BY'
      },
      {
        ques: 'With SQL, how can you return all the records from a table named "Persons" sorted descending by "FirstName"?',
        options: [
          "SELECT * FROM Persons SORT BY 'FirstName' DESC",
          'SELECT * FROM Persons ORDER FirstName DESC',
          "SELECT * FROM Persons SORT 'FirstName' DESC",
          'SELECT * FROM Persons ORDER BY FirstName DESC'
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: 'SELECT * FROM Persons ORDER BY FirstName DESC'
      },
      {
        ques: 'With SQL, how can you insert a new record into the "Persons" table?',
        options: [
          "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')",
          "INSERT VALUES ('Jimmy', 'Jackson') INTO Persons",
          "INSERT ('Jimmy', 'Jackson') INTO Persons"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption: "INSERT INTO Persons VALUES ('Jimmy', 'Jackson')"
      },
      {
        ques: 'How can you change "Hansen" into "Nilsen" in the "LastName" column in the Persons table?',
        options: [
          "UPDATE Persons SET LastName='Hansen' INTO LastName='Nilsen'",
          "MODIFY Persons SET LastName='Nilsen' WHERE LastName='Hansen'",
          "MODIFY Persons SET LastName='Hansen' INTO LastName='Nilsen",
          "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'"
        ],
        title: 'The Ultimate Server Query Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(16)(230).jpg',
        description:
          'A server query language is designed so that users can retrieve specific information from a database. As a software developer, you should have some knowledge of the use of such languages. Do you believe you understand SQL completely? Take up the quiz below and be sure about it! All the best, and look out for more tests on the topic.',
        correctOption:
          "UPDATE Persons SET LastName='Nilsen' WHERE LastName='Hansen'"
      }
    ]
  },
  {
    index: 29,
    result: [
      {
        ques: '7. To delete a cookie, you',
        options: [
          'A. delete the $_COOKIE variable',
          'B. use the delete_cookie function',
          'C. use the remove_cookie function',
          'D. set the cookie’s value to an empty string and its expiration date to a time in the past'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. is an associative array'
      },
      {
        ques: '8. When you use session tracking, each HTTP request includes',
        options: [
          'A. a URL that stores the session ID',
          'B. a cookie that stores the session ID',
          'C. a cookie that stores the session data',
          'D. a cookie that stores the session ID and the session data'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'C. func_get_args function'
      },
      {
        ques: '9. The $_SESSION variable for a session',
        options: [
          'A. is a regular array',
          'B. is an associative array',
          'C. is an object',
          'D. is a cookie'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. override the inherited methods'
      },
      {
        ques: '10. If necessary, you can use PHP functions to do all but one of the following. Which one is it?',
        options: [
          'A. get the name of the session cookie',
          'B. get the session ID',
          'C. generate a new session ID',
          'D. get the data for a session ID'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption:
          'D. set the cookie’s value to an empty string and its expiration date to a time in\nthe past'
      },
      {
        ques: "11. The function that follows returns   function coin_toss() {    if (mt_rand(0, 1) == 0) {    $coin = 'heads';    } else {    $coin = 'tails';    }    return $coin;   }",
        options: [
          'A. a random value between 0 and 1',
          'B. a value of either 0 or 1',
          'C. a value of either “heads” or “tails”',
          'D. a reference to the $coin variable'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'A. new Cart($arg1, $arg2)'
      },
      {
        ques: 'All of the arguments that are passed to a function are available in an array that can be accessed   by using the',
        options: [
          'A. $_ARGUMENTS variable',
          'B. $_FUNCTION variable',
          'C. func_get_args function',
          'D. func_num_args function'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'D.\tarray_pop'
      },
      {
        ques: '13. If you create a function that passes an argument by reference, the function',
        options: [
          'A. can change the original variable without using a return statement',
          'B. can change the variable and pass it back by using a return statement',
          'C. can’t change the variable',
          'D. must make a copy of the variable before it changes it'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'D.\tare limited to the validation of string data'
      },
      {
        ques: '14. In PHP, function name duplications are likely to occur because',
        options: [
          'A. namespaces create logical function groups',
          'B. all the functions for an application have to be stored in the same file',
          'C. all functions have global scope',
          'D. most programmers use the same naming conventions for functions'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'C.\t/^\\d{5}$/'
      },
      {
        ques: '15. To avoid the duplication of function names, you can',
        options: [
          'Use namespaces',
          'B. Use libraries',
          'C. Store function files in lower-level directories',
          'D. Use include paths'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B.\tgetMessage method of the exception object'
      },
      {
        ques: '11. To prevent other classes from directly accessing the properties of a class, you can code them as    private. Then, to make them available to other classes, you can code',
        options: [
          'A. private methods to set and get their values',
          'B. public methods to set and get their values',
          'C. a constructor to set and get their values',
          'D. a destructor to set and get their values'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. objects'
      },
      {
        ques: 'When you use object-oriented techniques to implement the MVC pattern, the methods of the   model return the data as either arrays or',
        options: [
          'A. classes',
          'B. objects',
          'C. properties',
          'D. result sets'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption:
          'A. can change the original variable without using a return statement'
      },
      {
        ques: 'When a new class extends a superclass, it inherits the properties and methods of the superclass.   Then, it can',
        options: [
          'A. override the inherited properties',
          'B. override the inherited methods',
          'C. delete any of the inheritied properties',
          'D. delete any of the inherited methods'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'C. all functions have global scope'
      },
      {
        ques: 'To code a constructor for a class named Cart that requires two arguments, you start with this code:',
        options: [
          'A. public function Cart($arg1, $arg2) {',
          'B. public function __construct($arg1, $arg2) {',
          'C. private function Cart($arg1, $arg2) {',
          'D. private function __construct($arg1, $arg2) {'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption:
          'D.\tUse the array_fill function to replace all gaps in the array with empty strings.'
      },
      {
        ques: '15. To create an object from a class named Cart that requires two arguments, you code',
        options: [
          'A. new Cart($arg1, $arg2)',
          'B. new Cart(arg1, arg2)',
          'C. Cart_constructor($arg1, $arg2)',
          'D. Cart_constructor(arg1, arg2)'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B.\tpreg_match'
      },
      {
        ques: '     9.   Which function searches for a regular expression in a string and returns 1 if the pattern is found?',
        options: [
          'A. match_preg',
          'B. preg_match',
          'C. search_preg',
          'D. preg_search'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. a cookie that stores the session ID'
      },
      {
        ques: 'If a match is found in a global search for a regular expression, the function returns',
        options: [
          'True',
          '1',
          'C. A count of the number of matches',
          'A count of the number of matches and an array that contains all of the matches'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. public methods to set and get their values'
      },
      {
        ques: 'If a match is found when the preg_split function is executed, it returns',
        options: [
          'If a match is found when the preg_split function is executed, it returns',
          'B. An array of all of the matches',
          'C. An array of the substrings that are created by removing the matches',
          'D. A count of the number of matches and an array of substrings'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B. public function __construct($arg1, $arg2) {'
      },
      {
        ques: '   12.   Regular expressions can be used to ',
        options: [
          'A. completely validate all types of user entries',
          'B. only to check whether user entries have the right format',
          'C. completely validate some types of user entries',
          'D. are limited to the validation of string data'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption:
          'A count of the number of matches and an array that contains all of the matches'
      },
      {
        ques: '   13.   To get the message that’s related to an exception, you use the ',
        options: [
          'A. message property of the exception object',
          'B. getMessage method of the exception object',
          'C. message property of the exception class',
          'D. getMessage property of the exception class'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption:
          'C.\tAn array of the substrings that are created by removing the matches '
      },
      {
        ques: 'An exception is thrown when ',
        options: [
          'A. a runtime error occurs in a try block',
          'B. a runtime error is caught by a catch block',
          'C. PHP encounters invalid data',
          'D. a runtime error occurs'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'B.\tstore an empty value in an array'
      },
      {
        ques: '            This pattern can be used to validate a five-digit zip code:',
        options: ['A. /[d5]/', 'B. /+\\d[5]?/', 'C. /^\\d{5}$/', 'D. /$\\d5^/'],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'C. a value of either “heads” or “tails”'
      },
      {
        ques: '9. Which of the following statements about associative arrays is NOT true?',
        options: [
          'A. You can use the count function to return the number of elements in the array.',
          'B. You can use both integer and string indexes with an associative array.',
          'C. You can use a foreach loop to access the values of an associative array but not the indexes',
          'D. You can delete elements from an associative array.'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'Use namespaces'
      },
      {
        ques: '10. Gaps can be introduced into an array in all of the ways that follow, except one. Which one is it?',
        options: [
          'A. add a new element with an index that’s beyond the next one that’s available',
          'B. store an empty value in an array',
          'C. delete or unset an element from an array',
          'D. store a NULL value in an array'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'C.\tthe array_sum function'
      },
      {
        ques: '11. You can deal with gaps in an array in all but one of the following ways. Which one is it?',
        options: [
          'A. Use the array_values function to remove all gaps and re-index the array.',
          'B. Use a foreach loop to process the array, which skips elements that contain nulls.',
          'C. Use a for loop that contains extra code that skips elements that contain nulls.',
          'D. Use the array_fill function to replace all gaps in the array with empty strings.'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'D. get the data for a session ID'
      },
      {
        ques: 'Which of the following functions removes the next element in a LIFO array (also known as a stack)?',
        options: [
          'A. array_shift',
          'B. array_unshift',
          'C. array_push',
          'D. array_pop'
        ],
        title: 'Last Website D Test Ever - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/Website.jpg',
        description:
          'Website developers have become some of the most looked out people in the world today. Whether a developer or a user, it is important to know how to gauge a good website. The quiz below tests on several website concepts.',
        correctOption: 'D.\ta runtime error occurs'
      }
    ]
  },
  {
    index: 30,
    result: [
      {
        ques: 'Two Weeks Notice is a movie released in what year?',
        options: ['2000', '2001', '2002', '2003'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: '2002'
      },
      {
        ques: 'Lucy Kelson is a ....',
        options: ['Lawyer', 'Doctor', 'Teacher', 'Nurse'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'Lawyer'
      },
      {
        ques: 'Who is the playboy in this film?',
        options: ['George', 'Larry', 'Tony', 'Tom'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'George'
      },
      {
        ques: "What is George Wade's occupation?",
        options: ['Lawyer', 'Teacher', 'Real Estate Developer', 'Doctor'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'Real Estate Developer'
      },
      {
        ques: "Who was found in lingerie in George's hotel apartment?",
        options: ['Lucy', 'June', 'Ruth', 'Melanie'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'June'
      },
      {
        ques: 'Two Weeks Notice was written by ....',
        options: [
          'Marc Lawrence',
          'Hugh Grant',
          'Sandra Bullock',
          'Harvey Weinstein'
        ],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'Marc Lawrence'
      },
      {
        ques: 'The budget of the movie was ....',
        options: ['$70 million', '$60 million', '$12 million', '$50 million'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: '$60 million'
      },
      {
        ques: 'Two Weeks Notice made how much at The Box Office?',
        options: [
          '$200 million',
          '$100 million',
          '$300 million',
          '$400 million'
        ],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: '$200 million'
      },
      {
        ques: 'The soundtrack music to Two Weeks Notice was released what year?',
        options: ['2003', '2001', '2005', '2004'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: '2003'
      },
      {
        ques: 'The language of the movie is ....',
        options: ['Spanish', 'French', 'English', 'Italian'],
        title:
          'What Do You Know About The Movie Two Weeks Notice? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305300/1530429346.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Two Weeks Notice is a movie made in 2002. It can be categorised under the romantic comedy movie genre. The movie focuses on Lucy Kelson, a New York City liberal lawyer who specializes in historic preservation, environmental law and George Wade, a proud, billionaire playboy and real estate developer. How much about Two Weeks Notice?',
        correctOption: 'English'
      }
    ]
  },
  {
    index: 31,
    result: [
      {
        ques: 'An associative network is',
        options: [
          'A neural network that contains no loop',
          'A neural network that contains feedback',
          '  A neural network that has only one loop',
          'None of These'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: '\nTrue'
      },
      {
        ques: 'What are the 2 types of learning',
        options: [
          'Improvised and unimprovised',
          'Supervised and unsupervised',
          'Layered and unlayered',
          'None of the above'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'None of the above'
      },
      {
        ques: 'Neural Computing ____________',
        options: [
          'Mimics human brain',
          'Information processing paradigm',
          'Both (1) and (2)',
          'None of the above'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'All of these'
      },
      {
        ques: '  Fuzzy Computing ______________',
        options: [
          'Mimics human behaviour',
          'Does not deal with 2 valued logic',
          'Deals with information which is vague, imprecise, uncertain, ambiguous, inexact, or probabilistic',
          'All of the above'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'True'
      },
      {
        ques: 'Genetic Algorithm is a part of___________',
        options: [
          'Evolutionary Computing',
          'Inspired by Darwin\'s theory about evolution - "survival of the fittest"',
          'Are adaptive heuristic search algorithm based on the evolutionary ideas of natural selection and genetics',
          'All of the above'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'IF-THEN rules'
      },
      {
        ques: 'Genetic algorithms are heuristic methods that do not guarantee an optimal solution to a problem',
        options: ['True', '  False'],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'A neural network that contains feedback'
      },
      {
        ques: '  Conventional Artificial Intelligence is different from soft computing in the sense________',
        options: [
          'Conventional Artificial Intelligence deal with prdicate logic where as soft computing deal with fuzzy logic',
          'Classical AI methods are limited by symbols where as soft computing is based on empirical data',
          'Both (a) and (b)',
          'None of the above'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'Supervised and unsupervised'
      },
      {
        ques: 'Artificial neural network used for___________',
        options: [
          'Pattern Recognition',
          'Classification',
          'Clustering',
          'All of these'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'Both (1) and (2)'
      },
      {
        ques: 'Japanese were the first to utilize fuzzy logic practically on high-speed trains in Sendai.',
        options: ['True', 'False'],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'All of the above'
      },
      {
        ques: 'Fuzzy logic is usually represented as',
        options: [
          'IF-THEN-ELSE rules',
          'IF-THEN rules',
          'Both IF-THEN-ELSE rules & IF-THEN rules',
          'None of the mentioned'
        ],
        title: 'Applied Soft Computing - Post Assessment - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-09-14T160740_016.jpg',
        description:
          'If you are a software developer, one of the things that you need to be conversant with is the topic of soft computing and artificial neural networks. The introduction of these techniques has helped greatly in easing work and diagnosis of errors in a system. Think you understand the topic? Do take up the quiz below and get to find out!',
        correctOption: 'All of the above'
      }
    ]
  },
  {
    index: 32,
    result: [
      {
        ques: 'Rails application framework is called... ',
        options: ['ActiveRecord', 'ActivePack', 'ActionPack', 'Web page'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'ActiveRecords'
      },
      {
        ques: 'Which of these is not a various components of rail?',
        options: [
          'Action pack',
          'Action model',
          'Action mailer',
          'Action development'
        ],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: '4'
      },
      {
        ques: 'Representation of a resource is called... ',
        options: ['Ruby make', 'Camel case', 'Web page', 'Action pack'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Web page '
      },
      {
        ques: 'What is rails object-relational mapping library?',
        options: ['Active record', 'Camelcase', 'Web page', 'Underscores'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Underscores '
      },
      {
        ques: 'What is naming convention for file names?',
        options: ['ActiveRecords', 'Underscores', 'Web page', 'Validate'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Active record '
      },
      {
        ques: 'Which of these is not a feature of Rails?',
        options: [
          'Active Record',
          'Scaffolding',
          'Convention over Configuration',
          'Models'
        ],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Models '
      },
      {
        ques: 'Which of these is not a naming convention in Rails?',
        options: [
          'Variables',
          'Class and module',
          'Database table',
          'Three environments'
        ],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'ActionPack '
      },
      {
        ques: 'One of these is not an advantage of using Ruby on Rails? ',
        options: [
          'DRY Principal (Don’t Repeat Yourself)',
          'Convention over Configuration',
          'Active Support',
          'Scaffolding'
        ],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Three environments '
      },
      {
        ques: 'How many types of relationships does a model have? ',
        options: ['2', '3', '4', '5'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Action development '
      },
      {
        ques: 'Rail models are typically based on what design pattern? ',
        options: ['Route', 'Controller', 'ActiveRecords', 'Layout'],
        title: 'Ruby On Rails Interview Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(84)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Ruby on Rails is a server-side model-view-controller web application framework written in Ruby. This quiz consists of questions usually asked when a company or client wants to hire a Ruby on Rails developer.',
        correctOption: 'Active Support '
      }
    ]
  },
  {
    index: 33,
    result: [
      {
        ques: 'What is the full meaning of UAC? ',
        options: [
          'User Access Community',
          'Usage Account Contact',
          'User Access Control',
          'User Account Control'
        ],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'Language Interface Packs'
      },
      {
        ques: 'When was the Beta version of Microsoft AntiSpyware released? ',
        options: ['2004', '2005', '2006', '2007'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'Windows 8'
      },
      {
        ques: 'Which of these is designed for protection against spyware? ',
        options: ['UAC', 'VFS', 'Mac OS', 'Windows Defender'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'User Account Control '
      },
      {
        ques: 'Which of these is officially known as "Windows Embedded Compact"?',
        options: ['Windows CE', 'Windows NT', 'Windows XP', 'Windows 9x'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: '2005'
      },
      {
        ques: 'When was Windows 3.2 made available?',
        options: ['1991', '1997', '1993', '1992'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'Windows Defender '
      },
      {
        ques: 'Which of these versions is code-named Daytona?',
        options: [
          'Windows XP',
          'Windows NT 3.5',
          'Windows 2.1',
          'Windows NT 3.2'
        ],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'Windows CE'
      },
      {
        ques: 'How many languages was Windows developed into?',
        options: ['135', '133', '132', '138'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: '1993'
      },
      {
        ques: 'When was the announcement of the migration of Perforce to Git made? ',
        options: ['2018', '2017', '2016', '2015'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: 'Windows NT 3.5'
      },
      {
        ques: 'Which of these is the full meaning of LIPs? ',
        options: [
          'Language Interface Programs',
          'Language Intermediate Packs',
          'Language Intermediate Programs',
          'Language Interface Packs'
        ],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: '138'
      },
      {
        ques: 'Which of these is not among the Windows NT 4.0 predecessors?',
        options: ['Dec Alpha', 'PowerPC', 'MIPS R4000', 'Windows 8'],
        title: 'Microsoft MCSA 70-290 Exam Prep - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2305925/1540142068.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Microsoft Windows is a group of operating system which have some windows families that encompass defunct families namely; Windows 9x, Windows Mobiles and so on. Microsoft Windows is the world most used operating system in personal computers and some other mobiles reaching 90% of market share. Windows which have Microsoft has its developer has registered many trademarks in the name of windows to target the sector of computing industry.',
        correctOption: '2017'
      }
    ]
  },
  {
    index: 34,
    result: [
      {
        ques: 'In which of these social medias did Bryanboy said this  "How satisfying it must be to go for the easy target rather than going for other editors."?',
        options: ['Instagram', 'Facebook', 'Twitter ', 'LinkedIn'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'Twitter '
      },
      {
        ques: 'Bryanboy was born in which of these months?',
        options: ['May ', 'June ', 'November', 'None of the above'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'None of the above'
      },
      {
        ques: "What's Bryanboy's horoscope?",
        options: ['Virgo ', 'Aries ', 'Pisces ', 'Taurus '],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'Pisces '
      },
      {
        ques: 'Bryanboy was a judging spot on "America\'s Next Top Model" in what year?',
        options: ['2010', '2011', '2012', '2013'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: '2012'
      },
      {
        ques: "Bryanboy said he's been working with Dr.Belo for how many decades?",
        options: ['1', '2', '3', '4'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: '2'
      },
      {
        ques: 'Bryanboy directed a short film for Italian fashion house Salvatore Ferragamo in which month?',
        options: ['January', 'February', 'March ', 'April '],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'January'
      },
      {
        ques: 'Bryanboy is presently living with who in Sweden?',
        options: ['His brother', 'His sister ', 'His parents', 'His husband'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'His husband'
      },
      {
        ques: "Bryanboy's trademark pose was referenced in how many 2006 Fendi advertisements?",
        options: ['One ', 'Two ', 'Three ', 'Four '],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: 'Two '
      },
      {
        ques: 'The New York Post named him one of the how many hottest internet celebrities?',
        options: ['9', '11', '13', '15'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: '11'
      },
      {
        ques: "Bryanboy's eponymous blog won which year Philippine Blog Award for Best Fashion & Lifestyle Blog?",
        options: ['2006', '2007', '2008', '2009'],
        title:
          'Trivia Quiz: How Well Do You Know About Blogger Bryanboy? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572773250.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryanboy is a model, and his real name is Bryan Grey Yambao. Bryanboy is also known as socialite and businessman. He was formerly known as a web developer as a freelancer. Marc Jacobs named a handbag after him "the BB ostrich bag" after Bryanboy posted it to his blog. This quiz will examine your knowledge of Bryanboy.',
        correctOption: '2007'
      }
    ]
  },
  {
    index: 35,
    result: [
      {
        ques: 'Your favorite color is?',
        options: [
          'A. Green',
          'B. Yellow',
          'C. Red',
          'D. Blue',
          'E. Orange',
          'D. Black'
        ],
        title: 'Which Ssbb Character Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(58)(163).jpg',
        description:
          'Released in 2008, Super Smash Bros. Brawl was the third iteration of crossover fighting games from Nintendo, featuring playable characters across a wide range of the developer’s video games. Which character from the game best suits you?',
        correctOption: null
      },
      {
        ques: 'Favorite food out of these is',
        options: [
          'Spaghetti!',
          'Toast',
          'Bananas',
          'Anything',
          'Steak',
          'Tomatoes'
        ],
        title: 'Which Ssbb Character Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(58)(163).jpg',
        description:
          'Released in 2008, Super Smash Bros. Brawl was the third iteration of crossover fighting games from Nintendo, featuring playable characters across a wide range of the developer’s video games. Which character from the game best suits you?',
        correctOption: null
      },
      {
        ques: 'Favorite clothing out of these',
        options: [
          'Green shirt',
          'Overalls',
          'Armor',
          'Black goth clothes',
          'Pink happy clothes'
        ],
        title: 'Which Ssbb Character Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(58)(163).jpg',
        description:
          'Released in 2008, Super Smash Bros. Brawl was the third iteration of crossover fighting games from Nintendo, featuring playable characters across a wide range of the developer’s video games. Which character from the game best suits you?',
        correctOption: null
      },
      {
        ques: 'Favorite animal out of these',
        options: [
          'Ox',
          'Monkey',
          'Insects',
          'Dogs',
          'Hedgehog',
          'Falcon',
          'Giant enemy crab',
          'Dinosaur'
        ],
        title: 'Which Ssbb Character Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(58)(163).jpg',
        description:
          'Released in 2008, Super Smash Bros. Brawl was the third iteration of crossover fighting games from Nintendo, featuring playable characters across a wide range of the developer’s video games. Which character from the game best suits you?',
        correctOption: null
      },
      {
        ques: 'Favorite town or city in this',
        options: [
          'Mushroom kingdom',
          "Yoshi's island",
          'Lethal lava land',
          'Hyrule',
          'Green hill zone',
          'Dreamland',
          'Halberd',
          'Flat zone'
        ],
        title: 'Which Ssbb Character Are You? - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(58)(163).jpg',
        description:
          'Released in 2008, Super Smash Bros. Brawl was the third iteration of crossover fighting games from Nintendo, featuring playable characters across a wide range of the developer’s video games. Which character from the game best suits you?',
        correctOption: null
      }
    ]
  },
  {
    index: 36,
    result: [
      {
        ques: 'Bryanboy has up to how many Instagram followers?',
        options: ['680,000', '610,000', '650,000', '580,000'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '2019'
      },
      {
        ques: 'Saga Furs hired Yambao to design a series of fur-focused capsule collections in what year?',
        options: ['2015', '2011', '2013', '2019'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '2009'
      },
      {
        ques: 'Bryanboy was also invited to sit front row at Dolce & Gabbana in which of these years?',
        options: ['2007', '2009', '2011', '2015'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '1982'
      },
      {
        ques: 'Bryanboy was born in what year?',
        options: ['1980', '1982', '1984', '1986'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: 'Sweden'
      },
      {
        ques: 'As at 2019, Bryanboy is living with his husband where?',
        options: ['Ireland', 'Sweden', 'USA', 'Canada'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '2003'
      },
      {
        ques: 'An Internet user in the Philippines logged on to the website CreditBoards.com and created an account under the name “bboy777.” in what year?',
        options: ['2000', '2003', '2002', '2004'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '$200,000'
      },
      {
        ques: ' Bryanboy amassed a combined business and personal credit limit of nearly up to how many dollars by late 2005?',
        options: ['$180,000', '$200,000', '$280,000', '$300,000'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '4'
      },
      {
        ques: "How many children did Bryanboy's parents give birth to?",
        options: ['2', '3', '4', '5'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '18 months'
      },
      {
        ques: 'Bboy777 would post over 2,400 times to the CreditBoards forums in how many months?',
        options: ['12 months', '14 months', '16 months', '18 months'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '10'
      },
      {
        ques: 'Bryanboy also scanned a picture of his Louis Vuitton wallet, he has up to how many credit card slots?',
        options: ['2', '5', '8', '10'],
        title:
          'What Do You Know About Bryanboy? Trivia Facts Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2356735/1572663829.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Bryan Grey Yambao is a Fashion blogger and a businessman, Bryanboy is a Filipino and living with his parents in Manila. He started his fashion blogging in his parents house. Bryanboy was a freelancer in web developer. Later after his popularity Marc Jacobs named a handbag after him (the BB ostrich bag). This quiz will examine your knowledge on Bryanboy.',
        correctOption: '680,000'
      }
    ]
  },
  {
    index: 37,
    result: [
      {
        ques: 'What MuleSoft API-led connectivity layer is intended to expose part of a backend database without business logic?',
        options: ['Experience', 'Data', 'System', 'Process', 'Security'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Counter: 1, stepVar: null'
      },
      {
        ques: 'What HTTP method in a RESTful web service is typically used to replace a resource completely?',
        options: ['PATCH', 'PUT', 'POST', 'GET'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Anypoint Exchange'
      },
      {
        ques: 'What statement is part of Mulesoft’s description of an application network?',
        options: [
          'Create reusable APIs and assets designed to be consumed by other business units',
          'Creates and manages availability and fault tolerant services and infrastructure',
          'Leverages Central IT to deliver complete point-to-point solutions with master data management',
          'Creates and manages a collection of JMS messaging services and infrastructure'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Counter: 1, stepVar: null'
      },
      {
        ques: "According to MuleSoft, what is the Center for Enablement's role in the new IT operating model?",
        options: [
          'Creates and manages assets to be consumed by of business developers',
          'Centrally manages partners and consultants to implement line of business projects',
          'Implements line of business projects to enforce common security requirements',
          'Produces & manages API policies for line of business deployments'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'All processing of the batch job stops'
      },
      {
        ques: 'What is a core characteristic of the Modern API?',
        options: [
          'API is designed first using an API specification for rapid feedback',
          'API is rapidly prototyped following AGILE methodology',
          'API follows the RESTful architecture',
          'API has a mechanism to accept feedback and suggestions for improvement'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: '[.333]\n[1]'
      },
      {
        ques: 'Refer to the exhibit. ENDPOINT: https://www.searchworld.org/s/api.php QUERY PARAMETERS: action - Action type - required options: compare, delete, save, search query - Search string - required profile - Search profile to use options: strict, normal, classic format - The format of the output options: xml, xmlfm, json, jsonfm namespace - Namespace to search options: 1,2,3,4 HEADERS: AUTH - Authentication token - required The API specification supports searching for articles on the searchworld.org site. What is the most idiomatic (used for its intended purpose) URL and method to retrieve articles about "einstein" in XML format?',
        options: [
          'GET Method api.php?action=search&query=einstein&format=xml AUTH',
          'GET Method api.php?&query=einstein&format=xml AUTH',
          'GET Method api.php?action=search&query=einstein&format=xml NO AUTH',
          'POST Method api.php?action=search&query=einstein&format=xml AUTH'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Required: false'
      },
      {
        ques: 'What is the main purpose of flow designer in Design Center?',
        options: [
          'Design API RAML files in a graphical way',
          'To design and Develop fully functional Mule applications in a hosted development environment',
          'Define API lifecycle management in a graphical way',
          'Design and mock Mule application templates that must be implemented using Anypoint Studio'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Payload'
      },
      {
        ques: 'Where does a deployed flow designer application run in Anypoint Platform?',
        options: [
          'Exchange',
          'Clouhhub Worker',
          'API Manager',
          'Design Center'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Rate limiting'
      },
      {
        ques: 'What MuleSoft product enables publishing, sharing, and searching of APIs?',
        options: [
          'API Designer',
          'API MUnit',
          'Anypoint Exchange',
          'API Notebook'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'In a Property Placeholder element'
      },
      {
        ques: 'What asset can NOT be created using Anypoint Platform Design Center?',
        options: [
          'API Specifications',
          'Mule Applications',
          'API Fragments',
          'API portals'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: '80'
      },
      {
        ques: 'A web client submits a GET request to a Mule 4 application to the endpoint /customers?id=48493. Where is the id stored in the Mule event by the HTTP Listener?',
        options: ['Inbound properties', 'Variables', 'Attributes', 'Payload'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Property'
      },
      {
        ques: 'An API has been created in Design Center. What is the next step to make the API discoverable?',
        options: [
          'Deploy the API to a Maven repository',
          'Enable autodiscovery in API Manager',
          'Publish the API from inside flow designert',
          'Publish the API to Anypoint Exchange'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'InboundProperties'
      },
      {
        ques: 'Refer to the exhibit:\n#%RAML 1.0 title: ACME Medical API baseUri: http://dev.acme.com/api /patients: GET: queryParameters: year: type: integer example: 2017 What is the correct URL to perform a GET request to /patients?',
        options: [
          'Http://dev.acme.com/patients?year=2016',
          'Http://dev.acme.com/api/patients',
          'Http://dev.acme.com/patients',
          'Http://dev.acme.com/api/patients?year=2016'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'It is executed synchronously'
      },
      {
        ques: 'A RAML example fragment named BankAccountsExample.raml is placed in the examples folder in an API specification project. What is the correct syntax to reference the fragment?',
        options: [
          'Example: !include BankAccountsExample.raml',
          'Example: #import BankAccountsExample.raml',
          'Example: !include examples/BankAccountsExample.raml',
          'Example: #import examples/BankAccountsExample.raml'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Queued-asynchronous'
      },
      {
        ques: 'Refer to the exhibit: 1 #%RAML 1.0 2 title: American Flights API 3 version: 10 4 5 /flights: 6 get: 7 8 /{flight_id}: 9 10 get: There is an error in the flight_id resource’s GET method. What needs to be done to fix the problem?',
        options: [
          'Remove blank line on row 9',
          'Enclose flight_id with parenthesis () instead of curly braces {}',
          'Indent the get method under the {flight_id} resource',
          'Outdent the {flight_id} resource',
          'Remove the curly braces {} around flight_id'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption:
          'Put the Mule applications in the same non-default Mule domain'
      },
      {
        ques: 'Refer to the exhibit. This RAML specification includes an XML example that matches the Records data type defined in another RAML file named recordsDataType.raml. Using the Records type, how can this XML example be represented in RAML?',
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'As headers'
      },
      {
        ques: 'What is the purpose of the api:router element in APIkit?',
        options: [
          'Routes requests to API implementations, but does not validate them against RAML API specifications',
          'Routes responses to the caller, but does not validate them against RAML API specifications',
          'Validates requests against RAML API specifications and routes them to API implementations',
          'Validates responses returned from API requests and routes them to the caller'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'In the message payload'
      },
      {
        ques: 'What is the minimum required configuration in a flow for a Mule application to compile?',
        options: [
          'An event processor/A message processor in the Process section of a flow',
          'An event/message processor in the Source section of a flow',
          'An empty flow',
          'A message processor in both the Source and Process sections of a flow'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption:
          'Set inbound properties before the HTTP Request component'
      },
      {
        ques: 'An inbound Database connector is configured to select rows from a MySQL database. What is the format of results returned from the database query?',
        options: ['Java', 'JSON', 'XML', 'CSV'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'API portals'
      },
      {
        ques: 'What is NOT part of a Mule 4 event?',
        options: ['Message', 'Payload', 'InboundProperties', 'Attributes'],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption:
          'To the first exception strategy whose condition evaluates to true'
      },
      {
        ques: 'How does APIkit determine the number of flows to generate from a RAML specification?',
        options: [
          'Creates a separate flow for each HTTP method',
          'Creates a separate flow for each resource',
          'Creates a separate flow for each resource that contains child resources',
          'Creates one flow for the entire API spec',
          'Creates a separate flow for each response status code'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption:
          'In a configuration global element in any Mule configuration XML file'
      },
      {
        ques: 'What is the purpose of API autodiscovery?',
        options: [
          'Enables API Manager to discover the published API on Anypoint Exchange',
          'Allows the Mule application to be automatically discovered on Anypoint Exchange',
          'Enables the API to be directly manage in API Manager',
          'Allows a deployed Mule application to connect with API Manager to download policies and act as its own API proxy'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'All subsequent message processors are skipped'
      },
      {
        ques: 'What is the maximum number of Mule applications that can run in a Cloud Hub Worker?',
        options: [
          'At most one',
          'At least one',
          'Depends on the vCores',
          'Depends on the number of CloudHub workers configured'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Validation module’s Is number operation'
      },
      {
        ques: 'What does an API proxy application NOT do?',
        options: [
          'Determine which request Mule event is allowed to pass through to the API backend service',
          'Apply runtime policies to enforce governance',
          'Determine which response Mule event is allowed to pass through to the API backend service',
          'Measure the traffic flowing through the proxy'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Inbound property'
      },
      {
        ques: 'What does the Mule runtime use to enforce policies and limit access to APIs?',
        options: [
          'Anypoint Access Control',
          'The proxy created by API Manager',
          'API Manager',
          'The Mule runtime’s embedded API Gateway'
        ],
        title:
          'Mulesoft.U Development Fundamentals! Trivia Training Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(41)(139).jpg',
        description:
          'If you consider yourself a software developer, you must have come across the Mulesoft. U and what they offer when it comes to computer knowledge. How good are you when it comes to the development fundamentals of Mulesoft. U? This trivia training quiz will help refresh your memory. Do give it a shot and see which parts to polish up on.',
        correctOption: 'Message source'
      }
    ]
  },
  {
    index: 38,
    result: [
      {
        ques: 'The programming process is a _______________.',
        options: [
          'System-development process',
          'Coding process',
          'Testing process',
          'Problem solving process'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'Print chart'
      },
      {
        ques: 'Which one is true?',
        options: [
          'The programming process is a problem solving process.',
          'The programming process is a data transformation process.',
          'The programming process is a coding process.',
          'The programming process is problem-defining process.'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption:
          'It is a list of the sequence of steps required to solve the problem'
      },
      {
        ques: 'In the problem definition, which of the following do we use to describe the output that is to be printed?',
        options: [
          'Print chart',
          'Display system layout sheet',
          'A record format form',
          'All of the above'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'The system analyst'
      },
      {
        ques: 'Who usually provides the problem definition to a programmer?',
        options: [
          'The system analyst',
          'The program manager',
          'The project manager',
          'A senior programmer'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'Problem solving process'
      },
      {
        ques: 'Which of the following defines an algorithm?',
        options: [
          'It is a graphical representation of a program flow',
          'It is the documentation of program logic',
          'It is a list of the sequence of steps required to solve the problem',
          'It is the actual program code'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption:
          'It is a list of the sequence of steps required to solve the problem'
      },
      {
        ques: 'What is used for keeping track of the number of times something occurs in a program?',
        options: [
          'A loop',
          'A counter',
          'A decision construct',
          'None of the above'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'A counter'
      },
      {
        ques: 'What do mean by incrementing?',
        options: [
          'Squaring',
          'Adding one',
          'Subtracting one',
          'Setting initial value'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'Adding one'
      },
      {
        ques: 'What do we can an error that occurs while a program is being executed?',
        options: [
          'Syntax error',
          'Logical error',
          'Execution-time error',
          'Bug'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'The programming process is a problem solving process.'
      },
      {
        ques: 'Which of the following procedure can you use to check an algorithm?',
        options: [
          'Debugging by automated debugger',
          'Desk-checking',
          'Inspection',
          'Consultation'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'Execution-time error'
      },
      {
        ques: 'Which of the following defines an algorithm?',
        options: [
          'It is a symbolic representation an algorithm',
          'It is the documentation of program logic',
          'It is a list of the sequence of steps required to solve the problem',
          'It is the actual program code'
        ],
        title:
          'Programming Practice & Techniques: The Programming Process - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628838019.jpg',
        description:
          'Database Design & Development Programming Practice & Techniques The Programming Process',
        correctOption: 'Desk-checking'
      }
    ]
  },
  {
    index: 39,
    result: [
      {
        ques: 'Clojure is based on which programming language?',
        options: ['PHP', 'Ruby', 'Python', 'Lisp'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'Lisp'
      },
      {
        ques: 'Which of these platforms is not used to run Clojure? ',
        options: [
          'Java Virtual Machine',
          'Common Language Runtime',
          'HyperText Markup Language',
          'JavaScript'
        ],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'HyperText Markup Language '
      },
      {
        ques: 'Who designed Clojure? ',
        options: [
          'Rich Hickey',
          'James Borderman',
          'Huateng Xue',
          'Jerry Clojure'
        ],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: '1.8'
      },
      {
        ques: 'Which of these is not a file extension for Clojure? ',
        options: ['Clj', 'Cljs', 'Ens', 'Edn'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: '2016'
      },
      {
        ques: 'Which of these is not a Clojure variable? ',
        options: ['Print', 'Short', 'Char', 'String'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'Rich Hickey'
      },
      {
        ques: 'How can you declare a variable in Clojure? ',
        options: [
          '(def var- name var- value )',
          '[def var- name var- value]',
          '{def var- name var- value}',
          'Def var- name var- value'
        ],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'Edn'
      },
      {
        ques: 'Which of the following does Clojure use?',
        options: [
          'Alphabets',
          'Positive integers',
          'Negative integers',
          '0 and 1'
        ],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'Print '
      },
      {
        ques: 'How many types of Clojure maps exist?',
        options: ['4', '3', '2', '1'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: '(def var- name var- value )'
      },
      {
        ques: 'What is the stable version of Clojure? ',
        options: ['4.8', '3.8', '2.8', '1.8'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: 'Positive integers '
      },
      {
        ques: 'When was the first stable Clojure version released?',
        options: ['2014', '2015', '2016', '2017'],
        title: 'Clojure Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1534934797.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Emphasized on functional programming, Clojure is a programming language that treats code as data. If you're starting to develop an interest, beginning to learn, or just want to know how it works, take this basic programming test.",
        correctOption: '2'
      }
    ]
  },
  {
    index: 40,
    result: [
      {
        ques: 'Which of these was Smalltalk first released as? ',
        options: [
          'Smalltalk 60',
          'Smalltalk 70',
          'Smalltalk 80',
          'Smalltalk 90'
        ],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Smalltalk 80'
      },
      {
        ques: 'When was the first stable version of Smalltalk released?',
        options: ['1980', '1989', '1984', '1987'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: '1980'
      },
      {
        ques: 'Where was Smalltalk created? ',
        options: ['CERN ', 'PARC', 'NASA', 'MAN'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'PARC'
      },
      {
        ques: 'What type of inheritance does Smalltalk support? ',
        options: ['Unlimited', 'Single', 'Double', 'Triple'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Single '
      },
      {
        ques: 'Smalltalk is executed by a virtual machine as which of these languages?',
        options: ['PHP', 'Java', 'JavaScript', 'Python'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Java '
      },
      {
        ques: 'Smalltalk codes are stored in the virtual machine in which form?',
        options: ['Byte-code', 'Kilo-code', 'Bit-code', 'Hex-code'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Byte-code'
      },
      {
        ques: 'Which is the file that contains all Smalltalk codes?',
        options: ['File', 'Cody', 'Image', 'Hotspot'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Image '
      },
      {
        ques: 'In which version of Smalltalk was metaclass added? ',
        options: [
          'Smalltalk 77',
          'Smalltalk 78',
          'Smalltalk 79',
          'Smalltalk 80'
        ],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Smalltalk 80'
      },
      {
        ques: 'Which version of Smalltalk was Squeak derived from? ',
        options: ['Version 1', 'Version 2', 'Version 3', 'Version 4'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Version 1'
      },
      {
        ques: 'What is the programming paradigm of Smalltalk? ',
        options: ['Procedural', 'Functional', 'Object-oriented', 'Logic'],
        title: 'Smalltalk Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522310999.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Smalltalk is an object-oriented programming language designed greatly for educational use. Take this basic programming test to assess your knowledge of Smalltalk.',
        correctOption: 'Object-oriented '
      }
    ]
  },
  {
    index: 41,
    result: [
      {
        ques: 'Maximise Z = 3x + 4y Subject to the constraints: x + y < 4, x > 0, y > 0 Find the maximum value of Z?',
        options: ['16', '14', '12', '10'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: '16'
      },
      {
        ques: 'Maximise Z = 3x + 2y from the following graph:',
        options: [
          'Maximum value of Z is 10',
          'Maximum value of Z is 20',
          'Maximum value of Z is 15',
          'Maximum value of Z is 18'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Maximum value of Z is 18'
      },
      {
        ques: 'Minimise Z = −3x + 4y Subject to: x +2y < 8, 3x + 2y < 12, x > 0, y > 0',
        options: [
          'Minimum value of Z is −10',
          'Minimum value of Z is −2',
          'Minimum value of Z is −15',
          'Minimum value of Z is −12'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Minimum value of Z is −12'
      },
      {
        ques: 'Minimise and Maximise Z = x + 2y Subject to: x + 2y ≥ 100, 2x − y ≤ 0, 2x + y ≤ 200, x ≥ 0, y ≥ 0.',
        options: [
          'Maximum value of Z is 400',
          'Minimum value of Z is 100',
          'Both A & B',
          'None of these'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Both A & B'
      },
      {
        ques: 'Minimise Z = 3x + 5y Such that: x + 3y > 3, x + y > 2, x, y > 0',
        options: [
          'Minimum value of Z is 5',
          'Minimum value of Z is 7',
          'Minimum value of Z is 9',
          'Minimum value of Z is 12'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Minimum value of Z is 7'
      },
      {
        ques: 'Which of the following statements is true about an L.P. problem? A. L.P.P. is concerned with finding the objective function of several variables subject to linear constraints B. It refers to the method of determining a particular programme or plan of action. C. The problem should have an optimal region inorder to have an optimal solution.',
        options: ['A and B', 'B and C', 'A and C', 'A, B and C'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'A, B and C'
      },
      {
        ques: 'In an L.P., the allowed numbers of constraints are:',
        options: ['Zero', 'Unlimited', 'Four', 'Three'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Unlimited'
      },
      {
        ques: 'A factory manufactures two types of screws, A and B. Each type of screw requires the use of two machines, an automatic and a hand operated. It takes 4 minutes on the automatic and 6 minutes on hand operated machines to manufacture a package of screws A, while it takes 6 minutes on automatic and 3 minutes on the hand operated machines to manufacture a package of screws B. Each machine is available for at the most 4 hours on any day. The manufacturer can sell a package of screws A at a profit of Rs 7 and screws B at a profit of Rs10. Assuming that he can sell all the screws he manufactures, how many packages of each type should the factory owner produce in a day in order to maximize his profit? Determine the maximum profit.',
        options: [
          '20 packages of screws A and 20 packages of screws B',
          '30 packages of screws A and 30 packages of screws B',
          '30 packages of screws A and 20 packages of screws B',
          '50 packages of screws A and 20 packages of screws B'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: '30 packages of screws A and 20 packages of screws B'
      },
      {
        ques: 'Minimise Z = 3x + 2y; subject to the constraints: x + y ≥ 8 3x + 5y ≤ 15 x ≥ 0, y ≥ 0',
        options: ['12', '-12', '2', 'No solution'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'No solution'
      },
      {
        ques: 'A cottage industry manufactures pedestal lamps and wooden shades, each requiring the use of grinding/cutting machine and a sprayer. It takes 2 hours on the grinding/cutting machine and 3 hours on the sprayer to manufacture a pedestal lamp. It takes one hour on the grinding/cutting machine and 2 hours on the sprayer to manufacture a shade. On any day, the sprayer is available for at the most 20 hours and the grinding/cutting machine for at the most 12 hours. The profit from the sale of a lamp is 5 and that from a shade is 3. Assuming that the manufacturer can sell all the lamps and shades that he produces, how should he schedule his daily production in order to maximise his profit? Make an L.P.P. and solve it graphically.',
        options: [
          'Z is maximum at (3,8)',
          'Z is maximum at (3,5)',
          'Z is maximum at (4,4)',
          'Z is maximum at (3,9)'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Z is maximum at (4,4)'
      },
      {
        ques: 'A manufacturer produces nuts and bolts. It takes 1 hour of work on machine A and 3 hours on machine B to produce a package of nuts. It takes 3 hours on machine A and 1 hour on machine B to produce a package of bolts. He earns a profit, of Rs 17.50 per package on nuts and Rs. 7.00 per package on bolts. How many packages of each should be produced each day so as to maximize his profit, if he operates his machines for at the most 12 hours a day?',
        options: [
          '3 packages of nuts and 6 packages of bolts',
          '3 packages of nuts and 3 packages of bolts',
          '6 packages of nuts and 3 packages of bolts',
          '3 packages of nuts and 8 packages of bolts'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: '3 packages of nuts and 3 packages of bolts'
      },
      {
        ques: 'A merchant plans to sell two types of personal computers − a desktop model and a portable model that will cost Rs 25000 and Rs 40000 respectively. He estimates that the total monthly demand of computers will not exceed 250 units. Determine the number of units of each type of computers which the merchant should stock to get maximum profit if he does not want to invest more than Rs 70 lakhs and if his profit on the desktop model is Rs 4500 and on portable model is Rs 5000.',
        options: [
          'Maximum value of Z is at (200, 50)',
          'Maximum value of Z is at (100, 50)',
          'Maximum value of Z is at (200, 100)',
          'Maximum value of Z is at (200, 150)'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Maximum value of Z is at (200, 50)'
      },
      {
        ques: 'A company manufactures two types of novelty souvenirs made of plywood. Souvenirs of type A require 5 minutes each for cutting and 10 minutes each for assembling. Souvenirs of type B require 8 minutes each for cutting and 8 minutes each for assembling. There are 3 hours 20 minutes available for cutting and 4 hours of assembling. The profit is Rs 5 each for type A and Rs 6 each for type B souvenirs. How many souvenirs of each type should the company manufacture in order to maximize the profit?',
        options: [
          'Maximum value of Z is 500',
          'Maximum value of Z is 200',
          'Maximum value of Z is 400',
          'Maximum value of Z is 600'
        ],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: 'Maximum value of Z is 200'
      },
      {
        ques: 'There are two types of fertilizers F1 and F2. F1 consists of 10% nitrogen and 6% phosphoric acid and F2 consists of 5% nitrogen and 10% phosphoric acid. After testing the soil conditions, a farmer finds that she needs at least 14 kg of nitrogen and 14 kg of phosphoric acid for her crop. If F1 cost Rs 6/kg and F2 costs Rs 5/kg, determine how much of each type of fertilizer should be used so that nutrient requirements are met at a minimum cost. What is the minimum cost?',
        options: ['1000', '1200', '1500', '2000'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: '1000'
      },
      {
        ques: 'A diet is to contain at least 80 units of vitamin A and 100 units of minerals. Two foods F1and F2 are available. Food F1 costs Rs 4 per unit food and F2 costs Rs 6 per unit. One unit of food F1 contains 3 units of vitamin A and 4 units of minerals. One unit of food F2 contains 6 units of vitamin A and 3 units of minerals. Formulate this as a linear programming problem. Find the minimum cost for diet that consists of mixture of these two foods and also meets the minimal nutritional requirements?',
        options: ['110', '104', '115', '123'],
        title: 'Mathematics: Linear Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1671438004.jpg',
        description:
          'Linear programming is most popular among business people and could be used by anyone and requires a thorough understanding to maneuver through. This mathematics quiz tests how well you understand linear programming problems and how to solve them.',
        correctOption: '104'
      }
    ]
  },
  {
    index: 42,
    result: [
      {
        ques: 'Identify what THREE (3) threats are email based? i. spam ii. attachment-based attacks iii. email address spoofing iv. insufficient user authentication',
        options: ['I, ii & iii', 'Ii, iii & iv', 'I, iii & iv', 'I, ii & iv'],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Buffer overflow directed at a specific host MTA'
      },
      {
        ques: 'Identify the reason can HTTPS traffic make security monitoring difficult.',
        options: [
          'Encryption',
          'Large packet header  ',
          'Signature detection takes longer',
          'SSL interception'
        ],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Insufficient user input validation'
      },
      {
        ques: 'Identify which of following would meet the requirements for multifactor authentication',
        options: [
          'Username, PIN and employee ID number',
          '​​​​​​​Fingerprint and Password',
          '​​​​​​​Smart card and hardware token',
          'Voice recognition and retina scan'
        ],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Iii&iv'
      },
      {
        ques: 'Choose the TRUE statement about the following statements are true about system vulnerabilities i. A vulnerability is a threat on a system ii. A vulnerability is an exploitable weakness in a system or its design. iii. Vulnerabilities can be found in protocols, operating system, application, hardware and system design. iv. Vulnerabilities are exploits that are discovered every day in software and hardware products.',
        options: ['I & ii', 'Ii & iii', 'Ii & iv', 'Iii & iv'],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'I, ii & iii'
      },
      {
        ques: 'Identify which of the following is the LEAST secure hashing algorithm',
        options: ['SHA1', 'RIPEMD', 'MD5', 'DES'],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: '​​​​​​​Fingerprint and Password'
      },
      {
        ques: 'Choose TCP port does SSL/TLS use for HTTPS communication.',
        options: ['TCP 563', 'TCP 626', 'TCP 80', 'TCP 443'],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Poor implementation'
      },
      {
        ques: 'Choose the countermeasures that can reduce the threat of Cross-Site Request Forgery (CSRF)? i. Educate user to recognize possible phishing attacks. ii. Deny access to the public internet from workstations and laptops. iii.Visit OWASP.org website for up to date information and guidance on developing web content. iv. Implement a proxy server solution for user that access the internet.',
        options: ['I&ii', 'I&iii', 'Ii&iii', 'Iii&iv'],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'MD5'
      },
      {
        ques: 'Identify the option can lead to an SQL injection attack',
        options: [
          'Insufficient user input validation',
          'Running a database in debugging mode',
          'Using GET method instead of POST method when submitting a web form',
          'Using * in a SELECT statement'
        ],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Large packet header  '
      },
      {
        ques: 'A web server, which is configured to use TLS with AES-GCM-256, SHA-384 and ECDSA, recently suffered an information loss breach. Choose which of the following is MOST likely the cause',
        options: [
          'Insuffient key bit length',
          'Weak cipher suite',
          'Unauthenticated encryption method',
          'Poor implementation'
        ],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'Ii & iii'
      },
      {
        ques: 'During a routine vulnerability assessment, the following command was successful: "echo "vrfy \'perl -e \'print "hi" x 500 \' \' " | nc www.company.com 25" Choose which of the following vulnerabilities is being exploited',
        options: [
          'Buffer overflow directed at a specific host MTA',
          'SQL injection directed at a web server',
          'Cross-site scripting directed at www.company.com',
          'Race condition in a UNIX shell script'
        ],
        title: 'Dfw6013 Security Web Programming - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2642694/1583122740.jpg',
        description:
          'SECURITY IN WEB PROGRAMMING covers Web safety and browser vulnerabilities, privacy concerns, issues with Java, JavaScript, ActiveX, and all things Web and security related. Various protocols, and approaches to provide web services in as secure a manner as possible will be investigated, to include: digital certificates SSL (Secure Socket Layer), TLS (Transport Layer Security), host security, server access methods, and secure CGI/API. INSTRUCTION: This section consists of TEN (10) objective questions.',
        correctOption: 'TCP 443'
      }
    ]
  },
  {
    index: 43,
    result: [
      {
        ques: 'When used in robotics, what does PID stand for?',
        options: [
          'Programmed Integrated Device',
          'Propelled Instrument Derivative',
          'Popsicle Ice Demonstration',
          'Proportional Integral Derivative'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'Proportional Integral Derivative'
      },
      {
        ques: 'When using PID, you should not set your motor’s power to 100 because',
        options: [
          'The robot will not have enough time to correct it’s course before it reaches the end of the maze board.',
          'The motor sensors cannot complete the PID algorithm for values over 50.',
          'There won’t be enough power left for the motor to compensate for going too slow.',
          'When the motors are synced BOTH motor power levels must equal 100'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'There won’t be enough power left for the motor to compensate for going too slow.'
      },
      {
        ques: 'What should Motor B do if you stopped Motor C with while using Motor Synchronization?  (Assuming that Motor B is the master motor.)',
        options: [
          'Motor B would stop.',
          'Motor B would continue at 50% power.',
          'Motor B would speed up to 100% power.',
          'Motor B would reverse for split second and stop.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'Motor B would stop.'
      },
      {
        ques: 'Motor synchronization allows you to control your robot in a way that…',
        options: [
          'Makes the robot maintain a constant speed in both motors.',
          'Prioritizes motor speed over alignment.',
          'Makes the robot maintain power to both motors.',
          'Prioritizes motor alignment over motor speed.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'Prioritizes motor alignment over motor speed.'
      },
      {
        ques: 'Given the following commands, what would the robot do?   1  task main () 2  { 3 4     nSyncedMotors = synchBC; 5     nSyncedTurnRatio = 100; 6 7     motor[motorB] = 50; 8     motor[motorC] = -50; 9     wait1Msec(4000); 10 11 }',
        options: [
          'The robot would point turn to the right for 4 seconds',
          'The robot would go forward for 4 seconds',
          'The robot would point turn to the left for 4 seconds',
          'The robot would reverse for 4 seconds'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'The robot would go forward for 4 seconds'
      },
      {
        ques: 'Given the following commands, what would the robot do?   1  task main () 2  { 3 4     nSyncedMotors = synchBC; 5     nSyncedTurnRatio = -100; 6 7     motor[motorB] = 50; 9     wait1Msec(4000); 8 10  }',
        options: [
          'The robot would point turn for 4 seconds',
          'The robot would go forward for 4 seconds',
          'The robot would do nothing',
          'The robot would reverse for 4 seconds'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'The robot would point turn for 4 seconds'
      },
      {
        ques: 'Which line(s) of the following code is unnecessary?   1   task main () 2   { 3 4       nSyncedMotors = synchBC; 5       nSyncedTurnRatio = 100; 6 7       motor[motorB] = 50; 8       motor[motorC] = 50; 9       wait1Msec(4000); 10 11     nSyncedMotors = synchBC; 12     nSyncedTurnRatio = -100; 13 14     motor[motorB] = 50; 15     motor[motorC] = -50; 16     wait1Msec(700); 17 18  }',
        options: [
          'Lines 8 and 15',
          'Lines 11 and 12',
          'Line 9 and 16',
          'Lines 7 and 14'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'Lines 8 and 15'
      },
      {
        ques: 'What factor or factors affect the robot’s ability to move in a straight line?',
        options: [
          'Motor manufacturing tolerances',
          'Robot weight distribution',
          'Frictional forces in the robot’s drive train',
          'All the above'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'All the above'
      },
      {
        ques: '“Closed-loop” control describes a system...',
        options: [
          'That monitors its own performance and adjusts its output to achieve a desired outcome.',
          'Whose specifications are kept secret.',
          'In which a Loop control structure with matching opening and closing punctuation is used.',
          'Which is ring-shaped.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'That monitors its own performance and adjusts its output to achieve a desired outcome.'
      },
      {
        ques: 'The command nSyncedTurnRatio = 100; would tell the slave motor to turn:',
        options: [
          'At the same rate and in the same direction as the master.',
          'At the same rate and in the opposite direction of the master.',
          'At 100 degrees per second, in the same direction as the master.',
          'At full power forward.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'At the same rate and in the same direction as the master.'
      },
      {
        ques: 'The PID algorithm adjusts:',
        options: [
          'The power level of an individual motor to achieve a target speed.',
          'Two motors’ powers to keep them together at all times.',
          'A motor’s gear ratio to achieve a target power.',
          'The amount of friction in a motor to make it run more smoothly.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'The power level of an individual motor to achieve a target speed.'
      },
      {
        ques: 'What will the robot do when given the following program...',
        options: [
          'Go forward and point turn',
          'Go forward until the touch sensor is pressed and swing turn',
          'Go forward until the touch sensor is pressed and point turn',
          'Nothing'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'Go forward until the touch sensor is pressed and point turn'
      },
      {
        ques: 'On what line(s) is the error in the following program...',
        options: ['Line 14', "The 'Auto' lines", 'Lines 7 and 13', 'Line 5'],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: 'Line 5'
      },
      {
        ques: 'When programming your robot to use the touch sensor, you must do the following things',
        options: [
          'Configure the sensor port to recognize a Touch Sensor, create a while loop that tells the robot to do when the Touch Sensor is NOT pressed, and say to the robot what to do when the Touch Sensor IS pressed.',
          'Attach the Touch Sensor to the robot, synchronize the motors to the robot goes straighter, make sure the robot turns to the right.',
          'Configure the sensor port to recognize a Touch Sensor, synchronize motors BC, create a while loop.',
          'Create a while loop that tells the robot to do when the Touch Sensor is NOT pressed, tell the robot what to do when the Touch Sensor IS pressed, and tell the robot how many degrees of rotation it must travel to complete the entire course.'
        ],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption:
          'Configure the sensor port to recognize a Touch Sensor, create a while loop that tells the robot to do when the Touch Sensor is NOT pressed, and say to the robot what to do when the Touch Sensor IS pressed.'
      },
      {
        ques: 'In robot C the how would the following statement be evaluated (100 != 50)',
        options: ["The statement is 'true'", "The statement is 'false'"],
        title: 'ROBOTC Programming Quiz: Trivia Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(46)(222).jpg',
        description:
          'ROBOTC is a C-based programming language used for writing and debugging programs in a Windows environment. This programming language offers an all-inclusive, real-time debugger used in high-end applications. This quiz will test your knowledge about the necessary codes and functions of the ROBOTC programming language. Please read the questions carefully as they are tricky.',
        correctOption: "The statement is 'true'"
      }
    ]
  },
  {
    index: 44,
    result: [
      {
        ques: 'C language has been developed by?',
        options: [
          'Ken Thompson',
          'Dennis Ritchie',
          'Peter Norton',
          'Martin Richards'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'Dennis Ritchie'
      },
      {
        ques: 'C can be used on?',
        options: [
          'Only MS-DOS',
          'Only Linux',
          'Only window',
          'All of the above'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'All of the above'
      },
      {
        ques: 'C programs are convrted into the machine language with the help of?',
        options: [
          'An editor',
          'Compiler',
          'An operating system',
          'None of the above'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'Compiler'
      },
      {
        ques: 'The real constant in C can be expressed which of the following forms?',
        options: [
          'Fractional form only',
          'Exponetial form only',
          'ASCII form only',
          'Both Fractional and Exponetial'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'Both Fractional and Exponetial'
      },
      {
        ques: 'A character variable can at a time score?',
        options: [
          '1 character',
          '8 characters',
          '254 characters',
          'None of the above'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: '1 character'
      },
      {
        ques: "The statement char ch='z' would store in ch.",
        options: [
          'The character Z',
          'ASCII value of Z',
          'Z along with the single inverted commas',
          'Both (1) and (2)'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'ASCII value of Z'
      },
      {
        ques: 'Which of the following is not a character constant?',
        options: [
          "'Thank You'",
          "'quest videos- IT Learning at its best'",
          "'23.56e-03'",
          'All of the above'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'All of the above'
      },
      {
        ques: 'The maximun value that an integer constant can have is?',
        options: ['-32767', '32767', '1.7014e+38', '-1.7014e+38'],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: '32767'
      },
      {
        ques: 'A C variable cannot start with?',
        options: [
          'An alphabet',
          'A number',
          'A special symbol other than underscore',
          'Both (2) and (3)'
        ],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'Both (2) and (3)'
      },
      {
        ques: 'Which of the following statements is wrong ?',
        options: ['INT=123;', "Val='A' * 'B';", "Is=20 * 'T'", 'Count+5=res;'],
        title: 'C Programming Ultimate Test: Quiz! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-12-15T172717_279.jpg',
        description:
          'What do you know about C programming? C Programming Language is a strong and all-purpose procedural programming language that supports structured programming. It was developed in 1972 by Bell Telephone Laboratories to create the Unix operating system. It gives you a map to navigate typical machine instructions. C Programming can be used to develop software like operating systems and databases. This quiz will demonstrate your knowledge of C Programming Language and help you learn interetsing facts along the way.',
        correctOption: 'Count+5=res;'
      }
    ]
  },
  {
    index: 45,
    result: [
      {
        ques: 'Is the following statement true or false? Statement: The default statement in a switch ... case construct has a single break statement.',
        options: ['True', 'False'],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Command'
      },
      {
        ques: 'A ______________ construct is used to repeat the execution of a section of a program.',
        options: ['Decision-making', 'Select', 'Repeat', 'Loop'],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'False'
      },
      {
        ques: 'Which of the following are loop constructs? (Choose all that apply)',
        options: [
          'Goto',
          'For loop',
          'Repeat...while loop',
          'Repeat...until loop',
          'While'
        ],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Loop'
      },
      {
        ques: 'The body of the while loop is continuously executed until the specified condition is _______.',
        options: ['Completed', 'True', 'False', 'None of the above'],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Goto'
      },
      {
        ques: 'Is the following statement true or false? Statement: The while loop and repeat...until loop differ only in the way the condition is evaluated',
        options: ['True', 'False'],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'True'
      },
      {
        ques: 'What are the three components of the for loop? (Choose all that apply)',
        options: [
          'Intialization expression',
          'Condition expression',
          'Evaluation Expression',
          'Increment/Decrement expression',
          'Result expression'
        ],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'True'
      },
      {
        ques: 'Identify whether the following statements are true or false. Statement 1: The initialization in the for statement is done only once. Statement 2: The goto is used when the number of iterations of the loop is known before.',
        options: [
          'Both statements are true',
          'Both statements are false',
          'Statement 1 is true and Statement 2 is false',
          'Statement 1 is false and Statement 2 is true'
        ],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Intialization expression'
      },
      {
        ques: 'There are techniques that provide ways to split a long, continuous program into a series of individual _________ that are related to each other in a specified manner.',
        options: [
          'Functions',
          'Modules',
          'Procedures',
          'Subroutines',
          'Subprograms'
        ],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Statement 1 is true and Statement 2 is false'
      },
      {
        ques: 'Which of the following syntax is used to declare a procedure?',
        options: ['Pro', 'Procedure', 'Procedure', 'Pro'],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Modules'
      },
      {
        ques: 'What do you call a specific instruction designed to do a task?',
        options: ['Command', 'Process ', 'Task', 'Instruction '],
        title: 'Fundamentals Of Programming For Beginners! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(67)(262).jpg',
        description:
          'Do you like making applications or writing code? Are you learning any programming language? If yes, then take this quiz to test your knowledge about the basics of programming. Programming is the art and science of interpreting an algorithm and encoding it into a script. Algorithms are the pivotal part of any programming which find a solution to the problem. Read the questions carefully and answer. Good Luck!',
        correctOption: 'Procedure '
      }
    ]
  },
  {
    index: 46,
    result: [
      {
        ques: 'What are the life cycle stage of program development?',
        options: [
          'A. The problem, program design, testing and debugging of the program, and program maintenance.',
          'B. The problem, program design, program coding, testing and debugging of the program, the formalization of the solution, and program maintenance.',
          'C. Program design, program coding, the formalization of the solution, and program maintenance.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Pascal , Fortran , Java , Visual Basic.'
      },
      {
        ques: 'Who starts with the decision of the production and processing of program logic.?',
        options: ['Programming languages.', 'Compilers', 'The Program Design.'],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption:
          'A compiler is a translation program that translates all source code in a programming language of high level object code and creates an object file.'
      },
      {
        ques: 'Before you start programming that programmers should understand?',
        options: [
          'User needs and the flow of program logic.',
          'Flow of program logic.',
          'User needs'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Imperative languages, functional languages.'
      },
      {
        ques: 'What is a programming language? ',
        options: [
          'A programming language is an artificial language designed to communicate instructions to a machine, particularly a computer.',
          'Programming language is a set of CPU instructions that a computer can understand and execute.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'MACHINE LANGUAGES AND ASSEMBLY LANGUAGES.'
      },
      {
        ques: 'The description of a programming language is usually split into the two components.?',
        options: [
          'Parsing and semantic analysis.',
          'Syntax (form) and semantics (meaning).',
          'Lexical analysis, parsing and semantic analysis.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Compilers, interpreters.'
      },
      {
        ques: 'What are the category of programming language?',
        options: [
          'Low-level language and high level language.',
          'Low-level language, high level language, machine language.',
          'Assembly language, high level language, high level language.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption:
          'An interpreter is a program that executes instructions that are written in a high level language.'
      },
      {
        ques: 'How appear the high-level languages?',
        options: [
          'Assembly Language and Artificial Intelligence.',
          'Artificial intelligence, expert systems.',
          'Machine language and assembly language.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Object-Oriented Programming.'
      },
      {
        ques: 'What are the type of high-level language.?',
        options: [
          'Pascal , Fortran , Java , Visual Basic.',
          'Machine language, assembly language , Pascal , Visual Basic.',
          'Machine language, assembly language.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Inputs , outputs ,outcomes.'
      },
      {
        ques: 'What is a compiler?',
        options: [
          'A compiler is a program that translates machine code to a compiler.',
          'A compiler is a translation program that translates all source code in a programming language of high level object code and creates an object file.',
          'A compiler is a translation program that translates all source code in a programming language object code low level and creates an object file.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption:
          'Objects, classes, abstraction, encapsulation, polymorphism and inheritance.'
      },
      {
        ques: 'What are the main groups based on processing programming language commands?',
        options: [
          'Imperative languages,high-level language.',
          'Imperative languages, functional languages , high-level language.',
          'Imperative languages, functional languages.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Inputs.'
      },
      {
        ques: 'What are the types of low-level language?',
        options: [
          'INPUTS , OUTPUTS ,OUTCOMES.',
          'COMPILER, TRANSLATOR, PRECOMPILER.',
          'MACHINE LANGUAGES AND ASSEMBLY LANGUAGES.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Outputs.'
      },
      {
        ques: 'What are the types of translators low level language?',
        options: [
          'Compiler, translator.',
          'Compiler, translator, decompiler.',
          'Compilers, interpreters.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'True'
      },
      {
        ques: 'What is an interpreter?',
        options: [
          'An interpreter is a program that executes instructions that are written in a low level language.',
          'An interpreter is a program that executes instructions that are written in a high level language.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Low-level language.'
      },
      {
        ques: 'What does the acronym OOP?',
        options: [
          'Profile object oriented.',
          'Object-Oriented Programming.',
          'Introducing object-oriented.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption:
          'B.\tThe problem, program design, program coding, testing and debugging of the program, the formalization of the solution, and program maintenance.'
      },
      {
        ques: 'What are the basic elements of logical model? ',
        options: [
          'Analysis, design and presentation.',
          'Inputs , outputs ,outcomes.',
          'Inputs , outputs.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'The Program Design.'
      },
      {
        ques: 'What are the basic concept of OOP.?',
        options: [
          'Objects, classes, abstraction, encapsulation.',
          'Abstraction , encapsulation , Objects , classes',
          'Objects, classes, abstraction, encapsulation, polymorphism and inheritance.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'User needs and the flow of program logic.'
      },
      {
        ques: 'What is the basic element of the logical model that includes time, money, paid staff, volunteers, materials, facilities, equipment and effort companions?',
        options: ['Inputs.', 'Outputs', 'Outcomes.'],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption:
          'A programming language is an artificial language designed to communicate instructions to a machine, particularly a computer.'
      },
      {
        ques: 'Which of the basic elements of the logic model is adopted by the organization in response to a need or problem identified.?',
        options: ['Inputs.', 'Outputs.', 'Outcomes.'],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Syntax (form) and semantics (meaning).'
      },
      {
        ques: 'A compiled program has the advantage of ensuring the safety of the source code.?',
        options: ['True', 'False'],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Low-level language and high level language.'
      },
      {
        ques: 'Did the machine language and assembly language are:',
        options: [
          'High-level language.',
          'Language average.',
          'Low-level language.'
        ],
        title: 'Commands Of Programming Language Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1503896225.jpg',
        description:
          'Take this quiz and start to learn about commands of computer programming languages!',
        correctOption: 'Artificial intelligence, expert systems.'
      }
    ]
  },
  {
    index: 47,
    result: [
      {
        ques: 'Who was the founder of Lisp? ',
        options: [
          'Jamie McCarthy',
          'John McCarthy',
          'Jack McCarthy',
          'Jacen McCarthy'
        ],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'List processing '
      },
      {
        ques: 'What does Lisp stand for? ',
        options: [
          'Listening protocol',
          'List processing',
          'Little performance',
          'Logical process'
        ],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: ' .lsp'
      },
      {
        ques: 'Which extention is used for Lisp files? ',
        options: ['.lsp', '.lps', '.lisp', '.xlsp'],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: '3'
      },
      {
        ques: 'Lisp symbolic expressions consist of how many objects?',
        options: ['3', '5', '7', '9'],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: '“”'
      },
      {
        ques: 'Strings are characters enclosed in which of these?',
        options: ['“”', '[]', '()', ''],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: '2'
      },
      {
        ques: 'How many types of data variables are there in Common Lisp? ',
        options: ['1', '2', '3', '4'],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'Value '
      },
      {
        ques: 'Which of these is not a CL symbolic expression? ',
        options: ['List', 'Atom', 'Value ', 'Strings'],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'Vectors and lists '
      },
      {
        ques: 'What is a sequence? ',
        options: [
          'Vectors and strings',
          'Vectors and scalars',
          'Vectors and lists',
          'Vectors and values'
        ],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'Number '
      },
      {
        ques: 'All of these arguments are needed for defining functions in Lisp except which parameter of function?',
        options: ['Name', 'Number', 'Body', 'Parameter'],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'Artificial Intelligence '
      },
      {
        ques: 'What is Lisp popularly used for?',
        options: [
          'Artificial Intelligence',
          'Search engines',
          'Mobile apps',
          'Web design'
        ],
        title: 'Common Lisp Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2170919/1522272693.jpeg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Common Lisp (CL) is a phenomenal language used by a handful of programmers; it is a data exchange language of the original Lisp programming language. Take this basic programming test to assess your knowledge of Common Lisp.',
        correctOption: 'John McCarthy'
      }
    ]
  },
  {
    index: 48,
    result: [
      {
        ques: 'Python has how many standard data types?',
        options: ['3', '4', '5', '6'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: '5'
      },
      {
        ques: 'What is the output of print str[0] if str = ‘Hello World!’?',
        options: ['Hello', 'Hello World', 'H', 'W'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'H'
      },
      {
        ques: 'What is the difference between tuples and lists?',
        options: [
          'Tuples are enclosed within parentheses while list are not.',
          'Tuples are enclosed with brackets while lists are not',
          'Tuples are bullet points while lists are numbers',
          'Tuples are in Roman figures while lists are alphabetical'
        ],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption:
          'Tuples are enclosed within parentheses while list are not. '
      },
      {
        ques: 'What is the process of retrieving original Python objects from the stored string representation?',
        options: ['Picking', 'Selecting', 'Retrieving', 'Unpicking'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Unpicking '
      },
      {
        ques: 'What manages memory in Python?',
        options: [
          'Memory cache',
          'Development space',
          'Private heap space',
          'Collector'
        ],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Private heap space '
      },
      {
        ques: 'Which of these statements is true for lists and tuples? ',
        options: [
          'Lists are mutable, tuples are not',
          'Tuples are mutable, lists are not',
          'Tuples are numerical figures, lists are not',
          'Lists are numerical figures, tuples are not'
        ],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Lists are mutable, tuples are not '
      },
      {
        ques: 'Which of these is not a mutable built-in type Python? ',
        options: ['Lists', 'Sets', 'Strings', 'Dictionaries'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Strings'
      },
      {
        ques: 'What command can you use to delete a file in Python? ',
        options: [
          'Os.remove (filename)',
          'Os.delete (filename)',
          'Os.clean (filename)',
          'Os.terminate (filename)'
        ],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Os.remove (filename)'
      },
      {
        ques: 'What is the use of // operator in Python?',
        options: ['Or', 'Division', 'Separation', 'List'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Division'
      },
      {
        ques: 'What is the output of print tuple[0] if tuple = ( ‘abcd’, 786 , 2.23, ‘john’, 70.2 )?',
        options: ['John', 'Abcd', '786', '70.2'],
        title: 'Python 3 Basic Programming Test - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1539085071.jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          "Python is one of the most popular programming languages in the world today. Python 3. 0 was released in the late 2000s as a backwards-incompatible release. If you're just learning Python 3 or want to know how it works, take this basic programming test to assess your knowledge.",
        correctOption: 'Abcd'
      }
    ]
  },
  {
    index: 49,
    result: [
      {
        ques: 'Which of the following statement is true regarding constructors? Which of the following statement is true regarding constructors?',
        options: [
          'Default Constructors are optional only for the classes that does not have constructors',
          'Default Constructors are Optional for all classes',
          'Can be overloaded across inherited classes',
          'Abstract classes cannot have constructors'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption:
          'Public class Circle extends Shape { private int radius; public void setRadius(int radius) { this.radius = radius; } public int getRadius() { return radius; } public void draw() {/* code here */}}'
      },
      {
        ques: 'Consider the following code: public abstract class Shape { private int x; private int y; public abstract void draw(); public void setAnchor(int x, int y) { this.x = x; this.y = y; } }  ',
        options: [
          'A. public class Circle extends Shape { private int radius; public void draw();}',
          'B. public abstract class Circle extends Shape { private int radius;}',
          'Public class Circle extends Shape { private int radius; public void setRadius(int radius) { this.radius = radius; } public int getRadius() { return radius; } public void draw() {/* code here */}}',
          'public class Circle implements Shape { private int radius;}',
          'Public class Circle extends Shape { public int radius; private void draw() {/* code here */} }'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption:
          'C. Class: Chocolate Objects: Fruit Chocolates, Rum Chocolates, Milk Chocolates'
      },
      {
        ques: 'Which of the following options is true about multiple inheritance?    ',
        options: [
          'Inheriting from two super classes',
          'Inheriting from a class which is already in an inheritance hierarchy',
          'Inheriting from more than one super class',
          'Inheriting from a single class'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Both Statements A and B are true'
      },
      {
        ques: 'Consider the following code: import java.util.*; public class Code10 { { final Vector v; v=new Vector(); } public Code10() { } public void codeMethod() { System.out.println(v.isEmpty()); } public static void main(String args[]) { new Code10().codeMethod(); } }  ',
        options: [
          'Prints: false',
          'Runtime error: NullPointerException',
          'Compilation error: cannot find the symbol',
          'Compilation error: v is not initialised inside the constructor',
          'Prints: true'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'D. 0 1 2 3 4'
      },
      {
        ques: 'Consider the following code: public class LabeledBreak2 { public static void main(String args[]) { loop: for(int j=0; j<2; j++) { for(int i=0; i<10; i++) { if(i == 5) break loop; System.out.print(i + " "); } } } } Which of the following will be the output for the above code?  ',
        options: [
          'A. 0 1 2 3 4 5',
          'B. Indefinite Loop',
          'C. 1 2 3 4 5',
          'D. 0 1 2 3 4',
          'E. 0 1 2 3 4 0 1 2 3 4'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'D. It improves performance'
      },
      {
        ques: 'Consider the following scenario: Real Chocos Private Limited deals in manufacturing variety of chocolates. This organization manufactures three varieties of chocolates. 1. Fruit Chocolates 2. Rum Chocolates 3. Milk Chocolates A software system needs to be built. Which of the following options identifies the Classes and Objects?  ',
        options: [
          'A. Class: Real Chocos Private Limited Objects: Chocolate',
          'B. Class: Fruit Chocolates Objects: Rum Chocolates',
          'C. Class: Chocolate Objects: Fruit Chocolates, Rum Chocolates, Milk Chocolates',
          'D. Class: Choclate Objects: Milk Chocolates'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Both the length() methods are duplicated methods'
      },
      {
        ques: 'Consider the following partial code: interface A { public int getValue(); } class B implements A { public int getValue() { return 1; } } class C extends B { // insert code here } Which of the following code fragments, when inserted individually at the commented line (// insert code here), makes use of polymorphism? (Choose 3)  ',
        options: [
          'A. public void add(B b) { b.getValue(); }',
          'B. public void add(A a) { a.getValue(); }',
          'C. public void add(C c1, C c2) { c1.getValue(); }',
          'D. public void add(C c) { c.getValue(); }',
          'E. public void add(A a, B b) { a.getValue(); }'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption:
          'Helps the compiler to find the source file that corresponds to a class, when it does not find a class file while compiling'
      },
      {
        ques: 'Which of the following are correct regarding HashCode?(Choose 2)  ',
        options: [
          'A. it is a 32 bit numeric digest key',
          'B. the numeric key is unique',
          'C. hashCode() value cannot be a zero-value',
          'D. It improves performance',
          'E. hashCode() is defined in String class'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'B. Java Source Files'
      },
      {
        ques: 'Which are all platform independent among the following? (Choose 3)  ',
        options: [
          'A. Java Virtual Machine (JVM)',
          'B. Java Source Files',
          'C. Java Development Kit (JDK)',
          'D. Java Class Files',
          'E. JAR Files'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption:
          'Classes can be loaded at Runtime, without actually referring the class in the code at compile time.'
      },
      {
        ques: 'Consider the following listed items: A. a method declared as final B. a method declared as abstract C. a method declared as private Consider the following statements: I.   Will not be available in sub classes II.  Will deny overriding the method III. Will not allow instantiating the class Which of the following option gives the exact matches of above listed items and statements?',
        options: [
          'A-II, B-III, C-I',
          'A-III, B-II, C-I',
          'A-I, B-II, C-III',
          'A-II, B-I, C-III'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: '1,2,3'
      },
      {
        ques: 'Consider the following code: public class TestOverloading {    int _length(String s) {       return s.length();    }    float _length(String s) {       return (float) s.length();    } } Which of the following statement is true regarding the above code?',
        options: [
          'Both the length() methods are duplicated methods',
          'Both the length() methods are overloaded methods',
          "Overloaded methods cannot start with a special character like '_'",
          'Overloaded methods should be declared as public'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Zippo'
      },
      {
        ques: 'Consider the following code: class AllClass {    private static int i = 10;    static { i += 10; }    { i += 10; }    AllClass() { i += 10; }    AllClass incrementWith10() { i += 10; return this;} } public class AllAccess {    public static void main(String[] args) {       System.out.println(new AllClass().incrementWith10().i);    } } Which of the following option gives the output for the above code?',
        options: [
          'Compile time error',
          'Prints: 40',
          'Prints: 50',
          'Run time error'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: '2,4'
      },
      {
        ques: 'Which of the following options give the valid argument types for main() method? 1) String[] args 2) String args[] 3) String ..args 4) String args 5) String[] args[]',
        options: ['1,2,3', '2,3,4', '3,4,5', '1,3,5', '1,3,4'],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption:
          'Default Constructors are optional only for the classes that does not have constructors'
      },
      {
        ques: "Which of the following option gives one possible use of the statement 'the name of the public class should match with its file name'?",
        options: [
          'Helps the compiler to find the source file that corresponds to a class, when it does not find a class file while compiling',
          'To maintain the uniform standard',
          'Helps Javadoc to build the Java Documentation easily'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Compilation error: cannot find the symbol'
      },
      {
        ques: 'Which of the following statement is true?',
        options: [
          'Classes can be loaded at Runtime, without actually referring the class in the code at compile time.',
          'Classes can be loaded at Runtime, but the name of the class with full package name should be given in the code at compile time.',
          'Classes cannot be loaded at Runtime',
          'Only class that is loaded at runtime is the class that contains the main() method'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Outer.Inner o = new Outer.Inner();'
      },
      {
        ques: 'Consider the following code: interface Declare {  Declaration 1:  protected int a = 5;           Declaration 2:  public static final int e = 9; Declaration 3:  volatile int c = 7;            Declaration 4:  transient int d = 8;           } Which of the following option gives the declarations that results in compilation error?',
        options: [
          'Declaration 1,3,4',
          'Declaration 2,4',
          'Declaration 1,2,3',
          'Declaration 2,3,4'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'A-II, B-III, C-I'
      },
      {
        ques: 'Consider the following Statements: Statement A: Anonymous inner class can be created in initializer or static blocks Statement B: Anonymous inner class has no constructor Which of the following option is true regarding the above given statements?',
        options: [
          'Both Statements A and B are true',
          'Statement A is false and B is true',
          'Statement A is true and B is false',
          'Both Statements A and B are false'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Compile time error'
      },
      {
        ques: 'Consider the following code: Line 1:class A { Line 2:  void display() { } Line 3:} Line 4:class B extends A { Line 5:   // insert missing code here Line 6:} Which of the following options give the code snippets, when inserted individually at the line no 5, will correctly complete the definition of class B? 1) int display() { /* more code here */ }  2) void display() { /* more code here */ } 3) private void display() { /* more code here */ }  4) protected void display() { /* more code here */ }',
        options: ['2,4', '1,2', '2,3', '3,4'],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Declaration 1,3,4'
      },
      {
        ques: 'consider the following code:  Line No:1 public class MovieRelease  Line No:2 { Line No:3 public static void main(String[] args) { Line No:4 class Movie { Line No:5 public String name; Line No:6 public Movie(String s) { Line No:7 name = s; Line No:8}} Line No:9 Object obj = new Movie("MaskOfZoro"); Line No:10 System.out.println(obj.name); Line No:11} } Which of the following option gives the valid output for the above code?',
        options: [
          'Zippo',
          'An exception occurs at runtime at line 10.',
          'Compilation fails because of an error in line 3.',
          'Compilation fails because of an error in line 9.',
          'Compilation fails because of an error in line 10.'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'A. public void add(B b) { b.getValue(); }'
      },
      {
        ques: 'Consider the following code: Line no 1:class Outer { Line no 2:public static class Inner { Line no 3:} Line no 4:public static void display() { } } Line no 5:public class Test Line no 6:{ Line no 7:public static void main(String args[]) Line no 8:{ Line no 9:// Replace with code from the option below Line no 10:}} Which of the following option when replaced at line no 9, instantiates an instance of the nested class?',
        options: [
          'Outer.Inner o = new Outer.Inner();',
          'Outer.Inner oi = new Inner();',
          '"Outer o = new Outer(); Outer.Inner oi = o.new Outer.Inner();"',
          'Inner oi = new Outer.Inner();'
        ],
        title: 'Java (Programming Language) Quiz Questions - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(80)(128).jpg',
        description:
          'This is a Java programming language quiz. Take this practice quiz and learn more codings of java.',
        correctOption: 'Inheriting from two super classes'
      }
    ]
  },
  {
    index: 50,
    result: [
      {
        ques: 'Mark the correct statement about integer programming problems (IPPs):',
        options: [
          'Pure IPPs are those problems in which all the variables are non-negative integers.',
          'The 0-1 IPPs are those in which all variables are either 0 or all equal to 1.',
          'Mixed IPPs are those where decision variables can take integer values only but the slack/surplus variables can take fractional values as well.',
          'In real life, no variable can assume fractional values. Hence we should always use IPPs.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'A better'
      },
      {
        ques: 'Consider the following problem: Max. Z = 28x1 + 32x2, subject to 5x1 + 3x2 ≤ 23, 4x1 + 7x2 ≤ 33, and x1 ≥ 0, x2 ≥ 0. This problem is:',
        options: ['A pure IPP.', 'A 0-1 IPP.', 'A mixed IPP.', 'Not an IPP.'],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Integer programming'
      },
      {
        ques: 'Mark the correct statement:',
        options: [
          'A facility location problem can be formulated and solved as a 0-1 IPP.',
          'Problems involving piece-wise linear functions can be modeled as mixed linear programming problems.',
          'Solution to an IPP can be obtained by first solving the problem as an LPP then rounding off the fractional values.',
          'If the optimal solution to an LPP has all integer values, it may or may not be an optimal integer solution.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'The value of the objective function for a maximization problem will likely be less than that for the simplex solution.'
      },
      {
        ques: ' Mark the wrong statement:',
        options: [
          'To solve an IPP using cutting plane algorithm, the integer requirements are dropped in the first instance to obtain LP relaxation.',
          'A cut is formed by choosing a row in the optimal tableau that corresponds to a non-integer variable.',
          'A constraint picked from the optimal tableau is: 0x1 + x2 + 1/2 S1 – 1/3 S2 = 7/2. With S3 being a slack variable introduced, the cut would be: -1/2 S1 – 2/3 S2 + S3 = -1/2',
          'The optimal solution to LPP satisfies the cut that is introduced on the basis of it.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'The initial tableau of a goal programming problem should never have a variable in the basis which is an under-achievement variable.'
      },
      {
        ques: 'In cutting plane algorithm, each cut which is made involves the introduction of',
        options: [
          'An ‘=’ constraint',
          'An artificial variable',
          'A ‘≤’ constraint',
          'A ‘≥’ constraint'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Both c and d'
      },
      {
        ques: 'Which of the following effects does the addition of a Gomory have? (i) adding a new variable to the tableau; (ii) elimination of non-integer solutions from the feasibility region; (iii) making the previous optimal solution infeasible by eliminating that part of the feasible region which contained that solution.',
        options: [
          '(i) only',
          '(i) and (ii) only',
          '(i) and (iii) only',
          'All the above'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'A goal programming problem cannot have multiple optimal solutions.'
      },
      {
        ques: 'Mark the incorrect statement about Branch and Bound method.',
        options: [
          'It is not a particular method and is used differently in different kinds of problems.',
          'It is generally used in combinatorial problems.',
          'It divides the feasible region into smaller parts by the process of branching.',
          'It can be used for solving any kind of programming problem.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Branch and bound method'
      },
      {
        ques: 'Mark the wrong statement:',
        options: [
          'Goal programming deals with problems with multiple goals.',
          'Goal programming realizes that goals may be under-achieved, over-achieved, or met exactly.',
          'The inequalities or equalities representing goal constraints are flexible.',
          'The initial tableau of a goal programming problem should never have a variable in the basis which is an under-achievement variable.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'A travelling salesman problem can be solved using Branch and Bound method.'
      },
      {
        ques: 'Mark the wrong statement:',
        options: [
          'A travelling salesman problem can be solved using Branch and Bound method.',
          'An assignment problem can be formulated as a 0-1 IPP and solved using Branch and Bound method.',
          'The Branch and Bound method terminates when the upper and lower bounds become identical and the solution is that single value.',
          'The Branch and Bound method can never reveal multiple optimal solutions to a problem, if they exist.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: '0 - 1 '
      },
      {
        ques: 'If two deviational variables, d- or d+ for over-achievement, are introduced in a goal constraint, then which of the following would not hold:',
        options: [
          'Each of them can be positive or zero.',
          'Either d- or d+ is zero.',
          'Both are non-zero.',
          'Both are equal to zero.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'The optimal solution to LPP satisfies the cut that is introduced on the basis of it.'
      },
      {
        ques: 'Mark the wrong statement:',
        options: [
          'A ‘lower’ one-sided goal sets a lower limit that we do not want to fall under.',
          'A two-sided goal sets a specific target missing which from either side is not desired.',
          'In goal programming, an attempt is made to minimize deviations from targets.',
          'In using goal programming, one has to specify clearly the relative importance of the various goals involved by assigning weights to them.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Deviational variables'
      },
      {
        ques: 'Mark the wrong statement:',
        options: [
          'Goal programming assumes that the decision-maker has a linear utility function with respect to the objectives.',
          'Deviations for various goals may be given penalty weights in accordance with the relative significance of the objectives.',
          'The penalty weights measure the marginal rate of substitution between the objectives.',
          'A goal programming problem cannot have multiple optimal solutions.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'None of the above'
      },
      {
        ques: 'Mark the wrong statement:',
        options: [
          'In goal programming, the goals are ranked from the least important (goal 1) to the most important (goal n), with objective function co-efficients Pi.',
          'Existence of (multiple ∆j rows) Net Evaluation containing priority terms indicate a prioritized goal-programming problem.',
          'A lower priority is never sought to be achieved at the expense of higher-priority goal.',
          'The co-efficients, Pi’s are not assigned any actual values.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Assignment'
      },
      {
        ques: 'Which of the following is not an essential condition in a situation for linear programming to be useful?',
        options: [
          'An explicit objective function',
          'Uncertainty',
          'Linearity',
          'Limited resources',
          'Divisibility'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Mixed-integer programming problem'
      },
      {
        ques: 'There are other related mathematical programming techniques that can be used instead of linear programming if the problem has a unique characteristic. If the problem has multiple objectives we should use which of the following methodologies?',
        options: [
          'Goal programming',
          'Orthogonal programming',
          'Integer programming',
          'Multiplex programming',
          'Dynamic programming'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'A single objective function'
      },
      {
        ques: 'There are other related mathematical programming techniques that can be used instead of linear programming if the problem has a unique characteristic. If the problem prevents divisibility of products or resources we should use which of the following methodologies?',
        options: [
          'Goal programming',
          'Primary programming',
          'Integer programming',
          'Unit programming',
          'Dynamic programming'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Goal programming'
      },
      {
        ques: 'Types of integer programming models are _____________.',
        options: ['Total', '0 - 1', 'Mixed', 'All of the above'],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Continuous '
      },
      {
        ques: 'Which of the following is not an integer linear programming problem?',
        options: ['Pure integer', 'Mixed integer', '0-1integer', 'Continuous'],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: '(i) only'
      },
      {
        ques: 'Which of the following is not a requirement for a goal programming problem?',
        options: [
          'Prioritization of goals',
          'A single objective function',
          'Linear constraints',
          'Linear objective function',
          'None of the above'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'The new upper bound is less than or equal to the lower bound or no further branching is possible.'
      },
      {
        ques: 'If we wish to develop a stock portfolio wherein we maximize return and minimize risk, we would have to use',
        options: [
          'Pure integer programming',
          'Goal programming',
          'Zero-one integer programming',
          'Mixed-integer programming',
          'Nonlinear programming'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'A ‘lower’ one-sided goal sets a lower limit that we do not want to fall under.'
      },
      {
        ques: 'Solving an integer programming problem by rounding off answers obtained by solving it as a linear programming problem (using simplex), we find that',
        options: [
          'The values of decision variables obtained by rounding off are always very close to the optimal values.',
          'The value of the objective function for a maximization problem will likely be less than that for the simplex solution.',
          'The value of the objective function for a minimization problem will likely be less than that for the simplex solution.',
          'All constraints are satisfied exactly.',
          'None of the above.'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'It divides the feasible region into smaller parts by the process of branching.'
      },
      {
        ques: 'When using the branch and bound method in integer programming maximization problem, the stopping rule for branching is to continue until',
        options: [
          'The objective function is zero.',
          'The new upper bound exceeds the lower bound.',
          'The new upper bound is less than or equal to the lower bound or no further branching is possible.',
          'The lower bound reaches zero.',
          'None of the above'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Not an IPP.'
      },
      {
        ques: 'A goal programming problem had two goals (with no priorities assigned). Goal number 1 was to achieve a cost of $3,600 and goal number 2 was to have no wasted material. The optimal solution to this problem resulted in a cost of $3,900 and no wasted material. What was the value for the objective function for this goal programming problem?',
        options: ['300', '-300', '3300', '0', 'None of the above'],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'True'
      },
      {
        ques: 'Which of the following is not a type of integer programming problem?',
        options: [
          'Pure integer programming problem',
          'Blending problem',
          'Zero-one programming problem',
          'Mixed-integer programming problem'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption:
          'In goal programming, the goals are ranked from the least important (goal 1) to the most important (goal n), with objective function co-efficients Pi.'
      },
      {
        ques: 'Potential problems with the cutting plane method include',
        options: [
          'It may never converge to a solution.',
          'It can be used only for problems with two dimensions.',
          'It may take a great deal of computer time to find a solution.',
          'It does not produce a good integer solution until the final solution is reached.',
          'Both c and d'
        ],
        title: 'Integer And Goal Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(98)(389).jpg',
        description:
          "Let's test your knowledge about 'Ínteger Programming and Goal Programming' with the help of this quiz. Try answering all the questions and see how good you score. Try sharing this quiz with your friends and compare your scores with each other. All the Best!",
        correctOption: 'Both are non-zero.'
      }
    ]
  },
  {
    index: 51,
    result: [
      {
        ques: 'Which of the following is valid COBOL word?',
        options: ['B12-4', '–GROSS', 'OVER TIME', 'GROSS_SALARY'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'B12-4 '
      },
      {
        ques: 'Which of the following is not a figurative constant?',
        options: ['SPACES', 'QUOTE', 'BLANK', 'LOW-VALUE'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'BLANK'
      },
      {
        ques: 'What is the edited value of the picture clause PIC field     9999+ Numeric value moved to the field -382 and the Edited value is',
        options: ['0382-', '3820-', '-0038', '-0003'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '0382-'
      },
      {
        ques: 'Which division is used to specify the computer used by the program?',
        options: [
          'Identification Division',
          'Environment Division',
          'Data Division',
          'Procedure Division'
        ],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'Environment Division'
      },
      {
        ques: 'Initially A=30, B=60\n IF A = 40             DISPLAY ‘ABC’  ELSE             NEXT SENTENCE END-IF MOVE 90 TO B. DISPLAY B. What is the output of the program?',
        options: ['30', '60', '90', 'Can’t perform the operation'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '60'
      },
      {
        ques: 'In WRITE statement, it is required to mention the record name and not the file name.',
        options: ['True', 'False'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'True'
      },
      {
        ques: 'S9(7) COMP-3 field occupy _________ bytes.  ',
        options: ['4', '6', '8', '1'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '4'
      },
      {
        ques: '   ________ clause used for the purpose allows the said area to be referred to by more than one data name with different sizes and pictures.',
        options: ['JUSTIFIED', 'REDEFINES', 'USAGE', 'SIGN'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'REDEFINES'
      },
      {
        ques: 'A data name gives references to the storage space to the memory where the actual value is stored.  ',
        options: ['True', 'False'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'True'
      },
      {
        ques: '.    If A=10, B=20, C=30,D=0                Then the result of operation ______________                    ADD A B TO C GIVING D              ',
        options: ['60', '50', '20', '10'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '60'
      },
      {
        ques: '    _______ verb causes the termination of the execution of object program.',
        options: ['STOP RUN', 'END', 'GO-BACK'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'STOP RUN'
      },
      {
        ques: 'What is the difference between COMP & COMP-3?',
        options: [
          'Binary format,',
          'packed decimal format',
          'packed decimal format & binary format,'
        ],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: ' packed decimal format & binary format,'
      },
      {
        ques: 'Which of the following is false among the statements?',
        options: [
          '77 level used for elementary level item',
          '88 level used for condition.',
          '77 level can be sub divided themselves',
          '66 level used for RENAMES clause'
        ],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '77 level can be sub divided themselves'
      },
      {
        ques: 'A ____means the specific value which remains unchanged throughout the execution of program. ',
        options: ['LITERAL', 'GLOBAL', 'STOP RUN'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'LITERAL'
      },
      {
        ques: 'The USAGE clause can be specified at any level.',
        options: ['True', 'False'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'True'
      },
      {
        ques: 'Which of the following is not a valid delimiter in COBOL?',
        options: ['A. ,', '.', ';', '–'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: ' –'
      },
      {
        ques: 'In a COBOL program, specify the column position range of Area A                .  ',
        options: ['8-11', '12-80', '0-7'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: '8-11'
      },
      {
        ques: ' A numeric literal can have maximum of 18 digits.',
        options: ['True', 'False'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'True'
      },
      {
        ques: 'The standard left-hand alignment of alphanumeric or alphabetic data can be reversed by using the                    _________CLAUSE.',
        options: ['JUSTIFIED', 'SIGN', 'SYNCHRONIZED', 'USAGE'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'JUSTIFIED '
      },
      {
        ques: 'What is the edited value of the following                      PICTURE      Value        Internal Representation                       $$$$$            009               ______________ ',
        options: ['Bbb$9', '$9', 'Bbb', '$9bbb'],
        title: 'COBOL Programming Mock Test Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(38)(221).jpg',
        description:
          'COBOL is a high-level programming language that was introduced in the 1960s. This language is commonly used in the business, finance, and administrative systems for companies and governments. With the COBOL programming mock test almost here, it is important to keep on your feet. Take up the quiz below and see just how ready you are for it. Keep on revising!',
        correctOption: 'Bbb$9'
      }
    ]
  },
  {
    index: 52,
    result: [
      {
        ques: 'What does the following code do?   def a(b, c, d): pass',
        options: [
          'Defines a list and initializes it',
          'Defines a function, which does nothing',
          'Defines a function, which passes its parameters through',
          'Defines an empty class'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: "The file's contents will be erased"
      },
      {
        ques: 'All keywords in Python are in:',
        options: ['Lower case', 'UPPER CASE', 'Capitalized', 'None'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'None'
      },
      {
        ques: ' What gets printed? x = 4.5 y = 2 print x//y',
        options: ['2.0', '2.25', '9.0', '20.25', '21'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Fp.tell()'
      },
      {
        ques: 'What is the output of the below program? a = [1,2,3,None,(),[],] print len(a)',
        options: ['Syntax error', '4', '5', '6', '7'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Round(45.8)'
      },
      {
        ques: 'What gets printed? x = True y = False z = False if x or y and z: print "yes" else: print "no"',
        options: ['Yes', 'No', 'Fails to compile', 'None of the above'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Error is generated by program'
      },
      {
        ques: 'If PYTHONPATH is set in the environment, which directories are searched for modules? A) PYTHONPATH directory B) current directory C) home directory D) installation dependent default path',
        options: [
          'A only',
          'A and D',
          'A, B, and C',
          'A, B, and D',
          'A, B, C, and D'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: "'3\\'"
      },
      {
        ques: 'In python 2.6 or earlier, the code will print error type 1 if access secure system raises an exception of either AccessError type or SecurityError type try:   accessSecureSystem() except AccessError, SecurityError:   print "error type 1" continueWork()',
        options: ['True', 'False', 'Somewhat true', 'Not clear'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'More than zero'
      },
      {
        ques: 'What gets printed? print r"\\nwoow"',
        options: [
          'New line then the string: woow',
          'The text exactly like this: r"\\nwoow"',
          'The text like exactly like this: \\nwoow',
          'The letter r and then newline then the text: woow',
          'The letter r then the text like this: nwoow'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: ' 2.0'
      },
      {
        ques: 'What gets printed? print "\\x48\\x49!"',
        options: ['\\x48\\x49!', '4849', '48 49!', '4849!', 'HI!'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Yes, like except TypeError, SyntaxError [,…] '
      },
      {
        ques: 'What gets printed? class parent: def __init__(self, param): self.v1 = param class child(parent): def __init__(self, param): self.v2 = param obj = child(11) print "%d %d" % (obj.v1, obj.v2)',
        options: [
          'None None',
          '11 None',
          'Error is generated by program',
          '11 11',
          'None 11'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'HI! '
      },
      {
        ques: ' What sequence of numbers is printed? values = [2, 3, 2, 4] def my_transformation(num): return num ** 2 for i in map(my_transformation, values): print i',
        options: ['2 3 2 4', '4 9 4 16', '1 1 1 2', '1 1.5 1 2', '4 6 4 8'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: '48'
      },
      {
        ques: "What does the code below do? sys.path.append('/root/mods')",
        options: [
          'Changes the location that the python executable is run from',
          'Changes the location where sub-processes are searched for after they are launched',
          'Removes all directories for mods',
          'Adds a new directory to seach for python modules that are imported',
          'Changes the current working directory'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Lambda'
      },
      {
        ques: 'Assuming the filename for the code below is /usr/lib/python/person.py and the program is run as:  python /usr/lib/python/person.py  What gets printed? class Person: def __init__(self): pass def getAge(self): print __name__ p = Person() p.getAge()',
        options: [
          '__main__',
          'Usr.lib.python.person',
          'GetAge',
          'An exception is thrown',
          'Person'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: "Python's syntax is much like PHP"
      },
      {
        ques: 'Which of the following data structures can be used with the "in" operator to check if an item is in the data structure?',
        options: [
          'List',
          'Set',
          'Dictionary',
          'All of the above',
          'None of the above'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: '__add__(), __str__()'
      },
      {
        ques: "What gets printed? class A: def __init__(self, a, b, c): self.x = a + b + c a = A(1,2,3) b = getattr(a, 'x') setattr(a, 'x', b+1) print a.x",
        options: ['1', '2', '6', '7', '3'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: '(math.e ** p) – 1'
      },
      {
        ques: 'Which of the following statements is NOT true about Python?',
        options: [
          "Python's syntax is much like PHP",
          'Python can be used for web development',
          'Python can run on any type of platform',
          'Python can be used to generate dynamic web pages'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Left to Right'
      },
      {
        ques: 'If you have a variable "example", how do you check to see what type of variable you are working with?',
        options: [
          'GetType(example)',
          'Type(example)',
          'type(example)',
          'Example.type'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'None'
      },
      {
        ques: 'If you had a statement like, "f = open("test.txt","w")", what would happen to the file as soon as that statement is executed?',
        options: [
          'Nothing, unless the code following it writes to the file',
          "The file's contents will be erased",
          'Nothing',
          "Python will save the file's contents and append whatever the code following says to write."
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'False'
      },
      {
        ques: 'Given a function that does not return any value, What value is thrown by it by default when executed in a shell.',
        options: ['Int', 'Bool', 'Void', 'None'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: ' no, finally cannot be used with except'
      },
      {
        ques: 'Which of the following will run without errors?',
        options: [
          'Round(45.8)',
          'Round(6352.894,2)',
          'Round()',
          'Round(7463.123,2,1)'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Sir Arthur'
      },
      {
        ques: 'Which of the following results in a SyntaxError?',
        options: [
          '\'"Once upon a time…", she said.\'',
          "'3\\'",
          '"’That\'s okay"\'',
          '"He said, "Yes!""'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption:
          'Adds a new directory to seach for python modules that are imported'
      },
      {
        ques: 'Is the following code valid?   try:     # Do something except:     # Do something finally:     # Do something',
        options: [
          'no, there is no such thing as finally',
          'no, finally cannot be used with except',
          'no, finally must come before except',
          'yes'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: ' type(example)'
      },
      {
        ques: 'How many except statements can a try-except block have?',
        options: ['More than zero', 'More than one', 'One', 'zero'],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Yes'
      },
      {
        ques: 'Can one block of except statements handle multiple exception?',
        options: [
          'Yes, like except TypeError, SyntaxError [,…]',
          'yes, like except [TypeError, SyntaxError',
          'no',
          'None of the mentioned'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'X = 03964'
      },
      {
        ques: 'Which of the following will print True?a = foo(2) b = foo(3) print(a < b)',
        options: [
          'Class foo: def __init__(self, x): self.x = x def __lt__(self, other): if self.x < other.x: return False else: return True',
          'Class foo: def __init__(self, x): self.x = x def __less__(self, other): if self.x > other.x: return False else: return True',
          'Class foo: def __init__(self, x): self.x = x def __lt__(self, other): if self.x < other.x: return True else: return False',
          'Class foo: def __init__(self, x): self.x = x def __less__(self, other): if self.x < other.x: return False else: return True'
        ],
        title: 'Python Programming MCQ Trivia Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(48)(151).jpg',
        description:
          "If you're a Python programmer or want to be one, you should definitely play this Python programming MCQ trivia quiz and evaluate how good you're at the language. It is one of the most demanding and popular programming languages today. Python is a powerful general-purpose and high-level programming language. If someone wants to learn this language easily, they need to take this quiz as it contains every type of question-related to Python. So, guys, what do you need more? Go ahead and try the quiz now.",
        correctOption: 'Defines a function, which does nothing'
      }
    ]
  },
  {
    index: 53,
    result: [
      {
        ques: 'A placeholder begins with the symbol _____.',
        options: ['*', '!', '%', '&'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '; (semicolon)'
      },
      {
        ques: 'The "\\n" character does which of the following operations?',
        options: [
          'Double line spacing',
          'Character deletion',
          'Character backspace',
          'Places cursor on the next line'
        ],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '%'
      },
      {
        ques: '#define PI 3.14159 The above code represents which of the following?',
        options: [
          'Preprocessor directive',
          'Variable',
          'Constant macro',
          'Macro'
        ],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '%'
      },
      {
        ques: 'Which symbol separates variable names?',
        options: [
          '&',
          '. (period)',
          "' (apostrophe)",
          ', (comma)',
          '; (semicolon)'
        ],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'False'
      },
      {
        ques: 'Which symbol terminates a C statement?',
        options: ['. (period)', '; (semicolon)', ': (colon)', ', (comma)'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Emp_Num1'
      },
      {
        ques: 'The ___________ ignores comments and they are not translated into machine language.',
        options: ['Compiler', 'Translator', 'Both', 'None'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Compiler'
      },
      {
        ques: 'Which of the following represent comments in C?',
        options: ['<, >', '[ , ]', '/*, /*', '*/, /*', '/*, */'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Constant macro'
      },
      {
        ques: 'Which arithmetic operator in C returns the integer remainder of the result of dividing its first operand by its second?',
        options: ['%', '/', '\\', '*'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Places cursor on the next line'
      },
      {
        ques: 'Which of the following is a valid name for an identifier in C?',
        options: ['!Here', '4Me_To_You', 'Emp_Num1', 'All of the above points'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '/*, */'
      },
      {
        ques: 'Which of the following operations gets evaluated first?',
        options: [
          '* - multiplication',
          '() - parentheses',
          '/ - division',
          '+ - addition'
        ],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Only one'
      },
      {
        ques: 'If your program gets an error when dividing by zero, this type of error is called?',
        options: ['Syntax', 'Run-time', 'Undetected', 'Logic'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Double'
      },
      {
        ques: 'Your C program was able to compile. However, the result is incorrect. What type of error is this?',
        options: ['Undetected', 'Run-time', 'Syntax', 'Logic'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Function prototypes'
      },
      {
        ques: 'Your C program always fails to compile and has these errors. What type of errors are present?',
        options: ['Syntax', 'Run-time', 'Logic', 'Undetected'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '16'
      },
      {
        ques: 'The section of C code after the preprocessor directives is generally for?',
        options: [
          'User-defined function definitions',
          'Function prototypes',
          'Variables',
          'Datatypes'
        ],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Logic'
      },
      {
        ques: 'Is the syntax for the following C statement correct?: scanf("%d", input);',
        options: ['True', 'False', 'Not clear', "Can't say"],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: ', (comma)'
      },
      {
        ques: 'When a C program asks the user to input data using the keyboard, the program is said to be in __________ mode.',
        options: ['Batch', 'Interactive', 'Preprocessor', 'Saving'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Interactive'
      },
      {
        ques: 'What is the value of result after executing the following statement?result = 6 + 4 * 5 / 2',
        options: ['25', '22', '16', '60'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '{, }'
      },
      {
        ques: 'You can have ____________ main function(s).',
        options: ['Only one', 'Two', 'More than two', "Can't say"],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Run-time'
      },
      {
        ques: 'In general, the body of a function is represented by the following symbols?',
        options: ['[, ]', '{, }', '/, \\', '/*, */'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: '() - parentheses'
      },
      {
        ques: 'A number such as 45.567 needs to be stored in a variable of which data type?',
        options: ['Int', 'Char', 'Double', 'Float'],
        title: 'Introduction To C Programming Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project(89).png',
        description:
          "Play this amazing quiz that covers the questions related to introduction to C programming. Whether you are a hardcore C programmer or just have started learning about it, playing this quiz will absolutely benefit you and you'd be able to learn some new terms related to the C language. C is a general-purpose programming language used to develop software. Dennis M. Ritchie developed it in 1972. Do you think you can easily score well on the test? Take it up and check your result.",
        correctOption: 'Syntax'
      }
    ]
  },
  {
    index: 54,
    result: [
      {
        ques: 'It is an electronic device capable of performing complex computations in a short time.Application ',
        options: ['Application', 'Operating System', 'Software', 'Computer'],
        title: 'Computer Programming 1 Prelim Exam - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-17T165940_865.jpg',
        description:
          'Computer programming is one of the jobs where you don’t need to be in an office but can work from anywhere. A computer program is vital in ensuring that the user gets to meet their need from the computer. Are you preparing for the computer programming preliminary exam? If so, take up the quiz below and get to review some of the things we have learned so far!',
        correctOption: 'Computer'
      },
      {
        ques: 'It is an 8-bit character encoding (code page) used on IBM mainframe operating systems. ',
        options: ['ASCII', 'UNICODE', 'EBCDIC', 'UNIX'],
        title: 'Computer Programming 1 Prelim Exam - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-17T165940_865.jpg',
        description:
          'Computer programming is one of the jobs where you don’t need to be in an office but can work from anywhere. A computer program is vital in ensuring that the user gets to meet their need from the computer. Are you preparing for the computer programming preliminary exam? If so, take up the quiz below and get to review some of the things we have learned so far!',
        correctOption: 'EBCDIC'
      },
      {
        ques: 'A part of computer that stores applications, documents and system operating information',
        options: [
          'Memory',
          'Central Processing Unit',
          'Hard Disk',
          'Data Disk'
        ],
        title: 'Computer Programming 1 Prelim Exam - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-17T165940_865.jpg',
        description:
          'Computer programming is one of the jobs where you don’t need to be in an office but can work from anywhere. A computer program is vital in ensuring that the user gets to meet their need from the computer. Are you preparing for the computer programming preliminary exam? If so, take up the quiz below and get to review some of the things we have learned so far!',
        correctOption: 'Memory '
      },
      {
        ques: 'These are computer programs used to accomplish specific or specialized task for computer users such as creating and editing documents, making graphic presentation, or listening to music.',
        options: [
          'System Software',
          'Application Software',
          'Office Application',
          'Operating System'
        ],
        title: 'Computer Programming 1 Prelim Exam - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-17T165940_865.jpg',
        description:
          'Computer programming is one of the jobs where you don’t need to be in an office but can work from anywhere. A computer program is vital in ensuring that the user gets to meet their need from the computer. Are you preparing for the computer programming preliminary exam? If so, take up the quiz below and get to review some of the things we have learned so far!',
        correctOption: 'Application Software '
      },
      {
        ques: 'It is a methodology that is typically used to develop, maintain and replace information systems for improving the quality of the software design and development process.',
        options: [
          'System Life Cycle',
          'SLDC',
          'Program Life Cycle',
          'Software Development Life Cycle'
        ],
        title: 'Computer Programming 1 Prelim Exam - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-17T165940_865.jpg',
        description:
          'Computer programming is one of the jobs where you don’t need to be in an office but can work from anywhere. A computer program is vital in ensuring that the user gets to meet their need from the computer. Are you preparing for the computer programming preliminary exam? If so, take up the quiz below and get to review some of the things we have learned so far!',
        correctOption: '\nSoftware Development Life Cycle'
      }
    ]
  },
  {
    index: 55,
    result: [
      {
        ques: 'What are not qualifiers in C? ',
        options: ['Static', 'Const', 'Volatile', 'None of the above'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'Bcat'
      },
      {
        ques: 'Which of the following is not the usual practice in declaring variables as volatile?',
        options: [
          'Memory-mapped peripheral registers.',
          'Global variables verified by an interrupt service routine.',
          'Static variables.',
          'Global variables accessed by multiple tasks within a multi-threaded application'
        ],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: '332'
      },
      {
        ques: 'What is the output?     int main()     {        int i = 2*3 /4+4/ 4+3- 2+ 5 / 3;         printf("%d",i);         } ',
        options: ['8', '12', '6', 'None of the above'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'All of the above'
      },
      {
        ques: 'What is output? int  main() {           int x[ ] = { 1, 4, 3, 5, 1, 4 };        int *ptr, y;      ptr = x + 4;      y = ptr - x;        printf("%d",y);   }',
        options: ['3', '5', '4', '1'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'None of the above'
      },
      {
        ques: 'What is the output? int main() {    char *s="Abcat";    printf("%s",s+s[1]-s[3]);      }  ',
        options: ['BcatA', 'Cat', 'Bcat', 'Abca'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'Static variables.'
      },
      {
        ques: 'The “const” feature can be applied to?',
        options: [
          'An array argument',
          'An identifier',
          'An array',
          'All of the above'
        ],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: '40,1'
      },
      {
        ques: 'What is the correct value to return to the operating system upon the successful?',
        options: ['Null', '1', '-1', 'None of the above'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'Address of y'
      },
      {
        ques: 'What is the output ?void f(char *);int main(int argc, char** argv){f("123");}void f(char a[]){if(a[1] ==\'\\0\') return;f(a+1);f(a+1);printf("%c", a[1]);} ',
        options: ['321', '333', '332', '321'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'None of the above '
      },
      {
        ques: 'What is the output? int main(void)    {          static char food[] ="Yummy";       char *ptr;        ptr = food+strlen(food);        printf("%p",ptr);        return 0; }',
        options: ['Y', 'Address of y', 'Unknown value', 'Run time error'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: '4'
      },
      {
        ques: 'Int main(void){    int x = 2, y, z;    x *= 3 + 2;    x *= y = z = 4;    printf("%d \\n", x);    x = y == z;    printf("%d \\n", x);    return 0;}',
        options: ['40,1', '40,40', '40,4', 'None of the above'],
        title: 'Quiz: C Programming MCQ Exam! - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202021-02-05T201445_248.jpg',
        description:
          'Are you ready for this C Programming quiz? This quiz answers such questions as what the const feature can be applied to, the correct value to return to the operating system, what are not qualifiers in C, and the usual practice in declaring variables as volatile. Get ready to be tested on complex computer language. This quiz will test you about the C programming language. All the best.',
        correctOption: 'Const'
      }
    ]
  },
  {
    index: 56,
    result: [
      {
        ques: 'CSV refers to tabular data saved as plain text where data values are separated by commas.',
        options: ['True', 'False'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'True'
      },
      {
        ques: 'Read_csv() method automatically takes the last row of the CSV file.',
        options: ['True', 'False'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'False'
      },
      {
        ques: 'Full form of csv is common separated value.',
        options: ['True', 'False'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'False'
      },
      {
        ques: 'DataFrame in pandas is:',
        options: [
          '1 dimensional array',
          '2 dimensional array',
          '3 dimensional array',
          'None of these'
        ],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: '2 dimensional array'
      },
      {
        ques: 'Series in pandas is:',
        options: [
          '1 dimensional array',
          '2 dimensional array',
          '3 dimensional array',
          'None of these'
        ],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: '1 dimensional array'
      },
      {
        ques: 'We can analyze the data in pandas with:',
        options: ['Series', 'DataFrame', 'Both of these', 'None of these'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'Both of these'
      },
      {
        ques: "import pandas as pd s = pd.Series([1,2,3,4,5],index = ['a','b','c','d','e']) print s['a']",
        options: ['1', '2', '3', '4'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: '1'
      },
      {
        ques: 'Which of the following thing can be data in Pandas?',
        options: [
          'A python dict',
          ' an ndarray',
          'A scalar value',
          'All of these'
        ],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'All of these'
      },
      {
        ques: 'Pandas is an open-source _______ Library?',
        options: ['Ruby', 'Javascript', 'Java', 'Python'],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'Python'
      },
      {
        ques: 'Which of the following is correct Features of DataFrame?',
        options: [
          ' Potentially columns are of different types',
          'Can Perform Arithmetic operations on rows and columns',
          'Labeled axes (rows and columns)',
          'All of the above'
        ],
        title: 'Programming Quiz: Pandas Software Library - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(90)(183).jpg',
        description:
          "If you are into computer programming, we assume you are familiar with Pandas software library. Here are some questions related to its operational use, syntax, structure, etc. So, without further ado, let's get started.",
        correctOption: 'All of the above'
      }
    ]
  },
  {
    index: 57,
    result: [
      {
        ques: 'C language has been developed by ?',
        options: [
          'Ken Thompson',
          'Dennis Ritchie',
          'Peter Norton',
          'Martin Richards'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: '1 character'
      },
      {
        ques: 'C can be used on ?',
        options: [
          'Only MS-DOS',
          'Only Linux',
          'Only window',
          'All of the above'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: '32767'
      },
      {
        ques: 'C programs are convrted into the machine language with the help of ?',
        options: [
          'An editor',
          'Compiler',
          'An operating system',
          'None of the above'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'Count+5=res;'
      },
      {
        ques: 'The real constant in C can be expressed which of the following forms ?',
        options: [
          'Fractional form only',
          'Exponetial form only',
          'ASCII form only',
          'Both Fractional and Exponetial'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'ASCII value of Z'
      },
      {
        ques: 'A character variable can at a time score ?',
        options: [
          '1 character',
          '8 characters',
          '254 characters',
          'None of the above'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'Both (2) and (3)'
      },
      {
        ques: "The statement char ch='z' would store in ch",
        options: [
          'The character Z',
          'ASCII value of Z',
          'Z along with the single inverted commas',
          'Both (1) and (2)'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'All of the above'
      },
      {
        ques: 'Which of the following is not a character constant ?',
        options: [
          "'Thank You'",
          "'quest videos- IT Learning at its best'",
          "'23.56e-03'",
          'All of the above'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'Dennis Ritchie'
      },
      {
        ques: 'The maximun value that an integer constant can have is ?',
        options: ['-32767', '32767', '1.7014e+38', '-1.7014e+38'],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'All of the above'
      },
      {
        ques: 'A C variable cannot start with ?',
        options: [
          'An alphabet',
          'A number',
          'A special symbol other than underscore',
          'Both (2) and (3)'
        ],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'Compiler'
      },
      {
        ques: 'Which of the following statements is wrong ?',
        options: ['INT=123;', "Val='A' * 'B';", "Is=20 * 'T'", 'Count+5=res;'],
        title: 'MCQ On C Programming Language - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20-%202020-06-19T150032_478.jpg',
        description:
          'Online MCQ Quiz on C Programming Language No. Of Questions:- 10 Time:- 10 Minutes Full Mark:- 100 Pass Mark:- 70 This Quiz if for those user who wants to test their command over the programming language. for more MCQ Questions and Online MCQ Quiz please visit https://www. Allcompiler. Com',
        correctOption: 'Both Fractional and Exponetial'
      }
    ]
  },
  {
    index: 58,
    result: [
      {
        ques: 'HTML stands for HyperText __________ Language.',
        options: ['Mark-up', 'Marker', 'Markup', 'Marking'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Title Bar'
      },
      {
        ques: 'A markup language is a set of interpretation to text that describes how it is to be structured, laid out or formatted.',
        options: ['True', 'False'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Attribute'
      },
      {
        ques: 'Texts that are enclosed on a <title> tag are all displayed in which part of the browser?',
        options: ['Title Bar', 'Tab', 'Menu Bar', 'Tool Bar'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Dl'
      },
      {
        ques: '__________ is software that displays web pages and allows you to interact with text, images, music, video and other resources found on a website on the World Wide Web.',
        options: [
          'Device Driver',
          'Web Browser',
          'Operating System',
          'Computer Aided Instruction'
        ],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Li'
      },
      {
        ques: 'This is where you could create an HTML document.',
        options: ['VBA', 'VisiCalc', 'MS Word', 'Notepad'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Text'
      },
      {
        ques: 'These are the basic units or building blocks of an HTML file.',
        options: ['Tag', 'HTTP', 'Value', 'Attribute'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'True'
      },
      {
        ques: 'Tags that can stand alone are called…',
        options: ['Empty Tag', 'Markup Tag', 'Container Tag', 'Standalone Tag'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'H1'
      },
      {
        ques: 'Tags that cannot stand alone are called…',
        options: ['Empty Tag', 'Markup Tag', 'Container Tag', 'Standalone Tag'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'H6'
      },
      {
        ques: '__________ are used to provide additional information about the tag and go in name-value pairs separated by an equal sign =',
        options: ['HTTP', 'Value', 'Tag', 'Attribute'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'I'
      },
      {
        ques: '__________ are assigned property to an attribute.',
        options: ['HTTP', 'Value', 'Tag', 'Attribute'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'B'
      },
      {
        ques: 'HTML files are divided into 2 parts: the head and the __________.',
        options: ['Attribute', 'Body', 'Title', 'HTML'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Ol'
      },
      {
        ques: 'Everything that appears on your webpage may it be texts, images, videos and others should then be put on the body which is enclosed in…',
        options: ['Head', 'Title', 'Body', 'Html'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Value'
      },
      {
        ques: '__________ tag inside the head tag is used to denote the title of the webpage and display the title of the webpage on the title bar.',
        options: ['Head', 'Title', 'Body', 'Html'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Empty Tag'
      },
      {
        ques: 'This attribute can be used under the declaration of the <body> tag if you want to add a background image on the web page.',
        options: ['Background', 'Bgcolor', 'Text', 'Link'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'P'
      },
      {
        ques: 'This attribute can be used under the declaration of the <body> tag if you want to customize the background color of your webpage.',
        options: ['Background', 'Bgcolor', 'Text', 'Link'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Body'
      },
      {
        ques: 'This attribute can be used under the declaration of the <body> tag if you want to change the color of all the hyperlinks in the webpage',
        options: ['Background', 'Bgcolor', 'Text', 'Link'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Link'
      },
      {
        ques: 'This attribute can be used under the declaration of the <body> tag if you want to change the color of the hyperlinks in the webpage.',
        options: ['Background', 'Bgcolor', 'Text', 'Link'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Background'
      },
      {
        ques: 'This attribute indicates the color of the visited hyperlinks in the web page.',
        options: ['Link', 'Alink', 'Vlink', 'Xlink'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Align'
      },
      {
        ques: 'This attribute indicates the color of the active hyperlinks (when clicked) in the web page.',
        options: ['Link', 'Alink', 'Vlink', 'Xlink'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Start'
      },
      {
        ques: 'Headings contains ____ levels.',
        options: ['2', '4', '6', '8'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Vlink'
      },
      {
        ques: 'Which among the heading levels got the smallest size?',
        options: ['H1', 'H3', 'H5', 'H6'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Empty Tag'
      },
      {
        ques: 'Which among the heading levels got the biggest size?',
        options: ['H1', 'H3', 'H5', 'H6'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Ul'
      },
      {
        ques: 'This attribute indicates the alignment of the text.',
        options: ['Align', 'Left', 'Center', 'Right'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Body'
      },
      {
        ques: 'This tag is used to create paragraphs.',
        options: ['Hr', 'P', 'Ol', 'Br'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Bgcolor'
      },
      {
        ques: 'You can place quotes in indented form and shrink them to be apart from the main paragraph by using the tag <blockquote>',
        options: ['True', 'False'],
        title: 'Computer Programming Trivia Questions! Quiz - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/1826446/1628840150.jpg',
        description:
          'Computer programmers are given the sole duty of coming up with programs that ensure a computer can carry out specific tasks smoothly and accurately. Are you looking for a computer programming trivia that will help you prepare for the upcoming finals? If so you are in luck as this quiz will do just that for you. All the best!',
        correctOption: 'Markup'
      }
    ]
  },
  {
    index: 59,
    result: [
      {
        ques: 'How many procedures can be run in the Program section of Easytrieve? ',
        options: [
          'Two procedures ',
          'Three procedures ',
          'Three procedures ',
          'Six procedures '
        ],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Heading '
      },
      {
        ques: 'When was the Easytrieve Plus made available for public use? ',
        options: ['2004', '2012', '2009', '2008'],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Line '
      },
      {
        ques: 'Which of these statements should be added to enter data horizontally? ',
        options: ['Line ', 'Sequence ', 'Control ', 'Report '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Sequence '
      },
      {
        ques: 'Which of these is the first statement for report declaration? ',
        options: ['Report ', 'Program ', 'Sum ', 'Line '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Report '
      },
      {
        ques: 'Which of these statements should be added for the creation of headings? ',
        options: ['Title ', 'Sequence ', 'Custom ', 'Heading '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'File '
      },
      {
        ques: 'What statement causes all quantitative fields to be totaled? ',
        options: ['Control ', 'Epert ', 'Sum ', 'Miller '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Title '
      },
      {
        ques: 'Which of these is usually not included in the total of the DEPT field?',
        options: ['GROSS', 'DEDUCTION ', 'INTEREST', 'NET-PAY'],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Control '
      },
      {
        ques: 'Which of these causes the printing of customized column heading? ',
        options: ['Line ', 'Sum ', 'Title ', 'Heading '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'Two procedures '
      },
      {
        ques: 'Which of these statements will deductions to be sorted in a specified key? ',
        options: ['Line ', 'Sequence ', 'Control ', 'Control '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: 'INTEREST'
      },
      {
        ques: 'Which of these statements can be added only in the library section? ',
        options: ['Control ', 'File ', 'Define ', 'Sum '],
        title: 'Easytrieve Programming Language Quiz! Trivia - ProProfs Quiz',
        quizImage:
          'https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(61)(28).jpg',
        questionImage:
          'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
        description:
          'Easytrieve is a versatile programming language used by corporate organizations to generate reports of daily business activities. Each version of Easytrieve can be used for a specific role in report generation. Due to its light architecture, it supports several operating systems. How proficient are you with Easytrieve? Find out in this quiz.',
        correctOption: '2012'
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
