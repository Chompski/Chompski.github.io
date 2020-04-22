let blog = [{
  mainID: "blog1",
  innerID: "inner1",
  titleID: "title1",
  dateID: "date1",
  contentID: "content1",
  imageID: "image1",
  title: "object title",
  date: "10/11/2044",
  content: "blog object content",
  imageSRC: "Images/antdentifierex.png",
}, {
  mainID: "blog2",
  innerID: "inner2",
  titleID: "title2",
  dateID: "date2",
  contentID: "content2",
  imageID: "image2",
  title: "object title 2",
  date: "10/11/2044 2",
  content: "blog object content 2",
  imageSRC: "Images/antdentifierex.png",
}];


function createBlog() {

  for (var i = 0; i < blog.length; i++) {

    // Blog Main
    var mainDiv = document.createElement("DIV");
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute("id", "blogID" + i);
    mainDiv.setAttribute("class", "col-12 animated bounceInUp blogMain");

    // Inner div
    var innerMain = document.createElement("DIV");
    innerMain.setAttribute("id", "innerID" + i);
    innerMain.setAttribute("class", "blogPort col-12 row");
    document.getElementById("blogID" + i).appendChild(innerMain);

    // Title div and title
    var titleDiv = document.createElement("DIV");
    titleDiv.setAttribute("id", "titleID" + i);
    titleDiv.setAttribute("class", "col-6");
    document.getElementById("innerID" + i).appendChild(titleDiv);

    var title = document.createElement("H4");
    title.innerHTML = blog[i].title;
    document.getElementById("titleID" + i).appendChild(title);

    //Date Div and date
    var dateDiv = document.createElement("DIV");
    dateDiv.setAttribute("id", "dateID" + i);
    dateDiv.setAttribute("class", "col-6 text-right");
    document.getElementById("innerID" + i).appendChild(dateDiv);

    var date = document.createElement("H4");
    date.innerHTML = blog[i].date;
    document.getElementById("dateID" + i).appendChild(date);

    //content Div and content
    var contentDiv = document.createElement("DIV");
    contentDiv.setAttribute("id", "contentID" + i);
    contentDiv.setAttribute("class", "col-12 text-center");
    document.getElementById("innerID" + i).appendChild(contentDiv);

    var content = document.createElement("P");
    content.innerHTML = blog[i].content;
    document.getElementById("contentID" + i).appendChild(content);

    //Image Div and Image
    var imageDiv = document.createElement("DIV");
    imageDiv.setAttribute("id", "imageID" + i);
    imageDiv.setAttribute("class", "col-12 text-center");
    document.getElementById("innerID" + i).appendChild(imageDiv);

    var image = document.createElement("IMG");
    image.setAttribute("src", blog[i].imageSRC);
    image.setAttribute("class", "mx-auto d-block img-fluid");
    document.getElementById("imageID" + i).appendChild(image);
  }
}
