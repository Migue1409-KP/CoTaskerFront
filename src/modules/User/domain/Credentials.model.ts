export interface Credentials {
	email: string
	password: string
}

export interface CredentialsDTO {
	correoElectronico: string
	contrasena: string
}

export const credentialsDefaultValues: Credentials = {
	email: '',
	password: ''
}
