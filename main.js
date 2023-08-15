let secIndex = 0 //セクション管理
const sections = 8
const secInfo = [
  {
    index: 1,
    url: './img/00_top.JPG',
    title: '富士山',
    txt: '2019年、コロナ前最後の夏、富士山頂への挑戦'
  },
  {
    index: 2,
    url: './img/1lodge_landscape.JPG',
    title: '五合目',
    txt: '多くの人が賑わう富士五合目、観光客も多く訪れる'
  },
  {
    index: 3,
    url: './img/3hana_pen.JPG',
    title: '七合目',
    txt: '景色の良さに定評のある7合目'
  },
  {
    index: 4,
    url: './img/5_landscape.JPG',
    title: '七合目道中',
    txt: '振り返ると富士山の裾野の絶景が広がる'
  },
  {
    index: 5,
    url: './img/8ho-raikan.JPG',
    title: '八合目',
    txt: '多くの山小屋が見え始める'
  },
  {
    index: 6,
    url: './img/9_tomoe.JPG',
    title: '本八合目',
    txt: 'ご来光のために山小屋で一泊。多くの外国人と宿を共にする'
  },
  {
    index: 7,
    url: './img/10_night.JPG',
    title: '朝三時、出発',
    txt: '真冬のような寒さの中、ご来光のために行列に混じり出発'
  },
  {
    index: 8,
    url: './img/12_daybreak..JPG',
    title: '九合目、夜明け',
    txt: '大行列の山頂付近で夜明けを迎える'
  },
  {
    index: 9,
    url: './img/top.JPG',
    title: '山頂',
    txt: '極寒の富士山頂に到着'
  }
]
let isAnimating = false
let timerId = 0 //スクロールされたときにタイマーをキャンセルする用
const setTime = 5000


function init () {
  let top = $('#top')
  let img = $('#imageTop')
  top.addClass('hidden').on('transitionend', function () {
    top.find('img').attr('src', secInfo[0].url)
    top.find('p').html(secInfo[0].txt)
  })
  setTimeout(() => {
    top.removeClass('hidden')
    top.off('transitionend')
    img.css({
      transition: 'transform 30s', // transitionを更新
      transform: 'scale(1.5)'
    })
  }, setTime)
}
init()

$('#btnStart').click(() => {
  let top = $('#top')
  let img = $('#imageTop')
  top.addClass('hidden').on('transitionend', function () {
    // top.css('transition', 'transform 0s')
    top.find('img').attr('src', secInfo[0].url)
    top.find('p').html(secInfo[0].txt)
    // setTimeout(() => {
    //   top.removeClass('hidden')
    //   top.off('transitionend')
    // }, 990 );
  })
  img.css({
    transition: 'transform 1s', // transitionを更新
    transform: 'scale(1)',

  })
  secIndex++
  ScrollSection()
  $('#btnStart').hide()
})

function ScrollSection () {
  console.log(secIndex);
  isAnimating = true

  //書き換え先のindexの情報を取得
  let imgSrc = secInfo[secIndex].url
  let txt = secInfo[secIndex].txt
  let title = secInfo[secIndex].title

  //書き換え
  let top = $('#top')
  let h1title = $('#h1title')

  h1title.addClass('hidden').on('transitionend', () => {
    h1title.html(title)
    h1title.removeClass('hidden')
    h1title.off('transitionend')
    h1title.css({
      'transition': 'opacity .5s', // transitionを更新
      'justify-content': 'center',
      'align-items': 'center',
      'font-size': '4rem'
    })

    top.addClass('hidden').on('transitionend', function () {
      console.log(imgSrc);
      top.find('img').attr('src', imgSrc)
      top.find('p').html(txt)
      // top.removeClass('hidden')
      // top.off('transitionend')
    })
    setTimeout(() => {
      h1title
        .css({
          'transition': 'all  .5s', // transitionを更新
          'align-items': 'flex-start',
          'justify-content': 'flex-start',
          'font-size': '3rem' // フォントサイズを2remに設定
        })

      top.removeClass('hidden')
      top.off('transitionend')
    }, setTime)
  })

  

  timerId = setTimeout(() => {
    secIndex++
    if (secIndex > sections) {
      secIndex = sections
      return
    }
    ScrollSection()
  }, setTime * 4)
}

