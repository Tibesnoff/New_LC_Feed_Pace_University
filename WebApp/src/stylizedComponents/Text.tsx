import React from 'react';

interface TextProps {
    classNameProps: string;
    content: string;
    colorOverride?: boolean;
}

const Text: React.FC<TextProps> = ({
    classNameProps,
    content,
    colorOverride = false,
}) => {
    return (
        <p
            className={`${classNameProps} ${colorOverride ? '' : 'text-slate-50'}`}
        >
            {content}
        </p>
    );
};

export default Text;
