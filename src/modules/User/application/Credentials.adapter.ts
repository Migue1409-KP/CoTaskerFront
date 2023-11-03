import { Credentials, CredentialsDTO } from '../domain'

export function credentialsDTOAdapter(credentials: Credentials): CredentialsDTO {
	return {
		correoElectronico: credentials.email,
		contrasena: credentials.password
	}
}

export function credentialsAdapter(credentialsDTO: CredentialsDTO): Credentials {
	return {
		email: credentialsDTO.correoElectronico,
		password: credentialsDTO.contrasena
	}
}
