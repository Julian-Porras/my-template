
export function Card1({style, children}) {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 ${style}`}>
            {children}
        </div>
    );
}