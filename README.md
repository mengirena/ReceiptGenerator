# Print receipt PDF 

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dd3688a-8f84-4c53-8702-a2cd7fcbe574/deploy-status)]()

👆🏽 click to check the live page

This is a receipt maker. You can input info and the receipt will be generated and downloaded in pdf format.

## Demo

<img src="" width="300px">

## How it's built

**Tech used**: React, Node.js

## Lesson learnt

### What is Axios?

Axios is very similar to Fetch API. It can be used to make HTTP request from node.js or XMLHttpRequests from the browser. It's a JavaScript library so we have to import it to use it. When we use `fetch()`, we have to transfer the response to json first and then we can get the data we want. Using Axios, we don't have to worry about it. 

### Use html-pdf to convert html to pdf

Installation 

`$ npm install -g html-pdf`

**Example Code:**

```node
    const pdf = require('html-pdf')
    pdf.create(html, config-option).toFile('filename.pdf', callback(err,res))
```

###