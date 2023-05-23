import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map(link=><a href={`#${link}`} key={link}>{link}</a>)
  console.log(linkList)
  return (<nav>
    {linkList}
  </nav>);
}

export default NavBar;
