const postStub = {
    posts: [
            {   id: "post-id-11",
                title: "How to become a better programmer",
                author: "Janis Rubens",
                src:'https://www.dropbox.com/s/lmk7g950jiek5lu/1.jpeg?raw=1',
                createdAt: Date.now(),
                content: '\"Why does this config has so much sh*t, when all i want is export my files to /public/ folder\" - yeah, after following 10 webpack guides to finally put together your own config and still having doubts about some of the parts this or similar question might come to your mind and if that\'s the case continue reading. This is exactly the reason why i am writing this guide on how to set up webpack to do what most of us want. Setup that is simple to understand and yet manages to do the job'
            },
            {   id: "post-id-12",
                title: "How to become a better programmer",
                author: "Janis Rubens",
                src:'https://www.dropbox.com/s/2wq5jtiglnv5j1t/2.jpeg?raw=1',
                createdAt: Date.now(),
                content: '\"Why does this config has so much sh*t, when all i want is export my files to /public/ folder\" - yeah, after following 10 webpack guides to finally put together your own config and still having doubts about some of the parts this or similar question might come to your mind and if that\'s the case continue reading. This is exactly the reason why i am writing this guide on how to set up webpack to do what most of us want. Setup that is simple to understand and yet manages to do the job'
            },
            {   id: "post-id-13",
                title: "How to become a better programmer",
                author: "Janis Rubens",
                src:'https://www.dropbox.com/s/ckzv8ww02dg4s2e/3.jpg?raw=1',
                createdAt: Date.now(),
                content: '\"Why does this config has so much sh*t, when all i want is export my files to /public/ folder\" - yeah, after following 10 webpack guides to finally put together your own config and still having doubts about some of the parts this or similar question might come to your mind and if that\'s the case continue reading. This is exactly the reason why i am writing this guide on how to set up webpack to do what most of us want. Setup that is simple to understand and yet manages to do the job'
            },
            {   id: "post-id-14",
                title: "How to become a better programmer",
                author: "Janis Rubens",
                src:'https://www.dropbox.com/s/yl1g8s1mox7hck4/4.jpg?raw=1',
                createdAt: Date.now(),
                content: '\"Why does this config has so much sh*t, when all i want is export my files to /public/ folder\" - yeah, after following 10 webpack guides to finally put together your own config and still having doubts about some of the parts this or similar question might come to your mind and if that\'s the case continue reading. This is exactly the reason why i am writing this guide on how to set up webpack to do what most of us want. Setup that is simple to understand and yet manages to do the job'
            }
        ],
    getAll: () =>  {
        return new Promise( (res, rej) => {
            res(postStub.posts);
        })
    },
    getPostByID: (postID) => {
      return new Promise( (res, rej) => {
        const post = postStub.posts.filter( post => post.id === postID )
        res(post);
      })
    }

}

export default postStub
