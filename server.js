var application_root     =__dirname;
var express              =require('express');
var bodyParser           =require('body-parser');
var path                 =require('path');
var logger               =require('morgan');
var session              =require('express-session');
var bcrypt               =require('bcrypt');
var models               =require('./models');
var allergyRoutes        =require('./routers/allergy_routes.js');
var diagnosisRoutes      =require('./routers/diagnosis_routes.js');
var medicationRoutes     =require('./routers/medication_routes.js');
var surgeryRoutes        =require('./routers/surgery_routes.js');
var userRoutes           =require('./routers/user_routes.js');
var userInfoRoutes       =require('./routers/userinfo_routes.js');
var immunizationRoutes   =require('./routers/immunization_routes.js');   

var app = express(); 


app.use( logger('dev') );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( session({
    secret: 'ballersballin',
    resave: false,
    saveUninitialized: true
}));

app.use( express.static( path.join( application_root, 'public' )))

//============== Routes =================
app.use('/allergies', allergyRoutes);
app.use('/immunizations', immunizationRoutes);
app.use('/diagnoses', diagnosisRoutes);
app.use('/medications', medicationRoutes);
app.use('/surgeries', surgeryRoutes);
app.use('/userinfos', userInfoRoutes);
app.use('/users', userRoutes);


app.listen(3000, function() {
	console.log('Server listening on 3000...');
});

module.exports = app;
