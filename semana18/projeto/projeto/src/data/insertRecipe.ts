import { connection } from "..";

export default async function insertRecipe(
    
    id_recipe: string,
    name:string,
    ingredients:string,
    instructions:string,
    id_user:string,
    createdAt:Date
): Promise<any> {
    await connection('Cookenu_Recipes')
    .insert({
        id_recipe,
        name,
        ingredients,
        instructions,
        id_user,
        createdAt
    })
}

 

