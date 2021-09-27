const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // balls[0].style.left = x;
  // balls[0].style.top = y;
  // balls[0].transform = 'translate(-' + x + ',-' + y + ')';

  console.log(balls.length);
  for (let i=0; i < balls.length; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
  // balls.forEach( element => {
  //   balls[element].style.left = x;
  //   balls[element].style.top = y;
  //   balls[element].transform = 'translate(-' + x + ',-' + y + ')';
  // })
};
