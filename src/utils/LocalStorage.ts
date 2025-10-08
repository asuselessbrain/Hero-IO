export const getFromLocalStorage = (key: string) => {
    const apps = localStorage.getItem(key);

    if (apps) {
        return JSON.parse(apps);
    }

    return []
}

export const setItemIntoDB = (id: number) => {
    const apps = getFromLocalStorage('installedApps');

    if (!apps.includes(id)) {
        apps.push(id)
    }
    localStorage.setItem('installedApps', JSON.stringify(apps))
}

export const removeItemFromDB = (value: number): number[] => {
    const apps: number[] = getFromLocalStorage('installedApps');

    const newArray: number[] = apps.filter((app: number) => app !== value);
    localStorage.setItem('installedApps', JSON.stringify(newArray))
    return newArray
}