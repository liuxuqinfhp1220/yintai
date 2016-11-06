/*window.onload=function(){*/
	// 轮播图开始
	$(function(){
		//top开始
	  var tp1=$(".top-icon1")[0];
	  var ib=$(".img-box",tp1)[0];
	  var ws=$("s",tp1)[0];
	  var ti=$(".ti",tp1)[0];
	  var wx=$(".wx",ti)[0];
	  hover(tp1,function(){
         ib.style.display="block";
         tp1.style.backgroundColor="#fff";
         ws.style.backgroundPosition="-225px -88px";
         wx.style.overFlow="visible";
         wx.style.backgroundColor="#fff";
	  },function(){
          ib.style.display="none";
          tp1.style.backgroundColor="";
          ws.style.background="";
          wx.style.backgroundColor="";
          wx.style.overFlow="hidden";

	  })
	  var tp2=$(".top-icon2")[0];
	  var phone=$(".phone",tp2)[0];
	  var ys=$("s",tp2)[0];
	  var yt=$(".yintai",tp2)[0];
	  hover(tp2,function(){
         phone.style.display="block";
         // ys.style.background="url(../img/phone.png) center -20px no-repeat";
         tp2.style.backgroundColor="#fff";
         yt.style.color="red";
         ys.style.backgroundPosition="center -20px";

	  },function(){
          phone.style.display="none";
          tp2.style.backgroundColor="";
          ys.style.background="";
          yt.style.color="";

	  })
		var tl=$(".top-link1")[0];
		var lis=$(".list",tl)[0];
		var link=$(".link")[0];
		hover(tl,function(){
            lis.style.display="block";
            link.style.background="#fff";
		},function(){
            lis.style.display="none";
            link.style.background="#eee";
		})
		//top结束
		//分类开始
		 var menu=$(".banner-menu");
       for(var i=0;i<menu.length;i++){
          hover(menu[i],function(){
          	 var cloth=$(".cloth",this)[0];
             cloth.style.display="block";
	    },function(){
	    	 var cloth=$(".cloth",this)[0];
             cloth.style.display="none";
	    })
       }
		//分类结束
	var box=getclass('box',document)[0];
	var list=box.getElementsByTagName('div')[0];
	var as=list.getElementsByTagName('a');
	var indexbtn=getclass('index',box)[0];
	var indexsmalls=indexbtn.getElementsByTagName('div');
	var boxbtn=getclass('box-button',box)[0];
	var leftbtn=getclass('button-left',boxbtn)[0];
	var rightbtn=getclass('button-right',boxbtn)[0];
	var index=0;
	as[0].style.zIndex=10;
    indexsmalls[0].style.backgroundColor="#E5004F";
	var t=setInterval(move,1000);
		function move(){
		index++;
		for(var i=0;i<as.length;i++){
			as[i].style.zIndex=0;
			indexsmalls[i].style.backgroundColor="";
		}
		while(index==as.length){
			index=0;
		}
		as[index].style.zIndex=10;
		indexsmalls[index].style.backgroundColor="#E5004F";
	}
	box.onmouseover=function(){
		clearInterval(t);
		leftbtn.style.display="block";
		rightbtn.style.display="block";
	}
	box.onmouseout=function(){
		leftbtn.style.display="none";
		rightbtn.style.display="none";
		t=setInterval(move,1000);
	}
	for(var j=0;j<indexsmalls.length;j++){
		indexsmalls[j].ind=j;
		indexsmalls[j].onmouseover=function(){
			for(var k=0;k<as.length;k++){
				indexsmalls[k].style.backgroundColor="";
				as[k].style.zIndex=0;
			}
		    as[this.ind].style.zIndex=10;
		    this.style.backgroundColor="#E5004F";	
		}
	}
	rightbtn.onclick=function(){
		move();	
	}
	leftbtn.onclick=function(){
     index--;
     for(var j=0;j<as.length;j++){
     	as[j].style.zIndex=0;
     	indexsmalls[j].style.backgroundColor="";
     }
     while(index<0){
     	index=0;
     }
     as[index].style.zIndex=10;
     indexsmalls[index].style.backgroundColor="#E5004F";
	}
	// 轮播图结束
	// middle2开始
	var m2left=getclass('middle2-total',document)[0];
	var aa=getclass('aa',m2left);
	var m2bottom=getclass('middle2-bottom',m2left);
	for(var i=0;i<aa.length;i++){
		aa[i].index=i;
		aa[i].onmouseover=function(){
			var sanjiao=getclass("sanjiao",this)[0];
			for(var j=0;j<m2bottom.length;j++){
				m2bottom[j].style.display="none";
				aa[j].style.borderBottom="";
				var sj=getclass("sanjiao",aa[j])[0];
				sj.style.display="none";
			}
			m2bottom[this.index].style.display="block";
			aa[this.index].style.borderBottom="5px solid #E70050";
			sanjiao.style.display="block";
		}
	}
	// middle2结束
	// middle5开始
	var m5=getclass('middle5',document)[0];
	var m5r=getclass('middle5-right',m5)[0];
	var m5top=getclass('middle5-top',m5r)[0];
	var m5link=m5top.getElementsByTagName('a');
	var m5tright=getclass('middle5-tright',m5r)[0];
	var m5bw=getclass('middle5-bw',m5tright);
	m5bw[0].style.display="block";
	for(var i=0;i<m5link.length;i++){
		m5link[i].index=i;
		m5link[i].onmouseover=function(){
			for(var j=0;j<m5bw.length;j++){
				m5bw[j].style.display="none";
				m5link[j].style.fontWeight="none";
				m5link[j].style.borderBottom="";

			}
			m5bw[this.index].style.display="block";
			m5link[this.index].style.fontWeight="bold";
			m5link[this.index].style.borderBottom="3px solid #E70050";

		}
		
	}
	// middle5结束
	// 时尚名品开始
	var demo=getclass('demo',document);
	for(var i=0;i<demo.length;i++){
		wheel(demo[i]);
	// 时尚名品结束
	}
	//边框运动开始
	var m7r=$(".middle7-right");
	for(var i=0;i<m7r.length;i++){
		border(m7r[i]);
	}
	// 边框运动结束
	var m7b=$('.middle7-lbottom');
	for(var i=0;i<m7b.length;i++){
		lunbotu(m7b[i]);
	}
    //侧部导航开始
    var edge=$(".edge")[0];
    var edge1=$(".edge1",edge);
    var middle7=$(".middle7");
    var tops=[];
    for(var i=0;i<middle7.length;i++){
    	var tt=middle7[i].offsetTop;
        tops.push(tt);
    }
    tops.push(5800);
    for(var i=0;i<edge1.length-1;i++){
    	edge1[i].index=i;
    	edge1[i].onclick=function(){
    		animate(document.body,{scrollTop:tops[this.index]},100);
            animate(document.documentElement,{scrollTop:tops[this.index]},100)
    	}
    	edge1[i].onmouseover=function(){
             this.style.background="#E5004F";
    		 this.style.fontSize="14px";
    		 this.style.verticalAlign="middle";
    		 this.style.color="#fff";
    	}
    	edge1[i].onmouseout=function(){
             this.style.background="";
    		 this.style.fontSize=0;
    	}
    }

    edge1[9].onclick=function(){
    	    animate(document.body,{scrollTop:-400},200);
            animate(document.documentElement,{scrollTop:-400},200)
    }
    edge1[9].onmouseover=function(){
             this.style.background="#E5004F";
    		 this.style.fontSize="14px";
    		 this.style.verticalAlign="middle";
    		 this.style.color="#fff";
    	}
    edge1[9].onmouseout=function(){
             this.style.background="";
    		 this.style.fontSize=0;
    	}
    window.onscroll=function(){
    	var stop=document.body.scrollTop||document.documentElement.scrollTop;
    	if(stop>1500){
    		 edge.style.display="block";
    		 // animate(edge,{marginLeft:600},200);
    	}else if(stop<1500){
    		 edge.style.display="none";
    	}
    	for(var i=0;i<tops.length;i++){
    		if(tops[i]<stop+230){
    			for(var j=0;j<edge1.length;j++){
    				edge1[j].style.background="";
    				edge1[j].style.fontSize=0;
    			}
    			edge1[i].style.background="#E5004F";
    			edge1[i].style.fontSize="14px";
    			edge1[i].style.verticalAlign="middle";
    			edge1[i].style.color="#fff";

    		}
    	}
    }
     window.onscroll();
   //侧部导航结束
   //手机热卖
   var m2b1=$(".middle2-bottom1")[0];
		var two=$(".two",m2b1);
		for(var i=0;i<two.length;i++){
			two[i].onmouseover=function(){
			  var bl=$(".bl",this)[0];
			  var br=$(".br",this)[0];
			  var bt=$(".bt",this)[0];
			  var bb=$(".bb",this)[0];
			  animate(bl,{height:262},500)
			  animate(br,{height:262},500)
			  animate(bt,{width:220},500)
			  animate(bb,{width:220},500)	
			}
			two[i].onmouseout=function(){
			  var bl=$(".bl",this)[0];
			  var br=$(".br",this)[0];
			  var bt=$(".bt",this)[0];
			  var bb=$(".bb",this)[0];
			  animate(bl,{height:0},500)
			  animate(br,{height:0},500)
			  animate(bt,{width:0},500)
			  animate(bb,{width:0},500)	
			}	
		}
		var m2b3=$(".middle2-bottom3")[0];
		var two=$(".two",m2b3);
		for(var i=0;i<two.length;i++){
			two[i].onmouseover=function(){
			  var bl=$(".bl",this)[0];
			  var br=$(".br",this)[0];
			  var bt=$(".bt",this)[0];
			  var bb=$(".bb",this)[0];
			  animate(bl,{height:262},500)
			  animate(br,{height:262},500)
			  animate(bt,{width:220},500)
			  animate(bb,{width:220},500)	
			}
			two[i].onmouseout=function(){
			  var bl=$(".bl",this)[0];
			  var br=$(".br",this)[0];
			  var bt=$(".bt",this)[0];
			  var bb=$(".bb",this)[0];
			  animate(bl,{height:0},500)
			  animate(br,{height:0},500)
			  animate(bt,{width:0},500)
			  animate(bb,{width:0},500)	
			}
			

		}
	})
