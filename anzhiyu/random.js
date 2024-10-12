var posts=["2024/10/12/hello-world/","2024/10/12/Hexo 博客美化代码块/","2024/10/12/Hexo博客搭建与美化系列教程（一）：基础搭建与部署/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };