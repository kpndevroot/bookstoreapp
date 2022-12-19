import images from './images';

export const profileData = {
  name: 'Vishnu V',
  point: 200,
};

const zeroToOne = {
  id: 10,
  bookName: 'Zero To One',
  booksCover: images.zeroToOne,
  bookImage: images.zeroToOneCover,
  rating: 4.5,
  language: 'Eng',
  pageNo: 224,
  author: 'Blake Masters and Peter Thiel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.',
  backgroundColor: 'rgba(253, 255, 63, 0.91)',
  navTintColor: '#000',
};

const ThePsychologyOfMoney = {
  id: 11,
  bookName: 'The Psychology of Money ',
  booksCover: images.phycologyOfMoney,
  bookImage: images.phychologyofmoneyCover,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Morgan Housel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
  backgroundColor: 'rgba(71, 133, 77, 0.51)',
  navTintColor: '#000',
};
const companyOfONe = {
  id: 12,
  bookName: 'Company of One',
  booksCover: images.companyOfOne,
  bookImage: images.companyofoneCover,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Morgan Housel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
  navTintColor: '#000',
  backgroundColor: 'rgba(247, 237, 237, 0.34)',
};
const HowInnovationWorks = {
  id: 13,
  bookName: 'How Innovation Works',
  booksCover: images.matt_ridley,
  bookImage: images.matt_ridleyCover,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Matt Ridley',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
  bgColor: 'rgba(246, 240, 84, 0.26)',
  navTintColor: '#000',
};

export const myBooksData = [
  {
    ...zeroToOne,
    completion: '75%',
    lastRead: '3d 5h',
    bookMark: true,
  },
  {
    ...ThePsychologyOfMoney,
    completion: '25%',
    lastRead: '7d 5h',
    bookMark: false,
  },
  {
    ...companyOfONe,
    completion: '20%',
    lastRead: '1d 5h',
    bookMark: false,
  },
  {
    ...HowInnovationWorks,
    completion: '0%',
    lastRead: '0',
    bookMark: true,
  },
];

export const categoriesData = [
  {
    id: 1,
    categoryName: 'Best Seller',
    books: [zeroToOne, ThePsychologyOfMoney, companyOfONe],
  },
  {id: 2, categoryName: 'The Latest', books: [companyOfONe]},
  {id: 3, categoryName: 'Coming Soon', books: [HowInnovationWorks]},
];
