export namespace Api {
    export interface OutputSearchDto {
        id: string;
        totalRating: number;
        averageRating: number;
        imgSrc: string;
        market: string;
        price: number;
        title: string;
        [k: string]: unknown;
    }
}

export interface Api {
    version: "1";
    routes: {
        "/api/v1/search": {
            GET: {
                query: {
                    search: string;
                };
                response: Api.OutputSearchDto[];
            };
        };
    };
}
