export type GridColumns<T> = { id: number; data: T[] };

export const generateGridColumns = <T>(data: T[], columnCount: number): GridColumns<T>[] => {
    let columns: Record<string, GridColumns<T>> = {};

    for (let index = 0; index < columnCount; index++) {
        columns[index] = {
            id: index,
            data: [],
        };
    }
    data.forEach((template, index) => {
        const column = index % columnCount;
        columns[column].data.push(template);
    });
    return Object.values(columns);
};

export const isElectron = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf(' electron/') !== -1;
};
