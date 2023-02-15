
//sidebar
export interface IMenu {
    active: string,
    depth: number,
    icon: string,
    id: number,
    path: string,
    title: string,
    type: string,
    sDepth: [
        {
            active: string,
            depth: number,
            icon: string,
            id: number,
            path: string,
            title: string,
            type: string,
        }
    ]
}


export interface IOrderWidget {

}