// 时尚名品函数开始
function wheel(demo){
	var m7list=getclass('middle7-list',demo)[0];
	var m7a1=getclass('middle7-a',m7list)[0];
	var m7button1=getclass('middle7-botton',demo)[0];
	var m7leftbtn1=getclass('middle7-leftb',demo)[0];
	var m7rightbtn1=getclass('middle7-rightb',demo)[0];
	m7rightbtn1.onclick=function(){
	   animate(m7a1,{marginLeft:-390},500);
	}
	m7leftbtn1.onclick=function(){
	   animate(m7a1,{marginLeft:0},500);
	}
	m7leftbtn1.onmouseover=function(){
	   m7leftbtn1.style.backgroundColor="#D03162";
	}
	m7rightbtn1.onmouseover=function(){
	   m7rightbtn1.style.backgroundColor="#D03162";
	}
	m7leftbtn1.onmouseout=function(){
	   m7leftbtn1.style.backgroundColor="";
	}
	m7rightbtn1.onmouseout=function(){
	   m7rightbtn1.style.backgroundColor="";
	}
	demo.onmouseover=function(){
		m7leftbtn1.style.display="block";
		m7rightbtn1.style.display="block";
	}
	demo.onmouseout=function(){
		m7leftbtn1.style.display="none";
		m7rightbtn1.style.display="none";
	}
	}
