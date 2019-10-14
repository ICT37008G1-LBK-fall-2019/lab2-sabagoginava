var myPass = 'secured';
      var pass = prompt('Password:').toString();
        
        while (pass != myPass) {
            
            if (pass !== myPass) {
                 pass = prompt('Wrong Passowrd, Try Again!');
            }else {
        alert('Ok');
   }
            
}