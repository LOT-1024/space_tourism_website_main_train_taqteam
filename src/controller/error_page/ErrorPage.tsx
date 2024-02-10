import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage():JSX.Element{
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {
            return (
                <p>Error Message: {error.status}</p>
            )
        }
        else if (error.status === 404){
            return(
                <p>Error Message: {error.status}</p>
            )
        }

        return(
            <div>
                <h1>Oops! {error.status}</h1>
                <p>{error.statusText}</p>
                {error.data?.message &&  (
                    <p>
                        <i>{error.data.message}</i>
                    </p>
                )}
            </div>
        )
    } else if (error instanceof Error) {
        return (
            <div>
                <h1>Oops! Unexpected Error</h1>
                <p>Something went wrong.</p>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        )
    } else {
        return (
        <div>Something Wrong</div>
      )
    }
}

export default ErrorPage