import { useState } from "react";

const Template = (props) => {
    const [templateContent, setTemplateContent] = useState(props.templates[props.templateIndex >= 0 ? props.templateIndex : 2].content);

    const changeContent = (e) => {
        setTemplateContent(e.target.value);
    }

    const templateSelected = (e) => {
        const selectedTemplate = props.templates[e.target.value];
        setTemplateContent(selectedTemplate.content);
        props.onTemplateSelected(selectedTemplate);
    }

    return (
        <div>
            <select onChange={templateSelected}>
                {props.templates.map((item, i) => (
                    <option
                        value={i}
                        key={i}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
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