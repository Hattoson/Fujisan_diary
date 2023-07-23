let secIndex = 0 //セクション管理
const sections = $('.section')
let isAnimating = false
let timerId = 0;    //スクロールされたときにタイマーをキャンセルする用

// $("#imageTop").css("transform","scale(4)")
// sections.find("p").addClass("active")
// console.log(sections.eq(secIndex));

function init () {
    setTimeout(() => {
        secIndex++;
        ScrollSection()
      }, 10000);
  $(document).ready(function () {
    const sections = $('.section')
    sections.find('p, h1').addClass('active')
    $(window).scrollTop(0) //スクロール位置を強制的にトップへ
  })
  $('#imageTop').css('transition', 'transform 30s ease-in-out')
  setTimeout(function () {
    $('#imageTop').css('transform', 'scale(4)')
  }, 1)
}
init();



function ScrollSection(){

  isAnimating = true
  sections.find('p, h1').removeClass('active')

  $('html,body').animate(
    {
      scrollTop: sections.eq(secIndex).offset().top
    },
    1000,
    () => {
      isAnimating = false
      sections.find('p, h1').addClass('active')
    }
    
  )
  timerId= setTimeout(() => {
    secIndex++;
    if (secIndex > sections.length - 1) {
        secIndex = sections.length - 1
        return
    }
    ScrollSection()
  }, 8000);
  if (secIndex == 0) {
    $('#imageTop').css('transition', 'transform 30s ease-in-out')
    setTimeout(function () {
      $('#imageTop').css('transform', 'scale(4)')
    }, 1)
  } else {
    $('#imageTop').css('transition', '')
    setTimeout(function () {
      $('#imageTop').css('transform', 'scale(1)')
    }, 1)
  }
}


function handleScroll (e) {
  if (isAnimating) return

  if (e.wheelDelta > 0) {
    secIndex--
  } else {
    secIndex++
  }

  if (secIndex < 0) {
    secIndex = 0
    return
  } else if (secIndex > sections.length - 1) {
    secIndex = sections.length - 1
    return
  }
  clearTimeout(timerId)
  ScrollSection()
//   isAnimating = true
//   sections.find('p, h1').removeClass('active')

//   $('html,body').animate(
//     {
//       scrollTop: sections.eq(secIndex).offset().top
//     },
//     1000,
//     () => {
//       isAnimating = false
//       sections.find('p, h1').addClass('active')
//     }
//   )

//   if (secIndex == 0) {
//     $('#imageTop').css('transition', 'transform 30s ease-in-out')
//     setTimeout(function () {
//       $('#imageTop').css('transform', 'scale(4)')
//     }, 1)
//   } else {
//     $('#imageTop').css('transition', '')
//     setTimeout(function () {
//       $('#imageTop').css('transform', 'scale(1)')
//     }, 1)
//   }
}
function moveScrollTop () {
  secIndex = 0
  $('html,body').animate(
    {
      scrollTop: sections.eq(secIndex).offset().top
    },
    1000,
    () => {
      isAnimating = false
    }
  )
    init();
}
window.addEventListener('mousewheel', handleScroll, { passive: false })
window.addEventListener('DOMMouseScroll', handleScroll, { passive: false })
