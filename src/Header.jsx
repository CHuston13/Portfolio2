import React, { useState, useEffect } from 'react';
import './index.css';

const GhostWritingEffect = () => {
  const [text, setText] = useState('');
  const fullText = 'Hi, my name is Christian, Im a front end developer who is focused on seamless designs';
  const speed = 50; // Adjust the speed of the effect

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const ghostWrite = () => {
      setText((prevText) => prevText + fullText.charAt(index));
      index++;

      if (index < fullText.length) {
        timeoutId = setTimeout(ghostWrite, speed);
      }
    };

    ghostWrite();

    // Cleanup the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [fullText, speed]);

  return <div>{text}</div>;
};

const Header = () => {
  return (
    <div className='GhostWriting'>
      <GhostWritingEffect />
    </div>
  );
};

export default Header;
