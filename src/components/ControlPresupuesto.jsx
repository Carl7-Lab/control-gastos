import { useState, useEffect } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({gastos, presupuesto}) {

  const [ disponible, setDisponible ] = useState(0)
  const [ gastado, setGastado ] = useState(0)
  const valor = gastado

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)
    setTimeout( () => {
      setGastado(totalGastado)
    }, 500)
  }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: "USD"
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3882F6',
            trailColor: '#f5f5f5',
            textColor: '#3882F6'
          })}
          value={valor}
          maxValue={presupuesto}
          text={`${(valor / presupuesto * 100).toFixed(2)}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <p>
            <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
        </p>
        <p>
            <span>Disponible: </span> {formatearCantidad(disponible)}
        </p>
        <p>
            <span>Gastado: </span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
