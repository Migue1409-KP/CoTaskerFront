import Cookies from 'js-cookie'

export function saveSessionInCookies(id: string) {
	Cookies.set('session', id)
}
