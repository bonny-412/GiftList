export interface SelectItem<T = any> {
    label?: string;
    value: T;
}

export function sortRecipes():SelectItem[] {
    return [
        { label: 'A-Z', value: 1 },
        { label: 'Z-A', value: 2 },
        { label: 'Più recente', value: 3 },
        { label: 'Meno recente', value: 4}
    ];
}

export function getChristmasDate():string {
    const date = new Date();
    return `December 25, ${date.getFullYear()} 00:00:00`;
}

export function getBirthdayDate():string {
    const date = new Date();
    return `December 27, ${date.getFullYear()} 00:00:00`;
}