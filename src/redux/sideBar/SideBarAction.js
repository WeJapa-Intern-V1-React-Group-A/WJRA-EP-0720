export const TOGGLE_OPEN = 'TOGGLE_OPEN'
export const TOGGLE_CLOSE = 'TOGGLE_CLOSE'

export const toggleOpen =()=>{
    return {
        type: TOGGLE_OPEN
    }
}

export const toggleClose =()=>{
    return {
        type: TOGGLE_CLOSE
    }
}