const ERR_MSG_EMPTY_FIELD = "Campo vazio"
const ERR_MSG_TOO_MANY_CHARS = "Caracteres demais"
const ERR_MSG_WRONG_FORMAT = "Formato inválido"

const CHAR_LIMIT_SMALL = 60
const CHAR_LIMIT_BIG = 1080
const EMAIL_REGEX = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")

export function validEmail(email: string): string {
    if (email.length == 0) {
        return ERR_MSG_EMPTY_FIELD
    }
    if (email.length > CHAR_LIMIT_SMALL) {
        return ERR_MSG_TOO_MANY_CHARS
    }
    if (!EMAIL_REGEX.test(email)) {
        return ERR_MSG_WRONG_FORMAT
    }
    return ""
}

export function validString(s: string, size: 'sm' | 'bg'): string {
    if (s.length == 0) {
        return ERR_MSG_EMPTY_FIELD
    }
    if (s.length > (size == 'sm' ? CHAR_LIMIT_SMALL : CHAR_LIMIT_BIG)) {
        return ERR_MSG_TOO_MANY_CHARS
    }
    return ""
}

export function getBudgetOptions() {
    return ["Mais de R$10.000", "Mais de R$5.000", "Mais de R$2.500", "Menos de R$2.500"]
}