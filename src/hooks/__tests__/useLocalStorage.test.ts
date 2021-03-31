import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('should call getItem on render', () => {
    renderHook(() => useLocalStorage('value', 'initial'));
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  it('should call setItem on text change', () => {
    const { result } = renderHook(() => useLocalStorage<string>('value', ''));
    act(() => {
      result.current[1]('query');
    });
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('value', '"query"');
  });

  it('should get value from local storage', () => {
    window.localStorage.getItem = jest.fn(() => '"initial"');
    renderHook(() => useLocalStorage('value', ''));
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    window.localStorage.getItem = jest.fn(() => null);
  });

  it('should set value with function', async () => {
    const { result } = renderHook(() => useLocalStorage<() => string>('value', () => ''));
    act(() => {
      result.current[1](() => 'function');
    });
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(window.localStorage.setItem).toHaveBeenCalledWith('value', '"function"');
  });

  it('should catch JSON parse error', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    window.localStorage.getItem = jest.fn(() => 'initial');
    renderHook(() => useLocalStorage('value', ''));
    expect(errorSpy).toHaveBeenCalledTimes(1);
    window.localStorage.getItem = jest.fn(() => null);
    errorSpy.mockRestore();
  });

  it('should catch JSON stringfy error', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { result } = renderHook(() => useLocalStorage<unknown>('value', ''));
    const cyclicObj: { normal: unknown } = { normal: undefined };
    const normalObj = {
      cyclic: cyclicObj,
    };
    cyclicObj.normal = normalObj;
    act(() => {
      result.current[1](cyclicObj);
    });
    expect(errorSpy).toHaveBeenCalledTimes(1);
    errorSpy.mockRestore();
  });
});
