import React from 'react'
import ReactDOM from 'react-dom'

const page = (
  <div>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walker</li>
      <li>Has over 100k stars on GitHub</li>
      <li>It's actively maintained by skilled people</li>
      <li> Powers thousands of Apps</li>
    </ul>
  </div>
)
ReactDOM.render(page, document.getElementById("root"))
document.getElementById("root").append(page)

