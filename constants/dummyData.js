import images from './images';

export const profileData = {
  name: 'root',
  point: 200,
};

const zeroToOne = {
  id: 1,
  bookName: 'Zero To One',
  booksCover: images.zeroToOne,
  rating: 4.5,
  language: 'Eng',
  pageNo: 224,
  author: 'Blake Masters and Peter Thiel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.',
};

const ThePsychologyOfMoney = {
  id: 1,
  bookName: 'The Psychology of Money ',
  booksCover: images.phycologyOfMoney,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Morgan Housel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
};
const companyOfONe = {
  id: 1,
  bookName: 'Company of One',
  booksCover: images.companyOfOne,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Morgan Housel',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
};
const HowInnovationWorks = {
  id: 1,
  bookName: 'How Innovation Works',
  booksCover: images.matt_ridley,
  rating: 4.5,
  language: 'Eng',
  pageNo: 209,
  author: 'Matt Ridley',
  genre: ['Business', 'politics'],
  readied: '12k',
  description:
    'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do',
};

export const myBooksData = [
  {
    ...zeroToOne,
    completion: '75%',
    lastRead: '3d 5h',
  },
  {
    ...ThePsychologyOfMoney,
    completion: '25%',
    lastRead: '7d 5h',
  },
  {
    ...companyOfONe,
    completion: '20%',
    lastRead: '1d 5h',
  },
  {
    ...HowInnovationWorks,
    completion: '0%',
    lastRead: '0',
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
