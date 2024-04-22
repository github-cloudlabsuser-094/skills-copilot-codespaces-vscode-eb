import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea 
                value={markdown} 
                onChange={handleInputChange} 
            />
            <ReactMarkdown children={markdown} />
        </div>
    );
};

export default MarkdownEditor;

const reverseSentence = (sentence) => {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
};

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flatMap(innerArray => 
    innerArray.map(item => item.name)
);
c
console.log(names); // This will output: ['John', 'Jane', 'Bob']