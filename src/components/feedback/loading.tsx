import { loading } from "@customTypes/shared"
type loadingProps = { 
    loading : loading
    error : string | null
    children : React.ReactNode
}

const Loading = ({loading,error,children}:loadingProps) => {

    if(loading === 'pending'){
        return <p>Loading please wait</p>
    }

    if(loading === 'failed'){
        return <p>{error}</p>
    }
    return (
        <div>
            {children}
        </div>
    );
}

export default Loading;
