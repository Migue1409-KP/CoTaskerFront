'use client'

import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'

interface CreateProjectProps {
	modalState: {
		modalStatus: boolean
		modalChangeStatus: () => void
	}
}

function CreateProject({ modalState }: CreateProjectProps) {
	console.log('funciona')
	return (
		<Dialog.Root open={modalState.modalStatus} onOpenChange={modalState.modalChangeStatus}>
			<Dialog.Trigger />
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content>
					<form action=''>
						<h3>Añade un nuevo proyecto</h3>
					</form>
					<Dialog.Title />
					<Dialog.Description />
					<Dialog.Close />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default CreateProject
