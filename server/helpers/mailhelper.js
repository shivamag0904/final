// const mailer = (email,Otp) =>{
//   var nodemailer = require('nodemailer');
//   var transporter = nodemailer.createTransport({
//     service:'gmail',
//     port:587,
//     secure:false,
//     auth:{
//       user:'code@gmail.com',
//       pass:'9898998'
//     }
//   });

//   var mailOptions = {
//     from: 'code@gmail@gmail',
//     to: 'ram@gmail.com',
//     subject:'Sending Email using node js',
//     text:'thank you sir!'
//   };

//   transporter.sendMail(mailOptions,function(error,info){
//     if(error){
//       console.log(error);
//     }
//     else{
//       console.log('Email sent:' + info.response);
//     }
//   });
// }