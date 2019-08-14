module.exports = {
   welcomeMessage: `<h2>Welcome to Pluto API!!</h2>`,
   errorMessage: 'Oops! We missed that.Hang on, let\'s fix it together',
   regWelcome: function (firstName) {
      return `Hooray! Welcome Aboard, ${firstName}!!`
   },
   loginWelcome: function (firstName) {
      return `Welcome ${firstName}!`
   },
   profileUpdated: 'User data successfully updated',
   profileDeleted: 'User data successfully deleted',
   alreadyInUse: 'Email already in use',
   invalid: 'Oops! Invalid Credentials',
   missingFields: 'You are missing some required fields!',
   noUserData: 'Please supply user data!',
   tokenInvalid: 'Token validation failed!',
   supplyToken: 'Please supply token!',
   invalidEmail: 'Not a valid email address format',
   newEntry: 'New entry successfully created!',
   entryRemoved: function (role) {
      return `${role} has been successfully removed from your list`
   },
   mailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}