import { CoffeeItem } from '../CoffeeItem'

import { CoffeeItems, CoffeeListContainer } from './styles'

import { CoffeeListImages } from '../../../../assets'

const coffees = [
  {
    source: CoffeeListImages.EspressoSVG,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.AmericanoSVG,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.CreamyEspressoSVG,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.IcedCoffeeSVG,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', ' Gelado '],
    price: '9,90',
  },
  {
    source: CoffeeListImages.CafeAuLaitSVG,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.LatteSVG,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.CappuccinoSVG,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.MacchiatoSVG,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.MochaccinoSVG,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.HotChocolateSVG,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com Leite'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.CubanSVG,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.HawaiiSVG,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.ArabicSVG,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['Especial'],
    price: '9,90',
  },
  {
    source: CoffeeListImages.IrishSVG,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: '9,90',
  },
]

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <CoffeeItems>
        {coffees.map((coffee) => (
          <CoffeeItem
            key={coffee.name}
            source={coffee.source}
            name={coffee.name}
            description={coffee.description}
            tags={coffee.tags}
            price={coffee.price}
          />
        ))}
      </CoffeeItems>
    </CoffeeListContainer>
  )
}
