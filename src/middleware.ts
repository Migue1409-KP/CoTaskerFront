import { APPROUTES, AUTHROUTES } from '@routes'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	try {
		const session: any = request.cookies.get('session')
		if (session) {
			const { value: token } = session

			if (token) {
				if (pathname === AUTHROUTES.REGISTER || pathname === AUTHROUTES.LOGIN)
					return NextResponse.redirect(new URL(APPROUTES.HOME, request.url))

				return NextResponse.next()
			}
		}

		throw new Error('Sesion no encontrada')
	} catch (error: any) {
		console.log('❗', error.message, '\n', pathname)
		if (pathname === AUTHROUTES.LOGIN || pathname === AUTHROUTES.REGISTER) return NextResponse.next()

		return NextResponse.redirect(new URL(AUTHROUTES.LOGIN, request.url))
	}
}

export const config = {
	// * Se debe excluir todo lo ubicado en la carpeta public
	matcher: ['/', '/((?!api|_next/static|images|icons|favicon.ico).*)']
}
