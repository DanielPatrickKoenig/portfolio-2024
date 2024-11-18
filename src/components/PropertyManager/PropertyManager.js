import { useState } from "react";
import PropertySelector from "../PropertySelector/PropertySelector";
import PropertyEditor from "../PropertyEditor/PropertyEditor";
const PropertyManager = () => {
    const [propertyList, setPropertyList] = useState([]);
    const [editing, setEditing] = useState(false);
    const selectionCompleteHandler = (selectedProperties) => {
        setPropertyList(selectedProperties);
        setEditing(true);
    };
    return (
        <div>
            {editing && <PropertyEditor selectedProperties={propertyList} onReturnToSelector={() => setEditing(false)} />}
            {!editing && <PropertySelector onSelectionsComplete={selectionCompleteHandler} />}
        </div>
    )
}
export default PropertyManager;