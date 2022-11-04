import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [

  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },

  {
    routeLink: 'blog',
    icon: 'fal fa-blog',
    label: 'Blog'
  },


  {
    routeLink: 'contact',
    icon: 'fal fa-chart-bar',
    label: 'Contact'
  },

  {
    routeLink: 'paiement',
    icon: 'fal fa-wallet',
    label: 'Paiement'
  },

  {
    routeLink: 'map',
    icon: 'fal fa-location',
    label: 'Emplacement'
  },

  {
    routeLink: 'client',
    icon: 'fal fa-user',
    label: 'Client',
    items: [
      {
        routeLink: 'client/listeclient',
        label: 'Liste compte Client'
      },
      {
        routeLink: 'client/commande',
        label: 'Demande reservation',
      }
    ]
  },

  {
    routeLink: 'chauffeur',
    icon: 'fal fa-users',
    label: 'Chauffeur',
    items: [
      {
        routeLink: 'chauffeur/liste',
        label: 'Liste compte Chauffeur'
      },
      {
        routeLink: 'chauffeur/afficher',
        label: 'Liste demande',
      }
    ]
  },

  {
    routeLink: 'settings',
    icon: 'fal fa-cog',
    label: 'Settings',
    // expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile'
      }
    ]
  },

  {
    routeLink: 'voiture',
    icon: 'fal fa-car',
    label: 'Vehicule',
    expanded: true,
    items: [
      {
        routeLink: 'voiture/marque',
        label: 'Marque'
      },
      {
        routeLink: 'voiture/model',
        label: 'Modéle'
      },
      {
        routeLink: 'voiture/type',
        label: 'Types véhicule'
      },
    ]
  },

  {
    routeLink: 'reviws',
    icon: 'fal fa-star',
    label: 'Reviews'
  },
  {
    routeLink: 'codepromo',
    icon: 'fal fa-code',
    label: 'Code Promo'
  },
  {
    routeLink: 'notification',
    icon: 'fal fa-star',
    label: 'Notifications'
  },



];

