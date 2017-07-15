import * as C from './constants'; 
import request from '../../utils/request';


export var sampleAction = (data) => {
    return {
        type: C.FETCH_IMAGES,
        payload: data
    };
};
export var fetchImages = () => {

    return function(dispatch) {
        request(C.APIENDPOINTS.GETIMAGES).then((response) => {
            response.push({pano: 'https://aframe.io/aframe/examples/boilerplate/panorama/puydesancy.jpg', name:'Puydesancy'});
            dispatch({
                type: C.FETCH_IMAGES,
                data: response
            });
        });

    };
};
