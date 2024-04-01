$(function(){
    // .container.container__stars 요소를 선택합니다.
    const starsContainer = $('.container.container__stars');
 
    // 10개의 별을 생성하여 추가합니다.
    for (let i = 0; i < 12; i++) {
      // 새로운 div 요소를 생성하고 'star' 클래스를 추가한 후 .container.container__stars 요소에 추가합니다.
      starsContainer.append('<div class="star"></div>');
    }
    $('.bora_door, .intro_mouse').click(function(){
      $(".drop").css('display','none');
      
   //gsap으로 헤엄치기 역동적 모션
   let imges = new gsap.timeline();
 
   imges.to(".intro_people", {
     duration: 0.7,
     rotation: -30, 
     ease: "power2.out",
   });
 
   imges.to(".intro_people", {
     duration: 0.7,
     rotation: 10, 
     ease: "power2.out",
    });
    
   imges.to(".intro_people", {
     duration: 0.7,
     rotation: -5, 
     ease: "power2.out",
   });
   imges.to(".intro_people", {
     duration: 0.7,
     rotation: 5, 
     ease: "power2.out",
    });
    
 
      $('.intro_people').animate({
          'x': '+=30' // 혹은 원하는 만큼 이동하는 값 설정
      }, 3500, function() {
          // 이동이 완료되면 실행되는 코드 작성
      $('.popup').addClass('on')
      $('html').css("overflow-y", "hidden")
      $('.popup').css("z-index","999")
      $('.door').css('transform', 'translate(-50%, -50%) rotateY(0deg)');
      // id 자리 지우고 
      //'div~~~~ embed/'+ 아이디+ '"~~~~~~~~~~~div"'
      //길다고 엔터 치지말기 ! 한줄에 입력하기.
      $('.popup').animate({
        scaleX: 3.8,
        scaleY: 3.8
      }, {
        duration: 6000, // 6초
        step: function(now, fx) {
          $(this).css('transform', 'scale(' + now + ')');
        }
      });  
 
     $('.door').css({
        // 앞 문 애니메이션
       'transition': 'transform 2s',
       'transform': 'translate(-50%, -50%) rotateY(90deg)'
       }).on('transitionend', function() {
       // 뒷문으로 이미지 변경
       $('.door').attr('src', 'images/bora_door_back.png');
       // 뒷 문 애니메이션
       $('.door').css({
           'transition': 'transform 2s',
           'transform': 'translate(-50%, -50%) rotateY(180deg)'
       }).on('transitionend', function() {
         window.location.href = "home.html";
           // 두 번째 애니메이션이 완료된 후에 페이지를 본문으로 이동
       });
      });
 
      });
    })  
  
    let blend = 50; // 작으면 작을수록 경계가 진다.
    let delay = -10; // 그라데이션 시작 지점
    let windowWidth = $(window).width();
  
    $(document).on('mousemove', function(e) {
      let mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
      let c1 = mouseX - blend;
      let c2 = mouseX + blend;
      $('#section').css('background', 'linear-gradient(to right, #330867 ' + c1 + '%, #30cfd0 ' + c2 + '%)');
    });
 });