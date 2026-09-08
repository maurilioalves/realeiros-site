import type { RouteLocale } from './config';

export const commonCopy: Record<
  RouteLocale,
  {
    skipLink: string;
    homeLabel: string;
    nav: {
      oab: string;
      lab: string;
      about: string;
      news: string;
      contact: string;
      playNow: string;
      playOab: string;
      language: string;
      primary: string;
      mobile: string;
      openMenu: string;
    };
    footer: {
      slogan: string;
      studio: string;
      explore: string;
      player: string;
      social: string;
      apps: string;
      about: string;
      news: string;
      contact: string;
      support: string;
      privacy: string;
      terms: string;
      deletion: string;
      identity: string;
    };
  }
> = {
  'pt-BR': {
    skipLink: 'Pular para o conteúdo',
    homeLabel: 'Realeiros Play — página inicial',
    nav: {
      oab: 'Olha a Batida',
      lab: 'Lança a Braba',
      about: 'Sobre',
      news: 'Novidades',
      contact: 'Contato',
      playNow: 'JOGAR AGORA',
      playOab: 'Jogar Olha a Batida',
      language: 'Idioma',
      primary: 'Navegação principal',
      mobile: 'Navegação móvel',
      openMenu: 'Abrir menu',
    },
    footer: {
      slogan: 'Jeito brasileiro de viver futebol.',
      studio: 'Estúdio indie brasileiro de jogos mobile.',
      explore: 'Explore',
      player: 'Jogador',
      social: 'Redes Sociais',
      apps: 'Apps',
      about: 'Sobre',
      news: 'Novidades',
      contact: 'Contato',
      support: 'Suporte',
      privacy: 'Privacidade',
      terms: 'Termos de uso',
      deletion: 'Exclusão de dados',
      identity: 'Futebol digital com identidade brasileira.',
    },
  },
  en: {
    skipLink: 'Skip to content',
    homeLabel: 'Realeiros Play — home page',
    nav: {
      oab: 'Olha a Batida',
      lab: 'Lança a Braba',
      about: 'About',
      news: 'News',
      contact: 'Contact',
      playNow: 'PLAY NOW',
      playOab: 'Play Olha a Batida',
      language: 'Language',
      primary: 'Primary navigation',
      mobile: 'Mobile navigation',
      openMenu: 'Open menu',
    },
    footer: {
      slogan: 'A Brazilian way to live football.',
      studio: 'Brazilian indie mobile game studio.',
      explore: 'Explore',
      player: 'Player',
      social: 'Social Media',
      apps: 'Apps',
      about: 'About',
      news: 'News',
      contact: 'Contact',
      support: 'Support',
      privacy: 'Privacy',
      terms: 'Terms of Use',
      deletion: 'Data deletion',
      identity: 'Digital football with Brazilian identity.',
    },
  },
  es: {
    skipLink: 'Saltar al contenido',
    homeLabel: 'Realeiros Play — página de inicio',
    nav: {
      oab: 'Olha a Batida',
      lab: 'Lança a Braba',
      about: 'Acerca de',
      news: 'Novedades',
      contact: 'Contacto',
      playNow: 'JUGAR AHORA',
      playOab: 'Jugar Olha a Batida',
      language: 'Idioma',
      primary: 'Navegación principal',
      mobile: 'Navegación móvil',
      openMenu: 'Abrir menú',
    },
    footer: {
      slogan: 'Una forma brasileña de vivir el fútbol.',
      studio: 'Estudio indie brasileño de juegos para móviles.',
      explore: 'Explora',
      player: 'Jugador',
      social: 'Redes Sociales',
      apps: 'Apps',
      about: 'Acerca de',
      news: 'Novedades',
      contact: 'Contacto',
      support: 'Soporte',
      privacy: 'Privacidad',
      terms: 'Términos de uso',
      deletion: 'Eliminación de datos',
      identity: 'Fútbol digital con identidad brasileña.',
    },
  },
};
