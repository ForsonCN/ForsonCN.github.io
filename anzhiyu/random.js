var posts=["bod/BlogToWeChat/","bod/Hexo 博客美化代码块/","bod/Hexo基础配置/","bod/hello-world/","bod/hexo01/","bod/love/","bod/自用服务器脚本大全：一键测评、工具与部署指南/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };