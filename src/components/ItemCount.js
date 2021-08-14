import { useState } from 'react';

export default function ItemCount ({ initial = 1, stock = 0, onAdd = () => {} }){
  const [ userSelected, setUserSelected] = useState (initial)

  const decrement = () => {
    if (userSelected > 1) setUserSelected (userSelected -1)
  }

  const increment = () => {
    if (userSelected < stock) setUserSelected (userSelected +1)
  }



return(
  <>
  <button onClick = {() => decrement()}>-</button>
  <button onClick = {() => increment()}>+</button>
  <div>{userSelected}</div>
  <button onClick = {onAdd}> Argregar al carrito</button>
  </>

)
}