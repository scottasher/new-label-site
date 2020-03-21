export function getMenuMap(array) {
    return array.filter(route => {
        if(route.menuRemove) {
            return false
        }
        return  true;
    });
};