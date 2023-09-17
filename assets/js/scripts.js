// progress bar
document.addEventListener('DOMContentLoaded', function () {
    let containerA = document.getElementById('CircleA');
  
    let circleA = new ProgressBar.Circle(containerA, {
      color: '#64DAF9',
      strokeWidth: 8,
      duration: 1400,
      from: { color: '#AAA' },
      to: { color: '#65DAF9' },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 60);
        circle.setText(value);
      },
    });
    let containerB = document.getElementById('CircleB');
  
    let circleB = new ProgressBar.Circle(containerB, {
      color: '#64DAF9',
      strokeWidth: 8,
      duration: 1600,
      from: { color: '#AAA' },
      to: { color: '#65DAF9' },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 270);
        circle.setText(value);
      },
    });
    let containerC = document.getElementById('CircleC');
  
    let circleC = new ProgressBar.Circle(containerC, {
      color: '#64DAF9',
      strokeWidth: 8,
      duration: 1800,
      from: { color: '#AAA' },
      to: { color: '#65DAF9' },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 300);
        circle.setText(value);
      },
    });
    let containerD = document.getElementById('CircleD');
  
    let circleD = new ProgressBar.Circle(containerD, {
      color: '#64DAF9',
      strokeWidth: 8,
      duration: 2000,
      from: { color: '#AAA' },
      to: { color: '#65DAF9' },
      step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        let value = Math.round(circle.value() * 400);
        circle.setText(value);
      },
    });
    //inicianod o louder ao iniciar
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e){

        let scroll = $(Window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0){

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }

    });

    //parallax
    setTimeout(function(){

        $('#data-area').parallax({imageSrc: '/assets/img/parallax.jpg'});
        $('#apply-area').parallax({imageSrc: '/assets/img/pattern.png'});

    }, 250);
  
    
});
  