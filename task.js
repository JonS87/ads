const rotatorCase = document.querySelectorAll('.rotator__case');
const i = 0;

setInterval(() => {
  if (i === rotatorCase.length) {
    i = 0;
  }
  if (i > 0 & rotatorCase[i - 1].contains('rotator__case_active')) {
    rotatorCase[i - 1].remove('rotator__case_active');
  } else if (i = 0 & rotatorCase[rotatorCase.length - 1].contains('rotator__case_active')) {
    rotatorCase[rotatorCase.length - 1].remove('rotator__case_active')
  }

  rotatorCase[i].add('rotator__case_active');
  i++;
}, 1000)