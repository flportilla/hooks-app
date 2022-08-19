import { render, screen } from '@testing-library/react'
import { UserContext } from '../../09-useContext/context/UserContext'
import { HomePage } from '../../09-useContext/HomePage'

describe('Tests on <HomePage/> component', () => {

    const user = {
        id: 1,
        name: 'flportilla'
    }

    test('should show the component without the user', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre-tag')
        expect(preTag.innerHTML).toBe('null')
    })

    test('should show the component without the user', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre-tag')

        expect(preTag.innerHTML).toContain(user.name)
        expect(preTag.innerHTML).toContain(`${user.id}`)

    })

})
