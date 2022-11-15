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
  let [ title, titleState ] = useState( [ "영화 추천", "옷 추천", "게임 추천" ] );
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
        반복문은 안써지네..?
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
      <button onClick={ () => { 
        const copiedTitle = [ ...title ];
        copiedTitle[0] = "음악 추천";
        // state를 사용할 때 변경 전 데이터와 변경 후 데이터가 같으면 변경 하지 않음.
        // array형 데이터는 저장할 때 값을 그대로 저장하는게 아닌 ram에 저장시키고 저장된 위치를 저장한다.
        // 그래서 title을 예로 들면 title[0] = "음악 추천" 처럼 변경 하면 "음악 추천"이라는 데이터는 다른 ram에 저장되고 0이 가리키는 저장 위치는
        // 전에 저장된 위치를 가르키기 때문에 전과 같은 데이터로 인식해 변경되지 않는다. => referenced data type
        titleState( copiedTitle );
      } }>Change Title</button>
      <button onClick={ () => {
        const copiedTitle = [ ...title ];
        copiedTitle.sort( ( a, b ) => {
          return a.localeCompare( b );
        } );
        titleState( copiedTitle );
      }}>Sort Title</button>
      {/* 홀리 쉿 개멋있어 */}
      <Modal/>
      <Button/>
    </div>
  );
}

// component 라고 한다.
const Modal = () => {
  return (
    // 의미없는 fregment 태그 -> <></> 따로 div를 안적고 이렇게 써도 정상적으로 태그로 인식
    /* 
     * component를 쓰면 좋을곳 
     * 1. 반복적인 html을 사용할 때
     * 2. 큰 페이지를 만들 때
     * 3. 자주 변경되는 UI
     */
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

const Button = () => {
  return (
    <>
      <button>HELLO</button>
    </>
  )
}

export default App;
