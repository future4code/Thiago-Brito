import BaseDatabase from "./BaseDatabase"



class FeedDatabase extends BaseDatabase {
    private tablename:string = "labook_posts"
    public  async insertFeed(id:string, photo:string, description:string, type:string, author_id:string){
        try {
            const result  = await BaseDatabase.connection(this.tablename)
            .insert({
               id,
               photo,
               description,
               type,
               author_id
            })
            
        } catch (error) {
            throw new Error (error.sqlMessage || error.message )
            
        }
    }
    public  async getPost(id:string){
        try {
            const result  = await BaseDatabase.connection(this.tablename)
            .select("*")
            .where({id})
            return result[0]
        } catch (error) {
            throw new Error (error.sqlMessage || error.message )
            
        }
    }
}



export const feedDatabase:FeedDatabase = new FeedDatabase()
