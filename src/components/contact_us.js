import React from 'react';
import {Link} from 'react-router-dom';

//Creacion de componente
export const Contactus = () => 
(
  <div className="container">
        <div className="row">
          <center><h2>Complaints Or Suggestions Via E-mail</h2></center>
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <div className="col-md-12 row" style={{padding: '0px', marginBottom: '10px'}}>
                  <div className="col-md-2">
                    <img src="http://dinus.org/img/fakultas/FIK/cs/cs.svg" />
                    <div style={{marginLeft: '30px'}}>
                      <img src="http://dinus.org/img/fakultas/FIK/cs/cs.png" width="70px" height="70px" className="img-circle" style={{border: '3px solid #052C52'}} />
                    </div>
                  </div>
                  <div className="col-md-10">
                    <hr />
                    <p style={{paddingLeft: '55px', fontSize: '1.3em'}}><strong>Zaskia Amanda</strong></p>
                  </div>
                </div>
                <form>
                  <table className="table">
                    <tbody><tr>
                        <td>
                          <input type="email" className="form-control" id="mailtip2" placeholder="Your e-mail" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input className="form-control" type="text" placeholder="Subject" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <textarea className="form-control" rows={4} placeholder="Message text . . ." defaultValue={""} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <button className="btn btn-danger btn-sm" style={{width: '100%'}}><i className="fa fa-envelope-o" style={{paddingRight: '5px'}} /> Send</button>
                        </td>
                      </tr>
                    </tbody></table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
)