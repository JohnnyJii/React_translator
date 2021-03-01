const key = "user"

const addUser = (userName) => {
    console.log(userName)
    localStorage.setItem(key, JSON.stringify({ userName, sentences: []}))
}

const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user
}

const saveUserTranslation = (saveSentence) => {
    const user = getUser();

    if (user != null) {
        if (user.sentences.length >= 10) {
            user.sentences.sort((a, b) => {
                return new Date(a.date) - new Date(b.date)
            })
            user.sentences.shift();
        }
        user.sentences.push({ sentence: saveSentence, date: new Date() })
        localStorage.setItem(key, JSON.stringify(user))
    }
}

const logout = () => {
    localStorage.removeItem(key)
}

export { addUser, getUser, saveUserTranslation, logout}
