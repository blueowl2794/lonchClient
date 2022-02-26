// import { MAILER_PEDIDO } from '../types/index'

export const mailerPedido = (data) =>{
    return async function dispatch(dispatch){
        await fetch("http://localhost:3000/mailer", {
            
            method: 'GET',
            body: JSON.stringify({
                data:data,
            }),
            headers: {
                'content-type': 'application/json',
                
            },
        })
        // const json = await reponse.json();
        // dispatch({
        //     type: MAILER_PEDIDO,
        //     payload: json
        // })
    }
}