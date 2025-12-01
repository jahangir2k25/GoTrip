import AuthContex from './AuthContex'

const ContexProvider = ({ children }) => {
    const contexData = {

    }
    return (
        <AuthContex.Provider value={contexData}>
            {children}
        </AuthContex.Provider>
    )
}

export default ContexProvider