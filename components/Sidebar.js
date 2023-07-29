import Image from "next/image"
import useQuiosco from "../hooks/useQuisco"
import Categoria from "./Categoria";


  const Sidebar =() => {
    const {categorias}  = useQuiosco()

    return (
      <>
          <Image className="p-4" width={200} height={100} src="/assets/img/logo.svg" alt="Imagen logo"/>
      
          <nav className="mt-10">
            {categorias.map(categoria => (
              <Categoria
                key={categoria.id}
                categoria={categoria}
              />
            ))}
          </nav>
      </>
    )
  }
export default Sidebar
