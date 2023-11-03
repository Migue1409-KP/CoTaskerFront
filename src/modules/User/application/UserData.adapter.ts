import { UserData, UserDataDTO } from '../domain/UserData.model'

export function userDataAdapter(userdataDTO: UserDataDTO): UserData {
	return {
		userId: userdataDTO.idUsuario,
		name: userdataDTO.nombre,
		lastname: userdataDTO.apellido,
		verified: userdataDTO.correoElectronicoConfirmado
	}
}
