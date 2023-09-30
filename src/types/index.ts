export type Name = {
    text: string,
    desc: string,
    hobby: string[]
}

export type NamesContextType = {
    details: Name[],
    selected: Name,
    updateSelected:(name:Name) => void
}