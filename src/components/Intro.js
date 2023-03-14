
// anak dari apps js, atau parents = app dan children = intro
// perbedaan function components lebih mudah mengolah data

function Intro(props) {
    // console.log('parameter kiriman : ', props.name)
  return (
    <div>
 
      <section>
        <h1>Hallo nama saya : {props.name}</h1>
      </section>
    </div>
  );
}

export default Intro;
