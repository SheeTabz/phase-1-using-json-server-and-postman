fetch('http://localhost:3000/articles')
.then(res => res.json())
.then(data => console.log(data))
