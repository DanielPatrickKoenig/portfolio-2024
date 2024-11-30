import properties from '../../assets/properties.json';
import { uniq } from 'lodash';
const PropertyItemizer = () => {
    const getAllEditors = () => {
        let editorList = [];
        properties.filter(item => item.editors).forEach(item => {
            editorList = [...editorList, ...item.editors];
        });
        return editorList;
    }
    return (
        <div>
            <ul>
                {uniq(getAllEditors().map(item => item.type)).map(item => <li key={item}>{item}</li>)}
            </ul>
            {uniq(getAllEditors().map(item => item.type)).map(type => (
                    <div>
                        <p>{type}</p>
                        <ul>{uniq(getAllEditors().filter(item => item.type === type).map(item => item.subType)).map(item => <li class="control-type" key={item}>{item}</li>)}</ul>
                    </div>
                ))
            }
        </div>
    )
}

export {PropertyItemizer};