import { useState } from 'react';
import './App.css';

function App() {

  /**
   * 중요한? 자료는 state에 저장
   * a -> state에 보관했던 자료
   * b -> state 변경을 도와주는 함수
   * let [ a, b ] => destructuring 문법 : let [ a, b ] = [ 1, 2 ] => a = 1 / b = 2
   * state 사용 이유 => 변수는 갑자기 변경되면 html에 자동으로 변경이 되지 않음
   * state에 저장된 변수가 수정시 state쓰던 html을 자동으로 rendering이 됨
   * state를 변경 -> 등호로 변경금지 / state 변경 함수를 사용해야 재 rendering이 됨
   */
  let [ title, titleState ] = useState( [ "영화추천", "옷 추천", "게임 추천" ] );
  let [ likeCount, likeCountState ] = useState( 0 );

  const firstdata = "블로그 제목 테스트 123";
  // return 하는 element는 최상위 div 중복 작성이 안된다

  const likeUpdate = () => {
    likeCountState( likeCount++ );
  }

  return (
    <div className="App">
      <div className='black-nav'><h3>This is blog page.</h3></div>
      {/* {
        title.forEach( t => {
          <div className='list'>
            <h4>{ t }</h4>
            <p>11월 14일 발행</p>
          </div>
        } )
      } */}
      <div className='list'>
        <h4>{ title[0] } <span onClick={ likeUpdate } style={ { cursor: "pointer" } }>👍</span> { likeCount } </h4>
        <p>11월 14일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[1] }</h4>
        <p>11월 14일 발행</p>
      </div>
      <div className='list'>
        <h4>{ title[2] }</h4>
        <p>11월 14일 발행</p>
      </div>
      <h4 style={ {color : "red", fontSize : "40px"} }>{ firstdata }</h4>
    </div>
  );
}

export default App;
