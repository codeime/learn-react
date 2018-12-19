export default {
    getItem(key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (error) {
            if(__DEV__) {
                console.error('localStorage.getItem ERROR:', error.message)
            }
        }
        return value
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (error) {
            if(__DEV__) {
                console.error('localStorage.setItem ERROR:', error.message)
            }
        }
    }
}