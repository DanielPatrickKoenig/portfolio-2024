import { useState } from 'react';
import units from '../../../assets/units.json';
const UnitEditor = (props) => {
    const values = units.find(item => item.name === props.subType).units;
    const [num, setNum] = useState(0);
    const [unit, setUnit] = useState(values[0]);
    const numUpdated = (e) => {
        setNum(e.target.value);
        props.onValueUpdate(`${e.target.value}${unit}`);
    }
    const unitUpdated = (e) => {
        setUnit(e.target.value);
        props.onValueUpdate(`${num}${e.target.value}`);
    }
    return (
        <div>
            <input
                onChange={numUpdated}
                type="number"
            />
            <select
                onChange={unitUpdated}
            >
                {values.map(item => (
                    <option
                        key={item}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default UnitEditor;