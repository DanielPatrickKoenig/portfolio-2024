import { Fragment, useState } from 'react';
import { UnitEditor, ColorEditor, EnumEditor } from '../Editors';
const EditorShell = (props) => {
    const [count, setCount] = useState(1);
    const [values, setValues] = useState([]);
    const valueUpdateHandler = (value, editorIndex, tempCount) => {
        const currentCount = tempCount ? tempCount : count;
        const tempValues = [...values];
        tempValues[editorIndex] = value;
        setValues(tempValues);
        props.onPropertyUpdated(tempValues.filter((item, index) => item !== undefined && index < currentCount).join(' '));
    }
    const addEditor = () => {
        if (count < props.max) {
            setCount(count + 1);
        }
    }
    const removeEditor = (editorIndex) => {
        const nextFalue = values[editorIndex + 1];
        let tempCount = count;
        if (tempCount > 1) {
            tempCount = tempCount - 1;
            setCount(tempCount);
        }
        if (nextFalue) {
            valueUpdateHandler(nextFalue, editorIndex, tempCount);
        }
    }
    return (
        <div>
            {[...new Array(count).keys()].map(editorIndex => <div key={editorIndex}>
                {props.editors.map((item, i) => (
                    <Fragment key={i}>
                        {item.type === 'unit' && (
                            <UnitEditor
                                onValueUpdate={(value) => valueUpdateHandler(value, editorIndex)}
                                subType={item.subType} 
                            />
                        )}
                        {item.type === 'color' && (
                            <ColorEditor
                                onValueUpdate={(value) => valueUpdateHandler(value, editorIndex)} 
                            />
                        )}
                        
                    </Fragment>
                ))}
                <EnumEditor
                    onValueUpdate={(value) => valueUpdateHandler(value, editorIndex)}
                    subType={props.editors?.find(editor => editor.type === 'enum')?.subType}
                />
                {editorIndex > 0 && <button onClick={() => removeEditor(editorIndex)}>x</button>}
            </div>)}
            {props.max > count && <button onClick={addEditor}>+</button>}
        </div>
    )
}

export default EditorShell;