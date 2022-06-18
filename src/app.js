import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([{ type: LineType.Output, value: "                             " }]);

  const loadCommands = () => {
    let val1 = 'npm install @learnpack/learnpack -g';
    let val2 = 'learnpack start';
    let val3 = 'ⓘ Building the exercise index...';
    let val6 = '✓ Exercises are running! 😃';

    let value1 = ""
    let value2 = ""

    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    let counter6 = 0;

    let interval = setInterval(() => {
      if (counter1 < val1.length) {
        value1 += val1[counter1];
        setTerminalLineData([{ type: LineType.Input, value: value1 }])
        counter1++
      } else if (counter2 < val2.length) {
        value2 += val2[counter2];
        setTerminalLineData([{ type: LineType.Input, value: 'npm install @learnpack/learnpack -g' }, { type: LineType.Input, value: value2 }])
        counter2++
      } else if (counter3 < val3.length) {
        setTerminalLineData([{ type: LineType.Input, value: 'npm install @learnpack/learnpack -g' },
        { type: LineType.Input, value: 'learnpack start' }, { type: LineType.Output, value: val3 }])
        counter3+=4
      } else if (counter6 < val6.length) {
        setTerminalLineData([{ type: LineType.Input, value: 'npm install @learnpack/learnpack -g' },
        { type: LineType.Input, value: 'learnpack start' },
        { type: LineType.Output, value: 'ⓘ Building the exercise index...' }, { type: LineType.Output, value: val6 }])
        counter6++
      } else {
        clearInterval(interval);
      }
    }, 50)
  }

  useEffect(() => {
    loadCommands();
  }, [])

  // Terminal has 100% width by default so it should usually be wrapped in a container div
  return (
    <div style={{ maxHeight: "300px",minHeight: "300px", minWidth:"100%" }}>
      <Terminal name="LearnPack's Terminal" colorMode={ColorMode.Dark} lineData={terminalLineData} />
    </div>
  )
};

ReactDOM.render(<TerminalController />, document.getElementById('react-target'));