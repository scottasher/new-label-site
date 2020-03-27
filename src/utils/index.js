export function getMenuMap(array) {
    return array.filter(route => {
        if(route.menuRemove) {
            return false
        }
        return  true;
    });
};

export function getSiteMap(array) {
    return array.filter(obj => obj.title).map(ob => {
        return {name: ob.name, path: ob.path}
    })
}