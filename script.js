var current = null;
document.querySelector('#username').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

function login() {
    let username = document.getElementById('formlogin').username.value;
    let password = document.getElementById('formlogin').password.value;
    let Result = document.getElementById('wrong');

    if (username == 'XIPPLG1' && password == '1') {
        window.open("index.html", "_self");
    } else if (username == 'SPANDELAGO' && password == '123') {
        window.open("index.html", "_self");
    } else {
        Result.innerHTML = 'AKSES SALH SILAHKAN MINTA AKSES KEPADA ADMIN ';
    }
}




