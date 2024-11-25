import { useState } from "react"
import '../styles/uploader.style.css'

export function Uploader() {

    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const file = event.target.files[0]
            setFile(file)
        }
    }

    const handleUpload = () => {
        if (file) {
            const formData = new FormData()
            formData.append('file', file)
            console.log('FormData', formData)
            // fetch('http://localhost:3001/upload', {
            //     method: 'POST',
            //     body: formData
            // })
        }
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange}/>
        {file && (
            <div id="information">
                <p>File name: {file.name}</p>
                <p>File type: {file.type}</p>
                <p>File size: {file.size}</p>
            </div>
        )}
        {file && (
             <button onClick={handleUpload}>Upload file</button>
        )}
    </div>
    )
}