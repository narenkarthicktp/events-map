
function ModifierPopup(props) {
  return (
    <div>
      <code>Imposter syndrome is real</code>
      <button onClick={() => props.setEvent({position: props.event.position, title:"yee", draggable:true})} >Move</button>
    </div>
  ); 
}

export default ModifierPopup;
