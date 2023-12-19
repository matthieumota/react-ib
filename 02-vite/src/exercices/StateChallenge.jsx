import React from 'react';

function StateChallenge() {
    const [animals, setAnimals] = React.useState([
        {
            name: 'Trolilo',
            type: 'troll'
        },
        {
            name: 'Sheep sheep',
            type: 'poisson'
        },
        {
            name: 'Donald Trump',
            type: 'orange'
        }
    ]);
    const [newAnimalType, setNewAnimalType] = React.useState('');
    const [newAnimalName, setNewAnimalName] = React.useState('');

    const saveAnimal = () => {
        setAnimals([ ...animals, { name: newAnimalName, type: newAnimalType } ]);
        setNewAnimalName('');
        setNewAnimalType('');
    }

    return (
        <div>
            <ul>
                <li>
                    Afficher la liste des animaux dans une boucle map. Pour chaque animal, afficher son nom et son type.
                    <ul>
                        {animals.map((animal, index) =>
                            <li key={index}>{animal.name} - {animal.type}</li>
                        )}
                    </ul>
                </li>
                <li>
                    Créer un input texte qui permet de saisir la valeur du state newAnimalType. Quand sa valeur change, la valeur de newAnimalType est mise à jour.
                    <input type="text" value={newAnimalType} onChange={(e) => setNewAnimalType(e.target.value)} />
                </li>
                <li>
                    Créer un autre input texte qui permet de saisir la valeur du state newAnimalName, avec le même fonctionnement.
                    <input type="text" value={newAnimalName} onChange={(e) => setNewAnimalName(e.target.value)} />
                </li>
                <li>
                    Créer une fonction vide saveAnimal, et l'appeler depuis un bouton que vous créerez également.
                    <button onClick={saveAnimal}>Sauvegarder</button>
                </li>
                <li>
                    Remplir la fonction saveAnimal tel que les valeurs newAnimalType et newAnimalName sont sauvegardées dans un nouvel objet animal,
                    que la fonction mette le tableau des animaux à jour en ajoutant le nouvel objet animal à la fin et qu'une fois que l'animal a été créé,
                    la fonction vide les champs newAnimalType et newAnimalName.
                </li>
                <li>Bon courage !</li>
            </ul>
        </div>
    )
}

export default StateChallenge