function border(m7r){
	var ones=$(".one",m7r);
	for(var i=0;i<ones.length;i++){
		ones[i].onmouseover=function(){
			var bt=$(".bt",this)[0];
			var bl=$(".bl",this)[0];
			var br=$(".br",this)[0];
			var bb=$(".bb",this)[0];
			this.style.cursor="pointer";
            animate(bt,{width:270},500);
            animate(bl,{height:180},500);
            animate(bb,{width:270},500);
            animate(br,{height:180},500);

		}
		ones[i].onmouseout=function(){
			var bt=$(".bt",this)[0];
			var bl=$(".bl",this)[0];
			var br=$(".br",this)[0];
			var bb=$(".bb",this)[0];
            animate(bt,{width:0},500);
            animate(bl,{height:0},500);
            animate(bb,{width:0},500);
            animate(br,{height:0},500);

		}
	}

}
function lunbotu(m7b){
	var con=$('.content',m7b)[0];
	var imgboxs=$('.imgbox',con);
	var btn=$('.btn',m7b)[0];
	var left=$('.left',btn)[0];
	var right=$('.right',btn)[0];
	var Iw=parseInt(getstyle(imgboxs[0],'width'));
	var ind=0;
	var nex=0;
	imgboxs[0].style.left=0;
	function lunbo(){
     nex++;
     if(nex==imgboxs.length){
      	nex=0;
      }
      imgboxs[nex].style.left=Iw+"px";
      animate(imgboxs[ind],{left:-Iw},500);
      animate(imgboxs[nex],{left:0},500);  
      ind=nex;
	}
	right.onclick=function(){
		lunbo();
	}
	left.onclick=function(){
		nex--;
		if(nex==-1){
			nex=imgboxs.length-1;
		}
	  imgboxs[nex].style.left=-Iw+"px";
      animate(imgboxs[ind],{left:Iw},500);
      animate(imgboxs[nex],{left:0},500);  
      ind=nex;
	}
}
// 时尚名品函数结束

