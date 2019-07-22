/*This function simply takes you back to the home page
when you click on the logo of the company in the toolbar*/
function homeLink(){
    window.location = 'file:///home/b10/Desktop/project_files/B10OnlineHtml/Html/index.html';
}
function aboutmeLink(){
    window.location = 'file:///home/b10/Desktop/project_files/B10OnlineHtml/Html/index.html';
}
/*This function shows the popup menu from the menu logo in
the toolbar.  When a mouse hovers over the icon, it displays
the menu.  When a mouse clicks on the icon again, it closes
the menu.  When you are hovering over the div containing the
menu, it will stay visible. when you click on one of the elements
it will dissappear again.*/
function openHomeMenu(){
    var x = document.getElementById("toolbar-dropdown");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
  }
}
