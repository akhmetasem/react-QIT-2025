const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?apikey=17dec6d0&s=${query}`
        );

        if (response.data.Response === 'False') {
            onSearch([]);
            return;
        }

        onSearch(response.data.Search || []);
    } catch (error) {
        console.error("Oshibka", error);
    } finally {
        setIsLoading(false);
    }
};
