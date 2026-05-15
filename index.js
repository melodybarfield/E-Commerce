//Adds a class when we open it, and removes it when we close it:

function openMenu() {
  document.body.classList += " menu--open";
}
//adds on (+=) a class ("menu--open") to the class list of the body; important to leave a space before the class name for when there are many classnames in the class list, otherwise it will just add the new classname to the end of the last classname and it won't work

function closeMenu() {
  document.body.classList.remove("menu--open");
}
//removes the "menu--open" class from the class list of the body, which will close the menu when the close button is clicked
