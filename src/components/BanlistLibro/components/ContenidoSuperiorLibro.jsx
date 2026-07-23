import './ContenidoSuperiorLibro.css';

const ContenidoSuperiorLibro = ({ titulo, descripcion }) => {
  return (
    <div
      className={`ContenidoSuperiorLibro ${
        !titulo ? 'ContenidoSuperiorLibro--sinTitulo' : ''
      }`}
    >

      {titulo && (
        <h2 className='ContenidoSuperiorLibro__titulo'>
          {titulo}
        </h2>
      )}

      <div className='ContenidoSuperiorLibro__descripcion'>
        {descripcion}
      </div>

    </div>
  );
};

export default ContenidoSuperiorLibro;