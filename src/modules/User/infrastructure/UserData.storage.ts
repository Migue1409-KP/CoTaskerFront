import { UserData } from '../domain'

export function saveUserDataInLocalStorage(userdata: UserData) {
	localStorage.setItem('userdata', JSON.stringify(userdata))
}
