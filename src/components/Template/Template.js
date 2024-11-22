import { useState } from "react"

const Template = (props) => {
    const [templateContent, setTemplateContent] = useState(props.templates[props.templateIndex >= 0 ? props.templateIndex : 2].content);

    const changeContent = (e) => {
        setTemplateContent(e.target.value);
    }

    return (
        <div>
            <textarea
                value={templateContent}
                onChange={changeContent}
            />
            <div
                className="template-content"
                dangerouslySetInnerHTML={{ __html: templateContent }}
            />
        </div>
    )
}

export default Template;