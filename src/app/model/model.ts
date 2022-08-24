export interface Root {
    successful: boolean
    data: Daum[]
  }
  
  export interface Daum {
    NewsId: number
    NameNews: string
    Detail: string
    Status: number
    UpdatedDate: string
    ButtonView: number
    ButtonEdit: number
    ButtonDelete: number
  }
  