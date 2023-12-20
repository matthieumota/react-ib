import { useEffect, useState } from 'react';
import axios from 'axios';

function Example() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Avec fetch pour les puristes
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    //   .then(response => setUsers(response));

    axios.get('https://jsonplaceholder.typicode.com/users').then(response => setUsers(response.data));
  };

  return (
    <ul>
      {users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2').then(response => {
      setPosts([ ...posts, ...response.data ]); // Fusion des tableaux
    });
  }

  useEffect(fetchPosts, []);
  
  return (
    <>
      <h2>Articles</h2>
      {posts.map(post =>
        <div key={post.id}>
          <strong>-- {post.title}</strong>
        </div>  
      )}
      <button onClick={() => fetchPosts()}>Go</button>
    </>
  )
}

const Cats = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => fetchCats(), []);

  const fetchCats = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10').then(response => {
      setCats(response.data);
    });
  }

  return (
    <>
      <h2>Chats</h2>
      {cats.map(cat =>
        <div key={cat.id}>
          <img src={cat.url} width={100} />
        </div>
      )}
      <button onClick={() => fetchCats()}>Go</button>
    </>
  );
}

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => fetchPhotos(), [page]);

  const fetchPhotos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+page).then(response => {
      setPhotos([ ...photos, ...response.data ]);
    });
  }

  return (
    <div style={{ width: 500, margin: 'auto' }}>
      <h2>Photos</h2>
      {photos.map(photo =>
        <div key={photo.id}>
          {photo.id}
          <img src={photo.url} width={100} />
        </div>
      )}
      <button onClick={() => setPage(page + 1)}>Go</button>
    </div>
  );
}

function Ajax1() {
  return (
    <div>
      <p>Voici un exemple où on va récupèrer des données sur une API en AJAX</p>
      <Example />

      <p>Créer un composant Posts qui va chercher des articles sur https://jsonplaceholder.typicode.com/posts</p>
      <p>Ajouter un bouton dans ce composant qui va chercher à nouveau les articles et les ajoute à la liste (Peu importe si on a des doublons)</p>
      <Posts />

      <p>Créer un composant Cats qui va afficher 10 images aléatoires de chats avec l'API https://developers.thecatapi.com</p>
      <Cats />

      <p>Créer un composant Photos qui va chercher des images sur https://jsonplaceholder.typicode.com/photos</p>
      <p>Attention, on limitera le nombre de résultats à 10 par défaut (sur les 5000)</p>
      <p>Ajouter un bouton dans ce composant qui va chercher les 10 prochaines photos et les ajoute à la liste</p>
      <Photos />
    </div>
  );
}

export default Ajax1
