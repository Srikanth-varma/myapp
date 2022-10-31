// import React from "react";
// import ReactDOM from "react-dom";
// import ImageUploader from "react-images-upload";
// // import { Input } from "antd";

// // import "./styles.css";

// class UploadPhoto extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { pictures: [] };
//     this.onDrop = this.onDrop.bind(this);
//   }

//   onDrop(pictureFiles, pictureDataURLs) {
//     this.setState({
//       pictures: this.state.pictures.concat(pictureFiles),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <ImageUploader
//           withIcon={false}
//           withPreview={true}
//           label=""
//           // buttonText="Upload Images"
//           onChange={this.onDrop}
//           imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
//           maxFileSize={1048576}
//           fileSizeError=" file size is too big"
//           hidden
//         />
//       </div>
//     );
//   }
// }
// {/* <div class="fileUploader ">
//   <div class="fileContainer ">
//     <p class></p>
//     <div class="errorsContainer"></div>
//     <button type="button" class="chooseFileButton ">Choose images</button>
//   </div>
// </div> */}
// export default UploadPhoto;

import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

// import "./styles.css";

function UploadPhoto() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            > */}
            <div
              className="pastTripPopupText"
              onClick={onImageUpload}
              {...dragProps}
              style={isDragging ? { color: "red" } : null}
            >
              Add Photo 
              {/* <sapn style={{ fontSize: 10 }}>or drag and drop</sapn> */}
            </div>
            {/* </button> */}
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default UploadPhoto;
