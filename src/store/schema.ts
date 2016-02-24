export interface Item {
    id: string,
    text: string,
    completed: boolean
}

export interface StateTree {
    items: Item[]
}