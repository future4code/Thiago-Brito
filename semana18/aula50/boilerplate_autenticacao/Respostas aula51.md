

### Exercicios aula51

1)

a)
Rounds é a forma de representar o cost pelo bycript, onde cost seria oque delimita o tempo de execução do algoritimo.
Já salt é uma adição de camada ao final do hash aumentando a complexidade da criptografia, usei 12 por ser o padrão da maioria dos libs.
b)
import * as bcrypt from 'bcryptjs';

export const hash = async(plainText:string):Promise<string>=>{
    const rounds=Number(process.env.BCRYPT_COST);
    const salt= await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt)
}

c)
export const compare = async(plainText:string, cypherText:string): Promise<boolean>=>{
        return bcrypt.compare(plainText, cypherText)
}

2)
a)
Deve modificar o cadastro primeiro já que o fluxo correto é criptografar a senha que o usuario criar primeiro para depois compara-la na hora do login.
b)