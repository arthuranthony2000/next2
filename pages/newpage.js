import { MariaPrea } from "./index"

// http://localhost:3000/newpage

export default function Page() {

   return (

      <div>

         <h1>Nova Página 2</h1>

         <JosePrea msg="Oxente Maria, cadê você?"/>

         <MariaPrea msg="Ei José, estou aqui !"/>

      </div>

   )

}

export function JosePrea(props) {

   return (
      <div>
         <h2>Morreu José Preá...</h2>

         <h3> {props.msg}</h3>
      </div>
   )

}