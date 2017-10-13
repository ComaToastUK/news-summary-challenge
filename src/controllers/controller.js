createNote();
showFullArticle();

var articleList = new articleList();
var renderer = new Renderer();

function addArticle() {
  document
  .getElementById("create_article")
  .addEventListener("click", function(clickEvent) {
    clickEvent.preventDefault();
    var text = document.getElementById("article").value;
    articleList.addArticle(link);
    var values = {
      article_list: noteBuddy.noteList(),
    };
    renderer.view(values);
  });
}

function showFullArticle() {
  window
    .addEventListener("hashchange", function(showFull) {
      var articleIndex = location.hash.split("$")[1];
      var values = {
        single_article: newsList.singleArticle(articleIndex)
      };
      renderer.view(values);
    });
}
