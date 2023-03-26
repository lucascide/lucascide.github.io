function RealStart({f}) {
    return (
        <div style={{display: 'grid', alignItems: 'center', justifyItems:'center'}}>
            <p style={{ fontSize: '4em', color: '#ffa500' }}>Ask to cabeça</p>
            <button onClick={f} style={{ height: '100px', width: '300px', backgroundColor: '#ffa500', color: 'black', fontSize: '2em' }}>
                Prosseguir
            </button>
        </div>
    );
}

export default RealStart;