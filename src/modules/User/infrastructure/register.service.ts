import { APIROUTES } from '@/config/routes'
import axios from 'axios'

import { userDTOAdapter } from '../application'
import { User, userIsValid } from '../domain'

export async function registerService(user: User) {
	try {
		if (userIsValid(user)) {
			const res = await axios.post(APIROUTES.REGISTER, userDTOAdapter(user))
			return res
		}

		throw new Error('No puedes crear una cuenta con estos datos')
	} catch (reason: any) {
		const message = reason.response?.data.mensajes || reason.message
		throw new Error(message)
	}
}
