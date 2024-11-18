
import { Fragment } from 'react';
import { UnitEditor, ColorEditor, EnumEditor } from '../Editors';
const PropertyEditor = (props) => {

    const valueUpdateHandler = (name, value) => {
        console.log(name, value);
    }
    return (
        <div>
            <button onClick={props.onReturnToSelector}>Property Selector</button>
            <ul>
                {props.selectedProperties.filter(item => item.selected).map((item, i) => (
                    <li key={i}>
                        {item.name}
                        <ul>
                            {item.editors.map((editor) => (
                                <Fragment key={i}>
                                    {editor.type === 'unit' && (
                                        <li>
                                            <UnitEditor
                                                onValueUpdate={(value) => valueUpdateHandler(item.name, value)}
                                                subType={editor.subType} 
                                            />
                                        </li>
                                    )}
                                    {editor.type === 'color' && <li><ColorEditor /></li>}
                                </Fragment>
                            ))}
                            <li><EnumEditor
                                onValueUpdate={(value) => valueUpdateHandler(item.name, value)}
                                subType={item.editors?.find(editor => editor.type === 'enum')?.subType}
                            /></li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default PropertyEditor;