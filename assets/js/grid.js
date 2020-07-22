var gridItem = document.querySelectorAll('.grid-item');
var showcaseItem = document.querySelectorAll('.showcase');
var filterBtn = document.querySelectorAll('.filter-btn');
let overlays = document.querySelectorAll('.mywork-overlay');

function getAttributes(event) {
  event.preventDefault();

  var thisValue = event.target.getAttribute('data-filter');
  let thisBtn = event.target;


  for (let a = 0; a < gridItem.length; a++) {
    const gridFilterAttr = gridItem[a].getAttribute('data-filterType');

    if (thisValue == gridFilterAttr) {
      gridItem[a].classList.add('active');
    } else if (thisValue !== gridFilterAttr) {
      gridItem[a].classList.remove('active');
    }
  }

  if (thisValue == 'all' && showcaseItem.className !== 'grid-item showcase active') {
    for (let i = 0; i < showcaseItem.length; i++) {
      showcaseItem[i].classList.add('active');
    }
  }

  if (thisBtn.classList.contains('active')) {} else {
    for (let c = 0; c < filterBtn.length; c++) {
      filterBtn[c].classList.remove('active');
    }
    thisBtn.classList.add('active');
  }
}

for (let b = 0; b < filterBtn.length; b++) {
  filterBtn[b].addEventListener('click', getAttributes);
}

// Overlay
let workOverlay = document.querySelectorAll('.mywork-overlay');

function viewOverlay(event) {
  event.preventDefault();
  let thisValue = event.target.getAttribute('data-project');
  let thisBtn = event.target;
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  for (let a = 0; a < workOverlay.length; a++) {
    const projectFilterAttr = workOverlay[a].getAttribute('data-projectType');

    if (thisValue == projectFilterAttr) {
      if (viewportWidth <= 550) {
        document.body.style.overflow = "hidden"
      }
      for (let i = 0; i < workOverlay.length; i++) {
        workOverlay[i].classList.remove('active')
      }
      if (viewportWidth >= 550) {
        document.body.style.overflow = "visible"
      }
      workOverlay[a].classList.toggle('active');
    }

    // Mobile Viewport


  }
}

for (let c = 0; c < gridItem.length; c++) {
  gridItem[c].addEventListener('click', viewOverlay);
}

// Close Overlay
let closeBtn = document.querySelectorAll('.closebtn');

function closeOverlay() {
  for (let i = 0; i < workOverlay.length; i++) {
    workOverlay[i].classList.remove('active')
  }
  document.body.style.overflow = 'visible';
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', closeOverlay);
}