const rotatorCase = document.querySelectorAll('.rotator__case');
let i = 0;
let speed = (+document.getElementsByClassName('rotator__case_active')[0].getAttribute('data-speed'));

let timer = setTimeout(function updateHtml() {
  if (i === rotatorCase.length) {
    i = 0;
  }
  if (i > 0 && rotatorCase[i - 1].className.includes('rotator__case_active')) {
      rotatorCase[i - 1].classList.remove('rotator__case_active');
  } else if (i === 0 && rotatorCase[rotatorCase.length - 1].className.includes('rotator__case_active')) {
    rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active')
  }
  
  rotatorCase[i].classList.add('rotator__case_active');
  const span = document.getElementsByClassName('rotator__case_active')[0];
  speed = (+span.getAttribute('data-speed'));
  const color = span.getAttribute('data-color');
  span.style.color = color
  console.log(speed, Date());
  timer = setTimeout(updateHtml, speed);

  i = i + 1;
}, 1000)