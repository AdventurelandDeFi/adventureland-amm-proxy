import { MenuEntry } from '@adventureland-defi-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://adventureland.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.adventureland.finance/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.adventureland.finance/#/pool'
      },
      {
        label: 'V1 Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Mines',
    icon: 'PickaxeIcon',
    href: 'https://adventureland.finance/mines'
  },
  {
    label: 'Shops',
    icon: 'PoolIcon',
    href: 'https://adventureland.finance/shops'
  },
  {
    label: 'Quests',
    icon: 'QuestsIcon',
    href: 'https://adventureland.finance/quests'
  },
  {
    label: 'Lore',
    icon: 'ScrollIcon',
    href: 'https://adventureland.finance/lore'
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://adventureland.finance//lottery'
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xc59824a2AB5DB97B8202E283fd1b8584c69348d0',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/adventureland',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/adventureland/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x4adeea895fa52707c044f618b36908003d09146e',
      },
    ]
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'TechRate',
        href: 'https://adventureland.finance/files/TechRate-QuickCheck.pdf',
      },
      {
        label: 'More coming soon..',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/AdventurelandDeFi/',
      },
      {
        label: 'Docs',
        href: 'https://docs.adventureland.finance/',
      },
      {
        label: 'Blog',
        href: 'https://adventurelandfinance.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
