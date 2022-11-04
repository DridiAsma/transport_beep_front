export interface Commande {
  id: number;
  chauffeur_id: string;
  type_vehicules: string;
  types_paiment: string;
  nbr_persone: number;
   texts: string;
   prixclient:number;
   codepromo: string;
   statut: string;
   duree: Date;
   distance: string;
   time: string;
}