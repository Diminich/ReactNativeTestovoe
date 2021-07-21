import quadcopterPhoto2 from './../imgs/2.png';
import quadcopterPhoto3 from './../imgs/3.png';
import quadcopterPhoto4 from './../imgs/4.png';

const ADD_ACTIVE_NAME_BUTTON = 'ADD_ACTIVE_NAME_BUTTON';

const initialState = {
    buttonsName: ['All', 'Cheap', 'Best', 'Fast'],
    activeNameButton: 'All',
    products: [{
            id: '1',
            img: quadcopterPhoto2,
            nameProduct: 'DJI Air 2S',
            priceProduct: 1424,
            ratingProduct: 4.2,
            descriptionProduct: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'
        },
        {
            id: '2',
            img: quadcopterPhoto3,
            nameProduct: 'DJI Mavic Mini',
            priceProduct: 990.90,
            ratingProduct: 4.5,
            descriptionProduct: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'
        },
        {
            id: '3',
            img: quadcopterPhoto4,
            nameProduct: 'DJS\' Matrice 200',
            priceProduct: 2780.30,
            ratingProduct: 3.8,
            descriptionProduct: 'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'
        }
    ]    
}

const quadcopterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVE_NAME_BUTTON:
            return {
                ...state,
                activeNameButton: action.nameButton
            }

        default:
            return state;
    }

}

export const nameButtonAC = (nameButton) => ({ type: ADD_ACTIVE_NAME_BUTTON, nameButton });

export default quadcopterReducer;