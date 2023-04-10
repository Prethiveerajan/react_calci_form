import React, { Component } from 'react'
import './IntroComponent.css';

export class IntroComponent extends Component {
  render() {
    return (
      <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h1>Prethiveerajan</h1>
            {/* <img src="assests/images/o1.jfif" alt="HTML" style="width: 100px; height: 100px; border-radius: 50%; padding: left 100px;"> */}
        <p class="lead"></p>
      </div>
      <div class="col-md-4">
        <ul class="list-unstyled">
          <li>Email: Prethiveerajan40@gmail.com</li>
          <li>Phone:6369687443</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>About Me</h2>
        <p>A highly motivated Learner  with technical Knowledege</p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>Skills</h2>
        <ul>
          <li>AUTODESK FUSION </li>
          <li>UNITY</li>
          <li>MAYA</li>
          <li>UNREAL</li>
          <li>TENSOR FLOW</li>
          <li>PYTHON</li>
          <li>C PROGRAMMING</li>
          <li>C#</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>Experience</h2>
        <ul>
          <li>WORKED AS INTERN IN MONOLITH PRIVATE LIM.</li>
          <li>COMPLETED 3 MONTHS OF TRAINING IN ZOHO</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-8">
        <h2>Projects</h2>
        <ul>
          <li>Project 1:FLAPPY BIRD GAME USING UNITY</li>
          <li>Project 2: 6th SENSE ROBOT USING AURDINO INO</li>
          <li>Project 3: WIKIPEDIA BOT USING THREAD IN PYTHON LANG</li>
        </ul>
      </div>
    </div>
  </div>
    ) 
  }
}

export default IntroComponent
