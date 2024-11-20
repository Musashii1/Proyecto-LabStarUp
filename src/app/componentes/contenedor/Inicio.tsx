import fotoPerfil1 from "../../../assets/abogado 1-200x200.jpg"
import fotoPerfil2 from "../../../assets/istockphoto-1056871522-612x612-200x200.jpg"
import fotoPerfil3 from "../../../assets/abogada 2.png"
import fotoPerfil4 from "../../../assets/abogada.png"
import fotoPerfil5 from "../../../assets/abogado pelon.png"

export const Inicio = () => {
    return (
      <>
        <div className="container my-5">
          <div className="p-5 text-center bg-body-tertiary rounded-3">
            <h1 className="text-body-emphasis">Bienvenido</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              A nuestra pagina web. Acá encontraras a nuestros mejores abogados y el mejor servicio
              sobre cualquier tipo de solicitud y asesoria que requieras.
            </p>
          </div>
        </div>

        <div className="list-group mt-5">

      <section className="bg-light pb-4">
        <div className="container-fluid">
          <div className="row pt-2">
            <div className="col-12">
              <h3 className="border-bottom mb-4">Abogados</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title"> Alex Sandoval</h5>
                  <p className="card-text">Abogado penalista</p>
                  <div className="text-center ">
                    <img src={fotoPerfil1} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Roberto Espinosa Saldarriaga</h5>
                  <p className="card-text">Abogado de derecho digital</p>
                  <div className="text-center ">
                    <img src={fotoPerfil2} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Katerine Ortega</h5>
                  <p className="card-text">Abogado de familia</p>
                  <div className="text-center ">
                    <img src={fotoPerfil3} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Luz Gutiérrez</h5>
                  <p className="card-text">Abogado laboral</p>
                  <div className="text-center ">
                    <img src={fotoPerfil4} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-3 d-flex align-items-stretch">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Carlos Brazer</h5>
                  <p className="card-text">Abogado especializado en derechos humanos</p>
                  <div className="text-center ">
                    <img src={fotoPerfil5} alt="Foto developer" width="220px" height="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
    );
  };