var posts=["67edc204/","c551739d/","f873d6e0/","72cfe8e6/","505985a3/","395bbd0/","43934f6d/","9e096d84/","830fe511/","340eec7/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };