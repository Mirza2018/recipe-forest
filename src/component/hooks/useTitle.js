import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title=`${title} - Recipe Forest`
    }, [title])
}
export default useTitle;