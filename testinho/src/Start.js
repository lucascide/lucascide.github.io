import RealStart from './RealStart'


function buttonClicked(){
    return(

            <RealStart/>
    );
}

function Start({f}) {





    return (
        <div className='container divMain' style={{display: 'grid', backgroundColor:'#292929', width:'50vw', justifyItems: 'center', alignItems: "center", border: '1px solid gray'}}>
            
                <img src={require('./assets/cabeca.jpg')}
                    
                 style={{width:400, height: 400}}/>
                <button onClick={f} style={{height: '100px', width: '300px', backgroundColor:'#ffa500', color:'black', fontSize:'2em'}}>
                    Prosseguir
                </button>
        </div>
    );
}

export default Start;