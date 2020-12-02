const currentState = {
  entities: {
    users: {
      2: {
        id: 2,
        username: 'blue_macaw',
        imgUrl:
          'https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg',
      },
    },
    shots: {
      1: {
        id: 1,
        imgUrl:
          'https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg',
        authorId: 11,
        likesCount: 121,
        collectionId: 12,
      },
    },
    comments: {
      1: {
        id: 1,
        body: 'neat design',
        commentee_id: 2,
        commenter_id: 1,
      },
    },
    likes: {
      1: {
        id: 1,
        liker_id: 1,
        likable_type: 'comment',
        likable_id: 1,
      },
      2: {
        id: 2,
        liker_id: 2,
        likable_type: 'shot',
        likable_id: 1,
      },
    },
    imageTags: {
      1: {
        id: 1,
        shot_id: 2,
        tag_id: 3,
      },
    },
    tag: {
      3: {
        id: 3,
        tagName: 'Animation',
      },
    },
    collections: {
      12: {
        id: 12,
        userId: 2,
        title: 'mobile designs',
      },
    },
  },
  ui: {
    loading: true,
    modal: true,
    theme: 'dark',
  },
  errors: {
    login: ['Incorrect username/password combination'],
    chirpForm: ['Chirp body cannot be blank'],
  },
  session: { currentUserId: 1 },
};
