import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../09-useContext/context/UserContext'
import { LoginPage } from '../../09-useContext/LoginPage'

describe('Tests on <LoginPage/> component', () => {

    test('should show component without the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre-tag')
        expect(preTag.innerHTML).toBe('null')
    })

    test('should call the setUser when clicking on the button', () => {

        const user = {
            id: 1,
            name: 'flportilla'
        }

        const setUser = jest.fn()

        render(
            <UserContext.Provider value={{ user, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        )

        const setUserButton = screen.getByLabelText('setUser-button')
        fireEvent.click(setUserButton)

        expect(setUser).toHaveBeenCalledWith({ id: 123, name: 'flportilla' })

    })

})