import { Providers } from '@/config/providers'
import { amaticSc, outfit } from '@fonts'
import '@styles/app.scss'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Cotasker',
	description: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='es' className={`${outfit.variable} ${amaticSc.variable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
