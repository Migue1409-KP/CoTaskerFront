export interface UserData {
	userId: string
	name: string
	lastname: string
	verified: boolean
}

export interface UserDataDTO {
	idUsuario: string
	nombre: string
	apellido: string
	correoElectronico: string
	correoElectronicoConfirmado: boolean
	contrasena: string
}

export const userDataDefaultValues: UserData = {
	userId: '',
	name: '',
	lastname: '',
	verified: false
}
