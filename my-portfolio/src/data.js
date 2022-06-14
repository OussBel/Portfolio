import HotelImg from './assets/DreamPlace-Hotel.png'
import Restaurant from './assets/Restaurant.png'

const projects = [
  {
    id: 1,
    img: HotelImg,
    desc: 'Site Web hôtelier multi-pages ',
    languages: 'Languages utilisés :',
    text: 'Html, Sass & JavaScript',
    demolink: 'https://statuesque-starship-1a44f4.netlify.app/',
    linkText: 'Visitez le site',
    codeLink: 'https://github.com/OussBel/Front-end---Hotel-website',
    codeText: 'Voir le code',
  },
  {
    id: 2,
    img: Restaurant,
    desc: 'Site Restaurant',
    languages: 'Languages utilisés :',
    text: 'Html, Sass & JavaScript',
    demolink: 'https://vocal-dieffenbachia-288373.netlify.app/',
    codeLink: 'https://github.com/OussBel/Front-end-restaurant-website',
  },
]

const skillSet = [
  {
    id: '1',
    language: 'html',
  },
  {
    id: '2',
    language: 'Css',
  },
  {
    id: '3',
    language: 'Sass',
  },
  {
    id: '4',
    language: 'Tailwindcss',
    level: 'good',
  },

  {
    id: '5',
    language: 'JavaScript',
  },
  {
    id: '6',
    language: 'React.js',
  },
  {
    id: '7',
    language: 'Redux',
  },
  {
    id: '8',
    language: 'Next.js',
    level: 'good',
  },
  {
    id: '9',
    language: 'Node.js',
    level: 'good',
  },
  {
    id: '10',
    language: 'Express.js',
    level: 'good',
  },
  {
    id: '11',
    language: 'Jest & Enzyme',
    level: 'good',
  },
  {
    id: '12',
    language: 'Git & Github',
    level: 'good',
  },
]

export default projects
export { skillSet }
