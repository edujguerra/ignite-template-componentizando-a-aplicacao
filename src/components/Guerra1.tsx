interface GuerraProps {
    nome: string
    handleNome: () => void;
}

export function Guerra1( {nome, handleNome}:GuerraProps ){
    return (
        <nav className="sidebar">
            <h1>{nome}</h1>   
            <button type="button" onClick={handleNome}></button>         
        </nav>
    )
}