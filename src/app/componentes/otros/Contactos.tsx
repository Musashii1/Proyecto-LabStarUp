export const Contactos = () => {
  return (
    <>
      <div className="container my-10">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Contactanos</h1>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            En este apartado puedes encontrar nuestros diferentes numeros en los cuales usted puede contactarnos. 
          </p>
        </div>
      </div>

<div className="list-group mt-5">

      <div className="list-group">
  <a href="#" className="list-group-item list-group-item-action bg-white" aria-current="true">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Linea telefonica</h5>
    </div>
    <p className="mb-1">018000390390</p>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Linea de WhatsApp</h5>
    </div>
    <p className="mb-1">3108779143</p>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Facebook</h5>
    </div>
    <p className="mb-1">LegalTech</p>
  </a>

  <a href="#" className="list-group-item list-group-item-action">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">Instagram</h5>
    </div>
    <p className="mb-1">@LegalTech_</p>
  </a>
</div>
</div>
    </>
  );
};