import { ComponentProps } from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

const contentStyle = { background: '#000', width: '80vw', height: '80vh' }
const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
const arrowStyle = { color: '#000' } // style for an svg element

export type ModalProps = ComponentProps<typeof Popup>

const Modal = (props: ModalProps) => (
  <Popup
    modal
    closeOnEscape
    closeOnDocumentClick={false}
    contentStyle={contentStyle}
    overlayStyle={overlayStyle}
    arrowStyle={arrowStyle}
    {...props}
  />
)

export default Modal

