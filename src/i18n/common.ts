import type { RouteLocale } from './config';

export const commonCopy: Record<
  RouteLocale,
  {
    skipLink: string;
    homeLabel: string;
    nav: {
      oab: string;
      about: string;
      news: string;
      contact: string;
      playNow: string;
      playOab: string;
      language: string;
    };
    footer: {
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
      about: 'Sobre',
      news: 'Novidades',
      contact: 'Contato',
      playNow: 'JOGAR AGORA',
      playOab: 'Jogar Olha a Batida',
      language: 'Idioma',
    },
    footer: {
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
      about: 'About',
      news: 'News',
      contact: 'Contact',
      playNow: 'PLAY NOW',
      playOab: 'Play Olha a Batida',
      language: 'Language',
    },
    footer: {
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
      about: 'Acerca de',
      news: 'Novedades',
      contact: 'Contacto',
      playNow: 'JUGAR AHORA',
      playOab: 'Jugar Olha a Batida',
      language: 'Idioma',
    },
    footer: {
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
