import { useState } from "react";
import noImageForSelected from "../../assets/no-image-selected.jpg";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [stars, setStars] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [submitted, setSubmitted] = useState("");
  const [image, setImage] = useState(noImageForSelected);

  const createBooks = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("stars", stars);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("thumbnail", thumbnail);

    try {
      // ************************We cannot send image with the application/json

      // const response = await fetch("http://localhost:4000/api/books", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     title: title,
      //     slug: slug,
      //     stars: stars,
      //     description: description,
      //     category: category,
      //   }),
      // });

      const response = await fetch("http://localhost:4000/api/books", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setTitle("");
        setSlug("");
        setDescription("");
        setStars(0);
        setSubmitted(true);
      } else {
        console.log("Failed to submit data.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryChanged = (e) => {
    setCategory(e.target.value.split(",").map((category) => category.trim()));
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setThumbnail(e.target.files[0]);
    }
  };

  return (
    <>
      <div>
        <h1>Create Book</h1>

        {submitted ? (
          <p>Data Submitted SuccessFully</p>
        ) : (
          <form className="bookdetails" onSubmit={createBooks}>
            <div className="col-1">
              <label>Upload Thumbnail</label>
              <img src={image} alt="preview image" />
              <input
                type="file"
                accept="image/gif , image/jpeg , image/png"
                onChange={onImageChange}
              />
            </div>
            <div className="col-2">
              <div>
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Stars</label>
                <input
                  type="text"
                  value={stars}
                  onChange={(e) => {
                    setStars(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  type="text"
                  rows="4"
                  cols="50"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Category (comma-seperated)</label>
                <input
                  type="text"
                  value={category}
                  onChange={handleCategoryChanged}
                />
              </div>
              <input type="submit" />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default CreateBook;
