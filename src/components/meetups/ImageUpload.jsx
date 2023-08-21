function ImageUpload({ getImage, choose }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(",")[1];
        const fileName = file.name;
        const imageData = {
          base64,
          fileName,
        };
        getImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label htmlFor='image'>{choose}</label>
      <input type='file' name='image' id='image' onChange={handleImageChange} />
    </>
  );
}

export default ImageUpload;
