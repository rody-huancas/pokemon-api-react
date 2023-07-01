export const getColor = (type) => {
    switch (type) {
        case "bug":
            return "#aedf78";
        case "water":
            return "#43ccff";
        case "grass":
            return "#00ca91";
        case "fire":
            return "#e95c4d";
        case "normal":
            return "#a5a5a5";
        case "poison":
            return "#611380";
        case "electric":
            return "#f9be00";
        case "ground":
            return "#bfac21";
        case "fairy":
            return "#f87ea7";
        case "fighting":
            return "#e81319";
        case "psychic":
            return "#8a0532";
        case "ghost":
            return "#8e55a4";
        case "rock":
            return "#776a3e";
        case "ice":
            return "#66d1e5";
        case "flying":
            return "#5eb9b2";
        case "dark":
            return "#2d221c";
        case "dragon":
            return "#29036a";
        case "steel":
            return "#7b8e8a";
        case "unknown":
            return "#454545";
        case "shadow":
            return "#4f4f4f";
        default:
            return "#00c36f";
    }
};

export const getColorEtiqueta = (type) => {
    switch (type) {
        case "bug":
            return "#9ccd5e";
        case "water":
            return "#2da8ff";
        case "grass":
            return "#00b88f";
        case "fire":
            return "#e80d0d";
        case "normal":
            return "#8e8989";
        case "poison":
            return "#6b1b99";
        case "electric":
            return "#fbbc01";
        case "ground":
            return "#b49c29";
        case "fairy":
            return "#fc6dab";
        case "fighting":
            return "#dc0f19";
        case "psychic":
            return "#910825";
        case "ghost":
            return "#9363ab";
        case "rock":
            return "#7c703d";
        case "ice":
            return "#00c7e1";
        case "flying":
            return "#00b3ac";
        case "dark":
            return "#302821";
        case "dragon":
            return "#2b0765";
        case "steel":
            return "#708c84";
        case "unknown":
            return "#383838";
        case "shadow":
            return "#424242";
        default:
            return "#00c36f";
    }
};
