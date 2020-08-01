export class Post {
  owner : string;
  image : string;
  postImage : string;
  likes : number;
  description : string ;

  constructor (  owner : string,image : string,postImage : string, likes : number, description : string ) {
    this.owner = owner;
    this.image = image;
    this.postImage = postImage;
    this.likes = likes;
    this.description = description;
  }
  }

