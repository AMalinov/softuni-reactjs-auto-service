const URL = "http://localhost:3030";

export const login = async (email, password) => {
    let res = await fetch(`${URL}/users/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = (email, password) => {
    return fetch(`${URL}/users/register`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => res.json());
};

export const logout = (token) => {
    return fetch(`${URL}/users/logout`, {
        headers: {
            "x-authorization": token,
        },
    });
};

export const getUser = () => {

    let email = localStorage.getItem("email");

    return email;
};

export const isAuth = () => {
    return Boolean(getUser());
};
