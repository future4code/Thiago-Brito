import { connection } from "..";

export default async function selectRecipeById(
id_recipe:string
): Promise<any> {
    const result = await connection("Cookenu_Recipes")
    .select ('*')
    .where({id_recipe})

    return result[0]
}