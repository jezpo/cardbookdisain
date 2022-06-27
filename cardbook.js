var NewComponent = React.createClass({
    render: function() {
      return (
  
        <div className="container">
          <div className="card-container">
            <div className="description">
              <p>
                Argumento y ejemplo: 14 ejemplos de argumentos. 
                Un argumento es un razonamiento con el que se intenta demostrar o negar una afirmación. 
                irve para probar o refutar hipótesis y convencer al interlocutor de que la posición 
                que se está defendiendo es válida.
              </p>
              <h3>radio</h3>
              <hr />
              <h4>325pag.</h4>
              <div className="social">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-youtube" /></a>
              </div>
            </div>
            <div className="header">
              <h2>Ver Detalles</h2>
              <a href="#">
                <img src="book.png" alt="" width={140} height={210} />
              </a>
            </div>
          </div>
        </div>
      );
    }
  });