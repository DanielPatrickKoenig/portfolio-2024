
import { useState } from 'react';
import properties from '../../assets/properties.json';
const PropertySelector = (props) => {
    const [selections, setSelections] = useState(properties.map((item, id) => ({ ...item, id, selected: false })));
    const [searchTerm, setSearchTerm] = useState('');
    const updateSelections = (e, id) => {
        const newSelections = [...selections];
        newSelections[id].selected = e.target.checked;
        setSelections(newSelections);
    }
    const selectionComplete = () => {
        props.onSelectionsComplete(selections.filter(item => item.selected));
    }
    return (
        <div>
            <ul>
                {selections.filter(item => item.selected).map((item, i) => (<li key={i}>{item.name}</li>))}
            </ul>
            <button onClick={selectionComplete}>Start Editing</button>
            <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <td>Selected</td>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {selections.map((item, i) => (
                        <tr
                            style={{ display: item.name.includes(searchTerm) || !searchTerm ? '' : 'none' }}
                            key={i}
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    checked={item.selected}
                                    onChange={(e) => updateSelections(e, item.id)}
                                />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.defenition}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
};

export default PropertySelector;