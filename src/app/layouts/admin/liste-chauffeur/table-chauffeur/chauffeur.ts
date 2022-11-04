export interface IChauffeur {
  id: number,
  nom: string,
  prenom: string,
  tele: number,
  cin: number,
  image: string,
  gendre: string,
  password: string
}

export interface ResponseData {
  data: IChauffeur[]
}