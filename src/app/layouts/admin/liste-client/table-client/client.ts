export interface IClient {
  id: number,
  name: string,
  prenom:string,
  telephone:number,
  photo: number,
  email:string,
  password: string,

}

export interface Response{
  data: IClient[]
}
