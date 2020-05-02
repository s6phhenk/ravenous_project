
const apikey = 'YWzz0QVcl6YgHeMAjyULRI5_zGYE-n4RLnhKHkm6Dbh6Zkr31LDUuNL3w6jXP68anQ56LzlOjUbdQ0sJksb3Yo-akkHqx';

const Yelp = {
    searchYelp (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
        headers: {
            'Authorization' : `Bearer ${apiKey}`
        }
        }).then( response => {
            response.json();
        }).then( jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    // for each business in the array, return an object with the following key/value pairs
                    return {
                        id : business.id,
                        imageSrc : business.image_url,
                        name : business.name,
                        address : business.location.address1,
                        city : business.location.city,
                        state : business.location.state,
                        zipCode : business.location.zipCode,
                        category : business.categories[0].title,
                        rating : business.rating,
                        reviewCount : business.reviewCount
                    }
                });
            }
        });
    }
};

export default Yelp;