import { Horse } from "../models/caballo.model";


export const HORSES_DATA: Horse[] = [
  {
    id: 1,
    name: 'Fantastico de Villa Molina',
    servicePrice: 120000,
    horsePrice: 3000000,
    description: 'Caballo rápido y fuerte, ideal para competencias de velocidad.',
    image: '/images/fantasticooficial.jpg'
  },
  {
    id:2,
    name: 'Vicente de la Alhambra',
    servicePrice: 150000,
    horsePrice: 3500000,
    description: 'Caballo de gran tamaño y resistencia, perfecto para montar largas distancias.',
    image: '/images/fantasticooficial.jpg'
  },
  {
    id:3,
    name: 'Protegido de la Peña',
    servicePrice: 100000,
    horsePrice: 2500000,
    description: 'Caballo dócil y elegante, excelente para principiantes.',
    image: '/images/fantasticooficial.jpg'
  },
  {
    id:4,
    name: 'Rey de los Andes',
    servicePrice: 130000,
    horsePrice: 2800000,
    description: 'Caballo joven y ágil, ideal para saltos y acrobacias.',
    image: '/images/fantasticooficial.jpg'
  }
];