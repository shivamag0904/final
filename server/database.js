'use strict';
const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://localhost/upload-files-database2',{}).then(()=>console.log('connected to mongodb'))
}