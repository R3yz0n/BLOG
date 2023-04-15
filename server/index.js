import express from 'express';
const express = require('express')
const app = express();

app.use(express.json());
app.listen(8800, () => {
    console.log('connected');
})