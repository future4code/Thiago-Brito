
export const goToFeed = (history) =>{
    history.push('/feed')
}
export const goToLogin = (history) =>{
    history.push('/login')
};
export const goToPost = (history, id) =>{
    history.push(`/post/${id}`)
};
export const goToSignup = (history) =>{
    history.push('/cadastro')
};
