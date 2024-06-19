
$('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
  let $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(800);
  
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginButton').addEventListener('click', function() {
      window.location.href = 'loginForm.html'; // Redirect to login page
  });

  document.getElementById('signinButton').addEventListener('click', function() {
      document.getElementById('loginForm').scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the login form section
  });
});

  

 users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  const user = { username, email, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  let msg2 = 'User registered successfully';
  document.getElementById('error2').innerHTML = msg2;
  // setTimeout(name2=>{
  //   window.location.href = 'regLogin.html';
  // },3000)
  username.classList.add('disable')
 
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    // alert('Login successful');
    window.location.href = 'index.html'; // Redirect to homepage
  } else {
    let msg = 'Invalid credentials';
    document.getElementById('error').innerHTML = msg;
  }
});


