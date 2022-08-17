import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../hooks'

describe('Test on <useCounter /> custom hook', () => {


    test('should return default values', () => {

        const { result } = renderHook(() => useCounter())

        const { counter, increment, reset, decrement } = result.current


        expect(counter).toBe(10)

        expect(increment).toEqual(expect.any(Function))

        expect(reset).toEqual(expect.any(Function))

        expect(decrement).toEqual(expect.any(Function))

    })

    test('should generate a counter with the initial value of 100', () => {

        const { result } = renderHook(() => useCounter(100))

        const { counter } = result.current

        expect(counter).toBe(100)
    })

    test('should increment the counter', () => {

        const { result } = renderHook(() => useCounter())

        const { counter, increment } = result.current
        act(() => {
            increment();
            increment(2);
        })

        expect(result.current.counter).toBe(13)


    })

    test('should decrement the counter', () => {

        const { result } = renderHook(() => useCounter())

        const { counter, decrement } = result.current
        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(7)


    })

    test('should reset the counter', () => {

        const { result } = renderHook(() => useCounter())

        const { counter, increment, reset } = result.current
        act(() => {
            increment(25);
            reset();
        })

        expect(result.current.counter).toBe(10)

    })

})