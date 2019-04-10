$(document).ready(function() {
  let myThings = [
    {
      title:"_armin\\ portfolio",
      description:"Website build from mockup given by @viktorijavalsoe.",
      url:"./arminportfolio",
      github:"https://github.com/Lunasdude/ArminSemovic_portfolio"
    },
    {
      title:"_millhouse",
      description:"Blog project using PDO, run by upbeatPigeons.",
      url:"./millhouse",
      github:"https://github.com/upbeatPigeons/Millhouse"
    },
    {
      title:"_buy\\ bad\\ thing",
      description:"Basic bootstrap PHP webshop, to learn CRUD",
      url:"./crud",
      github:"https://github.com/Lunasdude/crud_shop"
    },
    {
      title:"_parrots",
      description:"Gallery site, to learn flexbox and image fitting",
      url:"./parrots",
      github:"https://github.com/Lunasdude/parrots"
    }
  ];
  let myMedias = [
    {
      media:"_linkedin",
      url:"https://www.linkedin.com/in/lukaslennstring/",
    },
    {
      media:"_github",
      url:"https://github.com/Lunasdude/",
    },
    {
      media:"_e-mail",
      url:"mailto:lukas.lennstring@gmail.com",
    },
    {
      media:"_twitter",
      url:"https://twitter.com/lunasduder",
    },
  ];

  $.each(myThings, function() {
    let box = $("<div>").addClass("thing");
    let links = $("<div>").addClass("links");

    $("<h3>").text(this.title).appendTo(box);
    $("<p>").text(this.description).appendTo(box);

    $("<a>").attr("href", this.url).text("/live").appendTo(links);
    $("<a>").attr("href", this.github).text("/github").appendTo(links);

    links.appendTo(box);
    box.appendTo(".thingContainer");
  });

  $.each(myMedias, function() {
    let clicky = $("<a>").text(this.media).attr("href", this.url).addClass("link");
    clicky.appendTo(".contact");
  });
});