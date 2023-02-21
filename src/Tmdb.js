const API_KEY = 'd5c137af53cf85d58907c1af93a391f5';
const API_BASE = 'https://api.themoviedb.org/3';

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'originais',
                items: []

            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            }
        ];
    }
}