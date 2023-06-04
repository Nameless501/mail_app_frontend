import AuthorizationContext from '../context/AuthorizationContext';

export function AuthorizationContextProvider({ children }) {
    return (
        <AuthorizationContext.Provider value={{}}>
            {children}
        </AuthorizationContext.Provider>
    );
}
