import { RegisterForm } from '@ui/Forms/Auth'
import Image from 'next/image'

export default function login() {
	return (
		<main className='auth login'>
			<section className='welcome'>
				<h1>Bienvenido! a</h1>
				<Image src='/images/logo.svg' alt='Logo CoTasker' width={156} height={52} className='logo' />
			</section>
			<section className='login-form'>
				<h2>Su asistente ideal para el dia</h2>
				<p className='description'>
					Planifica tu día, mantén el rumbo y alcanza tus objetivos con nuestra sencilla aplicación.
				</p>
				<RegisterForm />
			</section>
		</main>
	)
}
