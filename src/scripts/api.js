//окен: 2e6d7127-2c96-4424-9ab2-ffa0410b4c23
//Идентификатор группы: wff-cohort-27


const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-27',
    headers: {
        authorization: '2e6d7127-2c96-4424-9ab2-ffa0410b4c23',
        'Content-Type': 'application/json'
    }
}

function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    else {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

export function getUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers: config.headers
    })
        .then(res => handleResponse(res))
}


export function getInitialCards() {
    return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
        .then(res => handleResponse(res))
}


export function sendEditProfileRequest(newName, newDescription) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: newName,
            about: newDescription
        })
    })
        .then(res => handleResponse(res))
}



export function sendAddCardRequest(newName, newLink) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            "name": newName,
            "link": newLink,
        })
    })
        .then(res => handleResponse(res))
}


export function sendDeleteCardRequest(cardId) {
    return fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    })
        .then(res => handleResponse(res))
}


export function sendCardLikeRequest(cardId, status) {
    if (status) {
        return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: config.headers
        })
            .then(res => handleResponse(res))
    }
    else {
        return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: config.headers
        })
            .then(res => handleResponse(res))
    }
}

export function sendAvatarRequest(newAvatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            "avatar": newAvatar
        })
    })
        .then(res => handleResponse(res))
}