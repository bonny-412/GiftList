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

export function getDecemberCountdown(now: Date, dayOfMonth: number): number | null {
    const year = now.getFullYear();
    const occasion = new Date(year, 11, dayOfMonth);
    const dayAfter = new Date(year, 11, dayOfMonth + 1);

    if (now >= occasion && now < dayAfter) {
        return null;
    }

    const target = now < occasion ? occasion : new Date(year + 1, 11, dayOfMonth);
    return Math.ceil((target.getTime() - now.getTime()) / 1000);
}
