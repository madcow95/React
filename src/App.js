import { useState } from 'react';
import './App.css';

function App() {

  let [ title, titleState ] = useState( [ { count : 0, title : "영화 추천", desc : "11월 13일" }, 
                                          { count : 0, title : "옷 추천", desc : "11월 15일" }, 
                                          { count : 0, title : "게임 추천", desc: "11월 23일" } ] );
  let [ modal, setModal ] = useState( false );
  let [ target, setTarget ] = useState( undefined );
  let [ inputValue, setInputValue ] = useState( "" );

  const firstdata = "블로그 제목 테스트 123";
  const likeUpdate = ( count, idx ) => {
    const copiedTitleArr = [ ...title ];
    copiedTitleArr[ idx ].count = count + 1;
    titleState( copiedTitleArr );
  }
  return (
    <div className="App">
      <div className='black-nav'><h3>This is blog page.</h3></div>

      {
        title.map( ( ele, idx ) => {
          return (
            <div className='list' key = { idx } onClick={ () => { setTarget( idx ) } }>
              <h4 onClick={ () => { setModal( true ) } }>{ ele.title }
                <span onClick={ ( e ) => { likeUpdate( ele.count, idx ); e.stopPropagation() } } style={ { cursor: "pointer" } }>👍 { ele.count }</span>
                <button onClick={ ( e ) => {
                  e.stopPropagation();
                  let copiedTitleArr = [ ...title ];
                  if( idx === 0 ) {
                    copiedTitleArr.splice( idx, idx + 1 );
                  } else {
                    copiedTitleArr.splice( idx, idx );
                  }
                  titleState( copiedTitleArr );
                } }>삭제</button>
              </h4>
              <p>{ ele.desc }</p>
            </div>
          )
        } )
      }
      <h4 style={ {color : "red", fontSize : "40px"} }>{ firstdata }</h4>
      <input type="text" onChange={ ( e ) => { setInputValue( e.target.value ); } }/>
      <button onClick={ () => {
        const copiedTitleArr = [ ...title ];
        const enteredTitle = inputValue;
        const dateStr = "11월 19일";
        copiedTitleArr.push(
          {
            title : enteredTitle,
            desc : dateStr,
            count : 0
          }
        );
        titleState( copiedTitleArr );
      } }>글 추가</button>
      { inputValue.length < 4 && <LengthCheckP/> }
      { modal && <Modal AppState={ title } TargetState={ target }/> }
    </div>
  );
}

const Modal = ( parentState ) => {
  let targetIdx = parentState.TargetState;
  return (
    <div className="modal">
      <h4>제목 : { parentState.AppState[ targetIdx ].title }</h4>
      <p>날짜 : { parentState.AppState[ targetIdx ].desc }</p>
      <p>좋아요 : { parentState.AppState[ targetIdx ].count }</p>
    </div>
  )
}

const LengthCheckP = () => {
  return (
    <p style={ { fontSize: "10px", color: "red" } }>4글자 이상 입력해주세요.</p>
  )
}
export default App;
