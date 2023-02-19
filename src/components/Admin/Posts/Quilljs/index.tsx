import React from 'react';
import { useQuill } from 'react-quilljs';
import styles from './style.module.scss';
import 'quill/dist/quill.snow.css';
import { AxiosHttpClient } from 'infra/http/AxiosHttpClient';

interface IQuilljs {
  setContent: React.Dispatch<React.SetStateAction<string>>
  initialContent?: string
}

export function Quilljs({ setContent, initialContent }: IQuilljs) {

  const { quill, quillRef } = useQuill()

  // Insert Image(selected by user) to quill
  const insertToEditor = (url: any) => {
    const range = quill.getSelection()
    if (!range) return
    quill.insertEmbed(range.index, 'image', url)
  }

  // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
  const saveToServer = async (file: string | Blob) => {
    const client = AxiosHttpClient.getInstance()
    const image = await client.fileUpload('/post/image/', file)
    insertToEditor(image.src)
  }

  // Open Dialog to select Image File
  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        saveToServer(file);
      }
    }
  }

  React.useEffect(() => {
    if (!quill) return

    quill.root.innerHTML = initialContent

  }, [quill])


  React.useEffect(() => {
    if (!quill) return
    quill.getModule('toolbar').addHandler('image', selectLocalImage);
  }, [quill])


  React.useEffect(() => {
    if (!quill) return
    quill.on('text-change', () => {
      const base64 = Buffer.from(quill.root.innerHTML).toString('base64')
      console.log(base64)
      setContent(base64)
    })
  }, [quill]);

  return (
    <div className={styles.container}>
      <div ref={quillRef} />
    </div>
  );
};
