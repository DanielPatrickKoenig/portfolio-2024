import { useState } from "react"

import templates from '../../assets/editableTemplates.json';
const Template = () => {
    const [templateContent, setTemplateContent] = useState(templates[1].content);

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