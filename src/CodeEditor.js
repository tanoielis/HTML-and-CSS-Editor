/* @flow */
/* global require */
/* eslint-disable import/no-commonjs */

import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import './CodeEditor.css';

// import doesn't seem to work properly with parcel for jsx
require('prismjs/components/prism-jsx');

class CodeEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      code: props.code,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(code) {
    this.props.saveChange(this.props.editorName, code);
    this.setState({code});
  }

  render() {
    console.log(this.state)
    return (
      <main className="container">
        <div className="container__content">
          <h1>{this.props.editorName}</h1>
          <div className="container_editor_area">
            <Editor
              placeholder="Type some code…"
              value={this.state.code}
              onValueChange={this.handleChange}
              highlight={code => highlight(code, languages.jsx)}
              padding={10}
              className="container__editor"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default CodeEditor;