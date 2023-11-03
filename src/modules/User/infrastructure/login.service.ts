import { APIROUTES } from '@/config/routes'
import axios from 'axios'

import { credentialsDTOAdapter } from '../application'
import { userDataAdapter } from '../application/UserData.adapter'
import { Credentials, UserDataDTO, credentialsIsValid } from '../domain'
import { saveSessionInCookies } from './Session.cookies'
import { saveUserDataInLocalStorage } from './UserData.storage'

export async function loginService(credentials: Credentials) {
	try {
		if (credentialsIsValid(credentials)) {
			const { data: res } = await axios.post(APIROUTES.LOGIN, credentialsDTOAdapter(credentials))
			const userDataDTO: UserDataDTO = res.datos[0]
			saveUserDataInLocalStorage(userDataAdapter(userDataDTO))
			saveSessionInCookies(userDataDTO.idUsuario)
			return
		}

		throw new Error('Credenciales invalidas')
	} catch (reason: any) {
		const message = reason.response?.data.mensajes || reason.message
		throw new Error(message)
	}
}
