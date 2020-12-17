@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.commenter comment.user.name
    json.commenterId comment.user.id
    json.shotId comment.shot.id
    json.commenterAvatarUrl comment.user.avatar_url
    json.createdAt comment.created_at
  end
end
