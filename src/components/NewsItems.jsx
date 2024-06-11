const NewsItems = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-flex my-3 mx-3" style={{ maxWidth: "280px", height:"auto" }}>
            <img src={src ? src : "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-06/240607-hunter-biden-al-0939-f2db1b.jpg"} style={{ height: "200px", width: "278px" }} className="card-img-top" alt="Post_Image" />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "The son of President Joe Biden, guilty on three felony gun charges after a weeklong trial that focused on his history of drug addict."}</p>
                <a href={url} target="_blank" className="btn btn-warning">Read More</a>
            </div>
        </div>
    )
}

export default NewsItems