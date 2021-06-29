import React from 'react';
import Card from './Card';

const CardList = ( {robots} ) => {

    return(
        <div>
            {
                robots.map( (name, i) => {
                    return  (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        mail={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    )
}


export default CardList;