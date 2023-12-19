function Instruction() {
    return (
        <div>
            <div>
                <p>Créez un composant VegetablesCart et passez-lui en props les legumes.</p>
                <p>Dans le composant VegetablesCart, utiliser un composant Vegetable qui sera appelé autant de fois qu'il y a de légumes dans les props</p>
                <p>Dans le composant Vegetable, afficher le nom et le prix de chaque légume </p>
            </div>
            <div>
                <p>Créer un composant Students et passez-lui en props les élèves.</p>
                <p>Dans ce composant, utiliser un composant Student qui sera appelé autant de fois qu'il y a d'élèves dans les props</p>
                <p>Dans le composant Student, afficher l'élève dans une balise de votre choix</p>
            </div>
        </div>
    )
}

const Vegetable = ({ vegetable }) => <li>{vegetable.name} coûte {vegetable.price} €</li>;

const VegetablesCart = ({ vegetables }) => {
  return (
    <div>
      <h2>{vegetables.length} Légumes</h2>
      <ul>
        {vegetables.map((vegetable, index) =>
          <Vegetable vegetable={vegetable} key={index} />
        )}
      </ul>
    </div>
  );
}

const Student = ({ student }) => <li>{student.name} a {student.age} ans</li>

const Students = ({ students }) => (
  <div>
    <ul>
      {students.map((student, index) =>
        <Student student={student} key={index} />
      )}
    </ul>
  </div>
);

function Props3() {
    const vegetables = listVegetables();
    const students = listStudents();

    return (
        <div>
            <Instruction />
            <VegetablesCart vegetables={vegetables} />
            <Students students={students} />
        </div>
    );
}

/**
 * Cette fonction génère une liste de légumes en brut
 */
function listVegetables() {
    return [
        {
            name: 'Topinambour',
            price: 15,
        },
        {
            name: 'Pois chiche',
            price: 2,
        },
        {
            name: 'Salade',
            price: 999,
        },
        {
            name: 'Courgette',
            price: 1,
        },
        {
            name: 'Oignon',
            price: 2,
        },
    ]
}

/**
 * Cette fonction génère une liste d'élèves en brut
 */
function listStudents() {
    return [
        {
            name: 'Charly',
            age: 15,
        },
        {
            name: 'Bobbybillybouba',
            age: 12,
        },
        {
            name: 'JeanMichelDestroyer',
            age: 16,
        }
    ]
}

export default Props3
