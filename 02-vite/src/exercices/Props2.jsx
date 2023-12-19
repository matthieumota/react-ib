function Instruction() {
    return (
        <div>
            <p>
                <a href="https://react.dev/learn/passing-props-to-a-component">Documentation sur les composants et les props</a>
            </p>
            <p>
                En vous basant sur l'exemple de Title, créer un composant Button qui prendra en props un texte, et qui sera affiché à l'intérieur de ce bouton.
            </p>
            <p>Appeler ce bouton deux fois en lui envoyant pour props "Bubu", et "bababa"</p>
            <p>Créer un composant Image qui va afficher une image, et qui prend une clé src en guise de props</p>
            <p>Appeler cette image en lui envoyant cette adresse comme prop de src :
                https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg
            </p>
        </div>
    )
}

function Title({ title }) {
    return (
        <h1>{title}</h1>
    )
}

const Button = ({ text }) => <button>{text}</button>;
const Image = ({ source }) => <img src={source} width={300} />;

function Props2() {
    return (
        <div>
            <Title title="Bonjour" />
            <Instruction />
            <Button text="Bubu" />
            <Button text="bababa" />
            <Image source="https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg" />
        </div>
    )
}

export default Props2
