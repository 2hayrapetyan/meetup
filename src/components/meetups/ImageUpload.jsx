import { useRouter } from "next/router";
import { useMemo } from "react";

function ImageUpload({getImage}) {
    
  const locale = useRouter().locale

  const inputText = useMemo(
    () => ({
      hy: `կամ ընտրեք ֆայլը`,
      ru: `или выберите файл`,
      en: `or choose file`,
    }),
    []
  );

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result.split(',')[1];
          const fileName = file.name;
          const imageData = {
            base64,
            fileName,
          };
          getImage(imageData)
        };
        reader.readAsDataURL(file);
      }
    };
    
    return ( 
        <>
        <label htmlFor="image">{inputText[locale]}</label>
        <input type="file" name="image" id="image" onChange={handleImageChange}/>
        </>
     );
}

export default ImageUpload;
