import { Route, Routes } from "react-router-dom";

import { Contactos } from "../../componentes/otros/Contactos";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Abogados } from "../../componentes/solicitud/abogados";
import { Certificados } from "../../componentes/solicitud/certificados";
import { Mision } from "../../guia/mision"


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
	  
      <Route path="/Abogado" element={<Abogados />} />
      <Route path="/Certificado" element={<Certificados />} />
      <Route path="/Mision" element={<Mision />} />
      <Route path="/Contactos" element={<Contactos />} />

      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};