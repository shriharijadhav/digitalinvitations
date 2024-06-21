import React, { useState } from 'react';

const ImageUploader = () => {
  // State to store the selected image file
  const [image, setImage] = useState(null);

  console.log(image)

  // Function to handle file input changes
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {image && (
        <div>
          <h2>Selected Image:</h2>
          <img src={URL.createObjectURL(image)} alt="Selected" width="300" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
