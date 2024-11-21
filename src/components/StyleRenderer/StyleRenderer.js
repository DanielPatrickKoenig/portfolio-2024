const StyleRenderer = (props) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: props.cssString }} />
    )
}

export default StyleRenderer;


