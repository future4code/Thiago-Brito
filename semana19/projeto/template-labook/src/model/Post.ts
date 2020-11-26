
enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

export class Post {
   constructor(
   private id: string,
   private photo: string,
   private description: string,
   private type: POST_TYPES,
   private createdAt: Date,
   private authorId: string
   ) { }

   public postId = () => this.id
   public postPhoto = () => this.photo
   public postDescription = () => this.description
   public postType= () => this.type
   public postCreatedAt= () => this.createdAt
   public postAuthorId= () => this.authorId

}

