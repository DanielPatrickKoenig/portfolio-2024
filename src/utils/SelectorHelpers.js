import { flatten, uniq } from 'lodash'
function getDescendants (element, list=[]) {
    [...element.children].forEach(item => {
        list.push(item);
        getDescendants(item, list);
    });
    return list;
}

function buildMatrix (excludeBase, base, entry, selectorOptionMatrix) {
    console.log('entry', entry);
    const addOn = entry.type === 'opperators' ? '*' : '';
    const baseSelector = `${base} ${entry.selector}${addOn}`;
    const followables = entry.followables;
    console.log(baseSelector);
    let valid = false;
    const matrixData = JSON.parse(JSON.stringify(selectorOptionMatrix));
    const selection = document.querySelectorAll(baseSelector);
    const filteredMatrixData = {};
    console.log(selection.length);
    if (selection.length) {
        const elements = flatten([...selection].map(item => getDescendants(item)));
        if (!excludeBase) {
            elements.push(document.querySelector(baseSelector));
        }
        elements.forEach(item => {
            const classList = [...item.classList].map(_item => ( {value: `.${_item}`} ));
            matrixData.classes.options = [...matrixData.classes.options, ...classList];
            const itemId = item.getAttribute('id');
            if (itemId) {
                matrixData.ids.options = [...matrixData.ids.options, { value: `#${itemId}` }];
            }
            matrixData.elements.options = [...matrixData.elements.options, { value: item.tagName.toLowerCase() }];
            const attributes = [...item.attributes].map(_item => ( {value: `[${_item.name}]`} ));
            const attributesWithValues = [...item.attributes].filter(_item => item.getAttribute(_item.name)).map(_item => ( {value: `[${_item.name}="${item.getAttribute(_item.name)}"]`} ));
            matrixData.attributes.options = [...matrixData.attributes.options, ...attributes, ...attributesWithValues];
        });
        Object.keys(matrixData).forEach(key => {
            if (followables.includes(key)) {
                const mappedData = matrixData[key].options.map(item => ({ ...item, followables: matrixData[key].followables, type: key }));
                const uniqueValues = uniq(matrixData[key].options.map(item => item.value));
                const uniqueOptions = uniqueValues.map(item => mappedData.find(option => option.value === item));
                matrixData[key].options = uniqueOptions;
                filteredMatrixData[key] = matrixData[key];
            }
        });
        valid = true;
    }
    return { matrix: filteredMatrixData, valid };
}

export {
    getDescendants,
    buildMatrix
};