import { URL_BASE } from "../utils/urls"

export function GetCharacters(pageNumber = 1) {
    const res = fetch(`${URL_BASE}/?page=${pageNumber}`)
        .then(response => response.json())
        .then(({ results, info }) => { return { results, info } })
        .catch(() => { return [] })
    return res
}