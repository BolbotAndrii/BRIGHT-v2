
//sidebar
export interface IMenu {
    id: number,
    label: string,
    type: string,
    path: string,
    icon: string,
    secondDepth: ISDepth[]
}

export interface ISDepth {
    id: number,
    label: string,
    path: string,
    icon: string
}

export interface IOrderWidget {

}