import React from 'react'

import { BpkCode } from 'bpk-component-code'
import BpkButton from 'bpk-component-button'
import BpkText from 'bpk-component-text'
import STYLES from './App.scss'
import('jquery')

import('./diff/a')

import('./diff/b')

// import $ from 'jquery';

// $('.my-element').animate(/* ... */);

const c = className => STYLES[className] || 'UNKNOWN'

// const url = "http://127.0.0.1:3001/users";

// fetch(url).then(data => {console.log(data)})
// .then(res => {console.log(res)})
// .catch(error => {console.log(error)});

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>
          Welcome to React + Backpack
        </BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <BpkText tagName="p" className={c('App__text')}>
        To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to reload.
      </BpkText>
      <BpkButton onClick={() => alert('It works!')}>Click me</BpkButton>
      {/* <image style={{width:"50%", height:"50%"}} alt="image title" src="https://js.skyscnr.com/images/country/flag/header/uk.png"></image> */}
      {/* <script src="https://js.skyscnr.com"></script> */}
    </main>
  </div>
)

export default App
