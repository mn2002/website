(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{36:function(t,e,i){},54:function(t,e,i){},55:function(t,e,i){},57:function(t,e,i){},58:function(t,e,i){},59:function(t,e,i){},60:function(t,e,i){},68:function(t,e,i){},69:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),a=i(8),c=i.n(a),r=(i(54),i(55),i(2));var o=function(){return Object(n.useEffect)((function(){var t=function(t,e,i){this.toRotate=e,this.el=t,this.loopNum=0,this.period=500,this.txt="",this.tick(),this.isDeleting=!1};t.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,n=150-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){i.tick()}),n)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite-change"),i=0;i<e.length;i++){var n=e[i].getAttribute("data-type"),s=e[i].getAttribute("data-period");n&&new t(e[i],JSON.parse(n),s)}}}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"hi everyone!"}),Object(r.jsxs)("h1",{children:[Object(r.jsx)("a",{class:"typewrite",children:"i'm "}),Object(r.jsx)("a",{class:"typewrite-change","data-period":"500","data-type":'[ "Michelle.", "a student.", "a learner."]'})]})]})},l=(i(57),i.p+"static/media/resume.3166c80e.pdf");var d=function(){return Object(r.jsxs)("div",{class:"icon-bar",children:[Object(r.jsx)("a",{href:"https://github.com/mn2002",class:"icon social-buttons__button social-button social-button--github","aria-label":"GitHub",children:Object(r.jsx)("span",{class:"social-button__inner",children:Object(r.jsx)("i",{class:"fab fa-github"})})}),Object(r.jsx)("a",{href:"mailto:mxnguyyen@gmail.com",class:"icon social-buttons__button social-button social-button--mail","aria-label":"Facebook",children:Object(r.jsx)("span",{class:"social-button__inner",children:Object(r.jsx)("i",{class:"fas fa-envelope"})})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/michelle-nguyen-b87117218/",class:"icon social-buttons__button social-button social-button--linkedin","aria-label":"LinkedIn",children:Object(r.jsx)("span",{class:"social-button__inner",children:Object(r.jsx)("i",{class:"fab fa-linkedin-in"})})}),Object(r.jsx)("a",{href:l,class:"icon social-buttons__button social-button social-button--steam","aria-label":"SnapChat",children:Object(r.jsx)("span",{class:"social-button__inner",children:Object(r.jsx)("i",{class:"fa fa-file"})})})]})};i(58);var h=function(){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){var i,n,s=t.current,a=s.getContext("2d");function c(){s.height=e.innerHeight,s.width=e.innerWidth,i=s.height,n=s.width}var r="#d8dee9";e.onresize=function(){c(),m()},c();var o=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},l=function(){return.3-.5*Math.random()};Math.root=function(t){return t*t};var d,h,u,j=function(t,e){var s=t||o(0,n),c=e||o(0,i),r=.5+o(0,4),d=l(),h=l();return this.drawPoint=function(){a.beginPath(),a.arc(s,c,r,0,2*Math.PI),a.fill()},this.x=function(){return s},this.y=function(){return c},this.size=function(){return r},this.animate=function(){c<r||c>i-r?h*=-1:(s<r||s>n-r)&&(d*=-1),s+=d,c+=h},this},b=736e3,f=150,p=110;function m(t){d=(u=u||t)||Math.floor(f*(i*n)/b),p,h=[];for(var e=0;e<d;e++)h.push(new j),h[e].drawPoint();a.fillStyle=r,a.lineWidth=.5}return{init:m,update:function(){a.clearRect(0,0,n,i);for(var t=0;t<d;t++)h[t].animate(),h[t].drawPoint()}}}(window,document);e.init(),function t(){e.update(),requestAnimationFrame(t)}()}),[]),Object(r.jsxs)("div",{class:"title",children:[Object(r.jsx)("canvas",{id:"canvas",ref:t}),Object(r.jsxs)("div",{class:"typewrite-animation",children:[Object(r.jsx)(o,{}),Object(r.jsx)(d,{})]})]})},u=(i(36),i(59),i(88)),j=[{title:"Undergraduate TA",company:"University of British Columbia",date:"Jan. 2022 -",duties:["Teaching Assistant for CPSC 210: Software Construction in Java","Manage and operate four weekly laboratory sections of 30 students each, in which learning and understand of materials is supported"],tech:["Java","Java Swing"]},{title:"Software Developement Instructor",company:"The C.O.D.E. Initiative",date:"Jun. 2021 - Jan. 2022",duties:["Taught beginner and intermediate level python programming classes to students aged 8-15.","Catered learning lesson and materials towards students' interests and learning styles while promoting inclusivity and learning in STEM"],tech:["Python"]},{title:"Private Tutor",company:"Self-employed & CMC Tutoring",date:"Jan. 2018 - ",duties:["Design lesson plans and materials for teaching 1-on-1 and group tutoring sessions of Physics, Chemistry, Biology, Mathematics, and Calculus to students in Grades K-12","Ensured the lasting understanding of materials through encouragement, reinforcement and various other teaching methods"],tech:[]}],b=[{title:"CPSC 210 Project",summary:"Caf\xe9 Menu Ordering Application ",duties:["The application enables guests to order items off the caf\xe9 menu with the money-loaded caf\xe9 card, and promotes the ability to order ahead of time to combat the mutual hatred of long wait times","Used Java and Swing library to construct both a robust console-based application and graphical user interface, and implemented persistence with saving and writing files using JSON library"],links:{},tech:["Java","Java Swing","JSON"]},{title:"DSCI 100 Project",summary:"Classification of Article Styles based on Content and Writing",duties:["An electronic report which discovers if the contents of Mashable's article affects the article's data channel","Used R to download, tidy, summarize, and visualize data to implement k-nn classification with four models combinations against 3 pairs of predictors to produce results and discussion to the predictive question"],links:{},tech:["R"]},{title:"Personal Site",summary:"This website.",duties:["Built using React and JavaScript","Styled with CSS"],links:{},tech:["React","CSS","JavaScript"]}];i(60);var f=function(t){return Object(r.jsx)("div",{class:"tech-stack",children:t.techStack.map((function(t){return Object(r.jsx)("span",{class:"tech",children:t})}))})},p=i(89),m=i(87),x=i(33),O=i.n(x),g=i(41),v=i(86),w=Object(g.a)({overrides:{MuiAccordion:{root:{margin:"10px 0 0 0",background:"#597387"}},MuiAccordionDetails:{root:{background:"#d5dfe3"}}}});var y=function(){return Object(r.jsxs)("div",{class:"accordion-container",children:[Object(r.jsx)("h1",{id:"work",children:"Experience"}),Object(r.jsx)(v.a,{theme:w,children:j.map((function(t){return Object(r.jsxs)(u.a,{square:!1,children:[Object(r.jsxs)(p.a,{expandIcon:Object(r.jsx)(O.a,{}),children:[Object(r.jsxs)("div",{class:"work-header",children:[Object(r.jsx)("div",{class:"work-company",children:t.company}),Object(r.jsx)("div",{class:"work-title",children:t.title})]}),Object(r.jsx)("div",{class:"work-date",children:t.date})]}),Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{class:"duties",children:[Object(r.jsx)("ul",{children:t.duties.map((function(t){return Object(r.jsx)("li",{children:t})}))}),Object(r.jsx)(f,{className:"tech-stack",techStack:t.tech})]})})]})}))})]})},k=(i(68),Object(g.a)({overrides:{MuiAccordion:{root:{margin:"20px 0 0 0",background:"#202A44"}},MuiAccordionDetails:{root:{background:"#d5dfe3"}}}}));var S=function(){return Object(r.jsxs)("div",{class:"accordion-container",children:[Object(r.jsx)("h1",{id:"projects",children:"Projects"}),Object(r.jsx)(v.a,{theme:k,children:b.map((function(t){var e=t.winner?Object(r.jsx)("i",{class:"fa fa-trophy fa-lg",id:"trophy","aria-hidden":"true"}):null,i=t.additional?Object(r.jsx)("span",{class:"project-additional",children:t.additional}):null,n=t.links.github?Object(r.jsx)("a",{href:t.links.github,class:"social-buttons__button social-button social-button--github","aria-label":"GitHub",children:Object(r.jsx)("span",{class:"icon social-button__inner",children:Object(r.jsx)("i",{class:"fab fa-github"})})}):null,s=t.links.devpost?Object(r.jsx)("a",{href:t.links.devpost,class:"project-link",children:" Devpost "}):null,a=t.links.live?Object(r.jsx)("a",{href:t.links.live,class:"project-link",children:" Demo "}):null;return Object(r.jsxs)(u.a,{square:!1,children:[Object(r.jsxs)(p.a,{expandIcon:Object(r.jsx)(O.a,{}),children:[Object(r.jsxs)("div",{class:"project-header",children:[Object(r.jsx)("div",{class:"project-title",children:t.title}),e,Object(r.jsx)("div",{class:"project-summary",children:t.summary})]}),Object(r.jsxs)("div",{class:"project-link-wrapper",children:[s,a,n]})]}),Object(r.jsx)(m.a,{children:Object(r.jsxs)("div",{class:"duties",children:[i,Object(r.jsx)("ul",{children:t.duties.map((function(t){return"Winner"===t.split(" ")[0]||"Finalist"===t.split(" ")[0]?Object(r.jsx)("li",{class:"winner",children:t}):Object(r.jsx)("li",{children:t})}))}),Object(r.jsx)(f,{className:"tech-stack",techStack:t.tech})]})})]})}))})]})};var C=function(){return Object(r.jsxs)("div",{class:"site-wrap",children:[Object(r.jsx)(h,{}),Object(r.jsx)(y,{}),Object(r.jsx)(S,{})]})};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.c863ec35.chunk.js.map