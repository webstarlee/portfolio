export function descriptionCut (_des: string) {
    let new_des = _des;
    if (_des.length > 200) {
        new_des = _des.slice(0, 200);
        new_des += " ...";
    }

    return new_des;
}