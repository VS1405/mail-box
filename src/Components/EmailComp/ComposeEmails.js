import React, { useState, useRef, Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import emailjs from 'emailjs-com'
import { useDispatch } from "react-redux";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './ComposeEmail.css'
import MainNavigation from "../Pages/MainNavigation";
import { mailAction } from "../../Store/MailSlice";


const ComposeEmail = () => {

  const inputMailRef = useRef()
  const inputSubjectRef = useRef()
  const dispatch = useDispatch()

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

  const editorHandler = (editorState) => {
    setEditorState(editorState)
  }

  const composeMailHandler = (event) => {
    event.preventDefault();
    console.log("compose button clicked")

    const mailData = {
      id: Math.random(),
      from: localStorage.getItem('email'),
      to: inputMailRef.current.value,
      title: inputSubjectRef.current.value,
      message: editorState.getCurrentContent().getPlainText()
    }
    console.log('Compose data')
    console.log(mailData)
    emailjs.sendForm('service_p1js5pn', 'template_wxk2ilh', event.target, 'Pe6o93UNoVPor3d8q')
      .then((result) => {
        // console.log(result.text);

        dispatch(mailAction.add({
          id: mailData.id, 
          To: mailData.to,
          subject: mailData.title,
          message: mailData.message
        }))
        alert('Send Email');
      }, (error) => {
        console.log(error.text);
        alert(JSON.stringify(error))
      });
    inputMailRef.current.value = ""
    inputSubjectRef.current.value = ""
    //  setEditorState(null)
  }
  return (
    <Fragment>
      <div>
        <MainNavigation />
      </div>
      <div style={{ width: 60 + "%", justifyContent: "center", margin: "auto" }}>
        <Form onSubmit={composeMailHandler} className="text-center mt-2 mr-3">
          <Button variant="secondary" type="submit" className="mt-2">Send</Button>

          <Row >
            <Col xs={1}>
              <Form.Label>To</Form.Label>
            </Col>
            <Col>
              <Form.Control ref={inputMailRef} type="email" placeholder="Enter email" />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Form.Control ref={inputSubjectRef} type="text" placeholder="Subject" />
            </Col>
          </Row>
          <hr />
          <Row className="border-1 editor-class">
            <Editor
              editorState={editorState}
              onEditorStateChange={editorHandler}
            />
          </Row>
        </Form>
      </div>
    </Fragment>
  );
};

export default ComposeEmail;
