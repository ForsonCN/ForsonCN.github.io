var posts=["2024/10/12/hello-world/","2024/10/12/Hexo 博客美化代码块/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };