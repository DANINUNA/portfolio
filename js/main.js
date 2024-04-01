$(function(){
    const headermenu =$('header ul li'),
    contents =$('main>section')

    //headermenu click 했을때 on 해
    headermenu.click(function(){
        //형제요소들 리무브 클래스 해
        //내가 클릭한애 on해
        console.log(this)
        headermenu.removeClass('on')
        $(this).addClass('on')
        
        //click 했을때 해당 section으로 이동
        let idx = $(this).index()
        let section = contents.eq(idx)
        let sectionD = section.offset().top;

        $('html,body').animate({
            scrollTop:sectionD
        })
    })
    
    $(window).scroll(function(){
        contents.each(function(){          // each :각각에게 적용 하겠다.
            if($(this).offset().top <=$(window).scrollTop() + 130){ 
                let idx = $(this).index();
                $(".header-wrap nav ul li").removeClass('on');
                $(".header-wrap nav ul li").eq(idx).addClass('on');
                
            }
        })
    })
    



    //햄버거버튼
    $(document).ready(function(){
        // 햄버거 버튼 클릭 시
        $('.hamburger').click(function() {
            $(this).toggleClass('active');
            $('body').toggleClass('bg-active');
    
            // body의 bg-active 클래스에 따라 body::before 요소를 보이거나 숨깁니다.
            if ($('body').hasClass('bg-active')) {
                $('body::before').show(); 
            } else {
                $('body::before').hide(); 
            }
    
            // 팝업 메뉴를 토글합니다.
            $('.popup-menu').toggleClass('active');
    
            // 팝업 메뉴가 활성화된 후에만 텍스트 애니메이션을 시작합니다.
            if ($('.popup-menu').hasClass('active')) {
                setTimeout(function() {
                    $('.popup-menu ul li').addClass('textAppear');
                }, 1000); // 1초 후에 textAppear 클래스 추가
            } else {
                // 팝업 메뉴가 비활성화되면 텍스트 애니메이션을 제거합니다.
                $('.popup-menu ul li').removeClass('textAppear');
            }
        });
    });

$(document).ready(function(){
    // alert('ddd')

    //클립 안에있는 이미지에 마우스가 엔터 돼씅ㄹ 때 할 일..
    // $('.overImg img').mouseenter(function(){
    // $(this).attr('src', $(this).data('bossclip'))
    //  //this =>이미지가 여러개 있는데(지금 여기에는 한 개 뿐이지만...)내가 선택 한 이것에 적용을 시키겠다...
    //  //attr=> 속성
    // })

    // $('.overImg img').mouseleave(function(){
    // $(this).attr('src', $(this).data('image'))
    // })
    //화살표 함수는 this 안먹는다!

    $('.rose').click(function(){
    $('.popup').addClass('on')
    $('html').css("overflow-y", "hidden")
    $('.popup').css("z-index","999")
    $('.popup').append( '<div class="door"><></div>"')
     // id 자리 지우고 
     //'div~~~~ embed/'+ 아이디+ '"~~~~~~~~~~~div"'
     //길다고 엔터 치지말기 ! 한줄에 입력하기.
    })

    $('.popup .popupfull').click(function(){
    $('.popup').removeClass('on')
    $('html').css("overflow-y", "visible")
    $('.popup .iframebox').remove() // 이렇게하면 팝업 했을 때 아이프레임박스가 한 개 만뜬다/...?  
    })
})
})

//point of view 부분 이미지 효과//
let imges = new gsap.timeline({
repeat:-1,
});
// imges.from(".firstframe", {
//     duration: 1,
//     rotate: 10,
// });
// imges.from(".firstframe", {
//     duration: 1,
//     rotate: -10,
// });
gsap.from(".firstpeople", {
    duration: 4, 
    opacity: 0, 
    scale: 0.2, 
    ease: "power2.out",
  });
gsap.to(".firstpeople", {
    duration: 1,
    top:100,
    ease: "power2.out",
    delay: 1 
  });



  //INTRODUCTION
  AOS.init();


  gsap.fromTo(".secondpeople", 
  {opacity: 0, y: "-100%"}, 
  {duration: 3, opacity: 1 ,y: "0", 
  scrollTrigger: {
      trigger: ".secondpeople", 
      start: "top center", 
      end: "bottom center", 
      scrub: true,
      onComplete: function() {
          gsap.to(".secondpeople", {duration: 1, y: "-20px"});
      }
  }
});

gsap.to(".secondpeople", 
  {duration: 3, rotation: 360, ease: "none", repeat: 2, 
  scrollTrigger: {
      trigger: ".secondpeople", 
      start: "top center", 
      end: "bottom center", 
      scrub: true
  },
  onComplete: function() {
      gsap.to(".secondpeople", {duration: 1, y: "-20px"});
  }
});


//CLONECODING

gsap.to(".arrow", {
    rotation: "+=5", // 요소를 한 바퀴만큼 회전
    repeat: -1, // 무한 반복
    yoyo: true, // 왔다갔다 반복
    duration: 4 // 4초 동안 애니메이션 수행
});

gsap.fromTo(".arrow", {rotationY: 0}, {rotationY: 10, duration: 4, repeat: -1});




//랜디스 gold 간판
gsap.to(".randysgold", {
    opacity: 0.9, 
    duration: 0.2, 
    repeat: -1, 
    yoyo: true 
  });

