import devP from '../Images/project/devP.png'
import Medicall from '../Images/project/Medicall.png'
import devP2 from '../Images/project/devP2.png'
import Medicall2 from '../Images/project/Medicall2.png'
import tiendita from '../Images/project/tiendita.png'
import tiendita2 from '../Images/project/tiendita2.png'
import tiendita3 from '../Images/project/tiendita3.png'

export const serviImages = (images) => {
  const status = {
    devP: devP,
    Medicall: Medicall,
    devP2: devP2,
    Medicall2: Medicall2,
    tiendita: tiendita,
    tiendita2: tiendita2,
    tiendita3: tiendita3,
  }
  return status[images]
}