import React, { FC } from 'react';

interface DataProps {
    className?: string;
    file: any;
    setFile: any;
    fileRef: any;
    children: any;
}

export const FileInput: FC<DataProps> = ({ className, children, file, setFile, fileRef }) => {

    return (
        <>
            <button
                className={`${className}`}
                onClick={() => fileRef?.current.click()}
                type="button"
            >
                {children}
            </button>
            <input
                accept="application/pdf"
                className="hidden"
                onChange={(event) => setFile(event.target.files)}
                ref={fileRef}
                type="file"
            />
        </>
    );
};
