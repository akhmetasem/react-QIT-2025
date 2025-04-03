import {useEffect }  from 'react';



useEffect(() {
    const fetchMovie = async () => {
        try{
            const response = await axios.get(
                
            );
            if (response.data.Response === 'False'){
                throw new Error (response.data.Error);
            }
            setMovie(response.data);
        }catch (err) {
            seterror(err.message)
        } finally {
            setloading(false);
        }
    };
    fetchMovie();
})

