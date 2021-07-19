import React, { useState, useEffect } from 'react';
import TimeModal from '../../components/timeModal'
import './demo.css'
const Demo: React.FC = () => {
  useEffect(() => {
    //
  })
  const [visible, setVisible] = useState<Boolean>(false);
  const [time] = useState<String>('6:00 PM - 7:00 PM on 2/14')
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDone = (data) => {
    console.log(data)
    setVisible(false);
  }
  const changeTime = () => {
    setVisible(true);
  }
  return (
    <div className="demo-box">
      <div className="title">Order Summary</div>
      <div className="sub-title">Delivery Information:</div>
      <div className="checked-time">
        <div className="icon"></div>
        <div className="checked-info">
          <div className="info-label">Delivery time:</div>
          <div className="time">{time}</div>
        </div>
        <div className="btn" onClick={changeTime}>Edit</div>
      </div>

      <TimeModal
        visible={visible}
        onDone={handleDone}
        onCancel={handleCancel}
      />
    </div>
  )
}
export default Demo;