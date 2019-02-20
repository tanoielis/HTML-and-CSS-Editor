/* @flow */
/* global require */
/* eslint-disable import/no-commonjs */

import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';

// import doesn't seem to work properly with parcel for jsx
require('prismjs/components/prism-jsx');

class CodeEditor extends React.Component {
  state = {
    code: `
    <h1>Hello!</h1>
    <p>This is an interactive paragraph.
       Try editing it!</p>
    `,
  };

  handleChange(code) {
    this.props.saveChange(this.props.editorName, code);
    this.setState({code});
  }

  render() {
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