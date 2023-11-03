import { z } from 'zod'

import { CredentialsSchema, User } from '.'

export const UserSchema = z
	.object({
		name: z.string().min(1),
		lastname: z.string().min(1)
	})
	.merge(CredentialsSchema)

export function userIsValid(user: User) {
	return UserSchema.safeParse(user).success
}
