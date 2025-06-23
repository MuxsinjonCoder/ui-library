import React, { useState } from "react";
import { Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  setUploadedImage?: React.Dispatch<React.SetStateAction<string>>;
}

export default function ImageUpload({ setUploadedImage }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please, only upload image files (JPEG, PNG yoki GIF)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be maximum 5MB");
        return;
      }

      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      if (setUploadedImage) {
        setUploadedImage(imageURL);
      }
    }
  };

  const handleRemove = () => {
    if (setUploadedImage) {
      setUploadedImage("");
    }
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload"
      />
      {!preview && (
        <label htmlFor="image-upload" className="w-full">
          <Button
            type="button"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            <span className="flex items-center gap-5">
              <Image /> Upload image
            </span>
          </Button>
        </label>
      )}
      {preview && (
        <div className="mt-2 flex items-center justify-between gap-10">
          <img
            src={preview}
            alt="preview"
            className="max-w-[100px] rounded-sm shadow"
          />
          <Button
            className="w-[50%]"
            type="button"
            variant={"danger"}
            onClick={handleRemove}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
}
