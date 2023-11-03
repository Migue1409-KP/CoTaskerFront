interface ProjectDates {
	init: string
	final: string
}

export interface Project {
	title: string
	description: string
	dates?: ProjectDates
}

export interface ProjectDTO {
	idUsuario: string
	nombre: string
	descripcion: string
	fecha: {
		fechaEstimadaInicio: string
		fechaEstimadaFin: string
	}
}

export const projectDefaultValues: Project = {
	title: '',
	description: '',
	dates: {
		init: '',
		final: ''
	}
}
