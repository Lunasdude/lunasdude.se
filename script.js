$(document).ready(function() {
  let myThings = [
    {
      title:"",
      description:"",
      url:"",
      github:""
    },
    {
      title:"",
      description:"",
      url:"",
      github:""
    },
    {
      title:"",
      description:"",
      url:"",
      github:""
    },
    {
      title:"",
      description:"",
      url:"",
      github:""
    }
  ];

  $.each(myThings, function() {
    let box = $("<div>").addClass("thing");
    $("<h3>").text(this.title).appendTo(box);
    $("<p>").text(this.description).appendTo(box);
    $("<a>").attr("href", this.url).text("/live").appendTo(box);
    $("<a>").attr("href", this.github).text("/github").appendTo(box);
    
    box.appendTo(".thingContainer");
  });
  $("<img>").attr("src", source).attr("alt", description).appendTo("#dialog");

});