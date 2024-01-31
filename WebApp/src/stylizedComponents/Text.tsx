import React from 'react';

interface TextProps {
  classNameProps: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ classNameProps, content }) => {
  return <p className={classNameProps}>{content}</p>;
};

export default Text;