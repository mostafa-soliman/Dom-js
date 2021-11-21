
// body.style.cssText="background-color:rgb(35,169,110);";
// document.body.prepend(body);

/**************NAV bar*************************/

let navHeader =document.createElement("header");
let navLeft =document.createElement("div");
let navRight =document.createElement("div");
let navRightMenuUl =document.createElement("ul");
let navRightMenuLi1 =document.createElement("li");
let navRightMenuLi2 =document.createElement("li");
let navRightMenuLi3 =document.createElement("li");
let navRightMenuLi4 =document.createElement("li");
let navLeftLogo=document.createTextNode("Elzero");
let navLiHome=document.createTextNode("Home");
let navLiAbout=document.createTextNode("About");
let navLiService=document.createTextNode("Service");
let navLiContent=document.createTextNode("Content");


navRightMenuUl.className="ulHeader"; 
navRightMenuLi1.className="liHeader1"; 
navRightMenuLi2.className="liHeader2"; 
navRightMenuLi3.className="liHeader3"; 
navRightMenuLi4.className="liHeader4"; 
navLeftLogo.className="navLogo";
navHeader.className="website-head";
navLeft.className="logo";
navRight.className="menu";


navLeft.appendChild(navLeftLogo);
navRight.appendChild(navRightMenuUl); 
navRightMenuUl.appendChild(navRightMenuLi1); 
navRightMenuUl.appendChild(navRightMenuLi2); 
navRightMenuUl.appendChild(navRightMenuLi3); 
navRightMenuUl.appendChild(navRightMenuLi4); 
navRightMenuLi1.appendChild(navLiHome);
navRightMenuLi2.appendChild(navLiAbout);
navRightMenuLi3.appendChild(navLiService);
navRightMenuLi4.appendChild(navLiContent);
navHeader.appendChild(navLeft);
navHeader.appendChild(navRight);
document.body.prepend(navHeader);

// let elementNav=document.getElementsByClassName("website-head");
// let elementLogo=document.getElementsByClassName("logo");

navHeader.style.cssText="background-color:#fff; padding:10px; margin:10px;;display:flex;justify-content:space-between;align-items:center";
navRightMenuLi1.style.cssText="display: inline ;padding:5px;color:rgb(190,190,190);";
navRightMenuLi2.style.cssText="display: inline ;padding:5px;color:rgb(190,190,190);";
navRightMenuLi3.style.cssText="display: inline ;padding:5px;color:rgb(190,190,190);";
navRightMenuLi4.style.cssText="display: inline ;padding:5px;color:rgb(190,190,190);";
// navRightMenuUl.style.cssText="display: inline ;padding:5px;color:rgb(190,190,190);";
navLeft.style.cssText="display: inline; padding:5px; color:rgb(35,169,110); font-weight:bold; font-size:26px;";

/****************content **********************************************/

let contentBody =document.createElement("div");

for(let i=1 ; i<=15 ; i++){
    let spanCont =document.createElement("span");
    let productCont =document.createElement("div");
    contentBody.className="content";
        productCont.className="product";
        let numberCont=document.createTextNode(`${i}`);
    let productTxt=document.createTextNode("Product");    
    spanCont.appendChild(numberCont);
    productCont.appendChild(spanCont);
    productCont.appendChild(productTxt);
   contentBody.appendChild(productCont);
   contentBody.style.cssText="display:flex; padding:20px; flex-wrap:wrap; justify-content:center; gap:20px; min-height:calc(100vh - 142px); box-sizing:border-box; ";
   productCont.style.cssText="padding:20px; background-color:rgb(255,255,255); border:1px solid rgb(221,221,221); width: calc((100% - 40px) / 3); box-sizing:border-box; text-align:center; color: rgb(136,136,136); border-radius:6px";
   spanCont.style.cssText="font-size:40px; color:black; font-weight:normal; display:block; margin-bottom:10px; margin-top:10px; ";
};
document.body.append(contentBody);




/*****************************footer*********************** */ 


let footerBody =document.createElement("footer");
let footerTxt=document.createTextNode("Copyright 2021");  
footerBody.className="footer";
footerBody.appendChild(footerTxt);

footerBody.style.cssText="background-color:rgb(35,169,110); font-size:26px; text-align:center; padding:20px; color:rgb(255,255,255);";

document.body.append(footerBody);
