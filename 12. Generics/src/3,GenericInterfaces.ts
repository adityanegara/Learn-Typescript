interface Result<T> {
    data: T | null,
    error: string | null,
}

function fetch<T>(url: string): Result<T> {
    return { data: null, error: null }
}

interface User {
    username: string,
}

interface Product {
    title: string,
}

const response = fetch<User>('testing')
console.log(response.data?.username)