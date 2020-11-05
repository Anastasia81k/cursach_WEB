import {useCallback} from 'react'
import 'react-hooks-lib'

export const useMessage = () => {
    return useCallback(text => {
        if (window.M && text) {
            window.M.toast({ html: text })
        }
    }, [])
}
