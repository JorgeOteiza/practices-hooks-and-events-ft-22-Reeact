const persona = { id: 1, name: 'John', lastname: 'Doe' }

const Saludo = ({ id, ...valores }) => {
    return (
        <h2>Hello, my name is {valores.name} {valores.lastname} and I'm the employee number {id}</h2>
    )
}

<>
    <Saludo id={1} name={"John"} lastname={"Doe"} />
    <Saludo {...persona} />
</>
//console.log(saludo(persona.name, persona.lastname))
