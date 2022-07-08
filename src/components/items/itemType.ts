export interface ItemType {
    type: string,
    actions: {
        name: string,
        condition: () => boolean,
        onclick: {
            message: string,
            action: Function
        }
    }[]
}