import { Fragment, useState } from "react";
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
    const propertyEditedHandler = (name, value) => {
        const tempStyleObject = { ...styleObject };
        if (!tempStyleObject[`.${props.templateClass} ${props.currentSelector}`]) {
            tempStyleObject[`.${props.templateClass} ${props.currentSelector}`] = {};
        }
        tempStyleObject[`.${props.templateClass} ${props.currentSelector}`][name] = value;
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
    return (
        <div>
            {editing && (
                <Fragment>
                    <PropertyEditor 
                        selectedProperties={propertyList}
                        onReturnToSelector={() => setEditing(false)}
                        onPropertyUpdated={propertyEditedHandler}
                    />
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