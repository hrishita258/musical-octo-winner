//demo quiz
const { postgres } = require('../db')

const quiz = [
  {
    category: 'Demo Quiz 1',
    questions: [
      {
        question:
          'Regular, recurring, and repeating \nforms or designs that are commonly \nobserved in natural objects',
        options: ['Sequence', 'Patterns', 'Variables', 'Fibonacci Sequence'],
        correct: 1
      },
      {
        question:
          'Ordered list of numbers called \nterms; it may have repeated values; the \narrangement of these terms is set by a definite rule',
        options: ['Variables', 'Fibonacci Sequence ', 'Patterns', 'Sequence'],
        correct: 3
      },
      {
        question:
          'Placeholder; quantity that may \nchange within the context mathematically \nor in experiments.',
        options: ['Fibonacci Sequence', 'Variables', 'Sequence', 'Patterns'],
        correct: 1
      },
      {
        question:
          'Performed by adding the two \npreceding numbers starting from 0 and 1',
        options: ['Patterns', 'Fibonacci Sequence', 'Sequence', 'Variables'],
        correct: 1
      },
      {
        question: 'Well defined collection of \ndistinct objects',
        options: ['Subset', 'Set', 'Proper Subset', 'Proper Set'],
        correct: 1
      },
      {
        question: 'Basic relation of the set is by \nof subset',
        options: ['Subset', 'Set', 'Proper Subset', 'Proper Set'],
        correct: 0
      },
      {
        question: 'Atleast one is a Subset',
        options: ['Subset', 'Set', 'Proper Subset', 'Proper Set'],
        correct: 2
      },
      {
        question: 'All things of the given property \nis true',
        options: [
          'Universal Statement',
          'Conditional Statement',
          'Existential Statement',
          'Statement'
        ],
        correct: 0
      },
      {
        question: 'If one thing is true, then the \nother also has to be true',
        options: [
          'Conditional Statement',
          'Existential Statement',
          'Universal Statement',
          'Statement'
        ],
        correct: 0
      },
      {
        question: 'There is at least one thing which \nthe property is true',
        options: [
          'Existential Statement',
          'Universal Statement',
          'Conditional Statement',
          'Statement'
        ],
        correct: 0
      },
      {
        question: '"For all" and "If-Then"',
        options: [
          'Existential Universal Statement',
          'Universal Conditional Statement',
          'Universal Existential Statement',
          'Existential Statement'
        ],
        correct: 1
      },
      {
        question:
          'First part asserts that a certain \nobject exist and is universal, \nbecause the second part says that the first part satisfies a property',
        options: [
          'Universal Existential Statement',
          'Existential Universal Statement',
          'Universal Conditional Statement',
          'Existential Statement'
        ],
        correct: 1
      },
      {
        question:
          'The first part tells that a certain \nproperty is true for all objects',
        options: [
          'Universal Conditional Statement',
          'Universal Existential Statement',
          'Existential Universal Statement',
          'Existential Statement'
        ],
        correct: 1
      },
      {
        question:
          'From specific to general; process \nof reaching a general conclusion by \nexamining specific examples.',
        options: [
          'Deductive Reasoning',
          'Inductive Reasoning',
          'Conditional Statement',
          'Existential Statement'
        ],
        correct: 1
      },
      {
        question:
          'From general to specific; general \nassumptions,procedure and principles',
        options: [
          'Deductive Reasoning',
          'Inductive Reasoning',
          'Conditional',
          'Existential'
        ],
        correct: 0
      },
      {
        question:
          'It is defined as the study of \npatterns, numbers and arithmetic operations.',
        options: [
          'Discrete Mathematics',
          'Mathematics',
          'Geometry',
          'Trigonometry'
        ],
        correct: 1
      },
      {
        question:
          'What is the 20th term of the \nnumber sequence; \n8; 16; 24; 32; …?',
        options: ['140', '150', '160', '170'],
        correct: 2
      },
      {
        question:
          'What is the 20th term of the \nsequence of number \n2; 5; 10; 17; 26; 37; …?',
        options: ['301', '401', '501', '601'],
        correct: 1
      },
      {
        question:
          'It is an ordered list of \nnumbers, called terms that may have repeated values.',
        options: ['Pattern', 'Sequence', 'Set', 'Reccurence Design'],
        correct: 1
      },
      {
        question: 'It is a regular, repeated, \nor recurring forms or designs.',
        options: ['Shape', 'Design', 'Forms', 'Pattern'],
        correct: 3
      },
      {
        question:
          'Considered to be the most \ntalented Western Mathematician of the Middle Ages',
        options: [
          'Albert Einstein',
          'Pythagoras',
          'Leonardo Fibonacci',
          'Plato'
        ],
        correct: 2
      },
      {
        question:
          'The Fibonacci numbers also \nhave a geometric manifestation in the form of:',
        options: ['Pattern', 'Sequence', 'Common Ratio', 'Golden Ratio'],
        correct: 3
      },
      {
        question:
          'Which number is next in the \nFibonacci sequence of numbers: 1, 1, 2, 3, 5, 8, 13, 21..',
        options: ['55', '59', '34', '44'],
        correct: 2
      },
      {
        question:
          'Which of the following is NOT \nan example of Fibonacci numbers found in nature?',
        options: [
          'Pinecone Spiral',
          'Number of petails in daisy',
          'A mountain range',
          'Spiral on the sunflower'
        ],
        correct: 2
      },
      {
        question:
          'What is one way to decide if \ntwo numbers follow a Fibonacci sequence?',
        options: [
          'If their sum is as the same as their difference',
          'If their ratio is approximately the golden ratio',
          'If each number is an odd number',
          'If the product is a prime number'
        ],
        correct: 1
      },
      {
        question: 'Correct arrangement of \nmathematical symbols',
        options: [
          'Simpler expression',
          'Expression',
          'Mathematical expression',
          'Simple Mathematical'
        ],
        correct: 2
      },
      {
        question: 'Which is not a Characteristics \nof mathematics?',
        options: ['Precise', 'Range', 'Concise', 'Powerful'],
        correct: 1
      },
      {
        question: 'The product of ten and y',
        options: ['10 + y', '10y', 'y|10', 'y-10'],
        correct: 1
      },
      {
        question: 'Twenty decreased by a number t',
        options: ['t - 20', '20 - t', '20 + t', '-(20 - t)'],
        correct: 1
      },
      {
        question: 'Four times the sum of twelve and y',
        options: ['12y + 4', '4(12 + y)', '(12 + y) - 4', '4(12 - y)'],
        correct: 1
      }
    ]
  },
  {
    category: 'Demo Quiz 2',
    questions: [
      {
        question: 'What is the scientific name of a butterfly?',
        options: ['Apis', 'Coleoptera', 'Formicidae', 'Rhopalocera'],
        correct: 3
      },
      {
        question: 'How hot is the surface of the sun?',
        options: ['1,233 K', '5,778 K', '12,130 K', '101,300 K'],
        correct: 1
      },
      {
        question: 'Who are the actors in The Internship?',
        options: [
          'Ben Stiller, Jonah Hill',
          'Courteney Cox, Matt LeBlanc',
          'Kaley Cuoco, Jim Parsons',
          'Vince Vaughn, Owen Wilson'
        ],
        correct: 3
      },
      {
        question: 'What is the capital of Spain?',
        options: ['Berlin', 'Buenos Aires', 'Madrid', 'San Juan'],
        correct: 2
      },
      {
        question:
          'What are the school colors of the University of Texas at Austin?',
        options: [
          'Black, Red',
          'Blue, Orange',
          'White, Burnt Orange',
          'White, Old gold, Gold'
        ],
        correct: 2
      },
      {
        question: 'What is 70 degrees Fahrenheit in Celsius?',
        options: ['18.8889', '20', '21.1111', '158'],
        correct: 2
      },
      {
        question: 'When was Mahatma Gandhi born?',
        options: [
          'October 2, 1869',
          'December 15, 1872',
          'July 18, 1918',
          'January 15, 1929'
        ],
        correct: 0
      },
      {
        question: 'How far is the moon from Earth?',
        options: [
          '7,918 miles (12,742 km)',
          '86,881 miles (139,822 km)',
          '238,400 miles (384,400 km)',
          '35,980,000 miles (57,910,000 km)'
        ],
        correct: 2
      },
      {
        question: 'What is 65 times 52?',
        options: ['117', '3120', '3380', '3520'],
        correct: 2
      },
      {
        question: 'How tall is Mount Everest?',
        options: [
          '6,683 ft (2,037 m)',
          '7,918 ft (2,413 m)',
          '19,341 ft (5,895 m)',
          '29,029 ft (8,847 m)'
        ],
        correct: 3
      },
      {
        question: 'When did The Avengers come out?',
        options: ['May 2, 2008', 'May 4, 2012', 'May 3, 2013', 'April 4, 2014'],
        correct: 1
      },
      {
        question: 'What is 48,879 in hexidecimal?',
        options: ['0x18C1', '0xBEEF', '0xDEAD', '0x12D591'],
        correct: 1
      }
    ]
  }
]

