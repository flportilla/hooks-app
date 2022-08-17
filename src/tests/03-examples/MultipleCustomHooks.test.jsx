import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

jest.mock('../../hooks/useFetch')
jest.mock('../../hooks/useCounter')

describe('Tests on <MultipleCustomHooks/> component', () => {

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should show the component correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />)

        expect(screen.getAllByText('Loading...'))
        expect(screen.getAllByText('Breaking bad quotes'))

        const nextButton = screen.getByRole('button', { name: 'Next quote' })

        expect(nextButton.disabled).toBeTruthy()
    })

    test('should show a quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'H.P. Lovecraft', quote: 'Life is a hideous thing...' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getAllByText('Life is a hideous thing...')).toBeTruthy();
        expect(screen.getAllByText('H.P. Lovecraft')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    })

    test('should call the increment function', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'H.P. Lovecraft', quote: 'Life is a hideous thing...' }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    })

})