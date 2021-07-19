import React, { useState, useEffect } from 'react';
import './index.css'
interface OperationModalProps {
  visible: boolean;
  onDone: () => void;
  onCancel: () => void;
}

const TimeModal: FC<OperationModalProps> = (props) => {
  return(
    <div className={['time-modal', props.visible ? 'show' : 'hide'].join(' ')} onClick={props.onCancel}>
      time
    </div>
  )
}
export default TimeModal;