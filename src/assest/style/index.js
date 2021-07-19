import styled from "styled-components";
import timeUrl from '../images/time.png'

export const DemoContainer = styled.div`
  width: 7.5rem;   
  .title {
    width: 100%;
    height: .88rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .3rem;
    font-weight: 500;
    color: #1A1A1A;
    background: #fff;
  }
  .sub-title {
    margin: .5rem .4rem .3rem;
    font-size: .3rem;
    font-weight: 500;
    line-height: .3rem;
    color: #1A1A1A;
  }
  .checked-time {
    width: 6.9rem;
    height: 1.36rem;
    margin: 0 .3rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    font-size: .3rem;
    .icon {
      width: .4rem;
      height: .4rem;
      margin: 0 20px;
      background: url(${timeUrl}) center center / .4rem .4rem no-repeat; 
    }
    .checked-info {
      flex: 1;
      width: 1px;
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      justify-content: center;
      .info-label {
        color: #7C7C7C;
        line-height: .36rem;
      }
      .time {
        line-height: .36rem;
      }
    }
   
    .btn {
      width: 1.2rem;
      height: .56rem;
      margin: 0 18px;
      border: 1px solid #7C7C7C;
      border-radius: .44rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .28rem;
    }
  }
  
`

