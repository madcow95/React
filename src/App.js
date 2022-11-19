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
          return a.title.localeCompare( b.title );
        } );
        titleState( copiedTitle );
      }}>Sort Title</button>
      {
        modal && <Modal AppState={ title } TargetState={ target }/>
      }
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
export default App;
