'use client'

import { AUTHROUTES } from '@/config/routes/Auth.routes'
import { User } from '@/modules/User/domain'
import { registerService } from '@/modules/User/infrastructure/register.service'
import cn from 'classnames'
import { metronome } from 'ldrs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'

interface FormState {
	error: boolean
	loading: boolean
}

export function RegisterForm() {
	const [formState, setFormState] = useState<FormState>({
		error: false,
		loading: false
	})
	const router = useRouter()

	// TODO: Modularizar a un provider los loaders a utilizar de ldrs debido a que son web components
	metronome.register()

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const { name, lastname, email, password } = event.target.elements
		const newUser: User = { name: name.value, lastname: lastname.value, email: email.value, password: password.value }

		setFormState(prev => ({ ...prev, error: false, loading: true }))
		await registerService(newUser)
			.then(() => {
				toast.success('Registrado correctamente')
				router.push(AUTHROUTES.LOGIN)
			})
			.catch(reason => {
				console.log(reason)
				toast.error(reason.message)
				setFormState(prev => ({ ...prev, error: true }))
			})
			.finally(() => {
				setFormState(prev => ({ ...prev, loading: false }))
			})
	}

	return (
		<form onSubmit={handleSubmit} className={cn(formState.error ? 'error' : null)}>
			<h3>Ingrese su informacion</h3>
			<div className='personal-info'>
				<input id='name' name='name' type='text' placeholder='Nombre' autoComplete='given-name' />
				<input id='lastname' name='lastname' type='text' placeholder='Apellido' autoComplete='family-name' />
			</div>
			<input type='email' placeholder='Correo Electronico' autoComplete='email' name='email' />
			<input type='password' placeholder='Contraseña' autoComplete='new-password' name='password' />
			<button type='submit' className={cn(formState.loading ? 'loading' : '')}>
				{formState.loading ? <l-metronome size='24' speed='2' color='white'></l-metronome> : 'Registrarme'}
			</button>
			<p className='change'>
				Ya tienes una cuenta?{' '}
				<b>
					<Link href={AUTHROUTES.LOGIN}>Inicia sesión</Link>
				</b>
			</p>
		</form>
	)
}
