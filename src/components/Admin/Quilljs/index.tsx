import React from 'react';
import { useQuill } from 'react-quilljs';
import styles from './style.module.scss';
import 'quill/dist/quill.snow.css';

interface IQuilljs {
    setContent: React.Dispatch<React.SetStateAction<string>>
}

export function Quilljs ({ setContent }: IQuilljs) {

    const { quill, quillRef } = useQuill();

    // Insert Image(selected by user) to quill
    const insertToEditor = (url: any) => {
        if (quill) {
            const range = quill.getSelection();

            if (range) {
                quill.insertEmbed(range.index, 'image', url);
            }
        }
    };

    // Upload Image to Image Server such as AWS S3, Cloudinary, Cloud Storage, etc..
    const saveToServer = async (file: string | Blob) => {
        const body = new FormData();
        body.append('file', file);

        try {
            const res = await fetch('http://localhost:3333/post/image/', { method: 'POST', body })
            const data = await res.json()
            const image = data

            insertToEditor(image.src);

        } catch (error) {

            console.log('error')
            console.log(error)
        }
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
        };
    };

    React.useEffect(() => {
        if (quill) {
            // Add custom handler for Image Upload
            quill.getModule('toolbar').addHandler('image', selectLocalImage);
        }
    }, [quill]);

    React.useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setContent(quill.root.innerHTML)
            });
        }
    }, [quill]);

    return (
        <div className={styles.container}>
            <div ref={quillRef} />
        </div>
    );
};