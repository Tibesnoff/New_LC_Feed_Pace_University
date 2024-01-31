import React from 'react';

interface TextProps {
  classNameProps: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ classNameProps, content }) => {
  return <p className={`${classNameProps} text-slate-50`}>{content}</p>;
};

export default Text;