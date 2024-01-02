function fbPost(props) {
  return (
    <div className="container">
      <div className="fbContainer">
        <img src={props.product.images} />
        <h1>{props.product.title}</h1>
      </div>
    </div>
  );
}


export default fbPost;