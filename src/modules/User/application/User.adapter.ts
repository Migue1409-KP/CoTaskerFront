import { User, UserDTO } from '../domain'

export function userAdapter(userDTO: UserDTO): User {}

export function userDTOAdapter(user: User): UserDTO {
	return {
		nombre: user.name,
		apellido: user.lastname,
		correoElectronico: user.email,
		contrasena: user.password
	}
}