const main = async () => {
  const chunkSize = 10
  const users = await postgres.user.findMany({
    where: {
      role: 'faculty'
    },
    select: {
      id: true,
      collegeId: true,
      specializationId: true
    }
  })
  console.log(users)
  // for (let i = 0; i < quiz.length; i += chunkSize) {
  //   const chunk = quiz.slice(i, i + chunkSize)
  //   Promise.all([
  //     chunk.map(async q => {
  //       let quiz = await postgres.quiz.create({
  //         data: {
  //           createdById: '',
  //           name: '',
  //           collegeId: '',
  //           specializationId: '',
  //           duration: '',
  //           description: '',
  //           score: ''
  //         }
  //       })
  //     })
  //   ])
  // }
  // const result = await prisma.college.createMany({
  //   data: [
  //     {
  //       name: 'Techno india NJR',
  //       directorName: 'R.S Vyas',
  //       email: 'admin@technoindianjr.org',
  //       collegeWebsite: 'https://www.technoindianjr.org/',
  //       description:
  //         '“Education educates a man, but good education creates a man” is the belief of NJR Foundation which established Techno India NJR Institute of Technology in the year 2008. NJR Foundation, a registered trust, was established in the year 2003 in memory of Shri Navdeep Ranawat and Shri Jitendra Ranawat by Mrs. Meera Ranawat and Mr. Raj Shekhar Vyas, an alumnus of BITS, Pilani having more than 25 years of experience with Tata group and as Techno entrepreneur. Nine more highly qualified trustees with vast experience in the field of law, administration, finance research papers writing and business were inducted subsequently. Techno NJR was set up with a vision of providing international level engineering education to students of Udaipur so that they do not have to travel to Banglore, Pune, Jaipur for good engineering education.',
  //       logoSrc:
  //         'https://i0.wp.com/www.technonjr.org/wp-content/uploads/2022/03/Untitled-1-2.png?fit=420%2C88&ssl=1'
  //     },
  //     {
  //       name: 'Sharda University',
  //       directorName: 'Pradeep Kumar Gupta',
  //       email: 'admission.patna@sharda.ac.in',
  //       collegeWebsite: 'https://www.sharda.ac.in/',
  //       description:
  //         'SHARDA UNIVERSITY IS A LEADING EDUCATIONAL INSTITUTION BASED OUT OF GREATER NOIDA, DELHI NCR. A VENTURE OF THE RENOWNED SHARDA GROUP OF INSTITUTIONS (SGI), THE UNIVERSITY HAS ESTABLISHED ITSELF AS A HIGH QUALITY EDUCATION PROVIDER WITH PRIME FOCUS ON HOLISTIC LEARNING AND IMBIBING COMPETITIVE ABILITIES IN STUDENTS.',
  //       logoSrc:
  //         'https://www.edufever.com/wp-content/uploads/2022/05/Sharda-University-Greater-Noida-Admission-Procedure.jpeg'
  //     },
  //     {
  //       name: 'Kaziranga University',
  //       directorName: 'Dr. Sajal Saha',
  //       email: 'sajalsaha@kazirangauniversity.in',
  //       collegeWebsite: 'https://www.kazirangauniversity.in',
  //       description:
  //         'Kaziranga University was conceptualized with a vision towards holistic and world-class education. The entire idea is based on the premise that every human being finds identity, meaning and purpose of life through an enduring bonding with the community, with nature and with humanitarian values of compassion and peace. KU believes in and endorses the ideology of conjoining serenity of the natural environment with the best international standards of educational facilities',
  //       logoSrc: 'https://www.kzu.ac.in/storage/asset/front/logo.png'
  //     },
  //     {
  //       name: 'GD Goenka University',
  //       directorName: 'GDG Director',
  //       email: 'gdgdirector@gmail.com',
  //       collegeWebsite: 'http://www.gdgoenkauniversity.com',
  //       description: 'Awesome university in India.',
  //       logoSrc:
  //         'https://uploads.sarvgyan.com/2015/08/GD-Goenka-university-Gurgaon.jpg'
  //     }
  //   ]
  // })
  // console.log(result)
  // console.log(
  //   await prisma.user.create({
  //     data: {
  //       email: 'himanshu@hh.com',
  //       gender: 'Male',
  //       role: 'spoc',
  //       name: 'Hrishita',
  //       isAdmin: true,
  //       password: await hash('HH251911@', 10)
  //     }
  //   })
  // )
  // console.log(req.user)

  // const spec = await prisma.specialization.findMany({
  //   select: {
  //     id: true
  //   }
  // })
  // const specId = spec.map(item => item.id)
  // const result = await prisma.user.createMany({
  //   data: students.map(user => {
  //     return {
  //       email: user.email,
  //       password: '$2a$10$4PnzYJu8ZUNSZ0jLlojPkOz8yBGwW36BU42rhXjaWCCKiaM04nd4a',
  //       name: user.name,
  //       semester: user.role_name === 'student' ? 7 : null,
  //       collegeId: '91d4727d-37c1-4e29-9e33-03b3f288fd55',
  //       specializationId: specId[Math.floor(Math.random() * 10)],
  //       role: user.role_name === 'clg-admin' ? 'spoc' : user.role_name,
  //       gender: user.user_id % 2 === 0 ? 'Male' : 'Female',
  //       enrollmentYear: user.role_name === 'student' ? 2019 : null
  //     }
  //   })
  // })
}

main()
