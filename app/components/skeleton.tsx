import React from 'react'

const Skeleton = ({width, height}:{width: string, height:string}) => {
  return (
    <div className={`flex items-center justify-cente  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700`} style={{width, height}}>
    <span className="sr-only">Loading...</span>
</div>
  )
}

export default Skeleton
