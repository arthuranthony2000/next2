// http://localhost:3000

export default function Principal() {

    return (

        <div>

            <h1>Nova Página 1</h1>

            <MariaPrea msg="Vou tomar café"/>

        </div>

    )

}

export function MariaPrea(props) {

    return (
        <div>
       <h2>Morreu Maria Preá...</h2>
       
       <h3> { props.msg }</h3>
       </div>
    )

}

