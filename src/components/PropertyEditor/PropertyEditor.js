
import EditorShell from '../EditorShell/EditorShell';
const PropertyEditor = (props) => {
    const valueUpdateHandler = (name, value) => {
        props.onPropertyUpdated(name, value);
    }
    return (
        <div>
            <button onClick={props.onReturnToSelector}>Property Selector</button>
            <ul>
                {props.selectedProperties.filter(item => item.selected).map((item, i) => (
                    <li key={i}>
                        {item.name}
                        <div>
                            <EditorShell 
                                editors={item.editors}
                                onPropertyUpdated={(value) => {valueUpdateHandler(item.name, value)}}
                                max={item.max}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PropertyEditor;