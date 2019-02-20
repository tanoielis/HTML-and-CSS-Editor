import React from 'react';
import CodeEditor from './CodeEditor';
import SplitPane from 'react-split-pane';
import './App.css';
import styled from 'styled-components';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            html: '',
            css: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(editorName, value) {
        let state = {};
        state[editorName] = value;
        this.setState(state);
    }

    render() {
        let {html, css} = this.state;
        
        let Div = styled.div`${css}`

        return (
            <SplitPane split="vertical" minSize={0} defaultSize={800}>
              <SplitPane split="horizontal" minSize={0} defaultSize={500}>
                  <CodeEditor editorName="html" saveChange={this.handleChange} code={html} />
                  <CodeEditor editorName="css" saveChange={this.handleChange} code={css}/>
              </SplitPane>
              <Div dangerouslySetInnerHTML={{__html: html}} />
             </SplitPane>
        );
    }
}

export default App;