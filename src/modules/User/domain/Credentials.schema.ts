import { z } from 'zod'

import { Credentials } from '.'

const regex = {
	email: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
	password: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]))/g
}

export const CredentialsSchema = z.object({
	email: z.string().regex(regex.email),
	password: z.string().min(8).max(64).regex(regex.password)
})

export function credentialsIsValid(credentials: Credentials) {
	return CredentialsSchema.safeParse(credentials).success
}
