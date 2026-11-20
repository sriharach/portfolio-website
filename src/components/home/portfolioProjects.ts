type PortfolioProject = {
  key: 'wisdom' | 'management' | 'api' | 'converter'
  image: string
  destination: string
  layout: 'image-right' | 'image-left'
}

export const portfolioProjects = [
  {
    key: 'wisdom',
    image: '/portfolio/projects/wisdom-construction.webp',
    destination: process.env.WISDOM_DOMAIN as string,
    layout: 'image-right',
  },
  {
    key: 'management',
    image: '/portfolio/projects/wisdom-construction-management.webp',
    destination: process.env.WISDOM_MANAGEMENT_DOMAIN as string,
    layout: 'image-left',
  },
  {
    key: 'api',
    image: '/portfolio/projects/open-api-management.webp',
    destination: process.env.OPEN_API_DOMAIN as string,
    layout: 'image-right',
  },
  {
    key: 'converter',
    image: '/portfolio/projects/image-converter.webp',
    destination: process.env.IMAGE_CONVERTER_DOMAIN as string,
    layout: 'image-left',
  },
] satisfies readonly PortfolioProject[]