import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useForm } from '../../hooks'

describe('Test on useForm custom', () => {


    const initialForm = {
        name: 'flportilla',
        email: 'flportilla@test.com'
    }


    test('should return default values', () => {

        const { result } = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    })

    test('should change the name on the form', () => {

        const { result } = renderHook(() => useForm())

        const { formState, onInputChange } = result.current

        const event = {
            target: {
                name: 'name',
                value: 'flportilla'
            }
        }

        act(() => {
            onInputChange(event)
        })

        expect(result.current.formState.name).toBe('flportilla')
    })

    test('should change the name on the form', () => {

        const { result } = renderHook(() => useForm(initialForm))

        const { formState, onInputChange, onResetForm } = result.current

        const event = {
            target: {
                name: 'name',
                value: 'flportilla2'
            }
        }

        act(() => {
            onInputChange(event);
            onResetForm()
        })
        expect(result.current.formState).toBe(initialForm)
    })


})