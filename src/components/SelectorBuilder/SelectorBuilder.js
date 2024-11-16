import { useState, useEffect } from "react";
import SelectorBuilderNode from "./SelectorBuilderNode";
import { buildMatrix } from "../../utils/SelectorHelpers";
import selectorData from '../../assets/selectorBuilderMap.json';



const SelectorBuilder = (props) => {
    const [selectorValue, setSelectorValue] = useState('');
    const [nodeData, setNodeData] = useState([]);
    const [active, setActive] = useState(false);

    useEffect(() => { setActive(true) }, [props.ready])

    const createBuildMatrix = (entry) => {
        // return buildMatrix(false, `${props.baseSelector} ${entry.selector}`, entry.followables, selectorData);
        return buildMatrix(false, props.baseSelector, entry, selectorData);
    }
    
    const processSelection = (data) => {
        console.log(data);
        setSelectorValue(`${selectorValue}${data.value}`);
        const newEntry = {
            followables: data.followables,
            selector: `${selectorValue}${data.value}`.split('(').join(' ').split(')').join(' '),
            type: data.type
        };
        // console.log('c matrix', createBuildMatrix(newEntry));
        // console.log(buildMatrix(false, props.baseSelector, ['elements', 'classes', 'ids', 'attributes', 'psuedos'], selectorData));
        const newNodeDat = [...nodeData, newEntry];
        setNodeData(newNodeDat);
    };

    const removeNode = () => {
        const newNodeDat = [...nodeData]
        newNodeDat.splice(nodeData.length - 1, 1);
        setNodeData(newNodeDat);
        if (newNodeDat.length) {
            setSelectorValue(newNodeDat[newNodeDat.length - 1].selector);
        }
        else {
            setSelectorValue('');
        }
        

    }

    const renderBuilderNode = (item, i) => {
        return (
            <div className="selector-builder-container">
                <SelectorBuilderNode 
                    key={i} 
                    onSelectionMade={processSelection} 
                    matrix={createBuildMatrix(item)}
                    disabled={i + 1 < nodeData.length}
                    data={item} 
                />
                {i >= 0 && i === nodeData.length - 1 && <button onClick={removeNode}>X</button>}
                
            </div>
        )
    }


    return (
        <div>
            {active && <div>
                {renderBuilderNode(props.defaultNode, -1)}
                { nodeData.map((item, i) => renderBuilderNode(item, i)) }
                
                {`${props.baseSelector} ${selectorValue.split('(').join(' ').split(')').join(' ')}`}
            </div>}
        </div>
    );
}

export default SelectorBuilder;