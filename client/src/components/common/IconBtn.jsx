import React from 'react'

const IconBtn = ({
    text,
    onClick,
    children,
    disable,
    outline = false,
    customClasses
}) => {
  return (
    <button
        disabled={disable}
        onClick={onClick}
        // type={type}
        className='flex items-center bg-yellow-50 cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 undefined'
    >
        {
            children ? (
            <>
                <span>
                    {text}
                </span>
                {children}
            </>
            ):(text)
        }
    </button>
  )
}

export default IconBtn