import React from 'react';
import { Accordion,Table } from 'react-bootstrap';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
        <h2 className='text-center m-4'>Question & Answer</h2>
             <div className='question-image'>
             <img src="ReactJS.png" alt="" />
             </div>
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Q1:- How react works?</Accordion.Header>
                <Accordion.Body>
                  <strong>Answer: </strong>React is a javascript library it's use for creating UI. facebook developers  create this wonderful thing which caused a revolution in the Web world. React has Virtual DOM. that is a copy of real DOM. whenever a components state changes. then react compare between virtual DOM and Real Dom then changes the element that has changed. this is the react magic he doesn't change full Dom. he changed specific element that has changed. 
                </Accordion.Body>
              </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Q2:- Props Vs State?</Accordion.Header>
                <Accordion.Body>
                <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Num</th>
                    <th>Props</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Props are used to pass data from one component to another.</td>
                    <td>State cannot passed data one component ot other component</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Props can't changed</td>
                    <td>State can changed asynchronously</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Props is immutable.</td>
                    <td>State is mutable.</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Props can accessed the child component.</td>
                    <td>State cannot accessed child components.</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Props are external and controlled by whatever renders the component.</td>
                    <td>The State is internal and controlled by the React Component itself.</td>
                  </tr>
                </tbody>
              </Table>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Q1: How useEffect Works</Accordion.Header>
                  <Accordion.Body>
                    <strong>Answer: </strong>UseEffect hook is an extremely powerful tool in react, it's allowed to even create your own, custom hooks.When call useEffect in component, this is effectively queuing or scheduling an effect to maybe run, after the render is done.After rendering finished, useEffect check the list of dependency values against the values from the last render, and call effect function if any one of them has changed.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

        </div>
    );
};

export default Question;