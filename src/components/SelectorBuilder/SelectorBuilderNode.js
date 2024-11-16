
const SelectorBuilderNode = (props) => {
    // const selectorManifest = selectorData;

    const getOptionGroupElements = () => {
        console.log(props.matrix.matrix);
        return Object.keys(props.matrix.matrix).map(key => {
            return (<optgroup key={key} label={key}>
                {props.matrix.matrix[key].options.map((item, i) => (<option key={i} value={`${key}.${i}`}>{item.value}</option>))}
            </optgroup>)
        });
    }

    const selectChange = (e) => {
        console.log(e);
        const [section, index] = e.target.value.split('.');
        const selectedData = props.matrix.matrix[section].options[index];
        props.onSelectionMade(selectedData);
    }

    return (
        <div>
            {props.disabled}
            <select
                onChange={selectChange}
                disabled={props.disabled}
            >
                {getOptionGroupElements()}
            </select>
        </div>
    );
}
export default SelectorBuilderNode;