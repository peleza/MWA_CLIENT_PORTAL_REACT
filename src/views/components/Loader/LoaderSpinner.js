import React from 'react';
import "./Loader.scss"

const LoaderSpinner = () => {
     const [loader, setLoader] = React.useState(false)
    return (
        <>
        &nbsp;<span className="spinner-border d-inline-block" />
        </>
    )
}

export default LoaderSpinner
// export const showLoader = (status) => {
//     setLoader(status)
// }

// export const hideLoader = (status) => {
//     setLoader(status)
// }


