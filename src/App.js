import React from 'react';
import CodeEditor from './CodeEditor';
import SplitPane from 'react-split-pane';
import './App.css';

class App extends React.Component {
    state = {
        html: '',
        css: ''
    }

    handleChange(editorName, value) {
        this.setState({
            editorName: value
        });
    }

    render() {
        return (
            <SplitPane split="vertical" minSize={0} defaultSize={1000}>
              <SplitPane split="horizontal" minSize={0} defaultSize={500}>
                  <CodeEditor style={'background: white;'} editorName="html" saveChange={this.handleChange} />
                  <CodeEditor editorName="css" saveChange={this.handleChange} />
              </SplitPane>
              <div></div>
             </SplitPane>
        );
    }
}

export default App;