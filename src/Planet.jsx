import React, {useEffect, useState, useCallback, useMemo} from 'react'

const getPlanet = (id) => {
    return fetch(`http://swapi.dev/api/planets/${id}/`).then(res => res.json())
        .then(result => result);
};

const useRequest = (request) => {
    const initialState = useMemo(() => ({
        data: null,
        loading: false,
        error: null
    }), []);

    const [data, setData] = useState(initialState);

    useEffect(() => {
        setData(initialState);

        let canceled = false;
        request().then(result => {
                if (!canceled) {
                    setData({
                        data: result.name,
                        loading: false,
                        error: null
                    });
                }
            })
            .catch((err) => {
                setData({
                    data: null,
                    loading: false,
                    error: true
                })
            });
        return () => canceled = true
    }, [request]);

    return data;
};

const usePlanetInfo = (id) => {
    return useRequest(useCallback(() => getPlanet(id), [id]));
};

const Planet = ({id}) => {
    const {data, loading, error} = usePlanetInfo(id);

    if (loading) {
        return <span>Loading...</span>
    }

    if (error) {
        return <span>Something is wrong</span>
    }

    return (
        <div>
            {id} - Planet name is {data}
        </div>
    )
};

export default Planet;
