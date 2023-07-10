import { URL_BASE } from '../utils/urls'

export function GetCharacterInfo(id) {
    const res = fetch(`${URL_BASE}/${id}`)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => { return error })
    return res
}