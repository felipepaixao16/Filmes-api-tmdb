const sliders = document.querySelector(".carouselbox", "a-carouselbox", "b-carouselbox");
var scrollPerclick;
var ImagePadding = 20;

showMovieData()

var scrollAmount = 0;

function sliderScrollLeft() {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerclick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

function sliderScrollRight() {
    if (scrollAmount <= sliders.scrollWidth - sliders.scrollWidth) {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount += scrollPerclick),
        behavior: "smooth"
    });
}
}

async function showMovieData() {
    const api_key = "d5c137af53cf85d58907c1af93a391f5";
     

    var result = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" + 
        api_key +
        "&sort_by=popularity.desc"
        );

        result = result.data.results;

        result.map(function (cur, index) {
            sliders.insertAdjacentHTML(
                "beforeend",
                `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
            );
        });
    
        scrollPerclick = 400;
    }

const sliders1 = document.querySelector(".a-carouselbox");
var scrollPerclick1;
var ImagePadding1 = 20;
    
    showMovieData1()

    var scrollAmounta = 0;

    function asliderScrollLeft() {
        sliders1.scrollTo({
            top: 0,
            left: (scrollAmounta -= scrollPerclick1),
            behavior: "smooth"
        });
    
        if (scrollAmounta < 0) {
            scrollAmounta = 0
        }
    }
    
    function asliderScrollRight() {
        if (scrollAmounta <= sliders1.scrollWidth - sliders1.scrollWidth) {
        sliders1.scrollTo({
            top: 0,
            left: (scrollAmounta += scrollPerclick1),
            behavior: "smooth"
        });
    }
    }
    
    async function showMovieData1() {
        const aapi_key = "d5c137af53cf85d58907c1af93a391f5";
         
    
        var resulte = await axios.get(
            "https://api.themoviedb.org/3/discover/movie?api_key=" + 
            aapi_key +
            "&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
            );

            resulte = resulte.data.results;
    
            resulte.map(function (cur, index) {
                sliders1.insertAdjacentHTML(
                    "beforeend",
                    `<img class="img-${index} slider1-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
                );
            });
        
            scrollPerclick1 = 400;
        }

const sliders2 = document.querySelector(".b-carouselbox");
var scrollPerclick2;
var ImagePadding2 = 20;
            
    showMovieData2()
        
    var scrollAmountb = 0;
        
    function bsliderScrollLeft() {
        sliders2.scrollTo({
            top: 0,
            left: (scrollAmountb -= scrollPerclick2),
            behavior: "smooth"
        });
            
            if (scrollAmountb < 0) {
                scrollAmountb = 0
            }
        }
            
        function bsliderScrollRight() {
            if (scrollAmountb <= sliders2.scrollWidth - sliders2.scrollWidth) {
            sliders2.scrollTo({
                top: 0,
                left: (scrollAmountb += scrollPerclick2),
                behavior: "smooth"
            });
        }
        }
            
    async function showMovieData2() {
        const bapi_key = "d5c137af53cf85d58907c1af93a391f5";
                 
            
        var resulteb = await axios.get(
            "https://api.themoviedb.org/3/discover/tv?api_key=" + 
            bapi_key +
            "&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"
            );
        
            resulteb = resulteb.data.results;
            
            resulteb.map(function (cur, index) {
                sliders2.insertAdjacentHTML(
                    "beforeend",
                    `<img class="img-${index} slider1-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
                );
            });
                
            scrollPerclick2 = 400;
        }