// Max 30
// Descripcion min 0 max 60
import { z } from 'zod'

import { Project } from '.'

const noSpecialCharacters = /^[a-zA-Z0-9]/

export const ProjectSchema: z.ZodType<Project> = z.object({
	title: z.string().min(1).max(30).regex(noSpecialCharacters),
	description: z.string().min(1).max(60),
	dates: z.object({
		init: z.string(),
		final: z.string()
	})
})

export function projectIsValid(project: Project) {
	if (ProjectSchema.safeParse(project).success) {
		console.log('cumple')
		return true
	}
	throw new Error('Formato erroneo')
}
