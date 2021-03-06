const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/user');

passport.use(new LocalStrategy({
     usernameField: 'email'
},function(email,password,done)
{
   User.findOne({email:email},function(err,user){
       if(err)
       {
           console.log('error in finding user---->>passport');
           return done(err);
       }
      if(!user || user.password!=password)
      {
          console.log('Invalid username/password');
          return done(null,false);
      }
      return done(null,user);
   });
}
));

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});

// deserializing the user from the key in the cookie
passport.deserializeUser(function(user,done){
    user.findById(id,function(err,user){
        if(err)
        {
            console.log('error in finding user---->>passport');
           return done(err);
        }
        return done(null,user);
    });

});
module.exports=passport;