import enums from '../../../assets/enums.json';
const EnumEditor = (props) => {
    const custom = props.subType ? enums.find(item => item.name === props.subType).values : [];
    const general = enums.find(item => item.name === 'global')?.values;

    const values = [...custom, ...general];
    return (
        <div>
            <select onChange={(e) => props.onValueUpdate(e.target.value)}>
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

export default EnumEditor;