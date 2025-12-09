export function savedUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function getSavedUser() {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
}

export function clearSavedUser() {
    localStorage.removeItem('user');
}   