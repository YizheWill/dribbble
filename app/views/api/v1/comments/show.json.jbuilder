json.comment do
  json.body @comment.body
  json.commenter @comment.user.name
  json.commenterId @comment.user.id
  json.id @comment.id
  json.shotId @comment.shot.id
  json.commenterAvatarUrl @comment.user.avatar_url
  json.createdAt @comment.created_at
end
