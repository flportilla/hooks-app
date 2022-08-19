import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../09-useContext/MainApp'


describe('Tests on <MainApp/> component', () => {

    test('should show the <HomePage />', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('HomePage')).toBeTruthy()
    })

    test('should show the <HomePage />', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy()
    })



})