import React from 'react';
import { Link } from 'react-router-dom';
import './FinishCart.css';

export default ({}) => {
  return (
    <div className="container">
      <h2 className="text-center" style={{ margin: ' 0 auto' }}>
        Compra Finalizada!
      </h2>
      <div className="row">
        <div style={{ display: 'flex', margin: ' 0 auto' }}>
          <div
            className="col-md-12 text-center"
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              margin: ' 0 auto',
            }}
          >
            <div className="box">
              <div className="box-content">
                <h1 className="tag-title">Felicidades!</h1>
                <hr />
                <p>
                  En unos dias te llegara el pedido que acabas de realizar.
                  Puedes ver su estado en Mis ordenes
                </p>
                <br />
                <Link to="/products" className="btn btn-block btn-primary">
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
