const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, colors } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flexc-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill"
            style={{ backgroundColor: colors }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.rushlane.com/wp-content/uploads/2021/09/ford-india-dealers-unsold-cars.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
