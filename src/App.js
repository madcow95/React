import { useState } from 'react';
import './App.css';

function App() {

  let [ title, titleState ] = useState( [ { count : 0, title : "영화 추천", desc : "11월 13일" }, 
                                          { count : 0, title : "옷 추천", desc : "11월 15일" }, 
                                          { count : 0, title : "게임 추천", desc: "11월 23일" } ] );
  let [ modal, setModal ] = useState( false );
  let [ target, setTarget ] = useState( undefined );

  const firstdata = "블로그 제목 테스트 123";
  const likeUpdate = ( count, idx ) => {
    const copiedTitleArr = [ ...title ];
    copiedTitleArr[ idx ].count = count + 1;
    titleState( copiedTitleArr );
  }
  return (
    <div className="App">
      <div className='black-nav'><h3>This is blog page.</h3></div>

      {/* 같은 html 반복문(for, forEach가 사용이 안됨) 오히려 좋다 */}
      {
        title.map( ( ele, idx ) => {
          return (
            <div className='list' key = { idx } onClick={ () => { setTarget( idx ) } }>
              <h4 onClick={ () => { setModal( !modal ) } }>{ ele.title }</h4>
              <span onClick={ () => likeUpdate( ele.count, idx ) } style={ { cursor: "pointer" } }>👍 { ele.count }</span>
              <p>{ ele.desc }</p>
            </div>
          )
        } )
      }
      <h4 style={ {color : "red", fontSize : "40px"} }>{ firstdata }</h4>
      <button onClick={ () => { 
        const copiedTitle = [ ...title ];
        copiedTitle[0].title = "음악 추천";
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
      {
        // if 대용 3항연산자 주로 사용
        // 부모에 있는 state를 자식 ele에 전하기 위해 props를 이용한다.
        // state는 부모 -> 자식으로만 전송가능 역순으로는 불가능
        // color처럼 parameter형태로 데이터 전송 가능 함수도 전송가능
        modal && <Modal AppState={ title } TargetState={ target } color="yellow"/>
      }
    </div>
  );
}

const Modal = ( parentState ) => {
  let targetIdx = parentState.TargetState;
  return (
    <div className="modal" style={ { background : parentState.color } }>
      <h4>제목 : { parentState.AppState[ targetIdx ].title }</h4>
      <p>날짜 : { parentState.AppState[ targetIdx ].desc }</p>
      <p>좋아요 : { parentState.AppState[ targetIdx ].count }</p>
    </div>
  )
}
export default App;
