json.extract! user, :id, :username, :session_token, :name, :bio, :avatar_url, :email, :personal_url, :portfolio_url, :portfolio_password, :twitter, :facebook, :github, :available, :location, :created_at, :tier
json.followers user.followers.pluck(:follower_id)
json.followings user.following do |u|
  json.userShot u.shots.first
  json.avatarUrl u.avatar_url
  json.name u.name
  json.id u.id
  json.createdAt u.created_at
  json.bio u.bio
  json.email u.email
end
json.shotComments user.shot_comments do |c|
  # json.partial! 'show', shot: s
  json.id c.id
  json.shotId c.shot.id
  json.imageUrl c.shot.image_url
  json.avatarUrl c.user.avatar_url
  json.artistName c.user.name
  json.createdAt c.created_at
  json.body c.body
  json.shotTitle c.shot.title
end

json.shots user.shots do |shot|
  json.imageUrl shot.image_url
  json.id shot.id
  json.artistId shot.user.id
  json.avatarUrl shot.user.avatar_url
  json.artistName shot.user.name
  json.likers shot.shotlikes.pluck(:id)
  json.commentCount shot.comments.length
  json.likeCount shot.shotlikes.length
  json.isImage shot.image_or_video
end
json.likedShots user.liked_shots do |shot|
  json.imageUrl shot.image_url
  json.id shot.id
  json.artistId shot.user.id
  json.avatarUrl shot.user.avatar_url
  json.artistName shot.user.name
  json.likers shot.shotlikes.pluck(:id)
  json.commentCount shot.comments.length
  json.likeCount shot.shotlikes.length
  json.isImage shot.image_or_video
end

json.collections user.collections do |collection|
  json.id collection.id
  json.collectionImages collection.shots
end
