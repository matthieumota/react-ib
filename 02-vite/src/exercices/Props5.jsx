function Instruction() {
    return (
        <div>
            <p>
                <a href="https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children">
                    Documentation sur la délégation via les props
                </a>
            </p>
            <p>
                Le component TitleComponent prend des enfants à l'intérieur de sa balise. En vous basant sur TitleComponent, créer un composant Card qui prendra en enfant un titre h2, un paragraphe et un bouton.
            </p>
            <p>
                Depuis votre composant Card, générer les enfants de ce composant via les props comme dans TitleComponent
            </p>
            <p>Créer un composant Footer qui sera appelé à la fin de notre composant App.</p>
            <p>Donner à ce composant des balises enfants dont un paragraphe et une liste.</p>
            <p>Dans le composant Footer, générer ces enfants via les props.</p>
        </div>
    )
}

function TitleComponent({ children }) {
    return ( // Tous les éléments contenus dans children sont rendus ici
        <h1>{children}</h1>
    )
}

const Card = ({ children }) => {
    const style = { // On peut gérer le CSS ici (dynamique...)
        boxShadow: '1px 1px 4px #e6e6e6',
        padding: 10,
        width: 300,
        borderRadius: 10
    }
  
    return (
        <div style={style}>
            {children}
        </div>
    )
}

const Footer = ({ children }) => <footer>{children}</footer>

function Props5() {
    return (
        <div>
            <TitleComponent>
                Je suis un children de titleComponent
            </TitleComponent>
            <TitleComponent>
                <span>Nous sommes des children</span>
                <span>De Title Component</span>
            </TitleComponent>
            <Instruction />
            <Card>
                <h2>Titre</h2>
                <p>Contenu</p>
                <button>Envoyer</button>
            </Card>
            <Footer>
                <p>Copyright</p>
                <ul>
                    <li>A</li>
                </ul>
            </Footer>
        </div>
    )
}

export default Props5
