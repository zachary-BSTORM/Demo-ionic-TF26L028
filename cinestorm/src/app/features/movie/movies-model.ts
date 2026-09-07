export interface Movie{
    id : number;
    title : string;
    description: string;
    year : number;
    imageUrl : string;
}


export interface CreateMovie{
    title : string;
    description: string;
    year : number;
    imageUrl : string;
}

export interface UpdateMovie{
    id : number;
    title : string;
    description: string;
    imageUrl : string;
}

