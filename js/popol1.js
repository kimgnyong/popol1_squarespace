;(function($){

    var popol = {
        init: function(){
            this.heaerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.footerFn();
        },
        heaerFn:function(){
            var $window     = $(window);
            var $winW       = $(window).width();
            var $header     = $('#header');
            var $mainBtn    = $('#header .main-btn');
            var $navGap     = $('#header .nav-gap');
            var $navDd      = $('#header .mov-btn')
            var $hamBtn     = $('#header .hamberger-btn');
            var $modal      = $('#mobile-modal');
            var $mobileMenuBtn1 = $('#mobile-modal ul > li > a ').eq(0);
            var $mobileMenuBtn2 = $('#mobile-modal ul > li > a ').eq(2);
            var $slideWrap1      = $('#mobile-modal .nav-wrap > ul > li > .sub-menu-wrap1');
            var $slideWrap2      = $('#mobile-modal .nav-wrap > ul > li > .sub-menu-wrap2');
            var paralIf         =0;
            

            function resizeFn(){
                $winW    = $(window).innerWidth();
                $winH = $(window).innerHeight();
                $header.css({width:$winW});
                $modal.css({height:$winH});
                if($winW>1023){
                    if( $hamBtn.hasClass('addClickOn') == false ){
                        $('body').css({'overflow-y':'visible'});                      
                    }
                    $hamBtn.removeClass('addClickOn');
                    $modal.stop().slideUp(0);
                }
            }
            resizeFn();
            // logoChangeFn();
            
                $window.resize(function(){
                    resizeFn();
                    // logoChangeFn();
                  })

            // function logoChangeFn(){
            //     console.log($winW);
            //     if($winW<=1023){
            //         $('#header .logo-box >a> img').attr('src','./img/LOGO2.png');
            //     }else if($winW>1023){
            //         $('#header .logo-box >a> img').attr('src','./img/LOGO.png');
            //     }
            // }
            function navSlideFn(){
                $mainBtn.on({
                    mouseenter:function(){
                        $(this).next().stop().slideDown(500);
                    }
                })
                $navGap.on({
                    mouseleave:function(){
                        $mainBtn.next().stop().slideUp(200);
                    }
                })
            }
            navSlideFn();
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section1').offset().top  ){
                  if(paralIf==0){
                    paralIf=1;
                    $('#skip li a').css({background:'#000'});
                }
            }
            if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $('#skip li a').css({background:'transparent'});
                }
            });



            function mobileSlideFn(){
                $hamBtn.on({
                    click:function(){
                        $hamBtn.stop().toggleClass('addClickOn');
                        $modal.stop().slideToggle(300);
                        if( $hamBtn.hasClass('addClickOn') == false ){
                            $('body').css({'overflow-y':'visible'});                      
                        }
                        else{
                            $('body').css({'overflow-y':'hidden'});
                        }
                    }
                })
            }
            function mobileSubFn1(){
                $mobileMenuBtn1.on({
                    click:function(){
                        $slideWrap1.stop().slideToggle(300);
                    }
                })
            }
            function mobileSubFn2(){
                $mobileMenuBtn2.on({
                    click:function(){
                        $slideWrap2.stop().slideToggle(300);
                    }
                })
            }
            mobileSlideFn()
            mobileSubFn1();
            mobileSubFn2();

            

            $window.on({
                scroll:function(){
                    var scrollValue = $(document).scrollTop();
                    if(scrollValue == 0){
                        $header.css({background:'transparent'})
                    }else{
                        $header.css({background:'#000'})
                    }
                }
            })
            $navDd.on({
                mouseenter:function(){
                    $navDd.removeClass('arrowMove');
                    $(this).addClass('arrowMove');
                }
            })
            $navDd.on({
                mouseleave:function(){
                    $navDd.removeClass('arrowMove');
                }
            })




        },
        section1Fn:function(){
            var $window = $(window);
            var $winW = $window.width();
            var $winH = $window.height();
            var $section1 = $('#section1');
            var $container = $('#section1 .container');
            var $parwrap = $('#section1 .container-gap > div');
            var $parwrap1 = $('#section1 .banner-container > img:nth-child(1)');
            var $parwrap2 = $('#section1 .banner-container > img:nth-child(2)');
            var $parwrap3 = $('#section1 .banner-container > img:nth-child(3)');
            var t = 0;
            var setId = null;
            

            function resizeFn(){
                $winW    = $(window).width();
                $winH = $(window).height();
                $section1.css({width:$winW});
                $container.css({width:$winW});
            }
            resizeFn();
            

            $window.resize(function(){ 
                resizeFn();
              });
              function pallFn(t){
                  if(t==1){
                      $parwrap.addClass('set1paller');
                    }else if(t==2){
                      $parwrap1.addClass('set1paller');
                    }else if(t==3){
                      $parwrap2.addClass('set1paller');
                    }else if(t==4){
                      $parwrap3.addClass('set1paller');
                    }else if(t == 5){
                        t = 0;
                        clearInterval(setId);
                    }
                }
                
                function autoPallFn(){
                    t = 0;
                    setId = setInterval(function(){
                        t++;
                        pallFn(t);
                    }, 400);
                }
                setTimeout(autoPallFn);
                

        },
        section2Fn:function(){
            var $spanMoveWrap =  $('#section2 .span-bar-wrap');
            var $spanBar      =  $('#section2 .span-bar');
            var $subArr1      =  $('#section2 .span-wrap > span > a > span:nth-of-type(1)');
            var $subArr2      =  $('#section2 .span-wrap > span > a > span:nth-of-type(2)');
            var paralIf       = 0;
            var $row2Div      =  $('#section2 .row1-gap > div')

            // 페럴럭스
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section2').offset().top-700  ){
                  if(paralIf==0){
                    paralIf=1;
                    $row2Div.addClass('addParalShow');
                  }                
                }
    
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $row2Div.removeClass('addParalShow');
                }
            });
            //페럴럭스 끝


            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })
            
            function moveArrFn(){
                $subArr1.animate({'left':5},600);
                $subArr2.animate({'left':20},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })

        },
        section3Fn:function(){
            var $spanMoveWrap =  $('#section3 .move-wrap');
            var $spanBar      =  $('#section3 .span-bar');
            var $subArr1      =  $('#section3 .arr1');
            var $subArr2      =  $('#section3 .arr2');
            var $headGap      =  $('#section3 span');
            var $textGap      =  $('#section3 .text-gap')
            var paralIf1       =  0;
            var paralIf2       =  0;

                // 페럴럭스
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section3').offset().top-740  ){
                  if(paralIf1==0){
                    paralIf1=1;
                    $headGap.addClass('addParalShow');
                  }                
                }
    
                if( $(window).scrollTop() === 0 ){
                    paralIf1=0;
                    $headGap.removeClass('addParalShow');
                }

                if( $(window).scrollTop() >= $('#section3').offset().top-600  ){
                    if(paralIf2==0){
                      paralIf2=1;
                      $textGap.addClass('addParalShow');
                    }                
                  }
      
                  if( $(window).scrollTop() === 0 ){
                      paralIf2=0;
                      $textGap.removeClass('addParalShow');
                  }
            });
                    //페럴럭스 끝

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':300}, 600,function(){
                        moveArrFn();
                    });
                }
            })
            
            function moveArrFn(){
                $subArr1.animate({'left':5},600);
                $subArr2.animate({'left':20},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })
        },
        section4Fn:function(){
            var $winW          =  $(window).innerWidth();
            var sec4          =  $('#section4')
            var $spanMoveWrap =  $('#section4 .move-wrap');
            var $spanBar      =  $('#section4 .span-bar2');
            var $subArr1      =  $('#section4 .arr1');
            var $subArr2      =  $('#section4 .arr2');
            var $menuLi       =  $('#section4 li');
            var $menuLiA       =  $('#section4 li a');
            var $desctopImgWrap = $('#section4 .desc-img');
            var $mobileImgWrap = $('#section4 .mobile-img');
            var $desctopImgWrapWrap = $('#section4 .desktop-img-wrap');
            var $mobileImgWrapWrap = $('#section4 .mobile-img-wrap');
            var $headTitle       = $('#section4 h2.head-gap > span');
            var $col1GapLi       = $('#section4 .row2-col1-gap > li');
            var paralIf1        = 0;
            var paralIf2        = 0;
            var x =0;
            var y =0;

            function responseFn(){
                $winW = $(window).innerWidth();
            }responseFn();
            setTimeout(responseFn,20);
            $(window).resize(function(){
                responseFn();
            })

            //페럴럭스
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section4').offset().top-900  ){
                  if(paralIf1==0){
                    paralIf1=1;
                    $headTitle.addClass('addParalShow');
                  }                
                }
    
                if( $(window).scrollTop() === 0 ){
                    paralIf1=0;
                    $headTitle.removeClass('addParalShow');
                }

                if( $(window).scrollTop() >= $('#section4').offset().top-500  ){
                    if(paralIf2==0){
                      paralIf2=1;
                      $col1GapLi.addClass('addParalShow');
                    }                
                  }
      
                  if( $(window).scrollTop() === 0 ){
                      paralIf2=0;
                      $col1GapLi.removeClass('addParalShow');
                  }
            });

            //페럴럭스 끝

            // 이미지 무브 이벤트( 이동이 발동될 영역 선언)
            // 이미지 무브를 할 이미지선언
            sec4.on({
                mousemove:function(e){
                    $winW = $(window).innerWidth();
                    if($winW > 1023){
                    x = ($desctopImgWrap.offset().left-e.pageX)*.03;
                    y = ($mobileImgWrap.offset().top-e.pageY)*.03;

                    $desctopImgWrapWrap.stop().css({top:y,right:x});
                    $mobileImgWrapWrap.stop().css({top:y*1.4,right:x*1.4});
                    }else if($winW <= 1023 && $winW>800){
                    x = ($desctopImgWrap.offset().left-e.pageX)*.03;
                    y = ($mobileImgWrap.offset().top-e.pageY-2000)*.03;

                    $desctopImgWrapWrap.stop().css({top:y,right:x});
                    $mobileImgWrapWrap.stop().css({top:y*1.4,right:x*1.4});
                    }else {
                        $desctopImgWrapWrap.stop().css({top:'3vw'});
                    }
                }
            })

            $menuLi.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $desctopImgWrap.stop().css({background:'url(./img/desctop'+idx+'.jpg) no-repeat 50% 50%'});
                        $desctopImgWrap.stop().css({'background-size':'cover'});
                        $mobileImgWrap.stop().css({background:'url(./img/mobile'+idx+'.jpg)no-repeat 50% 50%'});
                        $mobileImgWrap.stop().css({'background-size':'cover'});
                    }
                })
            })

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':300}, 600,function(){
                        moveArrFn();
                    });
                }
            })
            
            function moveArrFn(){
                $subArr1.animate({'left':5},600);
                $subArr2.animate({'left':20},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })
        },
        section5Fn:function(){
            var $limoconBtn = $('#section5 .limocon-btn');
            var $backColor  = $('#section5 .sect5-section')
            var $spanMoveWrap =  $('#section5 .text-wrap');
            var $spanBar      =  $('#section5 .span-bar');
            var $subArr1      =  $('#section5 .arr1');
            var $subArr2      =  $('#section5 .arr2');

            var $leftLogo    =  $('#section5 .sect5-menu-bar .imgbar > span');
            var $rightAside  =  $('#section5 .imgbar > div > span');
            var $asideLogo   =  $('#section5 .imgbar > div > .logo-img');
            var $centerBig   =  $('#section5 .sect5-center-text .imgtext > span');
            var $centerSmall =  $('#section5 .sect5-center-text .imgtext > div')

            var $pallarWrap   =  $('#section5 .container .row1');
            var $pallarWrapDec  = $('#section5 .sect5-wrap');
            var $pallarWraplim  = $('#section5 .row2 .limocon');
            var paralIf      =  0;
            var paralIf1      =  0;
            var $winW = $(window).innerWidth();
            var $window = $(window);

            function resizeFn(){
                $winW = $(window).innerWidth();
            }resizeFn();

            $window.resize(function(){
                resizeFn();
            })
            if($winW > 800){
                $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section5').offset().top-700  ){
                      if(paralIf==0){
                        paralIf=1;
                        $pallarWrap.addClass('add5pallar');
                          }                
                        }
                    
                    if( $(window).scrollTop() === 0 ){
                        paralIf=0;
                        $pallarWrap.removeClass('add5pallar');
                    }

                    if( $(window).scrollTop() >= $('#section5').offset().top-100  ){
                        if(paralIf1==0){
                          paralIf1=1;
                          $pallarWrapDec.addClass('add5pallar');
                          $pallarWraplim.addClass('add5pallar');
                            }                
                          }
                      
                      if( $(window).scrollTop() === 0 ){
                          paralIf1=0;
                          $pallarWrapDec.removeClass('add5pallar');
                          $pallarWraplim.removeClass('add5pallar');
                      }
                });
            }else if($winW <= 800){
                $(window).scroll(function(){
                    if( $(window).scrollTop() >= $('#section5').offset().top-600  ){
                      if(paralIf==0){
                        paralIf=1;
                        $pallarWrap.addClass('add5pallar');
                          }                
                        }
                    
                    if( $(window).scrollTop() === 0 ){
                        paralIf=0;
                        $pallarWrap.removeClass('add5pallar');
                    }

                    if( $(window).scrollTop() >= $('#section5').offset().top-400  ){
                        if(paralIf1==0){
                          paralIf1=1;
                          $pallarWrapDec.addClass('add5pallar');
                          $pallarWraplim.addClass('add5pallar');
                            }                
                          }
                      
                      if( $(window).scrollTop() === 0 ){
                          paralIf1=0;
                          $pallarWrapDec.removeClass('add5pallar');
                          $pallarWraplim.removeClass('add5pallar');
                      }
                });
            }

            
            
            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })
            
            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })


            

            // 클릭했을때 그 이미지로 바뀌는 함수
            $limoconBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        console.log(idx);
                      //데스크탑화면
                                                                // 어떤 버튼을 클릭했느냐에 따라 바뀌는 색깔이 다름
                        if(idx>1 && idx<4){
                            $backColor.css({background:'rgba(244,233,220)'})
                            $centerBig.css({color:'rgba(74,74,74)'});
                            $centerSmall.css({color:'rgba(255,255,255)',background:'rgba(74,74,74)'});
                            $leftLogo.css({color:'rgba(74,74,74)'});
                            $rightAside.css({color:'rgba(74,74,74)'});
                            $asideLogo.css({color:'rgba(74,74,74)',background:'rgba(74,74,74)'});
                            if(idx == 3){
                                $centerBig.css({color:'rgba(209,145,75)'});
                                $centerSmall.css({color:'rgba(255,255,255)',background:'rgba(209,145,75)'});
                            }
                        }
                        else if(idx <2){
                            $backColor.css({background:'rgba(255,255,255)'})
                            $centerBig.css({color:'rgba(209,145,75)'});
                            $centerSmall.css({color:'rgba(255,255,255)',background:'rgba(209,145,75)'});
                            $leftLogo.css({color:'rgba(74,74,74)'});
                            $rightAside.css({color:'rgba(74,74,74)'});
                            $asideLogo.css({color:'rgba(74,74,74)',background:'rgba(74,74,74)'});
                            if(idx<1){
                                $centerBig.css({color:'rgba(74,74,74)'});
                                $centerSmall.css({color:'rgba(255,255,255)',background:'rgba(74,74,74)'});
                            }
                        }
                        else if(idx>3){
                            $backColor.css({background:'rgba(38,74,79)'})
                            $leftLogo.css({color:'rgba(255,255,255)'});
                            $rightAside.css({color:'rgba(255,255,255)'});
                            $asideLogo.css({color:'rgba(255,255,255)',background:'rgba(255,255,255)'});
                            $centerBig.css({color:'rgba(255,255,255)'});
                            $centerSmall.css({color:'rgba(38,74,79)',background:'rgba(255,255,255)'});
                            if(idx==5){
                                $centerBig.css({color:'rgba(209,145,75)'});
                                $centerSmall.css({color:'rgba(38,74,79)',background:'rgba(209,145,75)'});
                            }

                        }
                        
                      //리모컨화면
                        $limoconBtn.removeClass('borderClick')

                        if(idx>3){
                            $(this).addClass('borderClick')
                        }else{
                            $(this).addClass('borderClick')
                        }
                    }
                })
            })
            
            $limoconBtn.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $limoconBtn.removeClass('borderOn')
                        $(this).addClass('borderOn')
                    },
                    mouseleave:function(){
                        $limoconBtn.removeClass('borderOn')
                    }
                })
            })

            

        },
        section6Fn:function(){
            var $slideBtn = $('#section6 .row234 > a');
            var $slideWrap = $('#section6 .slide-down-gap');
            var iven1       = null;
            var iven2       = null;
            var $spanMoveWrap =  $('#section6 .text-wrap');
            var $spanBar      =  $('#section6 .span-bar');
            var $subArr1      =  $('#section6 .arr1');
            var $subArr2      =  $('#section6 .arr2');
            var $pallarWrap   =  $('#section6 .row1-gap h2')
            var paralIf       = 0;

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section6').offset().top-700  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap.addClass('add6pallar');
                      }                
                    }
                
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap.removeClass('add6pallar');
                }
            });



            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })

            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);

            }

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })

              iven1 = $slideWrap.eq(0).stop().slideDown();
              iven2 = $slideBtn.eq(0).addClass('addSlideDown');
              setTimeout(iven1,200);
              setTimeout(iven2,200);
              $slideBtn.each(function(idx){
                  $(this).on({
                      click:function(){                  
                          $slideWrap.stop().slideUp(500);                  
                          $(this).stop().toggleClass('addSlideDown');
                          $(this).next().stop().slideToggle(500);
                          
                          for(i=0;i<$slideBtn.length;i++){
                              if(i!==idx){                                                           
                                  $slideBtn.eq(i).removeClass('addSlideDown');                                
                              }
                          }
                      }
                  });
              });
        },
        section7Fn:function(){
            var $slideWrap = $('#section7 .slide-wrap');
            var cnt = 0;
            var $spanMoveWrap =  $('#section7 .text-wrap');
            var $spanBar      =  $('#section7 .span-bar');
            var $subArr1      =  $('#section7 .arr1');
            var $subArr2      =  $('#section7 .arr2');
            var $nextBtn      =  $('#section7 .next-btn');
            var $prevBtn      =  $('#section7 .prev-btn');
            var setId         = null;
            var $textSlideWrap  = $('#section7 .textbox-slide-view');
            var $textSlideTextboxWrap = $('#section7 .textbox-wrap');
            var $noSlideImg     = $('#section7 #noSlideImg .img-wrap')
            var $noSlideMoveWrap     = $('#section7 #noSlideImg .img-view').innerWidth();
            var $slide          = $('#section7 .slide-wrap .slide');
            var $slideW         = $slide.innerWidth();
            var $window         = $(window);
            var $winW           = $(window).width();

            


            function resizeFn(){
                $winW   = $window.width();
                $slide.css({width:$winW});
                $slideW  = $slide.innerWidth();
                $noSlideMoveWrap     = $('#section7 #noSlideImg .img-view').innerWidth();
                // console.log($winW);
                // console.log($slideW);
                mainSlideFn()
                mainSlide3Fn()
            }resizeFn()

            $window.resize(function(){
                resizeFn();
            })

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })
            
            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
            }
            
            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })


            


            //  풀스크린 슬라이드 움직이는 부분 
                // 1 번 메인슬라이드함수
            
                function mainSlideFn(){
                    // console.log($slideW);
                    $slideWrap.stop().animate({left:$slideW*-cnt},800,'easeInExpo',function(){
                        if(cnt>2){cnt=0;}
                        if(cnt<0){cnt=2}
                        $slideWrap.stop().animate({left:-$slideW*cnt},0)
                    })
                }
            
                // 2번 다음으로 넘어가는함수
            
                function nextSlideFn(){
                    cnt++;
                    mainSlide3Fn()
                    textboxSlideFn();
                    mainSlideFn();
                }
                // 3번 이전으로 돌아가는 함수
            
                function prevSlideFn(){
                    cnt--;
                    mainSlide3Fn()
                    textboxSlideFn();
                    mainSlideFn();
                }
                // 4번 자동 슬라이드 함수
                function autoSlideFn(){
                    setId = setInterval(nextSlideFn,6000);
                }
                autoSlideFn(setId);
            
                // 페이지 버튼 클릭 함수
                $nextBtn.on({
                    click:function(){
                        if( !$slideWrap.is(':animated') && !$noSlideImg.is(':animated') ){
                            timerFn()
                            nextSlideFn();
                          }    
                    }
                })
                $prevBtn.on({
                    click:function(){
                        if( !$slideWrap.is(':animated') && !$noSlideImg.is(':animated')){
                            timerFn()
                            prevSlideFn();
                          }  
                    }
                })
            //  풀스크린 슬라이드 움직이는 부분 끝

            // 이미지 슬라이드 함수
                function mainSlide3Fn(){
                    
                    // console.log($noSlideImg.children().eq(cnt+1));
                    $noSlideImg.stop().animate({left:$noSlideMoveWrap*-cnt},900,'easeInExpo',function(){
                        if(cnt>2){cnt=0;}
                        if(cnt<0){cnt=2}
                        $noSlideImg.stop().animate({left:$noSlideMoveWrap*-cnt},0)
                    })
                }

            //이미지 슬라이드 함수 끝

            //텍스트박스 슬라이드 함수
                function textboxSlideFn(){
                    // console.log(cnt);
                    if(cnt == 3 || cnt == 0){
                        $textSlideTextboxWrap.eq(0).stop().fadeIn(1000)
                        $textSlideTextboxWrap.eq(1).stop().fadeOut(1000)
                        $textSlideTextboxWrap.eq(2).stop().fadeOut(100)
                        $textSlideTextboxWrap.eq(0).removeClass('addLeftSlide')
                        $textSlideTextboxWrap.eq(0).removeClass('addRightSlide')
                        $textSlideTextboxWrap.eq(0).addClass('addRightSlide')
                        $textSlideWrap.stop().css({background:'rgb(172, 141, 131)'})
                    }else if(cnt == 1 ){
                        $textSlideTextboxWrap.eq(0).stop().fadeOut(100)
                        $textSlideTextboxWrap.eq(1).stop().fadeIn(1000)
                        $textSlideTextboxWrap.eq(2).stop().fadeOut(1000)
                        $textSlideTextboxWrap.eq(1).removeClass('addLeftSlide')
                        $textSlideTextboxWrap.eq(1).removeClass('addRightSlide')
                        $textSlideTextboxWrap.eq(1).addClass('addRightSlide')
                        $textSlideWrap.stop().css({background:'rgb(129, 116, 106)'})
                    }else if (cnt == 2 || cnt == -1){
                        $textSlideTextboxWrap.eq(0).stop().fadeOut(1000)
                        $textSlideTextboxWrap.eq(1).stop().fadeOut(100)
                        $textSlideTextboxWrap.eq(2).stop().fadeIn(1000)
                        $textSlideTextboxWrap.eq(2).removeClass('addLeftSlide')
                        $textSlideTextboxWrap.eq(2).removeClass('addRightSlide')
                        $textSlideTextboxWrap.eq(2).addClass('addRightSlide')
                        $textSlideWrap.stop().css({background:'rgb(157, 159, 166)'})
                    }
                }
            //텍스트박스 슬라이드 함수 끝

            



            // 이벤트 발생시 타이머 재발동 함수
            function timerFn(){
                clearInterval(setId);
                autoSlideFn(setId);
            }
            

        },
        section8Fn:function(){
            var $slideContent = $('#section8 .dec-content')
            var cnt = 0;
            var $spanMoveWrap1 =  $('#section8 .row2 .text-wrap');
            var $spanBar1      =  $('#section8 .row2 .span-bar');
            var $subArr1      =  $('#section8 .row2 .arr1');
            var $subArr2      =  $('#section8 .row2 .arr2');

            var $spanMoveWrap2 =  $('#section8 .row3-col1 .text-wrap');
            var $spanBar2      =  $('#section8 .row3-col1 .span-bar');
            var $subArr21      =  $('#section8 .row3-col1 .arr1');
            var $subArr22      =  $('#section8 .row3-col1 .arr2');

            var $spanMoveWrap3 =  $('#section8 .row3-col2 .text-wrap');
            var $spanBar3      =  $('#section8 .row3-col2 .span-bar');
            var $subArr31      =  $('#section8 .row3-col2 .arr1');
            var $subArr32      =  $('#section8 .row3-col2 .arr2');
            var imgH           =  $('#section8 .dec-gap .dec-content').height();
            var $pallarWrap    =  $('#section8 .head-title-gap > h2');
            var $pallarWrap2    =  $('#section8 .img-content .row2');
            var $pallarWrap3    =  $('#section8 .row3-col1 > h4');
            var $pallarWrap4    =  $('#section8 .row3-col1 > p');
            var $pallarWrap5    =  $('#section8 .row3-col2 > h4');
            var $pallarWrap6    =  $('#section8 .row3-col2 > p');
            var paralIf        =  0;
            var paralIf1        =  0;
            var paralIf2        =  0;
            var paralIf3        =  0;
            var $winW = $(window).innerWidth();
            var $window = $(window);

            function resizeFn(){
                $winW = $(window).innerWidth();
            }resizeFn();

            $window.resize(function(){
                resizeFn();
            })


            if($winW>800){
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section8').offset().top-600  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap.addClass('add8pallar');
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap.removeClass('add8pallar');
                }

                if( $(window).scrollTop() >= $('#section8').offset().top-500  ){
                    if(paralIf1==0){
                      paralIf1=1;
                      $pallarWrap2.addClass('add8pallar');
                    }
                  }
                if( $(window).scrollTop() === 0 ){
                    paralIf1=0;
                    $pallarWrap2.removeClass('add8pallar');
                }
                if( $(window).scrollTop() >= $('#section8').offset().top-300  ){
                    if(paralIf2==0){
                      paralIf2=1;
                      $pallarWrap3.addClass('add8pallar');
                      $pallarWrap4.addClass('add8pallar');
                      $pallarWrap5.addClass('add8pallar');
                      $pallarWrap6.addClass('add8pallar');
                    }
                  }
                if( $(window).scrollTop() === 0 ){
                    paralIf2=0;
                    $pallarWrap3.removeClass('add8pallar');
                    $pallarWrap4.removeClass('add8pallar');
                    $pallarWrap5.removeClass('add8pallar');
                    $pallarWrap6.removeClass('add8pallar');
                }
            });
        }else if($winW<=800){
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section8').offset().top-700  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap.addClass('add8pallar');
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap.removeClass('add8pallar');
                }

                if( $(window).scrollTop() >= $('#section8').offset().top-700  ){
                    if(paralIf1==0){
                      paralIf1=1;
                      $pallarWrap2.addClass('add8pallar');
                    }
                  }
                if( $(window).scrollTop() === 0 ){
                    paralIf1=0;
                    $pallarWrap2.removeClass('add8pallar');
                }
                if( $(window).scrollTop() >= $('#section8').offset().top-500  ){
                    if(paralIf2==0){
                      paralIf2=1;
                      $pallarWrap3.addClass('add8pallar');
                      $pallarWrap4.addClass('add8pallar');
                    }
                  }
                if( $(window).scrollTop() === 0 ){
                    paralIf3=0;
                    $pallarWrap3.removeClass('add8pallar');
                    $pallarWrap4.removeClass('add8pallar');
                }
                if( $(window).scrollTop() >= $('#section8').offset().top-400  ){
                    if(paralIf3==0){
                      paralIf3=1;
                      $pallarWrap5.addClass('add8pallar');
                      $pallarWrap6.addClass('add8pallar');
                    }
                  }
                if( $(window).scrollTop() === 0 ){
                    paralIf2=0;
                    $pallarWrap5.removeClass('add8pallar');
                    $pallarWrap6.removeClass('add8pallar');
                }
            });
        }

            //메인슬라이드함수
            function mainSlideFn(){
                if(cnt<3){
                    imgH = $('#section8 .dec-gap .dec-content').height()/3.3;
                $slideContent.stop().animate({top:-imgH*cnt},1000,'easeInExpo')
                    }else{
                cnt=0;
                $slideContent.stop().animate({top:-imgH*cnt},1000,'easeInExpo')
                }

            }
            //다음으로 넘어가는 함수
            function nextSlideFn(){
                cnt++
                mainSlideFn();
            }
            // 오토슬라이드 함수
            function autoSlideFn(){
                setInterval(nextSlideFn,2000)
            }
            autoSlideFn();

            //화살표 아래바 이동 함수 1
            $spanMoveWrap1.on({
                mouseenter:function(){
                    $spanBar1.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn1();
                    });
                }
            })
            
            function moveArrFn1(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap1.on({
                mouseleave:function(){
                    $spanBar1.animate({'margin-left':-500},0);
                    $spanBar1.stop().animate({'margin-left':0},600);
                }
            })
            //화살표 아래바 이동 함수 2
            $spanMoveWrap2.on({
                mouseenter:function(){
                    $spanBar2.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn2();
                    });
                }
            })
            
            function moveArrFn2(){
                $subArr21.stop().animate({'left':10},600);
                $subArr22.stop().animate({'left':35},600);
                $subArr21.animate({'left':-60},0);
                $subArr22.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap2.on({
                mouseleave:function(){
                    $spanBar2.animate({'margin-left':-500},0);
                    $spanBar2.stop().animate({'margin-left':0},600);
                }
            })
            //화살표 아래바 이동 함수 3
            $spanMoveWrap3.on({
                mouseenter:function(){
                    $spanBar3.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn3();
                    });
                }
            })
            
            function moveArrFn3(){
                $subArr31.stop().animate({'left':10},600);
                $subArr32.stop().animate({'left':35},600);
                $subArr31.animate({'left':-60},0);
                $subArr32.animate({'left':-15},0);
                
            }
            
            $spanMoveWrap3.on({
                mouseleave:function(){
                    $spanBar3.animate({'margin-left':-500},0);
                    $spanBar3.stop().animate({'margin-left':0},600);
                }
            })
        },
        section9Fn:function(){
            var $spanMoveWrap =  $('#section9 .col1-container .text-wrap');
            var $spanBar      =  $('#section9 .col1-container .span-bar');
            var $subArr1      =  $('#section9 .col1-container .arr1');
            var $subArr2      =  $('#section9 .col1-container .arr2');

            var $spanMoveWrap2 =  $('#section9 .col2-container .text-wrap');
            var $spanBar2      =  $('#section9 .col2-container .span-bar');
            var $subArr21      =  $('#section9 .col2-container .arr1');
            var $subArr22      =  $('#section9 .col2-container .arr2');

            var $col2Wrap      =  $('#section9 .col2-wrap')
            var t = 0;
            var $pallarWrap    =  $('#section9 .container .title > span');
            var paralIf        =  0;


            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section9').offset().top-600  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap.addClass('add9pallar');
                  }                
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap.removeClass('add9pallar');
                }

            });

            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })

            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);
                
                console.log($subArr1);

            }

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })

            
            $spanMoveWrap2.on({
                mouseenter:function(){
                    $spanBar2.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn2();
                    });
                }
            })

            function moveArrFn2(){
                $subArr21.stop().animate({'left':10},600);
                $subArr22.stop().animate({'left':35},600);
                $subArr21.animate({'left':-60},0);
                $subArr22.animate({'left':-15},0);

            }

            $spanMoveWrap2.on({
                mouseleave:function(){
                    $spanBar2.animate({'margin-left':-500},0);
                    $spanBar2.stop().animate({'margin-left':0},600);
                }
            })


            // 시간마다 사진을 바꿔주는 함수 타이머함수를 응용해보자

            //이미지 바꾸는함수
            function changeImgFn(){
                t++
                if(t==1){
                    $col2Wrap.addClass('nextImg');
                }else if( t==2){
                    $col2Wrap.removeClass('nextImg');
                    $col2Wrap.addClass('nextnextImg');
                }else if( t==3){
                    $col2Wrap.removeClass('nextnextImg');
                    $col2Wrap.addClass('nextnextnextImg');
                }else if(t == 4){
                    $col2Wrap.removeClass('nextnextnextImg');
                    t=0;
                }
            }
            //이미지 바꾸는 함수 시간마다 발생 시키기
            setInterval(changeImgFn,3000)
        },
        section10Fn:function(){
            var $slideWrap = $('#section10 .slide-wrap');
            var $nextBtn   = $('#section10 .next-slide-btn');
            var $prevBtn   = $('#section10 .prev-slide-btn');
            var $count     = $('#section10 .count');
            var $slideW    = $('#section10 .slide-view .slide-wrap > li').innerWidth();
            var cnt = 0;
            var t = 0;
            var $window    = $(window);
            // var $countTop   = $count.css('top');
            var $countNumH  = $('#section10 .count .count-num').innerHeight();
            // var nTop        = 0;
            // console.log($countTop);
            var $pallarWrap1    =   $('#section10 .slide-wrap li:nth-of-type(4)')
            var $pallarWrap2    =   $('#section10 .slide-wrap li:nth-of-type(5)')
            var $pallarWrap3    =   $('#section10 .slide-wrap li:nth-of-type(6)')

            var paralIf = 0;

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section10').offset().top-400  ){
                  if(paralIf==0){
                    paralIf=1;
                    setInterval(function(){
                        if(t==0){
                        $pallarWrap1.addClass('add10pallar');
                    }else if(t == 1){
                        $pallarWrap2.addClass('add10pallar');
                    }else if(t == 2){
                        $pallarWrap3.addClass('add10pallar');
                    }
                    t++
                    },500)
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap1.removeClass('add10pallar');
                    $pallarWrap2.removeClass('add10pallar');
                    $pallarWrap3.removeClass('add10pallar');
                }
            });


            function resizeFn(){
                $slideW = $('#section10 .slide-view .slide-wrap > li').innerWidth()-1; // 옆에 살짝 삐져나오는 그림 없에주기위한 -1 (버그잡기용)
                $countNumH  = $('#section10 .count .count-num').innerHeight();
                // $countTop   = $count.css('top');
                countFn();
                mainSlideFn();
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
            })

            //메인슬라이드 함수

            function mainSlideFn(){
                $slideWrap.stop().animate({left:$slideW*-cnt},600,function(){
                    if(cnt>8){cnt=0}
                    if(cnt<0){cnt=8}
                    $slideWrap.stop().animate({left:$slideW*-cnt},0)
                })
            }

            //버튼 클릭 했을때 움직이는 함수
            $nextBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                    cnt++;
                    countFn();
                    mainSlideFn();
                    }
                }
            })
            $prevBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                        cnt--;
                    countFn();
                    mainSlideFn();
                    }
                }
            })

            // 버튼 클릭마다 카운트가 움직이는 함수
            function countFn(){
                // nTop   = parseInt($count.css('top'));
                // console.log(nTop);
                console.log($countNumH);
                $count.stop().animate({top:($countNumH*-cnt)},600,function(){
                    if(cnt>8){cnt=0}
                    if(cnt<0){cnt=8}
                    $count.stop().animate({top:($countNumH*-cnt)},0)
                })
            }

        },
        section11Fn:function(){
            var $spanMoveWrap =  $('#section11 .text-wrap');
            var $spanBar      =  $('#section11 .span-bar');
            var $slideWrap    =  $('#section11 .slide-wrap')
            var $nextBtn      =  $('#section11 .next-slide-btn')
            var $prevBtn      =  $('#section11 .prev-slide-btn')
            var $slideW    = $('#section11 .slide-wrap > a').innerWidth();
            var cnt        = 0;
            var $count     = $('#section11 .count')
            var $countNumH  = $('#section11 .count .count-num').innerHeight();
            var $window     = $(window);

            var $pallarWrap1    =   $('#section11 .row1 > h2')
            var $pallarWrap2    =   $('#section11 .row1 > p')

            var paralIf = 0;

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section11').offset().top-800  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap1.addClass('add11pallar');
                    $pallarWrap2.addClass('add11pallar');
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap1.removeClass('add11pallar');
                    $pallarWrap2.removeClass('add11pallar');
                }
            });

            function responseFn(){
                $slideW    = $('#section11 .slide-wrap > a').innerWidth();
                $countNumH  = $('#section11 .count .count-num').innerHeight();
                countFn();
                mainSlide2Fn();


            }responseFn();
            setTimeout(responseFn,20);

            $window.resize(function(){
                responseFn();
            });


            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 1500,function(){
                        moveArrFn();
                    });
                }
            })

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })

            function mainSlide2Fn(){
                // console.log($slideW);
                $slideWrap.stop().animate({left:$slideW*-cnt},600,function(){
                    if(cnt>5){cnt=0}
                    if(cnt<0){cnt=5}
                    $slideWrap.stop().animate({left:$slideW*-cnt},0)
                })
            }
            $nextBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                    cnt++;
                    countFn();
                    mainSlide2Fn();
                    }
                }
            })
            $prevBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                    cnt--;
                    countFn();
                    mainSlide2Fn();
                    }
                }
            })
            function countFn(){
                // console.log($countNumH);
                $count.stop().animate({top:(-$countNumH*cnt)},600,function(){
                    if(cnt>5){cnt=0}
                    if(cnt<0){cnt=5}
                    $count.stop().animate({top:(-$countNumH*cnt)},0)
                })
            }

        },
        section12Fn:function(){
            var $spanMoveWrap =  $('#section12 .text-wrap');
            var $spanBar      =  $('#section12 .span-bar');
            var $subArr1      =  $('#section12 .arr1');
            var $subArr2      =  $('#section12 .arr2');
            var $slideBtn     = $('#section12 .click-wrap');
            var $slideWrap    = $('#section12 .slide-down-gap');

            var $pallarWrap1    =   $('#section12 .slide-container:nth-of-type(1)');
            var $pallarWrap2    =   $('#section12 .slide-container:nth-of-type(2)');
            var $pallarWrap3    =   $('#section12 .slide-container:nth-of-type(3)');
            var $pallarWrap4    =   $('#section12 .slide-container:nth-of-type(4)');
            var $pallarWrap5    =   $('#section12 .slide-container:nth-of-type(5)');

            var paralIf = 0;

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section12').offset().top-600  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap1.addClass('add12pallar');
                    $pallarWrap2.addClass('add12pallar');
                    $pallarWrap3.addClass('add12pallar');
                    $pallarWrap4.addClass('add12pallar');
                    $pallarWrap5.addClass('add12pallar');
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap1.removeClass('add12pallar');
                    $pallarWrap2.removeClass('add12pallar');
                    $pallarWrap3.removeClass('add12pallar');
                    $pallarWrap4.removeClass('add12pallar');
                    $pallarWrap5.removeClass('add12pallar');
                }
            });



                $slideBtn.each(function(idx){
                    $(this).on({
                        click:function(){
                            $slideWrap.stop().slideUp(700);
                            $(this).toggleClass('addSlideDown')
                            $(this).next().stop().slideToggle(700);

                            for(i=0;i<$slideBtn.length;i++){
                                if(i!==idx){                                                           
                                    $slideBtn.eq(i).removeClass('addSlideDown');                                
                                }
                            }

                        }
                    })
                })




            $spanMoveWrap.on({
                mouseenter:function(){
                    $spanBar.stop().animate({'margin-left':500}, 600,function(){
                        moveArrFn();
                    });
                }
            })

            function moveArrFn(){
                $subArr1.stop().animate({'left':10},600);
                $subArr2.stop().animate({'left':35},600);
                $subArr1.animate({'left':-60},0);
                $subArr2.animate({'left':-15},0);

            }

            $spanMoveWrap.on({
                mouseleave:function(){
                    $spanBar.animate({'margin-left':-500},0);
                    $spanBar.stop().animate({'margin-left':0},600);
                }
            })
        },
        section13Fn:function(){
            var $moveWrap = $('#section13')
            var $moveImg  = $('#section13 .img-wrap')
            var $moveGap  = $('#section13 .img-gap')
            var top       = 0;
            var left      = 0;
            var $pallarWrap    =   $('#section13 .col2 .img-gap');

            var paralIf = 0;

            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section13').offset().top-600  ){
                  if(paralIf==0){
                    paralIf=1;
                    $pallarWrap.addClass('add13pallar');
                  }
                }
                if( $(window).scrollTop() === 0 ){
                    paralIf=0;
                    $pallarWrap.removeClass('add13pallar');
                }
            });

            $moveWrap.on({
                mousemove:function(e){

                    // console.log(e.offsetX);
                    top   = ($moveImg.offset().top-e.pageY+2700)*0.03;
                    // console.log(top);
                    left  = ($moveImg.offset().left-e.pageX)*0.03;

                    $moveGap.stop().css({top:top,left:left});
                }
            })
        },
        footerFn:function(){
            var $modal = $('#modal');
            var $modal2 = $('#modal2');
            var $modalBtn = $('#footer .modal-btn');
            var $modalBtn2 = $('#footer .modal-btn2');
            var $slideBtn   = $('#footer .mobile-acodian > a') 
            var $slideWrap = $('#footer .slide-down-gap');

            $slideBtn.each(function(idx){
                $(this).on({
                    click:function(){                  
                        $slideWrap.stop().slideUp(500);
                        $(this).next().stop().slideToggle(500);
                    }
                });
            });
            


           
            $modalBtn.on({ 
                click:function(){
                    $modal.stop().fadeIn(600);
                }
            });

            $modal.on({
                click:function(){
                    $modal.stop().fadeOut(600);
                }
            });

            $modalBtn2.on({ 
                click:function(){
                    $modal2.stop().fadeIn(600);
                }
            });

            $modal2.on({
                click:function(){
                    $modal2.stop().fadeOut(600);
                }
            });

        }
    }


    popol.init();

})(jQuery);



// var $spanMoveWrap =  $('#section7 .text-wrap');
// var $spanBar      =  $('#section7 .span-bar');
// var $subArr1      =  $('#section7 .arr1');
// var $subArr2      =  $('#section7 .arr2');

// $spanMoveWrap.on({
//     mouseenter:function(){
//         $spanBar.stop().animate({'margin-left':500}, 600,function(){
//             moveArrFn();
//         });
//     }
// })

// function moveArrFn(){
//     $subArr1.stop().animate({'left':10},600);
//     $subArr2.stop().animate({'left':35},600);
//     $subArr1.animate({'left':-60},0);
//     $subArr2.animate({'left':-15},0);
    
// }

// $spanMoveWrap.on({
//     mouseleave:function(){
//         $spanBar.animate({'margin-left':-500},0);
//         $spanBar.stop().animate({'margin-left':0},600);
//     }
// })


