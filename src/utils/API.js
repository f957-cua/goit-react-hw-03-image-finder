import axios from 'axios';

const key = '21268272-c5791a68db62a23d91af73a0c'

const instance = axios.create({
    baseURL: `https://pixabay.com/api`,
    params: {
        key,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12
    }
});

const getArr = (param) => {
    const urlParams = new URLSearchParams(param).toString();
    return instance.get(`?${urlParams}`).then(res => res.data.hits)
}

export default getArr