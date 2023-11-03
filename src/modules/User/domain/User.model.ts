import { Credentials, CredentialsDTO } from '.'

export interface User extends Credentials {
	name: string
	lastname: string
}

export interface UserDTO extends CredentialsDTO {
	nombre: string
	apellido: string
}

export const userDefaultValues: User = {
	name: '',
	lastname: '',
	email: '',
	password: ''
}
