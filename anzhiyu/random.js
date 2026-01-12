var posts=["f873d6e0/","395bbd0/","c551739d/","43934f6d/","67edc204/","72cfe8e6/","505985a3/","9e096d84/","830fe511/","340eec7/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };