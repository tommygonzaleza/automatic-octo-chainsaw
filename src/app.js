import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    {type: LineType.Input, value: 'npm install @learnpack/learnpack -g'},
    {type: LineType.Input, value: 'learnpack start'},
    {type: LineType.Output, value: 'ⓘ Building the exercise index...'},
    {type: LineType.Output, value: 'ⓘ Downloading the LearnPack coding UI, this may take a minute...'},
    {type: LineType.Output, value: 'ⓘ Decompressing LearnPack UI, this may take a minute...'},
    {type: LineType.Output, value: '✓ Exercises are running 😃 Open your browser to start practicing!'},
  ]);
  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div className="container">
      <Terminal name='React Terminal Usage Example' colorMode={ ColorMode.Dark }  lineData={ terminalLineData } onInput={ terminalInput => console.log(`New terminal input received: '${ terminalInput }'`) }/>
    </div>
  )
};

ReactDOM.render(<TerminalController />, document.getElementById('react-target'));