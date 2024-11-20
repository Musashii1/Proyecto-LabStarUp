import Form from "react-bootstrap/Form";

export const Abogados = (props: any) => {
  console.log(props);
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-5 mt-5 pb-4">
        <Form noValidate>
          <div className="card">
            <div className="card-header">
              <h5 className=" rojito">Solicitud abogado</h5>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <Form.Group controlId="nombrePelicula">
                  <Form.Label>
                    <span className="rojito">*</span> Nombres
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="Nombres" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="pro">
                  <Form.Label>
                    <span className="rojito">*</span> Apellidos
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="Apellidos" />
                </Form.Group>
              </div>

              <div className="mb-3">
                <Form.Group controlId="gen">
                  <Form.Label>
                    <span className="rojito">*</span> Problema
                  </Form.Label>
                  <Form.Control size="sm" required type="text" name="Problema" />
                </Form.Group>
                

              <div className="mb-3">
                <Form.Group controlId="fot">
                  <Form.Label>
                    <span className="rojito">*</span> Documento:
                  </Form.Label>
                  <Form.Control
                    size="sm"
                    accept="image/png, image/jpeg"
                    // ref={fileInputRef}
                    type="file"
                    name="Documento"
                  />
                </Form.Group>
              </div>

            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </div>
        </Form>
      </div>
    </div>
  );
};
