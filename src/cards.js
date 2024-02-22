function cards(props) {
  return (
    <>
      <section className="section">
        <div className="cards-text">
          <div>
            <img src={props.data.LocImgURL} alt="" />
            <span>{props.data.Location}</span>
            <a href="">{props.data.GoogleMaps}</a>
          </div>
          <h3>{props.data.Title}</h3>
          <span>{props.data.StartDate} -</span>
          <span> {props.data.EndDate}</span>
          <p>{props.data.Description}</p>
        </div>

        <div className="image-div">
          <img src={props.data.ImageURL} alt="" />
        </div>
      </section>
    </>
  );
}

export default cards;
