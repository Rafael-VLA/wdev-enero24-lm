import { useUserContext } from "../hooks/useUserContext"

export const User = ({ name, id }) => {

    const { handleSelected } = useUserContext()

    const handleClick = () => {
        handleSelected(id)
    }

    return (
        <div className="flex gap-3">
            <h1>{ name }</h1>
            <button 
                className="bg-blue-400 px-2 py-1 text-white rounded-lg"
                onClick={handleClick}
            >
                Seleccionar usuario
            </button>
        </div>
    )
}
