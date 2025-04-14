import React from 'react'

const Copyright = ({classname}) => {
    return (
        <div className={`w-full flex justify-center p-4 text-center ${classname}`}>
            <p className="text-sm text-gray-400">
                <span className="font-Audiowide! font-medium">StudyRex </span>
                &copy; {new Date().getFullYear()} Solanki Singha. All Rights Reserved.
            </p>
        </div>
    )
}

export default Copyright