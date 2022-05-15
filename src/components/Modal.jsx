import CerrarBtn from '../img/cerrar.svg'

function Modal({setModal, animarModal, setAnimarModal}) {
    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500)
    }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={CerrarBtn}
          alt="cerrar modal"
          onClick={ocultarModal}
        />
      </div>

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} >
          <legend>Nuevo Gasto</legend>
          <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              id='nombre'
              type='text'
              placeholder='Añade el Nombre del Gasto'
            />
          </div>

          <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>
            <input
              id='cantidad'
              type='text'
              placeholder='Añade la Cantidad del Gasto: ej. 300'
            />
          </div>

          <div className='campo'>
            <label htmlFor="categoria">Categoría</label>
            <select name="" id="categoria">
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
            <input
                type="submit"
                value="Añadir Gasto"
            />
          </div>
      </form>
    </div>
  )
}

export default Modal
