import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./ComposeEmail.css";

const ComposeEmails = () => {
  const inputMailRef = useRef();
  const inputSubjectRef = useRef();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editorHandler = (editorState) => {
    setEditorState(editorState);
  };

  const composeMailHandler = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    alert('It work properly')
    // Handle sending email with rawContent
  };

  return (
    <div className="compose-email-container">
      <Form onSubmit={composeMailHandler} className="text-center mt-2 mr-3">
        <Row className="mb-1" style={{alignItems: 'center'}}>
          <Col xs={1}>
            <Form.Label >To</Form.Label>
          </Col>
          <Col>
            <Form.Control
              ref={inputMailRef}
              type="email"
              placeholder="Enter email"
              // style={{border: 'none'}}
            />
          </Col>
        </Row>
            <hr />
        <Row className="mb-3">
          <Col>
            <Form.Control
              ref={inputSubjectRef}
              type="text"
              placeholder="Subject"
            />
          </Col>
        </Row>
        
        <hr />
        <Row className="border-1 editor-class">
          <Editor
            editorState={editorState}
            onEditorStateChange={editorHandler}
            // toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </Row>
       <hr/>
        <Row style={{width: 20 + '%'}}>
          <Button variant="primary" type="submit" className="mt-2">
            Send
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default ComposeEmails;
