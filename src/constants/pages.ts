import type { Page } from "@/types/pages";

export const pages: Page[] = [
  {
    name: 'Inicio',
    href: '/',
    subOptions: [
      {
        name: 'Reseña histórica',
        href: '/#resena-historica'
      },
      {
        name: 'Servicios',
        href: '/#servicios'
      },
      {
        name: 'Proyectos',
        href: '/#proyectos'
      },
      {
        name: 'Nuestros logros',
        href: '/#logros'
      }
    ]
  },
  {
    name: 'Conócenos',
    href: '/conocenos',
    subOptions: [
      {
        name: 'Quienes somos',
        href: '/conocenos/#quienes-somos'
      },
      {
        name: 'Reseña histórica',
        href: '/conocenos/#resena-historica'
      },
      {
        name: 'Filosofía corporativa',
        href: '/conocenos/#filosofia-corporativa'
      },
      {
        name: 'Nuestro directorio',
        href: '/conocenos/#directorio'
      },
      {
        name: 'Equipo de trabajo',
        href: '/conocenos/#equipo-de-trabajo'
      }
    ]
  },
  {
    name: 'Servicios',
    href: '/servicios'
  },
  {
    name: 'Contácto',
    href: '/contacto'
  }
]
