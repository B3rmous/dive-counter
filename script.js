var boxes = document.querySelectorAll('.box');
var total = document.getElementById('total');
var count = 0;

for (var i = 0; i < boxes.length; i++) {{
  boxes[i].addEventListener('click', function() {{
    var counter = this.querySelector('.counter');
    var clicks = parseInt(counter.innerHTML);
    counter.innerHTML = clicks + 1;
    count += 1;
    total.innerHTML = count;
    if (count >= 100) {{
      total.style.color = 'red';
    }}
  }});
}}