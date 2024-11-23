import { Fragment, useEffect, useState } from "react";
import PropertySelector from "../PropertySelector/PropertySelector";
import PropertyEditor from "../PropertyEditor/PropertyEditor";
import StyleRenderer from "../StyleRenderer/StyleRenderer";
const PropertyManager = (props) => {
    const [propertyList, setPropertyList] = useState([]);
    const [editing, setEditing] = useState(false);
    const [styleObject, setStyleObject] = useState({});
    const selectionCompleteHandler = (selectedProperties) => {
        setPropertyList(selectedProperties);
        setEditing(true);
    };
    const addTempSelector = (selector, prefix = '') => {
        const tempObject = { ...styleObject };
        if (!tempObject[`${prefix}${selector}`]) {
            tempObject[`${prefix}${selector}`] = {};
        }
        return tempObject;
    }
    const propertyEditedHandler = (name, value, selector) => {
        const tempStyleObject = addTempSelector(selector);
        // const tempStyleObject = { ...styleObject };
        // if (!tempStyleObject[`.${props.templateClass} ${selector ? selector : props.currentSelector}`]) {
        //     tempStyleObject[`.${props.templateClass} ${selector ? selector : props.currentSelector}`] = {};
        // }
        tempStyleObject[`${selector}`][name] = value;
        setStyleObject(tempStyleObject);
    }
    const processStyleObject = () => {
        let styleString = '';
        Object.keys(styleObject).forEach(key => {
            styleString += `${key} {`;
            Object.keys(styleObject[key]).forEach(item => {
                styleString += `${item}: ${styleObject[key][item]};`;
            });
            styleString += `}`;
        });
        return `<style>${styleString}</style>`;
    }
    useEffect (() => {
        const tempStyleObject = addTempSelector(props.currentSelector, `.${props.templateClass} `);
        setStyleObject(tempStyleObject);
    }, [props.currentSelector]);
    return (
        <div>
            {editing && (
                <Fragment>
                    {Object.keys(styleObject).map(item => (
                        <div 
                            key={item}
                            style={{display: item === `.${props.templateClass} ${props.currentSelector}` ? 'block' : 'none'}}
                        >
                            <p>Selector: {item}</p>
                            <PropertyEditor 
                                selectedProperties={propertyList}
                                selector={item}
                                onReturnToSelector={() => setEditing(false)}
                                onPropertyUpdated={propertyEditedHandler}
                            />
                        </div>
                    ))}
                    <StyleRenderer cssString={processStyleObject()} />
                    {processStyleObject()}
                </Fragment>
            )}
            {!editing && (
                <PropertySelector
                    onSelectionsComplete={selectionCompleteHandler}
                />
            )}
        </div>
    )
}
export default PropertyManager;