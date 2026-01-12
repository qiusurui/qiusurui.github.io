var posts=["c551739d/","f873d6e0/","72cfe8e6/","395bbd0/","67edc204/","505985a3/","43934f6d/","830fe511/","9e096d84/","340eec7/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };