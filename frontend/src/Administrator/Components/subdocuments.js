import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Subdocuments() {
    const [documents, setDocuments] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/getdocument')
            .then(response => {
                setDocuments(response.data.documents); // Assuming response.data.documents contains the grouped documents
            })
            .catch(error => {
                console.log('Error fetching documents:', error);
            });
    }, []);

    const truncate = (str, n) => {
        return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
    };

    return (
        <div className="flex flex-wrap justify-center" style={{ margin: '2%' }}>
            {Object.keys(documents).map(objectId => (
                <div key={objectId} className="w-full max-w-sm p-4 mb-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 mx-2">
                    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                        Document Owner: {documents[objectId][0].name}
                    </h5>
                   
                    <ul className="my-4 space-y-3">
                        {documents[objectId].map(doc => (
                            <li key={doc._id}>
                                <a href={`http://localhost:5000/documents/${encodeURIComponent(doc.doc)}`} target="_blank" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white" download>
                                    <span className="flex-1 ms-3 whitespace-nowrap">{truncate(doc.doc, 20)}</span>
                                    <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Download</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
