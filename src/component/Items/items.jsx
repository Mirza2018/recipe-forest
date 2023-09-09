import Recipie from '../Recipie/Recipie';
import { useLoaderData } from 'react-router-dom';
import Item from './Item';

const Items = () => {
    const recipes = useLoaderData()
    console.log(recipes);
    return (
        <div>
            {/* {
                recipes.map(recipi =>
                    <Item
                        key={recipi.id}
                        recipi={recipi}>
                    </Item>)
            } */}
            frtrtr

        </div>
    );
};

export default Items;