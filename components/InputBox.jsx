import { useRef, useState } from "react";
import Image from "next/image";

import { useSession } from "next-auth/client";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import firebase from "firebase";
import { db, storage } from "../firebase";

const InputBox = () => {
  // Get the User Session
  const [session] = useSession();

  // Input References
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  // Image to uploade State
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            // Progress
            null,
            (err) => console.error(err),
            () => {
              // When the upload Complete
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts")
                    .doc(doc.id)
                    .set({ postImage: url }, { merge: true });
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    // e.preventDefault();

    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => setImageToPost(readerEvent.target.result);
  };

  const removeImage = () => setImageToPost(null);

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          width={40}
          height={40}
          layout="fixed"
          src={session.user.image}
          className="rounded-full"
        />

        <form className="flex flex-1">
          <input
            type="text"
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name} ?`}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
          />

          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <Image
              width={65}
              height={40}
              src={imageToPost}
              alt="image to post"
              className="rounded-xl object-contain"
            />

            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />

          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />

          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>

          <input
            hidden
            type="file"
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />

          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
