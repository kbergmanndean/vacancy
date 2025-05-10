'use client'
import {HeaderContainer, HeaderTitle} from './headerStyles'
import Link from 'next/link'

export const Header = () => {
    return (<HeaderContainer>
        <HeaderTitle>Vacancy</HeaderTitle>
        <Link href="/table">Table</Link>
        <Link href="/form">Form</Link>
    </HeaderContainer>)
}